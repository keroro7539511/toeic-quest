#!/usr/bin/env python3
"""用 edge-tts 為題庫產生 AI 語音 MP3。

用法（在專案根目錄）：
    .venv/bin/python tools/gen_audio.py

會讀取 data/*.js，產生 audio/*.mp3 和 audio/manifest.js。
可重複執行：已產生過的檔案會跳過，只補新題目；題庫刪掉的音檔會被清掉。
"""
import asyncio
import hashlib
import json
import random
import re
import subprocess
import sys
from pathlib import Path

import edge_tts

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / 'audio'
CACHE = ROOT / 'tools' / '.clip-cache'

# 多益考美、英、澳、加四種口音，美式比重較高
FEMALE = ['en-US-AvaNeural', 'en-US-EmmaNeural', 'en-US-JennyNeural', 'en-US-AriaNeural',
          'en-GB-SoniaNeural', 'en-GB-LibbyNeural', 'en-AU-NatashaNeural', 'en-CA-ClaraNeural']
MALE = ['en-US-AndrewNeural', 'en-US-BrianNeural', 'en-US-GuyNeural', 'en-US-ChristopherNeural',
        'en-GB-RyanNeural', 'en-GB-ThomasNeural', 'en-AU-WilliamMultilingualNeural', 'en-CA-LiamNeural']
# 單字發音統一用清楚的美式
WORD_VOICES = ['en-US-AvaNeural', 'en-US-AndrewNeural']

CONCURRENCY = 8


def rng(key):
    """同一個 key 永遠得到同樣的隨機結果，重跑時聲音不會變。"""
    return random.Random(hashlib.sha1(key.encode()).hexdigest())


def load_data():
    """照 index.html 的 <script> 順序載入 data/，跟網頁看到的題庫完全一致。"""
    js = r"""
const fs = require('fs');
global.window = {};
const html = fs.readFileSync('index.html', 'utf8');
for (const m of html.matchAll(/<script src="(data\/[^"]+)"/g)) if (fs.existsSync(m[1])) require('./' + m[1]);
console.log(JSON.stringify(window));
"""
    return json.loads(subprocess.check_output(['node', '-e', js], cwd=ROOT))


NARRATOR = 'en-US-EricNeural'   # 模擬考的播音員（唸題號、說明），不跟題目角色重複
LETTERS = 'ABCD'


def fill(tpl, **kw):
    return re.sub(r'\{(\w+)\}', lambda m: str(kw[m.group(1)]), tpl)


def cast(key, roles):
    """為一段對話挑聲音：同性別的第二位角色用不同的聲音。"""
    r = rng(key)
    v = {'M': r.choice(MALE), 'W': r.choice(FEMALE)}
    v['M2'] = r.choice([x for x in MALE if x != v['M']])
    v['W2'] = r.choice([x for x in FEMALE if x != v['W']])
    return v


def options_seq(voice, opts, gap=700):
    seq = []
    for letter, opt in zip(LETTERS, opts):
        seq += [('say', voice, letter + '.'), ('pause', 200), ('say', voice, opt), ('pause', gap)]
    return seq


# ── 工作清單：key → [('say', voice, text) | ('pause', ms)] ──
def build_jobs(d):
    jobs = {}

    def single(text, voice):
        jobs.setdefault('t:' + text, [('say', voice, text)])

    for w, _pos, _zh, ex, *_rest in d['VOCAB']:   # 第 6 欄是級別（舊資料沒有）
        single(w, rng('w' + w).choice(WORD_VOICES))
        single(ex, rng('e' + ex).choice(FEMALE + MALE))

    for x in d['PART5']:
        filled = x['q'].replace('______', x['o'][x['a']], 1)
        single(filled, rng('p5' + filled).choice(FEMALE + MALE))

    for i, x in enumerate(d.get('PART1', [])):
        jobs['p1:%d' % i] = options_seq(rng('p1:%d' % i).choice(FEMALE + MALE), x['o'])[:-1]

    for i, x in enumerate(d['PART2']):
        r = rng('p2:%d' % i)
        qv, av = (r.choice(FEMALE), r.choice(MALE)) if r.random() < 0.5 else (r.choice(MALE), r.choice(FEMALE))
        jobs['p2:%d' % i] = [('say', qv, x['q']), ('pause', 900)] + options_seq(av, x['o'])
        single(x['q'], qv)  # 聽寫模式會用到問句

    for i, conv in enumerate(d['PART3']):
        voices = cast('p3:%d' % i, conv['lines'])
        seq = []
        for role, text in conv['lines']:
            seq += [('say', voices[role], text), ('pause', 400)]
            single(text, voices[role])  # 逐字稿的 🔊 按鈕
        jobs['p3:%d' % i] = seq[:-1]
        for q in conv['qs']:
            single(q['q'], NARRATOR)  # 聽力小模考：播音員唸題目

    for i, talk in enumerate(d.get('PART4', [])):
        pool = MALE if talk['speaker'] == 'M' else FEMALE
        jobs['p4:%d' % i] = [('say', rng('p4:%d' % i).choice(pool), talk['text'])]
        for q in talk['qs']:
            single(q['q'], NARRATOR)

    # Part 4 逐句精聽：每一句用同一位講者的聲音
    for key, parts in d.get('TRANS', {}).items():
        if key.startswith('p4:'):
            talk = d['PART4'][int(key[3:])]
            pool = MALE if talk['speaker'] == 'M' else FEMALE
            voice = rng(key).choice(pool)
            for en, _zh in parts:
                single(en, voice)

    # 開場猜情境：有 ref 的沿用原題組的聲音，聽起來跟完整版一致
    for i, g in enumerate(d.get('GIST', [])):
        ref = g.get('ref', '')
        if ref.startswith('p3:'):
            voices = cast(ref, None)
        elif ref.startswith('p4:'):
            talk = d['PART4'][int(ref[3:])]
            v = rng(ref).choice(MALE if talk['speaker'] == 'M' else FEMALE)
            voices = {'M': v, 'W': v}
        else:
            voices = cast('g:%d' % i, None)
        seq = []
        for role, text in g['lines']:
            seq += [('say', voices[role], text), ('pause', 350)]
        jobs['g:%d' % i] = seq[:-1]

    # 情境攻略本的開場句
    for sc in d.get('SCENES', []):
        for en, _zh in sc['openings'] + sc['questions']:
            single(en, rng('sc' + en).choice(FEMALE + MALE))
        for en, _zh in sc['vocab']:
            single(en, rng('w' + en).choice(WORD_VOICES))

    # ── 模擬考：每個單元一個音檔，包含題號、題目朗讀與作答停頓 ──
    X = d.get('EXAM_SCRIPT')
    if X:
        for n, dr in X['directions'].items():
            jobs['x:dir:%s' % n] = [('say', NARRATOR, dr['en'])]
        for mock in sorted(k for k in d if re.fullmatch(r'MOCK\d+', k)):
            jobs.update(mock_jobs(mock, d[mock], X))
    return jobs


def mock_jobs(mock, m, X):
    """流程與 js/exam.js 的 unitAudio() 相同。"""
    jobs, n = {}, 1
    short, long_ = X['pauseShort'], X['pauseLong']
    for i, x in enumerate(m['part1']):
        v = rng(f'{mock}:p1:{i}').choice(FEMALE + MALE)
        jobs[f'x:{mock}:p1:{i}'] = [('say', NARRATOR, fill(X['part1Intro'], n=n)), ('pause', 600)] \
            + options_seq(v, x['o'], 600) + [('pause', short)]
        n += 1
    for i, x in enumerate(m['part2']):
        r = rng(f'{mock}:p2:{i}')
        qv, av = (r.choice(FEMALE), r.choice(MALE)) if r.random() < 0.5 else (r.choice(MALE), r.choice(FEMALE))
        jobs[f'x:{mock}:p2:{i}'] = [('say', NARRATOR, fill(X['part2Intro'], n=n)), ('say', qv, x['q']), ('pause', 800)] \
            + options_seq(av, x['o'], 600) + [('pause', short)]
        n += 1
    for part in ('part3', 'part4'):
        for i, x in enumerate(m[part]):
            a, b = n, n + len(x['qs']) - 1
            si = X['setIntro']
            if part == 'part3':
                three = any(len(r) > 1 for r, _ in x['lines'])
                tpl = si['conversationGraphic'] if x.get('graphic') else si['conversation3'] if three else si['conversation']
                intro = fill(tpl, a=a, b=b)
                voices = cast(f'{mock}:p3:{i}', x['lines'])
                body = []
                for role, text in x['lines']:
                    body += [('say', voices[role], text), ('pause', 350)]
            else:
                tpl = si['talkGraphic'] if x.get('graphic') else si['talk']
                intro = fill(tpl, a=a, b=b, kind=X['talkNames'].get(x['kind'], 'talk'))
                pool = MALE if x['speaker'] == 'M' else FEMALE
                body = [('say', rng(f'{mock}:p4:{i}').choice(pool), x['text'])]
            seq = [('say', NARRATOR, intro), ('pause', 800)] + body + [('pause', 1000)]
            for k, q in enumerate(x['qs']):
                seq += [('say', NARRATOR, fill(X['questionRead'], n=a + k, q=q['q'])), ('pause', long_)]
            jobs[f'x:{mock}:p{part[-1]}:{i}'] = seq
            n = b + 1
    return jobs


# ── MP3 處理：edge-tts 輸出固定為 MPEG-2 Layer III / 24kHz / 48kbps / mono ──
BITRATES = [0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]  # MPEG-2 L3, kbps
SAMPLE_RATES = [22050, 24000, 16000]


def frames(data):
    """切出每個 MP3 frame（略過開頭的 ID3 與 LAME/Xing 標頭 frame）。"""
    i = 0
    if data[:3] == b'ID3':
        i = 10 + ((data[6] << 21) | (data[7] << 14) | (data[8] << 7) | data[9])
    out = []
    while i + 4 <= len(data):
        if data[i] != 0xFF or (data[i + 1] & 0xE0) != 0xE0:
            i += 1
            continue
        br = BITRATES[data[i + 2] >> 4] * 1000
        sr = SAMPLE_RATES[(data[i + 2] >> 2) & 3]
        pad = (data[i + 2] >> 1) & 1
        size = 72 * br // sr + pad
        if size <= 4:
            i += 1
            continue
        out.append(data[i:i + size])
        i += size
    if out and any(tag in out[0] for tag in (b'Xing', b'Info', b'LAME')):
        out = out[1:]
    return out


def silence(ms, header):
    """用全零的 frame 產生靜音（每個 frame = 576 samples = 24ms）。"""
    frame = header[:2] + bytes([header[2] & 0xFD, header[3]]) + bytes(140)  # 去掉 padding bit → 144 bytes
    return frame * max(1, round(ms / 24))


# ── 產生 ──
def clip_path(voice, text):
    return CACHE / (hashlib.sha1(f'{voice}|{text}'.encode()).hexdigest()[:16] + '.mp3')


async def make_clip(voice, text, sem):
    path = clip_path(voice, text)
    if path.exists() and path.stat().st_size > 0:
        return
    err = 'empty file'
    async with sem:
        for attempt in range(4):
            try:
                await edge_tts.Communicate(text, voice).save(str(path))
                if path.stat().st_size > 0:
                    return
            except Exception as e:  # 網路不穩就重試
                err = e
                path.unlink(missing_ok=True)
            await asyncio.sleep(1.5 * (attempt + 1))
        raise RuntimeError(f'產生失敗：{voice} {text!r}：{err}')


def assemble(seq):
    parts, header = [], None
    for step in seq:
        if step[0] == 'say':
            fs = frames(clip_path(step[1], step[2]).read_bytes())
            header = header or fs[0][:4]
            parts.append(b''.join(fs))
        else:
            parts.append(step)  # 先佔位，等拿到 header 再補靜音
    return b''.join(silence(p[1], header) if isinstance(p, tuple) else p for p in parts)


async def main():
    OUT.mkdir(exist_ok=True)
    CACHE.mkdir(parents=True, exist_ok=True)
    jobs = build_jobs(load_data())

    clips = {(s[1], s[2]) for seq in jobs.values() for s in seq if s[0] == 'say'}
    # 網路中斷時 edge-tts 會留下 0 byte 的空檔，要當作沒產生過
    todo = [c for c in clips if not clip_path(*c).exists() or clip_path(*c).stat().st_size == 0]
    print(f'共 {len(jobs)} 個音檔、{len(clips)} 段語音（需新產生 {len(todo)} 段）')

    sem = asyncio.Semaphore(CONCURRENCY)
    done = 0

    async def run(c):
        nonlocal done
        await make_clip(*c, sem)
        done += 1
        if done % 50 == 0 or done == len(todo):
            print(f'  {done}/{len(todo)}')

    await asyncio.gather(*(run(c) for c in todo))

    manifest = {}
    for key, seq in sorted(jobs.items()):
        name = hashlib.sha1(json.dumps(seq).encode()).hexdigest()[:16] + '.mp3'
        path = OUT / name
        if not path.exists():
            path.write_bytes(assemble(seq))
        manifest[key] = 'audio/' + name

    keep = set(Path(p).name for p in manifest.values())
    removed = 0
    for f in OUT.glob('*.mp3'):
        if f.name not in keep:
            f.unlink()
            removed += 1

    (OUT / 'manifest.js').write_text(
        '// 由 tools/gen_audio.py 自動產生，請勿手動修改\n'
        'window.AUDIO_FILES = ' + json.dumps(manifest, ensure_ascii=False, indent=0) + ';\n',
        encoding='utf-8')
    size = sum(f.stat().st_size for f in OUT.glob('*.mp3')) / 1e6
    print(f'完成：{len(manifest)} 個音檔，共 {size:.1f} MB' + (f'，清掉 {removed} 個舊檔' if removed else ''))


if __name__ == '__main__':
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        sys.exit(1)
