// 模擬考 1 — Part 7 單篇閱讀（Questions 147–175，共 10 組 29 題）
// 雙篇 / 三篇閱讀在 part7_2_multi.js，於本檔之後載入並 concat。
window.MOCK1 = window.MOCK1 || {};
window.MOCK1.part7 = (window.MOCK1.part7 || []).concat([
  // Questions 147–148
  {
    passages: [
      {
        kind: "text",
        title: "Text-message chain",
        messages: [
          ["Irene Castillo", "9:02 A.M.", "Tom, are you already at the Wexford Hotel? The client presentation starts at 10:00."],
          ["Tom Becker", "9:05 A.M.", "I'm about ten minutes away. Traffic on Route 9 is heavier than usual."],
          ["Irene Castillo", "9:07 A.M.", "OK. I just realized I left the product samples on my desk. Could you stop by the office and get them?"],
          ["Tom Becker", "9:10 A.M.", "I already passed it, unfortunately. Would it be faster to have someone send them over by courier?"],
          ["Irene Castillo", "9:14 A.M.", "Good thinking. Min-jun is at the front desk this morning."],
          ["Tom Becker", "9:15 A.M.", "Great. I'll set up the projector when I get there so we're ready to start on time."],
        ],
      },
    ],
    qs: [
      { q: "What problem does Ms. Castillo mention?", o: ["A client has canceled a meeting.", "Some items were left behind.", "A projector is not working.", "A hotel room is unavailable."], a: 1, type: "detail", e: "Ms. Castillo 在 9:07 說她把產品樣品留在辦公桌上（left the product samples on my desk），也就是東西忘了帶。投影機只是 Mr. Becker 要去架設，並沒有故障。" },
      { q: "At 9:14 A.M., what does Ms. Castillo most likely mean when she writes, \"Min-jun is at the front desk this morning\"?", o: ["She wants Mr. Becker to meet Min-jun at the hotel.", "Min-jun will lead the client presentation.", "The office will be closed later in the day.", "A coworker can help send the samples."], a: 3, type: "intent", e: "Mr. Becker 建議請人用快遞把樣品送來，Ms. Castillo 回答 Good thinking 並提到 Min-jun 今天早上在櫃台，意思是這位同事可以幫忙寄送樣品。" },
    ],
  },
  // Questions 149–150
  {
    passages: [
      {
        kind: "ad",
        title: "Harborview Language Institute",
        body: "Business English Evening Courses\n\nImprove your professional communication skills with our eight-week evening courses, designed especially for working adults. Classes meet every Tuesday and Thursday from 6:30 P.M. to 8:30 P.M. at our downtown campus, just two blocks from Central Station. Class sizes are limited to 12 students so that every participant receives individual attention.\n\nThis fall, choose from Presentations and Public Speaking, Business Writing, or Negotiation Skills.\n\nRegister by August 29 and receive 15 percent off tuition. Companies that enroll three or more employees also qualify for our special group rate. To register, visit www.harborviewli.com or call 555-0163.",
      },
    ],
    qs: [
      { q: "For whom is the advertisement most likely intended?", o: ["Employees who want to improve their work-related English", "University students preparing for entrance exams", "Teachers looking for part-time positions", "Travelers planning a trip abroad"], a: 0, type: "main", e: "廣告提到課程是為 working adults（在職成人）設計，內容是簡報、商業寫作、談判等職場英文，所以對象是想加強工作英文的上班族。" },
      { q: "How can a company receive a special price?", o: ["By registering before August 1", "By paying tuition in advance", "By enrolling several staff members", "By choosing more than one course"], a: 2, type: "detail", e: "文中說 Companies that enroll three or more employees 可享團體優惠，也就是公司讓多名員工報名。8 月 29 日前報名的折扣是給個人的，而且日期也不是 August 1。" },
    ],
  },
  // Questions 151–152
  {
    passages: [
      {
        kind: "notice",
        title: "Attention Tenants of Alder Court Apartments",
        body: "The building's water supply will be shut off on Wednesday, May 14, from 9:00 A.M. to 1:00 P.M. so that plumbers can replace a main valve in the basement.\n\nDuring this time, tenants will not be able to use sinks, showers, or washing machines. We recommend filling containers with water in advance for drinking and cooking. Please note that the laundry room on the ground floor will be closed for the entire day.\n\nIf the work is completed early, water service will be restored immediately. Questions may be directed to the building manager, Ms. Adaeze Nwosu, at 555-0127.\n\nThank you for your patience.",
      },
    ],
    qs: [
      { q: "What is the purpose of the notice?", o: ["To announce new laundry room hours", "To introduce a new building manager", "To inform residents about a temporary service interruption", "To request payment for plumbing repairs"], a: 2, type: "main", e: "公告主旨是 5 月 14 日上午會暫時停水以更換閥門，也就是通知住戶暫時停止供水。洗衣房關閉只是其中一個細節，不是主要目的。" },
      { q: "What are tenants advised to do?", o: ["Prepare a supply of water before the work begins", "Contact a plumber directly", "Use the laundry room in the morning", "Leave their apartments unlocked"], a: 0, type: "detail", e: "公告建議 filling containers with water in advance，也就是停水前先儲水。洗衣房當天整天關閉，所以早上也不能用。" },
    ],
  },
  // Questions 153–154
  {
    passages: [
      {
        kind: "invoice",
        title: "Pinecrest Catering: Invoice",
        meta: [["Invoice No.", "PC-2291"], ["Bill to", "Delgado & Hart Architects, 77 Fulton Street"], ["Event date", "Friday, June 6"], ["Invoice date", "June 9"]],
        table: {
          headers: ["Item", "Quantity", "Unit Price", "Amount"],
          rows: [
            ["Assorted sandwich platter", "4", "$55.00", "$220.00"],
            ["Garden salad bowl", "3", "$30.00", "$90.00"],
            ["Fruit and pastry tray", "2", "$42.00", "$84.00"],
            ["Coffee and tea service (per person)", "25", "$3.00", "$75.00"],
            ["Delivery and setup", "1", "$35.00", "$35.00"],
            ["", "", "Total", "$504.00"],
          ],
        },
        body: "Payment is due within 30 days of the invoice date. A 2 percent discount applies to payments received within 10 days.\n\nNote: As requested by your office on June 4, the fruit and pastry trays were substituted for the dessert assortment listed in your original order.",
      },
    ],
    qs: [
      { q: "What is indicated about the order?", o: ["It was delivered on June 9.", "It was paid for in advance.", "It was prepared for 30 people.", "It was changed from the original request."], a: 3, type: "infer", e: "註記說應客戶 6 月 4 日的要求，把原訂單的甜點拼盤換成水果糕點盤，表示訂單有更動。June 9 是發票日期而非送達日；咖啡茶水是 25 人份，不是 30 人。" },
      { q: "What is NOT listed as part of the order on the invoice?", o: ["Beverage service", "A dessert assortment", "Delivery and setup", "Salad"], a: 1, type: "not", e: "甜點拼盤是原訂單的品項，但已被水果糕點盤取代，所以沒有出現在發票上。飲料（咖啡茶水）、外送布置、沙拉都列在表格中。" },
    ],
  },
  // Questions 155–157
  {
    passages: [
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Yusuf Demir <ydemir@norvalepharma.com>"], ["To", "Julia Brandt <jbrandt@mailbox.net>"], ["Date", "February 24"], ["Subject", "Your first day"]],
        body: "Dear Ms. Brandt,\n\nWelcome to Norvale Pharmaceuticals! We are delighted that you will be joining our quality control team as a laboratory analyst. This e-mail explains what to expect on your first day, Monday, March 3.\n\nPlease arrive at the main entrance of Building C at 8:30 A.M. and bring a photo ID so that security can issue your employee badge. You will spend the morning in an orientation session with other new employees, where you will review safety procedures and complete your tax forms. Lunch will be provided.\n\nIn the afternoon, your supervisor, Dr. Lena Hoffmann, will give you a tour of the laboratory and introduce you to your colleagues. Laboratory coats and safety glasses will be supplied, but please wear closed-toe shoes.\n\nIf you have any questions before your start date, feel free to reply to this e-mail.\n\nBest regards,\nYusuf Demir\nHuman Resources",
      },
    ],
    qs: [
      { q: "Why was the e-mail sent?", o: ["To provide information to a new employee", "To schedule a job interview", "To announce a change in safety procedures", "To request that tax forms be returned"], a: 0, type: "main", e: "信中歡迎 Ms. Brandt 加入並說明第一天上班的安排，目的是提供新進員工報到資訊。填寫稅務表格是在迎新時進行，不是要求寄回。" },
      { q: "What should Ms. Brandt bring on March 3?", o: ["A laboratory coat", "A form of identification", "Her own lunch", "Safety glasses"], a: 1, type: "detail", e: "信中要求帶 photo ID（附照片的身分證件）以便製作員工證。實驗衣和護目鏡由公司提供，午餐也有供應，都不需要自己帶。" },
      { q: "What is suggested about Dr. Hoffmann?", o: ["She works in the Human Resources Department.", "She will lead the morning orientation.", "She was recently hired by Norvale.", "She will work closely with Ms. Brandt."], a: 3, type: "infer", e: "Dr. Hoffmann 是 Ms. Brandt 的直屬主管（your supervisor），下午會帶她參觀實驗室，可推論兩人會密切共事。寄件的人資是 Yusuf Demir，不是她。" },
    ],
  },
  // Questions 158–160
  {
    passages: [
      {
        kind: "webpage",
        title: "Kestrel Bike Share: Frequently Asked Questions",
        body: "How do I start a ride?\nDownload the Kestrel app, create an account, and scan the code on the handlebar of any bike. The lock will open automatically.\n\nHow much does it cost?\nSingle rides cost $2 for the first 30 minutes and $1 for each additional 15 minutes. Monthly members pay $18 and receive unlimited rides of up to 45 minutes each.\n\nWhere can I return a bike?\nBikes must be returned to any of our 120 docking stations across the city. Leaving a bike outside a station will result in a $25 fee.\n\nWhat if a bike is damaged?\nPlease report the problem through the app before starting your ride. Riders who report a flat tire or broken brake will receive a credit for one free ride. Our maintenance team visits every station at least twice a day and will attend to reported bikes promptly.",
      },
    ],
    qs: [
      { q: "According to the webpage, how is a bike unlocked?", o: ["By entering a code at the docking station", "By calling customer service", "By scanning a code with a mobile application", "By inserting a membership card"], a: 2, type: "detail", e: "網頁說明下載 Kestrel app 後掃描車把上的條碼，車鎖就會自動打開。文中的 code 是用掃描的，不是在停車站輸入，這是同字陷阱。" },
      { q: "What is suggested about monthly members?", o: ["They can leave bikes outside stations without a fee.", "They pay $2 for each ride.", "They may be charged extra for rides longer than 45 minutes.", "They receive a free helmet."], a: 2, type: "infer", e: "月費會員享有「每次最長 45 分鐘」的無限次騎乘，可推論超過 45 分鐘可能要另外付費。每次 2 美元是單次騎乘的價格；車停在站外一律罰 25 美元。" },
      { q: "On the webpage, the word \"attend\" in paragraph 4, line 4, is closest in meaning to", o: ["deal with", "be present at", "listen to", "accompany"], a: 0, type: "vocab", e: "attend to 在這裡是「處理」的意思，維修團隊會迅速處理被回報的自行車，所以最接近 deal with。be present at「出席」是 attend 最常見的意思，但此處不適用。" },
    ],
  },
  // Questions 161–163
  {
    passages: [
      {
        kind: "memo",
        title: "Memo",
        meta: [["To", "All Branch Managers"], ["From", "Olivia Grant, Regional Director"], ["Date", "October 2"], ["Subject", "Holiday staffing"]],
        body: "As the holiday shopping season approaches, I would like to remind all branch managers of our staffing policies for November and December.\n\nFirst, requests for time off during the period from November 20 to December 31 must be submitted by October 17. Requests received after this date will be considered only in exceptional circumstances. Second, each branch should hire enough seasonal workers to cover its busiest weekends. Last year, several stores were understaffed on the Saturday after Thanksgiving, which resulted in long checkout lines and a number of customer complaints.\n\nTo help with recruitment, the regional office will host a hiring event on October 25 at the Lakeside Convention Hall. Managers who plan to attend should notify Kevin Osei in Human Resources by October 20 so that tables can be reserved.\n\nFinally, please remember that all seasonal employees must complete the online training module before their first shift. This module covers cash register operation, our returns policy, and store safety.\n\nThank you for your cooperation.",
      },
    ],
    qs: [
      { q: "What is the purpose of the memo?", o: ["To announce the opening of a new branch", "To explain procedures for the busy season", "To respond to a customer complaint", "To introduce a new Human Resources employee"], a: 1, type: "main", e: "備忘錄提醒分店經理年底購物旺季的人力政策：請假期限、招募季節工、徵才活動、線上訓練，目的是說明旺季的作業規定。顧客抱怨只是提到去年的例子。" },
      { q: "What is NOT mentioned as a topic of the online training module?", o: ["Using cash registers", "Handling returned items", "Maintaining a safe workplace", "Scheduling work shifts"], a: 3, type: "not", e: "訓練課程涵蓋收銀機操作、退貨政策與店內安全，沒有提到排班。first shift 只是說第一次上班前要完成訓練，是提到但不是答案的陷阱。" },
      { q: "In the memo, the word \"cover\" in paragraph 2, line 4, is closest in meaning to", o: ["provide staff for", "write about", "protect", "pay for"], a: 0, type: "vocab", e: "hire enough seasonal workers to cover its busiest weekends 指雇用足夠的季節工來「支應」最忙的週末人力，最接近 provide staff for。cover 也有「支付」「報導」「遮蓋」的意思，但不符此處語境。" },
    ],
  },
  // Questions 164–167
  {
    passages: [
      {
        kind: "chat",
        title: "Online chat discussion",
        messages: [
          ["Grace Liu", "2:01 P.M.", "Hi, everyone. The printer just told me they can't deliver the Tidewater brochures until next Thursday. The trade show opens on Tuesday."],
          ["Mateo Ruiz", "2:03 P.M.", "That's a problem. We promised the client we'd have 500 copies at the booth on opening day."],
          ["Anika Shah", "2:04 P.M.", "What caused the delay?"],
          ["Grace Liu", "2:05 P.M.", "Their main press broke down, and the replacement part won't arrive until Monday."],
          ["Peter Novak", "2:07 P.M.", "I used to work with a print shop on Delmar Avenue called Quickmark. They're small, but they've done rush jobs for me before."],
          ["Mateo Ruiz", "2:08 P.M.", "Can they handle 500 full-color copies by Monday?"],
          ["Peter Novak", "2:09 P.M.", "I'd have to ask. I'll call them right now."],
          ["Anika Shah", "2:10 P.M.", "In the meantime, I can print 50 copies on our office printer. At least we'd have something to hand out on the first morning."],
          ["Grace Liu", "2:12 P.M.", "Good idea. But the paper we have here isn't as heavy as the stock we ordered."],
          ["Anika Shah", "2:13 P.M.", "It's only for a day or two."],
          ["Peter Novak", "2:21 P.M.", "I just spoke to Quickmark. They can do it by Monday afternoon if we send them the files within the hour."],
          ["Grace Liu", "2:22 P.M.", "Perfect. I'll take care of that now."],
        ],
      },
    ],
    qs: [
      { q: "What is the main problem being discussed?", o: ["A trade show has been canceled.", "A client has requested changes to a design.", "An office printer is out of paper.", "Some printed materials will not be ready on time."], a: 3, type: "main", e: "原本的印刷廠要到下週四才能交貨，但商展週二就開幕，問題是宣傳手冊來不及印好。辦公室印表機紙張只是比較薄，並不是沒紙。" },
      { q: "What is indicated about Quickmark?", o: ["Mr. Novak has used its services in the past.", "It is the company whose main press broke down.", "It is located next to the trade show venue.", "It usually charges extra for full-color printing."], a: 0, type: "detail", e: "Mr. Novak 說 Quickmark 以前幫他做過急件（they've done rush jobs for me before），表示他用過該公司的服務。印刷機故障的是原本的印刷廠。" },
      { q: "At 2:13 P.M., what does Ms. Shah most likely mean when she writes, \"It's only for a day or two\"?", o: ["She expects the trade show to end early.", "She believes the printer will be repaired soon.", "She thinks the quality difference is acceptable for a short time.", "She plans to take two days off from work."], a: 2, type: "intent", e: "Ms. Liu 擔心辦公室的紙比較薄，Ms. Shah 回答「只用一兩天而已」，意思是短期內品質差一點可以接受，等正式手冊印好就好。" },
      { q: "What will Ms. Liu most likely do next?", o: ["Call the original printer", "Send files to a print shop", "Buy heavier paper", "Contact the client"], a: 1, type: "infer", e: "Quickmark 要求一小時內收到檔案，Ms. Liu 回答 I'll take care of that now，表示她接下來會把檔案寄給這家印刷店。" },
    ],
  },
  // Questions 168–171
  {
    passages: [
      {
        kind: "letter",
        title: "Letter",
        meta: [["To", "Mr. Samuel Achebe, 15 Quarry Road, Harrington"], ["From", "Harrington Public Library Foundation"], ["Date", "April 11"]],
        body: "Dear Mr. Achebe,\n\nOn behalf of the Harrington Public Library Foundation, I would like to thank you for your generous contribution to our Reading Room Renewal campaign. Thanks to supporters like you, we have now raised $184,000, which is more than 90 percent of our goal. [1]\n\nAs you may know, the reading room on the library's second floor has not been updated since the building opened in 1978. The renovation will replace worn carpeting and furniture, improve lighting, and add twenty computer workstations with free Internet access. [2] Construction is scheduled to begin in June and should be finished by early September.\n\nIn recognition of your support, your name will appear on a donor wall to be installed at the entrance to the new reading room. [3] Please check the enclosed card to confirm that your name is spelled as you would like it to appear, and return the card in the postage-paid envelope by May 2.\n\nWe would also be delighted if you could join us for a donor reception on Saturday, May 17, at 4:00 P.M. in the library's main hall. [4] Library director Beatriz Moreno will present the final design plans, and light refreshments will be served. To reserve a place, please call our office at 555-0110.\n\nWith sincere gratitude,\n\nNathaniel Ford\nDirector of Development\nHarrington Public Library Foundation",
      },
    ],
    qs: [
      { q: "Why did Mr. Ford write the letter?", o: ["To express appreciation for a donation", "To announce the opening of a new library", "To request payment for a membership", "To invite Mr. Achebe to speak at an event"], a: 0, type: "main", e: "信一開頭就感謝 Mr. Achebe 對閱覽室翻新募款活動的慷慨捐款，主要目的是致謝。雖然有邀請他參加酒會，但不是請他演講。" },
      { q: "What is Mr. Achebe asked to do by May 2?", o: ["Make an additional contribution", "Call the library to reserve a seat", "Review design plans for the reading room", "Verify how his name will be displayed"], a: 3, type: "detail", e: "信中請他檢查附上的卡片，確認名字在捐款者牆上的拼法，並在 5 月 2 日前寄回，也就是確認名字如何呈現。打電話預約是為了 5 月 17 日的酒會，沒有期限是 May 2。" },
      { q: "What is suggested about the reading room?", o: ["It is located on the first floor.", "It will be closed permanently in June.", "It has not been renovated in several decades.", "It was designed by Beatriz Moreno."], a: 2, type: "infer", e: "閱覽室從 1978 年建館以來就沒有更新過，可推論已經數十年沒整修。閱覽室在二樓；六月是開始施工，不是永久關閉；Beatriz Moreno 是館長，只是負責發表設計。" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"These workstations will be especially helpful to local residents who do not have computers at home.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 1, type: "insert", e: "These workstations 指的是前一句提到的 twenty computer workstations，所以句子應放在介紹電腦工作站的句子之後，也就是第二段的位置。" },
    ],
  },
  // Questions 172–175
  {
    passages: [
      {
        kind: "article",
        title: "Local Firm Finds Value in Coffee Grounds",
        body: "BROOKFIELD (September 8) — Every day, cafés across Brookfield throw away hundreds of kilograms of used coffee grounds. For Terrance Obi, the founder of GroundUp Materials, that waste represents an opportunity. [1]\n\nMr. Obi started the company three years ago in a rented garage after reading a research paper about the properties of coffee grounds. His small team collects grounds from 45 local cafés, dries them, and combines them with plant-based resins to produce a durable material. The material is then shaped into products such as plant pots, coasters, and serving trays. [2]\n\nAt first, café owners were skeptical. \"Most of them thought we would stop showing up after a few weeks,\" Mr. Obi recalled. To earn their trust, GroundUp offered to collect the grounds free of charge and to provide each participating café with a set of trays made from its own waste. The strategy worked. Several cafés now display the trays at their counters, and customers frequently ask where they came from. [3]\n\nLast year, GroundUp's revenue reached $1.3 million, and the company moved into a 2,000-square-meter facility in the Eastgate industrial district. It now employs 28 people. In July, GroundUp signed an agreement with Hollis Home, a national chain of household goods stores, to supply a line of kitchen products beginning next spring.\n\nThe company's rapid growth has created new challenges, however. Mr. Obi says that to meet the demands of the Hollis Home contract, GroundUp will need three times as many coffee grounds as it currently collects. [4] He is now in discussions with two university dining services and a regional hotel group about adding their kitchens to the collection network.\n\n\"We have only scratched the surface of what this material can do,\" Mr. Obi said.",
      },
    ],
    qs: [
      { q: "What is the article mainly about?", o: ["A new café chain in Brookfield", "A study on the health effects of coffee", "The growth of a company that reuses waste", "A national retailer's expansion plans"], a: 2, type: "main", e: "全文介紹 GroundUp Materials 如何把咖啡渣再製成產品，並從車庫起家成長到營收 130 萬美元，主旨是一家回收廢料公司的成長。Hollis Home 只是合作對象，不是主角。" },
      { q: "What is NOT mentioned as a product made by GroundUp Materials?", o: ["Coasters", "Coffee cups", "Plant pots", "Serving trays"], a: 1, type: "not", e: "文中列出的產品是花盆、杯墊和托盤，沒有提到咖啡杯。原料是咖啡渣，所以「咖啡杯」是利用聯想設計的陷阱。" },
      { q: "How did GroundUp gain the cooperation of café owners?", o: ["By paying them for their coffee grounds", "By advertising their cafés in local newspapers", "By offering them a share of company profits", "By giving them products made from their waste"], a: 3, type: "detail", e: "為了取得信任，GroundUp 免費回收咖啡渣，並送給每家咖啡店用自家咖啡渣做的托盤。是「免費收」而不是「付錢買」咖啡渣，要小心反向陷阱。" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"The company turns them into household items that are sold throughout the region.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 0, type: "insert", e: "句中的 them 指第一段的 used coffee grounds，而且這句話概略說明公司在做什麼，正好接在「那些廢料代表商機」之後，作為導言，後文第二段再詳細說明製程。" },
    ],
  },
]);
