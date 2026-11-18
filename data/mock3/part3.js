// 模擬考 3 — Part 3 對話（Questions 32–70，13 組 39 題；最後 3 組為看圖題）
window.MOCK3 = window.MOCK3 || {};
window.MOCK3.part3 = [
  // Questions 32-34
  {
    lines: [
      ["M", "Hi, I dropped off a navy suit here on Monday. The ticket number is four eighty-two. Is it ready?"],
      ["W", "Let me check. Yes, it's here, but there's a note from our cleaning staff. They couldn't completely remove the coffee stain on the jacket sleeve."],
      ["M", "Oh no. I need to wear it to a job interview on Thursday."],
      ["W", "We could try a special treatment overnight at no extra charge. If you come back tomorrow after four, it should be ready."],
      ["M", "That would be great. I'll stop by on my way home from work."],
    ],
    qs: [
      { q: "Where most likely are the speakers?", o: ["At a dry cleaner", "At a clothing store", "At a coffee shop", "At an employment agency"], a: 0, e: "男子拿取件單來領西裝，店員提到清洗人員（cleaning staff）和去污，可知是乾洗店。coffee、job interview 都是對話中出現的字，屬於陷阱。" },
      { q: "What problem does the woman mention?", o: ["A suit was damaged by a machine.", "A ticket has been lost.", "A stain was not fully removed.", "A jacket is the wrong size."], a: 2, e: "They couldn't completely remove the coffee stain → 污漬沒有完全洗掉。西裝並沒有被機器弄壞，取件單也還在。" },
      { q: "When will the man return?", o: ["On Thursday morning", "Tomorrow after work", "Later this evening", "Next Monday"], a: 1, e: "女子說明天四點以後可以拿，男子回答 I'll stop by on my way home from work → 明天下班後。星期四是面試的日子，星期一是送洗的日子。" },
    ],
  },
  // Questions 35-37
  {
    lines: [
      ["W", "Raymond, are you working at the museum gift shop this weekend?"],
      ["M", "Just on Sunday. Why do you ask?"],
      ["W", "My sister's graduation ceremony is on Saturday morning, and I'm scheduled to work then. I was hoping you could take my shift."],
      ["M", "I'd like to help, but I'm driving my parents to the airport that morning. Have you asked Teresa? She mentioned she wanted more hours this month."],
      ["W", "No, I haven't. I'll send her a message right now."],
    ],
    qs: [
      { q: "Why does the woman need help?", o: ["She is going on a business trip.", "She has a medical appointment.", "She will attend a family event.", "She has to attend a training session."], a: 2, e: "她妹妹（或姊姊）星期六早上有畢業典禮，graduation ceremony 改寫成 family event。去機場的是男子，不是她。" },
      { q: "Why can't the man help the woman?", o: ["He works at another job.", "He will be out of town.", "His car is being repaired.", "He will be driving some relatives."], a: 3, e: "I'm driving my parents to the airport → 要載父母去機場，parents 改寫成 relatives。他只是去機場送人，並不是自己要出城。" },
      { q: "What will the woman most likely do next?", o: ["Speak to a manager", "Change a schedule online", "Contact a coworker", "Call her sister"], a: 2, e: "男子建議問 Teresa，女子說 I'll send her a message right now → 聯絡同事。打給妹妹是利用對話中出現的 sister 設計的陷阱。" },
    ],
  },
  // Questions 38-40
  {
    lines: [
      ["W", "Hello, I'm calling from Lantern Noodle House. We're opening a second location next month, and we'd like to order uniforms for the new staff."],
      ["M", "Sure. What did you have in mind?"],
      ["W", "About thirty black polo shirts with our restaurant's logo embroidered on the front. We'd need them by the twenty-fifth for staff training."],
      ["M", "That shouldn't be a problem. Embroidered orders usually take about ten business days. But I'll need a high-quality image of your logo before we can start."],
      ["W", "Okay. I'll ask our designer to e-mail you the file today."],
    ],
    qs: [
      { q: "What does the woman say her business will do next month?", o: ["Change its logo", "Open a new location", "Hire a designer", "Hold a training session for managers"], a: 1, e: "We're opening a second location next month → 下個月開第二家分店。訓練是給新員工的，而且是在二十五號前；設計師是原本就有的。" },
      { q: "Why does the woman need the uniforms by the twenty-fifth?", o: ["A restaurant will open to the public.", "Staff training will take place.", "A price will increase.", "A delivery truck will be unavailable."], a: 1, e: "We'd need them by the twenty-fifth for staff training → 因為要進行員工訓練。開幕是下個月，但沒有說是二十五號。" },
      { q: "What does the woman say she will do?", o: ["Visit the man's store", "Pay a deposit", "Choose a different color", "Arrange for a file to be sent"], a: 3, e: "I'll ask our designer to e-mail you the file today → 請設計師把 logo 檔案寄過去，也就是安排把檔案寄給對方。" },
    ],
  },
  // Questions 41-43
  {
    lines: [
      ["W", "Martin, Chris, a tour group of twenty-five people just arrived, but check-in isn't until three. Their bus got here two hours early."],
      ["M", "Housekeeping is still cleaning the rooms on the fifth floor. There's no way they'll be ready before two."],
      ["M2", "Why don't we store their luggage and invite them to have lunch in our restaurant? It's quiet at this time of day."],
      ["W", "That's a good idea. Would the restaurant be able to give them a discount, though?"],
      ["M2", "I'm the manager on duty there today, so I can offer fifteen percent off."],
      ["M", "Great. I'll go and let the tour guide know."],
    ],
    qs: [
      { q: "What problem are the speakers discussing?", o: ["Some guests arrived before their rooms were ready.", "A tour bus has broken down.", "A restaurant is fully booked.", "Some rooms were reserved twice."], a: 0, e: "旅行團提早兩小時到，但房間還在打掃、三點才能入住 → 客人在房間準備好之前就到了。巴士只是提早到，沒有故障。" },
      { q: "What does the woman ask about?", o: ["A price reduction", "Extra storage space", "A larger room", "A bus schedule"], a: 0, e: "Would the restaurant be able to give them a discount → 問能不能打折，discount 改寫成 price reduction。寄放行李是男子提的，不是她問的。" },
      { q: "What will one of the men do next?", o: ["Clean some rooms", "Call a bus company", "Prepare a restaurant table", "Speak with a tour guide"], a: 3, e: "最後男子說 I'll go and let the tour guide know → 去告訴導遊。打掃房間是房務部的工作。" },
    ],
  },
  // Questions 44-46
  {
    lines: [
      ["M", "Hello, Ms. Brandt? This is Felix Moreau. I have a video interview with you at two o'clock, but my Internet connection at home has been going in and out all morning."],
      ["W", "Thanks for letting me know. We could do the interview by phone instead, but the design team really wanted to see your portfolio on screen."],
      ["M", "I understand. There's a public library near my apartment with private study rooms, but I'm not sure if one is free."],
      ["W", "Well, you've still got three hours."],
      ["M", "That's true. I'll head over there now and reserve a room. I'll e-mail you to confirm once I'm set up."],
      ["W", "Perfect. I'll keep the two o'clock time slot for you."],
    ],
    qs: [
      { q: "Why is the man calling?", o: ["He is having a technical problem.", "He wants to cancel an interview.", "He cannot find an office.", "He needs to update his portfolio."], a: 0, e: "my Internet connection at home has been going in and out → 網路時斷時續，是技術問題。他沒有要取消，而是想辦法照原時間面試。" },
      { q: "What does the woman imply when she says, \"Well, you've still got three hours\"?", o: ["The man has enough time to make other arrangements.", "The interview should be moved to another day.", "She is too busy to talk right now.", "The man arrived too early."], a: 0, e: "男子擔心圖書館自習室不一定有空，女子說「還有三小時」，暗示時間足夠讓他另外安排場地。她最後也說會保留兩點的時段，所以不是要改天。" },
      { q: "What will the man most likely do next?", o: ["Buy new equipment", "Call a technician", "Send some work samples", "Go to a library"], a: 3, e: "I'll head over there now and reserve a room → 現在去圖書館預約自習室。他之後才會寄 e-mail 確認，不是寄作品。" },
    ],
  },
  // Questions 47-49
  {
    lines: [
      ["W", "Hi, I'm Dr. Alana Whitfield. I'm giving the keynote speech at ten, and I was told to check in with the audio-visual team."],
      ["M", "Welcome, Dr. Whitfield. I'm Sam. Did you bring your slides?"],
      ["W", "Yes, they're on this flash drive. But I made them with a different program from the one on your laptops. Will that be a problem?"],
      ["M", "Not at all. Our laptops can open both formats. I'll load them now and check every slide. Also, I'd suggest using a wireless microphone. The stage is very wide."],
      ["W", "That would be helpful. I tend to walk around when I speak."],
      ["M", "Then I'll clip one on for you about fifteen minutes before you start."],
    ],
    qs: [
      { q: "Who most likely is the woman?", o: ["An event organizer", "A hotel employee", "A guest speaker", "A computer technician"], a: 2, e: "I'm giving the keynote speech at ten → 她是要發表主題演講的講者。影音技術人員是男子。" },
      { q: "What is the woman concerned about?", o: ["The size of the audience", "The length of her speech", "Whether her file will open", "The location of the stage"], a: 2, e: "她用不同的軟體做投影片，問 Will that be a problem? → 擔心檔案打不開。舞台很寬是男子提的，不是她擔心的事。" },
      { q: "Why does the man recommend a wireless microphone?", o: ["The audience will ask questions.", "A cable is broken.", "The room is noisy.", "The stage is large."], a: 3, e: "The stage is very wide → 舞台很寬，所以建議無線麥克風；女子也說自己演講時會走來走去。" },
    ],
  },
  // Questions 50-52
  {
    lines: [
      ["M", "Okay, we need to choose the cover photo for the October issue by this afternoon. Nadia, Olga, what do you think?"],
      ["W", "I like the shot of the mountain village at sunrise. The colors are amazing."],
      ["W2", "It's beautiful, but our main story this month is about food markets in Southeast Asia."],
      ["M", "Good point. Readers might be confused if the cover doesn't match what's inside."],
      ["W", "True. Didn't the photographer send a few shots from the floating market in Bangkok?"],
      ["W2", "She did, but most of them were a bit dark. I could ask her whether she has any brighter ones."],
      ["M", "Please do. And let's try to hear back from her before lunch."],
    ],
    qs: [
      { q: "Where do the speakers most likely work?", o: ["At a travel agency", "At a magazine publisher", "At a restaurant", "At a photography studio"], a: 1, e: "要選十月號的封面照片（cover photo for the October issue），還提到讀者與主打報導 → 雜誌出版社。攝影師是外部合作者，不是他們的公司。" },
      { q: "Why does one of the women say, \"our main story this month is about food markets in Southeast Asia\"?", o: ["To recommend a travel destination", "To explain why an article is late", "To praise a photographer's work", "To suggest that a photo may not be suitable"], a: 3, e: "同事喜歡山村日出照，她回應本月主打是東南亞市場，意思是這張照片和內容不搭；男子接著說封面不符會讓讀者混淆，證實這個意思。" },
      { q: "What does one of the women offer to do?", o: ["Edit some dark photos", "Rewrite a main story", "Contact a photographer", "Visit a market"], a: 2, e: "I could ask her whether she has any brighter ones → 主動提議去問攝影師有沒有亮一點的照片。照片偏暗是事實，但她沒有說要自己修圖。" },
    ],
  },
  // Questions 53-55
  {
    lines: [
      ["W", "Thank you for calling Corvia Mobile. How can I help you?"],
      ["M", "Hi, there's a charge of sixty dollars for international data on my latest bill. I went to Canada for a few days, but I bought a travel package before I left."],
      ["W", "Let me look at your account. I see the travel package started on the eighteenth, but some data was used on the seventeenth, the day you arrived."],
      ["M", "Oh, right. I landed late that night and checked my e-mail at the airport."],
      ["W", "I understand. Since this is the first time this has happened, I can refund half of the charge as a one-time courtesy."],
      ["M", "I appreciate that. Thank you."],
    ],
    qs: [
      { q: "Why is the man calling?", o: ["To ask about a charge on his bill", "To purchase a travel package", "To report a lost phone", "To cancel his service"], a: 0, e: "男子說帳單上有一筆六十美元的國際上網費 → 詢問帳單費用。旅遊方案是他出國前已經買好的。" },
      { q: "According to the woman, what caused the problem?", o: ["A package was never purchased.", "The man visited more than one country.", "Data was used before a package began.", "A rate was recently increased."], a: 2, e: "方案十八號才開始，但十七號就用了網路 → 在方案生效前使用了數據。男子確實有買方案，所以不是沒買。" },
      { q: "What does the woman offer to do?", o: ["Send a new phone", "Return part of the money", "Upgrade the man's plan", "Extend a travel package"], a: 1, e: "I can refund half of the charge → 退還一半費用，改寫成 return part of the money。" },
    ],
  },
  // Questions 56-58
  {
    lines: [
      ["W", "Hiroshi, I've been looking at our waste numbers. We throw away almost two tons of cardboard every month, mostly from shipping parts between our two plants."],
      ["M", "I know. Have you looked into reusable plastic crates? Stackwell Plastics makes ones that fold flat when they're empty."],
      ["W", "I got a quote from them. The up-front cost is high, about twelve thousand dollars, but we'd stop buying boxes completely."],
      ["M", "So they'd pay for themselves in, what, a year and a half?"],
      ["W", "About that. But the operations director wants proof before she approves anything."],
      ["M", "Then why not test them on just one route first, say, the shipments to the Dayton plant? If it works, the numbers will speak for themselves."],
    ],
    qs: [
      { q: "What are the speakers mainly discussing?", o: ["Reducing packaging waste", "Opening a new plant", "Repairing a machine", "Hiring a new director"], a: 0, e: "開頭提到每月丟掉近兩噸紙箱，接著討論改用可重複使用的塑膠箱 → 減少包材浪費。對話提到兩座工廠，但沒有要開新廠。" },
      { q: "What disadvantage of the crates does the woman mention?", o: ["Their weight", "Their initial cost", "Their delivery time", "Their limited size"], a: 1, e: "The up-front cost is high → 初期成本很高，up-front cost 改寫成 initial cost。可折疊攤平反而是優點。" },
      { q: "What does the man suggest?", o: ["Contacting another supplier", "Conducting a limited trial", "Postponing a decision", "Hiring a consultant"], a: 1, e: "why not test them on just one route first → 先在一條路線上試用，也就是小規模試行（limited trial），用數據說服主管。" },
    ],
  },
  // Questions 59-61
  {
    lines: [
      ["M", "Ms. Duval, thanks for showing me around the courtyard. I'll put together a proposal for the plants and seating area by Friday."],
      ["W", "Thank you. As I said, we'd like everything finished before our company's anniversary celebration in June. We're planning to hold the reception out here."],
      ["M", "June should be fine for the planting. The only thing that might take longer is the stone path. Our stone supplier is very backed up this spring."],
      ["W", "Is there any alternative?"],
      ["M", "We could use concrete pavers. They're cheaper and we always have them in stock, although they don't look quite as natural."],
      ["W", "Honestly, most guests will be looking at the garden, not the ground."],
      ["M", "Then I'll include pavers in the proposal and list stone as an option."],
    ],
    qs: [
      { q: "What event is the woman preparing for?", o: ["A garden competition", "A building opening", "A product launch", "A company anniversary"], a: 3, e: "our company's anniversary celebration in June → 公司週年慶，招待會將在中庭舉行。" },
      { q: "What problem does the man mention?", o: ["The courtyard is too small.", "Some plants cannot grow in June.", "His prices have recently risen.", "A material may not arrive in time."], a: 3, e: "Our stone supplier is very backed up → 石材供應商訂單積壓，石板步道可能來不及。他說六月種植沒問題，所以不是植物的問題。" },
      { q: "What does the woman imply when she says, \"most guests will be looking at the garden, not the ground\"?", o: ["She wants more plants than planned.", "She thinks the stone path is unnecessary.", "She is willing to accept a cheaper material.", "She is worried about the guests' safety."], a: 2, e: "男子說水泥磚比較便宜但沒那麼自然，女子回答客人會看花園而不是地面 → 外觀差一點沒關係，願意接受水泥磚。男子接著就把水泥磚列入提案。她沒有說不要步道，只是接受換材質。" },
    ],
  },
  // Questions 62-64
  {
    lines: [
      ["W", "Ahmed, I heard you'll be driving to work starting next month. Have you chosen a parking spot yet?"],
      ["M", "Not yet. I was going to pick the cheapest one, by the stadium, but it's a fifteen-minute walk."],
      ["W", "That's fine when the weather's nice, but in winter it's really unpleasant. I parked there last year, and I regretted it."],
      ["M", "Hmm. I don't want to pay ninety dollars a month for the main lot, though."],
      ["W", "What about the Hill Street garage? It's covered, so you won't have to clear snow off your car, and the walk is under ten minutes."],
      ["M", "That sounds like the best choice. I'll fill out the application this afternoon."],
    ],
    graphic: { kind: "table", title: "Employee Parking Options", headers: ["Location","Walk to Office","Monthly Fee"], rows: [["Lot A (Main Building)","1 minute","$90"],["Lot B (Riverside)","5 minutes","$60"],["Garage C (Hill Street)","8 minutes","$45"],["Lot D (Stadium)","15 minutes","$20"]] },
    qs: [
      { q: "What will the man start doing next month?", o: ["Working in a new building", "Taking the train", "Walking to the stadium", "Driving to work"], a: 3, e: "you'll be driving to work starting next month → 下個月開始開車上班，所以在選停車位。" },
      { q: "What does the woman say about the lot by the stadium?", o: ["It is often full.", "It is unpleasant in cold weather.", "Its fee will increase soon.", "It is closed in winter."], a: 1, e: "in winter it's really unpleasant → 冬天走那段路很難受。她說的是走路距離的問題，不是停車場冬天關閉。" },
      { q: "Look at the graphic. How much will the man most likely pay each month?", o: ["$90", "$60", "$45", "$20"], a: 2, e: "男子接受建議選 Hill Street 的室內停車場，對照表格 Garage C 月費是 $45。$20 是他原本想選的體育場停車場，$90 是他嫌貴的主停車場。" },
    ],
  },
  // Questions 65-67
  {
    lines: [
      ["W", "Hi, I need a ticket to the Riverside Convention Center. I have to set up my company's booth there by three o'clock."],
      ["M", "I'm afraid the one fifteen shuttle just left. The next one leaves at one forty-five."],
      ["W", "That's fine. I'll take that one."],
      ["M", "Actually, that bus stops at every hotel downtown, so it won't reach the convention center until after three. I'd recommend waiting for the one after that. It goes there directly."],
      ["W", "Oh, thanks for telling me. In that case, is there somewhere I can get something to eat while I wait?"],
      ["M", "There's a café right behind you, next to the baggage claim area."],
    ],
    graphic: { kind: "table", title: "Airport Express Shuttle: Departures to Downtown", headers: ["Departs Airport","Stops","Arrives at Convention Center"], rows: [["1:15 P.M.","Convention Center only","2:00 P.M."],["1:45 P.M.","All downtown hotels","3:10 P.M."],["2:10 P.M.","Convention Center only","2:55 P.M."],["2:40 P.M.","All downtown hotels","4:05 P.M."]] },
    qs: [
      { q: "Why is the woman going to the convention center?", o: ["To prepare an exhibition booth", "To attend a job interview", "To check in to a hotel", "To meet a client for lunch"], a: 0, e: "I have to set up my company's booth there by three → 要在三點前布置公司展位。飯店是接駁車停靠站，不是她的目的。" },
      { q: "Look at the graphic. Which shuttle will the woman most likely take?", o: ["The 1:15 P.M. shuttle", "The 1:45 P.M. shuttle", "The 2:10 P.M. shuttle", "The 2:40 P.M. shuttle"], a: 2, e: "一點四十五分那班會停靠所有飯店、三點後才到，所以男子建議等下一班直達車；對照表格是 2:10 出發、2:55 抵達，趕得上三點。一點四十五分是她原本想搭的陷阱。" },
      { q: "What does the woman ask about?", o: ["The location of her luggage", "A place to buy food", "The price of a ticket", "A hotel reservation"], a: 1, e: "is there somewhere I can get something to eat → 問哪裡可以吃東西。baggage claim 是男子回答時提到的位置，是陷阱。" },
    ],
  },
  // Questions 68-70
  {
    lines: [
      ["M", "Grace, our contract with BlueArrow ends next month, and customers keep complaining that their orders take too long to arrive."],
      ["W", "I'm not surprised. Look at this chart. They were the slowest of the four delivery companies we compared."],
      ["M", "What about Swiftline? They're the fastest."],
      ["W", "They are, but they don't deliver to rural areas, and about a third of our customers live outside the city."],
      ["M", "Right, that rules them out. So we should probably go with the next fastest one."],
      ["W", "I agree. I'll call them this afternoon and ask for a price quote."],
    ],
    graphic: { kind: "bars", title: "Average Delivery Time Last Quarter (hours)", unit: "", items: [["Swiftline",18],["Parcelo",26],["Northgate Express",22],["BlueArrow",31]] },
    qs: [
      { q: "What problem does the man mention?", o: ["Customers are unhappy with delivery times.", "A contract was canceled early.", "Some orders were sent to the wrong address.", "Shipping prices have gone up."], a: 0, e: "customers keep complaining that their orders take too long → 客人抱怨送貨太慢。合約是下個月到期，不是提早取消。" },
      { q: "Why is Swiftline not chosen?", o: ["Its prices are too high.", "It does not serve some customers' areas.", "It is the slowest company.", "Its contract has ended."], a: 1, e: "they don't deliver to rural areas，而三分之一客戶住在城外 → 送不到部分客戶的地區。Swiftline 其實是最快的。" },
      { q: "Look at the graphic. Which company will the woman most likely contact?", o: ["Northgate Express", "Swiftline", "Parcelo", "BlueArrow"], a: 0, e: "排除最快的 Swiftline 後要選「第二快」的，看圖表 Northgate Express 22 小時排第二。Parcelo 26 小時是第三，BlueArrow 是目前最慢的那家。" },
    ],
  }
];
