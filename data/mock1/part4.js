// 模擬考 1：Part 4 獨白（Questions 71–100），10 組 × 3 題。最後兩組為看圖題。
window.MOCK1 = window.MOCK1 || {};
window.MOCK1.part4 = [
  {
    kind: "voicemail", speaker: "W",
    text: "Hi, Mr. Delgado. This is Hannah Price from Crestwood Catering. I'm calling about the lunch order for your company's product launch on the fifteenth. You requested vegetarian sandwiches for all eighty guests, but our supplier just informed us that one of the main ingredients, the grilled eggplant, won't be available that week. We can easily substitute roasted mushrooms, which many of our clients actually prefer, and there'd be no change in price. Alternatively, we could switch to a pasta salad, although that would add about two dollars per person. I'd need your decision by Wednesday afternoon so that we can place the order with our supplier in time. You can reach me directly at 555-0163. Thanks, and I look forward to hearing from you.",
    qs: [
      { q: "Where does the speaker most likely work?", o: ["At a grocery store", "At a food service company", "At a farm", "At an event venue"], a: 1, e: "說話者來自 Crestwood Catering，catering 是外燴公司，改寫成 food service company。supplier 會讓人聯想到農場或超市，是陷阱。" },
      { q: "What problem does the speaker mention?", o: ["An order was delivered late.", "A price has gone up.", "The number of guests has changed.", "An ingredient is unavailable."], a: 3, e: "供應商通知 the grilled eggplant won't be available，有一項食材拿不到。加價只發生在改成義大利麵沙拉的情況，並不是問題本身。" },
      { q: "What does the speaker need the listener to do by Wednesday?", o: ["Make a choice", "Confirm a guest count", "Pay a deposit", "Visit a supplier"], a: 0, e: "I'd need your decision by Wednesday afternoon，要對方在香菇與義大利麵沙拉之間做決定。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Good morning, everyone. I have a quick announcement before the shift starts. As many of you know, the new packaging machine on Line Three was installed over the weekend. It can wrap nearly twice as many boxes per hour as the old one. Now, I know some of you have been asking about overtime this month. Well, with that kind of speed, we should be able to meet our holiday orders during regular hours. Starting today, the manufacturer's technician, Ms. Yoon, will be on site through Thursday to answer questions and help with any adjustments. If you operate Line Three, you'll need to complete a thirty-minute safety session with her before using the machine. The sign-up sheet is posted outside my office, so please add your name before lunch.",
    qs: [
      { q: "Where is the announcement most likely being made?", o: ["At a shipping office", "At an electronics store", "At a manufacturing plant", "At a training center"], a: 2, e: "提到輪班 shift、產線 Line Three 與包裝機，地點是工廠。雖然有 safety session，但不是訓練中心。" },
      { q: "What does the speaker imply when he says, \"with that kind of speed, we should be able to meet our holiday orders during regular hours\"?", o: ["Extra working hours will probably not be needed.", "Holiday orders have decreased this year.", "Employees will receive a holiday bonus.", "The machine will be used only during holidays."], a: 0, e: "員工在問本月會不會加班，他回答新機器速度快，正常工時就能完成訂單，言下之意是大概不需要加班。" },
      { q: "What should some listeners do before lunch?", o: ["Contact a technician", "Adjust a machine", "Submit an order form", "Sign up for a session"], a: 3, e: "操作三號線的人要上安全課程，please add your name before lunch，也就是午餐前報名。technician 是課程講師，不是要聯絡的對象。" }
    ]
  },
  {
    kind: "broadcast", speaker: "W",
    text: "This is Olivia Grant with your seven-thirty traffic update on KTRV. Drivers heading into the city on Highway 9 should expect heavy delays this morning. A truck lost part of its load near the Maple Street exit, and two of the three northbound lanes are closed while crews clear the road. Police estimate that the lanes won't reopen until at least nine o'clock. If you're commuting downtown, you may want to take the Coastal Parkway instead, which is moving smoothly right now. Also, a reminder that the Westgate Bridge will be closed this Saturday and Sunday for scheduled painting work. And for those of you taking public transit, the city is adding extra trains on the Blue Line all week to handle the increased number of riders. I'll be back with another update in fifteen minutes.",
    qs: [
      { q: "What has caused the delays on Highway 9?", o: ["Items fell from a vehicle.", "A bridge is being repaired.", "Road construction has started.", "A traffic light is broken."], a: 0, e: "A truck lost part of its load，卡車上的貨物掉落，改寫成 Items fell from a vehicle。橋梁油漆是週末的另一件事。" },
      { q: "What does the speaker recommend?", o: ["Leaving home earlier", "Taking public transportation", "Using a different road", "Avoiding the downtown area"], a: 2, e: "you may want to take the Coastal Parkway instead，建議改走另一條路。大眾運輸只提到加開列車，並不是她給開車族的建議。" },
      { q: "According to the speaker, what will happen this weekend?", o: ["Extra trains will run.", "A bridge will be closed.", "A new exit will open.", "Highway lanes will be widened."], a: 1, e: "the Westgate Bridge will be closed this Saturday and Sunday，週末封橋。加開列車是 all week，不限週末。" }
    ]
  },
  {
    kind: "advertisement", speaker: "M",
    text: "Are you tired of paying for software you barely use? At Ledgerly, we believe accounting tools should be simple and affordable for small businesses. Our cloud-based program lets you create invoices, track expenses, and prepare tax reports from any device, anywhere. Unlike other services, we don't charge extra for adding team members, so your whole staff can use it at no additional cost. And if you ever get stuck, our support specialists are available by phone seven days a week. Right now, new customers can try every feature free for sixty days, with no credit card required. That's twice as long as our usual trial period. Just visit ledgerly dot com and click Start Now. Ledgerly. Accounting made easy.",
    qs: [
      { q: "What is being advertised?", o: ["A tax consulting service", "A computer repair shop", "A business training course", "A financial software product"], a: 3, e: "Ledgerly 是雲端會計程式，可開發票、記帳、做稅務報表，屬於財務軟體。提到 tax reports 容易誤選稅務顧問。" },
      { q: "According to the speaker, what makes Ledgerly different from its competitors?", o: ["It offers in-person training.", "It does not charge for additional users.", "It can be used without the Internet.", "It includes free tax filing."], a: 1, e: "Unlike other services, we don't charge extra for adding team members，增加使用者不另外收費。它是雲端程式，所以不可能是免網路使用。" },
      { q: "What is special about the current offer?", o: ["It includes a free device.", "It is available only by phone.", "It is longer than usual.", "It requires a one-year contract."], a: 2, e: "六十天免費試用 That's twice as long as our usual trial period，比平常的試用期長一倍。電話是客服管道，不是優惠條件。" }
    ]
  },
  {
    kind: "meeting", speaker: "W",
    text: "Okay, let's get started. The main item today is the redesign of our company Web site. As you know, we hired Pixelhaus to handle the project, and they sent over their first draft yesterday. I have to say, the new layout looks much cleaner, and the product pages load a lot faster. However, several people in sales pointed out that the contact form is now hidden at the bottom of the home page. Since most of our new clients reach us through that form, it needs to be much easier to find. I'll pass that feedback along to Pixelhaus this afternoon. Now, they've asked for our final comments by Friday. I realize that's the same day as the quarterly report deadline. But this is our only chance to request changes before launch.",
    qs: [
      { q: "What is the main topic of the meeting?", o: ["A quarterly sales report", "A Web site redesign", "A new product line", "A client contract"], a: 1, e: "The main item today is the redesign of our company Web site，主題是網站改版。季報只是提到截止日相同。" },
      { q: "What concern did the sales staff raise?", o: ["A form is difficult to locate.", "Pages load too slowly.", "Product prices are incorrect.", "The design uses the wrong colors."], a: 0, e: "業務指出 the contact form is now hidden at the bottom，聯絡表單很難找到。頁面載入其實變快了，是反向陷阱。" },
      { q: "Why does the speaker say, \"this is our only chance to request changes before launch\"?", o: ["To announce that the launch has been postponed", "To explain why the report deadline was moved", "To suggest hiring a different design firm", "To stress that listeners should submit comments on time"], a: 3, e: "她知道週五同時是季報截止日，大家會很忙，但仍強調這是上線前唯一能提修改的機會，意思是一定要準時交意見。" }
    ]
  },
  {
    kind: "tour", speaker: "M",
    text: "Good evening, and welcome aboard the Harbor Lights evening cruise. I'm Felix, and I'll be pointing out some of the city's landmarks as we sail along the waterfront. In about ten minutes, we'll pass the old customs house on your left. It's now a maritime museum, and it's beautifully lit up after dark. A little later, we'll go under the Pearl Street Bridge, which is the oldest suspension bridge in the region. Since the wind can get quite strong on the upper deck, please hold on to your hats and any loose items. Blankets are available by the stairway if you get cold. Also, our snack bar on the lower level will be serving hot drinks and light snacks until nine o'clock. Now, sit back and enjoy the view.",
    qs: [
      { q: "Where most likely are the listeners?", o: ["On a bus", "In a museum", "On a boat", "On a train"], a: 2, e: "welcome aboard the evening cruise、as we sail along the waterfront，聽眾在船上。museum 是沿途經過的景點。" },
      { q: "What does the speaker say about the Pearl Street Bridge?", o: ["It was recently repainted.", "It is closed to traffic.", "It was designed by a famous architect.", "It is the oldest of its kind in the area."], a: 3, e: "the oldest suspension bridge in the region，是該區最古老的吊橋，改寫成 the oldest of its kind in the area。" },
      { q: "What does the speaker warn listeners about?", o: ["Strong winds", "Slippery stairs", "A schedule change", "A crowded snack bar"], a: 0, e: "the wind can get quite strong on the upper deck，提醒上層甲板風大，要抓好帽子。stairway 只是放毯子的位置。" }
    ]
  },
  {
    kind: "introduction", speaker: "W",
    text: "Good morning, everyone, and welcome to the second day of the Regional Retail Innovation Forum. Our first speaker this morning is Ms. Amara Osei, the founder of Threadline, an online clothing rental company. When Ms. Osei launched Threadline five years ago, many experts said people would never pay to rent everyday clothing. Today, the company has over two hundred thousand subscribers. I think the numbers speak for themselves. In her presentation, Ms. Osei will explain how her team uses customer data to predict which styles will be popular each season. Her talk will run about forty minutes, and we'll have time for questions afterward. Because we're recording this session for our Web site, please use the microphone in the center aisle when you ask your question. Ms. Osei, the stage is yours.",
    qs: [
      { q: "What kind of business did Ms. Osei start?", o: ["A clothing rental service", "A data analysis firm", "A fashion design school", "A retail consulting agency"], a: 0, e: "Ms. Osei 是 Threadline 的創辦人，an online clothing rental company，也就是服飾租借服務。customer data 只是演講內容。" },
      { q: "What does the speaker imply when she says, \"I think the numbers speak for themselves\"?", o: ["The company should publish its data.", "The experts were proven wrong.", "The presentation will focus on statistics.", "The number of attendees is surprising."], a: 1, e: "專家當初說沒人會租日常衣服，如今卻有二十多萬訂戶，「數字會說話」是在暗示專家的看法錯了。" },
      { q: "Why are listeners asked to use a microphone?", o: ["The room is very large.", "The speaker has trouble hearing.", "The session is being recorded.", "Questions will be translated."], a: 2, e: "Because we're recording this session for our Web site，因為在錄影，發問要用麥克風。" }
    ]
  },
  {
    kind: "news", speaker: "M",
    text: "And now for business news. Ocean Crest Foods, the frozen seafood producer based in Port Allen, announced today that it will open a second processing plant in the town of Millbrook next year. The company says the new facility will create around three hundred jobs, making it one of the largest employers in the area. According to company spokesperson David Chen, Millbrook was chosen mainly because of its access to rail lines, which will make it easier to ship products across the country. Ocean Crest will hold a job fair at the Millbrook Community Center on May twelfth. Positions range from machine operators to office staff, and the company says it will provide training for applicants without previous experience. More information about available positions can be found on the company's Web site.",
    qs: [
      { q: "What did Ocean Crest Foods announce?", o: ["A merger with a competitor", "A new line of products", "A change in leadership", "An expansion of its operations"], a: 3, e: "公司要開 a second processing plant，第二座加工廠代表擴大營運。" },
      { q: "Why was Millbrook selected?", o: ["It offered tax benefits.", "It has many experienced workers.", "It has good transportation links.", "It is close to the ocean."], a: 2, e: "chosen mainly because of its access to rail lines，鐵路交通便利。公司名有 Ocean、賣海鮮，容易誤選靠海。" },
      { q: "What does the company say it will do for some applicants?", o: ["Pay for relocation", "Offer training", "Provide free meals", "Cover travel costs to the job fair"], a: 1, e: "it will provide training for applicants without previous experience，會替沒經驗的應徵者提供訓練。" }
    ]
  },
  {
    kind: "announcement", speaker: "W",
    text: "Good morning, and welcome to the Midwest Marketing Summit. I'm Grace Liu, one of the organizers. Before we begin with the opening remarks, I have a couple of updates. First, one of our presenters, Mr. Tobias Boyd, missed his connecting flight last night. He's on his way now, but he won't arrive in time for his session right after lunch. Fortunately, the speaker in our last time slot has kindly agreed to trade places with him, so Mr. Boyd will now present at the end of the day. The printed programs haven't been updated, so please make a note of this change. Second, lunch will be served on the outdoor terrace today instead of in the dining room, since the weather is so nice. Finally, please fill out the feedback card in your welcome bag and drop it off at the registration desk before you leave.",
    graphic: { kind: "table", title: "Midwest Marketing Summit Schedule", headers: ["Time", "Session", "Location"], rows: [["9:00 A.M.", "Opening Remarks", "Main Hall"], ["10:30 A.M.", "Digital Marketing Trends", "Room 101"], ["1:00 P.M.", "Building Customer Loyalty", "Room 204"], ["2:30 P.M.", "Social Media Analytics", "Room 305"]] },
    qs: [
      { q: "Who most likely is the speaker?", o: ["An event organizer", "A hotel manager", "A marketing consultant", "An airline representative"], a: 0, e: "I'm Grace Liu, one of the organizers，她是活動主辦人員。提到航班與行銷都是陷阱。" },
      { q: "Look at the graphic. When will Mr. Boyd give his presentation?", o: ["9:00 A.M.", "10:30 A.M.", "1:00 P.M.", "2:30 P.M."], a: 3, e: "Boyd 原本在午餐後，改成與最後一個時段交換；看時程表，最後一場是下午 2:30。選下午 1:00 是誤把原定時間當答案。" },
      { q: "What are listeners asked to do before they leave?", o: ["Return their name badges", "Submit a comment card", "Pick up a printed program", "Visit the outdoor terrace"], a: 1, e: "fill out the feedback card and drop it off at the registration desk，交回意見卡，feedback card 改寫成 comment card。" }
    ]
  },
  {
    kind: "voicemail", speaker: "M",
    text: "Hello, this message is for Ms. Rachel Moreno. This is Aaron from the customer service team at Lumen Party Supplies. I'm calling about the order you placed on our Web site this morning for table decorations and lanterns. In the comments section, you mentioned that the items are for a company celebration this Friday. However, you chose our lowest-cost shipping option, and with that service, your package wouldn't arrive until sometime next week. I didn't want you to be left without your decorations, so I'd suggest upgrading to a faster option. And since this is your first order with us, I'd be happy to make the change at no additional cost to you. Just call me back at 555-0177 before three o'clock today so I can update the order before it leaves our warehouse.",
    graphic: { kind: "table", title: "Lumen Party Supplies Shipping Options", headers: ["Service", "Delivery Time", "Cost"], rows: [["Economy", "7 to 9 business days", "$6.99"], ["Standard", "4 to 5 business days", "$12.99"], ["Express", "2 business days", "$24.99"], ["Overnight", "1 business day", "$39.99"]] },
    qs: [
      { q: "Why is the speaker calling?", o: ["To report that an item is out of stock", "To confirm a delivery address", "To point out a possible problem with an order", "To promote a new product"], a: 2, e: "客人選的運送方式會讓包裹在活動之後才到，客服主動打來提醒訂單可能有問題。商品本身並沒有缺貨。" },
      { q: "Look at the graphic. Which shipping option did the listener originally select?", o: ["Economy", "Standard", "Express", "Overnight"], a: 0, e: "you chose our lowest-cost shipping option，看表格最便宜的是 6.99 美元的 Economy。" },
      { q: "What does the speaker offer to do?", o: ["Send a free sample", "Refund part of a payment", "Deliver the items in person", "Upgrade the shipping for free"], a: 3, e: "因為是首次訂購，I'd be happy to make the change at no additional cost，願意免費升級成較快的運送方式。" }
    ]
  }
];
