// Part 4 獨白（Talks）練習題庫。題目以陣列順序當 ID，新增請加在最後面。
// { kind, speaker: "M"|"W", text, graphic?, qs: [3 題] }
window.PART4 = [
  {
    kind: "announcement", speaker: "W",
    text: "Attention, passengers on Skyward Airlines flight 482 to Vancouver. Due to a mechanical inspection of our original aircraft, this flight will now depart from Gate 27 instead of Gate 14. Our new departure time is 4:15 P.M., about forty minutes later than scheduled. We apologize for the inconvenience. To thank you for your patience, each passenger will receive a meal voucher worth fifteen dollars, which can be used at any restaurant in Terminal B. Please pick up your voucher from the agent at the service desk near Gate 27 before boarding begins. Passengers with connecting flights in Vancouver should also speak with an agent, so that we can confirm whether your connection will be affected. Thank you for flying with Skyward Airlines.",
    qs: [
      { q: "Why has the flight been delayed?", o: ["Bad weather is expected.", "A crew member is late.", "An aircraft is being inspected.", "The runway is under repair."], a: 2, e: "廣播一開始說 Due to a mechanical inspection of our original aircraft，所以是飛機正在檢查。天氣、機組人員、跑道都沒有提到。" },
      { q: "What will passengers receive?", o: ["A meal voucher", "A seat upgrade", "Free baggage check", "A travel discount"], a: 0, e: "each passenger will receive a meal voucher worth fifteen dollars，每位乘客會拿到餐券。其他補償都沒有出現。" },
      { q: "According to the speaker, why should some passengers talk to an agent?", o: ["To change their seat assignment", "To request a refund", "To check in their luggage", "To confirm a connecting flight"], a: 3, e: "有轉機的乘客要找地勤，so that we can confirm whether your connection will be affected，也就是確認轉機是否受影響。" }
    ]
  },
  {
    kind: "voicemail", speaker: "M",
    text: "Hi, Ms. Okafor, this is Daniel Reyes from Greenleaf Property Management, returning your call about the apartment on Linden Street. You asked whether the unit would be available on the first of next month. The current tenant is moving out on the twenty-eighth, so it should be ready by then. You also mentioned that you'd like to see it before signing anything. Well, I have three other people scheduled to view it this weekend. If you're interested, I'd recommend coming by on Thursday or Friday evening. I'm also going to e-mail you the application form so you can look it over in advance. Please call me back at 555-0192 to let me know which evening works for you. Thanks, and I hope to hear from you soon.",
    qs: [
      { q: "Who most likely is the speaker?", o: ["A moving company employee", "A property manager", "A bank representative", "A building inspector"], a: 1, e: "說話者自稱來自 Greenleaf Property Management，談的是公寓出租，所以是物業管理人員。moving out 會讓人聯想到搬家公司，是陷阱。" },
      { q: "What does the speaker imply when he says, \"I have three other people scheduled to view it this weekend\"?", o: ["He is too busy to meet the listener.", "The weekend viewings have been canceled.", "The rent will probably increase.", "The listener should act quickly."], a: 3, e: "週末已有三組人要看房，接著建議對方週四或週五就來，暗示房子很搶手、要早點行動。並不是說自己太忙。" },
      { q: "What will the speaker send the listener?", o: ["An application form", "A floor plan", "A lease agreement", "A list of fees"], a: 0, e: "I'm also going to e-mail you the application form，會寄申請表。租約是看房之後才簽的東西，不要混淆。" }
    ]
  },
  {
    kind: "advertisement", speaker: "W",
    text: "Is your home office cluttered with cables, papers, and equipment you never use? Let Tidy Space Organizers help. Our trained consultants will visit your home, measure your workspace, and design a storage system that fits the way you work. We use only sustainable materials, and every installation is completed in a single day. This month, we're offering something special. Customers who book a consultation before October thirty-first will receive a free desk lamp with any installation. And don't worry about surprise costs. We provide a detailed written estimate before any work begins. To see photos of our recent projects and schedule your free consultation, visit our Web site at tidyspace dot com. Tidy Space Organizers. Work better in a space you love.",
    qs: [
      { q: "What service does the business provide?", o: ["Organizing workspaces", "Repairing computers", "Cleaning offices", "Delivering furniture"], a: 0, e: "顧問到府丈量並設計 storage system，讓工作空間變整齊，所以是整理規劃工作空間。提到 cables、equipment 容易誤選修電腦。" },
      { q: "What will customers who book early receive?", o: ["A discount on installation", "A free storage cabinet", "A complimentary lamp", "An extended warranty"], a: 2, e: "十月底前預約的客人 will receive a free desk lamp，complimentary 就是「免費贈送的」。廣告沒有提到折扣或保固。" },
      { q: "What does the speaker say customers can do on the Web site?", o: ["Read customer reviews", "View examples of past work", "Compare material prices", "Download a design guide"], a: 1, e: "網站上可以 see photos of our recent projects，也就是看過去的作品範例，並預約諮詢。" }
    ]
  },
  {
    kind: "news", speaker: "M",
    text: "In local business news, the Harborview City Council voted last night to approve construction of a new public parking garage on Mercer Avenue. The six-story structure will have space for about five hundred vehicles and is expected to ease the parking shortage that shop owners in the downtown district have complained about for years. Construction will begin in March and should take roughly fourteen months. During that time, Mercer Avenue will be reduced to one lane between Fifth and Seventh Streets. Council member Rita Vasquez said the garage will be paid for mainly through a state transportation grant rather than local taxes. Residents who want to learn more can attend an information session at the public library next Tuesday evening. I'll have more on this story at the top of the hour.",
    qs: [
      { q: "What is the news report mainly about?", o: ["A new shopping district", "A change in local taxes", "A road safety campaign", "A planned parking facility"], a: 3, e: "市議會通過興建新的公共停車場 parking garage，全篇都在談這件事。shop owners、local taxes 都只是細節裡出現的字。" },
      { q: "According to the speaker, what will happen during construction?", o: ["Some shops will close temporarily.", "Traffic lanes will be limited.", "Parking fees will increase.", "A bus route will be changed."], a: 1, e: "施工期間 Mercer Avenue will be reduced to one lane，車道會縮減成一線，換句話說就是車道受限。" },
      { q: "How will the project mainly be funded?", o: ["By local businesses", "By a private developer", "By a state grant", "By increased parking fees"], a: 2, e: "paid for mainly through a state transportation grant rather than local taxes，主要靠州政府補助款，而不是地方稅。" }
    ]
  },
  {
    kind: "broadcast", speaker: "W",
    text: "Good morning, and thanks for tuning in to Morning Drive on River City Radio. I've got an important update for anyone planning to attend the Riverside Food Festival. The festival was originally scheduled for the one day this week when forecasters are expecting strong winds. Since the event uses dozens of outdoor tents, the organizers have decided to push it back by one day. The good news is that all sixty food vendors have confirmed they can still participate. If you bought tickets online, they'll automatically be valid for the new date, so there's no need to contact anyone. And if you haven't bought tickets yet, our station is giving away twenty pairs this week. Just call in after the next song and answer a simple question about local history to win.",
    graphic: { kind: "table", title: "River City Weather Forecast", headers: ["Day", "Forecast", "High"], rows: [["Thursday", "Rain", "18°C"], ["Friday", "Cloudy", "20°C"], ["Saturday", "Strong winds", "17°C"], ["Sunday", "Sunny", "22°C"]] },
    qs: [
      { q: "What is the broadcast mainly about?", o: ["A radio station anniversary", "A new restaurant opening", "An outdoor food event", "A weather warning system"], a: 2, e: "主播說有關 Riverside Food Festival 的重要更新，是戶外帳篷的美食活動。雖然提到天氣，但重點不是氣象警報系統。" },
      { q: "Look at the graphic. On which day will the event now be held?", o: ["Thursday", "Friday", "Saturday", "Sunday"], a: 3, e: "原本排在預報有強風的那一天，看圖是星期六；延後一天，所以改到星期日。選星期六是把「原訂日期」誤當答案。" },
      { q: "How can listeners win tickets?", o: ["By answering a question over the phone", "By visiting the station's Web site", "By posting a photo online", "By stopping by a vendor's booth"], a: 0, e: "call in after the next song and answer a simple question，打電話進電台回答問題就能贏得門票。" }
    ]
  },
  {
    kind: "tour", speaker: "M",
    text: "Welcome to Castellan Glassworks, everyone. My name is Marco, and I'll be your guide this afternoon. This factory has been producing handmade glass since 1912, and many of the techniques you'll see today haven't changed much in over a century. We'll begin in the furnace room, where our artisans shape melted glass at temperatures above one thousand degrees. It gets very hot in there, so please stay behind the yellow line at all times. After that, we'll visit the design studio, where you can see sketches for our new collection, which hasn't been released to the public yet. Because of that, photography is not permitted in the studio. The tour ends in our gift shop, and anyone on today's tour can get ten percent off purchases just by showing their ticket at the register.",
    qs: [
      { q: "Where is the tour taking place?", o: ["At an art museum", "At a glass factory", "At a design college", "At a kitchen supply store"], a: 1, e: "This factory has been producing handmade glass since 1912，是玻璃工廠。提到 design studio 容易誤選設計學院。" },
      { q: "Why are listeners asked not to take photographs in the studio?", o: ["Some products have not been made public.", "The lighting is too dim.", "Artists are working there.", "The equipment could be damaged."], a: 0, e: "新系列 hasn't been released to the public yet，Because of that 不准拍照，也就是有產品尚未公開。" },
      { q: "How can listeners receive a discount?", o: ["By joining a membership program", "By buying more than one item", "By completing a survey", "By presenting a ticket"], a: 3, e: "just by showing their ticket at the register，出示門票即可打九折。showing 換成 presenting 是同義改寫。" }
    ]
  },
  {
    kind: "meeting", speaker: "W",
    text: "Before we wrap up, I want to talk about the customer survey results for our mobile banking app. Overall, satisfaction went up compared to last quarter, which is great news. However, a lot of users said the login process takes too long, especially the two-step verification. Our development team has proposed switching to fingerprint and face recognition, and they estimate it would take about three months. Now, the board meeting is in six weeks. So, I'd like the development team to put together a smaller version of the feature that we can demonstrate at that meeting. Jonathan, could you coordinate with them and send me a schedule by Friday? And everyone else, please review the full survey report, which I've uploaded to the shared drive, and bring your suggestions to next Monday's meeting.",
    qs: [
      { q: "What product is being discussed?", o: ["A travel booking Web site", "A fitness tracker", "An online shopping platform", "A mobile banking application"], a: 3, e: "一開頭就說 customer survey results for our mobile banking app，討論的是行動銀行 App。" },
      { q: "Why does the speaker say, \"the board meeting is in six weeks\"?", o: ["To correct an error in the agenda", "To announce that a meeting has been postponed", "To indicate that the full feature will not be ready in time", "To invite listeners to attend the meeting"], a: 2, e: "完整功能要三個月，但董事會六週後就開，所以接著要求先做簡化版來展示。說這句是在點出完整版趕不上。" },
      { q: "What are most listeners asked to do before the next meeting?", o: ["Test a new login system", "Read a report", "Contact some customers", "Update a schedule"], a: 1, e: "everyone else, please review the full survey report，大家要先看完整份調查報告。排時程是 Jonathan 一人的任務，不是多數聽眾。" }
    ]
  },
  {
    kind: "talk", speaker: "M",
    text: "Thank you all for coming to today's workshop on writing effective business proposals. I've been reviewing proposals for investors for over fifteen years, and I can tell you that most of them are rejected within the first two minutes. Why? Because the writer buries the most important information on page five. So the first thing we'll practice today is writing a strong one-paragraph summary that tells the reader exactly what you're offering and why it matters. Later this morning, you'll work in pairs to review each other's summaries and give feedback. Before we begin, please take a look at the folder on your table. Inside, you'll find a sample proposal that I've marked up with comments. We'll use it as a reference throughout the session, so keep it handy.",
    qs: [
      { q: "What is the topic of the workshop?", o: ["Preparing business proposals", "Managing investments", "Negotiating contracts", "Designing presentations"], a: 0, e: "workshop on writing effective business proposals，主題是撰寫商業企畫書。investors 出現在內容裡，但不是在教投資。" },
      { q: "According to the speaker, why are many proposals rejected?", o: ["They are too expensive.", "Key information is not presented early.", "They contain spelling errors.", "They are submitted late."], a: 1, e: "the writer buries the most important information on page five，重要資訊埋在後面，也就是沒有及早呈現。" },
      { q: "What does the speaker ask the listeners to look at?", o: ["A list of investors", "A feedback form", "An example document", "A presentation slide"], a: 2, e: "桌上資料夾裡有 a sample proposal，sample proposal 改寫成 example document。feedback 是之後兩人互評的活動，不是要看的東西。" }
    ]
  },
  {
    kind: "introduction", speaker: "W",
    text: "Good evening, and welcome to the annual awards dinner of the Northfield Hospitality Association. It's my pleasure to introduce tonight's keynote speaker, Mr. Kenji Watanabe. Mr. Watanabe started his career as a front desk clerk at a small inn in Kyoto, and today he runs a chain of twenty-two boutique hotels across Asia and Europe. What sets his hotels apart is their focus on local culture. Every property works with nearby artists and farmers, and guests are encouraged to take part in community activities during their stay. Last year, his company received the Global Travel Award for sustainable tourism. Tonight, he'll be sharing how small businesses can compete with large international brands. After his talk, Mr. Watanabe will be signing copies of his new book in the lobby. Please join me in welcoming him.",
    qs: [
      { q: "Who is Mr. Watanabe?", o: ["A travel writer", "A hotel business owner", "A restaurant chef", "An event planner"], a: 1, e: "他從櫃台人員做起，現在 runs a chain of twenty-two boutique hotels，是飯店經營者。有出書不代表他是旅遊作家。" },
      { q: "What is special about Mr. Watanabe's hotels?", o: ["They are located near airports.", "They offer free meals.", "They were designed by famous architects.", "They connect guests with local communities."], a: 3, e: "What sets his hotels apart is their focus on local culture，與在地藝術家、農民合作，並鼓勵房客參加社區活動。" },
      { q: "What will happen after the talk?", o: ["A book signing will take place.", "Awards will be presented.", "Dinner will be served.", "A video will be shown."], a: 0, e: "After his talk, Mr. Watanabe will be signing copies of his new book，演講後會有簽書會。" }
    ]
  },
  {
    kind: "instructions", speaker: "M",
    text: "Hi, everyone, and welcome to your first day at Brightline Logistics. Before you start working in the warehouse, I'm going to walk you through our scanning devices. Each of you has been given a handheld scanner. To log in, press the green button on the side and enter the four-digit code printed on your employee badge. When you receive a package, scan the barcode on the top label, not the one on the side, because the side label is for the shipping company only. If the screen turns red, it means the item isn't in our system, so set it aside on the gray shelf and notify a supervisor. At the end of your shift, please return your scanner to the charging station by the break room. Now, let's head over to the loading area and practice.",
    qs: [
      { q: "Who most likely are the listeners?", o: ["Delivery drivers", "Store customers", "New warehouse employees", "Shipping company managers"], a: 2, e: "welcome to your first day，而且要在 warehouse 工作，所以是倉庫新進員工。" },
      { q: "What should listeners do if the screen turns red?", o: ["Put the item in a separate place", "Scan the side label", "Restart the device", "Enter a new code"], a: 0, e: "畫面變紅就 set it aside on the gray shelf，把物品另外放，再通知主管。掃側面標籤是說話者明確說不要做的事。" },
      { q: "Where should the devices be returned?", o: ["To a supervisor's office", "To the loading area", "To a gray shelf", "To a charging station"], a: 3, e: "下班時 return your scanner to the charging station，放回充電站。灰色架子是放問題物品的地方。" }
    ]
  },
  {
    kind: "announcement", speaker: "W",
    text: "Attention, all staff. This is Priya from the operations office with a reminder about next Wednesday's training on our new expense reporting software. Starting next month, paper receipts will no longer be accepted, so everyone who submits expenses must attend one of the sessions. Around thirty people have signed up for the morning session so far, so we've reserved the smallest room that can seat everyone. If you can't make the morning session, a second one will be held in the afternoon, but space is limited. Also, please remember to bring your laptop, since you'll be setting up your account during the training. If you have any trouble signing up, contact my assistant, Leo, at extension 204, and he'll add you to the list.",
    graphic: { kind: "table", title: "Meeting Rooms", headers: ["Room", "Seats"], rows: [["Room A", "12"], ["Room B", "20"], ["Room C", "35"], ["Room D", "50"]] },
    qs: [
      { q: "What is the purpose of the training?", o: ["To introduce a new security policy", "To explain a hiring process", "To review a travel budget", "To teach staff how to use new software"], a: 3, e: "training on our new expense reporting software，教大家使用新的報帳軟體。" },
      { q: "Look at the graphic. Where will the morning session be held?", o: ["Room A", "Room B", "Room C", "Room D"], a: 2, e: "約三十人報名，訂了能坐下所有人的最小會議室；看表格，能坐超過三十人的最小房間是 35 人座的 Room C。" },
      { q: "What are listeners asked to bring?", o: ["Paper receipts", "A laptop computer", "A registration form", "An identification badge"], a: 1, e: "please remember to bring your laptop。紙本收據是「以後不再收」的東西，是提到但不是答案的陷阱。" }
    ]
  },
  {
    kind: "voicemail", speaker: "M",
    text: "Hello, this message is for Ms. Laura Brennan. This is Victor calling from Dr. Harmon's dental office. I'm calling about your cleaning appointment scheduled for Thursday at ten A.M. Unfortunately, Dr. Harmon will be attending a conference out of town that day, so we need to reschedule. We have openings next Monday at nine or Tuesday at two in the afternoon. Also, our records show that your insurance information was last updated two years ago. When you come in, could you please bring your current insurance card so we can make a copy? You can call us back at 555-0148, or if it's more convenient, you can choose a new time through our online booking system. Again, we apologize for the inconvenience.",
    qs: [
      { q: "Why is the speaker calling?", o: ["To change an appointment", "To confirm a payment", "To introduce a new dentist", "To announce new office hours"], a: 0, e: "醫師那天要出差開會，so we need to reschedule，打來是為了改約診時間。" },
      { q: "What does the speaker ask the listener to bring?", o: ["A medical form", "An insurance card", "A photo ID", "A payment receipt"], a: 1, e: "could you please bring your current insurance card，要帶最新的保險卡。" },
      { q: "According to the speaker, what can the listener do online?", o: ["Update her address", "Pay a bill", "Select a new time", "Read about a conference"], a: 2, e: "you can choose a new time through our online booking system，可以在線上選新的時段。choose 換成 select 是同義改寫。" }
    ]
  }
];
