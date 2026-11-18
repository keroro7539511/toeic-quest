// Part 6 短文填空（追加練習）
// 以 push 追加在 data/part6.js 之後；題目以陣列順序當 ID，新增請加在最後面。
window.PART6.push(...[
  // 1. email：訂單延遲
  {
    passage: {
      kind: "email",
      title: "E-mail",
      meta: [["To", "Haruka Ito, Lindgren Architects"], ["From", "Marcus Webb, Kestrel Office Supply"], ["Date", "May 6"], ["Subject", "Your order #58214"]],
      body: "Dear Ms. Ito,\n\nThank you for your order of twelve ergonomic chairs, which we received on May 2. Unfortunately, our warehouse {{1}} a shipment of this model from the manufacturer since late April, so we are unable to deliver your chairs on May 9 as originally scheduled.\n\nWe now expect the chairs to arrive at our warehouse by May 20. {{2}} If this new schedule does not meet your needs, you may cancel the order at no cost.\n\n{{3}}, we would like to offer you a 10 percent discount on your next purchase as an apology for the delay. Simply enter the code KESTREL10 at {{4}} when you place your next order online.\n\nWe apologize for any inconvenience this may cause.\n\nSincerely,\nMarcus Webb\nCustomer Service, Kestrel Office Supply",
    },
    qs: [
      { o: ["will not receive", "did not receive", "has not received", "is not receiving"], a: 2, type: "grammar", e: "後面有 since late April「從四月底到現在」，表示持續到現在的狀態，要用現在完成式 has not received。did not receive 是單純過去式，不能搭配 since。" },
      { o: ["We will deliver them to your office within two business days after that.", "Your chairs were delivered to the front desk this morning.", "The manufacturer has recently opened a new factory in Ohio.", "Please complete the attached survey about our website."], a: 0, type: "insert", e: "前一句說椅子預計 May 20 到倉庫，接著說明「之後兩個工作天內送到貴公司」最連貫，them 指 the chairs。「were delivered … this morning」與延遲送貨矛盾。" },
      { o: ["As a result", "Otherwise", "For instance", "In addition"], a: 3, type: "connector", e: "前面已提供「免費取消」的選項，這裡再「另外」提供九折優惠，是補充關係，用 In addition。As a result 表因果、For instance 表舉例，都不合邏輯。" },
      { o: ["arrival", "checkout", "entrance", "departure"], a: 1, type: "vocab", e: "線上下單時輸入折扣碼的地方是「結帳」頁面，enter the code at checkout 是常見說法。arrival、departure 指抵達、出發，與網購無關。" },
    ],
  },
  // 2. email：研討會報名確認
  {
    passage: {
      kind: "email",
      title: "E-mail",
      meta: [["To", "Daniel Osei"], ["From", "Elena Varga, Northgate Retail Summit"], ["Date", "August 18"], ["Subject", "Registration confirmed"]],
      body: "Dear Mr. Osei,\n\nThank you for registering for the Northgate Retail Summit, which {{1}} at the Carlton Convention Hall on September 24 and 25. Your registration fee of $350 has been received, and your badge will be ready for pickup at the information desk on the first morning.\n\nThis year's program features more than thirty sessions on topics such as online sales, store design, and customer loyalty. Because seating in each session is limited, we strongly recommend that you {{2}} your preferred sessions in advance through the summit Web site.\n\n{{3}} Several hotels near the convention hall are offering special rates to summit participants, and a list of them is available on our Web site. Please book early, {{4}} rooms tend to sell out quickly in September.\n\nWe look forward to seeing you there.\n\nBest regards,\nElena Varga\nEvents Coordinator",
    },
    qs: [
      { o: ["was held", "will be held", "has been held", "holding"], a: 1, type: "grammar", e: "信件日期是 August 18，研討會在 September 24–25，是未來的事，且研討會是「被舉辦」，用 will be held。was held、has been held 表示已經舉行，與日期矛盾。" },
      { o: ["selecting", "selected", "to select", "select"], a: 3, type: "grammar", e: "recommend that 後面的子句要用原形動詞（省略 should），所以是 you select。to select、selecting 不能當子句的動詞，是常見的詞形陷阱。" },
      { o: ["You may also want to arrange your accommodations soon.", "The summit was attended by over 2,000 people last week.", "Your badge has been mailed to your home address.", "Unfortunately, all of the sessions have been canceled."], a: 0, type: "insert", e: "後面接著談附近飯店的優惠價，先用「您也許想盡早安排住宿」帶出主題最自然。「badge has been mailed」與前文「第一天早上到服務台領取」矛盾。" },
      { o: ["although", "unless", "since", "so that"], a: 2, type: "connector", e: "「請提早訂房」的原因是「九月的房間很快就會賣完」，表原因用 since（因為）。although 表讓步、unless 表條件，都不合語意。" },
    ],
  },
  // 3. email：面試邀請
  {
    passage: {
      kind: "email",
      title: "E-mail",
      meta: [["To", "Sofia Marquez"], ["From", "Gregory Lam, Pellham Biotech"], ["Date", "February 11"], ["Subject", "Interview invitation"]],
      body: "Dear Ms. Marquez,\n\nThank you for applying for the position of laboratory assistant at Pellham Biotech. After carefully reviewing your application, we {{1}} to invite you for an interview at our main office.\n\nInterviews will take place on February 19 and 20. Each interview will last about an hour and will be conducted by a panel of three staff members. {{2}} Please reply to this e-mail by February 14 to let us know which date and time you prefer.\n\nOn the day of your interview, please bring a copy of your university {{3}}, as we are required to verify the academic records of all candidates. {{4}}, you will be asked to complete a short written test on basic laboratory safety.\n\nIf you have any questions, feel free to contact me directly.\n\nSincerely,\nGregory Lam\nHuman Resources, Pellham Biotech",
    },
    qs: [
      { o: ["pleased", "were pleasing", "will please", "are pleased"], a: 3, type: "grammar", e: "be pleased to V「很高興做某事」是固定用法，寫信當下的心情用現在式 are pleased。只寫 pleased 缺少 be 動詞；will please 意思變成「將取悅」。" },
      { o: ["The position was filled by an internal candidate last month.", "Our laboratory is closed on weekends for cleaning.", "Morning and afternoon time slots are available on both days.", "Thank you for attending the interview yesterday."], a: 2, type: "insert", e: "後一句請對方回覆偏好的「日期與時段」，所以前面先說明「兩天都有上午和下午的時段」最連貫。「職位上個月已補滿」與邀請面試矛盾。" },
      { o: ["receipt", "transcript", "prescription", "subscription"], a: 1, type: "vocab", e: "後面說要核對所有應徵者的「學業紀錄」，所以要帶大學的成績單 transcript。prescription 是處方箋、subscription 是訂閱，字形相似但意思不符。" },
      { o: ["In addition", "Instead", "Nonetheless", "Consequently"], a: 0, type: "connector", e: "前句要求帶成績單，後句再加上一項要求「做簡短筆試」，是補充關係，用 In addition。Instead 表示取代、Consequently 表結果，都不合。" },
    ],
  },
  // 4. memo：差旅報帳改用 App
  {
    passage: {
      kind: "memo",
      title: "Memo",
      meta: [["To", "All Sales Staff"], ["From", "Rebecca Holt, Finance Director"], ["Date", "October 1"], ["Subject", "Changes to travel expense reports"]],
      body: "Starting November 1, all travel expense reports must be submitted through the Spendwise mobile application. Paper forms will no longer be {{1}} after that date.\n\nThe application allows you to photograph receipts and upload them immediately, {{2}} reduces the risk of losing them during a trip. Reports submitted through the app are usually processed within five business days, compared with nearly three weeks under the current system.\n\nTo help everyone prepare, the finance team will hold two training sessions next week. {{3}} Employees who cannot attend either session may watch a recorded version on the company intranet.\n\nPlease note that reports for trips taken before November 1 {{4}} on paper forms until the end of the year. After December 31, however, only electronic submissions will be processed.",
    },
    qs: [
      { o: ["accepted", "accompanied", "acquainted", "accustomed"], a: 0, type: "vocab", e: "11 月 1 日起一律用 App 提交，所以紙本表格將不再「被接受」，選 accepted。其他三個字開頭相似（acc-/acq-），但「陪同、熟悉、習慣」都不合語意。" },
      { o: ["what", "which", "who", "it"], a: 1, type: "grammar", e: "逗號後用非限定關係代名詞 which 指前面整件事（拍照立即上傳），作 reduces 的主詞。用 it 會造成兩個子句沒有連接詞；what 不能接在逗號後修飾前句。" },
      { o: ["The new application was introduced last year.", "Paper forms can be found in the supply cabinet.", "Both will be held in Conference Room B on Tuesday and Thursday at 3:00 P.M.", "Receipts should be mailed to the finance office."], a: 2, type: "insert", e: "前一句說下週會辦兩場訓練，接著說明「兩場的地點和時間」最自然，Both 呼應 two training sessions；下一句「兩場都無法參加的人」也順勢銜接。" },
      { o: ["submitted", "have submitted", "were submitted", "may still be submitted"], a: 3, type: "grammar", e: "後句說 12 月 31 日之後「才」只收電子申請，表示年底前 11 月以前的出差報告「仍可以」用紙本提交，選 may still be submitted。were submitted 是過去式，與 until the end of the year 不合。" },
    ],
  },
  // 5. notice：電梯維修
  {
    passage: {
      kind: "notice",
      title: "Notice to All Residents: Greenfield Towers",
      body: "Please be advised that the east elevator in Greenfield Towers will be out of service from Monday, March 3, through Friday, March 7, while its motor and control panel are replaced. The west elevator will remain in {{1}} during this time.\n\nBecause only one elevator will be available, residents may experience longer waits, especially during the morning and evening rush hours. {{2}}, we ask that residents use the stairs whenever possible, particularly those living on the lower floors.\n\nResidents who are planning to move furniture or receive large deliveries during this week should contact the management office in advance. {{3}} This will help prevent the remaining elevator from being occupied for long periods.\n\nWe apologize for the inconvenience and appreciate your {{4}}. If you have any questions, please call the management office at 555-0182.",
    },
    qs: [
      { o: ["progress", "charge", "operation", "advance"], a: 2, type: "vocab", e: "東側電梯停用期間，西側電梯「維持運作」，remain in operation 是固定說法。in charge 是「負責」，主詞須是人；in advance 是「事先」，都不合。" },
      { o: ["Even so", "Instead", "Similarly", "For this reason"], a: 3, type: "connector", e: "前句說只剩一部電梯、等候時間會變長，後句因此請住戶多走樓梯，是因果關係，用 For this reason。Even so 表讓步、Similarly 表相似，都不合。" },
      { o: ["The west elevator was installed when the building opened.", "Staff will schedule a time that does not conflict with other residents' needs.", "Packages are delivered to the lobby every afternoon.", "The parking garage will also be repaved next month."], a: 1, type: "insert", e: "前句請要搬家具的住戶先聯絡管理室，接著說「管理員會安排不影響其他住戶的時段」，後句 This will help prevent… 也正好接續。其他句子與搬運安排無關。" },
      { o: ["patience", "patient", "patiently", "patients"], a: 0, type: "grammar", e: "所有格 your 後面要接名詞，appreciate your patience「感謝您的耐心」是公告常用語。patients 雖是名詞但意思是「病人」，是常見陷阱。" },
    ],
  },
  // 6. article：食品工廠擴建
  {
    passage: {
      kind: "article",
      title: "Torvane Foods to Expand Factory",
      body: "BRANDON CITY (July 14) — Torvane Foods, a maker of frozen meals, announced yesterday that it will expand its factory on Industrial Parkway. The project, which is expected to cost about $12 million, {{1}} the size of the facility by nearly 40 percent.\n\nAccording to company president Lydia Choi, demand for Torvane's products has grown steadily over the past three years. \"Our current factory is simply not large enough to keep up with orders,\" she said. {{2}}, the company has had to turn down several contracts with large supermarket chains.\n\nConstruction is scheduled to begin in September and should be completed by next spring. {{3}} Torvane plans to fill most of these positions with local residents.\n\nCity officials welcomed the news. Mayor Paul Fenwick described the expansion as \"a {{4}} boost for the local economy\" and said the city would help the company obtain the necessary permits quickly.",
    },
    qs: [
      { o: ["increased", "will increase", "has increased", "increasing"], a: 1, type: "grammar", e: "工程尚未開始（九月才動工），擴建「將會」讓廠房面積增加約四成，用未來式 will increase。increasing 缺少主要動詞，句子不完整。" },
      { o: ["As a result", "In contrast", "Even so", "Likewise"], a: 0, type: "connector", e: "前句說工廠太小跟不上訂單，後句說公司因此不得不拒絕幾份合約，是因果關係，用 As a result。In contrast、Even so 表轉折，不合語意。" },
      { o: ["The company was founded by Ms. Choi's father in 1985.", "Several supermarket chains have stopped selling frozen meals.", "The factory will be closed during construction.", "Once it is finished, the expanded factory will employ about 150 additional workers."], a: 3, type: "insert", e: "下一句的 these positions「這些職缺」必須有前文交代，只有「完工後將新增約 150 名員工」能提供。其他句子都沒有提到職缺。" },
      { o: ["slight", "former", "significant", "reluctant"], a: 2, type: "vocab", e: "市長歡迎這項消息並承諾協助，表示他認為這對地方經濟是「重大的」助益，選 significant。slight「輕微的」與歡迎的態度不符。" },
    ],
  },
  // 7. letter：飯店回覆客訴
  {
    passage: {
      kind: "letter",
      title: "Letter",
      meta: [["To", "Mr. Javier Ortega, 77 Lakeshore Drive, Milford"], ["From", "Seaview Grand Hotel"], ["Date", "April 22"]],
      body: "Dear Mr. Ortega,\n\nThank you for your letter regarding your stay at the Seaview Grand Hotel from April 10 to 13. I was sorry to learn that the air conditioner in your room {{1}} properly during your visit and that your request for a room change was not handled promptly.\n\nI have shared your comments with our maintenance and front desk teams. {{2}}, all of the air-conditioning units on the sixth floor, where your room was located, have now been inspected and repaired. {{3}}\n\nAs a token of our {{4}}, I have enclosed a voucher for one free night at any Seaview hotel. The voucher is valid for one year from the date of this letter.\n\nWe hope to welcome you back soon.\n\nSincerely,\nHannah Brooks\nGuest Relations Manager",
    },
    qs: [
      { o: ["does not work", "has not worked", "will not work", "did not work"], a: 3, type: "grammar", e: "住宿期間是 April 10–13，信件寫於 April 22，冷氣故障是過去住宿時發生的事，用過去式 did not work。does not work、will not work 時態都不對。" },
      { o: ["Otherwise", "In response", "On the contrary", "Even though"], a: 1, type: "connector", e: "前句說已把意見轉達給維修部門，後句說六樓冷氣已全部檢修，是針對客訴採取的行動，用 In response「作為回應」。Even though 是連接詞，後面不能接逗號再接完整句。" },
      { o: ["In addition, our front desk staff will receive further training on handling guest requests.", "Your room has been reserved for April 10 to 13.", "Our hotel restaurant is open daily until 11:00 P.M.", "Unfortunately, we were unable to locate the problem."], a: 0, type: "insert", e: "客人抱怨了冷氣和換房兩件事，前句處理冷氣，這句接著處理「櫃台未及時處理換房」的問題最完整。「找不到問題」與前句已修好矛盾。" },
      { o: ["arrival", "agreement", "apology", "appearance"], a: 2, type: "vocab", e: "整封信在回應客訴並致歉，as a token of our apology「聊表歉意」最合理。agreement「同意」、appearance「外觀」都不合語意。" },
    ],
  },
  // 8. ad：共享辦公空間
  {
    passage: {
      kind: "ad",
      title: "Hive Workspace",
      body: "Looking for a quiet, professional place to work outside the home? Hive Workspace is now open in downtown Ashford, just two minutes from Central Station.\n\nOur {{1}} plans are designed for freelancers, small teams, and remote workers alike. Choose a daily pass for $20, or become a monthly member for $240 and enjoy unlimited access to private desks, high-speed Internet, and fully equipped meeting rooms.\n\nAll members also receive free coffee and tea, as well as discounts at several nearby restaurants. {{2}} Members can reserve these spaces up to two weeks in advance through our mobile app.\n\nTo celebrate our opening, we are offering new members their first month at half price. This offer {{3}} only to those who sign up before June 30. {{4}}, anyone who refers a friend will receive a free day pass.\n\nVisit www.hiveworkspace.com to schedule a tour today!",
    },
    qs: [
      { o: ["flexible", "flexibility", "flexibly", "flex"], a: 0, type: "grammar", e: "所有格 Our 與名詞 plans 之間要放形容詞，選 flexible「彈性的」；後文有日票、月費等不同選擇，也呼應「彈性」。flexibility 是名詞、flexibly 是副詞，詞性不對。" },
      { o: ["Our Central Station location will close at the end of the month.", "Membership fees must be paid in cash.", "In addition, we have three soundproof phone booths for private calls.", "The restaurants offer delivery service to most offices."], a: 2, type: "insert", e: "下一句說會員可以預約 these spaces，前面必須先出現可預約的「空間」，只有隔音電話亭符合。餐廳不是會員能透過 App 預約的空間。" },
      { o: ["applying", "was applied", "applied", "applies"], a: 3, type: "grammar", e: "優惠目前正在進行、適用於 June 30 前報名的人，用現在式 applies。applying 缺少主要動詞；was applied 是過去被動，與進行中的優惠不符。" },
      { o: ["Otherwise", "Furthermore", "Therefore", "Despite this"], a: 1, type: "connector", e: "前句是首月半價優惠，後句再加上「推薦朋友送日票」，是追加優惠，用 Furthermore。Therefore 表因果、Despite this 表轉折，都不合。" },
    ],
  },
]);
