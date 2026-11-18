// 模擬考 2：Part 4 獨白（Questions 71–100），10 組 × 3 題。最後兩組為看圖題。
window.MOCK2 = window.MOCK2 || {};
window.MOCK2.part4 = [
  {
    kind: "voicemail", speaker: "W",
    text: "Hello, Mr. Okada. This is Julia Brandt from Clearview Portrait Studio. I'm calling to confirm the employee photo session at your office next Tuesday. My assistant and I will arrive at eight thirty to set up, and we'll start taking photos at nine. We'll need a room with a plain, light-colored wall, so a small meeting room would be perfect. Also, could you e-mail me a list of the employees who'll be photographed? That way, we can label the files correctly. Finally, please remind your staff to wear solid colors. Stripes and busy patterns don't look good in close-up photos. If you have any questions, you can reach me at 555-0148. Thanks!",
    qs: [
      { q: "Why is the speaker calling?", o: ["To cancel an order", "To request a payment", "To confirm an appointment", "To apply for a job"], a: 2, e: "I'm calling to confirm the employee photo session → 確認下週二的拍照行程。" },
      { q: "What does the speaker say she will need?", o: ["A room with a plain wall", "A parking space", "Some extra lights", "A signed contract"], a: 0, e: "We'll need a room with a plain, light-colored wall → 一間有素色牆面的房間。" },
      { q: "What should employees do?", o: ["Arrive at eight thirty", "Bring a photo ID", "Choose a background", "Wear clothes without patterns"], a: 3, e: "remind your staff to wear solid colors. Stripes and busy patterns don't look good → 穿素色、沒有花紋的衣服。八點半到的是攝影師自己。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Good afternoon, and thank you for visiting Greenhill Zoo. We'd like to let you know about a change to this afternoon's schedule. The penguin feeding, which was scheduled for two o'clock, will now take place at three. Our keepers are draining and cleaning the penguin pool, and that work is taking a little longer than expected. We apologize for the inconvenience. In the meantime, why not visit our new reptile house near the north entrance? It opened just last week. And don't forget, if you show your admission ticket at the gift shop today, you'll receive fifteen percent off any purchase. The zoo closes at six o'clock. Enjoy the rest of your visit.",
    qs: [
      { q: "Where is the announcement being made?", o: ["At a farm", "At a zoo", "At a museum", "At a sports stadium"], a: 1, e: "thank you for visiting Greenhill Zoo → 在動物園。" },
      { q: "Why has an event been rescheduled?", o: ["Bad weather is expected.", "A staff member is absent.", "Some animals are sick.", "An area is being cleaned."], a: 3, e: "Our keepers are draining and cleaning the penguin pool → 企鵝池正在清理，所以餵食延後一小時。" },
      { q: "What can listeners receive at the gift shop?", o: ["A discount", "A free map", "A souvenir photo", "A ticket for a show"], a: 0, e: "show your admission ticket at the gift shop... fifteen percent off → 出示門票可打八五折。" }
    ]
  },
  {
    kind: "advertisement", speaker: "W",
    text: "Tired of working from your kitchen table? Need a professional place to meet clients? Then come to Hive Commons, the shared workspace in the heart of the Riverside district. For just one hundred ninety dollars a month, members get a desk in our bright, quiet work area, high-speed internet, and unlimited coffee. Your membership also includes ten hours a month in our private meeting rooms, which are perfect for client meetings and video calls. Printing and mailing services are also available for a small extra fee. Not sure it's right for you? Try us out for a full week at no cost. Just visit our Web site and enter the code HIVE WEEK when you sign up.",
    qs: [
      { q: "What is being advertised?", o: ["A furniture store", "A moving service", "An office supply company", "A shared workspace"], a: 3, e: "Hive Commons, the shared workspace → 共享辦公空間。kitchen table 只是開場的情境。" },
      { q: "What does the speaker say is included in the membership?", o: ["Free parking", "Daily lunch", "Use of meeting rooms", "Printing services"], a: 2, e: "Your membership also includes ten hours a month in our private meeting rooms → 會議室使用時數。印刷要另外付費，是陷阱。" },
      { q: "How can listeners get a free trial?", o: ["By calling a number", "By signing up online", "By referring a friend", "By attending an event"], a: 1, e: "Try us out for a full week at no cost. Just visit our Web site and enter the code → 上網用代碼註冊。" }
    ]
  },
  {
    kind: "news", speaker: "M",
    text: "In local news, the city of Westbury will launch a bike-share program next month. Forty stations will be placed around the downtown area, and riders will be able to rent a bicycle with a smartphone app. The first thirty minutes of each ride will be free, and longer rides will cost one dollar for every additional half hour. City council member Ana Ruiz says the goal is to reduce the number of cars downtown. Now, if you've ever tried to find parking downtown on a Saturday, you'll understand why. The city plans to add another twenty stations in June, once it has collected data on which locations are the most popular.",
    qs: [
      { q: "What is the news report mainly about?", o: ["A new transportation program", "A road construction project", "A parking fee increase", "A cycling competition"], a: 0, e: "the city of Westbury will launch a bike-share program → 新的公共自行車計畫。" },
      { q: "Why does the speaker say, \"if you've ever tried to find parking downtown on a Saturday, you'll understand why\"?", o: ["To warn about a traffic delay", "To explain why the program is needed", "To announce a change to parking rules", "To recommend taking the train"], a: 1, e: "前一句說目標是減少市中心的車輛，接著提到週六很難找車位 → 說明為什麼需要這個計畫。並沒有宣布停車規定改變。" },
      { q: "According to the speaker, what will happen in June?", o: ["Fees will be lowered.", "A survey will be conducted.", "More stations will be added.", "A council member will be elected."], a: 2, e: "The city plans to add another twenty stations in June → 增設站點。收集資料是增設的依據，不是問卷調查。" }
    ]
  },
  {
    kind: "tour", speaker: "W",
    text: "Welcome to Misty Ridge Tea Estate. My name is Grace, and I'll be your guide this morning. We'll begin by walking through the tea fields on the hillside behind me, where you'll see our workers picking fresh leaves by hand. Feel free to touch the leaves and smell them as we go. After that, we'll visit the drying room, where the leaves are processed. Please note that photographs are not allowed in the drying room, because the camera flashes disturb our workers. Then, at the end of the tour, we'll head to the tasting room, where you can sample five of our teas. They're also available for purchase there. All right, let's get started.",
    qs: [
      { q: "Where most likely are the listeners?", o: ["At a coffee shop", "At a museum", "At a tea farm", "At a flower market"], a: 2, e: "Welcome to Misty Ridge Tea Estate... tea fields → 在茶園。" },
      { q: "What are listeners asked not to do in the drying room?", o: ["Eat any food", "Leave the group", "Touch the leaves", "Take photographs"], a: 3, e: "photographs are not allowed in the drying room → 不能拍照。導遊反而說可以摸茶葉，是陷阱。" },
      { q: "What will happen at the end of the tour?", o: ["Listeners will receive a gift.", "Listeners will taste some products.", "A video will be shown.", "A bus will arrive."], a: 1, e: "at the end of the tour... the tasting room, where you can sample five of our teas → 試喝茶。茶葉是可以購買，不是贈送。" }
    ]
  },
  {
    kind: "meeting", speaker: "M",
    text: "OK, everyone, before we finish, I want to talk about customer support. As you know, we released version four of our accounting software on Monday, and the number of support requests has nearly doubled. Most of the questions are about the new invoice feature. Now, some of you have suggested that we simply wait for things to calm down. Well, I've seen the support inbox this morning. So here's what we'll do. Starting tomorrow, members of the product team will spend two hours a day helping to answer customer e-mails. Also, Rita is writing a step-by-step guide to the invoice feature, which we'll post on our help page by Friday. That should answer many common questions before customers even contact us.",
    qs: [
      { q: "What happened on Monday?", o: ["A new employee started.", "A software update was released.", "A help page was redesigned.", "A customer survey was sent."], a: 1, e: "we released version four of our accounting software on Monday → 推出軟體新版本。" },
      { q: "What does the speaker imply when he says, \"I've seen the support inbox this morning\"?", o: ["Waiting is not a good option.", "He has answered all the e-mails.", "The inbox is not working properly.", "Customers are satisfied with the update."], a: 0, e: "有人建議等情況自己平息，他說「我今早看過客服信箱了」，接著宣布具體對策 → 暗示信件太多，不能只是等待。" },
      { q: "What will be posted by Friday?", o: ["A job advertisement", "A revised schedule", "A product price list", "An instruction guide"], a: 3, e: "Rita is writing a step-by-step guide... post on our help page by Friday → 操作說明。" }
    ]
  },
  {
    kind: "instructions", speaker: "W",
    text: "Good morning, and thanks for helping out at the registration desk for this year's Home and Garden Expo. The doors open at nine, and we're expecting a big crowd. Here's how check-in works. When visitors arrive, scan the code on their phone or printed ticket with your tablet, and the tablet will print a name badge automatically. If the scanner doesn't work for some reason, don't send people to another line. Just type in the confirmation number by hand. It's printed right under the code. Exhibitors and members of the press have their own desk by the east doors, so please direct them there. Finally, starting at noon, we'll take lunch breaks in shifts of thirty minutes. I'll post the schedule behind the desk.",
    qs: [
      { q: "Who most likely are the listeners?", o: ["Exhibitors", "Journalists", "Security guards", "Registration staff"], a: 3, e: "thanks for helping out at the registration desk → 報到櫃台的工作人員。參展商與記者另有櫃台，是陷阱。" },
      { q: "What should listeners do if a scanner does not work?", o: ["Call a technician", "Restart the tablet", "Enter a number by hand", "Send visitors to another desk"], a: 2, e: "If the scanner doesn't work... Just type in the confirmation number by hand → 手動輸入確認碼。她特別說不要叫人去別的隊伍。" },
      { q: "According to the speaker, what will happen at noon?", o: ["Breaks will begin in shifts.", "The doors will close.", "A speech will start.", "New tablets will arrive."], a: 0, e: "starting at noon, we'll take lunch breaks in shifts → 中午開始輪流休息。" }
    ]
  },
  {
    kind: "introduction", speaker: "M",
    text: "Good evening, and welcome to the final session of our Small Business Growth series. I'm very pleased to introduce tonight's speaker, Danielle Osei. Eight years ago, Danielle started with a single food truck selling West African dishes. Today, she owns four restaurants across the region, and her company employs more than ninety people. Danielle tells me that she spent almost nothing on traditional advertising. Instead, she built her customer base entirely through social media, and that's what she'll be focusing on tonight. She'll share the methods that worked for her, and some that didn't. After her talk, Danielle will be signing copies of her new book, Rolling Start, at the table near the exit. Please join me in welcoming Danielle Osei.",
    qs: [
      { q: "Who is Danielle Osei?", o: ["A business owner", "A city official", "A journalist", "A cooking teacher"], a: 0, e: "從一台餐車起家，現在擁有四家餐廳 → 企業經營者。" },
      { q: "What will Ms. Osei mainly talk about?", o: ["Finding investors", "Using social media", "Designing menus", "Hiring staff"], a: 1, e: "she built her customer base entirely through social media, and that's what she'll be focusing on tonight → 社群媒體行銷。" },
      { q: "What are listeners invited to do after the talk?", o: ["Visit a food truck", "Complete a survey", "Have a book signed", "Join a mailing list"], a: 2, e: "Danielle will be signing copies of her new book → 請她在書上簽名。" }
    ]
  },
  {
    kind: "broadcast", speaker: "W",
    text: "You're listening to Lakeshore Radio, and this is Megan Cho with some community news. If you were planning to go to the Harbor Food Festival this Saturday, you'll want to hear this. With heavy rain in the forecast, the organizers have decided to postpone the festival. They've announced that it will now take place on the first day after Saturday when sunny skies are expected. Since many of the food stalls are outdoors without any cover, the organizers want to give vendors and visitors the best possible conditions. Tickets that have already been purchased will be valid on the new date. But if you can't make it, you can request a refund on the festival Web site until the end of the month.",
    graphic: { kind: "table", title: "Lakeshore Weather Forecast", headers: ["Day", "Forecast"], rows: [["Saturday", "Heavy rain"], ["Sunday", "Cloudy and windy"], ["Monday", "Sunny"], ["Tuesday", "Sunny"]] },
    qs: [
      { q: "What is the broadcast mainly about?", o: ["A road closure", "A restaurant opening", "A change to an event", "A sports result"], a: 2, e: "Harbor Food Festival 因下雨延期 → 活動異動。" },
      { q: "Look at the graphic. On which day will the festival most likely be held?", o: ["Friday", "Saturday", "Sunday", "Monday"], a: 3, e: "延到「週六之後第一個晴天」→ 週日是多雲有風，週一才是晴天，所以是 Monday。直接選隔天週日是陷阱。" },
      { q: "What does the speaker say listeners can do on the festival Web site?", o: ["Vote for a vendor", "Request a refund", "Check parking information", "Sign up as a volunteer"], a: 1, e: "if you can't make it, you can request a refund on the festival Web site → 申請退款。" }
    ]
  },
  {
    kind: "talk", speaker: "M",
    text: "Good morning, and welcome to today's training for our sales representatives. My name is Tomas Lund, and I'll be leading the session on handling difficult clients. If you look at your agenda, you'll see that I'm supposed to speak later this morning. However, Ms. Abara's flight from Chicago was delayed last night, so she'll be arriving a little late. That means the two of us have simply switched places. Everything else on the agenda will stay the same. Now, before we begin, I'd like each of you to take one of the cards on your table and write down a difficult situation you've had with a client. Don't write any names. We'll use your examples during the role-play practice this afternoon.",
    graphic: { kind: "table", title: "Sales Training Agenda", headers: ["Time", "Session"], rows: [["9:00 A.M.", "Welcome"], ["9:30 A.M.", "Negotiation Basics: Ms. Abara"], ["11:00 A.M.", "Handling Difficult Clients: Mr. Lund"], ["1:00 P.M.", "Role-Play Practice"], ["3:00 P.M.", "Closing Remarks"]] },
    qs: [
      { q: "Who most likely are the listeners?", o: ["Sales representatives", "Flight attendants", "Travel agents", "Human resources managers"], a: 0, e: "welcome to today's training for our sales representatives → 業務代表。flight 只是講者延誤的原因。" },
      { q: "Look at the graphic. What time will Ms. Abara's session most likely begin?", o: ["9:30 A.M.", "11:00 A.M.", "1:00 P.M.", "3:00 P.M."], a: 1, e: "Abara 的班機延誤，所以兩位講者「互換時段」→ 她改到原本 Mr. Lund 的 11:00。照議程選 9:30 是陷阱。" },
      { q: "What does the speaker ask the listeners to do?", o: ["Write about a past experience", "Form small groups", "Read a handout", "Introduce themselves"], a: 0, e: "write down a difficult situation you've had with a client → 寫下過去和客戶相處的困難經驗。" }
    ]
  }
];
