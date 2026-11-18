// 模擬考 1 — Part 6 短文填空（Questions 131–146）
// 4 篇 × 4 題；每篇 1 題句子插入（type: "insert"）
window.MOCK1 = window.MOCK1 || {};
window.MOCK1.part6 = [
  // Questions 131–134
  {
    passage: {
      kind: "email",
      title: "E-mail",
      meta: [["To", "Marcus Whitfield <mwhitfield@coralinepaper.com>"], ["From", "Hana Sato <hsato@lumenaoffice.com>"], ["Date", "November 18"], ["Subject", "Order #58213"]],
      body: "Dear Mr. Whitfield,\n\nOn November 4, I placed an order for 40 cartons of printer paper, which your Web site stated would arrive within ten business days. As of today, the shipment {{1}}.\n\nOur office uses a large amount of paper at the end of each month, when we print quarterly reports for our clients. {{2}}, the delay is becoming a serious problem for us. {{3}} If the paper cannot be delivered by November 25, I would like to cancel the order and receive a full refund.\n\nI have been a {{4}} customer of Coraline Paper for over five years and would prefer to continue doing business with your company.\n\nSincerely,\nHana Sato\nOffice Administrator, Lumena Office Solutions",
    },
    qs: [
      { o: ["did not arrive", "will not arrive", "has not arrived", "had not arrived"], a: 2, type: "grammar", e: "As of today「截至今天」表示從過去持續到現在的狀態，要用現在完成式 has not arrived。had not arrived 是過去完成式，需要有另一個過去時間點作參照。" },
      { o: ["Consequently", "Nonetheless", "Meanwhile", "Instead"], a: 0, type: "connector", e: "前句說月底用紙量大，所以延遲造成嚴重問題，前後是因果關係，用 Consequently。Nonetheless 表轉折，語意相反。" },
      { o: ["Please let me know the expected delivery date as soon as possible.", "Thank you for delivering the paper so quickly.", "We would also like to order 20 more cartons of ink.", "I have enclosed a check for the full amount."], a: 0, type: "insert", e: "空格後說「如果 11 月 25 日前送不到就取消」，前面先請對方告知預計送達日最合理。「感謝快速送達」與貨未到矛盾；追加墨水訂單與抱怨延遲的語氣不符。" },
      { o: ["temporary", "potential", "former", "loyal"], a: 3, type: "vocab", e: "已經當了五年多的客戶，而且希望繼續往來，所以是「忠實的」客戶 loyal。former「以前的」與希望繼續合作矛盾；potential「潛在的」與已合作五年矛盾。" },
    ],
  },
  // Questions 135–138
  {
    passage: {
      kind: "memo",
      title: "Memo",
      meta: [["To", "All Sales Staff"], ["From", "Rafael Moreno, IT Department"], ["Date", "Thursday, May 8"], ["Subject", "Customer database upgrade"]],
      body: "This weekend, the IT Department will upgrade the customer database that the sales team uses to track client accounts. The system {{1}} from 8:00 P.M. on Friday, May 9, until 6:00 A.M. on Monday, May 12.\n\nPlease save all open files and log out of the database before you leave the office on Friday. Sales representatives who have client meetings over the weekend should print any account information {{2}} will need in advance.\n\nThe upgraded database will include several new features. {{3}} In addition, the search function will be significantly faster.\n\nTraining sessions on the new features will be held next week. Staff who are {{4}} to attend any of the sessions should contact me to receive a recorded version.",
    },
    qs: [
      { o: ["was unavailable", "will be unavailable", "has been unavailable", "had been unavailable"], a: 1, type: "grammar", e: "備忘錄日期是 5 月 8 日（週四），停機從 5 月 9 日開始，是未來的事，用 will be unavailable。只看句子無法判斷時態，必須對照備忘錄日期。" },
      { o: ["whoever", "their", "them", "they"], a: 3, type: "grammar", e: "information (that) ______ will need 是省略關係代名詞的子句，空格需要主詞，指前面的 Sales representatives，用主格 they。them 是受格、their 是所有格，都不能當主詞。" },
      { o: ["The previous version will remain in use for another year.", "Unfortunately, the upgrade has been postponed until next month.", "For example, representatives will be able to view a client's complete order history on a single screen.", "Most sales staff attended the conference in Chicago last week."], a: 2, type: "insert", e: "前句說有多項新功能，接著用 For example 舉出第一項，後句再用 In addition 補充搜尋更快，結構最完整。「延期到下個月」與本週末升級矛盾。" },
      { o: ["unfamiliar", "unable", "unrelated", "unaware"], a: 1, type: "vocab", e: "be unable to V「無法做…」，無法參加訓練的人可以索取錄影版本。unfamiliar 後接 with、unaware 後接 of，都不能接 to attend。" },
    ],
  },
  // Questions 139–142
  {
    passage: {
      kind: "article",
      title: "Greenfield Transit Expands Evening Service",
      body: "PORTSMOUTH (January 20) — Greenfield Transit announced yesterday that it will add late-evening service on three of its busiest bus routes. Beginning February 3, buses on Routes 4, 7, and 12 {{1}} until midnight on weekdays. Currently, service on these routes ends at 9:30 P.M.\n\nThe decision follows a survey of riders conducted last fall. In {{2}}, more than 60 percent of respondents said that they would use the buses more often if service were available later in the evening.\n\nThe expansion will cost approximately $1.2 million per year. {{3}}, transit officials expect that higher ridership will cover much of the additional expense.\n\nUpdated timetables will be posted at bus stops and on the Greenfield Transit Web site by the end of this month. {{4}}",
    },
    qs: [
      { o: ["ran", "have run", "had run", "will run"], a: 3, type: "grammar", e: "報導日期是 1 月 20 日，新服務從 2 月 3 日才開始，且後句 Currently 說目前 9:30 就收班，所以要用未來式 will run。" },
      { o: ["them", "its", "it", "itself"], a: 2, type: "grammar", e: "In it 的 it 指前一句的 a survey（單數），「在該調查中」。them 是複數，與 survey 不一致；its 是所有格，後面必須接名詞。" },
      { o: ["Therefore", "However", "For example", "Likewise"], a: 1, type: "connector", e: "前句說擴充每年花費約 120 萬美元（缺點），後句說搭乘人數增加可抵銷大部分成本，前後是轉折，用 However。Therefore 表因果，不合。" },
      { o: ["Riders are encouraged to review them before the new schedule takes effect.", "The survey was completed by fewer than 100 riders.", "Evening service on Route 4 was discontinued last year.", "The fare increase was approved by the city council in December."], a: 0, type: "insert", e: "前一句說新時刻表月底前會公布，接著建議乘客在新班表生效前查看（them 指 timetables）最連貫。文中從未提到票價調漲；Route 4 停駛與文意矛盾。" },
    ],
  },
  // Questions 143–146
  {
    passage: {
      kind: "letter",
      title: "Letter",
      meta: [["To", "Ms. Ingrid Lindqvist, Lindqvist Consulting"], ["From", "Owen Pritchard, Northgate Business Center"], ["Date", "January 9"]],
      body: "Dear Ms. Lindqvist,\n\nThank you for your recent inquiry about renting space at the Northgate Business Center. I am pleased to {{1}} that a 900-square-foot office on the fifth floor is currently available.\n\nThe unit has large windows facing the river and comes fully furnished. {{2}} Tenants also have access to a shared conference room and a staff lounge on the second floor.\n\nAs you mentioned in your e-mail, your company is planning to move in March. If you {{3}} the office before February 15, we can offer you a 5 percent discount on the first year's rent.\n\nPlease contact me at 555-0175 to arrange a viewing. {{4}}, you can stop by the management office on the first floor any weekday between 9:00 A.M. and 5:00 P.M.\n\nSincerely,\nOwen Pritchard\nLeasing Manager",
    },
    qs: [
      { o: ["confirm", "approve", "remind", "require"], a: 0, type: "vocab", e: "對方詢問是否有空位，回信「很高興確認」目前有一間空辦公室，confirm that 最合理。remind 需要接人當受詞（remind you that）；approve、require 語意不符。" },
      { o: ["The unit was rented to another company last week.", "Utilities, including high-speed Internet, are included in the monthly rent.", "Our building will be closed for renovations next year.", "Please return the signed lease by the end of the day."], a: 1, type: "insert", e: "此段介紹辦公室本身的條件，補充「水電與網路含在租金內」，再用 also 帶出共用設施，最連貫。「上週已租給別家」與前文 currently available 矛盾；對方還沒看房就要求當天簽約不合理。" },
      { o: ["will reserve", "reserved", "had reserved", "reserve"], a: 3, type: "grammar", e: "If 引導的條件句表示未來可能的情況時，if 子句用現在式代替未來式，所以選 reserve。will reserve 是常見陷阱，條件子句中不用 will。" },
      { o: ["Accordingly", "Instead of", "Alternatively", "In contrast"], a: 2, type: "connector", e: "前句請對方打電話約看房，後句提供另一個方式（直接到管理室），用 Alternatively「或者」。Instead of 是介系詞，後面要接名詞，不能單獨放句首接逗號。" },
    ],
  },
];
