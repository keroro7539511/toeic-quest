// Part 6 短文填空（練習）
// passage.body 以 {{1}}~{{4}} 標示空格，qs 依序對應；每篇 1 題句子插入（type: "insert"）
// 題目以陣列順序當 ID，新增題目請加在最後面。
window.PART6 = [
  // 1. email
  {
    passage: {
      kind: "email",
      title: "E-mail",
      meta: [["To", "All Staff, Harlow Design Studio"], ["From", "Priya Nandakumar, Office Manager"], ["Date", "March 3"], ["Subject", "New room reservation system"]],
      body: "Dear colleagues,\n\nBeginning on Monday, March 10, all meeting rooms on the fourth floor {{1}} through our new online calendar rather than at the front desk. The change is intended to prevent double bookings, which have caused several scheduling problems in recent weeks.\n\nTo reserve a room, simply log in with your employee ID and select an available time slot. {{2}} If you need audiovisual equipment, please note this in the comments field when you make your request.\n\nReservations can be made up to 30 days in advance. {{3}}, bookings for the large boardroom must be approved by a department head. Rooms that remain unused for 15 minutes after the start of a reservation will be released {{4}} to other employees.\n\nThank you for your cooperation.\n\nPriya Nandakumar\nOffice Manager",
    },
    qs: [
      { o: ["reserved", "have reserved", "will be reserved", "were reserving"], a: 2, type: "grammar", e: "日期 March 10 是信件寫成（March 3）之後的未來，且會議室是「被」預訂，所以用未來式被動 will be reserved。reserved、were reserving 都是過去式，時態不符。" },
      { o: ["A confirmation message will then be sent to your e-mail address.", "The front desk will close permanently at the end of the month.", "Many employees have already attended the training session.", "Please return all equipment to the storage room by Friday."], a: 0, type: "insert", e: "前一句說明登入並選擇時段的預約步驟，接著說「之後會寄確認信到你的信箱」最連貫（then 呼應前一步驟）。其他句子跟預約流程無關。" },
      { o: ["Therefore", "However", "Similarly", "As a result"], a: 1, type: "connector", e: "前句說一般預約最多可提前 30 天，後句說大會議室「必須」經部門主管核准，是例外、限制，所以用轉折的 However。Therefore、As a result 表因果，不合語意。" },
      { o: ["previously", "hardly", "mutually", "automatically"], a: 3, type: "vocab", e: "預約開始 15 分鐘沒人使用就「自動」釋出給其他員工，automatically 最合理。previously「先前」、hardly「幾乎不」語意不通。" },
    ],
  },
  // 2. memo
  {
    passage: {
      kind: "memo",
      title: "Memo",
      meta: [["To", "All Employees"], ["From", "Facilities Department"], ["Date", "June 12"], ["Subject", "Cafeteria renovation"]],
      body: "The employee cafeteria on the ground floor will be closed from June 23 to July 4 while new kitchen equipment is installed. During this period, a temporary food service {{1}} in the main lobby from 11:30 A.M. to 2:00 P.M.\n\nThe temporary service will offer a {{2}} menu of sandwiches, salads, and hot soups. Hot entrées will not be available until the renovation is complete. {{3}}\n\nWe understand that this may be inconvenient. {{4}}, the upgraded kitchen will allow our staff to prepare a wider variety of meals more quickly. We appreciate your patience.",
    },
    qs: [
      { o: ["operated", "will operate", "has operated", "operating"], a: 1, type: "grammar", e: "備忘錄日期是 June 12，施工期間 June 23 起才開始，所以臨時餐飲服務是未來才營運，用 will operate。operating 缺少動詞，句子不完整。" },
      { o: ["crowded", "delayed", "former", "limited"], a: 3, type: "vocab", e: "後文說只有三明治、沙拉和湯，熱主菜要等整修後才有，表示菜單「有限的」，選 limited。crowded「擁擠的」不能修飾菜單。" },
      { o: ["The new equipment was delivered to the wrong address.", "The cafeteria has been closed since last month.", "Employees may also bring their own lunches and use the refrigerators on the third floor.", "Hot entrées will be served in the lobby each day."], a: 2, type: "insert", e: "此段談整修期間的用餐安排，補充「也可以自己帶午餐、使用三樓冰箱」最自然。「Hot entrées will be served…」與前一句熱主菜不供應矛盾；「has been closed since last month」與 June 23 才關閉矛盾。" },
      { o: ["However", "For example", "Otherwise", "Likewise"], a: 0, type: "connector", e: "前句承認會造成不便，後句說整修後的好處，前後是轉折關係，用 However。For example 表舉例、Likewise 表相似，都不合。" },
    ],
  },
  // 3. notice
  {
    passage: {
      kind: "notice",
      title: "Notice to Visitors: Maplewood Community Center",
      body: "The parking lot at the Maplewood Community Center will be repaved next week. Work is scheduled to begin on Tuesday, October 8, and {{1}} by Friday, October 11, weather permitting.\n\nWhile the work is under way, visitors are asked to park on Linden Street or at the Grace Avenue public garage. {{2}} Please allow extra time to walk to the center, as the entrance nearest the lot will also be closed.\n\nAll classes and events will continue {{3}} scheduled. Anyone with questions should contact the front office at 555-0142. We apologize for any inconvenience and thank {{4}} for your understanding.",
    },
    qs: [
      { o: ["was completed", "is expected to be completed", "completing", "has been completed"], a: 1, type: "grammar", e: "工程「下週」才開始，完工日 October 11 也是未來，且工程是「被」完成，所以用 is expected to be completed。was completed、has been completed 都表示已完成，與 next week 矛盾。" },
      { o: ["Unfortunately, all classes this week have been canceled.", "Construction crews finished the work ahead of schedule.", "The center's new swimming pool will open in the spring.", "Parking at the garage will be free for center visitors who show their membership card."], a: 3, type: "insert", e: "前一句建議改停 Grace Avenue 公共停車場，接著說明「出示會員卡可免費停車」最連貫。「課程取消」與後文 All classes will continue 矛盾；「已提前完工」時態與工程尚未開始不符。" },
      { o: ["so", "such", "as", "than"], a: 2, type: "grammar", e: "continue as scheduled 是固定用法，意思是「按照原定計畫進行」。such、so、than 都無法接過去分詞 scheduled 表達此意。" },
      { o: ["you", "them", "itself", "ours"], a: 0, type: "grammar", e: "公告是對讀者（訪客）說話，感謝「你們」的體諒，用受詞 you。them 會讓人不知道指誰；itself、ours 不合語意。" },
    ],
  },
  // 4. article
  {
    passage: {
      kind: "article",
      title: "Riverside Bakery to Open Second Location",
      body: "MILTON (April 2) — Riverside Bakery, a family-owned shop known for its sourdough bread, will open a second location on Harbor Road this summer. Owner Camila Reyes said the decision {{1}} by strong demand from customers in the eastern part of the city.\n\nThe new store will be about twice the size of the original and will include a seating area for 40 guests. {{2}} Ms. Reyes plans to hire 15 additional employees, most of whom will work early-morning baking shifts.\n\n\"Many of our regular customers drive more than twenty minutes to reach us,\" Ms. Reyes said. \"{{3}} the new shop, they will be able to pick up their orders much closer to home.\" The Harbor Road location is scheduled to open on July 15. A {{4}} opening celebration with free samples is planned for that day.",
    },
    qs: [
      { o: ["drove", "driving", "will drive", "was driven"], a: 3, type: "grammar", e: "「決定」是被顧客需求所推動的，後面有 by，要用被動語態 was driven。drove 是主動，語意變成決定去開車，不合理。" },
      { o: ["It will also offer a kitchen where customers can attend weekend baking classes.", "The original shop will close at the end of the month.", "Sales at the bakery declined sharply last year.", "The seating area was removed to make room for more ovens."], a: 0, type: "insert", e: "前一句介紹新店面積與座位區，接著用 also 補充另一項設施（烘焙教室）最自然。「原店將關閉」與開設「第二家」分店矛盾；「銷售下滑」與需求強勁矛盾。" },
      { o: ["Despite", "With", "Unless", "Instead of"], a: 1, type: "grammar", e: "有了新店，顧客就能在離家近的地方取貨，With the new shop 表示「有了…」。Despite「儘管」語意相反；Unless 是連接詞，後面要接子句。" },
      { o: ["total", "rapid", "grand", "strict"], a: 2, type: "vocab", e: "grand opening celebration 是「盛大開幕慶祝活動」的固定搭配。total、rapid、strict 都不能自然修飾慶祝活動。" },
    ],
  },
  // 5. letter
  {
    passage: {
      kind: "letter",
      title: "Letter",
      meta: [["To", "Mr. Daniel Okafor, 48 Birchwood Lane, Easton"], ["From", "Brightsmile Dental Clinic"], ["Date", "August 20"]],
      body: "Dear Mr. Okafor,\n\nWe are writing to let you know that Brightsmile Dental Clinic is moving. As of September 15, our office {{1}} at 210 Harmon Avenue, Suite 300. Our current location on Pine Street will close on September 12.\n\nThe new office is across from the Harmon Avenue bus stop, and patients may use the building's parking garage at no charge. {{2}}\n\nYour next appointment is scheduled for September 22 at 10:00 A.M. {{3}} this appointment will take place at our new address, please make sure to update your records. If this time is no longer {{4}} for you, please call us at 555-0198 to reschedule.\n\nSincerely,\nThe Brightsmile Dental Team",
    },
    qs: [
      { o: ["will be located", "is locating", "was located", "has located"], a: 0, type: "grammar", e: "信件日期 August 20，搬遷生效日 September 15 是未來，且診所「位於」要用被動 be located，所以選 will be located。was located 是過去式，時態錯誤。" },
      { o: ["Unfortunately, the new building does not have any parking facilities.", "The bus service on Harmon Avenue was discontinued last year.", "Simply bring your parking ticket to the front desk to have it validated.", "Please arrive at our Pine Street office fifteen minutes early."], a: 2, type: "insert", e: "前一句說可免費使用停車場，接著說明「把停車票拿到櫃台蓋章」最連貫。「沒有停車設施」與前文矛盾；Pine Street 舊址 9 月 12 日就關閉，不可能再去。" },
      { o: ["Although", "Unless", "Whereas", "Because"], a: 3, type: "connector", e: "「因為」這次預約會在新地址進行，所以請更新紀錄，前後是因果關係，用 Because。Although 表讓步，語意相反。" },
      { o: ["considerate", "convenient", "eligible", "relative"], a: 1, type: "vocab", e: "「如果這個時間對您不再方便」，時間方便用 convenient。considerate 是「體貼的」，用來形容人，是常見的字形陷阱。" },
    ],
  },
  // 6. webpage
  {
    passage: {
      kind: "webpage",
      title: "Summit Outdoor Gear: Rental Program",
      body: "Planning a camping trip but don't want to buy expensive equipment? Summit Outdoor Gear now rents tents, sleeping bags, and cooking stoves at all three of our stores.\n\nRental prices start at just $15 per day. Members of our Summit Rewards program {{1}} an additional 10 percent discount on all rentals. {{2}}\n\nTo rent equipment, reserve items online at least 48 hours in advance and pick them up at the store of your choice. All gear is cleaned and {{3}} inspected after every use, so you can be sure it is in excellent condition. {{4}}, accidents can happen during outdoor trips. If any item is damaged, simply report it when you return the equipment. Minor repairs are included in the rental price.",
    },
    qs: [
      { o: ["receiving", "to receive", "receive", "receipt"], a: 2, type: "grammar", e: "主詞 Members 後面缺少主要動詞，要用複數現在式 receive。receiving、to receive 不能當主要動詞；receipt 是名詞「收據」。" },
      { o: ["Tents are not currently included in the rental program.", "Joining the program is free and takes only a few minutes at any checkout counter.", "All rental equipment must be purchased at least one week in advance.", "Our stores will be closed for most of the summer season."], a: 1, type: "insert", e: "前一句提到會員享額外折扣，接著說明「加入會員免費又快速」最自然，the program 指的就是 Summit Rewards。「帳篷不在租借範圍」與第一段矛盾。" },
      { o: ["carefully", "nearly", "barely", "formerly"], a: 0, type: "vocab", e: "每次使用後都會清潔並「仔細」檢查，才能保證狀況良好，選 carefully。barely「幾乎沒有」語意相反。" },
      { o: ["Therefore", "For instance", "Similarly", "Nevertheless"], a: 3, type: "connector", e: "前句說裝備狀況很好，後句說「儘管如此」戶外仍可能發生意外，是讓步轉折，用 Nevertheless。Therefore 表因果，不合。" },
    ],
  },
];
