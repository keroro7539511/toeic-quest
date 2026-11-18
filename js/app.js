(() => {
  'use strict';

  // ───────────────────────── 工具 ─────────────────────────
  const $ = (s) => document.querySelector(s);
  const app = () => $('#app');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const pad = (n) => String(n).padStart(2, '0');
  const dateStr = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const today = () => dateStr(new Date());
  const addDays = (s, n) => { const d = new Date(s + 'T00:00:00'); d.setDate(d.getDate() + n); return dateStr(d); };
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const LETTERS = ['A', 'B', 'C', 'D'];
  const sayBtn = (text) => `<button class="say" data-say="${esc(text)}" title="朗讀">🔊</button>`;

  // ───────────────────────── 題庫 ─────────────────────────
  const CAT_NAMES = {
    office: '🏢 辦公室', meeting: '🤝 會議', travel: '✈️ 出差旅遊', hr: '👔 人事',
    finance: '💰 財務', marketing: '📣 行銷業務', production: '🏭 製造採購', general: '⭐ 常考詞',
  };
  const WORDS = window.VOCAB.map(([w, pos, zh, ex, cat]) => ({ id: 'v:' + w, w, pos, zh, ex, cat }));
  const WORD_BY_ID = Object.fromEntries(WORDS.map((x) => [x.id, x]));
  const P5 = window.PART5.map((x, i) => ({ ...x, id: 'p5:' + i }));
  const P2 = window.PART2.map((x, i) => ({ ...x, id: 'p2:' + i }));
  const P3 = window.PART3.map((x, i) => ({ ...x, id: 'p3:' + i }));
  const P1 = (window.PART1 || []).map((x, i) => ({ ...x, id: 'p1:' + i }));
  const P4 = (window.PART4 || []).map((x, i) => ({ ...x, id: 'p4:' + i }));
  const P6 = (window.PART6 || []).map((x, i) => ({ ...x, id: 'p6:' + i }));
  const P7 = (window.PART7 || []).map((x, i) => ({ ...x, id: 'p7:' + i }));
  const LISTENING_SECTIONS = ['part1', 'part2', 'part3', 'part4', 'dict'];
  const READING_SECTIONS = ['vocab', 'part5', 'part6', 'part7'];
  const GIST = (window.GIST || []).map((x, i) => ({ ...x, id: 'g:' + i }));
  const SCENES = window.SCENES || [];
  const SCENE_BY_ID = Object.fromEntries(SCENES.map((x) => [x.id, x]));
  const TRANS = window.TRANS || {};

  // ───────────────────────── 存檔 ─────────────────────────
  const STORE_KEY = 'toeicQuest.v1';
  const defaultState = () => ({
    xp: 0, streak: 0, lastGoalDate: null, maxCombo: 0,
    daily: { date: today(), count: 0, correct: 0 },
    stats: Object.fromEntries(['vocab', 'part1', 'part2', 'part3', 'part4', 'part5', 'part6', 'part7', 'dict', 'gist'].map((k) => [k, { c: 0, t: 0 }])),
    recent: { listening: [], reading: [] },
    srs: {}, seen: {}, mistakes: {}, badges: {},
    monstersDefeated: 0, bossesDefeated: 0, dictPerfect: 0, perfectRounds: 0, exams: [],
    settings: { rate: 1, accent: 'mixed', dailyGoal: 30, sound: true, aiVoice: true, preview: 15 },
  });
  const isObj = (x) => x && typeof x === 'object' && !Array.isArray(x);
  function merge(base, over) {
    for (const k in over) base[k] = isObj(base[k]) && isObj(over[k]) ? merge(base[k], over[k]) : over[k];
    return base;
  }
  function load() {
    try { const raw = JSON.parse(localStorage.getItem(STORE_KEY)); if (raw) return merge(defaultState(), raw); } catch (e) { /* 壞檔就重來 */ }
    return defaultState();
  }
  // 本週（週一開始）的 XP：每次存檔時把 XP 的增加量記到這週，排行榜用
  const weekId = (d = new Date()) => { const x = new Date(d); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return dateStr(x); };
  function save() {
    const wk = weekId();
    if (!S.week || S.week.id !== wk) S.week = { id: wk, xp: 0 };
    if (S.xpSeen != null && S.xp > S.xpSeen) S.week.xp += S.xp - S.xpSeen;
    S.xpSeen = S.xp;
    S.savedAt = Date.now();
    try { localStorage.setItem(STORE_KEY, JSON.stringify(S)); } catch (e) { /* 無痕模式等 */ }
    if (window.Cloud) window.Cloud.onSave();
  }
  const RATES = [0.5, 0.75, 1, 1.25];
  let S = load();
  if (!RATES.includes(S.settings.rate)) {
    S.settings.rate = RATES.reduce((a, b) => (Math.abs(b - S.settings.rate) < Math.abs(a - S.settings.rate) ? b : a));
  }

  function rollDaily() { if (S.daily.date !== today()) S.daily = { date: today(), count: 0, correct: 0 }; }
  function currentStreak() {
    return S.lastGoalDate === today() || S.lastGoalDate === addDays(today(), -1) ? S.streak : 0;
  }

  // ───────────────────────── 等級 / 分數 ─────────────────────────
  const xpForLevel = (n) => 50 * n * (n - 1);
  function levelInfo(xp) {
    let n = 1;
    while (xp >= xpForLevel(n + 1)) n++;
    const cur = xpForLevel(n), next = xpForLevel(n + 1);
    return { level: n, cur: xp - cur, need: next - cur, pct: (xp - cur) / (next - cur) };
  }
  const RANKS = [[1, '🐣', '多益新手'], [3, '📎', '實習生'], [5, '💼', '職場新人'], [7, '📊', '專案助理'], [9, '🚀', '業務主力'], [12, '🏅', '部門經理'], [15, '👑', '多益勇者']];
  function rankOf(level) { let r = RANKS[0]; for (const x of RANKS) if (level >= x[0]) r = x; return r; }

  function estimate() {
    const conv = (arr) => {
      if (arr.length < 10) return null;
      const acc = arr.reduce((a, b) => a + b, 0) / arr.length;
      return Math.max(5, Math.min(495, Math.round((acc * 470 + 20) / 5) * 5));
    };
    const l = conv(S.recent.listening), r = conv(S.recent.reading);
    return { l, r, total: l != null && r != null ? l + r : null };
  }

  // ───────────────────────── 成就 ─────────────────────────
  const masteredCount = () => Object.values(S.srs).filter((s) => s.box >= 3).length;
  const totalCorrect = () => Object.values(S.stats).reduce((a, s) => a + s.c, 0);
  const BADGES = [
    { id: 'first', icon: '🎯', name: '初次命中', desc: '答對第一題', test: () => totalCorrect() >= 1 },
    { id: 'combo10', icon: '🔥', name: '十連擊', desc: '連續答對 10 題', test: () => S.maxCombo >= 10 },
    { id: 'combo25', icon: '⚡', name: '無人能擋', desc: '連續答對 25 題', test: () => S.maxCombo >= 25 },
    { id: 'streak3', icon: '📅', name: '三日不輟', desc: '連續 3 天達成每日目標', test: () => S.streak >= 3 },
    { id: 'streak7', icon: '🗓️', name: '一週達人', desc: '連續 7 天達成每日目標', test: () => S.streak >= 7 },
    { id: 'vocab50', icon: '📚', name: '單字收藏家', desc: '熟練 50 個單字', test: () => masteredCount() >= 50 },
    { id: 'vocab150', icon: '🧠', name: '活字典', desc: '熟練 150 個單字', test: () => masteredCount() >= 150 },
    { id: 'listen50', icon: '🎧', name: '順風耳', desc: '聽力累計答對 50 題', test: () => LISTENING_SECTIONS.reduce((a, k) => a + S.stats[k].c, 0) >= 50 },
    { id: 'boss1', icon: '🐉', name: '屠龍者', desc: '擊敗第一隻 Boss', test: () => S.bossesDefeated >= 1 },
    { id: 'boss5', icon: '🏆', name: '魔王剋星', desc: '擊敗 5 隻 Boss', test: () => S.bossesDefeated >= 5 },
    { id: 'monster10', icon: '👾', name: '錯題清道夫', desc: '打倒 10 隻錯題怪物', test: () => S.monstersDefeated >= 10 },
    { id: 'perfect', icon: '💯', name: '完美回合', desc: '單回合 10 題以上全對', test: () => S.perfectRounds >= 1 },
    { id: 'dict10', icon: '✍️', name: '聽寫高手', desc: '聽寫完全正確 10 次', test: () => S.dictPerfect >= 10 },
    { id: 'xp1000', icon: '💎', name: '千分玩家', desc: '累積 1000 XP', test: () => S.xp >= 1000 },
    { id: 'xp5000', icon: '🌟', name: '傳說玩家', desc: '累積 5000 XP', test: () => S.xp >= 5000 },
    { id: 'exam1', icon: '📝', name: '模擬考戰士', desc: '完成一次完整模擬考', test: () => S.exams.some((e) => e.mode === 'full') },
    { id: 'exam600', icon: '🥈', name: '突破 600', desc: '模擬考總分達 600', test: () => S.exams.some((e) => e.total >= 600) },
    { id: 'exam750', icon: '🥇', name: '目標達成 750', desc: '模擬考總分達 750', test: () => S.exams.some((e) => e.total >= 750) },
  ];
  function checkBadges() {
    const got = [];
    for (const b of BADGES) if (!S.badges[b.id] && b.test()) { S.badges[b.id] = today(); got.push(b); }
    got.forEach((b) => toast(`${b.icon} 解鎖成就：${b.name}`, 'gold'));
    return got;
  }

  // ───────────────────────── 語音 ─────────────────────────
  const NOVELTY = /albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|deranged|hysterical/i;
  // 老舊或 Eloquence 引擎的語音，電子音很重，除非別無選擇否則不用
  const ROBOTIC = /\b(fred|junior|ralph|kathy|eddy|flo|reed|rocko|sandy|shelley|grandma|grandpa)\b/i;
  const FEMALE = /samantha|karen|moira|tessa|victoria|allison|ava|susan|zira|fiona|serena|kate|nicky|catherine|zoe|evan|flo|sandy|shelley|grandma|kathy|aria|jenny|libby|sonia|natasha|emma|female|google us english/i;
  const MALE = /daniel|alex|fred|\btom\b|david|mark|aaron|arthur|oliver|gordon|\blee\b|rishi|eddy|reed|rocko|grandpa|junior|ralph|nathan|guy|ryan|william|james|\bmale\b/i;
  // 多益考的是美、英、澳、加口音
  const TOEIC_ACCENT = /^en[-_](us|gb|au|ca|ie)/i;
  const GOOD_COMPACT = /samantha|daniel|karen|moira|alex|\btom\b|serena|allison|susan|victoria|oliver|arthur|martha/i;
  function voiceScore(v) {
    if (ROBOTIC.test(v.name)) return 0;
    let s = 30;
    if (/premium|enhanced|natural|neural|online/i.test(v.name)) s = 100;
    else if (/^google/i.test(v.name)) s = 80;
    else if (GOOD_COMPACT.test(v.name)) s = 60;
    if (!TOEIC_ACCENT.test(v.lang)) s -= 20;
    return s;
  }

  const Speech = {
    voices: [], token: 0, onState: null, rateOverride: null,
    rate() { return this.rateOverride || S.settings.rate; },
    applyRate() { if (this.audio) this.audio.playbackRate = this.rate(); },
    supported: () => 'speechSynthesis' in window,
    init() {
      if (!this.supported()) return;
      const loadVoices = () => { this.voices = speechSynthesis.getVoices().filter((v) => /^en[-_]/i.test(v.lang) && !NOVELTY.test(v.name)); };
      loadVoices();
      speechSynthesis.onvoiceschanged = loadVoices;
    },
    cast() {
      let pool = this.voices;
      const acc = S.settings.accent;
      if (acc !== 'mixed') {
        const p = pool.filter((v) => v.lang.replace('_', '-').toLowerCase().startsWith(acc));
        if (p.length) pool = p;
      }
      // 只在最高分那一級裡隨機，避免抽到電子音
      const best = (arr) => {
        if (!arr.length) return null;
        const top = Math.max(...arr.map(voiceScore));
        return top > 0 ? pick(arr.filter((v) => voiceScore(v) === top)) : null;
      };
      const W = best(pool.filter((v) => FEMALE.test(v.name)));
      const M = best(pool.filter((v) => !FEMALE.test(v.name) && MALE.test(v.name)));
      const any = best(pool);
      // 找不到對應性別的好語音時，用同一個好語音 + 音高區分男女（見 play）
      return { M: M || any, W: W || any };
    },
    speakOne(text, voice, pitch) {
      return new Promise((resolve) => {
        const u = new SpeechSynthesisUtterance(text);
        if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = 'en-US';
        u.rate = this.rate();
        u.pitch = pitch;
        let done = false, t;
        const fin = () => { if (!done) { done = true; clearTimeout(t); resolve(); } };
        const arm = (ms) => { t = setTimeout(() => (this.paused ? arm(1000) : fin()), ms); };
        arm(3000 + (text.length * 120) / this.rate());
        u.onend = fin; u.onerror = fin;
        speechSynthesis.speak(u);
      });
    },
    // AI 語音音檔（tools/gen_audio.py 產生），關掉設定或找不到檔案時退回瀏覽器語音
    files() { return S.settings.aiVoice && window.AUDIO_FILES ? window.AUDIO_FILES : {}; },
    // 播放狀態：idle / playing / paused
    state: 'idle', paused: false,
    setState(st) { this.state = st; this.onState && this.onState(st); },
    pause() {
      if (this.state !== 'playing') return;
      this.paused = true;
      if (this.audio) this.audio.pause(); else if (this.supported()) speechSynthesis.pause();
      this.setState('paused');
    },
    resume() {
      if (!this.paused) return;
      this.paused = false;
      if (this.audio) this.audio.play().catch(() => {}); else if (this.supported()) speechSynthesis.resume();
      this.setState('playing');
    },
    toggle() { if (this.paused) this.resume(); else this.pause(); },
    // 可暫停的等待（句子之間的停頓）
    async hold(ms, tok) {
      let left = ms;
      while (left > 0 && tok === this.token) { await sleep(Math.min(100, left)); if (!this.paused) left -= 100; }
    },
    audio: null,
    playFile(src) {
      return new Promise((resolve) => {
        const a = new Audio(src);
        this.audio = a;
        a.preservesPitch = true;
        a.playbackRate = this.rate();
        a.onended = () => resolve(true);
        a.onerror = () => resolve(false);
        a.play().catch(() => resolve(false));
      });
    },
    // items: [{ text, role: 'M'|'W' } | { pause: ms }]；fileKey 對應 AUDIO_FILES 的 key
    async play(items, fileKey) {
      this.stop();
      const tok = ++this.token;
      const src = fileKey && this.files()[fileKey];
      if (src) {
        this.setState('playing');
        const ok = await this.playFile(src);
        if (tok !== this.token) return false;
        this.setState('idle');
        if (ok) return true;
      }
      if (!this.supported()) { toast('這個瀏覽器不支援語音，建議用 Chrome 或 Safari'); return false; }
      await sleep(80);
      const { M, W } = this.cast();
      const same = M === W;
      this.setState('playing');
      for (const it of items) {
        if (tok !== this.token) return false;
        if (it.pause) { await this.hold(it.pause / this.rate(), tok); continue; }
        while (this.paused && tok === this.token) await sleep(100);
        const male = it.role && it.role[0] === 'M';
        await this.speakOne(it.text, male ? M : W, same ? (male ? 0.8 : 1.2) : 1);
      }
      if (tok === this.token) this.setState('idle');
      return tok === this.token;
    },
    say(text) { this.play([{ text, role: 'W' }], 't:' + text); },
    stop() {
      this.token++;
      if (this.audio) { this.audio.pause(); this.audio = null; }
      this.paused = false;
      if (this.supported()) speechSynthesis.cancel();
      this.setState('idle');
    },
  };

  // ───────────────────────── 音效 / 特效 ─────────────────────────
  const Sfx = {
    ctx: null,
    play(type) {
      if (!S.settings.sound) return;
      try {
        this.ctx = this.ctx || new (window.AudioContext || window.webkitAudioContext)();
        const c = this.ctx;
        const notes = { ok: [660, 880], ng: [220, 150], lvl: [523, 659, 784, 1047], hit: [180, 90], win: [523, 659, 784, 659, 1047] }[type];
        notes.forEach((f, i) => {
          const o = c.createOscillator(), g = c.createGain();
          o.type = type === 'ng' || type === 'hit' ? 'square' : 'triangle';
          o.frequency.value = f;
          const t = c.currentTime + i * 0.09;
          g.gain.setValueAtTime(0.0001, t);
          g.gain.exponentialRampToValueAtTime(0.12, t + 0.01);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
          o.connect(g).connect(c.destination);
          o.start(t); o.stop(t + 0.22);
        });
      } catch (e) { /* 沒音效也能玩 */ }
    },
  };

  function toast(html, cls = '') {
    const el = document.createElement('div');
    el.className = 'toast ' + cls;
    el.innerHTML = html;
    $('#toasts').appendChild(el);
    setTimeout(() => el.remove(), 3100);
  }
  function confetti(n = 80) {
    const colors = ['#5b5bf7', '#f59e0b', '#16a34a', '#ef4444', '#8b5cf6', '#06b6d4'];
    for (let i = 0; i < n; i++) {
      const el = document.createElement('div');
      el.className = 'confetti';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.background = pick(colors);
      el.style.animationDuration = 1.8 + Math.random() * 1.8 + 's';
      el.style.animationDelay = Math.random() * 0.4 + 's';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4200);
    }
  }
  function showModal(html) {
    $('#modalBox').innerHTML = html;
    $('#modal').classList.remove('hidden');
  }
  function closeModal() { $('#modal').classList.add('hidden'); }

  // ───────────────────────── 單字 SRS ─────────────────────────
  const INTERVALS = [0, 1, 2, 4, 7, 15, 30];
  const dueWords = () => WORDS.filter((w) => S.srs[w.id] && S.srs[w.id].due <= today());
  const newWords = () => WORDS.filter((w) => !S.srs[w.id]);
  function srsUpdate(w, correct) {
    const s = S.srs[w.id] || { box: 0 };
    s.box = correct ? Math.min(s.box + 1, INTERVALS.length - 1) : 0;
    s.due = addDays(today(), INTERVALS[s.box]);
    S.srs[w.id] = s;
  }

  function distractors(w, field, n = 3, samePos = false) {
    let pool = shuffle(WORDS.filter((x) => x.id !== w.id));
    pool.sort((a, b) => {
      const score = (x) => (samePos && x.pos === w.pos ? 0 : 1) + (x.cat === w.cat ? 0 : 0.5);
      return score(a) - score(b);
    });
    const out = [];
    for (const x of pool) {
      if (out.length >= n) break;
      if (x[field] !== w[field] && !out.some((o) => o[field] === x[field])) out.push(x);
    }
    return out;
  }
  function choiceFrom(correct, wrongs) {
    const opts = shuffle([correct, ...wrongs]);
    return { options: opts, answer: opts.indexOf(correct) };
  }

  // ───────────────────────── 題目產生器 ─────────────────────────
  function wordExplain(w) {
    const re = new RegExp(`\\b(${escRe(w.w)})\\b`, 'i');
    const ex = esc(w.ex).replace(re, '<b>$1</b>');
    return `<div><b>${esc(w.w)}</b> ${sayBtn(w.w)} <i>${esc(w.pos)}</i> ${esc(w.zh)}</div>
            <div class="ex">${ex} ${sayBtn(w.ex)}</div>`;
  }

  function vocabQ(w, kind, useSrs) {
    const q = {
      id: w.id, section: 'vocab', isNew: useSrs && !S.srs[w.id], kind: 'choice',
      explain: wordExplain(w), after: useSrs ? (c) => srsUpdate(w, c) : null,
    };
    const blankRe = new RegExp(`\\b${escRe(w.w)}\\b`, 'i');
    if (kind === 'blank' && !blankRe.test(w.ex)) kind = 'zh2en';

    if (kind === 'en2zh') {
      Object.assign(q, { tag: '單字・英選中', prompt: `<span class="big">${esc(w.w)}</span><span class="pos">${esc(w.pos)}</span> ${sayBtn(w.w)}` },
        choiceFrom(w.zh, distractors(w, 'zh').map((x) => x.zh)));
    } else if (kind === 'listen') {
      Object.assign(q, { tag: '單字・聽音選義', prompt: '🎧 聽單字，選出正確的中文意思', audio: [{ text: w.w, role: 'W' }], audioKey: 'w:' + w.id, audioFile: 't:' + w.w },
        choiceFrom(w.zh, distractors(w, 'zh').map((x) => x.zh)));
    } else if (kind === 'zh2en') {
      Object.assign(q, { tag: '單字・中選英', prompt: `<span class="big">${esc(w.zh)}</span><span class="pos">${esc(w.pos)}</span>` },
        choiceFrom(w.w, distractors(w, 'w', 3, true).map((x) => x.w)));
    } else if (kind === 'blank') {
      const sentence = esc(w.ex).replace(new RegExp(`\\b${escRe(esc(w.w))}\\b`, 'i'), '<span class="blank">____</span>');
      Object.assign(q, { tag: '單字・克漏字', prompt: `${sentence}<div class="sub">提示：${esc(w.zh)}</div>` },
        choiceFrom(w.w, distractors(w, 'w', 3, true).map((x) => x.w)));
    } else { // spell
      Object.assign(q, {
        tag: '單字・拼字挑戰', kind: 'input', placeholder: '輸入英文單字',
        prompt: `<span class="big">${esc(w.zh)}</span><span class="pos">${esc(w.pos)}</span><div class="sub">開頭字母：${esc(w.w[0])}…（${w.w.length} 個字母）</div>`,
        check: (typed) => {
          const ok = typed.trim().toLowerCase() === w.w.toLowerCase();
          return { correct: ok, html: ok ? '' : `<div>你的答案：<span class="w-ng">${esc(typed || '（空白）')}</span></div>` };
        },
      });
    }
    return q;
  }
  function vocabKindFor(w) {
    const box = S.srs[w.id] ? S.srs[w.id].box : 0;
    if (box === 0) return 'en2zh';
    if (box === 1) return 'listen';
    if (box === 2) return 'zh2en';
    if (box === 3) return 'blank';
    return pick(['spell', 'blank', 'listen']);
  }

  // 選項沒有錄音的題型，每次出題都打亂順序，避免記位置答題
  const shuffledOptions = (x) => choiceFrom(x.o[x.a], x.o.filter((_, i) => i !== x.a));

  function p5Q(x) {
    const sentence = esc(x.q).replace('______', '<span class="blank">______</span>');
    const filled = esc(x.q).replace('______', `<b>${esc(x.o[x.a])}</b>`);
    return {
      id: x.id, section: 'part5', kind: 'choice', tag: 'Part 5・句子填空',
      prompt: sentence, ...shuffledOptions(x),
      explain: `<div>${filled} ${sayBtn(x.q.replace('______', x.o[x.a]))}</div><div class="ex">💡 ${esc(x.e)}</div>`,
    };
  }

  function p2Q(x) {
    const r1 = pick(['M', 'W']), r2 = r1 === 'M' ? 'W' : 'M';
    const audio = [{ text: x.q, role: r1 }, { pause: 900 }];
    x.o.forEach((o, i) => { audio.push({ text: LETTERS[i], role: r2 }, { pause: 250 }, { text: o, role: r2 }, { pause: 700 }); });
    const lines = x.o.map((o, i) => `<li class="${i === x.a ? 'ans' : ''}">(${LETTERS[i]}) ${esc(o)} ${i === x.a ? '✓' : ''}</li>`).join('');
    return {
      id: x.id, section: 'part2', kind: 'choice', tag: 'Part 2・應答問題', hideText: true, hintable: true,
      prompt: '🎧 聽問句，選出最適當的回應',
      hintHtml: `<b>${esc(x.q)}</b>`,
      options: x.o, answer: x.a, audio, audioKey: x.id, audioFile: x.id,
      explain: `<ul class="transcript"><li><b>Q：${esc(x.q)}</b></li>${lines}</ul><div class="ex">💡 ${esc(x.e)}</div>`,
    };
  }

  // ── 圖表 / 文章（練習與模擬考共用）──
  function tableHtml(t, cls = 'gtable') {
    return `<table class="${cls}"><thead><tr>${t.headers.map((h) => `<th>${esc(h)}</th>`).join('')}</tr></thead>
      <tbody>${t.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  }
  function renderGraphic(g) {
    if (!g) return '';
    let inner = '';
    if (g.kind === 'table') inner = tableHtml(g);
    else if (g.kind === 'bars') {
      const max = Math.max(...g.items.map((it) => it[1]), 1);
      inner = `<div class="gbars">${g.items.map(([l, v]) => `
        <div class="gbar"><span class="gl">${esc(l)}</span><span class="gb"><i style="width:${(v / max) * 100}%"></i></span><span class="gv">${v}${esc(g.unit || '')}</span></div>`).join('')}</div>`;
    } else if (g.kind === 'list') inner = `<ul class="glist">${g.items.map((it) => `<li>${esc(it)}</li>`).join('')}</ul>`;
    return `<figure class="graphic"><figcaption>${esc(g.title)}</figcaption>${inner}</figure>`;
  }
  const PASSAGE_LABEL = {
    email: 'E-mail', letter: 'Letter', memo: 'Memo', notice: 'Notice', ad: 'Advertisement', article: 'Article',
    form: 'Form', invoice: 'Invoice', schedule: 'Schedule', webpage: 'Web page', review: 'Online review',
    chat: 'Online chat discussion', text: 'Text-message chain', report: 'Report', announcement: 'Announcement',
    receipt: 'Receipt', survey: 'Survey', brochure: 'Brochure',
  };
  // gap(n) 決定 Part 6 空格 {{n}} 要顯示成什麼
  function renderPassage(p, gap) {
    const fmt = (str) => esc(str)
      .replace(/\{\{(\d)\}\}/g, (_, n) => (gap ? gap(+n) : `<span class="gap">(${n})</span>`))
      .replace(/\[(\d)\]/g, '<b class="mark">[$1]</b>');
    const meta = p.meta ? `<table class="pmeta">${p.meta.map(([k, v]) => `<tr><th>${esc(k)}:</th><td>${fmt(v)}</td></tr>`).join('')}</table>` : '';
    const msgs = p.messages ? `<div class="chat">${p.messages.map(([n, t, m]) => `
      <div class="msg"><div class="mhd"><b>${esc(n)}</b> <small>[${esc(t)}]</small></div><div>${fmt(m)}</div></div>`).join('')}</div>` : '';
    const table = p.table ? tableHtml(p.table) : '';
    const body = p.body ? p.body.split(/\n{2,}/).map((par) => `<p>${fmt(par).replace(/\n/g, '<br>')}</p>`).join('') : '';
    return `<article class="passage k-${esc(p.kind)}"><div class="pkind">${PASSAGE_LABEL[p.kind] || esc(p.kind)}</div>
      ${p.title ? `<h3>${esc(p.title)}</h3>` : ''}${meta}${msgs}${table}${body}</article>`;
  }
  const ROLE_ICON = { M: '👨', W: '👩', M2: '🧔', W2: '👱‍♀️' };
  const TALK_LABEL = {
    announcement: '公告', voicemail: '電話留言', advertisement: '廣告', news: '新聞報導', broadcast: '廣播',
    tour: '導覽', meeting: '會議摘錄', talk: '談話', introduction: '介紹致詞', instructions: '操作說明',
  };
  const multiline = (str) => esc(str).replace(/\n/g, '<br>');
  // 句子插入題的 [1]-[4] 選項要保持順序
  const optionsFor = (x) => (/^\[\d\]$/.test(x.o[0]) ? { options: x.o, answer: x.a } : shuffledOptions(x));

  // ── 逐字稿：較難的單字片語加上中文註解（data/gloss/）──
  const GLOSS = window.GLOSS || {};
  // 同一組逐字稿中，每個註解只標在第一次出現的地方
  function glossify(text, terms, used) {
    const hits = [];
    (terms || []).slice().sort((a, b) => b[0].length - a[0].length).forEach(([en, zh]) => {
      if (used.has(en)) return;
      const m = new RegExp(`(?<![A-Za-z])${escRe(en)}(?![A-Za-z])`, 'i').exec(text);
      if (!m) return;
      const a = m.index, b = a + m[0].length;
      if (hits.some((h) => a < h.b && b > h.a)) return;
      hits.push({ a, b, zh });
      used.add(en);
    });
    hits.sort((x, y) => x.a - y.a);
    let out = '', pos = 0;
    hits.forEach((h) => {
      out += esc(text.slice(pos, h.a)) + `<span class="gl">${esc(text.slice(h.a, h.b))}<span class="glz">${esc(h.zh)}</span></span>`;
      pos = h.b;
    });
    return out + esc(text.slice(pos));
  }
  function transcriptHtml(kind, x, key) {
    const terms = GLOSS[key], used = new Set();
    const body = kind === 'part3'
      ? `<ul class="transcript">${x.lines.map(([r, t]) => `<li><b>${ROLE_ICON[r] || '🗣️'}</b> ${glossify(t, terms, used)} ${sayBtn(t)}</li>`).join('')}</ul>`
      : `<p class="script">${glossify(x.text, terms, used)}</p>`;
    return `<div class="tscript">${body}${used.size ? `<div class="gl-note">🔤 標註了 ${used.size} 個較難的單字片語</div>` : ''}</div>`;
  }

  function p1Q(x) {
    const lines = x.o.map((o, i) => `<li class="${i === x.a ? 'ans' : ''}">(${LETTERS[i]}) ${esc(o)} ${i === x.a ? '✓' : ''}</li>`).join('');
    const audio = [];
    x.o.forEach((o, i) => audio.push({ text: LETTERS[i], role: 'W' }, { pause: 250 }, { text: o, role: 'W' }, { pause: 700 }));
    return {
      id: x.id, section: 'part1', kind: 'choice', tag: 'Part 1・照片描述', hideText: true, hintable: true, hintHtml: '',
      prompt: `<img class="photo" src="${esc(x.img)}" alt="${esc(x.alt || '')}">`,
      options: x.o, answer: x.a, audio, audioKey: x.id, audioFile: x.id,
      explain: `<ul class="transcript">${lines}</ul><div class="ex">💡 ${esc(x.e)}</div>${x.credit ? `<div class="credit">📷 ${esc(x.credit)}</div>` : ''}`,
    };
  }

  function p3Q(conv, qi) {
    const x = conv.qs[qi];
    const audio = [];
    conv.lines.forEach(([role, text]) => audio.push({ text, role }, { pause: 350 }));
    const transcript = transcriptHtml('part3', conv, conv.id);
    const three = conv.lines.some(([r]) => r.length > 1);
    return {
      id: conv.id + '.' + qi, seenId: conv.id, section: 'part3', kind: 'choice',
      tag: `Part 3・${three ? '三人對話' : '簡短對話'}（第 ${qi + 1}/${conv.qs.length} 題）`,
      prompt: `🎧 聽對話後作答${renderGraphic(conv.graphic)}<div class="qtext"><b>${esc(x.q)}</b></div>`,
      ...optionsFor(x), audio, audioKey: conv.id, audioFile: conv.id,
      qText: esc(x.q), qRaw: x.q, note: `<div class="ex">💡 ${esc(x.e)}</div>`, transcript,
      script: `<details><summary>📜 對話逐字稿</summary>${transcript}</details>`,
      explain: `<div class="ex">💡 ${esc(x.e)}</div><details><summary>📜 對話逐字稿</summary>${transcript}</details>`,
    };
  }

  function p4Q(set, qi) {
    const x = set.qs[qi];
    const transcript = transcriptHtml('part4', set, set.id);
    return {
      id: set.id + '.' + qi, seenId: set.id, section: 'part4', kind: 'choice',
      tag: `Part 4・${TALK_LABEL[set.kind] || '獨白'}（第 ${qi + 1}/${set.qs.length} 題）`,
      prompt: `🎧 聽獨白後作答${renderGraphic(set.graphic)}<div class="qtext"><b>${esc(x.q)}</b></div>`,
      ...optionsFor(x), audio: [{ text: set.text, role: set.speaker }], audioKey: set.id, audioFile: set.id,
      qText: esc(x.q), qRaw: x.q, note: `<div class="ex">💡 ${esc(x.e)}</div>`, transcript,
      script: `<details><summary>📜 逐字稿</summary>${transcript}</details>`,
      explain: `<div class="ex">💡 ${esc(x.e)}</div><details><summary>📜 逐字稿</summary>${transcript}</details>`,
    };
  }

  function groupQ(set, build, label, redo = false) {
    const subs = set.qs.map((_, i) => build(set, i));
    const first = subs[0];
    return {
      kind: 'group', id: set.id, section: first.section, subs, redo, set,
      remake: () => groupQ(set, build, label, true),
      tag: first.tag.replace(/（第 .*$/, '') + (redo ? '・🔁 重寫（不計分）' : ''),
      prompt: `🎧 ${label}，回答以下 ${subs.length} 題${renderGraphic(set.graphic)}`,
      audio: first.audio, audioKey: first.audioKey, audioFile: first.audioFile, script: first.script, transcript: first.transcript,
    };
  }

  // ── 逐句精聽：Part 3 一句台詞一句；Part 4 依 data/trans 斷句 ──
  function sentencesOf(g) {
    const set = g.set, tr = TRANS[set.id];
    if (g.section === 'part3') return set.lines.map(([role, en], i) => ({ role, en, zh: tr ? tr[i] : '' }));
    const parts = tr || (set.text.match(/[^.!?]+[.!?]+(?=\s|$)/g) || [set.text]).map((x) => [x.trim(), '']);
    return parts.map(([en, zh]) => ({ role: set.speaker, en, zh }));
  }

  // ── 預讀：題目中的疑問詞自動標出，其他單字可以點一下自己標記 ──
  const KEYWORD = /^(what|where|who|whom|whose|why|when|how|which|according|look|graphic|imply|implies|mean|next|most|likely|probably|not)$/i;
  function markable(text) {
    return text.split(/([A-Za-z][A-Za-z'’-]*)/).map((part, i) => (i % 2
      ? `<span class="w${KEYWORD.test(part) ? ' kw' : ''}">${esc(part)}</span>` : esc(part))).join('');
  }

  // ── 開場猜情境 ──
  function gistQ(x) {
    const audio = [];
    x.lines.forEach(([role, text]) => audio.push({ text, role }, { pause: 350 }));
    const scene = SCENE_BY_ID[x.scene];
    return {
      id: x.id, section: 'gist', kind: 'choice', tag: `🎯 開場猜情境${x.ref ? '' : '・加練'}`,
      prompt: `🎧 只聽開場 ${x.lines.length} 句，判斷情境<div class="qtext"><b>${esc(x.q)}</b></div>`,
      ...shuffledOptions(x), audio, audioKey: x.id, audioFile: x.id,
      explain: `<div class="ex">💡 ${esc(x.e)}</div>
        <ul class="transcript">${x.lines.map(([r, t], k) => `<li><b>${ROLE_ICON[r] || '🗣️'}</b> ${esc(t)} ${sayBtn(t)}<div class="zh">${esc((x.zh || [])[k] || '')}</div></li>`).join('')}</ul>
        ${scene ? `<button class="link" data-scene="${scene.id}">📘 看「${esc(scene.name)}」情境攻略</button>` : ''}`,
    };
  }

  function p6Q(set, qi) {
    const x = set.qs[qi];
    const gap = (n) => (n === qi + 1 ? '<span class="gap cur">( ? )</span>' : `<span class="gap">(${n})</span>`);
    return {
      id: set.id + '.' + qi, seenId: set.id, section: 'part6', kind: 'choice',
      tag: `Part 6・短文填空（第 ${qi + 1}/4 格${x.type === 'insert' ? '・句子插入' : ''}）`,
      prompt: `<div class="passage-box">${renderPassage(set.passage, gap)}</div><div class="qtext"><b>空格 ( ? ) 該填入哪一個？</b></div>`,
      ...optionsFor(x),
      explain: `<div class="ex">💡 ${esc(x.e)}</div>`,
    };
  }

  function p7Q(set, qi) {
    const x = set.qs[qi];
    const n = set.passages.length;
    return {
      id: set.id + '.' + qi, seenId: set.id, section: 'part7', kind: 'choice',
      tag: `Part 7・${n === 1 ? '單篇' : n === 2 ? '雙篇' : '三篇'}閱讀（第 ${qi + 1}/${set.qs.length} 題）`,
      prompt: `<div class="passage-box">${set.passages.map((p) => renderPassage(p)).join('')}</div><div class="qtext"><b>${multiline(x.q)}</b></div>`,
      ...optionsFor(x),
      explain: `<div class="ex">💡 ${esc(x.e)}</div>`,
    };
  }

  // 聽寫：從單字例句和 Part 2 問句取材
  const DICT_POOL = [
    ...WORDS.map((w) => ({ id: 'dv:' + w.w, text: w.ex })),
    ...P2.map((x, i) => ({ id: 'dp:' + i, text: x.q })),
  ];
  function tokenize(s) {
    return s.toLowerCase().replace(/[’‘]/g, "'").replace(/[^a-z0-9'\s-]/g, ' ').split(/\s+/).filter(Boolean);
  }
  function dictQ(item) {
    return {
      id: item.id, section: 'dict', kind: 'input', tag: '聽寫挑戰', placeholder: '聽到什麼就打什麼',
      prompt: '✍️ 聽句子，把整句英文打出來<div class="sub">標點和大小寫不計分，答對 85% 以上就過關</div>',
      audio: [{ text: item.text, role: pick(['M', 'W']) }], audioKey: item.id, audioFile: 't:' + item.text,
      explain: `<div class="ex">${esc(item.text)} ${sayBtn(item.text)}</div>`,
      check: (typed) => {
        const words = item.text.split(/\s+/);
        const exp = [], owner = [];
        words.forEach((wd, i) => tokenize(wd).forEach((t) => { exp.push(t); owner.push(i); }));
        const got = tokenize(typed);
        // LCS 對齊，標出漏掉或打錯的字
        const n = exp.length, m = got.length;
        const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
        for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) dp[i][j] = exp[i] === got[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
        const hit = new Array(n).fill(false);
        for (let i = 0, j = 0; i < n && j < m;) {
          if (exp[i] === got[j]) { hit[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
        }
        const wordOk = words.map(() => true);
        hit.forEach((h, k) => { if (!h) wordOk[owner[k]] = false; });
        const score = dp[0][0] / Math.max(n, m, 1);
        if (score === 1) S.dictPerfect++;
        const html = `<div>正確率 <b>${Math.round(score * 100)}%</b></div><div>${words.map((wd, i) => `<span class="${wordOk[i] ? 'w-ok' : 'w-ng'}">${esc(wd)}</span>`).join(' ')}</div>`;
        return { correct: score >= 0.85, html };
      },
    };
  }

  function questionFromId(id) {
    const k = id.indexOf(':');
    const p = id.slice(0, k), key = id.slice(k + 1);
    if (p === 'v') { const w = WORD_BY_ID[id]; return w && vocabQ(w, pick(['en2zh', 'zh2en', 'listen', 'blank']), false); }
    if (p === 'p5') return P5[+key] && p5Q(P5[+key]);
    if (p === 'p2') return P2[+key] && p2Q(P2[+key]);
    if (p === 'p1') return P1[+key] && p1Q(P1[+key]);
    if (p === 'g') return GIST[+key] && gistQ(GIST[+key]);
    const sets = { p3: [P3, p3Q], p4: [P4, p4Q], p6: [P6, p6Q], p7: [P7, p7Q] }[p];
    if (sets) { const [ci, qi] = key.split('.').map(Number); const set = sets[0][ci]; return set && set.qs[qi] && sets[1](set, qi); }
    if (p === 'dv' || p === 'dp') { const item = DICT_POOL.find((d) => d.id === id); return item && dictQ(item); }
    return null;
  }

  function setQuestions(list, nSets, build) {
    return leastSeen(list, nSets).flatMap((set) => set.qs.map((_, i) => build(set, i)));
  }

  // 優先出比較少練過的題目
  function leastSeen(list, n) {
    return list
      .map((x) => ({ x, s: (S.seen[x.id] || 0) + Math.random() * 0.9 }))
      .sort((a, b) => a.s - b.s)
      .slice(0, n)
      .map((o) => o.x);
  }

  // ───────────────────────── Boss / 怪物 ─────────────────────────
  const BOSSES = [
    { name: '截止日巨龍', en: 'Deadline Dragon', emoji: '🐉' },
    { name: '無限會議章魚', en: 'Meeting Octopus', emoji: '🐙' },
    { name: '發票幽靈', en: 'Invoice Ghost', emoji: '👻' },
    { name: '文法機器人', en: 'Grammar Bot', emoji: '🤖' },
    { name: '加班殭屍', en: 'Overtime Zombie', emoji: '🧟' },
    { name: '客訴外星人', en: 'Complaint Alien', emoji: '👽' },
  ];
  function bossFor(lv) { return { ...BOSSES[(lv - 1) % BOSSES.length], lv, hp: Math.min(150, 80 + lv * 10) }; }
  const MONSTERS = ['👾', '👹', '👺', '🦠', '🐛', '🦇', '🕷️', '🐍', '🦂', '🐸', '🦑', '🐊'];
  function monsterOf(id) { let h = 0; for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0; return MONSTERS[h % MONSTERS.length]; }
  const SECTION_NAMES = { gist: '開場猜情境', vocab: '單字', part1: 'Part 1', part2: 'Part 2', part3: 'Part 3', part4: 'Part 4', part5: 'Part 5', part6: 'Part 6', part7: 'Part 7', dict: '聽寫' };

  // ───────────────────────── 練習引擎 ─────────────────────────
  let session = null;
  let timerId = null;
  const PRAISE = ['答對了！', '太強了！', 'Nice!', '完美！', '就是這樣！', 'Excellent!'];

  function startSession(cfg) {
    Speech.stop();
    closeModal();
    if (!cfg.questions.length) { toast('目前沒有題目可以練習'); return; }
    session = {
      ...cfg, i: 0, correct: 0, combo: 0, maxCombo: 0, xpGained: 0, results: [], killed: 0,
      lastAudioKey: null, answered: false, hint: false, bossHp: cfg.boss ? cfg.boss.hp : 0,
    };
    renderQuestion();
  }

  function renderQuestion() {
    const s = session, q = s.questions[s.i];
    s.answered = false; s.hint = false;
    const monster = s.mode === 'monster' ? S.mistakes[q.id] : null;
    app().innerHTML = `
      <div class="sbar">
        <button class="icon-btn" id="quit" title="離開">✕</button>
        <div class="progress"><div style="width:${(s.i / s.questions.length) * 100}%"></div></div>
        <div class="combo ${s.combo >= 3 ? 'hot' : ''}">${s.combo >= 2 ? '🔥×' + s.combo : ''}</div>
      </div>
      ${s.boss ? `
        <div class="boss" style="position:relative">
          <div class="boss-emoji" id="bossEmoji">${s.boss.emoji}</div>
          <div class="boss-info">
            <div class="boss-name">${s.boss.name}<small>Lv.${s.boss.lv}</small></div>
            <div class="hpbar"><div id="bossHp" style="width:${(Math.max(0, s.bossHp) / s.boss.hp) * 100}%"></div></div>
          </div>
          <div class="hearts" id="hearts">${'❤️'.repeat(s.hearts)}${'🖤'.repeat(s.maxHearts - s.hearts)}</div>
        </div>` : ''}
      ${monster ? `
        <div class="monster-hd">
          <div class="monster-emoji" id="monsterEmoji">${monsterOf(q.id)}</div>
          <div class="boss-info">
            <div class="boss-name">錯題怪物<small>${SECTION_NAMES[q.section]}</small></div>
            <div class="hint" style="text-align:left;margin:0">答對 ${monster.hp} 次就能打倒牠</div>
          </div>
          <div class="hearts" id="monsterHp">${'💚'.repeat(monster.hp)}</div>
        </div>` : ''}
      ${s.timer ? '<div class="timer"><div id="timerbar"></div></div>' : ''}
      <div class="qcard">
        <div class="qtag">${q.tag}${q.isNew ? '<span class="new">NEW</span>' : ''}</div>
        <div class="qprompt">${q.prompt}<div id="hintText"></div></div>
        ${q.audio ? `<div class="audio-row">
            <button class="btn-audio" id="play">🔊 播放</button>
            <button class="btn-pause" id="pauseBtn" disabled title="暫停 / 繼續（快捷鍵 P）">⏸ 暫停</button>
            <div class="speed" title="語速">${RATES.map((r) => `<button data-rate="${r}" class="${S.settings.rate === r ? 'on' : ''}">×${r}</button>`).join('')}</div>
            ${q.hintable ? '<button class="btn-ghost" id="hint">👀 看文字（XP 減半）</button>' : ''}
            ${q.kind === 'group' ? '<button class="btn-ghost" id="showLines">🔍 逐句精聽</button><button class="btn-ghost" id="showScript">📜 逐字稿</button>' : ''}
          </div>` : ''}
        ${q.kind === 'group' && !q.redo && S.settings.preview > 0 ? `<div class="preview-bar" id="previewBar">
            <div>📖 <b>預讀題目</b>：<b id="pvSec">${S.settings.preview}</b> 秒後開始播放。先看三題在問什麼，點單字可以畫重點。</div>
            <div class="pvtrack"><i id="pvFill"></i></div>
            <button class="btn-secondary" id="pvSkip">讀好了，開始播放 ▶</button>
          </div>` : ''}
        ${q.kind === 'group' ? `<div class="script-box hidden" id="linesBox">
            <div class="script-head"><b>🔍 逐句精聽</b><small>一次播一句，聽不懂再點 👁 看原文與翻譯</small></div>
            <div class="line-ctrl"><button class="btn-audio" id="lineNext">▶ 播下一句</button><button class="btn-ghost" id="lineAgain">🔁 重聽這句</button><button class="btn-ghost" id="lineReveal">👁 全部顯示</button></div>
            <ol class="lines">${sentencesOf(q).map((x, i) => `
              <li class="line" data-line="${i}">
                <button class="line-play" data-line-play="${i}" title="播放這句">▶</button>
                <div class="line-body"><span class="line-hidden">第 ${i + 1} 句${x.role ? `（${ROLE_ICON[x.role] || ''}）` : ''}</span>
                  <div class="line-text hidden">${ROLE_ICON[x.role] && q.section === 'part3' ? `<b>${ROLE_ICON[x.role]}</b> ` : ''}${glossify(x.en, GLOSS[q.id], new Set())}${x.zh ? `<div class="zh">${esc(x.zh)}</div>` : ''}</div></div>
                <button class="line-eye" data-line-eye="${i}" title="顯示原文">👁</button>
              </li>`).join('')}</ol>
          </div>` : ''}
        ${q.kind === 'group' ? `<div class="script-box hidden" id="scriptBox">
            <div class="script-head"><b>📜 英文逐字稿</b><button class="btn-ghost" id="toggleZh">隱藏中文註解</button></div>
            ${q.transcript}</div>` : ''}
        <div class="answers">${renderAnswers(q)}</div>
        <div class="feedback" id="feedback"></div>
      </div>`;

    $('#quit').onclick = () => { stopTimer(); renderHome(); };
    if (q.audio) {
      $('#play').onclick = () => Speech.play(q.audio, q.audioFile);
      $('#pauseBtn').onclick = () => Speech.toggle();
      document.querySelectorAll('[data-rate]').forEach((b) => {
        b.onclick = () => {
          S.settings.rate = +b.dataset.rate;
          save();
          Speech.applyRate();
          document.querySelectorAll('[data-rate]').forEach((x) => x.classList.toggle('on', x === b));
        };
      });
      if (q.audioKey !== s.lastAudioKey) {
        s.lastAudioKey = q.audioKey;
        if ($('#previewBar')) startPreview(q);
        else setTimeout(() => session === s && Speech.play(q.audio, q.audioFile), 300);
      }
    }
    if (q.hintable) $('#hint').onclick = () => showHint(q);
    if (q.kind === 'group') {
      s.sel = {};
      document.querySelectorAll('.opt').forEach((b) => {
        b.onclick = () => {
          if (s.answered) return;
          s.sel[b.dataset.sub] = +b.dataset.i;
          document.querySelectorAll(`.opt[data-sub="${b.dataset.sub}"]`).forEach((x) => x.classList.toggle('sel', x === b));
          $('#submitGroup').disabled = Object.keys(s.sel).length < q.subs.length;
        };
      });
      $('#submitGroup').onclick = answerGroup;
      $('#showScript').onclick = () => {
        const box = $('#scriptBox');
        const open = box.classList.toggle('hidden') === false;
        $('#showScript').textContent = open ? '📜 收起逐字稿' : '📜 逐字稿';
        // 作答前偷看逐字稿，這組 XP 減半（跟 Part 2 看文字一樣）
        if (open && !s.answered && !s.hint) { s.hint = true; toast('📜 作答前看逐字稿，這組 XP 減半'); }
      };
      bindLines(q);
      document.querySelectorAll('.gq .w').forEach((w) => { w.onclick = () => w.classList.toggle('mk'); });
      $('#toggleZh').onclick = () => {
        const off = $('#scriptBox').classList.toggle('nozh');
        $('#toggleZh').textContent = off ? '顯示中文註解' : '隱藏中文註解';
      };
    } else if (q.kind === 'choice') {
      document.querySelectorAll('.opt').forEach((b) => { b.onclick = () => answer(+b.dataset.i); });
    } else {
      const inp = $('#inp');
      $('#inform').onsubmit = (e) => { e.preventDefault(); answer(null, inp.value); };
      setTimeout(() => inp.focus(), 50);
    }
    if (s.timer) startTimer(s.timer + (q.audio ? 15 : 0));
  }

  function renderAnswers(q) {
    if (q.kind === 'group') {
      return q.subs.map((sub, j) => `
        <div class="gq">
          <div class="qtext"><b>${j + 1}. ${sub.qRaw ? markable(sub.qRaw) : sub.qText}</b></div>
          ${sub.options.map((o, i) => `
            <button class="opt" data-sub="${j}" data-i="${i}"><span class="letter">${LETTERS[i]}</span><span class="otext">${esc(o)}</span></button>`).join('')}
          <div class="gfb" id="gfb${j}"></div>
        </div>`).join('') + '<button class="btn-primary" id="submitGroup" disabled>送出答案</button>';
    }
    if (q.kind === 'input') {
      return `<form class="inform" id="inform"><input id="inp" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${esc(q.placeholder)}"><button>送出</button></form>`;
    }
    return q.options.map((o, i) => `
      <button class="opt" data-i="${i}"><span class="letter">${LETTERS[i]}</span><span class="otext">${q.hideText ? '' : esc(o)}</span></button>`).join('');
  }

  function showHint(q) {
    if (session.answered || session.hint) return;
    session.hint = true;
    $('#hintText').innerHTML = `<div class="sub" style="margin-top:8px">${q.hintHtml}</div>`;
    document.querySelectorAll('.opt .otext').forEach((el, i) => { el.textContent = q.options[i]; });
    $('#hint').remove();
  }

  function startTimer(sec) {
    stopTimer();
    const end = Date.now() + sec * 1000;
    timerId = setInterval(() => {
      const bar = $('#timerbar');
      const left = end - Date.now();
      const pct = Math.max(0, left / (sec * 1000));
      if (bar) { bar.style.width = pct * 100 + '%'; bar.classList.toggle('danger', pct < 0.25); }
      if (left <= 0) {
        stopTimer();
        toast('⏰ 時間到！');
        const inp = $('#inp');
        answer(-1, inp ? inp.value : '');
      }
    }, 100);
  }
  function stopTimer() { clearInterval(timerId); timerId = null; }

  function answer(choice, typed) {
    const s = session;
    if (!s || s.answered) return;
    const q = s.questions[s.i];
    s.answered = true;
    stopTimer();

    let correct, detail = '';
    if (q.kind === 'choice') {
      correct = choice === q.answer;
      document.querySelectorAll('.opt').forEach((b, i) => {
        b.disabled = true;
        if (q.hideText) b.querySelector('.otext').textContent = q.options[i];
        if (i === q.answer) b.classList.add('correct');
        else if (i === choice) b.classList.add('wrong');
      });
    } else {
      const r = q.check(typed || '');
      correct = r.correct; detail = r.html;
      $('#inp').disabled = true;
      $('#inform button').disabled = true;
    }

    const gained = record(q, correct);
    const last = s.results[s.results.length - 1];
    if (last) last.chosen = q.kind === 'choice' && choice >= 0 ? q.options[choice] : null;
    Sfx.play(correct ? 'ok' : 'ng');
    if (s.boss) bossEffect(correct);
    if (s.mode === 'monster' && correct && !S.mistakes[q.id]) {
      const m = $('#monsterEmoji'); if (m) m.classList.add('dead');
      const hp = $('#monsterHp'); if (hp) hp.textContent = '';
    } else if (s.mode === 'monster' && S.mistakes[q.id]) {
      const hp = $('#monsterHp'); if (hp) hp.textContent = '💚'.repeat(S.mistakes[q.id].hp);
      if (correct) { const m = $('#monsterEmoji'); m && m.classList.add('hit'); }
    }

    const ended = s.i + 1 >= s.questions.length || (s.boss && (s.bossHp <= 0 || s.hearts <= 0));
    const comboNote = correct && s.combo >= 3 ? ` <small>🔥 ${s.combo} 連擊加成</small>` : '';
    $('#feedback').innerHTML = `
      <div class="fb ${correct ? 'ok' : 'ng'}">
        <div class="fb-title"><span>${correct ? '✅ ' + pick(PRAISE) : choice === -1 ? '⏰ 時間到' : '❌ 差一點！'}${comboNote}</span>${gained ? `<span class="xp">+${gained} XP</span>` : ''}</div>
        ${detail}${q.explain}
      </div>
      <button class="btn-primary" id="next">${ended ? '看結果 🏁' : '下一題 →'}</button>`;
    const next = $('#next');
    next.onclick = () => { Speech.stop(); if (ended) finish(); else { s.i++; renderQuestion(); } };
    next.focus({ preventScroll: true });
    next.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    // 更新連擊顯示
    const comboEl = document.querySelector('.combo');
    comboEl.className = 'combo' + (s.combo >= 3 ? ' hot' : '');
    comboEl.textContent = s.combo >= 2 ? '🔥×' + s.combo : '';
  }

  let previewTimer = null;
  function startPreview(q) {
    const s = session, total = S.settings.preview;
    const end = Date.now() + total * 1000;
    const go = () => {
      clearInterval(previewTimer);
      const bar = $('#previewBar');
      if (bar) bar.remove();
      if (session === s && s.questions[s.i] === q) Speech.play(q.audio, q.audioFile);
    };
    clearInterval(previewTimer);
    previewTimer = setInterval(() => {
      if (session !== s || s.questions[s.i] !== q || !$('#previewBar')) { clearInterval(previewTimer); return; }
      const left = end - Date.now();
      $('#pvSec').textContent = Math.max(0, Math.ceil(left / 1000));
      $('#pvFill').style.width = Math.min(100, (1 - left / (total * 1000)) * 100) + '%';
      if (left <= 0) go();
    }, 100);
    $('#pvSkip').onclick = go;
    // 按播放鍵也等於跳過預讀
    $('#play').addEventListener('click', () => { clearInterval(previewTimer); const bar = $('#previewBar'); if (bar) bar.remove(); });
  }

  function bindLines(q) {
    const s = session;
    const lines = sentencesOf(q);
    let cur = -1;
    const box = $('#linesBox');
    const play = (i) => {
      if (i < 0 || i >= lines.length) return;
      cur = i;
      document.querySelectorAll('.line').forEach((li) => li.classList.toggle('cur', +li.dataset.line === i));
      document.querySelector(`.line[data-line="${i}"]`).classList.add('heard');
      const { en, role } = lines[i];
      Speech.play([{ text: en, role }], 't:' + en);
      $('#lineNext').textContent = i + 1 < lines.length ? '▶ 播下一句' : '✅ 已到最後一句';
    };
    const reveal = (i) => {
      const li = document.querySelector(`.line[data-line="${i}"]`);
      li.querySelector('.line-text').classList.remove('hidden');
      li.querySelector('.line-hidden').classList.add('hidden');
      // 作答前看原文，XP 減半（只聽不看不扣）
      if (!s.answered && !s.hint) { s.hint = true; toast('👁 作答前看原文，這組 XP 減半'); }
    };
    $('#showLines').onclick = () => {
      const open = box.classList.toggle('hidden') === false;
      $('#showLines').textContent = open ? '🔍 收起逐句' : '🔍 逐句精聽';
      if (open) {
        clearInterval(previewTimer);
        const bar = $('#previewBar'); if (bar) bar.remove();
        Speech.stop();
      }
    };
    $('#lineNext').onclick = () => play(cur + 1);
    $('#lineAgain').onclick = () => play(Math.max(0, cur));
    $('#lineReveal').onclick = () => lines.forEach((_, i) => reveal(i));
    document.querySelectorAll('[data-line-play]').forEach((b) => { b.onclick = () => play(+b.dataset.linePlay); });
    document.querySelectorAll('[data-line-eye]').forEach((b) => { b.onclick = () => reveal(+b.dataset.lineEye); });
  }

  function answerGroup() {
    const s = session;
    if (!s || s.answered) return;
    const g = s.questions[s.i];
    s.answered = true;
    let right = 0, gained = 0;
    g.subs.forEach((sub, j) => {
      const choice = s.sel[j];
      const ok = choice === sub.answer;
      document.querySelectorAll(`.opt[data-sub="${j}"]`).forEach((b, i) => {
        b.disabled = true;
        b.classList.remove('sel');
        if (i === sub.answer) b.classList.add('correct');
        else if (i === choice) b.classList.add('wrong');
      });
      $('#gfb' + j).innerHTML = `<div class="fb ${ok ? 'ok' : 'ng'}"><b>${ok ? '✅ 答對' : '❌ 答錯'}</b>${sub.note}</div>`;
      // 重寫只是練習：不給 XP、不動統計和錯題怪物
      if (!g.redo) gained += record(sub, ok);
      if (ok) right++;
    });
    Sfx.play(right === g.subs.length ? 'ok' : 'ng');
    $('#submitGroup').remove();
    const ended = s.i + 1 >= s.questions.length;
    $('#feedback').innerHTML = `
      <div class="fb ${right === g.subs.length ? 'ok' : 'ng'}">
        <div class="fb-title"><span>${right === g.subs.length ? '✅ ' + pick(PRAISE) : right ? '💪 繼續加油' : '❌ 再聽一次看看'}　答對 ${right}/${g.subs.length}${g.redo ? '（重寫）' : ''}</span>${gained ? `<span class="xp">+${gained} XP</span>` : ''}</div>
        ${$('#scriptBox').classList.contains('hidden') ? g.script : ''}
      </div>
      <div class="two-btn">
        <button class="btn-secondary" id="redo">🔁 重寫這組</button>
        <button class="btn-primary" id="next">${ended ? '看結果 🏁' : '下一組 →'}</button>
      </div>`;
    $('#redo').onclick = () => {
      Speech.stop();
      s.questions[s.i] = g.remake();
      s.lastAudioKey = null; // 讓錄音從頭自動播放
      renderQuestion();
      window.scrollTo(0, 0);
    };
    const next = $('#next');
    next.onclick = () => { Speech.stop(); if (ended) finish(); else { s.i++; renderQuestion(); } };
    next.focus({ preventScroll: true });
    const comboEl = document.querySelector('.combo');
    comboEl.className = 'combo' + (s.combo >= 3 ? ' hot' : '');
    comboEl.textContent = s.combo >= 2 ? '🔥×' + s.combo : '';
  }

  function record(q, correct) {
    const s = session;
    rollDaily();
    const before = levelInfo(S.xp).level;
    const st = S.stats[q.section]; st.t++; if (correct) st.c++;
    const bucket = LISTENING_SECTIONS.includes(q.section) ? 'listening' : READING_SECTIONS.includes(q.section) ? 'reading' : null;
    if (bucket) {
      S.recent[bucket].push(correct ? 1 : 0);
      if (S.recent[bucket].length > 80) S.recent[bucket].shift();
    }
    const seenId = q.seenId || q.id;
    S.seen[seenId] = (S.seen[seenId] || 0) + 1;

    S.daily.count++; if (correct) S.daily.correct++;
    if (S.daily.count >= S.settings.dailyGoal && S.lastGoalDate !== today()) {
      S.streak = S.lastGoalDate === addDays(today(), -1) ? S.streak + 1 : 1;
      S.lastGoalDate = today();
      toast(`🎉 今日目標達成！連續 ${S.streak} 天`, 'gold');
    }

    let xp = 0;
    if (correct) {
      s.correct++; s.combo++;
      s.maxCombo = Math.max(s.maxCombo, s.combo);
      S.maxCombo = Math.max(S.maxCombo, s.combo);
      xp = 10 + (s.combo >= 3 ? 5 : 0);
      if (s.hint) xp = Math.ceil(xp / 2);
    } else {
      s.combo = 0;
    }

    if (s.mode === 'monster') {
      const m = S.mistakes[q.id];
      if (m) {
        if (correct) {
          m.hp--;
          if (m.hp <= 0) { delete S.mistakes[q.id]; S.monstersDefeated++; s.killed++; xp += 20; }
        } else m.hp = 2;
      }
    } else if (!correct) {
      S.mistakes[q.id] = { hp: 2 };
    }

    if (q.after) q.after(correct);
    S.xp += xp; s.xpGained += xp;
    s.results.push({ q, correct });
    checkBadges();
    save();
    if (levelInfo(S.xp).level > before) setTimeout(() => showLevelUp(levelInfo(S.xp).level), 500);
    return xp;
  }

  function bossEffect(correct) {
    const s = session;
    const box = document.querySelector('.boss');
    if (correct) {
      const dmg = s.combo >= 3 ? 15 : 10;
      s.bossHp -= dmg;
      $('#bossHp').style.width = (Math.max(0, s.bossHp) / s.boss.hp) * 100 + '%';
      const e = $('#bossEmoji');
      e.classList.remove('hit'); void e.offsetWidth; e.classList.add(s.bossHp <= 0 ? 'dead' : 'hit');
      const d = document.createElement('div');
      d.className = 'dmg'; d.textContent = (dmg > 10 ? '💥 CRIT -' : '-') + dmg;
      d.style.left = '50px'; d.style.top = '0';
      box.appendChild(d); setTimeout(() => d.remove(), 900);
      Sfx.play('hit');
    } else {
      s.hearts--;
      $('#hearts').textContent = '❤️'.repeat(Math.max(0, s.hearts)) + '🖤'.repeat(s.maxHearts - Math.max(0, s.hearts));
      box.classList.remove('hit'); void box.offsetWidth; box.classList.add('hit');
    }
  }

  function finish() {
    Speech.stop(); stopTimer();
    const s = session;
    const total = s.results.length;
    const acc = total ? Math.round((s.correct / total) * 100) : 0;
    let emoji = acc >= 90 ? '🏆' : acc >= 70 ? '🎉' : acc >= 50 ? '💪' : '🌱';
    let title = acc >= 90 ? '太厲害了！' : acc >= 70 ? '表現很好！' : acc >= 50 ? '持續進步中！' : '每一題都是經驗值！';
    let extra = '';

    if (s.boss) {
      const win = s.bossHp <= 0;
      if (win) {
        S.bossesDefeated++; S.xp += 100; s.xpGained += 100;
        emoji = '🏆'; title = `擊敗 ${s.boss.name}！`;
        extra = `<p>獲得 Boss 獎勵 <b class="xp">+100 XP</b>，下一隻 Boss 更強了…</p>`;
        confetti(); Sfx.play('win');
      } else {
        emoji = s.boss.emoji; title = `${s.boss.name} 逃走了…`;
        extra = `<p>Boss 剩下 ${Math.max(0, s.bossHp)} HP，再練一下回來挑戰！</p>`;
      }
    }
    if (s.mode === 'monster' && s.killed) extra += `<p>打倒了 <b>${s.killed}</b> 隻錯題怪物 👾（每隻 +20 XP）</p>`;
    if (total >= 10 && s.correct === total) { S.perfectRounds++; confetti(); }
    checkBadges();
    save();
    if (s.onFinish) return s.onFinish(s);

    const wrong = s.results.filter((r) => !r.correct);
    app().innerHTML = `
      <div class="card summary">
        <div class="big-emoji">${emoji}</div>
        <h2>${title}</h2>
        ${extra}
        <div class="stats">
          <div><b>${s.correct}/${total}</b><span>答對</span></div>
          <div><b>${acc}%</b><span>正確率</span></div>
          <div><b class="xp">+${s.xpGained}</b><span>獲得 XP</span></div>
          <div><b>🔥${s.maxCombo}</b><span>最高連擊</span></div>
        </div>
        ${wrong.length ? `<details class="review"><summary>📝 本回合錯題（${wrong.length}）— 已變成錯題怪物</summary><ul>${wrong.map((r) => `<li>${r.q.explain}</li>`).join('')}</ul></details>` : ''}
        <button class="btn-primary" id="again">再來一回合</button>
        <button class="btn-secondary" id="home">回首頁</button>
      </div>`;
    $('#again').onclick = () => MODES[s.modeKey].start();
    $('#home').onclick = renderHome;
  }

  function showLevelUp(level) {
    const rk = rankOf(level);
    Sfx.play('lvl'); confetti(60);
    showModal(`<div class="levelup">
      <div class="big-emoji">${rk[1]}</div>
      <h2>升級了！</h2>
      <div class="lvnum">Lv.${level}</div>
      <p>目前稱號：<b>${rk[2]}</b></p>
      <button class="btn-primary" data-close>繼續</button>
    </div>`);
  }

  // ───────────────────────── 模式 ─────────────────────────
  const MODES = {
    vocab: {
      start() {
        const due = shuffle(dueWords()).slice(0, 10);
        let words = due.concat(shuffle(newWords()).slice(0, 10 - due.length));
        if (!words.length) { words = shuffle(WORDS).slice(0, 10); toast('全部單字都學過了，隨機複習一輪！'); }
        startSession({ modeKey: 'vocab', questions: words.map((w) => vocabQ(w, vocabKindFor(w), true)) });
      },
    },
    part5: { start() { startSession({ modeKey: 'part5', questions: leastSeen(P5, 10).map(p5Q) }); } },
    part2: { start() { startSession({ modeKey: 'part2', questions: leastSeen(P2, 10).map(p2Q) }); } },
    part1: { start() { startSession({ modeKey: 'part1', questions: leastSeen(P1, 6).map(p1Q) }); } },
    part3: { start() { startSession({ modeKey: 'part3', questions: leastSeen(P3, 3).map((c) => groupQ(c, p3Q, '聽對話')) }); } },
    part4: { start() { startSession({ modeKey: 'part4', questions: leastSeen(P4, 3).map((t) => groupQ(t, p4Q, '聽獨白')) }); } },
    part6: { start() { startSession({ modeKey: 'part6', questions: setQuestions(P6, 2, p6Q) }); } },
    part7: {
      start() {
        // 湊到 8 題以上，多篇閱讀一組就有 5 題
        const sets = [];
        let n = 0;
        for (const set of leastSeen(P7, P7.length)) { if (n >= 8) break; sets.push(set); n += set.qs.length; }
        startSession({ modeKey: 'part7', questions: sets.flatMap((set) => set.qs.map((_, i) => p7Q(set, i))) });
      },
    },
    dict: { start() { startSession({ modeKey: 'dict', questions: leastSeen(DICT_POOL, 6).map(dictQ) }); } },
    gist: {
      start(scene) {
        const pool = scene ? GIST.filter((x) => x.scene === scene) : GIST;
        if (!pool.length) { toast('開場題庫還在準備中'); return; }
        startSession({ modeKey: 'gist', questions: leastSeen(pool, 10).map(gistQ) });
      },
    },
    scenes: { start() { renderScenes(); } },
    monster: {
      start() {
        const ids = shuffle(Object.keys(S.mistakes));
        const qs = [];
        for (const id of ids) {
          if (qs.length >= 10) break;
          const q = questionFromId(id);
          if (q) qs.push(q); else delete S.mistakes[id];
        }
        save();
        if (!qs.length) { toast('目前沒有錯題怪物，太乾淨了 ✨'); renderHome(); return; }
        startSession({ modeKey: 'monster', mode: 'monster', questions: qs });
      },
    },
    boss: {
      start() {
        const boss = bossFor(S.bossesDefeated + 1);
        const vocab = shuffle(WORDS).slice(0, 5).map((w) => vocabQ(w, pick(['en2zh', 'zh2en', 'blank']), false));
        const qs = shuffle([...vocab, ...leastSeen(P5, 6).map(p5Q), ...leastSeen(P2, 4).map(p2Q)]);
        startSession({ modeKey: 'boss', mode: 'boss', boss, hearts: 4, maxHearts: 4, timer: 25, questions: qs });
      },
    },
  };

  // ───────────────────────── 首頁 ─────────────────────────
  function renderHome() {
    session = null; stopTimer(); Speech.stop(); rollDaily();
    const li = levelInfo(S.xp), rk = rankOf(li.level), streak = currentStreak(), est = estimate();
    const due = dueWords().length, nw = newWords().length, mons = Object.keys(S.mistakes).length;
    const goal = S.settings.dailyGoal, done = Math.min(S.daily.count, goal);
    const boss = bossFor(S.bossesDefeated + 1);
    const badgeCount = Object.keys(S.badges).length;
    const recentBadges = BADGES.filter((b) => S.badges[b.id]).slice(-6).map((b) => b.icon).join('') || '🔒';
    const mode = (key, ic, nm, sub, cls = '') => `
      <button class="mode ${cls}" data-mode="${key}"><span class="ic">${ic}</span><span><div class="nm">${nm}</div><div class="sub">${sub}</div></span></button>`;

    app().innerHTML = `
      <header class="hero">
        <div class="hero-top">
          <div class="avatar">${rk[1]}</div>
          <div class="who"><div class="rank">${rk[2]}</div><div class="lv">Lv.${li.level}・總計 ${S.xp} XP</div></div>
          <div class="streak ${streak ? 'on' : ''}" title="連續達成每日目標天數">🔥 ${streak}</div>
          ${window.Cloud ? window.Cloud.heroButtons() : ''}
          <button class="icon-btn" id="btnSettings" title="設定">⚙️</button>
        </div>
        <div class="xpbar"><div style="width:${li.pct * 100}%"></div><span>${li.cur} / ${li.need} XP 到 Lv.${li.level + 1}</span></div>
        <div class="goal">
          <div>🎯 今日目標 ${done}/${goal} 題${done >= goal ? ' ✅' : ''}</div>
          <div class="goalbar"><div style="width:${(done / goal) * 100}%"></div></div>
        </div>
      </header>

      <section class="card">
        <div class="score-title">📈 粗估多益分數 <small>依最近作答推算</small></div>
        <div class="score-row">
          <div><span>聽力</span><b>${est.l ?? '—'}</b></div>
          <div><span>閱讀</span><b>${est.r ?? '—'}</b></div>
          <div class="total"><span>總分</span><b>${est.total ?? '—'}</b></div>
        </div>
        ${est.total != null
          ? `<div class="target">距離目標 750：${est.total >= 750 ? '已達標 🎉' : `還差 ${750 - est.total} 分`}<div class="bar"><div style="width:${Math.min(100, (est.total / 750) * 100)}%"></div></div></div>`
          : '<div class="hint">聽力、閱讀各答 10 題後顯示</div>'}
      </section>

      ${window.Cloud ? window.Cloud.homeCard() : ''}
      ${window.Exam ? window.Exam.homeCard() : ''}

      <h2 class="sec-title">🎧 聽力練習</h2>
      <section class="modes">
        ${mode('part1', '📷', '看圖描述', `Part 1・${P1.length} 張照片`)}
        ${mode('part2', '🎧', '聽力應答', `Part 2・${P2.length} 題`)}
        ${mode('part3', '💬', '對話聽力', `Part 3・${P3.length} 組對話`)}
        ${mode('part4', '📻', '獨白聽力', `Part 4・${P4.length} 段獨白`)}
        ${mode('dict', '✍️', '聽寫挑戰', '聽句子打出來')}
        ${mode('gist', '🎯', '開場猜情境', `聽一兩句就抓情境・${GIST.length} 題`)}
        ${mode('scenes', '📘', '情境攻略本', `${SCENES.length} 種常見場景・開場句與套路`, 'wide')}
      </section>

      <h2 class="sec-title">📖 閱讀練習</h2>
      <section class="modes">
        ${mode('vocab', '📚', '單字冒險', `待複習 ${due}・新字 ${nw}`)}
        ${mode('part5', '✏️', '文法快答', `Part 5・${P5.length} 題`)}
        ${mode('part6', '📄', '短文填空', `Part 6・${P6.length} 篇`)}
        ${mode('part7', '📰', '閱讀測驗', `Part 7・${P7.length} 組`)}
      </section>

      <h2 class="sec-title">⚔️ 挑戰</h2>
      <section class="modes">
        ${mode('monster', '👾', '錯題怪物', mons ? `<span class="pill">${mons} 隻</span> 等你討伐` : '目前沒有怪物', 'monster')}
        ${mode('boss', boss.emoji, `Boss：${boss.name}`, `Lv.${boss.lv}・HP ${boss.hp}・4 條命`, 'boss')}
      </section>

      <section class="card"><button class="row-link" id="btnBadges">
        <span style="font-size:26px">🏅</span><span class="grow"><b>成就</b> <small>${badgeCount}/${BADGES.length}</small></span><span class="badge-icons">${recentBadges}</span>
      </button></section>
      <section class="card"><button class="row-link" id="btnDex">
        <span style="font-size:26px">📖</span><span class="grow"><b>單字圖鑑</b> <small>熟練 ${masteredCount()}/${WORDS.length}</small></span><span>›</span>
      </button></section>`;

    document.querySelectorAll('[data-mode]').forEach((b) => { b.onclick = () => MODES[b.dataset.mode].start(); });
    if (window.Exam) window.Exam.bindHome();
    $('#btnSettings').onclick = showSettings;
    $('#btnBadges').onclick = showBadges;
    $('#btnDex').onclick = showDex;
  }

  function renderScenes() {
    session = null; Speech.stop();
    app().innerHTML = `
      <div class="sbar"><button class="icon-btn" id="scBack">✕</button><div class="grow"><b>📘 情境攻略本</b></div></div>
      <div class="card"><p style="margin:0">Part 3、4 翻來覆去就是這些場景。先熟悉每種場景的<b>開場句</b>和<b>走向</b>，聽到第一句就能猜到接下來會講什麼、會考什麼。</p></div>
      <div class="scene-grid">${SCENES.map((x) => {
        const n = GIST.filter((g) => g.scene === x.id).length;
        return `<button class="scene-card" data-scene="${x.id}"><span class="sc-ic">${x.icon}</span><span class="sc-nm">${esc(x.name)}</span><small>${esc(x.parts)}${n ? `・${n} 題` : ''}</small></button>`;
      }).join('')}</div>`;
    $('#scBack').onclick = renderHome;
  }

  function renderScene(id) {
    const x = SCENE_BY_ID[id];
    if (!x) return;
    closeModal();
    session = null; Speech.stop();
    const n = GIST.filter((g) => g.scene === id).length;
    const pair = (arr, cls = '') => `<ul class="pairs ${cls}">${arr.map(([en, zh]) => `<li><span class="en">${esc(en)} ${sayBtn(en)}</span><span class="zh">${esc(zh)}</span></li>`).join('')}</ul>`;
    app().innerHTML = `
      <div class="sbar"><button class="icon-btn" id="scBack">←</button><div class="grow"><b>${x.icon} ${esc(x.name)}</b> <small>${esc(x.parts)}</small></div></div>
      <div class="card scene">
        <p class="sc-sum">${esc(x.summary)}</p>
        <p><b>👥 常見人物・地點：</b>${esc(x.who)}</p>
        <h3>🎬 典型開場句</h3>${pair(x.openings)}
        <h3>🧭 對話走向</h3><ol class="flow">${x.flow.map((f) => `<li>${esc(f)}</li>`).join('')}</ol>
        <h3>❓ 常考題型</h3>${pair(x.questions)}
        <h3>🔤 關鍵字彙</h3>${pair(x.vocab, 'vocab')}
        <h3>🚦 聽力訊號</h3><p>${esc(x.signals)}</p>
        <div class="sc-tip">💡 ${esc(x.tip)}</div>
      </div>
      ${n ? `<button class="btn-primary" id="scPractice">🎯 練這個情境的開場題（${n} 題）</button>` : ''}
      <button class="btn-secondary" id="scList">回攻略本目錄</button>`;
    $('#scBack').onclick = renderScenes;
    $('#scList').onclick = renderScenes;
    if (n) $('#scPractice').onclick = () => MODES.gist.start(id);
    window.scrollTo(0, 0);
  }

  function showBadges() {
    showModal(`<h2>🏅 成就</h2><div class="badge-grid">${BADGES.map((b) => `
      <div class="badge ${S.badges[b.id] ? '' : 'locked'}"><div class="bi">${b.icon}</div><div class="bn">${b.name}</div><div>${b.desc}</div></div>`).join('')}
    </div><button class="btn-secondary" data-close>關閉</button>`);
  }

  function showDex() {
    const cats = Object.keys(CAT_NAMES);
    const status = (w) => { const s = S.srs[w.id]; return !s ? '⬜' : s.box >= 3 ? '🟩' : '🟨'; };
    showModal(`<h2>📖 單字圖鑑</h2>
      <p class="hint" style="text-align:left">⬜ 未學 🟨 學習中 🟩 已熟練（連續答對 3 次以上）</p>
      ${cats.map((c) => {
        const ws = WORDS.filter((w) => w.cat === c);
        const m = ws.filter((w) => S.srs[w.id] && S.srs[w.id].box >= 3).length;
        return `<details class="dex-cat"><summary><span>${CAT_NAMES[c]}</span><span class="dex-bar"><div style="width:${(m / ws.length) * 100}%"></div></span><small>${m}/${ws.length}</small></summary>
          <ul class="dex-list">${ws.map((w) => `<li>${status(w)}<span class="dw">${esc(w.w)}</span><span class="dz">${esc(w.zh)}</span>${sayBtn(w.w)}</li>`).join('')}</ul></details>`;
      }).join('')}
      <button class="btn-secondary" data-close>關閉</button>`);
  }

  function showSettings() {
    const st = S.settings;
    showModal(`<h2>⚙️ 設定</h2>
      <label class="setting"><span>語速</span>
        <select id="setRate">${[[0.5, '×0.5 很慢'], [0.75, '×0.75 慢'], [1, '×1 考試速度'], [1.25, '×1.25 挑戰']].map(([v, t]) => `<option value="${v}" ${st.rate === v ? 'selected' : ''}>${t}</option>`).join('')}</select></label>
      <label class="setting"><span>AI 真人語音 <small>${Object.keys(window.AUDIO_FILES || {}).length} 個音檔</small></span><input type="checkbox" id="setAi" ${st.aiVoice ? 'checked' : ''}></label>
      <label class="setting"><span>Part 3/4 預讀倒數</span>
        <select id="setPreview">${[[0, '關閉'], [5, '5 秒'], [10, '10 秒'], [15, '15 秒（建議）'], [20, '20 秒'], [30, '30 秒']].map(([v, t]) => `<option value="${v}" ${st.preview === v ? 'selected' : ''}>${t}</option>`).join('')}</select></label>
      <label class="setting"><span>每日目標題數</span><input type="number" id="setGoal" min="5" max="200" value="${st.dailyGoal}"></label>
      <label class="setting"><span>音效</span><input type="checkbox" id="setSound" ${st.sound ? 'checked' : ''}></label>
      <button class="btn-secondary" id="testVoice">🔊 試聽語音</button>
      <details class="hint" style="text-align:left"><summary>沒有音檔時的備用語音（瀏覽器內建）</summary>
        <label class="setting"><span>口音</span>
          <select id="setAccent">${[['mixed', '混合'], ['en-us', '美式'], ['en-gb', '英式'], ['en-au', '澳式']].map(([v, t]) => `<option value="${v}" ${st.accent === v ? 'selected' : ''}>${t}</option>`).join('')}</select></label>
        <p>目前：女聲 ${esc((Speech.cast().W || {}).name || '無')}、男聲 ${esc((Speech.cast().M || {}).name || '無')}</p>
      </details>
      <button class="btn-primary" data-close>完成</button>
      <button class="danger-link" id="reset">重置所有進度</button>`);
    $('#setRate').onchange = (e) => { st.rate = +e.target.value; save(); };
    $('#setAccent').onchange = (e) => { st.accent = e.target.value; save(); };
    $('#setGoal').onchange = (e) => { st.dailyGoal = Math.max(5, Math.min(200, +e.target.value || 30)); save(); };
    $('#setSound').onchange = (e) => { st.sound = e.target.checked; save(); };
    $('#setPreview').onchange = (e) => { st.preview = +e.target.value; save(); };
    $('#setAi').onchange = (e) => { st.aiVoice = e.target.checked; save(); };
    $('#testVoice').onclick = () => Speech.play([{ text: 'Where is the nearest post office?', role: 'W' }, { pause: 300 }, { text: 'It\'s just around the corner.', role: 'M' }], 'p3:0');
    let armed = false;
    $('#reset').onclick = (e) => {
      if (!armed) { armed = true; e.target.textContent = '再按一次確認重置（無法復原）'; return; }
      S = defaultState(); save(); closeModal(); renderHome(); toast('進度已重置');
    };
  }

  // ───────────────────────── 全域事件 ─────────────────────────
  document.addEventListener('click', (e) => {
    const say = e.target.closest('[data-say]');
    if (say) { e.stopPropagation(); Speech.say(say.dataset.say); return; }
    const sc = e.target.closest('[data-scene]');
    if (sc) {
      if (session) {
        const x = SCENE_BY_ID[sc.dataset.scene];
        if (x) showModal(`<h2>${x.icon} ${esc(x.name)}</h2><p>${esc(x.summary)}</p>
          <h3>🎬 典型開場句</h3><ul class="pairs">${x.openings.map(([en, zh]) => `<li><span class="en">${esc(en)} ${sayBtn(en)}</span><span class="zh">${esc(zh)}</span></li>`).join('')}</ul>
          <h3>🧭 走向</h3><ol class="flow">${x.flow.map((f) => `<li>${esc(f)}</li>`).join('')}</ol>
          <div class="sc-tip">💡 ${esc(x.tip)}</div><button class="btn-secondary" data-close>關閉</button>`);
      } else renderScene(sc.dataset.scene);
      return;
    }
    if (e.target.closest('[data-close]') || e.target.id === 'modal') {
      closeModal();
      if (!session && !(window.Exam && window.Exam.active())) renderHome();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!session || !$('#modal').classList.contains('hidden')) return;
    const inInput = e.target.tagName === 'INPUT';
    const q = session.questions[session.i];
    if (!session.answered && q.kind === 'choice' && !inInput) {
      const k = e.key.toLowerCase();
      const idx = k.length === 1 ? Math.max('1234'.indexOf(k), 'abcd'.indexOf(k)) : -1;
      if (idx >= 0 && idx < q.options.length) { answer(idx); return; }
    }
    if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
      if (session.answered) { $('#next') && $('#next').click(); return; }
      const sub = $('#submitGroup');
      if (sub && !sub.disabled) { sub.click(); return; }
    }
    if (!inInput && e.key.toLowerCase() === 'r' && q.audio) Speech.play(q.audio, q.audioFile);
    if (!inInput && e.key.toLowerCase() === 'p' && q.audio) Speech.toggle();
  });

  Speech.onState = (st) => {
    const b = $('#play');
    if (b) {
      b.classList.toggle('playing', st === 'playing');
      b.textContent = st === 'playing' ? '🔊 播放中…' : st === 'paused' ? '🔊 從頭播放' : '🔊 再聽一次';
    }
    const p = $('#pauseBtn');
    if (p) {
      p.disabled = st === 'idle';
      p.classList.toggle('on', st === 'paused');
      p.textContent = st === 'paused' ? '▶ 繼續' : '⏸ 暫停';
    }
  };
  // 給 js/exam.js（模擬考）使用
  window.TQ = {
    get S() { return S; }, save, Speech, Sfx, esc, toast, confetti, showModal, closeModal, renderHome,
    renderGraphic, renderPassage, ROLE_ICON, LETTERS, transcriptHtml, multiline, checkBadges, levelInfo, showLevelUp, today,
    stopSession() { session = null; stopTimer(); },
    // 給 js/cloud.js（登入、雲端進度、排行榜）使用
    defaultState, weekId, currentStreak, totalCorrect, questionFromId, startSession,
    replaceState(data) { S = merge(defaultState(), data || {}); save(); },
  };

  Speech.init();
  // 等 exam.js 載入後再畫首頁
  // 有設定雲端（js/cloud-config.js）時先登入；沒設定或載入失敗就照舊用本機進度
  document.addEventListener('DOMContentLoaded', () => (window.Cloud ? window.Cloud.boot() : renderHome()));
})();
