// 我的進步：模擬考分數曲線、每日練習量、各 Part 實力、本週 vs 上週正確率
// 圖表用手寫 SVG（不載入圖表套件）；顏色用 css 的 --series-1 / --series-2（已驗證色盲可辨、亮暗模式皆過）
(() => {
  'use strict';
  const T = window.TQ;
  if (!T) return;
  const $ = (s) => document.querySelector(s);
  const esc = T.esc;
  const pad = (n) => String(n).padStart(2, '0');
  const dstr = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const back = (n) => { const d = new Date(); d.setDate(d.getDate() - n); return dstr(d); };
  const md = (s) => `${+s.slice(5, 7)}/${+s.slice(8, 10)}`;
  const pct = (c, t) => (t ? Math.round((c / t) * 100) : null);

  // ── 浮動提示（滑鼠移上去 / 手指點一下）──
  let tip;
  function bindTips(root) {
    if (!tip) { tip = document.createElement('div'); tip.className = 'viz-tip'; document.body.appendChild(tip); }
    const show = (el, x, y) => {
      tip.innerHTML = el.getAttribute('data-tip');
      tip.style.display = 'block';
      const r = tip.getBoundingClientRect();
      tip.style.left = Math.max(8, Math.min(innerWidth - r.width - 8, x - r.width / 2)) + 'px';
      tip.style.top = Math.max(8, y - r.height - 14) + 'px';
    };
    const hide = () => { tip.style.display = 'none'; };
    root.querySelectorAll('[data-tip]').forEach((el) => {
      el.addEventListener('pointermove', (e) => show(el, e.clientX, e.clientY));
      el.addEventListener('pointerdown', (e) => show(el, e.clientX, e.clientY));
      el.addEventListener('pointerleave', hide);
    });
    addEventListener('scroll', hide, { passive: true, once: true });
  }

  // ── 模擬考分數：聽力 / 閱讀兩條線（0–495）──
  function mockChart(el, exams) {
    const W = el.clientWidth, H = 230, L = 36, R = 84, Tp = 14, B = 28;
    const pw = W - L - R, ph = H - Tp - B;
    const xs = (i) => L + (exams.length === 1 ? pw / 2 : (i * pw) / (exams.length - 1));
    const ys = (v) => Tp + ph - (v / 495) * ph;
    const grid = [0, 100, 200, 300, 400, 495].map((v) => `<line x1="${L}" x2="${W - R}" y1="${ys(v)}" y2="${ys(v)}" class="g"/><text x="${L - 6}" y="${ys(v) + 4}" class="ax" text-anchor="end">${v}</text>`).join('');
    const series = [['L', '聽力', 'var(--series-1)'], ['R', '閱讀', 'var(--series-2)']].map(([k, name, color]) => {
      const pts = exams.map((e, i) => (e[k] != null ? [xs(i), ys(e[k]), e[k]] : null));
      // 只考聽力 / 只考閱讀的那一次沒有另一科分數 → 線直接連過去
      const path = pts.filter(Boolean).map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join('');
      const last = [...pts].reverse().find(Boolean);
      return `<path d="${path}" fill="none" stroke="${color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>
        ${pts.map((p) => (p ? `<circle cx="${p[0]}" cy="${p[1]}" r="4" fill="${color}" stroke="var(--card)" stroke-width="2"/>` : '')).join('')}
        ${last ? `<text x="${last[0] + 8}" y="${last[1] + 4}" class="dl">${name} ${last[2]}</text>` : ''}`;
    }).join('');
    const xl = exams.map((e, i) => (exams.length <= 8 || i % Math.ceil(exams.length / 8) === 0 || i === exams.length - 1
      ? `<text x="${xs(i)}" y="${H - 8}" class="ax" text-anchor="middle">${md(e.date)}</text>` : '')).join('');
    const hits = exams.map((e, i) => {
      const w = exams.length === 1 ? pw : pw / (exams.length - 1);
      const t = `<b>${esc(e.date)}・${esc(e.label)}</b>${e.L != null ? `<br>聽力 ${e.L}` : ''}${e.R != null ? `<br>閱讀 ${e.R}` : ''}${e.total != null ? `<br>總分 <b>${e.total}</b>` : ''}`;
      return `<rect x="${xs(i) - w / 2}" y="${Tp}" width="${w}" height="${ph}" fill="transparent" data-tip="${esc(t)}"/>`;
    }).join('');
    el.innerHTML = `<svg width="${W}" height="${H}" role="img" aria-label="模擬考分數曲線">${grid}${xl}${series}${hits}</svg>`;
  }

  // ── 每日練習量：最近 30 天直條 ──
  function dailyChart(el, days) {
    const W = el.clientWidth, H = 180, L = 30, R = 8, Tp = 10, B = 24;
    const pw = W - L - R, ph = H - Tp - B;
    const max = Math.max(10, ...days.map((d) => d.n));
    const top = Math.ceil(max / 10) * 10;
    const slot = pw / days.length, bw = Math.min(24, Math.max(3, slot - 3));
    const ys = (v) => Tp + ph - (v / top) * ph;
    const grid = [0, top / 2, top].map((v) => `<line x1="${L}" x2="${W - R}" y1="${ys(v)}" y2="${ys(v)}" class="g"/><text x="${L - 6}" y="${ys(v) + 4}" class="ax" text-anchor="end">${v}</text>`).join('');
    const bars = days.map((d, i) => {
      const x = L + i * slot + (slot - bw) / 2, h = (d.n / top) * ph, y = Tp + ph - h, r = Math.min(4, bw / 2, h);
      const path = h > 0 ? `M${x},${Tp + ph}V${y + r}Q${x},${y} ${x + r},${y}H${x + bw - r}Q${x + bw},${y} ${x + bw},${y + r}V${Tp + ph}Z` : '';
      const t = `<b>${md(d.date)}</b><br>${d.n} 題${d.n ? `・答對 ${pct(d.c, d.n)}%` : ''}${d.xp ? `<br>+${d.xp} XP` : ''}`;
      return `${path ? `<path d="${path}" fill="var(--series-1)"/>` : ''}<rect x="${L + i * slot}" y="${Tp}" width="${slot}" height="${ph}" fill="transparent" data-tip="${esc(t)}"/>`;
    }).join('');
    const xl = days.map((d, i) => (i % 7 === 0 || i === days.length - 1 ? `<text x="${L + i * slot + slot / 2}" y="${H - 6}" class="ax" text-anchor="middle">${md(d.date)}</text>` : '')).join('');
    el.innerHTML = `<svg width="${W}" height="${H}" role="img" aria-label="最近 30 天每日答題數">${grid}${bars}${xl}</svg>`;
  }

  function show() {
    T.stopSession(); T.Speech.stop(); T.closeModal();
    const S = T.S, H = S.history || {};
    // 本週 / 上週（各 7 天）
    const span = (from, to) => {
      const out = { n: 0, c: 0, sec: {} };
      for (let i = from; i < to; i++) {
        const h = H[back(i)]; if (!h) continue;
        out.n += h.n; out.c += h.c;
        for (const [k, v] of Object.entries(h.sec || {})) { const o = (out.sec[k] = out.sec[k] || { c: 0, t: 0 }); o.c += v.c; o.t += v.t; }
      }
      return out;
    };
    const wk = span(0, 7), prev = span(7, 14);
    const days = Array.from({ length: 30 }, (_, i) => { const date = back(29 - i), h = H[date] || {}; return { date, n: h.n || 0, c: h.c || 0, xp: h.xp || 0 }; });
    const LBL = { full: '完整', listening: '聽力', reading: '閱讀' };
    const exams = (S.exams || []).filter((e) => e.testId !== 'MINI').map((e) => ({ ...e, label: `第${+e.testId.slice(4)}回 ${LBL[e.mode] || ''}` }));
    // 實力：現在 vs 7 天前（每天存檔時記下的快照）
    const old = (() => { for (let i = 7; i < 60; i++) { const h = H[back(i)]; if (h && h.skill) return h.skill; } return null; })();
    const skills = T.PARTS7.map((k) => ({ k, v: (S.stats[k] || {}).t ? T.skillOf(k) : null, was: old && old[k] }));
    const tried = skills.filter((x) => x.v != null);
    const sx = (v) => Math.max(0, Math.min(100, ((v - 1000) / 800) * 100));

    const tile = (label, value, sub) => `<div class="pg-tile"><span>${label}</span><b>${value}</b>${sub ? `<small>${sub}</small>` : ''}</div>`;
    const delta = (a, b) => (a == null || b == null ? '' : a > b ? `▲ ${a - b}` : a < b ? `▼ ${b - a}` : '持平');
    $('#app').innerHTML = `
      <div class="sbar"><button class="icon-btn" id="pgHome">✕</button><div class="grow"><b>📈 我的進步</b></div></div>
      <div class="pg-tiles">
        ${tile('本週答題', wk.n, prev.n ? `上週 ${prev.n}` : '')}
        ${tile('本週正確率', wk.n ? pct(wk.c, wk.n) + '%' : '—', prev.n ? `上週 ${pct(prev.c, prev.n)}%` : '')}
        ${tile('連續天數', `🔥 ${T.currentStreak()}`, '')}
        ${tile('熟練單字', T.masteredCount(), `共 ${T.WORDS.length} 字`)}
      </div>

      <section class="card pg-card"><h3>📝 模擬考分數</h3>
        ${exams.length ? `<div class="viz-legend"><span><i style="background:var(--series-1)"></i>聽力</span><span><i style="background:var(--series-2)"></i>閱讀</span><small>滿分各 495</small></div>
          <div class="viz" id="vMock"></div>
          <details><summary>表格</summary><table class="gtable"><thead><tr><th>日期</th><th>範圍</th><th>聽力</th><th>閱讀</th><th>總分</th></tr></thead><tbody>
          ${exams.map((e) => `<tr><td>${esc(e.date)}</td><td>${esc(e.label)}</td><td>${e.L ?? '—'}</td><td>${e.R ?? '—'}</td><td>${e.total ?? '—'}</td></tr>`).join('')}</tbody></table></details>`
          : '<p class="hint">考完第一回模擬考（完整、只考聽力或只考閱讀都算）就會出現分數曲線。</p>'}
      </section>

      <section class="card pg-card"><h3>🎯 各 Part 實力 <small class="hint">答對率約一半的題目難度；簡單題 1200・中等 1400・困難 1600</small></h3>
        ${tried.length ? `<div class="skill-rows">${skills.map((x) => `<div class="skill-row">
            <span class="sk-name">${esc(T.PART_LABEL[x.k])}</span>
            <span class="sk-track">${x.v != null ? `<i style="width:${sx(x.v)}%"></i>` : ''}</span>
            <span class="sk-val">${x.v != null ? `<b>${x.v}</b> ${T.skillLabel(x.v)}<small>${delta(x.v, x.was)}${x.was != null && x.v !== x.was ? '（7 天）' : ''}</small>` : '<small>還沒練過</small>'}</span></div>`).join('')}</div>`
          : '<p class="hint">開始練習後，這裡會顯示每個 Part 的實力分數，以及跟 7 天前比的變化。</p>'}
      </section>

      <section class="card pg-card"><h3>📅 最近 30 天練習量 <small class="hint">每天答題數</small></h3>
        <div class="viz" id="vDaily"></div>
        <details><summary>表格</summary><table class="gtable"><thead><tr><th>日期</th><th>題數</th><th>正確率</th><th>XP</th></tr></thead><tbody>
        ${days.filter((d) => d.n || d.xp).reverse().map((d) => `<tr><td>${d.date}</td><td>${d.n}</td><td>${d.n ? pct(d.c, d.n) + '%' : '—'}</td><td>${d.xp}</td></tr>`).join('') || '<tr><td colspan="4">還沒有紀錄</td></tr>'}</tbody></table></details>
      </section>

      <section class="card pg-card"><h3>📊 本週 vs 上週正確率</h3>
        <table class="gtable"><thead><tr><th>Part</th><th>本週</th><th>上週</th><th>變化</th></tr></thead><tbody>
        ${T.PARTS7.map((k) => { const a = wk.sec[k], b = prev.sec[k], pa = a && pct(a.c, a.t), pb = b && pct(b.c, b.t);
          return `<tr><td>${esc(T.PART_LABEL[k])}</td><td>${a ? `${pa}% <small>(${a.t} 題)</small>` : '—'}</td><td>${b ? `${pb}%` : '—'}</td><td>${pa != null && pb != null ? (pa > pb ? `▲ ${pa - pb}` : pa < pb ? `▼ ${pb - pa}` : '持平') : ''}</td></tr>`; }).join('')}
        </tbody></table>
        <p class="hint">每天的紀錄從這個版本開始累積；更早的練習只算進實力分數的起始值。</p>
      </section>`;
    $('#pgHome').onclick = T.renderHome;
    if (exams.length) mockChart($('#vMock'), exams);
    dailyChart($('#vDaily'), days);
    bindTips($('#app'));
  }

  window.Progress = { show };
})();
