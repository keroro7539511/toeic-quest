// 模擬考 3：Part 4 獨白（Questions 71–100），10 組 × 3 題。最後兩組為看圖題。
window.MOCK3 = window.MOCK3 || {};
window.MOCK3.part4 = [
  // Questions 71-73
  {
    kind: "voicemail", speaker: "M",
    text: "Hello, Ms. Lambert. This is Owen Fischer from Bridgepoint Staffing, returning your call about a temporary receptionist for your dental office. I'm happy to tell you that we've found someone who fits your needs. Her name is Carla Mendes, and she worked at a medical clinic for three years, so she's already familiar with appointment-scheduling software. She can start on Monday, the fourth, and stay for the full six weeks while your regular receptionist is on leave. Before then, I'll need you to sign the service agreement I e-mailed you this morning. Once it's signed, I'll send you Carla's contact information so you can tell her what time to arrive. Please call me back at 555-0148 if you have any questions.",
    qs: [
      { q: "Where does the listener most likely work?", o: ["At a staffing agency", "At a dental office", "At a hospital", "At a software company"], a: 1, e: "說話者打來談 a temporary receptionist for your dental office → 聽者在牙醫診所工作。人力派遣公司是說話者的公司，是陷阱。" },
      { q: "What does the speaker say about Carla Mendes?", o: ["She is a recent graduate.", "She can only work part-time.", "She has relevant work experience.", "She designed some software."], a: 2, e: "她在診所工作過三年、熟悉預約軟體 → 具備相關工作經驗。她會待滿六週，不是只能兼職。" },
      { q: "What does the speaker ask the listener to do?", o: ["Call Ms. Mendes", "Schedule an interview", "Update a Web site", "Sign a document"], a: 3, e: "I'll need you to sign the service agreement → 簽合約，agreement 改寫成 document。簽完後才會拿到 Carla 的聯絡方式，所以不是現在就打給她。" }
    ]
  },
  // Questions 74-76
  {
    kind: "announcement", speaker: "W",
    text: "Good afternoon, visitors, and welcome to the Halvorsen Museum of Modern Art. Please note that the museum will close early today, at four P.M., so that our staff can prepare for this evening's private fundraising event. We apologize for any inconvenience. Also, if you haven't tried it yet, our new audio guide is now available as a free app. Simply scan the code posted at the entrance to each gallery, and you'll hear our curators describe the artworks on display. Headphones can be borrowed at the coat check on the first floor. Finally, the museum café on the third floor is offering twenty percent off all sandwiches until closing time. Thank you, and enjoy your visit.",
    qs: [
      { q: "Why will the museum close early today?", o: ["To install a new exhibit", "To perform some repairs", "To hold a staff training", "To prepare for a private event"], a: 3, e: "so that our staff can prepare for this evening's private fundraising event → 要準備晚上的私人募款活動。" },
      { q: "According to the speaker, how can listeners use the audio guide?", o: ["By renting a device", "By scanning a code", "By asking a curator", "By paying at the entrance"], a: 1, e: "Simply scan the code posted at the entrance to each gallery → 掃描展廳入口的條碼。語音導覽是免費 app，不用租機器或付費。" },
      { q: "What is available on the first floor?", o: ["Headphones to borrow", "Discounted sandwiches", "Free museum maps", "Gift shop items"], a: 0, e: "Headphones can be borrowed at the coat check on the first floor → 一樓可以借耳機。打折三明治在三樓的咖啡廳。" }
    ]
  },
  // Questions 77-79
  {
    kind: "advertisement", speaker: "W",
    text: "Do your employees spend all day staring at gray walls and computer screens? Studies show that plants in the workplace can reduce stress and improve concentration. At Evergreen Office Plants, we make it easy. Our designers will visit your office, recommend plants that suit your lighting and space, and install them for you. After that, one of our technicians will stop by every two weeks to water, trim, and replace any plant that isn't doing well, all for one low monthly fee. You'll never have to worry about a dying plant in your lobby again. For a limited time, businesses that sign up for a one-year contract will receive their first two months free. Visit our Web site today to schedule a free consultation.",
    qs: [
      { q: "What is being advertised?", o: ["A furniture design company", "A plant care service for offices", "A flower delivery shop", "A stress management course"], a: 1, e: "設計師到辦公室推薦、安裝植物，之後技師定期照顧 → 辦公室植物租賃與照護服務。減壓只是植物的好處，不是廣告商品。" },
      { q: "What does the speaker say the technicians will do?", o: ["Install new lighting", "Clean the lobby", "Visit regularly to maintain plants", "Redesign office spaces"], a: 2, e: "a technician will stop by every two weeks to water, trim, and replace → 每兩週來照顧植物。lighting 是設計師挑植物時考慮的條件，不是要裝燈。" },
      { q: "How can listeners schedule a consultation?", o: ["By going online", "By calling a technician", "By visiting a store", "By signing a one-year contract"], a: 0, e: "Visit our Web site today to schedule a free consultation → 上網預約。簽一年合約是送兩個月免費的條件，和預約諮詢無關，是陷阱。" }
    ]
  },
  // Questions 80-82
  {
    kind: "news", speaker: "M",
    text: "In business news, software developer Kestrel Systems announced yesterday that it will open a regional office in Port Ellis this spring. The company, which is best known for its scheduling software for hospitals, plans to hire about one hundred and fifty people over the next two years, mainly engineers and customer support staff. Company president Lena Sorensen said Port Ellis was chosen because of its strong technical university and its relatively low office rents. The city's mayor welcomed the news, saying the new jobs will help keep local graduates from moving away. Kestrel will hold a recruiting fair at the Port Ellis Public Library on March ninth, and job seekers are encouraged to bring copies of their resumes.",
    qs: [
      { q: "What is the news report mainly about?", o: ["A new hospital", "A university's research", "A company's expansion", "A change in city leadership"], a: 2, e: "Kestrel Systems 要在 Port Ellis 開新的區域辦公室並招募人力 → 公司擴張。醫院只是該公司軟體的客戶。" },
      { q: "According to Ms. Sorensen, why was Port Ellis chosen?", o: ["It has many hospitals.", "It has a strong university.", "Its mayor offered support.", "It is close to the company's headquarters."], a: 1, e: "because of its strong technical university and its relatively low office rents → 有很強的理工大學（以及租金較低）。市長是在消息公布後才表示歡迎，不是選擇的原因。" },
      { q: "What will happen on March ninth?", o: ["An office will officially open.", "A library will be renovated.", "A software product will be released.", "A hiring event will be held."], a: 3, e: "Kestrel will hold a recruiting fair ... on March ninth → 舉辦徵才活動。圖書館只是活動地點。" }
    ]
  },
  // Questions 83-85
  {
    kind: "tour", speaker: "W",
    text: "Good morning, everyone, and welcome to Ridgeway Paper Mill. I'm Sandra, and I'll be guiding you through our facility today. Every year, this mill turns about forty thousand tons of used newspapers and cardboard boxes into new paper products. We'll start in the sorting area, where workers remove plastic and metal from the materials that arrive by truck. Then we'll move on to the pulping room. Now, the machines in that room are quite loud. So I'll explain everything you need to know before we go in, and you'll each be given a pair of ear protectors at the door. Our tour ends at the gift shop, where you can pick up notebooks and greeting cards made right here from recycled paper.",
    qs: [
      { q: "What happens in the sorting area?", o: ["Unwanted materials are taken out.", "Paper is cut into notebooks.", "Trucks are loaded with boxes.", "Visitors receive safety equipment."], a: 0, e: "workers remove plastic and metal from the materials → 把塑膠和金屬這些不要的東西挑出來。耳罩是在製漿室門口發的。" },
      { q: "Why does the speaker say, \"the machines in that room are quite loud\"?", o: ["To warn that the room is closed today", "To explain why she will speak before entering a room", "To apologize for a broken machine", "To ask listeners to stay together"], a: 1, e: "她接著說 So I'll explain everything ... before we go in → 因為機器很吵，進去後聽不到，所以要先在外面講解。So 後面就是答案線索。" },
      { q: "What can listeners buy at the gift shop?", o: ["Ear protectors", "Products made at the mill", "Books about paper history", "Newspapers"], a: 1, e: "notebooks and greeting cards made right here from recycled paper → 在這裡用再生紙做的商品。舊報紙是原料，不是賣的商品。" }
    ]
  },
  // Questions 86-88
  {
    kind: "meeting", speaker: "M",
    text: "Before we finish, I want to talk about the renovation of the fourth floor. Starting on the twentieth, a construction crew will be working there for about six weeks, so the twenty-five people who sit on that floor will need to move temporarily. We don't have enough empty desks on the other floors for everyone, so we'll be using a desk reservation system. Each evening, you'll book a desk for the following day on the company intranet. To make this work, we're also asking each team to choose two days a week when its members will work from home. Please discuss this with your team and send me your preferred days by Friday. I know this isn't ideal, but the new floor will have a larger break room and twice as many meeting rooms.",
    qs: [
      { q: "What will happen on the twentieth?", o: ["Construction work will begin.", "A new system will be tested.", "Some teams will be combined.", "A new office will open."], a: 0, e: "Starting on the twentieth, a construction crew will be working there → 二十號開始施工。新樓層是整修完六週後才會啟用。" },
      { q: "What are the teams asked to decide?", o: ["Where to hold meetings", "Who will move to another floor", "Which days to work remotely", "How to design a break room"], a: 2, e: "asking each team to choose two days a week when its members will work from home → 決定哪兩天在家工作，work from home 改寫成 work remotely。" },
      { q: "What does the speaker say about the new fourth floor?", o: ["It will have more meeting rooms.", "It will have more desks.", "It will be ready in two weeks.", "It will be used by visitors."], a: 0, e: "twice as many meeting rooms → 會議室數量加倍，還有較大的休息室。施工期是六週，不是兩週；也沒提到座位變多。" }
    ]
  },
  // Questions 89-91
  {
    kind: "talk", speaker: "W",
    text: "Thanks for coming to this session on managing online reviews. Many small business owners tell me they're afraid of negative reviews, so they simply don't read them. But your customers are reading them. Most people check at least three reviews before they try a new restaurant or shop. So here's what I recommend. First, respond to every negative review within forty-eight hours. Keep it short, apologize, and offer to fix the problem. Other customers notice when you take criticism seriously. Second, ask satisfied customers to leave a review. Most are happy to do it, but they won't think of it unless you ask. Now, you may be thinking that this is a lot of extra work. Well, one of my clients, a bakery owner, spends about ten minutes a day on it, and her average rating has gone from three stars to four and a half.",
    qs: [
      { q: "Who most likely are the listeners?", o: ["Restaurant critics", "Software developers", "Small business owners", "Bakery employees"], a: 2, e: "Many small business owners tell me... 整段談店家如何處理網路評論 → 聽眾是小店老闆。烘焙店老闆只是她舉的客戶例子。" },
      { q: "Why does the speaker say, \"But your customers are reading them\"?", o: ["To explain how she collects data", "To suggest hiring more staff", "To praise the listeners' businesses", "To stress that reviews should not be ignored"], a: 3, e: "前一句說老闆們怕負評所以不看，她用 But 轉折說「但你的顧客在看」→ 強調評論不能忽視。" },
      { q: "Why does the speaker mention a bakery owner?", o: ["To introduce the next speaker", "To recommend a local business", "To explain why ratings can drop", "To show that her advice does not take much time"], a: 3, e: "聽眾可能覺得工作量太大，她舉烘焙店老闆每天只花約十分鐘、評分就從三星升到四星半 → 說明這方法不費時又有效。評分是上升，不是下降。" }
    ]
  },
  // Questions 92-94
  {
    kind: "broadcast", speaker: "M",
    text: "You're listening to City Arts Weekly on KLMV. The Brennan Valley Film Festival opens this Thursday, and this year the organizers have added something new: outdoor screenings in Harbor Park every evening at eight. Tickets for the park screenings are free, but because space is limited, you'll need to reserve them online in advance. Indoor screenings will take place at the Rialto Theater as usual, with tickets at twelve dollars each. The festival closes on Sunday with a question-and-answer session with documentary director Malik Osei, whose film about local fishing families won a national award last year. After the break, I'll be talking with one of the festival volunteers about how this year's films were chosen. Stay with us.",
    qs: [
      { q: "What is new at this year's festival?", o: ["Outdoor screenings", "A higher ticket price", "A different theater", "An award ceremony"], a: 0, e: "this year the organizers have added something new: outdoor screenings in Harbor Park → 新增戶外放映。室內放映照舊在 Rialto 戲院。" },
      { q: "What does the speaker say listeners must do to attend a park screening?", o: ["Pay twelve dollars", "Reserve a ticket online", "Arrive before eight", "Bring their own chairs"], a: 1, e: "you'll need to reserve them online in advance → 要事先上網預約。十二美元是室內放映的票價。" },
      { q: "What will listeners hear after the break?", o: ["A film review", "A weather report", "A talk by a director", "An interview with a volunteer"], a: 3, e: "After the break, I'll be talking with one of the festival volunteers → 訪問志工。導演的座談是星期天閉幕時的活動。" }
    ]
  },
  // Questions 95-97
  {
    kind: "announcement", speaker: "W",
    graphic: { kind: "table", title: "Office Expo: Afternoon Product Demonstrations", headers: ["Time","Product","Location"], rows: [["12:30 P.M.","SmartShelf Inventory Scanner","Hall A"],["1:30 P.M.","AquaPure Water Station","Hall B"],["2:30 P.M.","LumaDesk Standing Desk","Hall C"],["3:30 P.M.","QuietCool Ceiling Fan","Hall D"]] },
    text: "Attention, Office Expo visitors. We have a change to this afternoon's product demonstrations. The demonstration scheduled for Hall C has been moved because the sound system in that hall stopped working this morning. It will now take place in Hall A, at the same time. Hall A is right next to the main entrance, so it's easy to find. Also, all visitors who attend at least two demonstrations today can receive a free canvas tote bag. Just have your badge scanned at the end of each demonstration, and then show it at the information desk. Finally, please remember that the exhibition halls close at five o'clock today, an hour earlier than yesterday. Thank you, and enjoy the rest of the expo.",
    qs: [
      { q: "Why has a demonstration been moved?", o: ["A hall is too small.", "Some equipment is not working.", "A presenter arrived late.", "More visitors are expected."], a: 1, e: "the sound system in that hall stopped working → 音響設備故障，所以換場地。" },
      { q: "Look at the graphic. Which product's demonstration has changed locations?", o: ["SmartShelf Inventory Scanner", "AquaPure Water Station", "LumaDesk Standing Desk", "QuietCool Ceiling Fan"], a: 2, e: "廣播說原定在 Hall C 的展示移到 Hall A，對照表格 Hall C 是 LumaDesk 站立式辦公桌。SmartShelf 是原本就在 Hall A 的產品，是陷阱。" },
      { q: "How can visitors receive a free bag?", o: ["By attending two demonstrations", "By arriving before five o'clock", "By visiting the main entrance", "By filling out a survey"], a: 0, e: "visitors who attend at least two demonstrations today can receive a free canvas tote bag → 參加至少兩場展示，掃描識別證後到服務台領取。" }
    ]
  },
  // Questions 98-100
  {
    kind: "introduction", speaker: "W",
    graphic: { kind: "list", title: "Retail Leadership Workshop: Morning Agenda", items: ["9:00 Welcome and Introductions","9:30 Hiring Seasonal Staff","10:30 Coffee Break","10:45 Visual Merchandising Basics","11:45 Panel: Customer Loyalty Programs"] },
    text: "Good morning, everyone, and welcome to the Retail Leadership Workshop. I'm Teresa Vogel, and I'll be your host today. Before we begin, there's one change to the agenda in front of you. The speaker for the session right after the coffee break, Jonas Becker, is stuck in traffic because of an accident on the highway. He's fine, but he won't get here until around eleven thirty. So we're going to switch his session with the panel discussion, which will now start at ten forty-five. Mr. Becker will give his talk at eleven forty-five instead. Also, lunch will be served in the Garden Room, not in this hall. Okay, let's get started. Please turn to the person next to you and introduce yourself.",
    qs: [
      { q: "Why is Mr. Becker late?", o: ["His flight was canceled.", "He went to the wrong building.", "He is feeling unwell.", "He was delayed by traffic."], a: 3, e: "is stuck in traffic because of an accident on the highway → 因為公路車禍而塞車。說話者特別說 He's fine，所以不是身體不舒服。" },
      { q: "Look at the graphic. Which session will begin at eleven forty-five?", o: ["Hiring Seasonal Staff", "Coffee Break", "Visual Merchandising Basics", "Panel: Customer Loyalty Programs"], a: 2, e: "Becker 原本負責咖啡休息後的那場，看議程是 Visual Merchandising Basics，現在和座談對調到 11:45。原本 11:45 的座談改到 10:45，是陷阱。" },
      { q: "What are listeners asked to do now?", o: ["Introduce themselves to a neighbor", "Move to the Garden Room", "Read the agenda", "Have some coffee"], a: 0, e: "Please turn to the person next to you and introduce yourself → 跟旁邊的人自我介紹。Garden Room 是午餐的地點，不是現在要去的地方。" }
    ]
  }
];
