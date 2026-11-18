// Part 3 追加練習（第 3 批）：20 組對話（p3:30–p3:49）
window.PART3.push(...[
  {
    lines: [
      ["M", "Thank you for calling Maple Street Catering. This is Owen speaking."],
      ["W", "Hi, Owen. I'm planning a retirement party for one of our directors on the twenty-second. We're expecting about forty guests, and I'd like a buffet lunch."],
      ["M", "Certainly. Have you had a chance to look at the packages on our Web site?"],
      ["W", "Yes. We'd like hot dishes, not just sandwiches, but we don't need dessert. One of our staff members owns a bakery, and she's offered to make a cake."],
      ["M", "Then I know which package is right for you. I'll e-mail you a contract this afternoon. Once you sign it, we'll need a twenty percent deposit to hold the date."],
    ],
    graphic: { kind: "table", title: "Maple Street Catering: Lunch Packages", headers: ["Package", "Includes", "Price per Person"], rows: [["Garden", "Sandwiches, salad", "$14"], ["Classic", "Sandwiches, salad, dessert", "$18"], ["Harvest", "Hot entrées, salad", "$22"], ["Deluxe", "Hot entrées, salad, dessert", "$27"]] },
    qs: [
      { q: "What event is the woman planning?", o: ["A company anniversary", "A client lunch meeting", "A farewell event for a colleague", "A bakery opening"], a: 2, e: "女子說 a retirement party for one of our directors → 為同事辦退休（送別）派對。bakery 是同事開的店，「A bakery opening」是同字陷阱。" },
      { q: "Look at the graphic. Which package will the woman most likely choose?", o: ["Garden", "Classic", "Deluxe", "Harvest"], a: 3, e: "她要熱食（不只三明治）、不需要甜點 → 有 Hot entrées 但沒有 dessert 的方案是 Harvest。Deluxe 有熱食但含甜點，不符合。" },
      { q: "According to the man, what must the woman do to reserve the date?", o: ["Pay part of the cost in advance", "Confirm the final number of guests", "Visit the catering company", "Choose a dessert"], a: 0, e: "男子說簽約後需要 a twenty percent deposit to hold the date → 先付部分費用（訂金）。deposit 被改寫成 pay part of the cost in advance。" },
    ],
  },
  {
    lines: [
      ["W", "So, we've finished interviewing all three candidates for the graphic designer position. Paul, what did you think?"],
      ["M", "I was most impressed with Sofia Reyes. Her portfolio was excellent, and she's worked with clients in the food industry, just like ours."],
      ["W", "I agree. But the job posting said the position starts on May first, and she told us she can't leave her current company until mid-June."],
      ["W2", "Actually, that might not be a problem. Our contract with the freelance designer runs through the end of June, so the work would be covered until then."],
      ["M", "That's good to hear. Then I don't see any reason not to make her an offer."],
      ["W2", "Great. I'll call Ms. Reyes this afternoon to discuss salary and a start date."],
    ],
    qs: [
      { q: "What are the speakers mainly discussing?", o: ["Revising a job posting", "Training a new employee", "Renewing a client contract", "Selecting a job candidate"], a: 3, e: "三人在討論面試完的應徵者、要不要錄取 Sofia Reyes → 挑選應徵者。job posting 和 contract 都有出現，但不是主題。" },
      { q: "Why does the woman say, \"the job posting said the position starts on May first\"?", o: ["To correct an error in a document", "To express a concern about a candidate", "To suggest postponing the interviews", "To remind the man of an application deadline"], a: 1, e: "她接著說 Sofia 要到六月中才能離職 → 提到五月一日到職，是在表達對這位人選的顧慮（時間對不上）。" },
      { q: "What will happen this afternoon?", o: ["A contract will be signed", "A freelancer will be contacted", "Some portfolios will be reviewed", "A candidate will receive a phone call"], a: 3, e: "第二位女子說 I'll call Ms. Reyes this afternoon → 應徵者會接到電話。freelance designer 有提到，但下午要聯絡的不是他。" },
    ],
  },
  {
    lines: [
      ["W", "Hello, I ordered two vinyl banners from your Web site for a trade fair this weekend. The tracking page says they're still being processed. Is there a problem?"],
      ["M", "Let me check. Ah, I see. The logo file you uploaded was low resolution, so our design team put the order on hold. We sent you an e-mail about it on Monday."],
      ["W", "Really? I never got it. Maybe it went to my spam folder."],
      ["M", "That's possible. If you can upload a better quality file today, we can still print the banners tomorrow and send them by overnight delivery at no extra cost."],
      ["W", "That would be great. I'll ask our marketing department for the original file right away."],
    ],
    qs: [
      { q: "Why is the woman calling?", o: ["To change a delivery address", "To check on the status of an order", "To complain about a damaged product", "To order additional banners"], a: 1, e: "她說追蹤頁面顯示還在處理中，問是不是有問題 → 查詢訂單進度。" },
      { q: "What caused the delay?", o: ["A shipping company made an error", "A payment was declined", "The design team was short-staffed", "An image did not meet quality standards"], a: 3, e: "男子說 The logo file you uploaded was low resolution → 圖檔品質不夠。design team 有出現，但不是人手不足，是同字陷阱。" },
      { q: "What does the man offer to do?", o: ["Give the woman a discount", "Provide fast shipping for free", "Redesign the woman's logo", "Send the e-mail again"], a: 1, e: "男子說 send them by overnight delivery at no extra cost → 免費隔夜快遞。「Send the e-mail again」利用對話中的 e-mail 設陷阱。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, I'm replacing the floor tiles in my kitchen, and I'd like to rent a tile saw. How much does it cost?"],
      ["W", "It depends on how long you need it. Here's our rate sheet. Most people working on a kitchen keep it for at least a full day."],
      ["M", "Well, I only need to cut the pieces along the edges, and my brother is helping me, so I think four hours will be enough. I'll pick it up Saturday morning."],
      ["W", "OK. Just so you know, we require a credit card for the security deposit, and the saw has to be returned clean, or there's a cleaning fee."],
      ["M", "No problem. Oh, and does the saw come with a blade, or do I have to buy one separately?"],
    ],
    graphic: { kind: "table", title: "Tile Saw Rental Rates", headers: ["Rental Period", "Price"], rows: [["Up to 4 hours", "$35"], ["One day", "$55"], ["Weekend", "$90"], ["One week", "$180"]] },
    qs: [
      { q: "What project is the man working on?", o: ["Painting a fence", "Redoing a kitchen floor", "Repairing a roof", "Building some shelves"], a: 1, e: "男子說 I'm replacing the floor tiles in my kitchen → 重鋪廚房地板。" },
      { q: "Look at the graphic. How much will the man most likely pay for the rental?", o: ["$35", "$55", "$90", "$180"], a: 0, e: "店員說多數人租一整天，但男子認為四小時就夠 → Up to 4 hours 的 $35。他週六取件，但沒說要租整個週末，$90 是陷阱。" },
      { q: "What does the man ask about?", o: ["Whether a part is included with the equipment", "Whether the store offers delivery", "How to clean the saw", "When the store opens on Saturday"], a: 0, e: "最後他問 does the saw come with a blade → 鋸片是否附在設備裡。清潔是店員提到的規定，不是他的問題。" },
    ],
  },
  {
    lines: [
      ["W", "Good morning. I'm stopping by all the offices on this floor to let you know that the main elevators will be shut down on Thursday for their annual safety inspection."],
      ["M", "The whole day? That's going to be difficult. We're having new desks delivered to our office on Thursday."],
      ["W", "The inspection should be finished by two P.M. And the freight elevator at the back of the building will still be running."],
      ["M2", "Is the freight elevator big enough for furniture? Some of the desks are pretty large."],
      ["W", "Oh, yes. It's actually designed for that. But you'll need to reserve it. I'll put a sign-up sheet in the lobby this afternoon."],
      ["M", "Thanks. Mike, could you call the furniture company and ask the drivers to use the back entrance?"],
    ],
    qs: [
      { q: "Who most likely is the woman?", o: ["A building manager", "A delivery driver", "An elevator technician", "A furniture salesperson"], a: 0, e: "她逐一到各辦公室通知電梯停用、安排貨梯登記 → 大樓管理人員。她只是通知檢查，不是做檢查的技師。" },
      { q: "What problem does the man mention?", o: ["A delivery is scheduled for the same day", "Some desks have been damaged", "The lobby is being renovated", "An inspection has been delayed"], a: 0, e: "男子說星期四要送新桌子來 → 送貨跟電梯檢修同一天。" },
      { q: "What will the woman do this afternoon?", o: ["Call a furniture company", "Post a reservation form", "Inspect the freight elevator", "Unlock the back entrance"], a: 1, e: "她說 I'll put a sign-up sheet in the lobby this afternoon → 張貼登記表。打給家具公司的是 Mike，不是她。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, this is Daniel Cho. I have a cleaning scheduled with Dr. Patel this Friday at ten, but I've just been asked to attend a client meeting at that time."],
      ["W", "No problem, Mr. Cho. Let me see what else we have. Dr. Patel has an opening next Tuesday at twelve fifteen."],
      ["M", "Hmm, my lunch break is only thirty minutes, and your office is across town."],
      ["W", "I understand. Well, we've recently started opening on Saturday mornings. Would nine o'clock this Saturday work for you?"],
      ["M", "That would be perfect."],
      ["W", "Great. And since it's been over a year since your last visit, please come in fifteen minutes early to update your insurance information."],
    ],
    qs: [
      { q: "Why is the man calling?", o: ["To ask about a bill", "To request a different dentist", "To reschedule an appointment", "To get directions to the clinic"], a: 2, e: "他週五十點的洗牙時段要開會 → 打來改約。對話中沒有要換醫師。" },
      { q: "What does the man imply when he says, \"my lunch break is only thirty minutes\"?", o: ["He would like a shorter treatment", "He usually eats lunch near his office", "The suggested time will not work for him", "He cannot leave work early on Friday"], a: 2, e: "午休只有三十分鐘、診所又在城市另一頭 → 委婉表示週二中午的時段不行。接著櫃台就提出週六的選項。" },
      { q: "What is the man asked to do?", o: ["Bring his dental records", "Arrive before his appointment time", "Call his insurance company", "Pay a cancellation fee"], a: 1, e: "櫃台說 please come in fifteen minutes early → 提早到。insurance 有提到，但是要現場更新資料，不是打給保險公司。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, Karen. I need to book a flight to Singapore for the sales conference. I have to be at the welcome reception, which begins at seven P.M. on the fifteenth."],
      ["W", "Let me pull up the options. There are four direct flights that day. Do you have a preference?"],
      ["M", "Well, I'm meeting a client here on the morning of the fifteenth, so I can't leave before noon. And I'd like at least two hours after landing to get to the hotel and change."],
      ["W", "Then there's really only one flight that works. It's an economy seat, though. Business class is fully booked."],
      ["M", "That's fine. It's a short flight. Could you also arrange for a car to pick me up at the airport?"],
    ],
    graphic: { kind: "table", title: "Flights to Singapore, March 15", headers: ["Flight", "Departs", "Arrives"], rows: [["SA 210", "9:40 A.M.", "11:55 A.M."], ["SA 318", "12:30 P.M.", "2:45 P.M."], ["SA 422", "3:10 P.M.", "5:25 P.M."], ["SA 560", "5:00 P.M.", "7:15 P.M."]] },
    qs: [
      { q: "Why is the man going to Singapore?", o: ["To attend a conference", "To meet a new client", "To lead a training session", "To visit a branch office"], a: 0, e: "他說 book a flight to Singapore for the sales conference → 參加會議。和客戶見面是出發前在本地的行程。" },
      { q: "Look at the graphic. Which flight will the man most likely take?", o: ["SA 210", "SA 318", "SA 422", "SA 560"], a: 1, e: "中午以後才能出發，且落地後要留兩小時，晚上七點前到場 → 最晚五點前抵達。只有 12:30 起飛、2:45 抵達的 SA 318 符合。SA 422 抵達後只剩一個半小時。" },
      { q: "What does the man ask the woman to do?", o: ["Upgrade his seat", "Book ground transportation", "Reserve a hotel room", "Send him a presentation"], a: 1, e: "他請她 arrange for a car to pick me up at the airport → 安排地面交通（接機）。商務艙已滿，他也接受經濟艙，沒要求升等。" },
    ],
  },
  {
    lines: [
      ["W", "Joseph, finance just told me our department budget for next year is going to be cut by ten percent. We need to decide where to save."],
      ["M", "Well, let's look at this year's spending. I don't want to touch training. We've just hired five new people, and they'll need it."],
      ["W", "I agree. And we can't do much about software, since most of that is licenses we're required to renew. What about travel? Now that most of our client meetings are online, we hardly fly anywhere anymore."],
      ["M", "We already cut that last year, so there isn't much left there. I think we should focus on our second-largest expense. Most of what we spend there could be replaced with shared online files."],
      ["W", "Good idea. I'll ask Gloria to look into it and report back at Friday's meeting."],
    ],
    graphic: { kind: "bars", title: "Department Spending This Year", unit: "%", items: [["Software", 35], ["Printing", 27], ["Training", 23], ["Travel", 15]] },
    qs: [
      { q: "What are the speakers mainly discussing?", o: ["How to reduce expenses", "How to train new employees", "Which software to purchase", "Where to hold client meetings"], a: 0, e: "預算要砍百分之十，兩人在討論 where to save → 如何減少支出。培訓、軟體都有提到，但只是被排除的項目。" },
      { q: "Why does the woman think travel costs could be lowered?", o: ["Airfares have gone down", "A business trip was canceled", "Many meetings now take place online", "Fewer clients are located overseas"], a: 2, e: "她說 most of our client meetings are online → 很多會議改成線上。" },
      { q: "Look at the graphic. Which category does the man suggest reducing?", o: ["Printing", "Software", "Training", "Travel"], a: 0, e: "男子說要從 second-largest expense 下手，可用線上共享檔案取代 → 圖中第二高的是 Printing。Travel 去年已砍過。" },
    ],
  },
  {
    lines: [
      ["W", "Let's get started. As you know, the launch of our new wireless earbuds is planned for October ninth. Hassan, is production on schedule?"],
      ["M", "The earbuds themselves are ready, but there's a problem with the charging cases. The factory found a defect in the hinge, and they're replacing it."],
      ["M2", "And that means the shipment to our warehouse won't arrive until at least October fifteenth."],
      ["W", "Hmm. We've already sent invitations to journalists for the launch event. Changing the date now would be really inconvenient."],
      ["M2", "What if we kept the event on the ninth but started taking online preorders instead? Products would ship at the end of the month."],
      ["W", "That could work. I'll check with our Web team to see whether the store page can be ready by then."],
    ],
    qs: [
      { q: "What product are the speakers discussing?", o: ["A mobile phone", "A laptop computer", "An audio device", "A charging station"], a: 2, e: "產品是 wireless earbuds（無線耳機）→ 音訊裝置。charging cases 只是耳機的充電盒，「A charging station」是同字陷阱。" },
      { q: "What problem does Hassan mention?", o: ["A component is faulty", "A factory has closed", "A shipment was lost", "A price has increased"], a: 0, e: "Hassan 說工廠發現充電盒的 hinge 有 defect → 零件有瑕疵。貨只是會晚到，沒有遺失。" },
      { q: "What does the woman say she will do?", o: ["Postpone the launch event", "Contact some journalists", "Talk to another team", "Visit a factory"], a: 2, e: "她說 I'll check with our Web team → 跟另一個團隊確認。她明確表示不想改發表會日期。" },
    ],
  },
  {
    lines: [
      ["W", "Hi, Raymond. Have you heard about the new wellness program? The company will pay half the cost of a membership at Peak Fitness for anyone who signs up this month."],
      ["M", "Really? I've been meaning to join a gym. But isn't Peak Fitness on the other side of town?"],
      ["W", "They have a new location in the Harmon Building, right across the street. It opened two weeks ago."],
      ["M", "Oh, that's convenient. I could work out before my shift. What do I need to do to sign up?"],
      ["W", "Just fill out the form on the HR intranet page. Then show your employee ID card at the front desk the first time you go."],
    ],
    qs: [
      { q: "What is the woman telling the man about?", o: ["An employee benefit", "A job opening", "A building renovation", "A health seminar"], a: 0, e: "公司幫員工付一半健身房會費 → 員工福利。wellness 容易聯想到健康講座，但對話沒提到。" },
      { q: "What does the woman say about Peak Fitness?", o: ["It offers free classes", "It has opened a branch nearby", "It is closing for renovations", "It has extended its hours"], a: 1, e: "她說對街的 Harmon Building 有 a new location，兩週前開幕 → 附近開了分店。" },
      { q: "What should the man do first?", o: ["Complete an online form", "Visit the front desk", "Get a new ID card", "Pay a membership fee"], a: 0, e: "先在 HR intranet 填表，第一次去時才出示員工證 → 第一步是填線上表單。front desk 是之後的步驟。" },
    ],
  },
  {
    lines: [
      ["W", "Hello, I'd like to arrange a guided tour of the museum for a group from our company. There will be about thirty of us, on Friday, June sixth."],
      ["M", "We can do that. However, groups larger than twenty-five have to be split in two, so you'd have two guides, and each group would start fifteen minutes apart."],
      ["W", "That's fine. Several of our employees are visiting from our Seoul office. Do you have guides who speak Korean?"],
      ["M", "We do, on weekdays, so Friday works. I'll make a note of that. Also, would your group like to have lunch in our rooftop café afterward? We offer set menus for groups."],
      ["W", "That sounds nice, but I'll need to check our budget first. Could you send me the menus and prices?"],
    ],
    qs: [
      { q: "What does the woman want to do?", o: ["Rent an event space", "Purchase annual memberships", "Apply for a guide position", "Arrange a visit for her coworkers"], a: 3, e: "她說要為公司同事安排 a guided tour of the museum → 替同事安排參觀。guide 是同字陷阱，她不是要應徵導覽員。" },
      { q: "What does the man say about large groups?", o: ["They receive a discount", "They must pay in advance", "They must arrive early", "They are divided into smaller groups"], a: 3, e: "男子說超過二十五人 have to be split in two → 分成小組。" },
      { q: "What does the woman ask the man to send?", o: ["Information about meal options", "A map of the museum", "A list of tour guides", "A signed contract"], a: 0, e: "她請對方寄 the menus and prices → 用餐選項的資訊。" },
    ],
  },
  {
    lines: [
      ["M", "So this is the space on Elm Avenue. It used to be a flower shop. As you can see, there's a large front window and plenty of room for seating."],
      ["W", "It's lovely. But I'm worried about foot traffic. Most of the shops on this street seem pretty quiet."],
      ["M", "The last tenant was there for twelve years."],
      ["W", "That's a good point. What about the kitchen, though? I'd need to install two commercial ovens for my bread and pastries, and that requires special electrical wiring."],
      ["M", "The owner of the building has said he'd pay for any electrical work if you sign a three-year lease."],
      ["W", "Then I'd like to bring my contractor to take a look before I decide. Is Thursday morning possible?"],
    ],
    qs: [
      { q: "What kind of business does the woman most likely plan to open?", o: ["A flower shop", "A furniture store", "An electrical company", "A bakery"], a: 3, e: "她要裝商用烤箱來做 bread and pastries → 麵包店。flower shop 是之前的房客。" },
      { q: "Why does the man say, \"The last tenant was there for twelve years\"?", o: ["To explain why the space needs repairs", "To suggest that the rent will go up", "To show that the owner is flexible", "To indicate that a business can succeed there"], a: 3, e: "女子擔心這條街人潮少，男子回答前一個房客在這裡做了十二年 → 暗示在這裡做生意也能經營得下去。" },
      { q: "What does the woman want to do on Thursday?", o: ["Have a professional examine the space", "Sign a lease", "Meet the building owner", "Buy some ovens"], a: 0, e: "她說想帶 contractor 來看看再決定 → 請專業人員檢查空間。簽約是之後的事。" },
    ],
  },
  {
    lines: [
      ["W", "Hello, Mr. Lindqvist? This is Amy from Clearword Translation. We received the user manual for your coffee machine. You'd like it translated into Spanish and Portuguese, right?"],
      ["M", "That's right. And we need both versions by the twentieth. The machines start shipping to South America at the end of the month."],
      ["W", "The Spanish version won't be a problem. But our Portuguese translator is booked until the middle of next month."],
      ["M", "Oh no. Is there any way to speed that up? We'd be willing to pay a rush fee."],
      ["W", "Let me see if one of our freelance translators is available. I'll call you back by the end of the day."],
    ],
    qs: [
      { q: "What did the man's company send to the woman?", o: ["A coffee machine", "A shipping schedule", "A set of instructions", "A payment"], a: 2, e: "翻譯社收到 the user manual → 使用說明書。coffee machine 是說明書的產品，不是寄出的東西。" },
      { q: "What problem does the woman mention?", o: ["A document is incomplete", "A price has gone up", "A deadline was missed", "A staff member is unavailable"], a: 3, e: "她說葡萄牙文譯者 is booked until the middle of next month → 有員工排不出時間。" },
      { q: "What will the woman most likely do next?", o: ["Check another worker's availability", "Charge a rush fee", "Send the Spanish version", "Visit the man's office"], a: 0, e: "她說 Let me see if one of our freelance translators is available → 確認其他譯者有沒有空。加急費是男子提出的。" },
    ],
  },
  {
    lines: [
      ["W", "Hi, I'm Teresa Gomez. I started in the legal department today, and I was told to come here to get a parking permit."],
      ["M", "Welcome. Here's your permit. Just hang it from your rearview mirror. And here's a map of the parking garage."],
      ["W", "Thanks. I see each level is for different people. Where should I park?"],
      ["M", "Employees normally park on level three. But since you drive an electric car, you can use the charging spaces instead, as long as you move your car after four hours."],
      ["W", "Great. I'll use those. Is there an elevator from the garage up to the office?"],
      ["M", "Yes, but it's being repaired this week, so you'll have to take the stairs next to the security desk."],
    ],
    graphic: { kind: "list", title: "Riverside Tower Parking Garage", items: ["Level 1: Visitors", "Level 2: Reserved for Executives", "Level 3: Employees", "Level 4: Electric Vehicle Charging"] },
    qs: [
      { q: "Who most likely is the woman?", o: ["A visitor", "A security guard", "A lawyer from another firm", "A new employee"], a: 3, e: "她說 I started in the legal department today → 今天剛到職的新員工。legal 容易聯想到外部律師，是陷阱。" },
      { q: "Look at the graphic. On which level will the woman most likely park?", o: ["Level 1", "Level 2", "Level 3", "Level 4"], a: 3, e: "一般員工停三樓，但她開電動車、說會用充電車位 → 圖上的充電區在 Level 4。Level 3 是提到但不是答案的陷阱。" },
      { q: "What does the man say about the elevator?", o: ["It is only for executives", "It is next to the security desk", "It is temporarily out of service", "It requires a permit"], a: 2, e: "電梯 is being repaired this week → 暫時停用。在保全櫃台旁的是樓梯，不是電梯。" },
    ],
  },
  {
    lines: [
      ["W", "Thanks for meeting with me, Mr. Doyle. I wanted to show you our new compostable cups. Several cafés in the area have already switched to them."],
      ["M", "My customers have been asking for more environmentally friendly options. How do the prices compare with the plastic cups I'm using now?"],
      ["W", "They're about fifteen percent more expensive. But we're offering new customers a discount for the first six months."],
      ["M", "Hmm. I go through about two thousand cups a week."],
      ["W", "In that case, you'd also qualify for our bulk pricing. Let me leave you some samples so you can see how well they hold up with hot drinks."],
    ],
    qs: [
      { q: "Who most likely is the woman?", o: ["A café manager", "A delivery driver", "A regular customer", "A sales representative"], a: 3, e: "她向咖啡店老闆介紹新產品、說明價格和新客戶折扣 → 業務代表。" },
      { q: "Why does the man say, \"I go through about two thousand cups a week\"?", o: ["To complain about a late delivery", "To explain why he needs more storage", "To show that his café is popular", "To point out that the price difference matters"], a: 3, e: "前面提到新杯子貴百分之十五，他接著說每週用兩千個 → 暗示價差累積起來很可觀。女子也隨即提出大量採購價。" },
      { q: "What will the woman give the man?", o: ["A price list", "Some product samples", "A discount coupon", "A sales contract"], a: 1, e: "她說 Let me leave you some samples → 留下樣品。discount 有提到，但沒說要給折價券。" },
    ],
  },
  {
    lines: [
      ["W", "Before we start, I want to remind you both that the online safety training has to be completed by Friday. Anyone who hasn't finished it won't be allowed into the lab next week."],
      ["M", "I started it yesterday, but the video in the third module won't play. I tried it on two different computers."],
      ["M2", "Same here. I think it's a problem with the training Web site, not our computers."],
      ["W", "Hmm, I'll contact the vendor about that. In the meantime, you can still do the other modules, right?"],
      ["M2", "Yes, the rest of them seem to be working fine."],
      ["W", "OK. And if the video isn't fixed by Thursday, I'll ask the safety officer to cover that section with you in person."],
    ],
    qs: [
      { q: "Where do the speakers most likely work?", o: ["At a training center", "At a computer store", "At a laboratory", "At a video production company"], a: 2, e: "沒完成訓練 won't be allowed into the lab → 他們在實驗室工作。training、computer、video 都是對話中出現的字。" },
      { q: "What problem do the men report?", o: ["They forgot their passwords", "Their computers are out of date", "The training takes too long", "Part of a course cannot be viewed"], a: 3, e: "第三單元的影片 won't play → 課程有一部分無法觀看。第二位男子特別說不是電腦的問題。" },
      { q: "According to the woman, what might happen if the problem is not solved?", o: ["The deadline will be extended", "The men will use different computers", "Some instruction will be given face-to-face", "The vendor will issue a refund"], a: 2, e: "她說週四前沒修好，會請安全主管 cover that section with you in person → 改成當面講解。" },
    ],
  },
  {
    lines: [
      ["W", "Hi, I'm interested in renting a booth at the Lakeside Summer Festival. I make and sell honey and beeswax candles."],
      ["M", "Great. We still have a few spaces left. Booths near the main stage are a hundred and twenty dollars, and the ones by the parking area are eighty."],
      ["W", "Well, my products are pretty small, and people don't usually buy candles while they're watching a concert."],
      ["M", "That makes sense. Actually, many vendors do better near the parking area, since everyone passes by on the way out. Will you need electricity?"],
      ["W", "No, I won't. But could I set up a small table for free tastings? Is that allowed?"],
      ["M", "Yes, but any food samples require a permit from the county health office. I'll e-mail you the application."],
    ],
    qs: [
      { q: "What does the woman sell?", o: ["Fresh vegetables", "Concert tickets", "Handmade goods", "Electrical equipment"], a: 2, e: "她自己做蜂蜜和蜂蠟蠟燭來賣 → 手工製品。concert、electricity 都只是對話中的字。" },
      { q: "What does the woman imply when she says, \"people don't usually buy candles while they're watching a concert\"?", o: ["She would like to perform at the festival", "She thinks the festival will be too noisy", "She prefers a spot away from the stage", "She plans to lower her prices"], a: 2, e: "主舞台旁的攤位比較貴，她說看表演的人不會買蠟燭 → 暗示不想選舞台旁，偏好其他位置。男子也接著推薦停車場附近。" },
      { q: "What will the man send the woman?", o: ["A form for a permit", "A map of the festival", "A list of vendors", "A receipt for payment"], a: 0, e: "試吃需要衛生局許可，男子說 I'll e-mail you the application → 寄許可證申請表。" },
    ],
  },
  {
    lines: [
      ["W", "Thanks for having me, Mr. Bianchi. As I mentioned on the phone, Coastal Living magazine is doing a feature on new restaurants in the harbor district."],
      ["M", "We're happy to be included. This is our head chef, Andre Laurent. He designed our entire menu."],
      ["M2", "Nice to meet you. Most of our dishes use seafood that comes in fresh from the harbor every morning, so the menu changes daily depending on what the fishermen bring in."],
      ["W", "That's a unique approach. Would it be possible for our photographer to come by and take some pictures of the kitchen?"],
      ["M", "Of course. Wednesday afternoons are best, since we don't open until five that day."],
    ],
    qs: [
      { q: "Who most likely is the woman?", o: ["A fisherman", "A photographer", "A journalist", "A restaurant owner"], a: 2, e: "她代表雜誌來做新餐廳的專題報導 → 記者。攝影師是她之後要派來的同事。" },
      { q: "What is special about the restaurant's menu?", o: ["It offers only vegetarian dishes", "It changes every day", "It was created by a famous chef", "It includes dishes from many countries"], a: 1, e: "主廚說 the menu changes daily → 菜單每天換。菜單雖由主廚設計，但沒說他有名。" },
      { q: "What does Mr. Bianchi suggest?", o: ["Returning next week", "Interviewing some fishermen", "Coming by on a particular afternoon", "Opening the restaurant earlier"], a: 2, e: "老闆說 Wednesday afternoons are best → 建議某個特定的下午來拍照。" },
    ],
  },
  {
    lines: [
      ["W", "Hi, I'm calling about the sofa that was delivered to my apartment this morning. I ordered it in dark gray, but the one I received is light blue."],
      ["M", "I'm very sorry about that. Can you give me your order number?"],
      ["W", "Sure, it's four eight two six. The delivery workers had already left by the time I unwrapped it."],
      ["M", "OK, I see the problem. The dark gray model is out of stock right now, and we're expecting more in about three weeks. If you'd like, we can pick up the blue one and give you a full refund."],
      ["W", "Well, my in-laws are visiting next weekend."],
      ["M", "I understand. Then you're welcome to keep the blue one until the gray one arrives. We'll switch them at no charge."],
    ],
    qs: [
      { q: "Why is the woman calling?", o: ["To schedule a delivery", "To report that she received the wrong item", "To complain about some damage", "To ask about a refund policy"], a: 1, e: "她訂深灰色，收到的是淺藍色 → 收到錯的商品。refund 是客服後來提出的方案。" },
      { q: "What does the woman imply when she says, \"my in-laws are visiting next weekend\"?", o: ["She needs to reschedule the delivery", "She wants to order a second sofa", "She will not be at home", "She does not want to be without a sofa"], a: 3, e: "客服提議先把藍色沙發收回，她說下週末公婆要來 → 暗示這段時間不能沒有沙發。客服因此讓她先留著。" },
      { q: "What does the man offer to do?", o: ["Lower the price", "Exchange the item later", "Send a different model", "Deliver the sofa next weekend"], a: 1, e: "他說灰色到貨後 We'll switch them at no charge → 之後免費換貨。" },
    ],
  },
  {
    lines: [
      ["W", "Thanks for joining me. Here are the results of the survey about our team-building day. As you can see, the most popular choice was the cooking class."],
      ["M", "Unfortunately, I called the cooking school yesterday, and they can only take groups of up to twenty people. There are thirty-five of us."],
      ["W2", "What about the second choice, then? I know a good place downtown, and they have room for large groups."],
      ["W", "That one costs about the same per person as the cooking class, so it fits our budget. Let's go with it."],
      ["M", "I'll make the reservation. Should I also arrange a bus to get everyone there?"],
      ["W2", "That's not necessary. It's only a five-minute walk from the office."],
    ],
    graphic: { kind: "bars", title: "Team-Building Day Survey Results (votes)", unit: "", items: [["Cooking class", 14], ["Escape room", 11], ["Bowling", 7], ["Hiking trip", 3]] },
    qs: [
      { q: "What is the problem with the cooking class?", o: ["It is too expensive", "It cannot accommodate the whole team", "It is fully booked on the chosen date", "It is too far from the office"], a: 1, e: "料理教室最多只收二十人，他們有三十五人 → 容納不下整個團隊。費用其實跟另一個選項差不多。" },
      { q: "Look at the graphic. Which activity will the team most likely do?", o: ["Cooking class", "Escape room", "Bowling", "Hiking trip"], a: 1, e: "料理教室不行，改選 the second choice → 圖中票數第二高的是 Escape room。" },
      { q: "Why is a bus not needed?", o: ["Employees will drive their own cars", "The event will be held in the office", "The location is within walking distance", "The company has its own van"], a: 2, e: "第二位女子說 only a five-minute walk from the office → 走路就到。" },
    ],
  },
]);
