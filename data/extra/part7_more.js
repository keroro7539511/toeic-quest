// Part 7 閱讀測驗（追加練習）
// 單篇 7 組、雙篇 3 組、三篇 2 組。新增題組請加在最後面。
window.PART7.push(...[
  // ===== 追加單篇 1：簡訊（intent）=====
  {
    passages: [
      {
        kind: "text",
        title: "Text-message chain",
        messages: [
          ["Marisol Vega", "7:48 A.M.", "Dev, my flight from Chicago was delayed. I won't land in Austin until 11:30 instead of 9:00."],
          ["Dev Patel", "7:50 A.M.", "Oh no. The exhibit hall opens to vendors at 10:00, and the van with our booth panels is reserved under your name."],
          ["Marisol Vega", "7:51 A.M.", "Right. Can you pick it up instead? I'll call Rapid Rentals and add you as a driver."],
          ["Dev Patel", "7:53 A.M.", "Sure, but they'll need to see my license, and I left my wallet at the hotel."],
          ["Marisol Vega", "7:54 A.M.", "The hotel is on your way, isn't it?"],
          ["Dev Patel", "7:55 A.M.", "Fair enough. I'll grab it and head over."],
          ["Marisol Vega", "8:10 A.M.", "All set. They said to ask for Gina at the front counter."]
        ]
      }
    ],
    qs: [
      { q: "At 7:54 A.M., what does Ms. Vega most likely mean when she writes, \"The hotel is on your way, isn't it?\"", o: ["She wants Mr. Patel to stay at the hotel.", "She thinks Mr. Patel can easily get his license.", "She is not sure where the hotel is located.", "She would like to move to a different hotel."], a: 1, e: "Mr. Patel 說駕照放在飯店，她反問「飯店不就在你順路上嗎？」，意思是順道回去拿就好，不是問題。他接著回答 Fair enough，表示同意。", type: "intent" },
      { q: "Why is Ms. Vega unable to pick up the van?", o: ["Her driver's license has expired.", "The rental office is closed until noon.", "Her flight will arrive later than planned.", "She must set up the booth by herself."], a: 2, e: "她一開始就說班機延誤，11:30 才會抵達，趕不上 10:00 開館前取車。", type: "detail" },
      { q: "What will Mr. Patel most likely do at the rental office?", o: ["Speak with a specific employee", "Return a van with booth panels", "Pay a fee for a late pickup", "Cancel Ms. Vega's reservation"], a: 0, e: "最後 Ms. Vega 說租車公司要他到櫃台找 Gina，所以他會找特定的員工。他是去取車，不是「還車」。", type: "infer" }
    ]
  },

  // ===== 追加單篇 2：線上聊天（多人，intent / NOT）=====
  {
    passages: [
      {
        kind: "chat",
        title: "Online chat discussion",
        messages: [
          ["Helen Okafor", "2:02 P.M.", "Quick reminder: the old shared drive becomes read-only this Friday at 6:00 P.M. Everything should be moved to Cloudvault by then."],
          ["Tomas Lindqvist", "2:04 P.M.", "Our team has moved about half of the client folders. The design archive is huge, though."],
          ["Helen Okafor", "2:05 P.M.", "How huge?"],
          ["Tomas Lindqvist", "2:06 P.M.", "Roughly 900 gigabytes. Uploading it over the office network could take days."],
          ["Rina Sato", "2:08 P.M.", "Our department keeps a few external drives for exactly this situation. We can copy the archive and upload it directly from our server room overnight."],
          ["Helen Okafor", "2:09 P.M.", "Perfect. Tomas, can you coordinate with Rina?"],
          ["Tomas Lindqvist", "2:10 P.M.", "Will do. Rina, does tomorrow morning work for you?"],
          ["Rina Sato", "2:11 P.M.", "I'm in training until noon. Let's say 1:30."],
          ["Ben Adair", "2:13 P.M.", "Sorry to jump in, but will we still be able to open files on the old drive after Friday?"],
          ["Helen Okafor", "2:14 P.M.", "You'll be able to view them, just not edit them."]
        ]
      }
    ],
    qs: [
      { q: "At 2:11 P.M., what does Ms. Sato most likely mean when she writes, \"Let's say 1:30\"?", o: ["She is suggesting a time to meet Mr. Lindqvist.", "Her training session will end at 1:30.", "She expects the upload to take an hour and a half.", "She wants to postpone the Friday deadline."], a: 0, e: "Mr. Lindqvist 問明天早上可不可以，她說中午前要受訓，所以改提議下午 1:30 碰面。受訓是到中午結束，不是 1:30。", type: "intent" },
      { q: "What is NOT mentioned about the old shared drive?", o: ["It will become read-only on Friday.", "Its files can still be viewed after the deadline.", "It contains a large design archive.", "It will be removed from the server room."], a: 3, e: "唯讀、之後仍可檢視、內有大型設計檔案都有提到；server room 只是用來上傳的地點，沒說舊硬碟會被移除。", type: "not" },
      { q: "What is suggested about Ms. Sato?", o: ["She designed the Cloudvault system.", "She will lead a training session tomorrow.", "She works in the IT department.", "She manages the client folders."], a: 2, e: "她說「我們部門」備有外接硬碟、可以從「我們的機房」直接上傳，暗示她是資訊部門的人。她明天是去「受訓」，不是帶訓練。", type: "infer" }
    ]
  },

  // ===== 追加單篇 3：公告（句子插入）=====
  {
    passages: [
      {
        kind: "notice",
        title: "Notice to Ashford Public Library Patrons",
        body: "Beginning on Monday, May 4, the second floor of the Ashford Public Library will be closed for approximately six weeks while new lighting and study rooms are installed. [1] During this period, the nonfiction collection will be temporarily moved to the community room on the first floor.\n\nPatrons who have reserved a study room for dates in May or early June will be contacted by staff to reschedule. [2] Reservations may also be transferred to our Westbrook branch, which is just ten minutes away by bus.\n\nPlease note that the main entrance on Grove Street will remain open throughout the project. [3] However, the elevator will be out of service from May 4 to May 15, so patrons who need help reaching the lower level should speak with a staff member at the front desk. [4]\n\nWe apologize for any inconvenience and look forward to welcoming you to the renovated space this summer."
      }
    ],
    qs: [
      { q: "What is the purpose of the notice?", o: ["To introduce a new branch library", "To request donations for a renovation", "To explain changes to the library's opening hours", "To announce that part of a building will be temporarily closed"], a: 3, e: "公告開頭說二樓因為整修將關閉約六週，之後都在說明期間的安排。Westbrook 分館是既有分館，不是新開的。", type: "main" },
      { q: "According to the notice, what will happen to the nonfiction collection?", o: ["It will be sent to the Westbrook branch.", "It will be relocated to a room on the first floor.", "It will be unavailable for six weeks.", "It will be placed in the new study rooms."], a: 1, e: "文中說非小說類館藏會暫時移到一樓的 community room。被轉到 Westbrook 的是「自習室預約」，不是館藏。", type: "detail" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Staff will begin making these calls next week.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 1, e: "these calls 指的是前一句「館員會聯絡已預約自習室的讀者改期」，所以放在 [2]。", type: "insert" }
    ]
  },

  // ===== 追加單篇 4：廣告（vocab）=====
  {
    passages: [
      {
        kind: "ad",
        title: "Greenleaf Office Plant Care",
        body: "Bring the outdoors into your workplace with Greenleaf Office Plant Care. For over twelve years, we have helped businesses across the Halston area create healthier, more attractive work environments.\n\nOur certified plant specialists will visit your office to recommend plants that suit your lighting, space, and budget. Once your plants are installed, our team will return every two weeks to water, trim, and inspect them. If any plant fails to thrive, we will replace it at no additional cost.\n\nNew clients who sign a twelve-month service agreement before September 30 will receive their first month of maintenance free. To schedule a complimentary consultation, call 555-0192 or visit www.greenleafcare.com."
      }
    ],
    qs: [
      { q: "What is offered only to new clients who sign a one-year agreement?", o: ["A discount on replacement plants", "A free consultation with a specialist", "One month of free maintenance", "Weekly visits from a plant expert"], a: 2, e: "九月底前簽一年合約的新客戶，第一個月的維護免費。免費諮詢是所有人都能預約的，不限簽約客戶；到府維護是每兩週一次，不是每週。", type: "detail" },
      { q: "In the advertisement, the word \"suit\" in paragraph 2 is closest in meaning to", o: ["dress", "fit", "request", "follow"], a: 1, e: "plants that suit your lighting, space, and budget 是「適合你的採光、空間和預算的植物」，suit 作動詞「適合」= fit。dress 是名詞 suit「西裝」的聯想陷阱。", type: "vocab" }
    ]
  },

  // ===== 追加單篇 5：維修發票（表格 / NOT）=====
  {
    passages: [
      {
        kind: "invoice",
        title: "Quickfix Appliance Service — Invoice #2291",
        table: {
          headers: ["Description", "Amount"],
          rows: [
            ["Service call fee", "$85.00"],
            ["Replacement fan motor (refrigerator)", "$142.00"],
            ["Labor: 2.5 hours at $60.00 per hour", "$150.00"],
            ["Returning-customer discount (10% of labor)", "-$15.00"],
            ["Total due", "$362.00"]
          ]
        },
        body: "Customer: Ostara Bistro, 41 Mill Road\nTechnician: Raj Mehta\nDate of service: March 12\n\nTechnician's note: The refrigerator's door seal is worn and should be replaced within the next three months. A replacement seal has been ordered and can be installed during a follow-up visit, for which the service call fee will be waived.\n\nPayment is due within 30 days of the service date."
      }
    ],
    qs: [
      { q: "How much was charged for labor before the discount was applied?", o: ["$85.00", "$142.00", "$150.00", "$362.00"], a: 2, e: "工資是 2.5 小時 × 每小時 $60，共 $150，之後才扣 $15 的折扣。$362 是總額。", type: "detail" },
      { q: "What is suggested about Ostara Bistro?", o: ["It has used Quickfix's services before.", "It plans to buy a new refrigerator.", "It paid the invoice on March 12.", "It will close for three months."], a: 0, e: "發票上有「回頭客折扣」，可推知這家餐廳以前就用過 Quickfix 的服務。three months 是門封條該更換的期限，不是歇業。", type: "infer" },
      { q: "What is NOT indicated on the invoice?", o: ["A part was replaced.", "Another visit may be needed.", "The name of the technician", "The time the technician arrived"], a: 3, e: "有換風扇馬達、可能要再來裝門封條、技師名字 Raj Mehta 都有寫；只有服務日期，沒有寫到達的時間。", type: "not" }
    ]
  },

  // ===== 追加單篇 6：報導（vocab / 句子插入）=====
  {
    passages: [
      {
        kind: "article",
        title: "Pemberton Bakeries to Deliver Bread to Customers' Doors",
        body: "MARLOW (June 3) — Pemberton Bakeries, which operates eleven shops across the county, will launch a bread subscription service next month. [1] For a monthly fee starting at $28, customers will receive two fresh loaves each week, delivered to their homes by 7:00 A.M.\n\nThe idea came from customer surveys conducted last autumn. \"Many of our regular customers told us they couldn't reach our shops before the morning rush,\" said owner Agnes Pemberton. [2] \"By the time they arrived, their favorite loaves were often sold out.\"\n\nThe service will initially be available only to residents within eight kilometers of the company's central bakery on Fennick Road. [3] Ms. Pemberton said the company hopes to extend the service to the rest of the county by next spring, depending on demand.\n\nTo prepare for the launch, Pemberton has purchased three electric delivery vans and hired six additional bakers. [4] Customers can sign up beginning June 15 on the company's Web site."
      }
    ],
    qs: [
      { q: "What is the article mainly about?", o: ["The opening of a central bakery", "The results of a county-wide survey", "A new service offered by a bakery", "A shortage of delivery drivers"], a: 2, e: "整篇在介紹 Pemberton Bakeries 下個月推出的麵包訂閱宅配服務。問卷只是這個點子的來源，不是主旨。", type: "main" },
      { q: "According to Ms. Pemberton, why was the service created?", o: ["Customers had trouble getting to the shops early enough.", "The company wanted to use its new delivery vans.", "Sales at several shops had been falling.", "Customers asked for a wider variety of bread."], a: 0, e: "老闆說常客反映無法在早上人潮前到店，等到了喜歡的麵包已賣完。買電動貨車是為了這項服務做準備，不是原因。", type: "detail" },
      { q: "In the article, the word \"initially\" in paragraph 3 is closest in meaning to", o: ["at first", "mostly", "officially", "quickly"], a: 0, e: "initially「最初、起初」= at first；後面說希望明年春天擴大到全郡，也呼應「一開始只限八公里內」。", type: "vocab" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The new staff will work a night shift that begins at 2:00 A.M. so that deliveries can go out on time.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 3, e: "The new staff 指前一句「新聘的六位烘焙師」，所以放在 [4]。", type: "insert" }
    ]
  },

  // ===== 追加單篇 7：顧客評論（NOT）=====
  {
    passages: [
      {
        kind: "review",
        title: "Customer Reviews — SwiftNest Movers",
        body: "Rating: 4 out of 5\nReviewed by Paolo Russo on August 22\n\nI hired SwiftNest Movers to relocate my small accounting office from the Bayview Center to a larger space downtown. Their sales representative, Ms. Huang, visited beforehand to estimate the job and gave me a written quote, which turned out to be exactly what I paid.\n\nThe crew of four arrived on time and wrapped every computer and monitor carefully. Nothing was damaged, and they even reassembled our desks at the new location. My only complaint is that the truck was too small for all of our filing cabinets, so the crew had to make a second trip. This added nearly two hours to the move, although, to their credit, SwiftNest did not charge us for the extra time.\n\nI would use them again, but I would recommend asking for a larger truck if you have heavy furniture."
      }
    ],
    qs: [
      { q: "What problem does Mr. Russo mention?", o: ["The vehicle could not carry everything at once.", "Some of his computers were damaged.", "The crew arrived later than scheduled.", "He was charged for extra hours."], a: 0, e: "他唯一的抱怨是卡車太小，裝不下所有檔案櫃，只好跑第二趟。電腦沒損壞、準時到、也沒多收錢，其他選項都和內文相反。", type: "detail" },
      { q: "What is suggested about Ms. Huang's estimate?", o: ["It was higher than other companies' quotes.", "It was accurate.", "It did not include desk assembly.", "It was given over the phone."], a: 1, e: "他說書面報價「結果剛好就是我付的金額」，表示估價準確。她是事先到現場估價，所以不是電話報價。", type: "infer" },
      { q: "What is NOT stated about the moving crew?", o: ["They arrived at the scheduled time.", "They put furniture back together.", "They protected electronic equipment.", "They worked on a weekend."], a: 3, e: "準時抵達、重新組裝桌子、仔細包好電腦螢幕都有提到；文中沒說搬家是哪一天，也沒提週末。", type: "not" }
    ]
  },

  // ===== 追加雙篇 1：webpage（表格）+ e-mail =====
  {
    passages: [
      {
        kind: "webpage",
        title: "Harborview Conference Center — Meeting Spaces",
        table: {
          headers: ["Room", "Capacity", "Half Day", "Full Day"],
          rows: [
            ["Juniper Room", "12", "$180", "$320"],
            ["Cedar Room", "30", "$350", "$600"],
            ["Rooftop Terrace*", "50", "$500", "$900"],
            ["Maple Hall", "80", "$700", "$1,200"]
          ]
        },
        body: "*The Rooftop Terrace is available from May through September only.\n\nAll rentals include Wi-Fi and a projector. Lunch and refreshments can be ordered from our on-site kitchen for an additional fee. Organizations that hold three or more full-day events with us in one calendar year receive 15 percent off all room charges."
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Lucia Ferreira <lferreira@brookstonepharma.com>"], ["To", "events@harborviewcc.com"], ["Date", "October 2"], ["Subject", "Booking request for November 14"]],
        body: "Hello,\n\nI am organizing a full-day training session for 25 sales representatives on Thursday, November 14, and I would like to reserve the smallest room that can hold our group. I had hoped to use your Rooftop Terrace, as our team enjoyed it so much in July, but I see that will not be possible this time.\n\nThis will be the third full-day event Brookstone Pharmaceuticals has held at Harborview this year, so I assume the usual discount will apply. Could you also send me your current lunch menu? Several participants are vegetarian, and I want to make sure there are enough options for them.\n\nBest regards,\nLucia Ferreira"
      }
    ],
    qs: [
      { q: "Why did Ms. Ferreira write the e-mail?", o: ["To complain about a previous event", "To ask about vegetarian cooking classes", "To change the date of a training session", "To make arrangements to use a meeting space"], a: 3, e: "她寫信是要預約 11 月 14 日訓練用的場地，並詢問折扣與午餐菜單。", type: "main" },
      { q: "Which room will Ms. Ferreira most likely reserve?", o: ["The Juniper Room", "The Rooftop Terrace", "The Cedar Room", "Maple Hall"], a: 2, e: "她有 25 人、要能容納的最小房間；Juniper 只能坐 12 人，Rooftop Terrace 只開放到九月，所以是可容納 30 人的 Cedar Room。", type: "cross" },
      { q: "How much will Ms. Ferreira most likely pay for the room?", o: ["$350", "$510", "$600", "$765"], a: 1, e: "Cedar Room 全天 $600，這是她今年第三場全天活動，可享 85 折，$600 × 0.85 = $510。直接選 $600 就漏了折扣。", type: "cross" },
      { q: "What does Ms. Ferreira request?", o: ["Information about meal choices", "A larger projector screen", "A tour of the conference center", "A refund for an earlier booking"], a: 0, e: "她請對方寄午餐菜單，因為有幾位參加者吃素。", type: "detail" },
      { q: "According to the Web page, what comes with every room rental?", o: ["Free lunch for participants", "Internet access", "A discount on future events", "Use of the rooftop"], a: 1, e: "網頁寫所有租借都包含 Wi-Fi 和投影機。午餐要另外付費，折扣也要辦滿三場全天活動才有。", type: "detail" }
    ]
  },

  // ===== 追加雙篇 2：schedule + e-mail =====
  {
    passages: [
      {
        kind: "schedule",
        title: "Orrin Manufacturing — Safety Training, Week of March 9",
        table: {
          headers: ["Session", "Date", "Time", "Location", "Trainer"],
          rows: [
            ["Forklift Operation", "Monday, March 9", "8:00–11:00 A.M.", "Warehouse B", "Kyle Benson"],
            ["First Aid Basics", "Tuesday, March 10", "1:00–4:00 P.M.", "Training Room 2", "Amara Osei"],
            ["Fire Safety", "Wednesday, March 11", "9:00–10:30 A.M.", "Training Room 1", "Kyle Benson"],
            ["Chemical Handling", "Thursday, March 12", "2:00–5:00 P.M.", "Lab Annex", "Wen Li"]
          ]
        },
        body: "All production staff must complete Fire Safety and Chemical Handling by March 31. Each session is limited to 15 participants. Please register through your supervisor. Make-up sessions will be offered later in the month."
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Gloria Navarro"], ["To", "Kyle Benson"], ["Date", "March 4"], ["Subject", "Next week's sessions"]],
        body: "Hi Kyle,\n\nI signed up for your Wednesday session, but I just learned that I'll be meeting an inspector from the county that morning at 9:30. Since the session is required for everyone in my department, could you let me know when the make-up session will be held?\n\nAlso, one of my new hires, Ivan Petrov, will start driving the warehouse lifts next month. I noticed that you're teaching the course for that equipment next week. Is there still room for him?\n\nThanks,\nGloria"
      }
    ],
    qs: [
      { q: "Why did Ms. Navarro write to Mr. Benson?", o: ["To cancel a county inspection", "To ask about attending training at a different time", "To request a larger training room", "To recommend Mr. Petrov for a promotion"], a: 1, e: "她週三有事無法參加原本報名的課程，所以詢問補課時間，並順便幫新人詢問名額。", type: "main" },
      { q: "Which session will Ms. Navarro most likely miss?", o: ["Forklift Operation", "First Aid Basics", "Chemical Handling", "Fire Safety"], a: 3, e: "她報名了 Mr. Benson 週三的課，對照課表週三 9:00–10:30 是 Fire Safety，而她 9:30 要見檢查員。", type: "cross" },
      { q: "When does Ms. Navarro want Mr. Petrov to receive training?", o: ["On March 9", "On March 10", "On March 11", "On March 12"], a: 0, e: "他下個月要開倉庫的 lift（堆高機），對照課表，Mr. Benson 教的 Forklift Operation 在 3 月 9 日。", type: "cross" },
      { q: "What is indicated about the training sessions?", o: ["They are all held in the same room.", "They are taught by outside instructors.", "Each has a limited number of spaces.", "Employees must register online."], a: 2, e: "課表下方註明每堂課上限 15 人。報名是透過主管，不是線上。", type: "detail" },
      { q: "What does Ms. Navarro say she will do on March 11?", o: ["Lead a fire safety class", "Meet with a county official", "Interview a new employee", "Visit the Lab Annex"], a: 1, e: "她說週三（3 月 11 日）早上 9:30 要和郡政府的檢查員見面。", type: "detail" }
    ]
  },

  // ===== 追加雙篇 3：invoice + e-mail =====
  {
    passages: [
      {
        kind: "invoice",
        title: "Inkwell Print Studio — Invoice #7720",
        table: {
          headers: ["Item", "Qty", "Unit Price", "Amount"],
          rows: [
            ["Business cards (box of 250)", "6", "$22.00", "$132.00"],
            ["Tri-fold brochures", "500", "$0.90", "$450.00"],
            ["Vinyl banner, 2 meters", "1", "$85.00", "$85.00"],
            ["Rush service fee", "1", "$60.00", "$60.00"],
            ["Total", "", "", "$727.00"]
          ]
        },
        body: "Client: Tallis Architecture\nOrder date: April 3 / Delivered: April 5\n\nRush service guarantees delivery within two business days. Questions about this invoice must be sent to billing@inkwellprint.com within 14 days of the invoice date."
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Simone Achebe <sachebe@tallisarch.com>"], ["To", "billing@inkwellprint.com"], ["Date", "April 8"], ["Subject", "Invoice #7720"]],
        body: "Hello,\n\nI am writing about invoice #7720. First, we ordered business cards for our two new architects, two boxes each. However, we were charged for more boxes than that.\n\nSecond, we never asked for rush service. When I placed the order, I told your representative that the banner was for a client event on April 20, so there was no need to hurry. I would therefore ask that the related fee be removed.\n\nThe brochures, by the way, look wonderful, and our partners were very impressed. Please send a corrected invoice at your earliest convenience.\n\nRegards,\nSimone Achebe\nOffice Manager, Tallis Architecture"
      }
    ],
    qs: [
      { q: "What is the purpose of the e-mail?", o: ["To place an additional order", "To praise a sales representative", "To point out errors in a bill", "To change a delivery address"], a: 2, e: "她指出名片數量算錯、也沒有要求急件服務，請對方寄更正後的發票。雖然有稱讚 brochures，但不是主要目的。", type: "main" },
      { q: "According to Ms. Achebe, how much should the business cards cost?", o: ["$22.00", "$44.00", "$88.00", "$132.00"], a: 2, e: "兩位新建築師各兩盒，共 4 盒；對照發票單價 $22，4 × $22 = $88。$132 是被多算的 6 盒。", type: "cross" },
      { q: "What does Ms. Achebe indicate about the item that cost $85.00?", o: ["It will be used later in the month.", "It was delivered to the wrong office.", "It was printed in the wrong size.", "It was ordered by a client."], a: 0, e: "發票上 $85 的是布條，她信中說布條是 4 月 20 日客戶活動要用的，所以不需急件。是「客戶的活動」用，不是客戶訂的。", type: "cross" },
      { q: "According to the invoice, what must customers do within 14 days?", o: ["Pay the full amount", "Pick up their order", "Return damaged items", "Send any questions about charges"], a: 3, e: "發票寫對帳單有疑問須在 14 天內寄到 billing 信箱。two business days 是急件的交貨保證。", type: "detail" },
      { q: "What is suggested about Tallis Architecture?", o: ["It is planning to move its office.", "It has recently hired new staff.", "It is unhappy with the brochures.", "It is a new client of Inkwell Print Studio."], a: 1, e: "名片是要給「兩位新建築師」的，可推知公司最近有新進人員。她對 brochures 是稱讚，不是不滿。", type: "infer" }
    ]
  },

  // ===== 追加三篇 1：notice + form + e-mail =====
  {
    passages: [
      {
        kind: "notice",
        title: "Velmont Hotels — Employee Language Program",
        body: "Velmont Hotels is pleased to offer free language classes to all employees beginning in September. Classes in Spanish, Japanese, and Mandarin will meet twice a week for ten weeks at the Corporate Training Center.\n\nEmployees who attend at least 90 percent of their classes will receive a $200 bonus upon completing the course. Because of the growing number of guests from Japan, front-desk staff will be given priority for places in the Japanese classes.\n\nEnrollment forms must be submitted to Human Resources by August 20."
      },
      {
        kind: "form",
        title: "Language Program Enrollment Form",
        table: {
          headers: ["Field", "Response"],
          rows: [
            ["Name", "Farah Haddad"],
            ["Department", "Front Desk"],
            ["Hotel", "Velmont Lakeside"],
            ["First choice", "Japanese, Mondays and Wednesdays, 6:00 P.M."],
            ["Second choice", "Spanish, Tuesdays and Thursdays, 7:00 P.M."],
            ["Current level", "Beginner"]
          ]
        },
        body: "Date submitted: August 22"
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Owen Fitzgerald, Human Resources"], ["To", "Farah Haddad"], ["Date", "August 25"], ["Subject", "Your enrollment"]],
        body: "Dear Ms. Haddad,\n\nThank you for your interest in the Employee Language Program. We are happy to confirm your place in your first-choice class.\n\nPlease note that the start time of this class has been pushed back by 30 minutes to accommodate employees whose shifts end at 6:00 P.M. Your textbook will be available for pickup at the Human Resources office from September 1.\n\nBest regards,\nOwen Fitzgerald"
      }
    ],
    qs: [
      { q: "What is the purpose of the notice?", o: ["To announce a learning opportunity for employees", "To recruit language teachers", "To welcome guests from Japan", "To explain a new bonus policy for front-desk staff"], a: 0, e: "公告在介紹公司九月起提供給員工的免費語言課程。獎金只是課程的附帶獎勵，不是公告主旨。", type: "main" },
      { q: "According to the notice, how can employees receive a bonus?", o: ["By recruiting other participants", "By passing a final examination", "By submitting their form early", "By attending nearly all of their classes"], a: 3, e: "出席率至少 90% 並完成課程就能拿到 $200 獎金。", type: "detail" },
      { q: "What is indicated about Ms. Haddad?", o: ["She has studied Japanese before.", "She submitted her form after the deadline.", "She works at the Corporate Training Center.", "She will teach a Spanish class."], a: 1, e: "公告規定 8 月 20 日前交表，表單上的提交日期是 8 月 22 日，所以她晚交了。表格寫她是初學者。", type: "cross" },
      { q: "At what time will Ms. Haddad's class begin?", o: ["6:00 P.M.", "7:00 P.M.", "6:30 P.M.", "7:30 P.M."], a: 2, e: "她的第一志願是 6:00 P.M. 的日文課，信中說開始時間延後 30 分鐘，所以是 6:30 P.M.。7:00 是第二志願的時間。", type: "cross" },
      { q: "Why most likely was Ms. Haddad given her first choice?", o: ["She works at the front desk.", "She is an advanced student.", "Her manager requested it.", "Her shift ends at 6:00 P.M."], a: 0, e: "公告說櫃台人員可優先報名日文課，而表單顯示她屬於 Front Desk、第一志願正是日文，所以她能排進第一志願。", type: "cross" }
    ]
  },

  // ===== 追加三篇 2：article + schedule + text =====
  {
    passages: [
      {
        kind: "article",
        title: "Express Bus to Link Downtown and Airport",
        body: "RIVERTON (April 10) — Starting May 1, Riverton Transit will operate a new express bus, Route X5, between Central Station and Riverton International Airport. Unlike the existing Route 12, which makes eighteen stops, the X5 will stop only at Central Station, the Convention Center, and the airport.\n\nThe one-way fare will be $6, compared with $2.50 for Route 12. However, riders who hold a monthly RivPass will be able to use the X5 for just $1 extra per trip. Buses will run every 30 minutes from 5:00 A.M. to 11:00 P.M."
      },
      {
        kind: "schedule",
        title: "Route X5 — Weekday Morning Departures",
        table: {
          headers: ["Central Station", "Convention Center", "Airport (arrival)"],
          rows: [
            ["6:00 A.M.", "6:12 A.M.", "6:40 A.M."],
            ["6:30 A.M.", "6:42 A.M.", "7:10 A.M."],
            ["7:00 A.M.", "7:12 A.M.", "7:40 A.M."],
            ["7:30 A.M.", "7:42 A.M.", "8:10 A.M."]
          ]
        },
        body: "Weekend service begins at 7:00 A.M. Travel times may be longer during heavy traffic."
      },
      {
        kind: "text",
        title: "Text-message chain",
        messages: [
          ["Jonah Reyes", "6:01 A.M.", "I'm at Central Station. I just missed the first X5 by a minute!"],
          ["Mei Lindgren", "6:02 A.M.", "Our flight boards at 7:30. Will the next one get you here in time?"],
          ["Jonah Reyes", "6:03 A.M.", "It should. I'll have about twenty minutes. Cutting it close, though."],
          ["Mei Lindgren", "6:04 A.M.", "I already checked in for both of us, so you can go straight to security."],
          ["Jonah Reyes", "6:05 A.M.", "You're a lifesaver. By the way, I tapped my card at the gate and it only charged me a dollar."],
          ["Mei Lindgren", "6:06 A.M.", "Told you it was worth getting."]
        ]
      }
    ],
    qs: [
      { q: "According to the article, how is Route X5 different from Route 12?", o: ["It runs only on weekdays.", "It is less expensive.", "It serves the Convention Center.", "It makes fewer stops."], a: 3, e: "Route 12 停 18 站，X5 只停三站。X5 票價比較貴；週末也有營運。", type: "detail" },
      { q: "What time will Mr. Reyes most likely arrive at the airport?", o: ["6:40 A.M.", "7:10 A.M.", "7:30 A.M.", "7:40 A.M."], a: 1, e: "他錯過 6:00 那班，下一班 6:30 從 Central Station 出發，對照時刻表 7:10 抵達機場，和他說「大約有二十分鐘」吻合。7:30 是登機時間。", type: "cross" },
      { q: "At 6:05 A.M., what does Mr. Reyes most likely mean when he writes, \"You're a lifesaver\"?", o: ["He was worried about his health.", "He wants Ms. Lindgren to wait for him.", "He appreciates that Ms. Lindgren saved him time.", "He thinks Ms. Lindgren should take an earlier bus."], a: 2, e: "Ms. Lindgren 已經幫兩人辦好報到，他可以直接過安檢，所以他用這句話表達感謝，意思是「妳幫了大忙」。", type: "intent" },
      { q: "What is suggested about Mr. Reyes?", o: ["He has a monthly transit pass.", "He works at the Convention Center.", "He usually drives to the airport.", "He paid the full one-way fare."], a: 0, e: "他說刷卡只扣了一美元，對照報導，持有月票 RivPass 搭 X5 只需多付 $1；Ms. Lindgren 也說「早告訴你值得辦」。", type: "cross" },
      { q: "According to the article, what is true about Route X5?", o: ["It began operating on April 10.", "It replaces Route 12.", "It departs every fifteen minutes.", "It operates until 11:00 P.M."], a: 3, e: "報導說 X5 從早上 5 點到晚上 11 點每 30 分鐘一班。April 10 是報導日期，5 月 1 日才開始營運；Route 12 仍繼續存在。", type: "detail" }
    ]
  }
]);
