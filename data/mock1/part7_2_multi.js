// 模擬考 1 — Part 7 多篇閱讀（Questions 176–200）
// 雙篇 2 組（176–180、181–185）＋ 三篇 3 組（186–190、191–195、196–200）
// 單篇閱讀由另一個檔案負責，於本檔之前載入。
window.MOCK1 = window.MOCK1 || {};
window.MOCK1.part7 = (window.MOCK1.part7 || []).concat([
  // ===== Questions 176–180：e-mail + reply =====
  {
    passages: [
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Nadia Ferreira <nferreira@corwellprint.com>"], ["To", "Tomas Lindqvist <t.lindqvist@lindqvistdental.com>"], ["Date", "May 24"], ["Subject", "Your brochure order"]],
        body: "Dear Mr. Lindqvist,\n\nThank you for your order of 2,000 tri-fold brochures and 500 appointment cards, placed on May 3. The digital proof of your brochure is attached. Please note that we cannot send your job to the press until you have approved the proof in writing.\n\nI also need to let you know that the price of coated paper has risen sharply over the past two months. As a result, beginning June 1, brochures printed on our glossy stock will cost $0.48 each instead of the current $0.42. Any order whose proof is approved before that date will be billed at the original rate. If you prefer, our matte stock remains available at $0.40 per brochure, and many of our clients find it easier to write on.\n\nFinally, orders totaling more than $900 now qualify for free delivery anywhere in the downtown area.\n\nPlease review the proof and reply at your earliest convenience.\n\nBest regards,\nNadia Ferreira\nAccount Manager, Corwell Print Solutions"
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Tomas Lindqvist <t.lindqvist@lindqvistdental.com>"], ["To", "Nadia Ferreira <nferreira@corwellprint.com>"], ["Date", "June 3"], ["Subject", "RE: Your brochure order"]],
        body: "Dear Ms. Ferreira,\n\nI apologize for the slow response. I was attending a dental conference in Lisbon last week and only returned to the office yesterday.\n\nThe proof looks excellent, and I approve it with one exception: the telephone number on the back panel should read 555-0148, not 555-0184. Please make that change before printing.\n\nI considered the other paper you mentioned, but our patients have always commented on how sharp our photographs look on the glossy finish, so I would like to keep it. I understand what that means for the cost.\n\nThe cards can stay exactly as they are. Thank you for your patience.\n\nSincerely,\nTomas Lindqvist"
      }
    ],
    qs: [
      { q: "What is one purpose of the first e-mail?", o: ["To announce the opening of a new branch", "To apologize for a delayed shipment", "To inform a customer about a price increase", "To promote a discount on appointment cards"], a: 2, e: "第一封信第二段說明紙價上漲，6 月 1 日起光面紙價格調高，並請客戶核准樣稿。信中雖提到 appointment cards，但沒有任何折扣，是「提到但不是答案」的陷阱。", type: "main" },
      { q: "According to the first e-mail, why is Corwell Print Solutions changing its prices?", o: ["A material it uses has become more expensive.", "It has hired additional press operators.", "It has begun offering free delivery.", "Demand for printed brochures has fallen."], a: 0, e: "信中寫 the price of coated paper has risen sharply，也就是原料（紙張）變貴。免運費是另一項獨立資訊，並非調價原因。", type: "detail" },
      { q: "How much will Mr. Lindqvist most likely be charged for each brochure?", o: ["$0.40", "$0.42", "$0.45", "$0.48"], a: 3, e: "需整合兩封信：第一封說 6 月 1 日前核准樣稿才能維持 $0.42，之後光面紙為 $0.48；Mr. Lindqvist 6 月 3 日才回信核准，且決定保留光面紙，所以每份 $0.48。$0.42 是只看舊價的陷阱。", type: "cross" },
      { q: "What does Mr. Lindqvist ask Ms. Ferreira to do?", o: ["Send a second proof by mail", "Correct an error in a phone number", "Switch the appointment cards to matte paper", "Reschedule a delivery date"], a: 1, e: "回信第二段要求把背面電話由 555-0184 改為 555-0148。他明確說卡片維持原樣，也沒有提到更改配送日期。", type: "detail" },
      { q: "In the first e-mail, the word \"stock\" in paragraph 2 is closest in meaning to", o: ["inventory", "paper", "share", "supply"], a: 1, e: "glossy stock 與後文 matte stock 對照，指印刷用的「紙材」。stock 常見的「庫存」「股票」意思在此不合，是典型的一字多義陷阱。", type: "vocab" }
    ]
  },

  // ===== Questions 181–185：advertisement + online review =====
  {
    passages: [
      {
        kind: "ad",
        title: "Solano Bike Tours",
        body: "Discover the city on two wheels with Solano Bike Tours!\n\nRiverside Loop — 2 hours, $35 per person. Departs daily at 9:00 A.M. A relaxed, flat route along the river path.\n\nOld Town Heritage Ride — 3 hours, $48 per person. Departs Tuesday through Sunday at 1:00 P.M. Includes a guided stop and admission to the Clocktower Museum.\n\nSunset Harbor Ride — 90 minutes, $30 per person. Departs Friday through Sunday at 6:00 P.M.\n\nEvery rider receives a helmet and a bike lock at no additional charge. Want less effort on the hills? Upgrade to an electric bicycle for $12.\n\nGroups of six or more receive 10 percent off the total price. Customers who book online at least 48 hours in advance also receive a complimentary Solano Bike Tours water bottle.\n\nReserve today at www.solanobiketours.com or call 555-0192."
      },
      {
        kind: "review",
        title: "Customer Reviews — Solano Bike Tours",
        body: "★★★★☆ Posted by Helena Marsh\n\nMy colleagues and I took a tour with Solano during our company's annual retreat, and it was the highlight of the week for most of us. There were eight of us in total, and we went on a Wednesday afternoon. Our guide, Rafael, was knowledgeable and funny, and the stop at the museum was a nice break halfway through.\n\nThree of us paid for the electric bikes, and they were well worth it on the steep climb toward the old castle walls. The rest of us managed, but just barely!\n\nMy only complaint is a small one. We made our reservation over the phone the day before, and when we arrived we noticed another group receiving free water bottles. When I asked about them, the staff politely explained why we were not eligible. Next time, I will plan ahead."
      }
    ],
    qs: [
      { q: "What is indicated about Solano Bike Tours in the advertisement?", o: ["It sells used bicycles at a discount.", "It operates tours only on weekends.", "It was founded by a former museum guide.", "It provides safety equipment at no extra cost."], a: 3, e: "廣告寫 Every rider receives a helmet and a bike lock at no additional charge，安全帽不另收費。廣告中只有 Sunset Harbor Ride 限週末，其他行程平日也有，所以「只在週末」不對。", type: "detail" },
      { q: "What is NOT mentioned in the review?", o: ["The amount the group paid for the tour", "The name of the group's guide", "The day of the week the group went", "The number of people in the group"], a: 0, e: "評論提到導遊 Rafael、星期三下午、共八人，但完全沒寫付了多少錢。NOT 題要逐一刪去文中有提到的項目。", type: "not" },
      { q: "Which tour did Ms. Marsh's group most likely take?", o: ["The Riverside Loop", "The Sunset Harbor Ride", "The Old Town Heritage Ride", "A private tour arranged for companies"], a: 2, e: "評論說星期三下午出發、中途在博物館停留；對照廣告，只有 Old Town Heritage Ride 在下午 1 點出發、週二到週日營運且含 Clocktower Museum。Riverside Loop 雖然每天都有，但是早上 9 點出發。", type: "cross" },
      { q: "What is suggested about Ms. Marsh's group?", o: ["They paid separately for museum admission.", "They rode for about two hours.", "They qualified for a reduced total price.", "All of them used electric bicycles."], a: 2, e: "評論說共八人，廣告寫六人以上團體總價打九折，因此他們符合團體折扣。博物館門票已含在行程內；只有三人租電動車，不是全部。", type: "cross" },
      { q: "Why did Ms. Marsh's group most likely not receive water bottles?", o: ["The supply had run out that afternoon.", "They did not book online far enough in advance.", "They chose a tour that does not include gifts.", "They arrived after the tour had started."], a: 1, e: "評論說他們前一天以電話預約；廣告規定要在網路上且提前 48 小時預約才送水壺，兩個條件都不符合。文中沒有提到水壺送完或遲到。", type: "cross" }
    ]
  },

  // ===== Questions 186–190：schedule + e-mail + memo =====
  {
    passages: [
      {
        kind: "schedule",
        title: "Kestrel Analytics — Spring Professional Development Workshops",
        table: {
          headers: ["Workshop", "Date", "Time", "Room", "Instructor"],
          rows: [
            ["Advanced Spreadsheet Modeling", "April 8", "9:00 A.M. – 12:00 P.M.", "3B", "Priya Natarajan"],
            ["Presenting Data to Clients", "April 10", "1:00 P.M. – 4:00 P.M.", "5A", "Marcus Oyelaran"],
            ["Project Budgeting Basics", "April 15", "9:00 A.M. – 11:00 A.M.", "3B", "Elena Vukovic"],
            ["Negotiation Skills", "April 17", "2:00 P.M. – 5:00 P.M.", "5A", "Marcus Oyelaran"]
          ]
        },
        body: "Register through the HR portal by April 3. Each employee may attend a maximum of two workshops this season. Workshops with fewer than six registrants may be canceled."
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Jae-won Seo"], ["To", "Farida Qureshi"], ["Date", "April 2"], ["Subject", "Workshop question"]],
        body: "Dear Ms. Qureshi,\n\nI have registered for Presenting Data to Clients, and I would also like to attend the workshop led by Ms. Vukovic. However, I have a client meeting in Brentford on the morning of that day, and the earliest I could reach our office is about 10:15 A.M. Would it be acceptable for me to join late, or should I choose another session instead?\n\nAlso, my manager, Mr. Delgado, suggested that I ask whether the handouts from Ms. Natarajan's workshop could be shared with me. I am interested in the topic, but I understand that I cannot sign up for a third session.\n\nThank you,\nJae-won Seo"
      },
      {
        kind: "memo",
        title: "Memo",
        meta: [["To", "All workshop registrants"], ["From", "Farida Qureshi, Human Resources"], ["Date", "April 7"], ["Subject", "Workshop updates"]],
        body: "Please note the following changes to the spring workshop program.\n\nBecause of renovation work on the third floor, all workshops originally scheduled for Room 3B will now take place in the Lakeview Conference Room on the first floor.\n\nNegotiation Skills has been canceled due to low enrollment. Those who registered will be contacted about a session in May.\n\nFinally, several instructors begin with a group exercise that sets up the rest of the session. For this reason, participants who arrive more than 30 minutes after a workshop begins will not be admitted. Handouts from every workshop will be posted on the HR portal the following day for all employees."
      }
    ],
    qs: [
      { q: "What is indicated in the schedule?", o: ["Some workshops might not be held.", "All workshops take place in the morning.", "Employees may register on the day of a workshop.", "Each instructor leads two workshops."], a: 0, e: "表格下方註記：報名不足六人的課程可能取消。報名截止日是 4 月 3 日，不能當天報名；只有 Mr. Oyelaran 教兩堂。", type: "detail" },
      { q: "On what date is Mr. Seo's meeting in Brentford?", o: ["April 8", "April 10", "April 17", "April 15"], a: 3, e: "信中說客戶會議在「Ms. Vukovic 那堂課的同一天」早上；對照時間表，Ms. Vukovic 教的 Project Budgeting Basics 在 4 月 15 日。", type: "cross" },
      { q: "What is suggested about Mr. Seo?", o: ["He is one of the workshop instructors.", "He would like information from a session he will not attend.", "He recently transferred to the Human Resources department.", "He plans to travel to Brentford again in May."], a: 1, e: "他請 HR 分享 Ms. Natarajan 課程的講義，因為每人最多只能上兩堂、無法報名第三堂。文中沒有說他是講師或調到 HR。", type: "infer" },
      { q: "Where will the second workshop Mr. Seo wants to attend be held?", o: ["In Room 3B", "In Room 5A", "In the Lakeview Conference Room", "At a client's office in Brentford"], a: 2, e: "Project Budgeting Basics 原訂在 3B；備忘錄說 3B 的課程因三樓整修全部改到一樓 Lakeview Conference Room。只看時間表會誤選 Room 3B。", type: "cross" },
      { q: "What will most likely happen if Mr. Seo arrives at the time he mentions in his e-mail?", o: ["He will not be permitted to join the workshop.", "He will be automatically moved to a May session.", "He will be asked to lead the opening exercise.", "He will have to register through the HR portal again."], a: 0, e: "課程 9:00 開始，他最早 10:15 才到，晚了超過 30 分鐘；備忘錄規定遲到超過 30 分鐘不得入場。改到五月的是被取消的 Negotiation Skills，與他無關。", type: "cross" }
    ]
  },

  // ===== Questions 191–195：webpage + form + e-mail =====
  {
    passages: [
      {
        kind: "webpage",
        title: "Greenhollow Community Center — Room Rentals",
        body: "Greenhollow Community Center offers flexible spaces for meetings, celebrations, and classes.\n\nMaple Room — Seats up to 20. $25 per hour. Ideal for workshops and small meetings.\n\nCedar Hall — Seats up to 80. $60 per hour. Includes use of the adjoining kitchen with ovens and a refrigerator.\n\nRooftop Terrace — Seats up to 40. $45 per hour. Available from May through September only.\n\nRegistered nonprofit organizations receive 20 percent off the hourly rate upon submission of proof of registration. Bookings of four hours or longer require a refundable $100 security deposit. A projector and screen may be added to any booking for $15.\n\nTo request a room, complete the online rental form. Our coordinator will reply within two business days."
      },
      {
        kind: "form",
        title: "Room Rental Request Form",
        table: {
          headers: ["Field", "Details"],
          rows: [
            ["Name", "Olusegun Adebayo"],
            ["Organization", "Westfield Youth Soccer League (registered nonprofit)"],
            ["Date requested", "Saturday, October 18"],
            ["Time", "2:00 P.M. – 7:00 P.M."],
            ["Expected attendance", "55 people"],
            ["Preferred room", "Rooftop Terrace"],
            ["Equipment", "Projector and screen"]
          ]
        },
        body: "Comments: This is our end-of-season awards dinner for players and their families. Parent volunteers will bring prepared dishes, so we will need somewhere to warm them up before serving."
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Ingrid Solberg <isolberg@greenhollowcc.org>"], ["To", "Olusegun Adebayo"], ["Date", "September 22"], ["Subject", "Your rental request"]],
        body: "Dear Mr. Adebayo,\n\nThank you for choosing Greenhollow Community Center for your league's awards dinner. Unfortunately, the space you selected is not open at that time of year, and in any case it would be too small for your group. I have therefore tentatively reserved the space that best suits your event, including its facilities for heating food, for the date and time you requested.\n\nTo finalize the booking and apply the rate your organization is entitled to, please e-mail me a copy of your registration certificate by October 1. You will also be asked to complete the payment steps outlined on our Web site when you confirm.\n\nOne more piece of good news: we are testing a new built-in projection system this autumn, so there will be no charge for the projector and screen.\n\nKind regards,\nIngrid Solberg\nRentals Coordinator"
      }
    ],
    qs: [
      { q: "What is stated on the webpage?", o: ["All rooms can be rented throughout the year.", "A deposit is required for longer bookings.", "Every room includes access to a kitchen.", "Requests are answered on the same day."], a: 1, e: "網頁寫四小時以上的預約需付 $100 可退還押金。Rooftop Terrace 只在 5 到 9 月開放；只有 Cedar Hall 附廚房；回覆時間是兩個工作天內。", type: "detail" },
      { q: "Which space has Ms. Solberg most likely reserved for Mr. Adebayo?", o: ["The Maple Room", "The Rooftop Terrace", "A room at a nearby school", "Cedar Hall"], a: 3, e: "表單顯示 55 人且需加熱食物；網頁上只有 Cedar Hall 可容納 80 人並附廚房。信中說原本選的空間十月不開放又太小，指的正是 Rooftop Terrace。", type: "cross" },
      { q: "In the e-mail, the word \"tentatively\" in paragraph 1 is closest in meaning to", o: ["provisionally", "nervously", "permanently", "quietly"], a: 0, e: "tentatively reserved 表示「暫時／先行」保留，還要等對方寄證明才確定（To finalize the booking）。tentatively 也有「猶豫地」的意思，nervously 是字義陷阱。", type: "vocab" },
      { q: "Why is Mr. Adebayo asked to send a document?", o: ["To confirm the number of guests", "To reserve a projector", "To receive a discounted rate", "To obtain permission to serve food"], a: 2, e: "信中請他寄註冊證明以套用 the rate your organization is entitled to；對照網頁，立案非營利組織附證明可享 8 折時薪。", type: "cross" },
      { q: "What is most likely true about Mr. Adebayo's booking?", o: ["It will take place in the morning.", "It will include a fee for audiovisual equipment.", "It has been moved to a different date.", "It will require a refundable payment."], a: 3, e: "表單時間為下午 2 點到 7 點，共五小時；網頁規定四小時以上需付可退還的押金。投影機費用信中已說免收，日期與時間也維持原申請。", type: "cross" }
    ]
  },

  // ===== Questions 196–200：article + letter + notice =====
  {
    passages: [
      {
        kind: "article",
        title: "Elm Street Library to Reopen After Expansion",
        meta: [["Source", "Dunmore Gazette"], ["Date", "March 12"]],
        body: "DUNMORE — The Elm Street branch of the Harrowgate Public Library will reopen on April 5 following a fourteen-month renovation. The expanded building features a larger children's wing, a quiet study floor, and a digital media lab equipped with video-editing stations, recording booths, and two 3D printers. Weekday hours will also be extended until 9:00 P.M.\n\nThe project was funded by the city and by a generous gift from Castellan Engineering, a Dunmore firm whose founder, Beatrix Castellan, grew up a few streets from the library.\n\n\"Many residents told us they missed the old reading room,\" said head librarian Owen Petrakis. \"We kept it, and its original stained-glass windows have been carefully restored.\"\n\nThe media lab will host a series of free workshops beginning in April. Participation will be limited to library cardholders, and advance sign-up will be required."
      },
      {
        kind: "letter",
        title: "Letter",
        body: "March 20\n\nMs. Beatrix Castellan\nCastellan Engineering\n42 Wharf Road\nDunmore\n\nDear Ms. Castellan,\n\nOn behalf of the entire staff of the Harrowgate Public Library, I would like to thank you once again for your support of the Elm Street renovation. It gives me great pleasure to invite you to our ribbon-cutting ceremony at 10:00 A.M. on the morning the branch reopens. We would be honored if you would say a few words to the guests.\n\nI am also delighted to share that our board has voted to name the new media lab in memory of your father, Arthur Castellan, who was a devoted patron of this branch for more than forty years.\n\nPlease let my assistant, Lucia Brandt, know by March 28 whether you will be able to attend.\n\nWith warm regards,\n\nOwen Petrakis\nHead Librarian"
      },
      {
        kind: "notice",
        title: "April Workshops in the Arthur Castellan Media Lab",
        body: "Intro to Video Editing — Saturdays, April 12 and 19, 2:00 P.M. – 4:00 P.M.\nPodcasting Basics — Tuesday, April 15, 6:00 P.M. – 8:00 P.M.\nGetting Started with 3D Printing — Thursday, April 17, 6:30 P.M. – 8:00 P.M.\n\nSpaces are limited to twelve participants per workshop. Sign up in person at the front desk. You will be asked to show a valid library card. Don't have one? Applications are accepted at the circulation desk, and most cards are issued within ten minutes."
      }
    ],
    qs: [
      { q: "What is the article mainly about?", o: ["The retirement of a head librarian", "A fundraising campaign for a new school", "The reopening of an improved facility", "The history of a local engineering firm"], a: 2, e: "全篇報導 Elm Street 分館整修 14 個月後將重新開放及其新設施。Castellan Engineering 只是捐款者，不是主旨。", type: "main" },
      { q: "According to the article, what has been restored?", o: ["Decorative windows", "A children's wing", "A set of 3D printers", "The library's front entrance"], a: 0, e: "Mr. Petrakis 說舊閱覽室的 original stained-glass windows 已修復，也就是彩繪玻璃窗。兒童區是「擴建」，3D 印表機是新設備，並非修復。", type: "detail" },
      { q: "Why did Mr. Petrakis write to Ms. Castellan?", o: ["To request an additional donation", "To invite her to participate in an event", "To offer her a position on the library board", "To ask her to lead a media lab workshop"], a: 1, e: "信中邀請她出席剪綵典禮並致詞。信裡提到 board 是投票決定命名，並非邀請她擔任董事；也沒有再募款。", type: "main" },
      { q: "What is suggested about the room where the April workshops will be held?", o: ["It was formerly the children's reading room.", "It closes at 6:00 P.M. on weekdays.", "It was designed by Castellan Engineering.", "It is named after a donor's relative."], a: 3, e: "公告標題為 Arthur Castellan Media Lab；信中說媒體室以 Ms. Castellan 已故父親 Arthur 命名，而她的公司是捐款者。報導也指出平日開到晚上 9 點。", type: "cross" },
      { q: "What is true about the Podcasting Basics workshop?", o: ["It will be held in the evening at no cost to participants.", "It will be taught by Mr. Petrakis.", "It will take place on two consecutive Saturdays.", "It is open to anyone without prior registration."], a: 0, e: "公告顯示是週二晚上 6 到 8 點；報導說媒體室工作坊免費（free workshops），整合兩篇才能確定。連續兩個週六的是影片剪輯課，且所有課程都要事先報名。", type: "cross" }
    ]
  }
]);
