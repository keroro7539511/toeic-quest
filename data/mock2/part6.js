// 模擬考 2 — Part 6 短文填空（Questions 131–146）
// 4 篇 × 4 題；每篇 1 題句子插入（type: "insert"）
window.MOCK2 = window.MOCK2 || {};
window.MOCK2.part6 = [
  // Questions 131–134
  {
    passage: {
      kind: "notice",
      title: "Notice to All Tenants: Dunmore Plaza Fitness Center",
      body: "The fitness center on the second floor of Dunmore Plaza will be closed from Monday, June 2, through Friday, June 6, while new exercise equipment {{1}}. During this time, tenants may use the facilities at Pulse Athletic Club on Grant Street free of charge. Simply show your Dunmore Plaza building pass at the reception desk. {{2}}\n\nWhen our center reopens on Monday, June 9, it will feature six new treadmills, two rowing machines, and an expanded stretching area. We will also be extending the center's hours. {{3}}, it will open at 5:30 A.M. instead of 6:00 A.M. on weekdays.\n\nWe apologize for any inconvenience and thank you for your {{4}}.\n\nDunmore Plaza Building Management",
    },
    qs: [
      { o: ["installs", "was installing", "is being installed", "has installed"], a: 2, type: "grammar", e: "設備是「被」安裝，而且關閉的這一週正在進行安裝，要用現在進行式被動 is being installed。installs、has installed 是主動，會變成設備自己安裝。" },
      { o: ["Towels and lockers are also available there at no cost.", "The new equipment was purchased from a local supplier last year.", "Monthly membership fees will increase in July.", "Please return your building pass to the security office by Friday."], a: 0, type: "insert", e: "前兩句說明關閉期間可以出示大樓通行證免費使用 Pulse Athletic Club，接著補充「那裡的毛巾和置物櫃也免費」最順。要求歸還通行證會和前一句「出示通行證」矛盾；會費調漲則與本段無關。" },
      { o: ["Otherwise", "Instead", "Nevertheless", "Specifically"], a: 3, type: "connector", e: "前句說「會延長營業時間」，後句具體說明「平日提早到 5:30 開門」，是舉出具體內容，用 Specifically「具體來說」。Instead 表示替代，Nevertheless 表示轉折，都不合。" },
      { o: ["payment", "patience", "attendance", "participation"], a: 1, type: "vocab", e: "公告結尾為造成不便致歉，接著感謝大家的「耐心體諒」，thank you for your patience 是固定說法。payment、attendance 在這裡與關閉健身房的情境無關。" },
    ],
  },
  // Questions 135–138
  {
    passage: {
      kind: "email",
      title: "E-mail",
      meta: [["To", "Corvo Coffee Rewards Members"], ["From", "Corvo Coffee <rewards@corvocoffee.com>"], ["Date", "August 12"], ["Subject", "Changes to your rewards program"]],
      body: "Dear Valued Member,\n\nThank you for being part of the Corvo Coffee Rewards program. We are writing to let you know about some changes that {{1}} on September 1.\n\nCurrently, members earn one star for every dollar they spend and receive a free drink after collecting 100 stars. Under the new system, members will earn two stars per dollar on purchases made through our mobile app. {{2}} Purchases made in our stores with a registered rewards card will continue to earn one star per dollar.\n\n{{3}}, stars will no longer expire after twelve months. Any stars you have already collected will remain in your account and can be {{4}} at any time.\n\nTo learn more, visit www.corvocoffee.com/rewards.\n\nWarm regards,\nThe Corvo Coffee Team",
    },
    qs: [
      { o: ["took effect", "will take effect", "have taken effect", "were taking effect"], a: 1, type: "grammar", e: "這封信 8 月 12 日寄出，變更從 9 月 1 日才開始，是未來的事，要用 will take effect。took effect、have taken effect 都表示已經生效，和日期矛盾。" },
      { o: ["Our app is currently unavailable for download.", "Unfortunately, several of our locations will be closing.", "Drinks must now be ordered at least one day in advance.", "This means that app users will be able to earn free drinks twice as fast."], a: 3, type: "insert", e: "前句說用 app 消費每一美元可得兩顆星（原本一顆），接著說明「也就是 app 使用者累積免費飲料的速度快一倍」最合理。說 app 無法下載會和前句鼓勵用 app 消費矛盾。" },
      { o: ["In addition", "For instance", "As a result", "Even so"], a: 0, type: "connector", e: "前一段介紹第一項變更（app 雙倍點數），這裡再介紹另一項變更（點數不再過期），是追加資訊，用 In addition。As a result 表因果，但點數不過期並不是 app 雙倍點數造成的結果。" },
      { o: ["reserved", "refunded", "redeemed", "renewed"], a: 2, type: "vocab", e: "點數可以隨時「兌換」用 redeem，redeem stars / points 是會員點數的固定說法。refund 是「退款」，renew 是「續約、更新」，都不能搭配點數。" },
    ],
  },
  // Questions 139–142
  {
    passage: {
      kind: "article",
      title: "Ardent Robotics Launches Apprenticeship Program",
      body: "MILFORD (March 3) — Ardent Robotics, a manufacturer of automated packaging equipment, announced on Tuesday that it will partner with Milford Technical College to train future engineering technicians. The two-year apprenticeship program will allow students to {{1}} classroom study with paid work at Ardent's factory on Route 12.\n\n{{2}} Ardent's chief executive, Lena Voss, said the company has struggled to find enough skilled technicians to keep up with growing orders. \"Instead of competing with other firms for a small number of experienced workers, we decided to develop our own,\" she explained.\n\nTwenty students will be selected for the first group, which begins in September. Those who complete the program {{3}} a full-time position at Ardent. Applications are due by April 15 and can be submitted {{4}} the college's Web site.",
    },
    qs: [
      { o: ["combine", "compose", "consist", "contain"], a: 0, type: "vocab", e: "combine A with B「把 A 和 B 結合」，學生可以一邊上課一邊在工廠帶薪工作。consist 是不及物動詞（consist of），compose、contain 都不能接 with 表示結合。" },
      { o: ["Ms. Voss joined the company as an engineer in 2009.", "Tuition at the college has risen by five percent this year.", "The partnership is a response to a shortage of qualified workers in the area.", "The factory will be closed for maintenance in September."], a: 2, type: "insert", e: "空格後說公司一直找不到足夠的技術人員，所以插入「這項合作是為了因應當地合格人才短缺」最能銜接。下一句才第一次介紹執行長全名 Lena Voss，所以前面不可能先出現 Ms. Voss。" },
      { o: ["have offered", "are offering", "will offer", "will be offered"], a: 3, type: "grammar", e: "完成課程的學生是「被提供」全職職位，要用被動；第一屆九月才開始，是未來的事，所以用 will be offered。will offer 是主動，會變成學生提供職位給別人。" },
      { o: ["among", "through", "onto", "toward"], a: 1, type: "grammar", e: "submit ... through the Web site「透過網站提交」，through 表示途徑、方式。among、onto、toward 都不能表示「經由某管道」。" },
    ],
  },
  // Questions 143–146
  {
    passage: {
      kind: "letter",
      title: "Letter",
      body: "Ms. Ingrid Solberg\n48 Fairhaven Road\nPortland, ME 04101\n\nDear Ms. Solberg,\n\nThank you for submitting your photographs of the Maine coastline for possible {{1}} in the spring issue of Harbor & Pine Magazine. Our editorial board was impressed by the quality of your work and would like to license six of the images.\n\nAs is our standard practice, we are offering a one-time fee of $250 per photograph. This fee covers publication in both the print and online editions of the magazine. You will, of course, retain full ownership of the images. {{2}}, we will not reproduce them in any other publication without your written permission.\n\n{{3}} Once we receive it, our art director, Paolo Marchetti, will contact you to discuss image captions and photo credits.\n\nWe look forward to {{4}} with you.\n\nSincerely,\n\nDelphine Archer\nManaging Editor, Harbor & Pine Magazine",
    },
    qs: [
      { o: ["include", "inclusive", "included", "inclusion"], a: 3, type: "grammar", e: "形容詞 possible 後面要接名詞，for possible inclusion「供（雜誌）考慮刊登」。inclusive 是形容詞，include 是動詞，included 是分詞。" },
      { o: ["Nevertheless", "Accordingly", "Otherwise", "Similarly"], a: 1, type: "connector", e: "前句說照片的所有權仍歸攝影師，因此「相應地」雜誌未經書面同意不會用在其他刊物，用 Accordingly 表示依照前述情況。Nevertheless 是轉折，會讓前後語意相反。" },
      { o: ["We have already printed the spring issue.", "Your payment has been sent to your bank account.", "Please sign the enclosed agreement and return it to us by March 15.", "Several readers have written to praise your photographs."], a: 2, type: "insert", e: "空格後說 Once we receive it「我們收到它之後」，it 必須是對方要寄回來的東西，所以是「請簽署隨信附上的合約並寄回」。付款是雜誌寄出的，不會由雜誌「收到」；春季號還在選照片，不可能已印好。" },
      { o: ["working", "work", "be working", "have worked"], a: 0, type: "grammar", e: "look forward to 的 to 是介系詞，後面要接動名詞 working。誤以為是不定詞而選原形 work 是常見陷阱。" },
    ],
  },
];
