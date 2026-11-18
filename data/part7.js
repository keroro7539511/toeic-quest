// Part 7 閱讀測驗（練習題）
// passages: 文章（單篇 / 雙篇 / 三篇），qs: 題目（type: main/detail/not/infer/vocab/intent/insert/cross）
// 題目以陣列順序當 ID，新增題組請加在最後面。
window.PART7 = [
  // ===== 單篇 1：簡訊（intent）=====
  {
    passages: [
      {
        kind: "text",
        title: "Text-message chain",
        messages: [
          ["Carla Mendes", "9:12 A.M.", "Hi Theo, are you still at the warehouse? The Brightfield client just asked if we can add 40 folding chairs to Saturday's delivery."],
          ["Theo Rask", "9:14 A.M.", "I'm here. We only have about 25 in stock right now."],
          ["Carla Mendes", "9:15 A.M.", "Hmm. Could we borrow some from the Eastgate location?"],
          ["Theo Rask", "9:17 A.M.", "I'm way ahead of you. I just called Nadine over there."],
          ["Carla Mendes", "9:18 A.M.", "Great. Let me know what she says so I can revise the invoice before I send it."],
          ["Theo Rask", "9:31 A.M.", "She can spare 20. Her truck will drop them off here by Friday at noon."]
        ]
      }
    ],
    qs: [
      { q: "At 9:17 A.M., what does Mr. Rask most likely mean when he writes, \"I'm way ahead of you\"?", o: ["He will arrive at the warehouse early.", "He has already contacted another branch.", "He has finished loading the delivery truck.", "He thinks the client's request is unreasonable."], a: 1, e: "Ms. Mendes 提議向 Eastgate 分店借椅子，他回答這句並接著說已經打電話給那邊的 Nadine，表示他早就想到並行動了。不是字面上「提早到達」的意思。", type: "intent" },
      { q: "What will Ms. Mendes most likely do next?", o: ["Drive to the Eastgate location", "Cancel Saturday's delivery", "Order new chairs from a supplier", "Update a billing document"], a: 3, e: "她說等 Theo 確認後要 revise the invoice，而最後 Theo 已回覆能借到 20 張（25＋20 足夠 40 張），所以她接下來會修改帳單。", type: "infer" }
    ]
  },

  // ===== 單篇 2：線上聊天（多人）=====
  {
    passages: [
      {
        kind: "chat",
        title: "Online chat discussion",
        messages: [
          ["Priya Das", "10:58 A.M.", "The forecast for Thursday now shows heavy rain all day. I don't think we can shoot the trail scenes for the Ridgeline boot catalog."],
          ["Kofi Mensah", "11:01 A.M.", "That's a problem. The printer needs the final images by the 20th."],
          ["Sandra Wu", "11:03 A.M.", "What if we did the product close-ups indoors on Thursday and saved the trail shots for next Monday? The forecast looks clear then."],
          ["Priya Das", "11:05 A.M.", "That works for me, as long as we can find a studio on short notice. Sandra, could you check whether Studio 4 in the Lanford Building is free?"],
          ["Sandra Wu", "11:07 A.M.", "Consider it done. I'll call them right after this."],
          ["Kofi Mensah", "11:09 A.M.", "I'll tell the two models that the outdoor portion is moving to Monday. One of them mentioned she might have another booking that week, though."],
          ["Priya Das", "11:10 A.M.", "Thanks, Kofi. If she can't make it, we'll ask the agency to send someone else."]
        ]
      }
    ],
    qs: [
      { q: "What are the writers mainly discussing?", o: ["Changes to the plans for a photo shoot", "The design of a new hiking boot", "A delay at a printing company", "The cost of renting a studio"], a: 0, e: "因為週四下雨，三人討論把戶外拍攝改期、室內特寫改到攝影棚拍，主題是拍攝計畫變更。印刷廠只是提到截稿日，並沒有延誤。", type: "main" },
      { q: "At 11:07 A.M., what does Ms. Wu mean when she writes, \"Consider it done\"?", o: ["She has already finished the product close-ups.", "She believes the catalog is complete.", "She will find out if a studio is available.", "She agrees to cancel Monday's session."], a: 2, e: "Ms. Das 請她查 Studio 4 是否有空，她回答這句並說馬上打電話，表示「交給我」。done 不是指拍攝已完成。", type: "intent" },
      { q: "What is suggested about one of the models?", o: ["She prefers working indoors.", "She may be unavailable on the new date.", "She recommended the Lanford Building.", "She works for the printing company."], a: 1, e: "Mr. Mensah 說其中一位模特兒那週可能有別的工作，Ms. Das 也說若她無法配合就請經紀公司換人，暗示她週一可能沒空。", type: "infer" }
    ]
  },

  // ===== 單篇 3：報導（句子插入）=====
  {
    passages: [
      {
        kind: "article",
        title: "Brennick Foods to Open Distribution Center in Porter Valley",
        body: "Brennick Foods, the maker of the popular Harvest Table line of frozen meals, announced on Tuesday that it will open a new distribution center in Porter Valley next spring. [1] The 20,000-square-meter facility will allow the company to deliver products to grocery stores in the northern region up to two days faster than it can now. [2]\n\nConstruction began in January and is expected to be completed in March. The center will employ approximately 150 people, most of them in warehouse and transportation roles. [3] Brennick will hold a hiring fair at the Porter Valley Civic Hall on February 8 and 9.\n\n\"We chose Porter Valley because it sits between two major highways,\" said chief operating officer Lena Kowalczyk. [4] The company also plans to install solar panels on the building's roof, which are expected to supply about a third of the facility's electricity."
      }
    ],
    qs: [
      { q: "According to the article, why did Brennick Foods choose Porter Valley?", o: ["It offered the company a tax reduction.", "It has many experienced food scientists.", "It is where the company was founded.", "It is conveniently located near major roads."], a: 3, e: "營運長說選擇 Porter Valley 是因為它位於兩條主要高速公路之間。其他選項文中都沒有提到。", type: "detail" },
      { q: "What will happen in February?", o: ["Job seekers can meet with company representatives.", "Construction of the facility will begin.", "Solar panels will be installed.", "The distribution center will open."], a: 0, e: "文中說 2 月 8、9 日會在市民會館舉辦徵才博覽會。工程是 1 月開始、3 月完工，中心明年春天才啟用。", type: "detail" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The company expects to fill most of these positions with local residents.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 2, e: "these positions 必須接在提到職缺的句子後面，也就是「約 150 個工作、多為倉儲運輸」之後，並自然帶出下一句徵才博覽會。", type: "insert" }
    ]
  },

  // ===== 單篇 4：發票（表格）=====
  {
    passages: [
      {
        kind: "invoice",
        title: "Fairmont Office Supply — Invoice #40718",
        meta: [["Customer", "Delacroix Architects"], ["Order date", "October 2"], ["Payment due", "November 1"]],
        table: {
          headers: ["Item", "Qty", "Unit Price", "Total"],
          rows: [
            ["Ergonomic desk chair", "4", "$189.00", "$756.00"],
            ["Standing desk converter", "2", "$240.00", "$480.00"],
            ["Printer toner, black", "6", "$38.00", "$228.00"],
            ["Whiteboard markers, box of 12", "3", "$14.00", "$42.00"]
          ]
        },
        body: "Order total: $1,506.00\n\nPlease note: Standing desk converters are currently on back order and will ship separately by October 16. You will not be charged for these items until they are shipped; the amount due today excludes them.\n\nOrders over $1,000 qualify for free assembly of furniture items. Call 555-0137 to schedule a technician."
      }
    ],
    qs: [
      { q: "What is indicated about the standing desk converters?", o: ["They have been discontinued.", "They will arrive after the other items.", "They were ordered by mistake.", "They are being offered at a discount."], a: 1, e: "註記說 standing desk converters 目前缺貨（on back order），會在 10 月 16 日前另外出貨。", type: "detail" },
      { q: "How much does Delacroix Architects owe at this time?", o: ["$1,506.00", "$1,236.00", "$1,026.00", "$756.00"], a: 2, e: "缺貨的轉換架出貨前不收費，所以 $1,506 − $480 = $1,026。直接看總金額 $1,506 是陷阱。", type: "detail" },
      { q: "What service is available to the customer?", o: ["Assembly of furniture at no charge", "Same-day delivery of toner", "Recycling of used printer cartridges", "A free trial of a new chair"], a: 0, e: "訂單超過 $1,000 可享家具免費組裝，打電話即可安排技師。", type: "detail" }
    ]
  },

  // ===== 單篇 5：公告 =====
  {
    passages: [
      {
        kind: "notice",
        title: "Notice to All Tenants of Harborline Tower",
        body: "Elevator B will be out of service from Monday, November 3, through Wednesday, November 5, for its scheduled safety inspection and cable replacement. Elevator A and the freight elevator will remain in operation.\n\nDuring this period, all deliveries must be made using the freight elevator, which can be reached from the loading dock on Cole Street. Couriers will not be permitted to use the main lobby.\n\nWaiting times for Elevator A are expected to be longer than usual, especially between 8:00 and 9:30 A.M. Tenants are encouraged to allow extra time when arriving in the morning.\n\nPlease direct any questions to the building management office, Room 102."
      }
    ],
    qs: [
      { q: "What is the purpose of the notice?", o: ["To introduce a new building manager", "To announce the installation of a new elevator", "To remind tenants about rent payments", "To inform tenants of a temporary service interruption"], a: 3, e: "公告說 B 電梯 11 月 3 日到 5 日停用檢修，屬於暫時停止服務的通知。是更換纜線，不是安裝新電梯。", type: "main" },
      { q: "What are couriers required to do?", o: ["Arrive before 8:00 A.M.", "Use an entrance on Cole Street", "Register at Room 102", "Wait in the main lobby"], a: 1, e: "所有送貨須使用貨梯，而貨梯要從 Cole Street 的卸貨區進入，且快遞員不得使用大廳。Room 102 是詢問處。", type: "detail" }
    ]
  },

  // ===== 單篇 6：電子郵件（NOT）=====
  {
    passages: [
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Marisol Vega <mvega@halvorsengrand.com>"], ["To", "Daniel Okafor <dokafor@pellaronsystems.com>"], ["Date", "September 29"], ["Subject", "Sales conference, November 12–14"]],
        body: "Dear Mr. Okafor,\n\nThank you for choosing the Halvorsen Grand Hotel for Pellaron Systems' sales conference. As requested, I have reserved a block of 25 rooms at our group rate of $139 per night. Your attendees should book using the code PELSALES by October 20. After that date, any rooms that have not been booked will be released for sale to the general public.\n\nRegarding your question about meeting space, the Aurora Ballroom seats up to 150 people and can easily accommodate the 110 participants you expect. I have placed a hold on it for all three days.\n\nFinally, please let your colleagues know that our shuttle bus runs between the airport and the hotel every 30 minutes and is free for hotel guests.\n\nBest regards,\nMarisol Vega\nEvents Coordinator"
      }
    ],
    qs: [
      { q: "Why did Ms. Vega write the e-mail?", o: ["To promote a new hotel restaurant", "To apologize for a booking error", "To provide details about a group reservation", "To request payment for a conference room"], a: 2, e: "信中說明保留 25 間房的團體價、訂房代碼與期限，以及宴會廳保留，都是團體預約的細節。沒有提到錯誤或付款。", type: "main" },
      { q: "What will happen after October 20?", o: ["Unreserved rooms will become available to others.", "The group rate will be reduced.", "The ballroom hold will be canceled.", "The shuttle bus schedule will change."], a: 0, e: "10 月 20 日後尚未被訂走的房間會釋出給一般大眾。released for sale to the general public 換句話說就是「開放給其他人」。", type: "detail" },
      { q: "What is NOT mentioned about the Halvorsen Grand Hotel?", o: ["It offers transportation to and from the airport.", "It has a room that can hold 150 people.", "It provides a special rate for groups.", "It has a fitness center for guests."], a: 3, e: "機場接駁、可容納 150 人的宴會廳、團體優惠價信中都有提到，只有健身中心完全沒提。", type: "not" }
    ]
  },

  // ===== 單篇 7：廣告 =====
  {
    passages: [
      {
        kind: "ad",
        title: "Brightwell Co-Working — Now Open in the Riverside District!",
        body: "Tired of working from your kitchen table? Brightwell offers bright, comfortable workspaces for freelancers, start-ups, and remote employees.\n\nDay Pass — $20. Drop in any weekday between 8:00 A.M. and 8:00 P.M.\nFlex Membership — $180 per month. Use the space up to 10 days a month.\nDedicated Desk — $320 per month. Your own desk and personal locker, with access 24 hours a day, 7 days a week.\n\nAll plans include high-speed Wi-Fi, unlimited coffee and tea, and up to 50 printed pages per month. Meeting rooms can be reserved for $15 per hour, and members receive two free hours each month.\n\nOpening special: Sign up for any monthly plan before March 31 and pay only half price for your first month. Stop by for a free tour at 14 Quayside Lane."
      }
    ],
    qs: [
      { q: "What is being advertised?", o: ["A shared office space", "A furniture store", "A coffee shop", "A printing service"], a: 0, e: "廣告提供自由工作者與新創使用的工作空間與會員方案，即共享辦公室。咖啡、列印只是附帶服務。", type: "main" },
      { q: "What is available only with a Dedicated Desk?", o: ["Free meeting room hours", "High-speed Internet", "Printing services", "Access at any time of day"], a: 3, e: "只有 Dedicated Desk 提供 24 小時全天候使用與個人置物櫃。Wi-Fi、列印所有方案都有；會議室免費時數則是所有會員都有。", type: "detail" },
      { q: "How can new customers receive a discount?", o: ["By referring a friend", "By joining before a certain date", "By purchasing ten Day Passes", "By taking a tour of the facility"], a: 1, e: "3 月 31 日前加入任何月方案，第一個月半價。參觀雖免費，但不是取得折扣的條件。", type: "detail" }
    ]
  },

  // ===== 單篇 8：信件（vocab）=====
  {
    passages: [
      {
        kind: "letter",
        title: "Letter",
        body: "November 3\n\nMr. Harold Jennings\n88 Linden Avenue\nWestbrook\n\nDear Mr. Jennings,\n\nOur records show that your family membership at the Westbrook Museum of Science will expire on November 30. We hope you will continue to be part of our community.\n\nYour annual fee covers unlimited admission for two adults and up to three children, a 10 percent discount in our gift shop, and an invitation to members-only previews. This year's preview, for our new exhibit Oceans in Motion, will take place on the evening of January 15.\n\nPlease be aware that, beginning January 1, the price of a family membership will rise from $75 to $85. Members who renew before that date will pay the current rate for the coming year.\n\nMember support has also made it possible for us to launch our school outreach program, which has brought hands-on science lessons to more than 3,000 students this year.\n\nYou can renew online at www.westbrookscience.org or by calling our membership office at 555-0164.\n\nSincerely,\nAudrey Chambers\nMembership Director"
      }
    ],
    qs: [
      { q: "Why was the letter sent to Mr. Jennings?", o: ["To thank him for volunteering", "To announce the closing of an exhibit", "To encourage him to continue his membership", "To confirm a donation he made"], a: 2, e: "信一開頭就提醒會籍 11 月 30 日到期，並說明續約好處與漲價前續約可維持原價，目的是鼓勵續約。", type: "main" },
      { q: "What is stated about the school outreach program?", o: ["It is funded by a local school.", "It has served thousands of students.", "It will begin on January 15.", "It is open only to members' children."], a: 1, e: "信中說此計畫今年已讓超過 3,000 名學生參與動手做的科學課程。1 月 15 日是特展預覽的日期。", type: "detail" },
      { q: "In the letter, the word \"covers\" in paragraph 2 is closest in meaning to", o: ["protects", "hides", "reports", "includes"], a: 3, e: "Your annual fee covers unlimited admission... 意思是年費「包含」這些福利。cover 的「保護、遮蓋」意思在此不合。", type: "vocab" },
      { q: "What will happen on January 1?", o: ["The cost of a membership will increase.", "A new exhibit will open to the public.", "The gift shop discount will end.", "The museum will extend its hours."], a: 0, e: "1 月 1 日起家庭會員費由 $75 調漲為 $85。新展是在 1 月 15 日舉辦會員預覽。", type: "detail" }
    ]
  },

  // ===== 雙篇 1：memo + e-mail =====
  {
    passages: [
      {
        kind: "memo",
        title: "Memo",
        meta: [["To", "All Tessaro Insurance staff"], ["From", "Graham Holt, Facilities Manager"], ["Date", "June 2"], ["Subject", "Office move"]],
        body: "As you know, we will be moving from our Fulton Street office to our new headquarters at 300 Bayside Plaza this month. To keep disruption to a minimum, departments will move on different Saturdays:\n\nAccounting — June 14\nCustomer Service — June 21\nMarketing and Sales — June 28\n\nProfessional movers will handle all furniture and computer equipment. However, employees are responsible for packing their own files and personal belongings into the labeled boxes provided. All boxes must be sealed and ready by 3:00 P.M. on the Friday before your department's move.\n\nParking at Bayside Plaza is limited. Employees who plan to drive must register their license plate number with the Facilities office by June 20 to receive a parking permit. The building is also a two-minute walk from the Harbor Line train station."
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Anya Petrov"], ["To", "Graham Holt"], ["Date", "June 10"], ["Subject", "Packing question"]],
        body: "Dear Mr. Holt,\n\nI work in the Marketing department, and I will be representing the company at a trade show in Denver from June 24 through June 29. As a result, I won't be in the office when my boxes need to be ready. My colleague Luis Ortega, who sits next to me, has kindly offered to pack my things. Is that acceptable, or do you need me to arrange something else?\n\nAlso, I live near the Harbor Line and will take the train to Bayside Plaza every day, so please don't reserve a parking space for me.\n\nThank you,\nAnya Petrov"
      }
    ],
    qs: [
      { q: "What is the main purpose of the memo?", o: ["To announce the opening of a new branch", "To explain arrangements for relocating an office", "To introduce a new facilities manager", "To request feedback on a building design"], a: 1, e: "備忘錄說明各部門搬到 Bayside Plaza 的日期、打包方式與停車規定，重點是搬遷安排。", type: "main" },
      { q: "According to the memo, what are employees expected to do?", o: ["Hire professional movers", "Disconnect their computers", "Choose a moving date", "Pack their own documents"], a: 3, e: "搬家公司負責家具與電腦，員工要自己把檔案與私人物品裝進提供的箱子。", type: "detail" },
      { q: "By when must Ms. Petrov's boxes be ready?", o: ["3:00 P.M. on June 27", "3:00 P.M. on June 20", "3:00 P.M. on June 28", "3:00 P.M. on June 13"], a: 0, e: "Ms. Petrov 在行銷部，備忘錄中行銷業務部 6 月 28 日（週六）搬遷，箱子須在前一個週五（6 月 27 日）下午 3 點前備妥。6 月 20 日是停車登記期限，是干擾選項。", type: "cross" },
      { q: "Why does Ms. Petrov mention the Harbor Line?", o: ["To suggest a location for a trade show", "To complain about a long commute", "To indicate that she does not need a parking permit", "To explain why she will arrive late on moving day"], a: 2, e: "她說每天搭 Harbor Line 火車通勤，所以不用幫她保留停車位；對應備忘錄中開車者需申請停車證的規定。", type: "infer" },
      { q: "What is suggested about Ms. Petrov?", o: ["She will be out of town on the day her department moves.", "She plans to register her car with the Facilities office.", "She recently transferred from the Accounting department.", "She will help Mr. Ortega pack his belongings."], a: 0, e: "她 6 月 24 日到 29 日在丹佛參展，而她所屬的行銷業務部 6 月 28 日搬遷，需整合兩篇才知道她搬家當天不在。", type: "cross" }
    ]
  },

  // ===== 雙篇 2：webpage + e-mail =====
  {
    passages: [
      {
        kind: "webpage",
        title: "Aurelio Home — Blend Pro 600",
        body: "The Blend Pro 600 turns fresh ingredients into smoothies, sauces, and even hot soup in minutes. Its 1,200-watt motor and six speed settings make it one of the most powerful blenders in its class. $149.00\n\nWarranty information\nThe motor is covered by a two-year warranty. All accessories, including the jar, lid, and blades, are covered for one year. Register your blender online within 30 days of purchase and the motor warranty will automatically be extended to five years.\n\nDuring the warranty period, Aurelio will repair or replace defective parts free of charge. Customers must provide proof of purchase with any service request."
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Grace Holloway"], ["To", "Aurelio Customer Care"], ["Date", "May 12"], ["Subject", "Blend Pro 600 repair"]],
        body: "To whom it may concern,\n\nI purchased a Blend Pro 600 almost three years ago, in early March, and registered it on your Web site the same week. Until recently, it worked perfectly. Last Tuesday, however, the motor made a loud grinding noise and then stopped completely. It will no longer turn on.\n\nWhile I am writing, I should also mention that the lid developed a small crack a few weeks ago. I have been using it anyway, but I would like to replace it.\n\nI have attached a scanned copy of my receipt. Please let me know how to send the blender in for repair.\n\nSincerely,\nGrace Holloway"
      }
    ],
    qs: [
      { q: "What is indicated about the Blend Pro 600 on the webpage?", o: ["It is sold only online.", "It comes with a free recipe book.", "It has a two-year warranty on all parts.", "It can be used to prepare hot food."], a: 3, e: "網頁說它能做 smoothies、sauces, and even hot soup，可以做熱食。保固兩年只限馬達，配件只有一年。", type: "detail" },
      { q: "Why did Ms. Holloway write the e-mail?", o: ["To ask about a new product", "To cancel an online order", "To request service for a faulty appliance", "To complain about a late delivery"], a: 2, e: "她說馬達發出噪音後完全無法運轉，並詢問如何寄回維修。", type: "main" },
      { q: "What is most likely true about the motor of Ms. Holloway's blender?", o: ["It will be replaced at a reduced price.", "It is still covered by the warranty.", "It was damaged during shipping.", "It is a different model from the one advertised."], a: 1, e: "她購買快三年，已超過一般的兩年馬達保固；但她購買當週就上網註冊，依網頁規定馬達保固延長為五年，所以仍在保固內。只看「兩年保固」會誤以為要付費。", type: "cross" },
      { q: "Why will Ms. Holloway most likely have to pay to replace the lid?", o: ["Its warranty period has ended.", "She did not register the product.", "She did not include a receipt.", "The crack was caused by misuse."], a: 0, e: "網頁寫杯蓋等配件只保固一年，且註冊只延長馬達保固；她將近三年前購買，蓋子幾週前才裂，早已超過一年。她有註冊也附了收據，所以其他理由都不成立。", type: "cross" },
      { q: "What did Ms. Holloway include with her e-mail?", o: ["A photograph of the damaged lid", "A completed registration form", "A copy of a receipt", "A shipping label"], a: 2, e: "信末說 I have attached a scanned copy of my receipt，附上收據掃描檔，正好符合網頁要求的購買證明。", type: "detail" }
    ]
  },

  // ===== 三篇：announcement + form + e-mail =====
  {
    passages: [
      {
        kind: "announcement",
        title: "Northgate Small Business Expo — Call for Exhibitors",
        body: "Join more than 200 local companies at the Northgate Small Business Expo, September 18–19, at the Fenwick Convention Center. Last year's event drew over 6,000 visitors.\n\nBooth options\nStandard booth (3 m × 3 m): $400\nPremium corner booth (3 m × 4 m): $650\n\nEvery booth comes with one table, two chairs, and an electrical outlet. Premium booths also include a company listing in the printed event program.\n\nExhibitors who register by July 31 receive $50 off either booth type. Additional tables may be requested for $25 each. Register online at www.northgateexpo.com."
      },
      {
        kind: "form",
        title: "Exhibitor Registration Confirmation",
        table: {
          headers: ["Field", "Details"],
          rows: [
            ["Company", "Tidewater Candle Co."],
            ["Contact", "Rosa Delgado-Finch"],
            ["Date registered", "August 4"],
            ["Booth type", "Premium corner"],
            ["Amount paid", "$650.00"],
            ["Special requests", "One additional table; location near the main entrance, if possible"]
          ]
        }
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Martin Leclerc <mleclerc@northgateexpo.com>"], ["To", "Rosa Delgado-Finch"], ["Date", "August 11"], ["Subject", "Your booth assignment"]],
        body: "Dear Ms. Delgado-Finch,\n\nThank you for registering for this year's expo. I am happy to tell you that we were able to assign you Booth 12, which is directly to the right of the main entrance.\n\nWe have also noted your request for extra furniture. Because this was not included in your original payment, an invoice for it will be sent to you separately next week.\n\nExhibitors may set up their booths on September 17 between 2:00 P.M. and 8:00 P.M. Please bring the parking pass attached to this e-mail so that you can use the loading area.\n\nBest regards,\nMartin Leclerc\nExhibitor Services"
      }
    ],
    qs: [
      { q: "What is the purpose of the announcement?", o: ["To attract businesses to take part in an event", "To advertise the opening of a convention center", "To report on the results of last year's expo", "To recruit volunteers for a trade show"], a: 0, e: "標題為 Call for Exhibitors，內容說明攤位種類與價格並請企業上網報名，目的是招攬參展商。", type: "main" },
      { q: "According to the announcement, what is provided with every booth?", o: ["A listing in the event program", "A source of electricity", "A parking space near the entrance", "An extra table at no cost"], a: 1, e: "每個攤位都附一張桌子、兩張椅子與一個電源插座。刊登於活動手冊只限 Premium 攤位；加桌要另付 $25。", type: "detail" },
      { q: "Why did Ms. Delgado-Finch pay the full price for her booth?", o: ["She requested a location near the entrance.", "She chose a premium corner booth.", "She asked for an additional table.", "She registered after the discount deadline."], a: 3, e: "公告說 7 月 31 日前報名折 $50；表格顯示她 8 月 4 日才報名，因此付了原價 $650。", type: "cross" },
      { q: "What is suggested about Tidewater Candle Co.?", o: ["It exhibited at last year's expo.", "It will set up its booth on September 18.", "It will appear in the printed program.", "It has more than 200 employees."], a: 2, e: "表格顯示它租的是 Premium corner 攤位，公告說 Premium 攤位會列入印刷版活動手冊，需整合兩篇。布置日是 9 月 17 日。", type: "cross" },
      { q: "What will Ms. Delgado-Finch receive an invoice for next week?", o: ["Her booth rental", "A parking pass", "Use of the loading area", "An additional table"], a: 3, e: "信中說額外家具（她申請的加桌）未含在原付款中，下週另寄帳單；對照公告每張加桌 $25。停車證已附在信中。", type: "cross" }
    ]
  }
];
