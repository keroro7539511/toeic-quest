#!/usr/bin/env node
// 題庫格式檢查：node tools/validate.js
// 會載入所有 data/ 題庫，檢查欄位、選項數、答案位置分布，以及模擬考題數是否符合正式多益。
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
global.window = {};
const files = [];
(function walk(dir) {
  for (const f of fs.readdirSync(dir).sort()) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) walk(p);
    else if (f.endsWith('.js')) files.push(p);
  }
})(path.join(ROOT, 'data'));
// 基本題庫先載入，extra/ 用 push 追加，mock 最後
const order = (p) => (p.includes('/extra/') ? 1 : p.includes('/mock') ? 2 : 0);
files.sort((a, b) => order(a) - order(b) || a.localeCompare(b));
for (const f of files) require(f);

const errors = [];
const warn = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const isStr = (s) => typeof s === 'string' && s.trim().length > 0;

function checkChoice(where, x, n) {
  if (!Array.isArray(x.o) || x.o.length !== n) return err(where, `需要 ${n} 個選項`);
  if (!x.o.every(isStr)) err(where, '選項不可空白');
  if (new Set(x.o).size !== n) err(where, '選項重複');
  if (!Number.isInteger(x.a) || x.a < 0 || x.a >= n) err(where, `a 必須是 0-${n - 1}`);
  if (!isStr(x.e)) err(where, '缺少中文解析 e');
}
function checkQs(where, qs, count) {
  if (!Array.isArray(qs) || (count && qs.length !== count)) return err(where, `qs 應有 ${count} 題`);
  qs.forEach((q, i) => { if (!isStr(q.q)) err(`${where}.q${i}`, '缺少題目 q'); checkChoice(`${where}.q${i}`, q, 4); });
}
const TABLE = (g) => Array.isArray(g.headers) && Array.isArray(g.rows) && g.rows.every((r) => Array.isArray(r) && r.length === g.headers.length);
function checkGraphic(where, g) {
  if (!g) return;
  if (!isStr(g.title)) err(where, 'graphic 缺少 title');
  if (g.kind === 'table') { if (!TABLE(g)) err(where, 'table 的 headers / rows 欄數不一致'); }
  else if (g.kind === 'bars') { if (!Array.isArray(g.items) || !g.items.every((it) => isStr(it[0]) && typeof it[1] === 'number')) err(where, 'bars items 應為 [label, number]'); }
  else if (g.kind === 'list') { if (!Array.isArray(g.items) || !g.items.every(isStr)) err(where, 'list items 應為字串陣列'); }
  else err(where, `未知的 graphic kind: ${g.kind}`);
}
const ROLES = ['M', 'W', 'M2', 'W2'];

const V = {
  part1(x, w) {
    if (!isStr(x.img) || !fs.existsSync(path.join(ROOT, x.img))) err(w, `找不到圖片 ${x.img}`);
    if (!isStr(x.alt)) err(w, '缺少 alt（圖片的文字描述）');
    checkChoice(w, x, 4);
  },
  part2(x, w) { if (!isStr(x.q)) err(w, '缺少 q'); checkChoice(w, x, 3); },
  part3(x, w) {
    if (!Array.isArray(x.lines) || x.lines.length < 3) return err(w, 'lines 至少 3 句');
    x.lines.forEach((l, i) => { if (!ROLES.includes(l[0]) || !isStr(l[1])) err(`${w}.line${i}`, '格式應為 [M|W|M2|W2, text]'); });
    checkGraphic(w, x.graphic);
    checkQs(w, x.qs, 3);
  },
  part4(x, w) {
    if (!['M', 'W'].includes(x.speaker)) err(w, 'speaker 應為 M 或 W');
    if (!isStr(x.kind)) err(w, '缺少 kind（announcement/voicemail/...）');
    if (!isStr(x.text)) err(w, '缺少 text');
    checkGraphic(w, x.graphic);
    checkQs(w, x.qs, 3);
  },
  part5(x, w) {
    if (!isStr(x.q) || !x.q.includes('______')) err(w, '題目需包含 ______');
    checkChoice(w, x, 4);
  },
  part6(x, w) {
    checkPassage(w, x.passage);
    const body = (x.passage && x.passage.body) || '';
    for (let i = 1; i <= 4; i++) if (!body.includes(`{{${i}}}`)) err(w, `內文缺少空格標記 {{${i}}}`);
    if (!Array.isArray(x.qs) || x.qs.length !== 4) return err(w, 'qs 應有 4 題');
    x.qs.forEach((q, i) => checkChoice(`${w}.q${i}`, q, 4));
    if (!x.qs.some((q) => q.type === 'insert')) err(w, '每篇需有 1 題句子插入（type: "insert"）');
  },
  part7(x, w) {
    if (!Array.isArray(x.passages) || !x.passages.length) return err(w, '缺少 passages');
    x.passages.forEach((p, i) => checkPassage(`${w}.p${i}`, p));
    checkQs(w, x.qs);
    const n = x.passages.length;
    if (n > 1 && x.qs.length !== 5) err(w, '多篇閱讀每組應有 5 題');
    if (n === 1 && (x.qs.length < 2 || x.qs.length > 4)) err(w, '單篇閱讀每組 2-4 題');
  },
};
const PASSAGE_KINDS = ['email', 'letter', 'memo', 'notice', 'ad', 'article', 'form', 'invoice', 'schedule', 'webpage', 'review', 'chat', 'text', 'report', 'announcement', 'receipt', 'survey', 'brochure'];
function checkPassage(w, p) {
  if (!p) return err(w, '缺少 passage');
  if (!PASSAGE_KINDS.includes(p.kind)) err(w, `kind 應為 ${PASSAGE_KINDS.join('/')}`);
  if (p.meta && !(Array.isArray(p.meta) && p.meta.every((m) => isStr(m[0]) && isStr(m[1])))) err(w, 'meta 應為 [[label, value]]');
  if (p.table && !TABLE(p.table)) err(w, 'table 的 headers / rows 欄數不一致');
  if (p.messages && !(Array.isArray(p.messages) && p.messages.every((m) => isStr(m[0]) && isStr(m[1]) && isStr(m[2])))) err(w, 'messages 應為 [[name, time, text]]');
  if (!isStr(p.body) && !p.table && !p.messages) err(w, 'passage 需要 body、table 或 messages');
}

function dist(items, n) {
  const c = new Array(n).fill(0);
  items.forEach((x) => { if (Number.isInteger(x.a)) c[x.a]++; });
  return c;
}
function checkDist(label, items, n) {
  if (items.length < n * 3) return;
  const c = dist(items, n);
  const avg = items.length / n;
  if (c.some((k) => k < avg * 0.6 || k > avg * 1.4)) warn.push(`${label} 答案分布不均：${c.map((k, i) => 'ABCD'[i] + k).join(' ')}`);
}

const W = global.window;
const PRACTICE = { part1: W.PART1, part2: W.PART2, part3: W.PART3, part4: W.PART4, part5: W.PART5, part6: W.PART6, part7: W.PART7 };
const summary = [];
for (const [k, arr] of Object.entries(PRACTICE)) {
  if (!arr) { summary.push(`${k}: (無)`); continue; }
  arr.forEach((x, i) => V[k](x, `${k}[${i}]`));
  const qs = ['part3', 'part4', 'part6', 'part7'].includes(k) ? arr.flatMap((x) => x.qs || []) : arr;
  summary.push(`${k}: ${arr.length} ${qs === arr ? '題' : `組 / ${qs.length} 題`}`);
  // 練習模式 Part 3-7 會在出題時打亂選項；Part 1/2 的選項順序錄在音檔裡，必須本身就平均
  if (k === 'part1' || k === 'part2') checkDist(`練習 ${k}`, qs, k === 'part2' ? 3 : 4);
}

// 模擬考
const SPEC = { part1: 6, part2: 25, part3: 39, part4: 30, part5: 30, part6: 16, part7: 54 };
for (const name of Object.keys(W).filter((k) => /^MOCK\d+$/.test(k))) {
  const m = W[name];
  let total = 0;
  const parts = [];
  for (const [k, need] of Object.entries(SPEC)) {
    const arr = m[k];
    if (!arr) { warn.push(`${name}.${k} 尚未完成`); continue; }
    arr.forEach((x, i) => V[k](x, `${name}.${k}[${i}]`));
    const qs = ['part3', 'part4', 'part6', 'part7'].includes(k) ? arr.flatMap((x) => x.qs || []) : arr;
    total += qs.length;
    parts.push(`${k}=${qs.length}`);
    if (qs.length !== need) err(`${name}.${k}`, `正式考試為 ${need} 題，目前 ${qs.length} 題`);
    checkDist(`${name}.${k}`, qs, k === 'part2' ? 3 : 4);
    if (k === 'part7') {
      const single = arr.filter((s) => s.passages.length === 1).flatMap((s) => s.qs).length;
      const dbl = arr.filter((s) => s.passages.length === 2).length;
      const tri = arr.filter((s) => s.passages.length === 3).length;
      if (single !== 29 || dbl !== 2 || tri !== 3) err(`${name}.part7`, `應為單篇 29 題 + 雙篇 2 組 + 三篇 3 組，目前單篇 ${single} 題、雙篇 ${dbl} 組、三篇 ${tri} 組`);
    }
    if (k === 'part3' && arr.length !== 13) err(`${name}.part3`, '應為 13 組對話');
    if (k === 'part4' && arr.length !== 10) err(`${name}.part4`, '應為 10 組獨白');
    if (k === 'part6' && arr.length !== 4) err(`${name}.part6`, '應為 4 篇');
  }
  summary.push(`${name}: ${total} 題（${parts.join(', ')}）`);
}

// 單字：不可重複、欄位齊全、級別 1–3（舊資料沒有級別 = 當作 2）
if (W.VOCAB) {
  const seen = new Set(), CATS = ['office', 'meeting', 'travel', 'hr', 'finance', 'marketing', 'production', 'general'];
  const tiers = { 1: 0, 2: 0, 3: 0 };
  W.VOCAB.forEach((v, i) => {
    const w = `VOCAB[${i}] ${v && v[0]}`;
    if (!Array.isArray(v) || v.length < 5 || !v.slice(0, 5).every(isStr)) return err(w, '格式應為 [單字, 詞性, 中文, 例句, 分類, 級別]');
    const k = v[0].toLowerCase();
    if (seen.has(k)) err(w, '單字重複'); seen.add(k);
    if (!CATS.includes(v[4])) err(w, `未知分類 ${v[4]}`);
    if (v[5] != null && ![1, 2, 3].includes(v[5])) err(w, '級別只能是 1、2、3');
    tiers[v[5] || 2]++;
  });
  summary.push(`單字：${W.VOCAB.length} 個（級別 1/2/3：${tiers[1]}/${tiers[2]}/${tiers[3]}）`);
}

// 難度（data/diff/）：每題（Part 3/4/6/7 為每組）都要有 1/2/3；小模考照 30/40/30 抽題
{
  const D = W.DIFF || {};
  const banks = [['', PRACTICE], ...Object.keys(W).filter((k) => /^MOCK\d+$/.test(k)).map((k) => [k + ':', W[k]])];
  const expected = new Set();
  for (const [pre, b] of banks) {
    const missing = [], dist = [];
    for (let p = 1; p <= 7; p++) {
      const arr = b['part' + p] || [];
      const c = { 1: 0, 2: 0, 3: 0 };
      arr.forEach((_, i) => {
        const key = `${pre}p${p}:${i}`;
        expected.add(key);
        if (D[key] == null) missing.push(key);
        else if (![1, 2, 3].includes(D[key])) err(`DIFF.${key}`, '難度只能是 1、2、3');
        else c[D[key]]++;
      });
      if (arr.length) dist.push(`P${p} ${c[1]}/${c[2]}/${c[3]}`);
    }
    const name = pre ? pre.slice(0, -1) : '練習題';
    if (missing.length) warn.push(`${name} 還沒有難度標籤：${missing.length} 個（${missing.slice(0, 5).join(', ')}${missing.length > 5 ? '…' : ''}）`);
    summary.push(`難度 ${name}（易/中/難）：${dist.join('・')}`);
  }
  Object.keys(D).filter((k) => !expected.has(k)).forEach((k) => err(`DIFF.${k}`, '找不到對應的題目'));
}
// 模擬考看圖題要放在 Part 3 / Part 4 的最後幾組（跟正式考試一樣）
for (const name of Object.keys(W).filter((k) => /^MOCK\d+$/.test(k))) {
  for (const k of ['part3', 'part4']) {
    const g = (W[name][k] || []).map((s) => !!s.graphic);
    const first = g.indexOf(true);
    if (first >= 0 && g.slice(first).includes(false)) warn.push(`${name}.${k} 的看圖題沒有集中在最後面`);
  }
}

// 逐字稿難字註解：key 要對得到題組，每個詞都要真的出現在逐字稿裡
if (W.GLOSS) {
  let n = 0;
  const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  for (const [key, terms] of Object.entries(W.GLOSS)) {
    const m = key.match(/^(?:(MOCK\d+):)?p([34]):(\d+)$/);
    if (!m) { err(`GLOSS.${key}`, 'key 格式應為 p3:0 或 MOCK1:p3:0'); continue; }
    const list = m[1] ? W[m[1]] && W[m[1]]['part' + m[2]] : W['PART' + m[2]];
    const set = list && list[+m[3]];
    if (!set) { err(`GLOSS.${key}`, '找不到對應的題組'); continue; }
    const text = m[2] === '3' ? set.lines.map((l) => l[1]).join('\n') : set.text;
    if (!Array.isArray(terms)) { err(`GLOSS.${key}`, '應為 [[英文, 中文], ...]'); continue; }
    terms.forEach(([en, zh]) => {
      n++;
      if (!isStr(en) || !isStr(zh)) err(`GLOSS.${key}`, `格式錯誤：${en}`);
      else if (!new RegExp(`(?<![A-Za-z])${reEsc(en)}(?![A-Za-z])`, 'i').test(text)) err(`GLOSS.${key}`, `逐字稿中找不到「${en}」`);
    });
  }
  const missing = [
    ...(W.PART3 || []).map((_, i) => `p3:${i}`), ...(W.PART4 || []).map((_, i) => `p4:${i}`),
    ...Object.keys(W).filter((k) => /^MOCK\d+$/.test(k)).flatMap((k) => [
      ...(W[k].part3 || []).map((_, i) => `${k}:p3:${i}`), ...(W[k].part4 || []).map((_, i) => `${k}:p4:${i}`)]),
  ].filter((k) => !W.GLOSS[k]);
  if (missing.length) warn.push(`以下題組還沒有難字註解：${missing.join(', ')}`);
  summary.push(`難字註解：${Object.keys(W.GLOSS).length} 組 / ${n} 個`);
}

// 情境攻略本、開場猜情境、逐句翻譯
const SCENE_IDS = fs.readFileSync(path.join(ROOT, 'docs/SCENES.md'), 'utf8').match(/^\| ([a-z_]+) \|/gm).map((l) => l.slice(2, -2).trim()).filter((id) => id !== 'id');
if (W.SCENES) {
  const ids = W.SCENES.map((x) => x.id);
  if (ids.join() !== SCENE_IDS.join()) err('SCENES', '應依 docs/SCENES.md 的順序包含全部情境');
  W.SCENES.forEach((x) => {
    ['icon', 'name', 'parts', 'summary', 'who', 'signals', 'tip'].forEach((k) => { if (!isStr(x[k])) err(`SCENES.${x.id}`, `缺少 ${k}`); });
    ['openings', 'questions', 'vocab'].forEach((k) => { if (!Array.isArray(x[k]) || !x[k].every((p) => isStr(p[0]) && isStr(p[1]))) err(`SCENES.${x.id}`, `${k} 應為 [[英文, 中文], ...]`); });
    if (!Array.isArray(x.flow) || !x.flow.every(isStr)) err(`SCENES.${x.id}`, 'flow 應為字串陣列');
  });
  summary.push(`情境攻略本：${W.SCENES.length} 種`);
}
if (W.GIST) {
  W.GIST.forEach((g, i) => {
    const w = `GIST[${i}]`;
    if (!Array.isArray(g.lines) || !g.lines.length || !g.lines.every((l) => ROLES.includes(l[0]) && isStr(l[1]))) err(w, 'lines 格式錯誤');
    if (!Array.isArray(g.zh) || g.zh.length !== (g.lines || []).length) err(w, 'zh 數量要跟 lines 一樣');
    if (!isStr(g.q)) err(w, '缺少 q');
    checkChoice(w, g, 4);
    if (!SCENE_IDS.includes(g.scene)) err(w, `未知的 scene: ${g.scene}`);
    if (g.ref) {
      const m = g.ref.match(/^p([34]):(\d+)$/);
      const set = m && W['PART' + m[1]][+m[2]];
      if (!set) err(w, `找不到 ref ${g.ref}`);
      else if (m[1] === '3' && JSON.stringify(set.lines.slice(0, g.lines.length)) !== JSON.stringify(g.lines)) err(w, `lines 必須是 ${g.ref} 開頭的原句`);
      else if (m[1] === '4' && (!set.text.startsWith(g.lines[0][1]) || g.lines[0][0] !== set.speaker)) err(w, `必須是 ${g.ref} 開頭的原句`);
    }
  });
  checkDist('開場猜情境', W.GIST, 4);
  summary.push(`開場猜情境：${W.GIST.length} 題`);
}
if (W.TRANS) {
  for (const [key, tr] of Object.entries(W.TRANS)) {
    const m = key.match(/^p([34]):(\d+)$/);
    const set = m && W['PART' + m[1]][+m[2]];
    if (!set) { err(`TRANS.${key}`, '找不到題組'); continue; }
    if (m[1] === '3' && (!Array.isArray(tr) || tr.length !== set.lines.length || !tr.every(isStr))) err(`TRANS.${key}`, '翻譯句數要跟對話句數一樣');
    if (m[1] === '4' && (!Array.isArray(tr) || tr.map((p) => p[0]).join(' ') !== set.text)) err(`TRANS.${key}`, '英文斷句接起來要跟原文完全相同');
  }
  summary.push(`逐句翻譯：${Object.keys(W.TRANS).length} 組`);
}

console.log(summary.join('\n'));
if (warn.length) console.log('\n⚠️  ' + warn.join('\n⚠️  '));
if (errors.length) { console.log('\n❌ ' + errors.join('\n❌ ')); process.exit(1); }
console.log('\n✅ 格式檢查通過');
