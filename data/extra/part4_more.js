// Part 4 追加練習：12 段獨白
window.PART4.push(...[
  {
    kind: "voicemail", speaker: "W",
    text: "Hello, Mr. Haddad. This is Fiona Clarke from Sterling Print and Copy, calling about your order of two thousand brochures. I'm afraid there's a problem with the paper you selected. Our supplier has just told us that the matte cream paper is out of stock until the end of the month. However, we do have a glossy white paper of the same weight, and we can use it at no extra charge. I've already printed a sample page on it, and honestly, the colors look even brighter. I know you have a trade show on Saturday. If you approve the change by three o'clock this afternoon, we can still deliver the brochures on Friday morning. You can reply to the e-mail I sent you with the sample photo, or simply call me back at 555-0148. Thank you.",
    qs: [
      { q: "What type of business does the speaker work for?", o: ["A paper manufacturer","A printing company","An event planning firm","A shipping company"], a: 1, e: "說話者來自 Sterling Print and Copy，打來談宣傳手冊的印刷訂單，所以是印刷公司。提到 paper 和 supplier，但她不是造紙商。" },
      { q: "What problem does the speaker mention?", o: ["A delivery truck has broken down.","Some colors were printed incorrectly.","A price has increased.","A material is not available."], a: 3, e: "the matte cream paper is out of stock，客戶選的紙缺貨，也就是材料無法取得。改用的紙 at no extra charge，所以價格沒有上漲。" },
      { q: "Why does the speaker say, \"I know you have a trade show on Saturday\"?", o: ["To explain why a decision is needed soon","To suggest attending a different event","To ask for an invitation to an event","To apologize for missing a meeting"], a: 0, e: "她接著說要在今天下午三點前同意，才能趕在星期五送達，提商展是在強調客戶需要盡快做決定。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Good afternoon, shoppers, and thank you for visiting Maxwell Department Store. As part of our twentieth anniversary celebration, we are holding a one-day shoe sale, with all boots and sneakers marked down by thirty percent. Because we expect large crowds, the sale is not taking place in our regular shoe department. Instead, it is being held on the same floor as our home goods department, right next to the café. Also, any customer who spends more than fifty dollars today can pick up a free canvas tote bag at the customer service desk on the first floor. Just show your receipt to a staff member. Supplies are limited, so please don't wait too long. Thank you for shopping with us, and enjoy the rest of your day.",
    graphic: {"kind":"table","title":"Maxwell Department Store Directory","headers":["Floor","Departments"],"rows":[["Floor 1","Cosmetics, Customer Service"],["Floor 2","Women's Clothing"],["Floor 3","Shoes, Men's Clothing"],["Floor 4","Home Goods, Café"]]},
    qs: [
      { q: "What is the store celebrating?", o: ["A grand opening","A remodeled entrance","An anniversary","A holiday season"], a: 2, e: "As part of our twentieth anniversary celebration，是二十週年慶。不是新開幕。" },
      { q: "Look at the graphic. Which floor should listeners go to for the shoe sale?", o: ["Floor 1","Floor 2","Floor 3","Floor 4"], a: 3, e: "特賣不在平常的鞋區，而是在 home goods 部門同一層、咖啡廳旁邊；看樓層表是四樓。三樓是平常的鞋區，是陷阱。" },
      { q: "How can customers receive a free gift?", o: ["By signing up for a membership card","By spending over a certain amount","By completing a survey","By purchasing a pair of boots"], a: 1, e: "any customer who spends more than fifty dollars today 就能領免費托特包，也就是消費超過一定金額。買靴子只是特賣商品，不是贈品條件。" }
    ]
  },
  {
    kind: "advertisement", speaker: "W",
    text: "Are you a small business owner who spends hours every month sorting receipts and preparing invoices? With LedgerLeaf, you can manage all of your bookkeeping from a single screen. Simply take a photo of a receipt with your phone, and LedgerLeaf will record the amount and category automatically. You can also create professional invoices in seconds and send them directly to your clients. Over fifteen thousand businesses already use LedgerLeaf, and most of them say it saves them at least five hours a week. For a limited time, new customers can try the full version free for sixty days, with no credit card required. To get started, visit our Web site and enter the code SPRING when you sign up. LedgerLeaf. Less paperwork, more business.",
    qs: [
      { q: "What is being advertised?", o: ["A bookkeeping software program","A financial consulting service","A smartphone camera","An office supply store"], a: 0, e: "廣告說 manage all of your bookkeeping from a single screen，是記帳軟體。雖然提到用手機拍照，但賣的不是手機相機。" },
      { q: "According to the speaker, what can users do with a phone?", o: ["Pay their employees","Contact a support team","Record receipts","Track deliveries"], a: 2, e: "take a photo of a receipt with your phone，軟體會自動記錄金額與類別，所以是用手機記錄收據。" },
      { q: "What is offered for a limited time?", o: ["A free trial period","A discount on phones","A free training session","A gift card"], a: 0, e: "For a limited time, new customers can try the full version free for sixty days，是六十天免費試用。" }
    ]
  },
  {
    kind: "news", speaker: "M",
    text: "This is Kenji Morita with your local business report. Norvale Foods, the maker of frozen pizzas and snacks, announced today that it will build a new production plant in the town of Ashford. The company plans to hire about three hundred workers when the plant opens next fall. And that's in a town of just twelve thousand people. Norvale's chief executive, Sandra Pike, said the company chose Ashford because of its location near the highway and the local government's support for new businesses. Construction is scheduled to begin in March. Norvale will hold a job fair at the Ashford Community Center on April fifth for anyone interested in positions in production, maintenance, and shipping. Details are available on the company's Web site. Coming up next, we'll have a look at this weekend's weather.",
    qs: [
      { q: "What does Norvale Foods plan to do?", o: ["Open a new facility","Merge with another company","Launch a new product line","Move its headquarters"], a: 0, e: "it will build a new production plant，要蓋新工廠，換句話說就是 open a new facility。沒有提到搬總部或推新產品。" },
      { q: "Why does the speaker say, \"And that's in a town of just twelve thousand people\"?", o: ["To explain why construction was delayed","To point out that housing is limited","To correct an earlier report","To stress how significant the hiring is"], a: 3, e: "前一句說要雇用三百人，再補充小鎮只有一萬兩千人，是在強調這次招募對當地影響很大。" },
      { q: "What will happen on April fifth?", o: ["Construction will begin.","A job fair will take place.","A plant will open.","A town meeting will be held."], a: 1, e: "四月五日在社區中心舉辦 job fair。三月是開工，明年秋天是工廠啟用，都是時間陷阱。" }
    ]
  },
  {
    kind: "broadcast", speaker: "W",
    text: "Good morning, this is Rachel Dunn with the WKRB traffic report. It's a busy Monday on the roads. A delivery truck has broken down on the route with the longest delays right now, and two lanes are blocked while crews work to move it. Police expect the lanes to reopen by around nine o'clock. If you're heading downtown, the Elm Tunnel is moving smoothly, so that's your best option this morning. Also, a reminder that the city marathon takes place this Sunday, and several streets near Central Park will be closed from six A.M. until two P.M. A full list of closed streets is posted on our Web site. I'll be back with another update in twenty minutes. Now, here's Tom with the weather.",
    graphic: {"kind":"bars","title":"Current Travel Delays","unit":"min","items":[["Route 9",12],["Harbor Bridge",35],["Elm Tunnel",8],["Coastal Highway",20]]},
    qs: [
      { q: "Look at the graphic. Where is the truck that has broken down?", o: ["Route 9","Harbor Bridge","Elm Tunnel","Coastal Highway"], a: 1, e: "貨車拋錨在 the route with the longest delays，看長條圖延誤最久的是 35 分鐘的 Harbor Bridge。Elm Tunnel 是她推薦的順暢路線。" },
      { q: "What will happen on Sunday?", o: ["A park will be renovated.","A parade will take place.","A new road will open.","A sports event will be held."], a: 3, e: "the city marathon takes place this Sunday，馬拉松是體育活動。中央公園只是封路的地點，不是要整修。" },
      { q: "What will the speaker do in twenty minutes?", o: ["Interview a police officer","Report on the weather","Give another traffic update","Post a list online"], a: 2, e: "I'll be back with another update in twenty minutes，二十分鐘後再報路況。天氣是由 Tom 報告。" }
    ]
  },
  {
    kind: "tour", speaker: "M",
    text: "Welcome to Rosewood Botanical Gardens. I'm Oliver, and I'll be leading your tour this morning. We'll start here in the rose garden, which has over two hundred varieties from around the world. After that, we'll walk through the tropical greenhouse, where it can get quite warm, so you may want to leave your jackets on the coat rack by the entrance. The whole tour takes about ninety minutes. Please stay on the marked paths, and remember that picking flowers is not permitted. At the end of the tour, we'll stop at the gift shop, where you can buy seeds of many of the plants you'll see today. Oh, and if you show your ticket at the café, you'll receive ten percent off any drink. Okay, let's get started.",
    qs: [
      { q: "Where is the tour taking place?", o: ["At a flower shop","At a farm","At a botanical garden","At a nature museum"], a: 2, e: "開頭就說 Welcome to Rosewood Botanical Gardens，地點是植物園。" },
      { q: "Why does the speaker suggest leaving jackets by the entrance?", o: ["A greenhouse will be warm.","Jackets are not allowed in the gift shop.","The tour includes a lot of walking.","The coat rack is free to use."], a: 0, e: "熱帶溫室 can get quite warm，所以建議把外套留在入口。" },
      { q: "How can listeners get a discount?", o: ["By buying seeds","By joining a membership program","By taking a survey","By showing a ticket"], a: 3, e: "show your ticket at the café 就能享飲料九折。買種子是禮品店的商品，不是折扣條件。" }
    ]
  },
  {
    kind: "meeting", speaker: "W",
    text: "Okay, everyone, let's get started. As you know, we've been collecting guest feedback since the lobby renovation was completed in June. Most of the comments have been very positive, especially about the new check-in area. But I want to talk about breakfast. Several guests have written that the line at the breakfast buffet gets very long between seven and eight. One guest said he waited twenty minutes for an omelet. Twenty minutes. So starting next Monday, we're going to open a second cooking station during those busy hours. Marco, I'd like you to work with the kitchen team to put together a staff schedule for that. And I'll ask the front desk to tell guests that breakfast is less crowded after eight thirty. Let's check how things are going at our next meeting.",
    qs: [
      { q: "Where most likely do the listeners work?", o: ["At a restaurant","At a hotel","At a renovation company","At a travel agency"], a: 1, e: "談到 guest feedback、lobby、check-in area 和 front desk，這些都是飯店用語。有早餐和廚房，但不只是餐廳。" },
      { q: "Why does the speaker say, \"Twenty minutes\"?", o: ["To emphasize that a wait was too long","To correct a guest's comment","To announce the length of a break","To suggest a new cooking time"], a: 0, e: "她重複住客等了二十分鐘這件事，是在強調等待時間太長，接著才提出增開烹調檯的解決辦法。" },
      { q: "What is Marco asked to do?", o: ["Contact some guests","Order more ingredients","Prepare a work schedule","Update a menu"], a: 2, e: "work with the kitchen team to put together a staff schedule，請 Marco 排班表。通知住客是櫃台的工作。" }
    ]
  },
  {
    kind: "talk", speaker: "M",
    text: "Thank you for inviting me to speak at your company's health week. Last month, your human resources team asked all of you how you usually spend your lunch break, and I've put the results up on the screen. I'm happy to see that some of you go outside for a walk. But what concerns me is the answer chosen by just over a quarter of you. Research shows that people who take a real break in the middle of the day have better concentration in the afternoon and make fewer mistakes. So today, I'm going to share five simple habits that can help you rest and recharge, even on your busiest days. Before I begin, please take one of the handouts being passed around. It has space for you to write notes, and my contact information is on the back.",
    graphic: {"kind":"bars","title":"How Employees Spend Their Lunch Break","unit":"%","items":[["Eating at desk",41],["Going out to eat",22],["Working through lunch",27],["Taking a walk",10]]},
    qs: [
      { q: "Who most likely is the speaker?", o: ["A human resources manager","A health expert","A restaurant owner","A company president"], a: 1, e: "他受邀在公司健康週演講，引用研究並分享休息習慣，是健康專家。調查是人資團隊做的，但他不是人資。" },
      { q: "Look at the graphic. Which answer does the speaker say concerns him?", o: ["Eating at desk","Going out to eat","Working through lunch","Taking a walk"], a: 2, e: "他擔心 the answer chosen by just over a quarter of you，略多於四分之一約 25%，看圖是 27% 的 Working through lunch。散步是他高興看到的答案。" },
      { q: "What are listeners asked to do?", o: ["Fill out a survey","Go outside for a walk","Write down a phone number","Take a handout"], a: 3, e: "please take one of the handouts being passed around，請大家拿講義。聯絡方式印在講義背面，不需要抄電話。" }
    ]
  },
  {
    kind: "introduction", speaker: "W",
    text: "Good morning, everyone. Thanks for joining this short meeting before we open the branch. I'd like to introduce Mr. Tomas Varga, who will be our new branch manager starting today. Tomas has worked in banking for fifteen years, most recently at our Westfield branch, where he helped increase new customer accounts by forty percent. He also led the team that designed our current training program for tellers, so many of you have probably used his materials already. Over the next two weeks, Tomas will be meeting with each of you individually to hear your ideas about how we can improve customer service. Please check your e-mail later today for a meeting time. Now, Tomas, would you like to say a few words?",
    qs: [
      { q: "Who is Tomas Varga?", o: ["A training instructor","A bank customer","A software designer","A new branch manager"], a: 3, e: "who will be our new branch manager starting today，他是新任分行經理。他設計過訓練課程，但身分不是講師。" },
      { q: "What did Mr. Varga do at the Westfield branch?", o: ["He opened a new office.","He hired several tellers.","He increased the number of new accounts.","He reduced operating costs."], a: 2, e: "at our Westfield branch, where he helped increase new customer accounts by forty percent，新開戶數增加了。" },
      { q: "What will listeners receive by e-mail?", o: ["A training manual","A customer survey","A revised work schedule","A meeting time"], a: 3, e: "check your e-mail later today for a meeting time，會收到個別面談的時間。訓練教材是以前就用過的東西。" }
    ]
  },
  {
    kind: "instructions", speaker: "M",
    text: "Good morning, and thank you all for volunteering at the Oakdale Library book sale. Here's how today will work. Everyone on the morning shift will begin by sorting the donated books into categories, such as fiction, history, and children's books. After lunch, you'll move to the station listed right after that one on your sheet. Please make sure each book has a price sticker before it goes on a table. Hardcover books are two dollars, and paperbacks are one dollar. If a customer asks about a book that's not on the tables, please send them to the information desk. Lunch will be provided in the staff room at noon. And before you leave this afternoon, don't forget to return your name badge to me so we can use it again next year.",
    graphic: {"kind":"list","title":"Volunteer Stations","items":["Station 1: Registration","Station 2: Sorting Donations","Station 3: Cashier","Station 4: Parking Assistance"]},
    qs: [
      { q: "Who most likely are the listeners?", o: ["Library employees","Bookstore owners","Volunteers","Authors"], a: 2, e: "thank you all for volunteering，聽眾是志工。活動在圖書館舉辦，但他們不是圖書館員工。" },
      { q: "Look at the graphic. Where will morning volunteers work after lunch?", o: ["Station 1","Station 2","Station 3","Station 4"], a: 2, e: "早班先做書籍分類，也就是 Station 2；午餐後移到緊接在後的站，看清單是 Station 3 的收銀。" },
      { q: "What are listeners asked to do before leaving?", o: ["Return a name badge","Sign a time sheet","Clean the staff room","Put away the tables"], a: 0, e: "before you leave ... return your name badge to me，離開前要歸還名牌。員工休息室是吃午餐的地方。" }
    ]
  },
  {
    kind: "voicemail", speaker: "W",
    text: "Hi, this message is for Mr. Lindqvist. This is Grace from Hartwell Furniture, calling about the dining table and six chairs you ordered last week. The table arrived at our warehouse yesterday, but unfortunately the chairs are coming from a different supplier and won't be here until the twentieth. We can either deliver the table now and bring the chairs later, or deliver everything together after the twentieth. If you choose two separate deliveries, there won't be any extra delivery fee. Just let us know which option you prefer. Also, since you mentioned that your building has a narrow staircase, our team will bring the tools to assemble the table in your apartment. Please call me back at 555-0173 before Friday. Thank you.",
    qs: [
      { q: "Why is the speaker calling?", o: ["To confirm a payment","To discuss a delivery","To apologize for a damaged item","To recommend a product"], a: 1, e: "椅子晚到，她提供先送餐桌或一起送兩個選項，主要是在討論送貨安排。" },
      { q: "What does the speaker say about the second delivery?", o: ["It will be free of charge.","It must be scheduled on a weekend.","It requires a signature.","It will include a discount on chairs."], a: 0, e: "there won't be any extra delivery fee，分兩次送也不加收運費，等於第二次送貨免費。" },
      { q: "Why will the delivery team bring tools?", o: ["Some chairs need repairs.","The building has an elevator problem.","The customer requested shelves.","The table has to be assembled on site."], a: 3, e: "因為樓梯很窄，團隊會帶工具 to assemble the table in your apartment，在現場組裝。問題是樓梯窄，不是電梯故障。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Attention, all conference attendees. This is an announcement from the organizers of the Global Retail Innovation Conference. Due to high demand, this afternoon's session on online marketing has been moved from Meeting Room Three to the main hall, which can hold over five hundred people. The session will still begin at two o'clock. We'd also like to remind you that lunch is being served on the second floor until one thirty. If you'd like to receive a certificate of attendance, please scan the code on your name badge at the registration desk before you leave today. Finally, the conference app now includes a survey about this year's event. Everyone who completes it will be entered into a drawing for a free pass to next year's conference. Thank you.",
    qs: [
      { q: "Why has a session been moved?", o: ["A room is being repaired.","Many people want to attend.","A speaker arrived late.","The equipment is not working."], a: 1, e: "Due to high demand，想參加的人很多，所以移到可容納五百多人的主廳。" },
      { q: "What should listeners do to get a certificate?", o: ["Attend every session","Scan a code on a badge","Download an application","Speak to a session leader"], a: 1, e: "scan the code on your name badge at the registration desk，掃描名牌上的條碼。app 是填問卷用的，不是拿證明。" },
      { q: "What can survey participants win?", o: ["A conference pass","A meal voucher","A free book","A gift certificate"], a: 0, e: "完成問卷可參加抽獎，獎品是 a free pass to next year's conference，明年大會的入場證。" }
    ]
  }
]);
