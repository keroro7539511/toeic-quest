# 題庫撰寫規格（TOEIC Quest）

所有題目都必須是**原創**，模仿正式多益（TOEIC Listening & Reading）的題型、語氣、難度與情境，但**不可抄襲** ETS 官方試題或任何出版品。

## 共通原則

- 情境：職場與日常商務（辦公室、會議、人事、採購、行銷、財務、出差、餐廳、飯店、零售、製造、社區活動、租屋、醫療預約等）。人名、公司名、地名都自己編，要有國際感（Ms. Tanaka、Mr. Alvarez、Brightline Logistics…）。
- 難度：模擬考要能區分 300–900 分的考生，約 30% 簡單、40% 中等、30% 困難。練習題以 500–750 分程度為主，也要有部分困難題。
- **難度標籤**：每題（Part 3/4/6/7 為每個題組）都要在 `data/diff/` 標難度 `1` 簡單（約 400–550 分程度，答案幾乎照原文）、`2` 中等（550–700，換句話說、一個合理陷阱）、`3` 困難（750+，間接回答、言外之意、看圖兩步推理、跨篇、低頻字）。key 為 `p5:12`、`p3:4`（練習題）或 `MOCK2:p3:4`（模擬考），值為題庫順序的 index。小模考依 30% / 40% / 30% 的比例抽題。
- **模擬考題型位置**：Part 3 最後 3 組、Part 4 最後 2 組是看圖題；Part 7 依單篇（2→3→4 題）、雙篇、三篇排列；Part 1 由易到難。
- **答案位置要平均**：每一個檔案內，正確答案在 A/B/C/D（Part 2 為 A/B/C）的次數要大致相同，不可集中在某個位置。
- 選項：4 個（Part 2 為 3 個），不可重複，錯誤選項要「看起來合理」：同字/相似音陷阱、詞性陷阱、時態陷阱、只對一半、提到但不是答案。
- `e`：**繁體中文**解析，1–3 句，說明為什麼對、常見陷阱是什麼。**不要在解析中寫選項字母**（例如「(B) 是陷阱」），因為練習模式會打亂選項；請直接引用選項文字。
- 會被語音朗讀的文字（Part 1–4 的所有英文）：用正常英文書寫，避免表情符號、特殊符號、括號註解；時間寫成 `10:30 A.M.`、金額寫 `$25` 或 `twenty-five dollars` 皆可。
- 程式用陣列順序當作題目 ID，**不要改動或重排既有題目**，只能在後面新增。
- 檔案皆為一般 `<script>` 載入的 JS（不是 module）。完成後執行 `node tools/validate.js`，自己負責的檔案不可有 ❌ 錯誤（其他人還在寫的部分出現「尚未完成」警告是正常的）。

## 各 Part 資料格式

### Part 1 照片描述（4 個朗讀選項，選最符合照片的）
```js
{ img: "images/part1/p1_01.jpg", alt: "照片內容的英文描述（給程式與無障礙用）",
  o: ["A man is ...", "Some chairs have been ...", "...", "..."], a: 1, e: "..." , credit: "作者 / 授權 / 來源網址" }
```
- 人物照片多用現在進行式（is typing / are walking）；物品場景多用被動（have been stacked / is being loaded 的差異是經典陷阱）。
- 錯誤選項常見設計：照片中有該物品但動作錯、出現照片裡沒有的東西、being vs been 陷阱。

### Part 2 應答問題（3 個朗讀回應）
```js
{ q: "When is the budget meeting?", o: ["...", "...", "..."], a: 2, e: "..." }
```
- 題型平均分布：Wh- 問句（Who/What/When/Where/Why/How）、Yes/No、否定疑問句、附加問句、選擇疑問句、提議/請求、直述句。
- 約 1/3 的正確答案是**間接回答**（反問、「我去確認一下」、「Ms. Lee 負責那件事」）。
- 陷阱：相似音、同字重複、Wh- 問句用 Yes/No 回答。

### Part 3 對話（3 題；題目與選項印在考卷上）
```js
{ lines: [["W", "..."], ["M", "..."], ["M2", "..."]],   // 角色：M、W、M2（第二位男性）、W2（第二位女性）
  graphic: { kind: "table", title: "...", headers: ["...", "..."], rows: [["...", "..."]] },   // 選填
  qs: [ { q: "Where most likely are the speakers?", o: [4 個], a: 0, e: "..." }, ... ] }
```
- 對話 4–8 句、約 30–45 秒；三人對話用 M2 或 W2。
- 三題通常依序對應對話的前、中、後段。常見題型：主旨/地點/身分、細節、下一步動作、要求/建議、**言外之意**（`What does the woman imply when she says, "..."?` 或 `Why does the man say, "..."?`）、**看圖題**（`Look at the graphic. Which ...?`，答案必須結合圖表與對話才能得出）。

### Part 4 獨白（3 題；題目印在考卷上）
```js
{ kind: "announcement", speaker: "W", text: "Good morning, everyone. ...",
  graphic: { ... },   // 選填，格式同 Part 3
  qs: [ ... 3 題 ... ] }
```
- `kind`：announcement、voicemail、advertisement、news、broadcast、tour、meeting、talk、introduction、instructions。
- 獨白約 100–160 字、40–60 秒。

### graphic 格式（Part 3/4 看圖題用）
- `{ kind: "table", title, headers: [...], rows: [[...], ...] }`：時刻表、價目表、樓層指引、訂單、行程等
- `{ kind: "bars", title, unit: "%", items: [["Label", 42], ...] }`：長條圖
- `{ kind: "list", title, items: ["...", "..."] }`：清單、優惠券、議程

### Part 5 句子填空
```js
{ q: "The new policy will take ______ on January 1.", o: ["effect", "affect", "effective", "effectively"], a: 0, e: "..." }
```
- 空格一律用 6 個底線 `______`。
- 題型比例約：詞性 35%、字彙 30%、動詞時態/語態 10%、介系詞 10%、連接詞/關係詞 10%、代名詞 5%。

### Part 6 短文填空（每篇 4 題，其中 1 題是句子插入）
```js
{ passage: { kind: "email", title: "...", meta: [["To", "..."], ["From", "..."], ["Date", "..."], ["Subject", "..."]],
             body: "Dear Ms. Park,\n\nThank you for {{1}} ... {{2}} ...\n\n{{3}} ...\n\nSincerely,\nJohn Reyes" },
  qs: [ { o: [4 個], a: 0, e: "...", type: "grammar" }, { o: [...], a: 2, e: "...", type: "vocab" },
        { o: ["完整句子 1", "完整句子 2", "完整句子 3", "完整句子 4"], a: 1, e: "...", type: "insert" }, { ... } ] }
```
- 內文用 `{{1}}` 到 `{{4}}` 標出空格，`qs` 依序對應；段落用 `\n\n` 分隔。
- `type`：grammar、vocab、connector（連接副詞/連接詞）、insert（句子插入，選項為完整句子）。
- 答案要依賴上下文（時態要看前後文、連接詞要看前後句關係），這是 Part 6 跟 Part 5 的差別。

### Part 7 閱讀測驗
```js
{ passages: [
    { kind: "email", title: "...", meta: [["From", "..."], ["To", "..."], ["Date", "..."], ["Subject", "..."]], body: "段落1\n\n段落2" },
    { kind: "chat", title: "...", messages: [["Dana Cruz", "10:02 A.M.", "..."], ["Leo Park", "10:04 A.M.", "..."]] },
    { kind: "form", title: "...", table: { headers: ["Item", "Qty", "Price"], rows: [["...", "2", "$40.00"]] }, body: "表格下方的註記（選填）" }
  ],
  qs: [ { q: "What is the purpose of the e-mail?", o: [4 個], a: 3, e: "...", type: "main" }, ... ] }
```
- passage `kind`：email、letter、memo、notice、ad、article、form、invoice、schedule、webpage、review、chat、text、report、announcement、receipt、survey、brochure。
  - `text`（簡訊，2 人）與 `chat`（線上聊天，多人）用 `messages`。
  - 表格型文件用 `table`，可同時有 `body`。
- 單篇每組 2–4 題；雙篇、三篇每組 5 題，且至少 1–2 題必須**跨篇整合**才能作答。
- `type`：main（主旨/目的）、detail、not（NOT true / NOT mentioned）、infer（推論）、vocab（`In the e-mail, the word "..." in paragraph 2 is closest in meaning to`）、intent（`At 10:04 A.M., what does Mr. Park most likely mean when he writes, "..."?`）、insert、cross（跨篇）。
- **句子插入題**：在 body 裡放 `[1]`、`[2]`、`[3]`、`[4]` 標記，題目寫
  `In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n"要插入的句子"`，選項固定為 `["[1]", "[2]", "[3]", "[4]"]`，`type: "insert"`。
