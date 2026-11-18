// 模擬考 2 — Part 7 單篇閱讀（Questions 147–175，共 10 組 29 題）
// 雙篇 / 三篇閱讀在 part7_2_multi.js，於本檔之後載入並 concat。
window.MOCK2 = window.MOCK2 || {};
window.MOCK2.part7 = (window.MOCK2.part7 || []).concat([
  // Questions 147–148
  {
    passages: [
      {
        kind: "text",
        title: "Text-message chain",
        messages: [
          ["Priya Raman", "8:41 A.M.", "Owen, the shelving units for the new store on Kessler Avenue were delivered this morning."],
          ["Owen Hale", "8:43 A.M.", "Great. Did everything arrive in good condition?"],
          ["Priya Raman", "8:45 A.M.", "The shelves look fine, but the boxes of mounting brackets aren't here. The driver says they'll come on a separate truck tomorrow."],
          ["Owen Hale", "8:47 A.M.", "Hmm. We were planning to start setting up today, though."],
          ["Priya Raman", "8:48 A.M.", "I know. But the painters haven't finished the back wall yet anyway."],
          ["Owen Hale", "8:50 A.M.", "Then a one-day delay won't hurt. I'll tell the installation crew to come in on Thursday instead."],
        ],
      },
    ],
    qs: [
      { q: "What problem does Ms. Raman report?", o: ["Some shelves were damaged during delivery.", "Part of an order has not arrived yet.", "A delivery truck went to the wrong address.", "The new store's opening has been canceled."], a: 1, type: "detail", e: "Ms. Raman 在 8:45 說層架沒問題，但裝層架用的支架（mounting brackets）沒送到，明天才會由另一輛車送來，也就是訂單有一部分還沒到。層架本身狀況良好，所以「層架受損」是陷阱。" },
      { q: "At 8:48 A.M., what does Ms. Raman most likely mean when she writes, \"But the painters haven't finished the back wall yet anyway\"?", o: ["She wants to hire a different painting company.", "She is unhappy with the color of the back wall.", "The painters need the brackets to complete their work.", "The shelves could not have been installed today regardless."], a: 3, type: "intent", e: "Mr. Hale 擔心原本今天要開始安裝；Ms. Raman 說油漆工反正還沒漆完後牆，意思是就算支架送到，今天本來也裝不了，所以延一天沒影響。Mr. Hale 接著說 a one-day delay won't hurt，印證了這個意思。" },
    ],
  },
  // Questions 149–150
  {
    passages: [
      {
        kind: "ad",
        title: "Fernhill Cleaners",
        body: "Now Offering Free Pickup and Delivery!\n\nToo busy to stop by? Fernhill Cleaners will now collect your garments from your home or office and return them cleaned and pressed within 48 hours. The service is free for orders of $30 or more; a $5 fee applies to smaller orders. Pickups are available Monday through Saturday between 7:00 A.M. and 7:00 P.M.\n\nTo schedule a pickup, use the Fernhill Cleaners app or call 555-0148. First-time customers who book through the app will receive 20 percent off their first order.\n\nFernhill Cleaners — 212 Ostler Street — Serving the downtown area since 1994",
      },
    ],
    qs: [
      { q: "What is the main purpose of the advertisement?", o: ["To introduce a new service", "To announce a change of address", "To explain a price increase", "To celebrate a business anniversary"], a: 0, type: "main", e: "標題寫 Now Offering Free Pickup and Delivery，內文說 Fernhill 現在會到府收送衣物，是在介紹新服務。1994 年只是開業年份，並非週年慶廣告。" },
      { q: "How can a new customer receive a discount?", o: ["By placing an order of more than $30", "By visiting the store on a Saturday", "By scheduling a pickup with a mobile application", "By calling the store before 7:00 A.M."], a: 2, type: "detail", e: "廣告說第一次使用、並透過 app 預約的顧客，第一筆訂單打八折。滿 $30 只是免收送費，不是折扣，是「提到但不是答案」的陷阱。" },
    ],
  },
  // Questions 151–152
  {
    passages: [
      {
        kind: "notice",
        title: "City of Westbrook — Public Works Notice",
        body: "Calloway Avenue Resurfacing\n\nBeginning Monday, August 4, crews will resurface Calloway Avenue between Pine Street and Harlow Road. Work will take place from 9:00 A.M. to 4:00 P.M. on weekdays and is expected to be finished by Friday, August 15. During work hours, one lane will remain open in each direction, but drivers should expect delays.\n\nParking on both sides of the avenue will be prohibited for the length of the project, and vehicles left on the street will be towed. Residents of Calloway Avenue may park free of charge in the municipal lot on Pine Street until the work is complete.\n\nFor updates, visit www.westbrookcity.gov/roads.",
      },
    ],
    qs: [
      { q: "What is indicated about the road work?", o: ["It will take place mainly at night.", "It will close Calloway Avenue completely.", "It is scheduled to last about two weeks.", "It will begin at Harlow Road on August 15."], a: 2, type: "detail", e: "工程從 8 月 4 日（週一）開始，預計 8 月 15 日（週五）完工，大約兩週。施工時間是白天 9 點到 4 點，而且每個方向都保留一個車道，並未完全封閉。" },
      { q: "What are residents of Calloway Avenue offered?", o: ["A discount on towing fees", "Free parking at a nearby lot", "Updates sent by text message", "Permission to park on Harlow Road"], a: 1, type: "detail", e: "公告第二段說 Calloway Avenue 的居民可以免費把車停在 Pine Street 的市立停車場。towed 是會被拖吊，並沒有拖吊費折扣；最新消息是上網查詢，不是簡訊通知。" },
    ],
  },
  // Questions 153–154
  {
    passages: [
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Marisol Ortega <mortega@brayfieldtech.com>"], ["To", "Customer Support Staff"], ["Date", "October 27"], ["Subject", "Annual reviews"]],
        body: "Dear team,\n\nAnnual performance reviews for the customer support department will be held during the week of November 17. Before your meeting, please complete the self-assessment form, which is now available in the Documents section of the employee portal. The form asks you to describe your main achievements this year and to set two goals for next year.\n\nCompleted forms should be sent to your supervisor, not to the Human Resources Department, by November 10. This will give supervisors time to read your responses before the meetings. Your supervisor will contact you directly to arrange a meeting time.\n\nThank you,\n\nMarisol Ortega\nHuman Resources",
      },
    ],
    qs: [
      { q: "What are employees asked to do?", o: ["Attend a training session on November 10", "Contact the Human Resources Department to book a meeting", "Update their contact information on the employee portal", "Fill out a document before a meeting"], a: 3, type: "main", e: "信中請員工在考核面談前先填寫自我評量表（self-assessment form）。面談時間由主管主動聯絡安排，不需要聯絡人資部，這是陷阱。" },
      { q: "What is suggested about the completed forms?", o: ["They will be read by supervisors in advance.", "They must be printed and signed.", "They will be shared with the entire department.", "They should be sent to Ms. Ortega."], a: 0, type: "infer", e: "第二段說表格要在 11 月 10 日前交給主管，好讓主管在面談前有時間閱讀。信中特別說 not to the Human Resources Department，所以寄給人資部的 Ms. Ortega 是錯的。" },
    ],
  },
  // Questions 155–157
  {
    passages: [
      {
        kind: "ad",
        title: "Tidewell Insurance — Job Opening",
        body: "Customer Support Specialist (Full-Time)\n\nTidewell Insurance is seeking a Customer Support Specialist for our regional office in Danbury. The successful candidate will answer questions from policyholders by phone and e-mail, help customers file claims, and keep account records up to date.\n\nRequirements:\n- At least one year of experience in a customer service role\n- Excellent spoken and written communication skills\n- Ability to use standard office software\n\nFluency in Spanish or Portuguese is preferred but not required.\n\nTidewell offers a competitive salary, health insurance, and twenty days of paid vacation per year. All new employees complete a paid three-week training program before they begin working with customers.\n\nTo apply, send a résumé and cover letter to careers@tidewellins.com by May 31.",
      },
    ],
    qs: [
      { q: "What is one responsibility of the position?", o: ["Assisting customers with claims", "Selling insurance policies door to door", "Training new office employees", "Designing office software"], a: 0, type: "detail", e: "職務內容包括 help customers file claims「協助客戶申請理賠」。訓練是新進員工要「接受」的，不是這個職位要負責訓練別人。" },
      { q: "What is NOT listed as a requirement for the position?", o: ["Previous customer service experience", "Strong communication skills", "Knowledge of a second language", "Familiarity with office software"], a: 2, type: "not", e: "會說西班牙語或葡萄牙語是 preferred but not required「優先但非必要」，所以不是必要條件。其他三項都列在 Requirements 之下。" },
      { q: "What is indicated about new employees?", o: ["They must work in the Danbury office for one year.", "They receive pay while being trained.", "They begin working with customers on the first day.", "They receive twenty days of training."], a: 1, type: "detail", e: "廣告說新進員工要先完成「有薪的」三週訓練（a paid three-week training program）才開始接觸客戶。twenty days 是每年的帶薪假，不是訓練天數。" },
    ],
  },
  // Questions 158–160
  {
    passages: [
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Ledgerly Account Services <accounts@ledgerlysoftware.com>"], ["To", "Graham Whitlock <gwhitlock@whitlockdesign.com>"], ["Date", "December 2"], ["Subject", "Your Ledgerly subscription"]],
        body: "Dear Mr. Whitlock,\n\nYour company's annual subscription to Ledgerly Accounting Plus will renew automatically on January 14. [1] Beginning with this renewal, the price of the Plus plan will rise from $480 to $540 per year. This change reflects several features we have added over the past year, including automatic bank reconciliation and support for multiple currencies. [2]\n\nIf you would prefer to reduce your costs, you may switch to our Standard plan at $420 per year. [3] Please note that the Standard plan allows only three users, while the Plus plan allows up to ten.\n\nTo change plans or cancel your subscription, log in to your account and select \"Billing\" before January 14. [4] If we do not hear from you, your Plus subscription will renew at the new price.\n\nSincerely,\n\nLedgerly Account Services",
      },
    ],
    qs: [
      { q: "Why was the e-mail sent?", o: ["To confirm that a payment has been received", "To introduce a new accounting product", "To request updated billing information", "To notify a customer of a price increase"], a: 3, type: "main", e: "信件主要通知 Plus 方案續約時年費會從 $480 漲到 $540。雖然提到新功能，但那是解釋漲價的原因，不是在介紹新產品。" },
      { q: "What is suggested about the Standard plan?", o: ["It includes support for multiple currencies.", "It is designed for smaller numbers of users.", "It will be discontinued on January 14.", "It costs more than the Plus plan."], a: 1, type: "infer", e: "第二段說 Standard 方案只能三位使用者，Plus 可到十位，可推知 Standard 適合人數較少的公司。它一年 $420，比 Plus 便宜，所以「比 Plus 貴」是錯的。" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Both of these were among the features most often requested by our customers.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 1, type: "insert", e: "Both of these 必須指前面剛提到的兩樣東西，也就是 automatic bank reconciliation 和 support for multiple currencies 這兩項新功能，所以放在第一段結尾的位置最合適。" },
    ],
  },
  // Questions 161–163
  {
    passages: [
      {
        kind: "article",
        title: "Historic Mill Finds New Life as Event Venue",
        body: "HOLBROOK (October 9) — The brick mill on the bank of the Tessa River, which produced wool fabric for Marlowe Textiles for nearly a century, will open next month as an event venue. The building had stood empty since 2011, when Marlowe moved its production to a modern plant outside the city.\n\nThe new owners, Hannah and Jules Ferrand, spent two years restoring the structure. They kept many of its original features, including the wooden ceiling beams and tall arched windows, while adding a catering kitchen and an elevator. The main hall can accommodate up to 300 guests, and a smaller room on the second floor is suitable for meetings and workshops.\n\n\"People kept telling us the building was too big to save,\" Ms. Ferrand said. \"We wanted to show that old industrial spaces can serve the community again.\"\n\nThe venue has already received bookings for more than forty weddings and corporate events next year. More information is available at www.oldmillholbrook.com.",
      },
    ],
    qs: [
      { q: "What is the article mainly about?", o: ["The opening of a new textile factory", "The relocation of a catering business", "The new use of a former industrial building", "The sale of land along the Tessa River"], a: 2, type: "main", e: "文章介紹一座舊紡織廠被整修後改為活動場地，也就是舊工業建築的新用途。Marlowe 是把生產移到新工廠，但那不是文章重點，也不是「新開」的紡織廠。" },
      { q: "In the article, the word \"accommodate\" in paragraph 2 is closest in meaning to", o: ["adjust", "assist", "provide", "hold"], a: 3, type: "vocab", e: "can accommodate up to 300 guests 指主廳「可容納」最多 300 位賓客，意思最接近 hold。accommodate 另有「迎合、通融」的意思，容易誤選 adjust 或 assist。" },
      { q: "What is indicated about the mill building?", o: ["It was not in use for several years.", "It has been fully booked for the next two years.", "It was rebuilt using modern materials.", "It is owned by Marlowe Textiles."], a: 0, type: "detail", e: "第一段說這棟建築從 2011 年起就一直空著（had stood empty），也就是閒置了好幾年。新屋主保留了原有的木樑與拱窗，並非用現代材料重建；屋主是 Ferrand 夫婦，不是 Marlowe。" },
    ],
  },
  // Questions 164–167
  {
    passages: [
      {
        kind: "chat",
        title: "Online chat discussion",
        messages: [
          ["Danielle Okoro", "2:10 P.M.", "Quick update on the Hartwell Home Show. The printer just told me our banners won't be ready until Friday afternoon."],
          ["Felix Brandt", "2:11 P.M.", "But the show opens Friday at 9:00 A.M."],
          ["Danielle Okoro", "2:12 P.M.", "Exactly. Sunita, didn't you use a different print shop for the spring catalog launch?"],
          ["Sunita Rao", "2:14 P.M.", "Yes, Ridgeline Print. They did a rush job for us in two days. I can call them now."],
          ["Danielle Okoro", "2:15 P.M.", "Please do. Ask whether they can deliver straight to the convention center by Thursday evening."],
          ["Marco Bellini", "2:17 P.M.", "If we switch printers, should I cancel the original order? We've already paid a deposit."],
          ["Danielle Okoro", "2:18 P.M.", "Let's wait until Sunita hears back. If Ridgeline can't do it, we'll still need the first order, even if it's late."],
          ["Sunita Rao", "2:26 P.M.", "Just spoke to Ridgeline. Thursday by 5:00 P.M. is no problem."],
          ["Danielle Okoro", "2:27 P.M.", "Perfect. Marco, go ahead and contact the first printer."],
        ],
      },
    ],
    qs: [
      { q: "What is the discussion mainly about?", o: ["Solving a problem with the timing of an order", "Choosing a design for a product catalog", "Reducing the cost of a trade show booth", "Planning a schedule for a spring sale"], a: 0, type: "main", e: "原本的印刷廠週五下午才能交布條，但展覽週五早上就開幕，大家在討論如何解決交貨時間的問題。春季型錄只是用來說明曾合作過的印刷廠，不是討論主題。" },
      { q: "What is suggested about Ridgeline Print?", o: ["It is located inside the convention center.", "It requires a deposit for all orders.", "It has completed work for the company before.", "It is more expensive than the original printer."], a: 2, type: "infer", e: "Ms. Rao 說 Ridgeline 之前替他們的春季型錄趕過件，兩天就完成，可知這家印刷廠和公司合作過。付訂金的是原本那家印刷廠，不是 Ridgeline。" },
      { q: "At 2:18 P.M., what does Ms. Okoro most likely mean when she writes, \"Let's wait until Sunita hears back\"?", o: ["She wants Ms. Rao to call the convention center.", "She thinks the deposit should be returned first.", "She is not sure Ms. Rao has the correct phone number.", "Mr. Bellini should not cancel the first order yet."], a: 3, type: "intent", e: "Mr. Bellini 問要不要取消原訂單，Ms. Okoro 回答等 Sunita 得到回覆再說，並補充如果 Ridgeline 做不到，還是需要原本那筆訂單，意思就是先不要取消。" },
      { q: "What will Mr. Bellini most likely do next?", o: ["Pay a deposit to Ridgeline Print", "Cancel an order with a printer", "Pick up banners from a print shop", "Send a design file to Ms. Rao"], a: 1, type: "infer", e: "Ridgeline 確認週四 5 點前可以交貨後，Ms. Okoro 叫 Mr. Bellini 聯絡第一家印刷廠，對照他 2:17 的提問，就是要去取消原本的訂單。" },
    ],
  },
  // Questions 168–171
  {
    passages: [
      {
        kind: "article",
        title: "Fresh Basket Bets on Scheduled Pickup",
        body: "DENTON (June 2) — Fresh Basket, a regional grocery chain with 34 stores, has begun allowing customers to order groceries through its mobile app and pick them up at a scheduled time. [1] The service, which was tested at four stores last autumn, is now available at every location.\n\nUnlike some competitors, Fresh Basket does not charge a fee for the service, and there is no minimum order. [2] Instead, the company hopes that the convenience will encourage shoppers to visit more often. \"Our test showed that customers who used pickup came back about 30 percent more frequently,\" said Tomasz Wierzbicki, the company's vice president of operations.\n\nTo handle the orders, each store has hired between six and ten additional employees, known as personal shoppers, who select the items and pack them in temperature-controlled bags. [3] Customers can choose a one-hour pickup window as early as two hours after placing an order.\n\nNot everyone is convinced that the service will pay off. Retail analyst Grace Mbeki noted that the additional staff represent a significant expense. [4] \"The company is counting on volume,\" she said. \"If not enough shoppers use the service, the costs could outweigh the benefits.\"",
      },
    ],
    qs: [
      { q: "What is the purpose of the article?", o: ["To compare the prices of several grocery chains", "To report on a service that a business has expanded", "To announce the opening of new store locations", "To explain how to use a mobile application"], a: 1, type: "main", e: "文章報導 Fresh Basket 的預約取貨服務：去年秋天在四家店試辦，現在擴大到所有門市，並討論其利弊。文中提到 34 家店是現有規模，並沒有開新店。" },
      { q: "According to the article, how does Fresh Basket hope to benefit from the service?", o: ["Customers will shop at its stores more frequently.", "Customers will pay a small fee for each order.", "It will need fewer employees in its stores.", "It will attract customers from other regions."], a: 0, type: "detail", e: "第二段說這項服務不收費，公司希望便利性能讓顧客更常上門，試辦時使用者回訪頻率高了約 30%。公司反而增聘了人手，所以「需要較少員工」是錯的。" },
      { q: "What concern does Ms. Mbeki express?", o: ["The pickup times are too limited.", "Competitors may offer lower prices.", "The mobile app may be difficult to use.", "The cost of the service may be greater than its benefits."], a: 3, type: "detail", e: "Ms. Mbeki 指出增聘人手是一大筆開銷，如果使用的人不夠多，成本可能超過效益（the costs could outweigh the benefits）。" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Frozen foods and dairy products are kept in separate coolers until customers arrive.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 2, type: "insert", e: "這句話說明冷凍與乳製品在顧客抵達前另外放冷藏，正好接在「揀貨員把商品裝進保溫袋」之後，延續處理訂單的細節，所以放在第三段的位置。" },
    ],
  },
  // Questions 172–175
  {
    passages: [
      {
        kind: "letter",
        title: "Letter",
        body: "Brannock Property Group\n310 Harrow Street, Suite 400\nLinden, OR 97302\n\nJanuary 8\n\nMs. Yuki Arakawa\nArakawa Florist\nUnit 6, Linden Square Shopping Center\n\nDear Ms. Arakawa,\n\nOur records show that the lease for your shop at Unit 6 of Linden Square expires on March 31. We are pleased to offer you a renewal on the terms described below, and we hope you will choose to remain at Linden Square.\n\nThe new lease would run for three years, beginning on April 1. Monthly rent would be $2,150, an increase of $100 over your current rate. In recognition of your eight years as a tenant, however, we will waive the rent for the month of April. As before, the rent includes water and trash collection; electricity remains the tenant's responsibility.\n\nWe are also aware that several tenants have expressed concern about the condition of the rear parking lot. I am happy to report that the lot will be repaved and its lighting upgraded this summer, at no cost to tenants.\n\nPlease let us know of your decision by February 15 so that we have time to prepare the documents. If you do not intend to renew, we would appreciate being informed as early as possible so that we can begin advertising the space.\n\nSincerely,\n\nVictor Lindgren\nLeasing Manager, Brannock Property Group",
      },
    ],
    qs: [
      { q: "Why did Mr. Lindgren write the letter?", o: ["To remind a tenant about a late payment", "To announce that a shopping center will be sold", "To offer terms for continuing a rental agreement", "To request help advertising an empty unit"], a: 2, type: "main", e: "信一開頭說租約 3 月 31 日到期，並提出續約條件，希望對方留下來，目的是提供續租條件。最後提到 advertising the space 只是對方不續約時的後續安排。" },
      { q: "What is NOT mentioned as part of the offer?", o: ["A lower monthly rent", "A month without rent", "A three-year lease period", "Water and trash collection"], a: 0, type: "not", e: "新租金 $2,150 比現在多 $100，是漲價不是降價，所以「較低的月租」沒有被提到。四月免租、三年租期、含水費與垃圾清運都寫在第二段。" },
      { q: "What is suggested about Ms. Arakawa?", o: ["She has complained about the cost of electricity.", "She plans to move her shop to a larger unit.", "She recently opened a second location.", "She first rented space at Linden Square several years ago."], a: 3, type: "infer", e: "信中提到 your eight years as a tenant，表示她已經在 Linden Square 承租八年，也就是好幾年前就開始租了。抱怨的是停車場狀況，而且是 several tenants，並沒有說她抱怨電費。" },
      { q: "In the letter, the word \"run\" in paragraph 2 is closest in meaning to", o: ["operate", "manage", "last", "hurry"], a: 2, type: "vocab", e: "The new lease would run for three years 指租約「持續、有效」三年，意思最接近 last。run 常見的「經營」（operate、manage）和「跑、趕」（hurry）在此都不合。" },
    ],
  },
]);
