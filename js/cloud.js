// 登入、雲端進度同步、排行榜（Supabase）
// js/cloud-config.js 沒填或 Supabase 套件載入失敗時，整個模組不啟用，網頁照舊用本機進度。
(() => {
  'use strict';
  const C = window.CLOUD_CONFIG || {};
  const T = window.TQ;
  if (!C.url || !C.anonKey || !window.supabase || !T) return;

  const sb = window.supabase.createClient(C.url, C.anonKey);
  const $ = (s) => document.querySelector(s);
  const esc = T.esc;
  const OWNER_KEY = 'toeicQuest.owner';   // 這台裝置的本機進度屬於哪個帳號
  const EXAM_KEY = 'toeicQuest.exam';
  let user = null;
  let pushTimer = null;
  let ready = false;                      // 雲端進度載入完成前不要上傳，避免蓋掉雲端資料

  const nickOf = (u) => (u && u.user_metadata && u.user_metadata.nickname) || (u && u.email ? u.email.split('@')[0] : '同學');
  const getOwner = () => { try { return localStorage.getItem(OWNER_KEY); } catch (e) { return null; } };
  const setOwner = (id) => { try { id ? localStorage.setItem(OWNER_KEY, id) : localStorage.removeItem(OWNER_KEY); } catch (e) { /* 無痕模式 */ } };

  // ───────────── 同步 ─────────────
  function onSave() {
    if (!user || !ready) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(push, 2000);
  }
  function bestMock(S) {
    const t = (S.exams || []).filter((e) => e.testId !== 'MINI' && e.total != null).map((e) => e.total);
    return t.length ? Math.max(...t) : null;
  }
  async function push() {
    clearTimeout(pushTimer);
    if (!user || !ready) return;
    const S = T.S;
    const now = new Date().toISOString();
    const [a, b] = await Promise.all([
      sb.from('progress').upsert({ user_id: user.id, data: S, updated_at: now }),
      sb.from('leaderboard').upsert({
        user_id: user.id, nickname: nickOf(user).slice(0, 20),
        week_id: S.week ? S.week.id : T.weekId(), week_xp: S.week ? S.week.xp : 0,
        streak: S.streak || 0, goal_date: S.lastGoalDate, best_mock: bestMock(S),
        total_correct: T.totalCorrect(), level: T.levelInfo(S.xp).level, updated_at: now,
      }),
    ]);
    if (a.error || b.error) console.warn('[cloud] 同步失敗', a.error || b.error);
  }
  // 切到背景或關分頁前，把還沒上傳的進度送出去
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && pushTimer) push(); });

  // 登入後決定用哪一份進度
  async function afterLogin(u) {
    user = u;
    ready = false;
    const { data: row, error } = await sb.from('progress').select('data').eq('user_id', u.id).maybeSingle();
    if (error) { T.toast('⚠️ 讀取雲端進度失敗，先用這台裝置的進度'); ready = true; return T.renderHome(); }
    const local = T.S, owner = getOwner(), cloud = row && row.data;
    const localUsed = (local.xp || 0) > 0;
    const use = (data) => { T.replaceState(data); setOwner(u.id); ready = true; push(); T.renderHome(); loadTodayResult().then(() => { if ($('#dailyCard')) T.renderHome(); }); };
    if (!cloud) return use(owner && owner !== u.id ? T.defaultState() : local);       // 第一次登入：沿用這台裝置的進度
    if (owner === u.id) return use((local.savedAt || 0) > (cloud.savedAt || 0) ? local : cloud);  // 同一人：用比較新的
    if (owner || !localUsed) { try { localStorage.removeItem(EXAM_KEY); } catch (e) { /* */ } return use(cloud); }
    // 這台裝置有「還沒登入時」的進度，雲端也有 → 讓使用者選
    T.showModal(`<h2>☁️ 要用哪一份進度？</h2>
      <p>這台裝置上有登入前的練習紀錄，雲端也有你的進度。</p>
      <button class="btn-primary" id="cdCloud">用雲端進度（${cloud.xp || 0} XP）</button>
      <button class="btn-secondary" id="cdLocal">用這台裝置的進度（${local.xp || 0} XP）</button>
      <p class="hint">沒選的那份會被覆蓋。</p>`);
    $('#cdCloud').onclick = () => { T.closeModal(); use(cloud); };
    $('#cdLocal').onclick = () => { T.closeModal(); use(local); };
  }

  async function logout() {
    await push();
    await sb.auth.signOut();
    user = null; ready = false; todayResult = undefined;
    setOwner(null);
    try { localStorage.removeItem(EXAM_KEY); } catch (e) { /* */ }
    T.replaceState(T.defaultState());
    T.closeModal();
    renderLogin();
  }

  // ───────────── 登入畫面 ─────────────
  const ERR = [
    [/Database error saving new user|EMAIL_NOT_INVITED/i, '這個 Email 不在邀請名單裡，請先請管理員把你加進名單。'],
    [/Invalid login credentials/i, 'Email 或密碼錯誤。'],
    [/Email not confirmed/i, '還沒完成 Email 驗證，請到信箱點確認連結。'],
    [/already registered/i, '這個 Email 已經註冊過了，請直接登入。'],
    [/Password should be at least/i, '密碼至少要 6 個字元。'],
    [/rate limit/i, '操作太頻繁，請稍等一下再試。'],
  ];
  const errMsg = (e) => (ERR.find(([re]) => re.test(e.message || '')) || [0, `發生錯誤：${e.message || e}`])[1];

  function renderLogin(tab = 'login') {
    const signup = tab === 'signup';
    $('#app').innerHTML = `
      <div class="auth">
        <div class="auth-logo">🐣→👑</div>
        <h1>TOEIC Quest</h1>
        <p class="hint">登入後進度會同步到所有裝置</p>
        <div class="auth-tabs"><button class="${signup ? '' : 'on'}" data-tab="login">登入</button><button class="${signup ? 'on' : ''}" data-tab="signup">註冊</button></div>
        <form class="card auth-form" id="authForm">
          ${signup ? '<label>暱稱（排行榜上顯示）<input name="nick" maxlength="20" required autocomplete="nickname"></label>' : ''}
          <label>Email<input name="email" type="email" required autocomplete="email"></label>
          <label>密碼<input name="pw" type="password" minlength="6" required autocomplete="${signup ? 'new-password' : 'current-password'}"></label>
          <div class="auth-msg" id="authMsg"></div>
          <button class="btn-primary" type="submit">${signup ? '註冊' : '登入'}</button>
          ${signup ? '' : '<button class="link" type="button" id="authForgot">忘記密碼？</button>'}
        </form>
      </div>`;
    document.querySelectorAll('[data-tab]').forEach((b) => { b.onclick = () => renderLogin(b.dataset.tab); });
    const msg = (t, ok) => { const m = $('#authMsg'); m.textContent = t; m.className = 'auth-msg' + (ok ? ' ok' : ''); };
    const form = $('#authForm');
    form.onsubmit = async (ev) => {
      ev.preventDefault();
      const f = new FormData(form), email = f.get('email').trim(), password = f.get('pw');
      const btn = form.querySelector('[type=submit]');
      btn.disabled = true; msg('');
      try {
        if (signup) {
          const nickname = f.get('nick').trim().slice(0, 20);
          const { data, error } = await sb.auth.signUp({ email, password, options: { data: { nickname }, emailRedirectTo: location.origin + location.pathname } });
          if (error) throw error;
          if (!data.session) { msg('註冊成功！請到信箱點確認連結，再回來登入。', true); return; }
        } else {
          const { error } = await sb.auth.signInWithPassword({ email, password });
          if (error) throw error;
        }
      } catch (e) { msg(errMsg(e)); } finally { btn.disabled = false; }
    };
    const forgot = $('#authForgot');
    if (forgot) forgot.onclick = async () => {
      const email = form.email.value.trim();
      if (!email) return msg('請先輸入 Email，再按忘記密碼。');
      const { error } = await sb.auth.resetPasswordForEmail(email, { redirectTo: location.origin + location.pathname });
      msg(error ? errMsg(error) : '已寄出重設密碼的信，請到信箱點連結。', !error);
    };
  }

  function askNewPassword() {
    T.showModal(`<h2>🔑 設定新密碼</h2>
      <form id="pwForm" class="auth-form"><label>新密碼<input name="pw" type="password" minlength="6" required autocomplete="new-password"></label>
      <div class="auth-msg" id="pwMsg"></div><button class="btn-primary" type="submit">儲存</button></form>`);
    $('#pwForm').onsubmit = async (ev) => {
      ev.preventDefault();
      const { error } = await sb.auth.updateUser({ password: new FormData(ev.target).get('pw') });
      if (error) { $('#pwMsg').textContent = errMsg(error); return; }
      T.closeModal(); T.toast('✅ 密碼已更新');
    };
  }

  // ───────────── 帳號 / 排行榜 ─────────────
  function heroButtons() {
    return user ? '<button class="icon-btn" id="btnRank" title="排行榜">🏆</button><button class="icon-btn" id="btnAccount" title="帳號">👤</button>' : '';
  }
  document.addEventListener('click', (ev) => {
    const b = ev.target.closest('#btnRank, #btnAccount');
    if (!b) return;
    if (b.id === 'btnRank') leaderboard();
    else account();
  });

  function account() {
    T.showModal(`<h2>👤 帳號</h2>
      <p><b>${esc(nickOf(user))}</b><br><small class="hint">${esc(user.email)}</small></p>
      <form id="nickForm" class="auth-form"><label>暱稱<input name="nick" maxlength="20" value="${esc(nickOf(user))}" required></label>
      <button class="btn-secondary" type="submit">更新暱稱</button></form>
      <p class="hint">進度會自動同步到雲端，換手機或電腦登入同一個帳號就能接著練。</p>
      <button class="btn-secondary" id="accLogout">登出</button>
      <button class="btn-secondary" data-close>關閉</button>`);
    $('#nickForm').onsubmit = async (ev) => {
      ev.preventDefault();
      const nickname = new FormData(ev.target).get('nick').trim().slice(0, 20);
      const { data, error } = await sb.auth.updateUser({ data: { nickname } });
      if (error) return T.toast('⚠️ ' + errMsg(error));
      user = data.user; await push(); T.closeModal(); T.toast('✅ 暱稱已更新');
    };
    $('#accLogout').onclick = logout;
  }

  // ───────────── 每日挑戰 ─────────────
  // 每天 10 題、所有人同一份（台灣時間換日）。題目清單第一個打開的人產生後存在 daily_sets，之後大家都讀同一份，
  // 這樣題庫中途新增題目也不會讓不同人拿到不同題。每人每天只記第一次的成績。
  const DAILY_N = 10;
  const dayId = (d = new Date()) => new Intl.DateTimeFormat('sv', { timeZone: 'Asia/Taipei' }).format(d);
  const shiftDay = (day, n) => { const d = new Date(day + 'T12:00:00Z'); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); };
  let todayResult;   // undefined = 還沒查、null = 今天還沒做、物件 = 今天的成績

  function seeded(str) {   // 同一天產生同一串亂數（mulberry32）
    let h = 1779033703 ^ str.length;
    for (let i = 0; i < str.length; i++) { h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
    let a = h >>> 0;
    return () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function makeDailySet(day) {
    const rnd = seeded('toeic-daily:' + day);
    const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
    // 聽力 5 題、閱讀 5 題；難度照 簡單 3／中等 4／困難 3 分配到各題
    const slots = [['part1', 1], ['part2', 2], ['part2', 2], ['part3', 3], ['part4', 4], ['part5', 5], ['part5', 5], ['part5', 5], ['part6', 6], ['part7', 7]];
    const levels = shuffle([1, 1, 1, 2, 2, 2, 2, 3, 3, 3]);
    const DIFF = window.DIFF || {}, used = new Set(), ids = [];
    const BANK = { part1: 'PART1', part2: 'PART2', part3: 'PART3', part4: 'PART4', part5: 'PART5', part6: 'PART6', part7: 'PART7' };
    slots.forEach(([k, p], n) => {
      const bank = window[BANK[k]] || [];
      let pool = bank.map((_, i) => i).filter((i) => !used.has(p + ':' + i) && (k !== 'part7' || bank[i].passages.length === 1));
      const lv = pool.filter((i) => (DIFF[`p${p}:${i}`] || 2) === levels[n]);
      if (lv.length) pool = lv;
      const i = pool[Math.floor(rnd() * pool.length)];
      used.add(p + ':' + i);
      const set = bank[i];
      ids.push(set && set.qs ? `p${p}:${i}.${Math.floor(rnd() * set.qs.length)}` : `p${p}:${i}`);
    });
    return ids;
  }
  async function getDailySet(day) {
    let { data } = await sb.from('daily_sets').select('items').eq('day', day).maybeSingle();
    if (data) return data.items;
    if (day !== dayId()) return null;
    await sb.from('daily_sets').insert({ day, items: makeDailySet(day) });   // 同時有人建立的話會撞主鍵，下面再讀一次就好
    ({ data } = await sb.from('daily_sets').select('items').eq('day', day).maybeSingle());
    return data ? data.items : null;
  }
  async function loadTodayResult() {
    const { data } = await sb.from('daily_results').select('*').eq('user_id', user.id).eq('day', dayId()).maybeSingle();
    todayResult = data || null;
    // 上次做到一半就關掉網頁 / 斷線 → 直接結算（沒作答的算錯），不能再繼續
    if (todayResult && !todayResult.finished && !dailyRun) await closeDaily(todayResult.answers || [], null);
  }

  function homeCard() {
    if (!user) return '';
    const sub = todayResult === undefined ? '載入中…'
      : todayResult ? `今天答對 ${todayResult.correct}/${todayResult.total}・看看大家的結果`
      : '今天的 10 題還沒挑戰・所有人同一份題目';
    return `<section class="modes"><button class="mode wide daily-card${todayResult ? ' done' : ''}" id="dailyCard">
      <span class="ic">📅</span><span><div class="nm">每日挑戰 ${todayResult ? '✅' : ''}</div><div class="sub">${sub}</div></span></button></section>`;
  }
  document.addEventListener('click', (ev) => { if (ev.target.closest('#dailyCard')) openDaily(); });

  // 每天只有一次機會：按下開始就先建一筆「進行中」的紀錄，每答一題存一次；做完或中途離開都會結算，之後不能再改
  let dailyRun = null;   // { ids, started }：這個分頁正在進行的每日挑戰
  const answersOf = (s, ids) => s.results.map((r, n) => ({ id: ids[n], ok: r.correct, pick: r.chosen }));
  async function closeDaily(answers, ms) {
    const correct = answers.filter((a) => a.ok).length;
    const { error } = await sb.from('daily_results').update({ answers, correct, total: DAILY_N, ms, finished: true })
      .eq('user_id', user.id).eq('day', dayId()).eq('finished', false);
    if (error) T.toast('⚠️ 成績上傳失敗：' + error.message);
    todayResult = { ...(todayResult || {}), answers, correct, total: DAILY_N, ms, finished: true };
  }

  async function openDaily() {
    if (todayResult === undefined) await loadTodayResult();
    if (todayResult) return dailyView(dayId());
    T.showModal(`<h2>📅 每日挑戰</h2>
      <p>今天的 10 題（聽力 5、閱讀 5），所有人都是同一份題目。</p>
      <ul class="rules"><li>每天<b>只有一次機會</b>：按下開始就算數，中途離開或關掉網頁就直接結算，<b>沒作答的題目算答錯</b>，不能再繼續。</li>
      <li>做完才看得到大家今天的結果：誰答對、誰答錯、各選了什麼。</li>
      <li>答錯的題目一樣會變成錯題怪物。</li></ul>
      <button class="btn-primary" id="dailyGo">開始挑戰</button><button class="btn-secondary" data-close>取消</button>`);
    $('#dailyGo').onclick = async () => {
      $('#dailyGo').disabled = true;
      const day = dayId();
      const ids = await getDailySet(day);
      const qs = (ids || []).map((id) => T.questionFromId(id)).filter(Boolean);
      if (qs.length < DAILY_N) { T.closeModal(); return T.toast('⚠️ 今天的題目載入失敗，請稍後再試'); }
      const { error } = await sb.from('daily_results').insert({ user_id: user.id, day, answers: [], correct: 0, total: DAILY_N, finished: false });
      if (error) {   // 已經挑戰過（例如在另一台裝置）
        T.closeModal(); await loadTodayResult();
        if (todayResult) return dailyView(day);
        return T.toast('⚠️ 無法開始：' + error.message);
      }
      todayResult = { answers: [], correct: 0, total: DAILY_N, finished: false };
      dailyRun = { ids, started: Date.now() };
      T.startSession({
        modeKey: 'daily', questions: qs,
        onAnswer: (s) => { sb.from('daily_results').update({ answers: answersOf(s, ids), correct: s.correct }).eq('user_id', user.id).eq('day', day).eq('finished', false).then(() => {}); },
        onQuit: (s) => { const run = dailyRun; dailyRun = null; closeDaily(answersOf(s, ids), Date.now() - run.started).then(() => T.renderHome()); },
        onFinish: (s) => finishDaily(s, ids),
      });
    };
  }
  async function finishDaily(s, ids) {
    const run = dailyRun; dailyRun = null;
    await closeDaily(answersOf(s, ids), run ? Date.now() - run.started : null);
    push();
    dailyView(dayId(), { xp: s.xpGained });
  }

  // 某一天的結果：排名、每題對錯表、點題號看題目和大家的選擇
  async function dailyView(day, info = {}) {
    T.stopSession(); T.Speech.stop(); T.closeModal();
    $('#app').innerHTML = '<div class="sbar"><button class="icon-btn" id="dvHome">✕</button><div class="grow"><b>📅 每日挑戰</b></div></div><p class="hint">載入中…</p>';
    $('#dvHome').onclick = T.renderHome;
    const today = dayId();
    const [ids, res, names] = await Promise.all([
      getDailySet(day),
      sb.from('daily_results').select('*').eq('day', day),
      sb.from('leaderboard').select('user_id,nickname'),
    ]);
    const nick = Object.fromEntries((names.data || []).map((r) => [r.user_id, r.nickname]));
    const rows = (res.data || []).slice().sort((a, b) => b.correct - a.correct || a.ms - b.ms);
    const mine = rows.find((r) => r.user_id === user.id);
    const locked = day === today && !mine;
    const mmss = (ms) => (ms == null ? '—' : `${Math.floor(ms / 60000)}:${String(Math.floor(ms / 1000) % 60).padStart(2, '0')}`);
    const medal = ['🥇', '🥈', '🥉'];
    const nav = `<div class="dv-nav"><button class="btn-ghost" data-day="${shiftDay(day, -1)}">← 前一天</button><b>${day === today ? '今天' : day}</b>
      <button class="btn-ghost" data-day="${shiftDay(day, 1)}" ${day >= today ? 'disabled' : ''}>後一天 →</button></div>`;
    let body;
    if (!ids) body = '<p class="hint">這天沒有每日挑戰。</p>';
    else if (locked) body = '<div class="card"><p>完成今天的挑戰後，才看得到大家的結果 🙈</p><button class="btn-primary" id="dvStart">開始今天的挑戰</button></div>';
    else if (!rows.length) body = '<p class="hint">這天沒有人挑戰。</p>';
    else {
      const qRate = ids.map((_, n) => rows.filter((r) => r.answers[n] && r.answers[n].ok).length);
      body = `
        ${info.xp != null ? `<div class="card dv-mine"><div class="big-emoji">${mine && mine.correct >= 8 ? '🏆' : mine && mine.correct >= 6 ? '🎉' : '💪'}</div>
          <h2>${mine ? `答對 ${mine.correct}/${mine.total}` : '完成！'}</h2><p>第 ${rows.indexOf(mine) + 1} 名・用時 ${mine ? mmss(mine.ms) : '—'}・<span class="xp">+${info.xp} XP</span></p></div>` : ''}
        <div class="card lb">${rows.map((r, i) => `<div class="lb-row${r.user_id === user.id ? ' me' : ''}">
          <span class="lb-rank">${i < 3 ? medal[i] : i + 1}</span><span class="lb-name">${esc(nick[r.user_id] || '同學')}<small>用時 ${mmss(r.ms)}</small></span>
          <b>${r.correct}/${r.total}</b></div>`).join('')}</div>
        <h3>每題對錯 <small class="hint">點題號看題目和大家的選擇</small></h3>
        <div class="dv-grid-wrap"><table class="dv-grid"><thead><tr><th></th>${ids.map((_, n) => `<th><button class="link" data-q="${n}">${n + 1}</button></th>`).join('')}</tr></thead><tbody>
          ${rows.map((r) => `<tr class="${r.user_id === user.id ? 'me' : ''}"><td>${esc(nick[r.user_id] || '同學')}</td>${ids.map((_, n) => `<td>${r.answers[n] ? (r.answers[n].ok ? '✅' : '❌') : '—'}</td>`).join('')}</tr>`).join('')}
          <tr class="dv-rate"><td>答對率</td>${qRate.map((c) => `<td>${Math.round((c / rows.length) * 100)}%</td>`).join('')}</tr>
        </tbody></table></div>`;
    }
    $('#app').innerHTML = `<div class="sbar"><button class="icon-btn" id="dvHome">✕</button><div class="grow"><b>📅 每日挑戰</b> <small>${rows.length} 人完成</small></div></div>${nav}${body}`;
    $('#dvHome').onclick = T.renderHome;
    document.querySelectorAll('[data-day]').forEach((b) => { b.onclick = () => dailyView(b.dataset.day); });
    const st = $('#dvStart'); if (st) st.onclick = openDaily;
    document.querySelectorAll('[data-q]').forEach((b) => { b.onclick = () => showDailyQuestion(ids, +b.dataset.q, rows, nick); });
  }

  function showDailyQuestion(ids, n, rows, nick) {
    const q = T.questionFromId(ids[n]);
    if (!q) return T.toast('這題已經不在題庫裡了');
    const right = q.kind === 'choice' ? q.options[q.answer] : null;
    const groups = {};
    rows.forEach((r) => { const a = r.answers[n]; if (!a) return; const k = a.pick == null ? '（時間到／未作答）' : a.pick; (groups[k] = groups[k] || []).push(nick[r.user_id] || '同學'); });
    const picks = Object.entries(groups).sort((a, b) => (b[0] === right) - (a[0] === right) || b[1].length - a[1].length)
      .map(([opt, who]) => `<li class="${opt === right ? 'ans' : ''}">${opt === right ? '✅' : '❌'} ${esc(opt)}<br><small>${who.map(esc).join('、')}</small></li>`).join('');
    T.showModal(`<h2>第 ${n + 1} 題 <small class="hint">${esc(q.tag || '')}</small></h2>
      ${q.audio ? '<button class="btn-ghost" id="dqPlay">🔊 播放音檔</button>' : ''}
      <div class="dq-prompt">${q.hideText ? (q.hintHtml || q.prompt) : q.prompt}</div>
      ${right ? `<p>正確答案：<b>${esc(right)}</b></p>` : ''}
      <h3>大家的選擇</h3><ul class="dq-picks">${picks}</ul>
      <details><summary>💡 詳解</summary>${q.explain}</details>
      <button class="btn-secondary" id="dqClose">關閉</button>`);
    const play = $('#dqPlay'); if (play) play.onclick = () => T.Speech.play(q.audio, q.audioFile);
    $('#dqClose').onclick = () => { T.Speech.stop(); T.closeModal(); };
  }

  // ───────────── 排行榜 ─────────────
  const pct = (a) => (a && a.t ? a.c / a.t : 0);
  const BOARDS = [
    { id: 'week', icon: '⚡', name: '本週 XP', val: (r, c) => (r.week_id === c.wk ? r.week_xp : 0), fmt: (v) => `${v} XP` },
    { id: 'streak', icon: '🔥', name: '連續天數', fmt: (v) => `${v} 天`,
      val: (r, c) => (r.goal_date === c.today || r.goal_date === c.yday ? r.streak : 0) },
    { id: 'daily', icon: '📅', name: '每日挑戰', val: (r, c) => pct(c.daily[r.user_id]),
      fmt: (v, r, c) => (c.daily[r.user_id] ? `${Math.round(v * 100)}%<small>${c.daily[r.user_id].d} 天</small>` : '—') },
    { id: 'mock', icon: '📝', name: '模擬考', val: (r) => r.best_mock || 0, fmt: (v) => (v ? `${v} 分` : '—') },
    { id: 'correct', icon: '✅', name: '累積答對', val: (r) => r.total_correct, fmt: (v) => `${v} 題` },
  ];
  const BOARD_HINT = {
    week: (c) => `本週從 ${c.wk}（週一）開始計算。`, streak: () => '連續達成每日目標的天數，昨天沒達成就歸零。',
    daily: () => '每日挑戰的平均答對率（括號是挑戰過的天數）。今天的成績要等你自己也做完才會算進來。',
    mock: () => '完整模擬考（200 題）的最高總分。', correct: () => '所有練習累計答對的題數。',
  };
  let boardTab = 'week';
  async function leaderboard() {
    T.stopSession();
    T.Speech.stop();
    $('#app').innerHTML = '<div class="sbar"><button class="icon-btn" id="lbHome">✕</button><div class="grow"><b>🏆 排行榜</b></div></div><p class="hint">載入中…</p>';
    $('#lbHome').onclick = T.renderHome;
    await push();
    const [{ data, error }, dr] = await Promise.all([sb.from('leaderboard').select('*'), sb.from('daily_results').select('user_id,correct,total')]);
    if (error) { $('#app').querySelector('.hint').textContent = '讀取失敗：' + error.message; return; }
    const daily = {};
    (dr.data || []).forEach((r) => { const a = (daily[r.user_id] = daily[r.user_id] || { c: 0, t: 0, d: 0 }); a.c += r.correct; a.t += r.total; a.d++; });
    const d = new Date(), y = new Date(d); y.setDate(d.getDate() - 1);
    const ds = (x) => x.toLocaleDateString('sv');
    const c = { wk: T.weekId(), today: ds(d), yday: ds(y), daily };
    const draw = () => {
      const B = BOARDS.find((b) => b.id === boardTab);
      const rows = data.map((r) => ({ r, v: B.val(r, c) })).sort((a, b) => b.v - a.v);
      let rank = 0, prev = null;
      const medal = ['🥇', '🥈', '🥉'];
      $('#app').innerHTML = `
        <div class="sbar"><button class="icon-btn" id="lbHome">✕</button><div class="grow"><b>🏆 排行榜</b> <small>${data.length} 位同學</small></div></div>
        <div class="lb-tabs">${BOARDS.map((b) => `<button class="${b.id === boardTab ? 'on' : ''}" data-board="${b.id}">${b.icon} ${b.name}</button>`).join('')}</div>
        <div class="card lb">
          ${rows.map(({ r, v }, i) => {
            if (v !== prev) { rank = i + 1; prev = v; }
            const me = r.user_id === user.id;
            return `<div class="lb-row${me ? ' me' : ''}"><span class="lb-rank">${v && rank <= 3 ? medal[rank - 1] : rank}</span>
              <span class="lb-name">${esc(r.nickname)}${me ? ' <small>（你）</small>' : ''}<small>Lv.${r.level || 1}</small></span><b class="lb-val">${B.fmt(v, r, c)}</b></div>`;
          }).join('')}
        </div>
        <p class="hint">${BOARD_HINT[boardTab](c)}</p>
        ${boardTab === 'daily' ? '<button class="btn-secondary" id="lbDaily">📅 看每日挑戰的詳細結果</button>' : ''}`;
      $('#lbHome').onclick = T.renderHome;
      document.querySelectorAll('[data-board]').forEach((b) => { b.onclick = () => { boardTab = b.dataset.board; draw(); }; });
      const go = $('#lbDaily'); if (go) go.onclick = () => dailyView(dayId());
    };
    draw();
  }

  // ───────────── 啟動 ─────────────
  async function boot() {
    $('#app').innerHTML = '<p class="hint" style="margin-top:40vh;text-align:center">載入中…</p>';
    let session = null;
    try { ({ data: { session } } = await sb.auth.getSession()); } catch (e) { /* 離線 */ }
    if (session) await afterLogin(session.user);
    else renderLogin();
    sb.auth.onAuthStateChange((event, s) => {
      if (event === 'PASSWORD_RECOVERY') askNewPassword();
      else if (event === 'SIGNED_IN' && s && (!user || user.id !== s.user.id)) afterLogin(s.user);
    });
  }

  window.Cloud = { boot, heroButtons, homeCard, onSave, push, loggedIn: () => !!user };
})();
