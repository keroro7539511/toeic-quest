// 模擬考 2 — Part 3 對話（Questions 32–70，13 組 39 題；最後 3 組為看圖題）
window.MOCK2 = window.MOCK2 || {};
window.MOCK2.part3 = [
  // Questions 32-34
  {
    lines: [
      ["W", "Hi, Daniel. Do you know if the company car is free on Thursday? I need to visit a client in Brookfield."],
      ["M", "I think Accounting reserved it for the morning, but you can check the online calendar. All the bookings are listed there now."],
      ["W", "Oh, I didn't know that. Where can I find it?"],
      ["M", "It's on the company intranet, under the Facilities tab. And remember to pick up the keys from the front desk before you leave."],
    ],
    qs: [
      { q: "Why does the woman want to use the car?", o: ["To pick up supplies", "To visit a client", "To attend a training session", "To drive to the airport"], a: 1, e: "I need to visit a client in Brookfield → 去拜訪客戶。其他選項都是常見的公務用車理由，但對話沒提到。" },
      { q: "According to the man, where are car bookings listed?", o: ["In an e-mail", "On a notice board", "In the accounting office", "On an online calendar"], a: 3, e: "you can check the online calendar. All the bookings are listed there → 線上行事曆。Accounting 是預約車子的部門，不是查詢的地方。" },
      { q: "What does the man remind the woman to do?", o: ["Get keys from the front desk", "Fill the gas tank", "Return the car by noon", "Submit a receipt"], a: 0, e: "remember to pick up the keys from the front desk → 去櫃台拿鑰匙。" },
    ],
  },
  // Questions 35-37
  {
    lines: [
      ["M", "Hi, I'm here to pick up my bicycle. I dropped it off on Saturday for a tune-up. The name is Kevin Marsh."],
      ["W", "Let me check. Yes, Mr. Marsh, it's ready. Our mechanic noticed that the back tire was badly worn, so he replaced it. He tried to call you first, but nobody answered."],
      ["M", "Oh, I was traveling for work. That's fine, though. I've been meaning to replace that tire anyway."],
      ["W", "Great. The tune-up is forty dollars, and the tire is twenty-five. Also, if you sign up for our free newsletter, you'll get ten percent off today's bill."],
    ],
    qs: [
      { q: "Why did the man visit the shop?", o: ["To buy a new bicycle", "To return a helmet", "To pick up a repaired item", "To sign up for a class"], a: 2, e: "I'm here to pick up my bicycle... for a tune-up → 來領回保養好的腳踏車。他不是來買新車。" },
      { q: "What did the mechanic do?", o: ["He replaced a tire.", "He lowered a price.", "He ordered a part.", "He cleaned the frame."], a: 0, e: "the back tire was badly worn, so he replaced it → 換了後輪胎。" },
      { q: "How can the man get a discount?", o: ["By paying in cash", "By bringing a coupon", "By writing a review", "By signing up for a newsletter"], a: 3, e: "if you sign up for our free newsletter, you'll get ten percent off → 訂閱電子報就打九折。" },
    ],
  },
  // Questions 38-40
  {
    lines: [
      ["M", "Maria, Anna, I just got a call from Coastal Seafood. Because of the storm, they can't deliver any salmon until Friday."],
      ["W", "But the grilled salmon is tonight's special. We've already printed the menus."],
      ["W2", "We still have plenty of the cod that came in yesterday. We could serve it with the same lemon sauce."],
      ["M", "Good idea, Anna. Maria, can you update the specials board out front?"],
      ["W", "Sure. And I'll tell the servers before the dinner shift so they can let customers know."],
    ],
    qs: [
      { q: "What problem does the man mention?", o: ["A staff member is sick.", "A storm damaged the restaurant.", "Some menus contain errors.", "A delivery will not arrive on time."], a: 3, e: "they can't deliver any salmon until Friday → 鮭魚無法如期送達。storm 是延誤的原因，並沒有說餐廳受損；菜單只是已經印好，不是印錯。" },
      { q: "What does Anna suggest doing?", o: ["Closing the restaurant early", "Using a different fish", "Calling another supplier", "Reducing the price of a dish"], a: 1, e: "Anna（第二位女性）說還有很多鱈魚（cod），可以配同樣的檸檬醬 → 改用別種魚。" },
      { q: "What does Maria say she will do?", o: ["Print new menus", "Order more lemons", "Inform the servers", "Call some customers"], a: 2, e: "I'll tell the servers before the dinner shift → 通知服務生。會告知客人的是服務生，不是她打電話給客人。" },
    ],
  },
  // Questions 41-43
  {
    lines: [
      ["W", "Hello, I own a café on Marlowe Street, and I'd like to put a few tables on the sidewalk this summer. Do I need a permit for that?"],
      ["M", "Yes, you do. You can apply online, but the application has to include a drawing that shows exactly where the tables will go."],
      ["W", "I see. How long does it usually take to get approved?"],
      ["M", "Normally about three weeks. But, well, it's April, and every café in town is applying right now."],
      ["W", "Then I'd better send it in this week. Is there a fee?"],
      ["M", "Yes, it's eighty dollars, and you pay it when you submit the application."],
    ],
    qs: [
      { q: "Who most likely is the man?", o: ["A city official", "A restaurant manager", "A furniture salesperson", "A delivery driver"], a: 0, e: "女子打電話詢問人行道擺桌的許可證（permit），男子說明申請方式與規費 → 市政府承辦人員。開咖啡店的是女子。" },
      { q: "Why does the man say, \"it's April, and every café in town is applying right now\"?", o: ["To recommend a different location", "To explain why a rule was changed", "To suggest the process may take longer than usual", "To announce that the deadline has passed"], a: 2, e: "他先說平常約三週，接著提到現在大家都在申請 → 暗示這次審核可能會比平常久，所以女子決定這週就送件。" },
      { q: "What must be included with the application?", o: ["A copy of a lease", "A drawing of the seating area", "A letter from neighbors", "Proof of insurance"], a: 1, e: "the application has to include a drawing that shows exactly where the tables will go → 桌位配置圖。" },
    ],
  },
  // Questions 44-46
  {
    lines: [
      ["M", "Hi, Sophie. Did you get the e-mail about the new expense reporting app? Starting next month, we can't submit paper receipts anymore."],
      ["W", "I saw it. We just take a photo of each receipt with our phones, right? That sounds much faster."],
      ["M", "It should be. There's a training session on Thursday at two for anyone who wants to learn how to use it."],
      ["W", "I'll be at a client meeting then. Do you know if it'll be recorded?"],
      ["M", "I think so. I'll ask Mr. Grant and let you know."],
    ],
    qs: [
      { q: "What are the speakers mainly discussing?", o: ["A client complaint", "A new expense system", "A travel budget", "A phone upgrade"], a: 1, e: "整段在談新的報帳 app（expense reporting app）→ 新的報帳系統。phone 只是拍收據的工具。" },
      { q: "Why can't the woman attend the training?", o: ["She will be on vacation.", "She has not registered.", "She is leading another workshop.", "She will be meeting a client."], a: 3, e: "I'll be at a client meeting then → 那時要和客戶開會。" },
      { q: "What will the man do?", o: ["Ask whether a session will be recorded", "Send the woman some receipts", "Reschedule a meeting", "Install an app on her phone"], a: 0, e: "女子問課程會不會錄影，男子說 I'll ask Mr. Grant and let you know → 去確認是否錄影。" },
    ],
  },
  // Questions 47-49
  {
    lines: [
      ["W", "Mr. Fischer, I'm glad you're here. The opening for your exhibition is on Saturday, and I wanted to go over a few details."],
      ["M", "Of course. By the way, has the framing shop delivered my last four paintings yet?"],
      ["W", "They called this morning. They're running behind, so the paintings won't be here until Friday afternoon."],
      ["M", "Friday afternoon? The guests arrive at six on Saturday."],
      ["W", "I know it's tight, but our staff can hang them on Saturday morning. Also, a reporter from City Arts Weekly would like to interview you at the opening. Would that be all right?"],
      ["M", "Absolutely. That would be great publicity."],
    ],
    qs: [
      { q: "Who most likely is the man?", o: ["A reporter", "A framing shop owner", "An artist", "A gallery guard"], a: 2, e: "your exhibition、my last four paintings → 他是辦展覽的藝術家。reporter 是要來採訪他的人。" },
      { q: "What does the man imply when he says, \"The guests arrive at six on Saturday\"?", o: ["He is worried about the timing.", "He wants to change the start time.", "He has invited too many guests.", "He will arrive late."], a: 0, e: "畫作週五下午才到，開幕是週六傍晚，他重複開幕時間 → 擔心時間太趕，女子也回應 I know it's tight。" },
      { q: "What does the woman ask the man to do?", o: ["Lower his prices", "Give a speech", "Bring additional paintings", "Speak with a journalist"], a: 3, e: "a reporter... would like to interview you → 接受記者採訪，reporter 改寫成 journalist。" },
    ],
  },
  // Questions 50-52
  {
    lines: [
      ["W", "Thanks for coming in, Mr. Ito and Mr. Barker. I've looked over your design for the bookstore renovation, and I love the reading area by the front windows."],
      ["M", "We're glad to hear it. The only issue is the skylight you asked for. Our contractor says the roof would need additional support, which would add about twelve thousand dollars."],
      ["W", "Hmm, that's well beyond what I'd planned to spend."],
      ["M2", "One alternative is to install larger windows on the east wall instead. You'd get plenty of morning light, and it would cost roughly a third as much."],
      ["W", "That sounds reasonable. Could you send me a revised drawing that shows that option?"],
      ["M2", "Certainly. We'll have it to you by Wednesday."],
    ],
    qs: [
      { q: "Who most likely are the men?", o: ["Building designers", "Bookstore employees", "Real estate agents", "Roof repair workers"], a: 0, e: "女子說看過他們為書店改裝做的設計（your design），後面也會寄修改後的圖 → 建築設計師。roof、contractor 是陷阱字。" },
      { q: "Why does the woman say, \"that's well beyond what I'd planned to spend\"?", o: ["To ask for a payment plan", "To complain about a previous bill", "To express reluctance about an expense", "To suggest hiring a new contractor"], a: 2, e: "天窗要多花一萬兩千美元，她說這遠超過預算 → 表示不太願意花這筆錢，所以設計師才提出替代方案。" },
      { q: "What will the woman receive by Wednesday?", o: ["A signed contract", "A revised drawing", "A roof inspection report", "Some window samples"], a: 1, e: "Could you send me a revised drawing → We'll have it to you by Wednesday → 修改後的設計圖。" },
    ],
  },
  // Questions 53-55
  {
    lines: [
      ["M", "Hi, I'm calling from Halvorsen Insurance. We bought twenty tickets for the Saturday evening performance of The River Road as an outing for our staff."],
      ["W", "Yes, I see your order here. How can I help?"],
      ["M", "Unfortunately, we've scheduled a company training that afternoon, and it might run late. Is it possible to switch to the Sunday matinee?"],
      ["W", "I'm afraid the Sunday matinee is almost sold out. We only have twelve seats left together. But there's still good availability for the following Saturday evening."],
      ["M", "The following Saturday would work. Is there a charge to exchange them?"],
      ["W", "For groups of ten or more, exchanges are free. I'll e-mail you the new tickets within the hour."],
    ],
    qs: [
      { q: "Why is the man calling?", o: ["To complain about a seat", "To ask about parking", "To buy additional tickets", "To change the date of a reservation"], a: 3, e: "公司培訓可能拖延，所以想換場次 → 更改訂票日期。他已經買好二十張票，不是要加買。" },
      { q: "What problem does the woman mention?", o: ["A performance was canceled.", "Few seats remain for a matinee.", "The theater is being renovated.", "An actor is ill."], a: 1, e: "the Sunday matinee is almost sold out... only twelve seats left → 週日午場剩下的座位不夠。" },
      { q: "Why will there be no exchange fee?", o: ["The man is a member.", "The theater made an error.", "The order is for a large group.", "The tickets were bought online."], a: 2, e: "For groups of ten or more, exchanges are free → 十人以上團體換票免費，他們買了二十張。" },
    ],
  },
  // Questions 56-58
  {
    lines: [
      ["W", "Kenji, we've got a problem on the packaging line. The labels on this morning's batch of shampoo bottles list the wrong size. They say two hundred milliliters, but the bottles hold two hundred fifty."],
      ["M", "How many have been labeled so far?"],
      ["W", "About three thousand. And the whole order is supposed to ship to Dalton Pharmacy on Thursday."],
      ["M", "Our regular label printer can't do rush jobs, but I know a shop across town that can. Let me call them and see if they can print new labels by tomorrow."],
      ["W", "OK. Meanwhile, I'll have the line crew start peeling off the incorrect ones."],
    ],
    qs: [
      { q: "What problem does the woman report?", o: ["Some bottles are leaking.", "Some labels contain an error.", "A machine has broken down.", "An order was canceled."], a: 1, e: "標籤寫 200 毫升，實際容量是 250 毫升 → 標籤印錯。並沒有提到瓶子漏或機器壞掉。" },
      { q: "According to the woman, what will happen on Thursday?", o: ["An order will be shipped.", "A pharmacy will open.", "A product will be tested.", "An inspection will take place."], a: 0, e: "the whole order is supposed to ship to Dalton Pharmacy on Thursday → 週四要出貨。pharmacy 是收貨的客戶，不是要開幕。" },
      { q: "What will the man most likely do next?", o: ["Inspect the bottles", "Speak with the client", "Repair a printer", "Contact another printing business"], a: 3, e: "原本的印刷廠接不了急件，他說 I know a shop across town... Let me call them → 聯絡另一家印刷店。撕掉舊標籤的是產線人員。" },
    ],
  },
  // Questions 59-61
  {
    lines: [
      ["W", "Hi, Raj. Are you signing up for the riverside cleanup on the twelfth? The company is sponsoring it this year."],
      ["M", "I'd like to. What time does it start?"],
      ["W", "Volunteers meet at nine in the parking lot at Hillcrest Park. The company is providing gloves, trash bags, and lunch for everyone."],
      ["M", "Sounds great. Can I bring my teenage son?"],
      ["W", "Sure, family members are welcome. Just add his name when you register on the sign-up sheet in the break room."],
    ],
    qs: [
      { q: "What event are the speakers discussing?", o: ["A company picnic", "A fundraising run", "A volunteer cleanup", "A park opening"], a: 2, e: "the riverside cleanup... Volunteers meet at nine → 志工淨河活動。有提供午餐，但不是野餐。" },
      { q: "What will the company provide?", o: ["Transportation", "T-shirts", "Parking passes", "Meals"], a: 3, e: "providing gloves, trash bags, and lunch → 午餐改寫成 Meals。parking lot 只是集合地點。" },
      { q: "What does the woman tell the man to do?", o: ["Add a name to a list", "Bring his own gloves", "Arrive before nine", "Call the park office"], a: 0, e: "Just add his name... on the sign-up sheet → 在報名表上加上兒子的名字。手套由公司提供。" },
    ],
  },
  // Questions 62-64
  {
    lines: [
      ["M", "Patricia, I'm booking a room at the business center for next week's workshop with the Singapore office."],
      ["W", "How many people are coming in person?"],
      ["M", "Fifteen from our side. The Singapore team will join by video."],
      ["W", "Then we definitely need a room with video equipment, and anything with fewer seats than that won't work."],
      ["M", "Right. That only leaves one option. It's the most expensive one, but it's within our budget."],
      ["W", "Good. And could you ask them to provide coffee and pastries? The workshop starts at eight."],
    ],
    graphic: { kind: "table", title: "Lakeview Business Center: Meeting Rooms", headers: ["Room", "Seats", "Video Equipment", "Hourly Rate"], rows: [["Birch", "8", "No", "$40"], ["Cedar", "12", "Yes", "$65"], ["Elm", "20", "No", "$70"], ["Willow", "20", "Yes", "$95"]] },
    qs: [
      { q: "Who will join the workshop by video?", o: ["Colleagues from another office", "Some job candidates", "A group of investors", "A guest speaker"], a: 0, e: "The Singapore team will join by video → 新加坡分公司的同事。" },
      { q: "Look at the graphic. Which room will the man most likely book?", o: ["Cedar", "Willow", "Elm", "Birch"], a: 1, e: "要有視訊設備，且座位要坐得下十五人 → 只剩 Willow（20 席、有視訊，也是最貴的）。Cedar 有視訊但只有 12 席；Elm 座位夠但沒有視訊。" },
      { q: "What does the woman ask the man to request?", o: ["Extra chairs", "A projector", "Refreshments", "Parking passes"], a: 2, e: "ask them to provide coffee and pastries → 咖啡和點心，改寫成 Refreshments。" },
    ],
  },
  // Questions 65-67
  {
    lines: [
      ["M", "Lena, I've got last week's sales numbers. Croissants are still our best seller by far."],
      ["W", "No surprise there. What about the blueberry muffins? We only started making them on Thursday."],
      ["M", "They sold the least, but they were only on the shelves for three days."],
      ["W", "True, let's give them more time. But the item that sold the second least, I think we should stop making that one. It takes a long time to bake, too."],
      ["M", "Agreed. That'll free up some oven space. Oh, and our supplier raised the price of butter again."],
      ["W", "Then let's look for another supplier. I'll make some calls this afternoon."],
    ],
    graphic: { kind: "bars", title: "Last Week's Sales (units)", unit: "", items: [["Croissants", 320], ["Blueberry Muffins", 80], ["Cinnamon Rolls", 210], ["Banana Bread", 120]] },
    qs: [
      { q: "Where do the speakers most likely work?", o: ["At a grocery store", "At a coffee importer", "At a farm", "At a bakery"], a: 3, e: "討論可頌、瑪芬的銷量與烤箱空間 → 在烘焙坊工作。" },
      { q: "Look at the graphic. Which item will the speakers stop making?", o: ["Croissants", "Blueberry Muffins", "Banana Bread", "Cinnamon Rolls"], a: 2, e: "瑪芬賣最少但才上架三天，要再觀察；停產的是「賣第二少」的品項 → 看圖是 Banana Bread（120）。直接選最低的瑪芬是陷阱。" },
      { q: "What will the woman do this afternoon?", o: ["Bake a new product", "Contact some suppliers", "Raise some prices", "Clean an oven"], a: 1, e: "let's look for another supplier. I'll make some calls → 打電話找其他供應商。漲價的是奶油供應商，不是他們要漲價。" },
    ],
  },
  // Questions 68-70
  {
    lines: [
      ["W", "Excuse me, I have a two o'clock appointment at Pemberton Design Studio. Is this the right building?"],
      ["M", "It is. But the directory is a little out of date. Pemberton switched floors with the accounting firm last month."],
      ["W", "Oh, thanks for telling me. Do I need to sign in?"],
      ["M", "Yes, please write your name here. I'll also need to see a photo ID, and then I'll give you a visitor pass."],
      ["W", "Sure. Here's my driver's license. Also, is there somewhere I can leave my umbrella? It's still dripping."],
      ["M", "There's a stand right by the elevators."],
    ],
    graphic: { kind: "table", title: "Harmon Tower Directory", headers: ["Floor", "Tenant"], rows: [["3", "Corliss and Shaw Law Offices"], ["4", "Pemberton Design Studio"], ["5", "Northgate Travel"], ["6", "Halden Accounting"]] },
    qs: [
      { q: "Why is the woman visiting the building?", o: ["To interview for a job", "To keep an appointment", "To deliver a package", "To inspect an office"], a: 1, e: "I have a two o'clock appointment at Pemberton Design Studio → 赴約。對話沒說是面試。" },
      { q: "Look at the graphic. Which floor will the woman go to?", o: ["Floor 3", "Floor 4", "Floor 5", "Floor 6"], a: 3, e: "樓層指引過時了，Pemberton 上個月和會計事務所互換樓層 → 會計事務所原本在 6 樓，所以要去 6 樓。選 4 樓是照著舊指引的陷阱。" },
      { q: "What does the man ask the woman for?", o: ["Identification", "An umbrella", "A business card", "A parking ticket"], a: 0, e: "I'll also need to see a photo ID → 身分證件，她拿出駕照。umbrella 是她自己問放哪裡。" },
    ],
  },
];
