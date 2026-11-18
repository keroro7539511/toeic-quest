// 多益模擬考：完整 200 題、聽力自動播放不可回放、閱讀 75 分鐘計時、估分與詳解
(() => {
  'use strict';
  const T = window.TQ;
  const X = window.EXAM_SCRIPT;
  if (!T || !X) return;

  const $ = (s) => document.querySelector(s);
  const app = () => $('#app');
  const esc = T.esc;
  const L4 = ['A', 'B', 'C', 'D'];
  const EXAM_KEY = 'toeicQuest.exam';
  const PARTS = ['part1', 'part2', 'part3', 'part4', 'part5', 'part6', 'part7'];
  const PART_NAMES = { 1: '照片描述', 2: '應答問題', 3: '簡短對話', 4: '簡短獨白', 5: '句子填空', 6: '短文填空', 7: '閱讀測驗' };
  const PART_MODE = { 1: 'part1', 2: 'part2', 3: 'part3', 4: 'part4', 5: 'part5', 6: 'part6', 7: 'part7' };
  const MOCK_IDS = Object.keys(window).filter((k) => /^MOCK\d+$/.test(k)).sort((a, b) => +a.slice(4) - +b.slice(4));
  const ready = (id) => PARTS.every((k) => Array.isArray(window[id][k]) && window[id][k].length);
  const fill = (tpl, o) => tpl.replace(/\{(\w+)\}/g, (_, k) => o[k]);
  const PREVIEW_SEC = 5; // Part 3/4 每段開播前的預讀秒數
  const mmss = (ms) => { const t = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(t / 60)}:${String(t % 60).padStart(2, '0')}`; };

  // ───────────── 小模考（從練習題庫抽題，每次題目不同）─────────────
  // E.spec = { part1: [練習題庫的 index…], … }；題號照正式考試：聽力從 1、閱讀從 101 開始
  const MINI = 'MINI';
  const BANK = { part1: 'PART1', part2: 'PART2', part3: 'PART3', part4: 'PART4', part5: 'PART5', part6: 'PART6', part7: 'PART7' };
  const bank = (k) => window[BANK[k]] || [];
  const MINI_INFO = {
    listening: { icon: '🎧', name: '聽力小模考', desc: 'Part 1→4 依考試順序混合' },
    reading: { icon: '📖', name: '閱讀小模考', desc: 'Part 5→7 依考試順序混合' },
  };
  // 難度（data/diff/）：1 簡單、2 中等、3 困難；沒標的當中等
  const level = (k, i) => (window.DIFF || {})[`p${k.slice(4)}:${i}`] || 2;
  const MIX = { 1: 0.3, 2: 0.4, 3: 0.3 };   // 跟模擬考出題目標相同：簡單 30%、中等 40%、困難 30%
  // n 題要幾題簡單/中等/困難：先取整數部分，剩下的名額依小數部分的比重隨機分配（長期平均就是 30/40/30）
  function quota(n) {
    const q = {}, frac = {};
    let left = n;
    for (const d of [1, 2, 3]) { q[d] = Math.floor(n * MIX[d]); frac[d] = n * MIX[d] - q[d]; left -= q[d]; }
    while (left-- > 0) {
      const ds = [1, 2, 3].filter((d) => frac[d] > 0);
      let r = Math.random() * ds.reduce((a, d) => a + frac[d], 0);
      const d = ds.find((x) => (r -= frac[x]) < 0) || ds[ds.length - 1];
      q[d]++; frac[d] = 0;
    }
    return q;
  }
  function pickMini(mode) {
    const used = {};
    T.S.exams.forEach((e) => e.spec && Object.entries(e.spec).forEach(([k, arr]) => arr.forEach((i) => { used[k + i] = (used[k + i] || 0) + 1; })));
    // 先打亂再依「小模考出現過的次數」排序：沒考過的優先，同次數之間隨機；
    // 再依難度配額挑題，某個難度的題目不夠時用其他題目補
    const take = (k, n, ok = () => true) => {
      const pool = shuffle(bank(k).map((_, i) => i).filter((i) => ok(bank(k)[i])))
        .sort((a, b) => (used[k + a] || 0) - (used[k + b] || 0));
      const q = quota(n), out = [];
      for (const d of [1, 2, 3]) out.push(...pool.filter((i) => level(k, i) === d).slice(0, q[d]));
      for (const i of pool) if (out.length < n && !out.includes(i)) out.push(i);
      return out;
    };
    const at = (k) => (i) => bank(k)[i];
    const byLevel = (k) => (a, b) => level(k, a) - level(k, b);
    const graphicLast = (k) => (a, b) => !!at(k)(a).graphic - !!at(k)(b).graphic;
    if (mode === 'listening') {
      return {
        // 正式考試 Part 1 前面的題目通常較直接，後面才出現場景、物品的陷阱題 → 由易到難
        part1: take('part1', 3).sort(byLevel('part1')),
        part2: take('part2', 8),
        // 看圖題固定排在 Part 3、Part 4 的最後面（跟正式考試一樣）
        part3: [...take('part3', 2, (s) => !s.graphic), ...take('part3', 1, (s) => !!s.graphic)],
        part4: take('part4', 2).sort(graphicLast('part4')),
      };
    }
    return {
      part5: take('part5', 10), part6: take('part6', 1),
      // 單篇照題數由少到多，再接多篇（正式考試的順序）
      part7: [...take('part7', 2, (s) => s.passages.length === 1).sort((a, b) => at('part7')(a).qs.length - at('part7')(b).qs.length),
        ...take('part7', 1, (s) => s.passages.length > 1)],
    };
  }
  const miniReady = (spec) => Object.entries(spec || {}).every(([k, arr]) => arr.every((i) => bank(k)[i]));
  // 閱讀時間照正式考試比例：75 分鐘 / 100 題
  const readingMin = (nR) => Math.ceil((nR * X.readingMinutes) / 100);

  // ───────────── 題本結構 ─────────────
  // L / R：依序排列的「單元」（一張照片、一段對話、一篇文章…）；Q[題號] = { part, q, unit }
  // u.i 是原始題庫的 index（音檔、註解都用它當 key）
  function build(testId, spec) {
    const mini = testId === MINI;
    const list = (k) => (mini ? (spec[k] || []).map((i) => [bank(k)[i], i]) : window[testId][k].map((x, i) => [x, i]));
    const L = [], R = [], Q = {};
    let n = 1;
    const unit = (arr, part, [x, i], qs) => {
      const u = { part, i, x, nums: [], gk: mini ? `p${part}:${i}` : `${testId}:p${part}:${i}` };
      qs.forEach((q) => { Q[n] = { part, q, unit: u }; u.nums.push(n++); });
      arr.push(u);
    };
    // 小模考不播 Part 說明，直接進題目
    const dir = (k) => { if (!mini) L.push({ dir: k, nums: [] }); };
    dir(1);
    list('part1').forEach((e) => unit(L, 1, e, [e[0]]));
    dir(2);
    list('part2').forEach((e) => unit(L, 2, e, [e[0]]));
    dir(3);
    list('part3').forEach((e) => unit(L, 3, e, e[0].qs));
    dir(4);
    list('part4').forEach((e) => unit(L, 4, e, e[0].qs));
    n = 101;
    list('part5').forEach((e) => unit(R, 5, e, [e[0]]));
    list('part6').forEach((e) => unit(R, 6, e, e[0].qs));
    list('part7').forEach((e) => unit(R, 7, e, e[0].qs));
    const count = (arr) => arr.reduce((a, u) => a + u.nums.length, 0);
    return { L, R, Q, nL: count(L), nR: count(R) };
  }

  // 聽力單元的播音內容（音檔不存在時用瀏覽器語音照這個念；tools/gen_audio.py 產生的音檔流程相同）
  function setIntro(u) {
    const x = u.x, a = u.nums[0], b = u.nums[u.nums.length - 1];
    if (u.part === 3) {
      const tpl = x.graphic ? X.setIntro.conversationGraphic : x.lines.some((l) => l[0].length > 1) ? X.setIntro.conversation3 : X.setIntro.conversation;
      return fill(tpl, { a, b });
    }
    return fill(x.graphic ? X.setIntro.talkGraphic : X.setIntro.talk, { a, b, kind: X.talkNames[x.kind] || 'talk' });
  }
  function unitAudio(u) {
    if (u.dir) return [{ text: X.directions[u.dir].en, role: 'N' }];
    const x = u.x, items = [];
    const options = () => x.o.forEach((o, k) => items.push({ text: L4[k], role: 'W' }, { pause: 250 }, { text: o, role: 'W' }, { pause: 600 }));
    if (u.part === 1) {
      items.push({ text: fill(X.part1Intro, { n: u.nums[0] }), role: 'N' }, { pause: 600 });
      options();
      items.push({ pause: X.pauseShort });
    } else if (u.part === 2) {
      items.push({ text: fill(X.part2Intro, { n: u.nums[0] }), role: 'N' }, { text: x.q, role: 'M' }, { pause: 800 });
      options();
      items.push({ pause: X.pauseShort });
    } else {
      items.push({ text: setIntro(u), role: 'N' }, { pause: 800 });
      if (u.part === 3) x.lines.forEach(([r, t]) => items.push({ text: t, role: r }, { pause: 350 }));
      else items.push({ text: x.text, role: x.speaker });
      items.push({ pause: 1000 });
      x.qs.forEach((q, k) => items.push({ text: fill(X.questionRead, { n: u.nums[k], q: q.q }), role: 'N' }, { pause: X.pauseLong }));
    }
    return items;
  }
  const audioKey = (u) => (u.dir ? `x:dir:${u.dir}` : `x:${E.testId}:p${u.part}:${u.i}`);
  // 播放步驟：[{ items, key } | { pause }]。模擬考一個單元一個音檔；
  // 小模考沿用練習題的音檔（p1:3、p3:5…），Part 3/4 再接上播音員唸題目和作答停頓
  function unitSteps(u) {
    if (E.testId !== MINI || u.dir) return [{ items: unitAudio(u), key: audioKey(u) }];
    const x = u.x, key = `p${u.part}:${u.i}`, items = [];
    const options = (role) => x.o.forEach((o, k) => items.push({ text: L4[k], role }, { pause: 250 }, { text: o, role }, { pause: 700 }));
    if (u.part === 1 || u.part === 2) {
      if (u.part === 2) items.push({ text: x.q, role: 'M' }, { pause: 900 });
      options('W');
      return [{ items, key }, { pause: X.pauseShort }];
    }
    if (u.part === 3) x.lines.forEach(([r, t]) => items.push({ text: t, role: r }, { pause: 350 }));
    else items.push({ text: x.text, role: x.speaker });
    const steps = [{ items, key }, { pause: 1000 }];
    x.qs.forEach((q) => steps.push({ items: [{ text: q.q, role: 'N' }], key: 't:' + q.q }, { pause: X.pauseLong }));
    return steps;
  }

  // ───────────── 分數換算（非官方估算）─────────────
  // 官方每一回都有自己的換算表且不公開；這裡用常見的參考表平滑化，聽力同答對數分數略高於閱讀
  const CURVE = { L: [5, 35, 85, 140, 200, 255, 310, 365, 415, 465, 495], R: [5, 20, 65, 115, 170, 225, 280, 335, 390, 445, 495] };
  function scale(raw, sec) {
    const c = CURVE[sec], i = Math.min(9, Math.floor(raw / 10));
    const v = c[i] + ((c[i + 1] - c[i]) * (raw - i * 10)) / 10;
    return Math.max(5, Math.min(495, Math.round(v / 5) * 5));
  }
  const CEFR = { L: [[490, 'C1'], [400, 'B2'], [275, 'B1'], [110, 'A2'], [60, 'A1']], R: [[455, 'C1'], [385, 'B2'], [275, 'B1'], [115, 'A2'], [60, 'A1']] };
  const cefr = (score, sec) => (CEFR[sec].find(([min]) => score >= min) || [0, '<A1'])[1];

  // ───────────── 狀態 ─────────────
  let E = null;     // 進行中的考試（存 localStorage，重新整理也能繼續）
  let B = null;     // build() 的結果
  let tok = 0;      // 聽力播放序號，用來忽略已被中斷的播放
  let timerId = null;
  let onScreen = false;

  function load() {
    try { E = JSON.parse(localStorage.getItem(EXAM_KEY)); } catch (e) { E = null; }
    if (E && (E.testId === MINI ? !miniReady(E.spec) : !window[E.testId] || !ready(E.testId))) E = null;
    B = E ? build(E.testId, E.spec) : null;
  }
  function persist() {
    try { if (E) localStorage.setItem(EXAM_KEY, JSON.stringify(E)); else localStorage.removeItem(EXAM_KEY); } catch (e) { /* 無痕模式 */ }
  }
  function leave() {
    tok++;
    clearInterval(timerId);
    T.Speech.stop();
    T.Speech.rateOverride = null;
    document.body.classList.remove('exam-wide');
  }

  // ───────────── 首頁卡片 / 大廳 ─────────────
  const lastOf = (f) => T.S.exams.filter(f).pop();
  const mockNo = (id) => +id.slice(4);
  const modeLabel = (h) => `${h.testId !== MINI && MOCK_IDS.length > 1 ? `第${mockNo(h.testId)}回 ` : ''}${{ full: '完整', listening: '聽力', reading: '閱讀' }[h.mode]}${h.testId === MINI ? '小模考' : ''}`;
  const scoreText = (h) => (h.total != null ? `總分 ${h.total}` : h.mode === 'listening' ? `聽力 ${h.L}` : `閱讀 ${h.R}`);
  // 建議考哪一回：還沒考過的優先（照回數），都考過就挑最久沒考的那回
  function suggestMock() {
    const tests = MOCK_IDS.filter(ready);
    const lastIdx = (id) => T.S.exams.map((e) => e.testId).lastIndexOf(id);
    return tests.find((id) => lastIdx(id) < 0) || tests.slice().sort((a, b) => lastIdx(a) - lastIdx(b))[0];
  }
  let pick = null;   // 大廳目前選的題本
  function homeCard() {
    const mock = suggestMock();
    load();
    const last = lastOf((e) => e.testId !== MINI);
    const sub = E && E.testId !== MINI ? '⏸ 作答中，點這裡繼續'
      : last ? `上次：${scoreText(last)}${MOCK_IDS.filter(ready).length > 1 ? `・下一回：第 ${mockNo(mock)} 回` : '・再挑戰一次'}`
      : '完整 200 題・約 2 小時・測出目前程度';
    const card = (id, ic, nm, s) => `<button class="mode" id="${id}"><span class="ic">${ic}</span><span><div class="nm">${nm}</div><div class="sub">${s}</div></span></button>`;
    const miniSub = (mode) => {
      if (E && E.testId === MINI && E.mode === mode) return '⏸ 作答中，點這裡繼續';
      const h = lastOf((e) => e.testId === MINI && e.mode === mode);
      return `${mode === 'listening' ? '約 25 題・15 分' : '約 25 題・20 分'}${h ? `・上次 ${mode === 'listening' ? h.L : h.R}` : '・每次題目不同'}`;
    };
    return `${mock ? `<section class="modes"><button class="mode wide exam-card" id="examCard">
        <span class="ic">📝</span><span><div class="nm">多益模擬考</div><div class="sub">${sub}</div></span></button></section>` : ''}
      <h2 class="sec-title">🎯 專項模擬（考試模式）</h2>
      <section class="modes">
        ${card('miniL', '🎧', '聽力小模考', miniSub('listening'))}
        ${card('miniR', '📖', '閱讀小模考', miniSub('reading'))}
        ${mock ? `${card('fullL', '🎧', '聽力完整模擬', `第 ${mockNo(mock)} 回・100 題・約 45 分`)}
        ${card('fullR', '📖', '閱讀完整模擬', `第 ${mockNo(mock)} 回・100 題・75 分鐘`)}` : ''}
      </section>`;
  }
  function bindHome() {
    onScreen = false;
    leave();
    const on = (id, fn) => { const b = $('#' + id); if (b) b.onclick = fn; };
    const mock = suggestMock();
    on('examCard', lobby);
    on('miniL', () => startDialog(MINI, 'listening'));
    on('miniR', () => startDialog(MINI, 'reading'));
    on('fullL', () => startDialog(mock, 'listening'));
    on('fullR', () => startDialog(mock, 'reading'));
  }

  // 開考前的說明；已經有一場沒考完的，先問要繼續還是放棄
  function startDialog(testId, mode) {
    load();
    if (E) {
      const same = E.testId === testId && E.mode === mode;
      const what = E.testId === MINI ? MINI_INFO[E.mode].name : `${modeLabel(E)}模擬考`;
      T.showModal(`<h2>⏸ 有一場考試還沒完成</h2>
        <p>「${what}」${E.phase === 'listening' ? `聽力進行到第 ${E.li + 1} 段` : E.phase === 'reading' ? `閱讀剩餘 ${mmss(E.rEnds - Date.now())}` : '還沒開始閱讀'}。</p>
        ${same ? '' : '<p class="hint" style="text-align:left">一次只能進行一場，要開始新的請先放棄目前這場。</p>'}
        <button class="btn-primary" id="exGoResume">繼續作答</button>
        ${same ? '' : '<button class="btn-secondary" id="exGoNew">放棄並開始新的</button>'}
        <button class="btn-secondary" data-close>取消</button>`);
      $('#exGoResume').onclick = () => { T.closeModal(); resume(); };
      if (!same) $('#exGoNew').onclick = () => { E = null; persist(); T.closeModal(); startDialog(testId, mode); };
      return;
    }
    const L = mode === 'listening';
    let info;
    if (testId === MINI) {
      const spec = pickMini(mode);
      const b = build(MINI, spec);
      const n = L ? b.nL : b.nR;
      const parts = Object.keys(spec).map((k) => {
        const p = +k.slice(4), u = (L ? b.L : b.R).filter((x) => x.part === p);
        return `<li>Part ${p} ${PART_NAMES[p]}：${u.reduce((a, x) => a + x.nums.length, 0)} 題</li>`;
      }).join('');
      info = { spec, title: `${MINI_INFO[mode].icon} ${MINI_INFO[mode].name}`, body: `<p>共 <b>${n} 題</b>，從練習題庫抽題，${MINI_INFO[mode].desc}。</p><ul class="rules">${parts}</ul>` };
    } else {
      info = { title: `${L ? '🎧 聽力' : '📖 閱讀'}完整模擬・第 ${mockNo(testId)} 回`, body: `<p>正式考試的${L ? '聽力 Part 1–4' : '閱讀 Part 5–7'}，共 <b>100 題</b>。</p><p class="hint" style="text-align:left">⚠️ 同一回題本重考會因為記得題目而分數偏高。</p>` };
    }
    T.showModal(`<h2>${info.title}</h2>${info.body}
      <ul class="rules">${L
        ? `<li>🎧 <b>自動播放、每段只播一次</b>，不能暫停或重播；語速固定 1.0×。</li><li>Part 3/4 每段開播前有 ${PREVIEW_SEC} 秒預讀題目，聽完會唸出題目，每題約 8 秒作答時間。</li><li>💡 建議戴耳機。</li>`
        : '<li>📖 按下開始後計時（照正式考試比例），<b>不會暫停</b>，時間到自動交卷。</li><li>可以自由跳題、標記 🚩。</li>'}
        <li>📊 交卷後才看分數、各 Part 正確率和逐題詳解。</li></ul>
      <button class="btn-primary" id="exGo">開始</button>
      <button class="btn-secondary" data-close>取消</button>`);
    $('#exGo').onclick = () => { T.closeModal(); start(testId, mode, info.spec); };
  }

  function lobby() {
    load();
    onScreen = true;
    T.stopSession();
    const S = T.S;
    const tests = MOCK_IDS.filter(ready);
    if (!tests.includes(pick)) pick = suggestMock();
    const current = pick;
    const picker = tests.length > 1 ? `<h3>選擇題本</h3><div class="mock-pick">${tests.map((id) => {
      const h = lastOf((e) => e.testId === id);
      return `<button class="mock-tab${id === pick ? ' on' : ''}" data-pick="${id}"><b>第 ${mockNo(id)} 回</b><small>${h ? `上次 ${scoreText(h)}` : '還沒考過'}</small></button>`;
    }).join('')}</div>` : '';
    const hist = S.exams.slice().reverse();
    app().innerHTML = `
      <div class="sbar"><button class="icon-btn" id="exHome">✕</button><div class="grow"><b>📝 多益模擬考</b></div></div>
      ${E ? `<div class="card resume"><b>⏸ 你有一場考試還沒完成</b>
          <p class="hint" style="text-align:left">${E.phase === 'listening' ? `聽力進行到第 ${E.li + 1} 段，繼續後會從這一段重新播放。` : `閱讀剩餘 ${mmss(E.rEnds - Date.now())}（閱讀計時不會暫停）。`}</p>
          <button class="btn-primary" id="exResume">繼續作答</button><button class="danger-link" id="exAbandon">放棄這次作答</button></div>` : ''}
      <div class="card">
        <h3 style="margin-top:0">考試結構（與正式多益相同）</h3>
        <table class="gtable exam-struct">
          <thead><tr><th></th><th>Part</th><th>題型</th><th>題數</th></tr></thead>
          <tbody>
            <tr><td rowspan="4">🎧 聽力<br><small>約 45 分</small></td><td>1</td><td>照片描述</td><td>6</td></tr>
            <tr><td>2</td><td>應答問題</td><td>25</td></tr>
            <tr><td>3</td><td>簡短對話（含三人、看圖、言外之意）</td><td>39</td></tr>
            <tr><td>4</td><td>簡短獨白（含看圖）</td><td>30</td></tr>
            <tr><td rowspan="3">📖 閱讀<br><small>75 分</small></td><td>5</td><td>句子填空</td><td>30</td></tr>
            <tr><td>6</td><td>短文填空（含句子插入）</td><td>16</td></tr>
            <tr><td>7</td><td>單篇 29・雙篇 10・三篇 15</td><td>54</td></tr>
          </tbody>
        </table>
        <ul class="rules">
          <li>🎧 聽力<b>自動播放、每段只播一次</b>，不能暫停或重播，跟正式考試一樣；語速固定 1.0×。Part 3/4 每段開播前有 ${PREVIEW_SEC} 秒預讀題目。</li>
          <li>📖 閱讀 75 分鐘倒數，可以自由跳題、標記 🚩，時間到自動交卷。</li>
          <li>💡 建議戴耳機、預留完整 2 小時一次考完，成績最準。</li>
          <li>📊 分數依常見換算表估算，僅供參考；同一回重考會因為記得題目而偏高。</li>
        </ul>
        ${current ? `${picker}
          <button class="btn-primary" data-start="full">開始完整模擬考（200 題・約 2 小時）</button>
          <div class="two-btn">
            <button class="btn-secondary" data-start="listening">只考聽力（100 題・約 45 分）</button>
            <button class="btn-secondary" data-start="reading">只考閱讀（100 題・75 分）</button>
          </div>` : '<p class="hint">模擬考題庫還在準備中。</p>'}
      </div>
      ${hist.length ? `<div class="card"><h3 style="margin-top:0">📈 歷次成績</h3>
        <table class="gtable hist"><thead><tr><th>日期</th><th>範圍</th><th>聽力</th><th>閱讀</th><th>總分</th><th></th></tr></thead><tbody>
        ${hist.map((h, i) => `<tr><td>${esc(h.date)}</td><td>${modeLabel(h)}</td>
          <td>${h.L ?? '—'}</td><td>${h.R ?? '—'}</td><td><b>${h.total ?? '—'}</b></td>
          <td><button class="link" data-report="${S.exams.length - 1 - i}">詳解</button></td></tr>`).join('')}
        </tbody></table></div>` : ''}`;

    $('#exHome').onclick = () => T.renderHome();
    document.querySelectorAll('[data-start]').forEach((b) => { b.onclick = () => start(current, b.dataset.start); });
    document.querySelectorAll('[data-pick]').forEach((b) => { b.onclick = () => { pick = b.dataset.pick; lobby(); }; });
    document.querySelectorAll('[data-report]').forEach((b) => { b.onclick = () => report(T.S.exams[+b.dataset.report], false); });
    if (E) {
      $('#exResume').onclick = resume;
      let armed = false;
      $('#exAbandon').onclick = (e) => {
        if (!armed) { armed = true; e.target.textContent = '再按一次確認放棄（作答紀錄會刪除）'; return; }
        E = null; persist(); lobby();
      };
    }
  }

  // Part 3-7 的選項每次開考都重新打亂（Part 1/2 的選項錄在音檔裡，順序固定但本身已平均分布）。
  // 先把正確答案的位置平均分配成 A/B/C/D 各約 1/4 再打亂順序，避免單純隨機時碰巧偏向某個字母。
  const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  function makePerm() {
    const nums = Object.keys(B.Q).filter((num) => {
      const { part, q } = B.Q[num];
      return part >= 3 && !/^\[\d\]$/.test(q.o[0]);
    });
    const slots = shuffle(nums.map((_, i) => i % 4));
    const perm = {};
    nums.forEach((num, i) => {
      const q = B.Q[num].q;
      const order = shuffle(q.o.map((_, k) => k).filter((k) => k !== q.a));
      order.splice(slots[i], 0, q.a);
      perm[num] = order;
    });
    return perm;
  }
  const orderOf = (perm, num, n) => (perm && perm[num]) || [...Array(n).keys()];

  function start(testId, mode, spec) {
    E = { testId, mode, spec, phase: mode === 'reading' ? 'readingIntro' : 'listening', li: 0, ri: 0, ans: {}, flags: {}, rEnds: null, started: Date.now() };
    B = build(testId, spec);
    E.perm = makePerm();
    persist();
    resume();
  }

  function resume() {
    onScreen = true;
    T.stopSession();
    if (E.phase === 'listening') renderListening();
    else if (E.phase === 'readingIntro') readingIntro();
    else if (Date.now() >= E.rEnds) submit(true);
    else renderReading();
  }

  function quitDialog() {
    T.showModal(`<h2>暫時離開？</h2>
      <p>作答紀錄會保留，之後可從首頁的「${E.testId === MINI ? MINI_INFO[E.mode].name : '多益模擬考'}」繼續。</p>
      <p class="hint" style="text-align:left">${E.phase === 'reading' ? '⚠️ 閱讀計時不會暫停，跟正式考試一樣。' : '聽力會從目前這一段重新播放。'}</p>
      <button class="btn-primary" data-close>繼續作答</button>
      <button class="btn-secondary" id="exLeave">離開</button>`);
    $('#exLeave').onclick = () => { T.closeModal(); T.renderHome(); };
  }

  // ───────────── 作答卡 ─────────────
  function optionsHtml(num, opts, showText) {
    return `<div class="eopts">${orderOf(E.perm, num, opts.length).map((k, pos) => `
      <button class="eopt ${E.ans[num] === k ? 'on' : ''}" data-num="${num}" data-k="${k}">
        <span class="bub">${L4[pos]}</span>${showText ? `<span>${T.multiline(opts[k])}</span>` : ''}</button>`).join('')}</div>`;
  }
  function bindOptions() {
    document.querySelectorAll('.eopt').forEach((b) => {
      b.onclick = () => {
        const num = +b.dataset.num;
        E.ans[num] = +b.dataset.k;
        persist();
        document.querySelectorAll(`.eopt[data-num="${num}"]`).forEach((x) => x.classList.toggle('on', x === b));
        updateNav();
      };
    });
  }

  // ───────────── 聽力 ─────────────
  function renderListening() {
    leave();
    onScreen = true;
    T.Speech.rateOverride = 1;
    const u = B.L[E.li];
    const done = B.L.slice(0, E.li).reduce((a, x) => a + x.nums.length, 0);
    const mini = E.testId === MINI;
    const label = u.dir ? `Part ${u.dir} 說明` : `Part ${u.part}・${u.nums.length > 1 ? `Q${u.nums[0]}–${u.nums[u.nums.length - 1]}` : `Q${u.nums[0]}`}`;
    let body = '';
    if (u.dir) {
      const d = X.directions[u.dir];
      body = `<div class="card dir"><h2>Part ${u.dir}</h2><p class="en">${esc(d.en)}</p><p class="zh">${esc(d.zh)}</p>
        <button class="btn-secondary" id="exSkip">跳過說明 ⏭</button></div>`;
    } else if (u.part === 1) {
      body = `<div class="card"><div class="qnum">${u.nums[0]}.</div><img class="photo" src="${esc(u.x.img)}" alt="">${optionsHtml(u.nums[0], u.x.o, false)}</div>`;
    } else if (u.part === 2) {
      body = `<div class="card"><div class="qnum">${u.nums[0]}.</div><p class="hint" style="text-align:left">Mark your answer on your answer sheet.</p>${optionsHtml(u.nums[0], u.x.o, false)}</div>`;
    } else {
      body = `<div class="card">${T.renderGraphic(u.x.graphic)}${u.x.qs.map((q, k) => `
        <div class="exq"><div class="qline"><b>${u.nums[k]}.</b> ${T.multiline(q.q)}</div>${optionsHtml(u.nums[k], q.o, true)}</div>`).join('')}</div>`;
    }
    app().innerHTML = `
      <div class="exam-bar">
        <button class="icon-btn" id="exQuit" title="暫時離開">⏸</button>
        <div class="grow"><b>🎧 ${mini ? '聽力小模考' : 'Listening'}</b> <small>${label}</small></div>
        <div class="eb-prog"><small>${done}/${B.nL}</small></div>
      </div>
      <div class="progress" style="margin-bottom:12px"><div style="width:${(done / B.nL) * 100}%"></div></div>
      <div class="ex-status" id="exStatus">${!u.dir && u.part >= 3 ? `📖 預讀題目：<b id="exPv">${PREVIEW_SEC}</b> 秒後開始播放` : '🔊 播放中…'}</div>
      ${body}`;
    $('#exQuit').onclick = quitDialog;
    if (u.dir) $('#exSkip').onclick = nextUnit;
    bindOptions();
    playUnit();
  }

  async function playUnit() {
    const my = ++tok;
    const u = B.L[E.li];
    await new Promise((r) => setTimeout(r, 400));
    if (my !== tok) return;
    // Part 3/4：先留幾秒讓考生看題目和選項
    if (!u.dir && u.part >= 3) {
      for (let left = PREVIEW_SEC; left > 0; left--) {
        const pv = $('#exPv');
        if (pv) pv.textContent = left;
        await new Promise((r) => setTimeout(r, 1000));
        if (my !== tok) return;
      }
      $('#exStatus').textContent = '🔊 播放中…';
    }
    let ok = true;
    for (const st of unitSteps(u)) {
      if (st.pause) await new Promise((r) => setTimeout(r, st.pause));
      else ok = await T.Speech.play(st.items, st.key);
      if (my !== tok || !E || E.phase !== 'listening') return;
      if (!ok) break;
    }
    if (!ok) {
      $('#exStatus').innerHTML = '⚠️ 無法播放語音 <button class="link" id="exNext">繼續下一題 →</button>';
      $('#exNext').onclick = nextUnit;
      return;
    }
    nextUnit();
  }

  function nextUnit() {
    tok++;
    T.Speech.stop();
    E.li++;
    if (E.li >= B.L.length) {
      if (E.mode === 'listening') { persist(); submit(false); return; }
      E.phase = 'readingIntro';
      persist();
      readingIntro();
      return;
    }
    persist();
    renderListening();
  }

  // ───────────── 閱讀 ─────────────
  function readingIntro() {
    leave();
    onScreen = true;
    app().innerHTML = `
      <div class="card dir">
        <h2>📖 Reading Test</h2>
        <p>${E.mode === 'full' ? '聽力結束！休息一下，準備好再開始閱讀。' : ''}</p>
        <p>閱讀測驗共 <b>${B.nR} 題（Part 5–7）</b>，時間 <b>${readingMin(B.nR)} 分鐘</b>。按下開始後計時，<b>不會暫停</b>，時間到會自動交卷。</p>
        <p class="hint" style="text-align:left">建議配速：Part 5 每題約 20 秒、Part 6 每篇約 2 分鐘，把時間留給 Part 7。不會的題目先猜一個、按 🚩 標記，最後再回頭看——多益答錯不倒扣。</p>
        <button class="btn-primary" id="exStartR">開始閱讀測驗</button>
      </div>`;
    $('#exStartR').onclick = () => {
      E.phase = 'reading';
      E.ri = 0;
      E.rEnds = Date.now() + readingMin(B.nR) * 60000;
      persist();
      renderReading();
    };
  }

  function renderReading() {
    leave();
    onScreen = true;
    const u = B.R[E.ri];
    const wide = u.part !== 5;
    document.body.classList.toggle('exam-wide', wide);
    let left = '', right = '';
    if (u.part === 5) {
      const n = u.nums[0];
      right = `<div class="exq"><div class="qline"><b>${n}.</b> ${esc(u.x.q).replace('______', '<span class="blank">______</span>')}</div>${optionsHtml(n, u.x.o, true)}</div>`;
    } else if (u.part === 6) {
      left = T.renderPassage(u.x.passage, (k) => `<span class="gap ex-gap">${u.nums[k - 1]}</span>`);
      right = u.x.qs.map((q, k) => `<div class="exq"><div class="qline"><b>${u.nums[k]}.</b></div>${optionsHtml(u.nums[k], q.o, true)}</div>`).join('');
    } else {
      left = u.x.passages.map((p) => T.renderPassage(p)).join('');
      right = u.x.qs.map((q, k) => `<div class="exq"><div class="qline"><b>${u.nums[k]}.</b> ${T.multiline(q.q)}</div>${optionsHtml(u.nums[k], q.o, true)}</div>`).join('');
    }
    const n7 = u.part === 7 ? u.x.passages.length : 0;
    const head = u.part === 7 ? `Questions ${u.nums[0]}–${u.nums[u.nums.length - 1]} ・ ${n7 === 1 ? '單篇' : n7 === 2 ? '雙篇' : '三篇'}閱讀`
      : u.part === 6 ? `Questions ${u.nums[0]}–${u.nums[3]} ・ 短文填空` : 'Part 5 ・ 句子填空';
    const flagged = !!E.flags[u.nums[0]];
    app().innerHTML = `
      <div class="exam-bar">
        <button class="icon-btn" id="exQuit" title="暫時離開">⏸</button>
        <div class="grow"><b>📖 ${E.testId === MINI ? '閱讀小模考' : 'Reading'}</b> <small>Part ${u.part}</small></div>
        <div class="eb-timer" id="exTimer">${mmss(E.rEnds - Date.now())}</div>
        <button class="btn-ghost" id="exNav">▦ 題號</button>
        <button class="btn-submit" id="exSubmit">交卷</button>
      </div>
      <div class="ex-head">${head}</div>
      <div class="ex-read ${wide ? 'split' : ''}">
        ${wide ? `<div class="ex-left">${left}</div>` : ''}
        <div class="ex-right card">${right}</div>
      </div>
      <div class="ex-foot">
        <button class="btn-secondary" id="exPrev" ${E.ri === 0 ? 'disabled' : ''}>← 上一頁</button>
        <button class="btn-ghost ${flagged ? 'flag-on' : ''}" id="exFlag">🚩 ${flagged ? '已標記' : '標記'}</button>
        <button class="btn-secondary" id="exNextPg" ${E.ri === B.R.length - 1 ? 'disabled' : ''}>下一頁 →</button>
      </div>`;
    $('#exQuit').onclick = quitDialog;
    $('#exNav').onclick = navigator_;
    $('#exSubmit').onclick = confirmSubmit;
    $('#exPrev').onclick = () => goto(E.ri - 1);
    $('#exNextPg').onclick = () => goto(E.ri + 1);
    $('#exFlag').onclick = () => {
      const k = u.nums[0];
      if (E.flags[k]) delete E.flags[k]; else E.flags[k] = 1;
      persist();
      renderReading();
    };
    bindOptions();
    window.scrollTo(0, 0);
    timerId = setInterval(tick, 1000);
  }

  function tick() {
    const left = E.rEnds - Date.now();
    const el = $('#exTimer');
    if (el) { el.textContent = mmss(left); el.classList.toggle('danger', left < 5 * 60000); }
    if (left <= 0) { clearInterval(timerId); T.toast('⏰ 時間到，自動交卷'); submit(true); }
  }

  function goto(ri) {
    if (ri < 0 || ri >= B.R.length) return;
    E.ri = ri;
    persist();
    renderReading();
  }

  function navigator_() {
    const cur = new Set(B.R[E.ri].nums);
    const cells = [];
    B.R.forEach((u, ri) => u.nums.forEach((n) => {
      const cls = [E.ans[n] != null ? 'done' : '', E.flags[u.nums[0]] ? 'flag' : '', cur.has(n) ? 'cur' : ''].join(' ');
      cells.push(`<button class="navn ${cls}" data-ri="${ri}">${n}</button>`);
    }));
    T.showModal(`<h2>▦ 題號總覽</h2>
      <p class="hint" style="text-align:left">藍色 = 已作答・🚩 橘框 = 已標記・點題號可直接跳過去</p>
      <div class="navgrid">${cells.join('')}</div>
      <button class="btn-secondary" data-close>關閉</button>`);
    document.querySelectorAll('.navn').forEach((b) => { b.onclick = () => { T.closeModal(); goto(+b.dataset.ri); }; });
  }
  function updateNav() { /* 題號總覽在開啟時才計算，這裡不用做事 */ }

  function confirmSubmit() {
    const nums = Object.keys(B.Q).filter((n) => E.mode !== 'reading' || n > 100);
    const blank = nums.filter((n) => E.ans[n] == null).length;
    const flags = Object.keys(E.flags).length;
    T.showModal(`<h2>確定要交卷嗎？</h2>
      <p>剩餘時間 <b>${mmss(E.rEnds - Date.now())}</b></p>
      ${blank ? `<p>⚠️ 還有 <b>${blank}</b> 題沒作答。多益答錯不倒扣，建議全部都先猜一個。</p>` : '<p>✅ 全部都作答了。</p>'}
      ${flags ? `<p>🚩 有 ${flags} 頁標記過，要不要再回去看看？</p>` : ''}
      <button class="btn-secondary" data-close>繼續作答</button>
      <button class="btn-primary" id="exDoSubmit">交卷看成績</button>`);
    $('#exDoSubmit').onclick = () => { T.closeModal(); submit(false); };
  }

  // ───────────── 交卷 / 成績 ─────────────
  function submit() {
    leave();
    const S = T.S;
    const before = T.levelInfo(S.xp).level;
    const parts = {};
    let lRaw = 0, rRaw = 0;
    Object.entries(B.Q).forEach(([num, { part, q }]) => {
      num = +num;
      const inScope = E.mode === 'full' || (E.mode === 'listening' ? num <= 100 : num > 100);
      if (!inScope) return;
      const p = (parts[part] = parts[part] || { c: 0, t: 0 });
      p.t++;
      if (E.ans[num] === q.a) { p.c++; if (num <= 100) lRaw++; else rRaw++; }
    });
    // 小模考題數較少，先換算成 100 題的比例再查表
    const L = E.mode !== 'reading' ? scale(Math.round((lRaw * 100) / B.nL), 'L') : null;
    const R = E.mode !== 'listening' ? scale(Math.round((rRaw * 100) / B.nR), 'R') : null;
    const entry = {
      date: T.today(), testId: E.testId, mode: E.mode, spec: E.spec, lN: B.nL, rN: B.nR, lRaw, rRaw, L, R,
      total: L != null && R != null ? L + R : null, parts, ans: E.ans, perm: E.perm,
      minutes: Math.round((Date.now() - E.started) / 60000),
    };
    S.exams.push(entry);
    const xp = E.testId === MINI ? 60 : E.mode === 'full' ? 300 : 150;
    S.xp += xp;
    T.checkBadges();
    T.save();
    E = null;
    persist();
    report(entry, true, xp);
    const after = T.levelInfo(S.xp).level;
    if (after > before) setTimeout(() => T.showLevelUp(after), 800);
  }

  function report(entry, fresh, xp) {
    leave();
    onScreen = true;
    B = build(entry.testId, entry.spec);
    const mini = entry.testId === MINI;
    const err = mini ? 50 : 20;
    const sec = (label, raw, n, score, key) => score == null ? '' : `
      <div class="rs"><span>${label}</span><b>${score}</b><small>${Math.max(5, score - err)}–${Math.min(495, score + err)}</small>
        <small>答對 ${raw}/${n || 100}・CEFR ${cefr(score, key)}</small></div>`;
    const total = entry.total;
    const partRows = Object.keys(entry.parts).sort().map((p) => {
      const { c, t } = entry.parts[p];
      const pct = Math.round((c / t) * 100);
      return `<tr><td>Part ${p}</td><td>${PART_NAMES[p]}</td><td>${c}/${t}</td>
        <td><div class="pbar"><i class="${pct >= 75 ? 'good' : pct >= 55 ? 'mid' : 'low'}" style="width:${pct}%"></i></div></td><td>${pct}%</td></tr>`;
    }).join('');
    const weak = Object.keys(entry.parts).map((p) => [p, entry.parts[p].c / entry.parts[p].t]).sort((a, b) => a[1] - b[1]).slice(0, 2);
    const target = 750;
    app().innerHTML = `
      <div class="sbar"><button class="icon-btn" id="exHome">✕</button><div class="grow"><b>📊 ${mini ? MINI_INFO[entry.mode].name : `模擬考${MOCK_IDS.length > 1 ? ` 第 ${mockNo(entry.testId)} 回` : ''}`}成績</b> <small>${esc(entry.date)}</small></div></div>
      <div class="card report">
        ${fresh ? `<div class="big-emoji">${total != null ? (total >= 750 ? '🏆' : total >= 600 ? '🎉' : '💪') : '📋'}</div>` : ''}
        ${total != null ? `<div class="rtotal"><span>估計總分</span><b>${total}</b><small>約 ${Math.max(10, total - 40)}–${Math.min(990, total + 40)}</small></div>` : ''}
        <div class="rsecs">${sec('🎧 聽力', entry.lRaw, entry.lN, entry.L, 'L')}${sec('📖 閱讀', entry.rRaw, entry.rN, entry.R, 'R')}</div>
        ${total != null ? `<div class="target">目標 ${target}：${total >= target ? '已達標 🎉' : `還差 <b>${target - total}</b> 分`}
          <div class="bar"><div style="width:${Math.min(100, (total / 990) * 100)}%"></div><span class="tick" style="left:${(target / 990) * 100}%"></span></div></div>` : ''}
        ${fresh && xp ? `<p class="xp">+${xp} XP</p>` : ''}
        <p class="hint">${mini ? '小模考題數少，分數只是粗估（誤差約 ±50 分），適合看趨勢和找弱點。' : '分數以常見換算表估算，實際考試每回換算略有不同，誤差約 ±40 分。'}</p>
        ${mini && fresh ? `<button class="btn-secondary" id="exAgain">${MINI_INFO[entry.mode].icon} 再來一回（換新題目）</button>` : ''}
      </div>
      <div class="card">
        <h3 style="margin-top:0">各 Part 正確率</h3>
        <table class="gtable ptable"><tbody>${partRows}</tbody></table>
        <h3>🎯 建議加強</h3>
        <ul class="rules">${weak.map(([p, r]) => `<li><b>Part ${p} ${PART_NAMES[p]}</b>（${Math.round(r * 100)}%）→ 到首頁的練習模式多練：<button class="link" data-practice="${PART_MODE[p]}">去練習</button></li>`).join('')}</ul>
      </div>
      <button class="btn-primary" id="exReview">📝 查看每題詳解</button>
      <button class="btn-secondary" id="exBack">回首頁</button>`;
    $('#exHome').onclick = () => T.renderHome();
    $('#exBack').onclick = () => T.renderHome();
    $('#exReview').onclick = () => review(entry, 'wrong');
    if ($('#exAgain')) $('#exAgain').onclick = () => startDialog(MINI, entry.mode);
    document.querySelectorAll('[data-practice]').forEach((b) => {
      b.onclick = () => { T.renderHome(); const m = document.querySelector(`[data-mode="${b.dataset.practice}"]`); if (m) m.click(); };
    });
    if (fresh) { T.confetti(total != null && total >= 600 ? 100 : 40); T.Sfx.play('win'); }
    window.scrollTo(0, 0);
  }

  // ───────────── 詳解 ─────────────
  function unitContent(u, testId) {
    const x = u.x;
    if (u.part === 1) return `<img class="photo" src="${esc(x.img)}" alt="">`;
    if (u.part === 2) return `<p><b>Q：${esc(x.q)}</b></p>`;
    if (u.part === 3) return `${T.renderGraphic(x.graphic)}<details><summary>📜 對話逐字稿</summary>${T.transcriptHtml('part3', x, u.gk)}</details>`;
    if (u.part === 4) return `${T.renderGraphic(x.graphic)}<details><summary>📜 逐字稿</summary>${T.transcriptHtml('part4', x, u.gk)}</details>`;
    if (u.part === 5) return '';
    if (u.part === 6) return `<details><summary>📄 文章</summary>${T.renderPassage(x.passage, (k) => `<span class="gap ex-gap">${u.nums[k - 1]}</span>`)}</details>`;
    return `<details><summary>📄 文章（${x.passages.length} 篇）</summary>${x.passages.map((p) => T.renderPassage(p)).join('')}</details>`;
  }

  function review(entry, filter) {
    const inScope = (n) => entry.mode === 'full' || (entry.mode === 'listening' ? n <= 100 : n > 100);
    const show = (n) => inScope(n) && (filter === 'all' || (filter === 'wrong' && entry.ans[n] !== B.Q[n].q.a)
      || (filter === 'listening' && n <= 100) || (filter === 'reading' && n > 100));
    const units = [...B.L, ...B.R].filter((u) => u.nums.some(show));
    const qHtml = (u, n, k) => {
      const q = B.Q[n].q;
      const mine = entry.ans[n];
      const ok = mine === q.a;
      const text = u.part === 5 ? esc(q.q).replace('______', '<span class="blank">______</span>') : u.part === 1 || u.part === 2 || u.part === 6 ? '' : T.multiline(q.q);
      return `<div class="rv ${ok ? 'ok' : 'ng'}">
        <div class="qline"><b>${n}.</b> ${ok ? '✅' : mine == null ? '⬜ 未作答' : '❌'} ${text}</div>
        <ul class="rvopts">${orderOf(entry.perm, n, q.o.length).map((j, pos) => `<li class="${j === q.a ? 'ans' : j === mine ? 'mine' : ''}">(${L4[pos]}) ${T.multiline(q.o[j])} ${j === q.a ? '✓' : j === mine ? '← 你的答案' : ''}</li>`).join('')}</ul>
        <div class="ex">💡 ${esc(q.e)}</div></div>`;
    };
    app().innerHTML = `
      <div class="sbar"><button class="icon-btn" id="exBackR">←</button><div class="grow"><b>📝 詳解</b></div></div>
      <div class="tabs">${[['wrong', '只看錯題'], ['all', '全部'], ['listening', '聽力'], ['reading', '閱讀']].map(([k, t]) => `<button class="tab ${k === filter ? 'on' : ''}" data-f="${k}">${t}</button>`).join('')}</div>
      ${units.length ? units.map((u) => `
        <div class="card rvunit">
          <div class="qtag">Part ${u.part}・${PART_NAMES[u.part]}・Q${u.nums[0]}${u.nums.length > 1 ? '–' + u.nums[u.nums.length - 1] : ''}</div>
          ${unitContent(u, entry.testId)}
          ${u.nums.map((n, k) => (show(n) ? qHtml(u, n, k) : '')).join('')}
        </div>`).join('') : '<div class="card"><p>🎉 這個範圍沒有錯題！</p></div>'}`;
    $('#exBackR').onclick = () => report(entry, false);
    document.querySelectorAll('[data-f]').forEach((b) => { b.onclick = () => review(entry, b.dataset.f); });
    window.scrollTo(0, 0);
  }

  // 聽力時可用 1-4 / A-D 快速作答（只有單題的 Part 1/2）
  document.addEventListener('keydown', (e) => {
    if (!E || E.phase !== 'listening' || !onScreen || e.target.tagName === 'INPUT') return;
    const u = B.L[E.li];
    if (!u || u.dir || u.nums.length !== 1) return;
    const k = e.key.toLowerCase();
    const idx = k.length === 1 ? Math.max('1234'.indexOf(k), 'abcd'.indexOf(k)) : -1;
    if (idx >= 0 && idx < u.x.o.length) {
      const b = document.querySelectorAll(`.eopt[data-num="${u.nums[0]}"]`)[idx];
      if (b) b.click();
    }
  });

  window.Exam = { homeCard, bindHome, active: () => onScreen };
})();
