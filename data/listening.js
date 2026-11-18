// 聽力題庫。題目以陣列順序當 ID，新增請加在最後面。

// Part 2 應答問題：q 問句，o 三個回應，a 正確索引，e 解析
window.PART2 = [
  { q: "Where is the nearest post office?", o: ["I posted it yesterday.", "It's just around the corner.", "At nine in the morning."], a: 1, e: "問 Where → 回答地點。(A) 用 post 同字陷阱。" },
  { q: "When does the meeting start?", o: ["At two thirty.", "In conference room B.", "Mr. Wang will lead it."], a: 0, e: "問 When → 回答時間。(B) 是地點，(C) 是人。" },
  { q: "Who's in charge of the new project?", o: ["No, it's free of charge.", "Ms. Lopez is.", "Next Tuesday."], a: 1, e: "問 Who → 回答人。(A) 用 charge 同字陷阱。" },
  { q: "Why was the flight delayed?", o: ["Because of the storm.", "Gate twelve.", "It's about two hours long."], a: 0, e: "問 Why → 回答原因。" },
  { q: "How much does the printer cost?", o: ["It prints in color.", "Around three hundred dollars.", "At the electronics store."], a: 1, e: "How much → 價格。(A) 用 printer/prints 相似音陷阱。" },
  { q: "Would you like some coffee?", o: ["Yes, thanks. With milk, please.", "It's a coffee shop.", "I liked it very much."], a: 0, e: "邀請／提議 → Yes, thanks 最自然。(C) 用 like 的過去式當陷阱。" },
  { q: "Have you finished the sales report?", o: ["The sales were great.", "I'm still working on it.", "He reported it."], a: 1, e: "問是否完成 → 「還在做」是間接回答，多益很愛考！" },
  { q: "Could you help me move these boxes?", o: ["The boxes are empty.", "We moved last year.", "Sure, where do they go?"], a: 2, e: "請求幫忙 → Sure 並反問細節。" },
  { q: "Isn't the store open on Sundays?", o: ["I opened the window.", "On Main Street.", "No, it's closed on weekends."], a: 2, e: "否定疑問句，直接回答事實即可。" },
  { q: "Which hotel are you staying at?", o: ["For three nights.", "The one near the station.", "Yes, I'm staying."], a: 1, e: "Which → 選擇特定的一個，The one… 是典型答法。Wh- 問句不能用 Yes/No 回答。" },
  { q: "Why don't we take a break?", o: ["It broke yesterday.", "Because it's late.", "Good idea. I need some coffee."], a: 2, e: "Why don't we…? 是「提議」不是問原因！回答 Good idea。(B) 是 Because 陷阱。" },
  { q: "Do you want to take the train or the bus?", o: ["Yes, I do.", "The train is faster.", "At the bus stop."], a: 1, e: "選擇疑問句（A or B）不能用 Yes/No 回答。" },
  { q: "The copy machine isn't working again.", o: ["I'll call the repair service.", "Ten copies, please.", "She works on the third floor."], a: 0, e: "陳述問題 → 提出解決方法。" },
  { q: "Who should I send the invoice to?", o: ["By express mail.", "Thirty dollars.", "Send it to the accounting department."], a: 2, e: "問 Who → 部門也可以當作「對象」的答案。" },
  { q: "How long will the renovation take?", o: ["It's quite long.", "About three weeks.", "The new lobby."], a: 1, e: "How long → 期間長度。" },
  { q: "When is the report due?", o: ["By Friday afternoon.", "Yes, it's true.", "Two pages."], a: 0, e: "due「到期」→ 回答期限。(B) 用 due / true 相似音陷阱。" },
  { q: "Where can I find the application forms?", o: ["I applied last week.", "On the shelf by the door.", "Fill it out in pen."], a: 1, e: "Where → 地點。(A) 用 application / applied 字根陷阱。" },
  { q: "Didn't Mr. Harris already approve the budget?", o: ["The budget is tight.", "He moved here in 2010.", "Yes, he signed it this morning."], a: 2, e: "否定疑問句 → Yes 表示「有批准」。" },
  { q: "Should we order lunch now or later?", o: ["In alphabetical order.", "Let's wait until everyone arrives.", "It was delicious."], a: 1, e: "選擇疑問句 → 間接選了 later。(A) 用 order 一字多義陷阱。" },
  { q: "What time does the train to Boston leave?", o: ["Every thirty minutes.", "Platform four.", "I left it on the train."], a: 0, e: "問時間 → 每 30 分鐘一班也是合理回答。(C) 用 leave/left 陷阱。" },
  { q: "I'd like to make a reservation for Friday night.", o: ["How many people will there be?", "It was reserved.", "It was a great night."], a: 0, e: "訂位 → 店員反問人數最自然。" },
  { q: "Why hasn't the shipment arrived yet?", o: ["The ship is very big.", "It arrived at the port.", "There was a problem at customs."], a: 2, e: "問原因 → 海關出問題。(A) 用 ship / shipment 陷阱。" },
  { q: "Can you attend the conference next week?", o: ["It was a great conference.", "About two hundred people.", "I'm afraid I'll be on vacation."], a: 2, e: "間接拒絕：I'm afraid… 表示不行。" },
  { q: "Whose jacket is this?", o: ["It's a nice color.", "In the closet.", "I think it's Tom's."], a: 2, e: "Whose → 屬於誰。" },
  { q: "How often do you check your email?", o: ["Several times a day.", "At my desk.", "Yes, I checked it."], a: 0, e: "How often → 頻率。" },
  { q: "You're coming to the training session, aren't you?", o: ["Yes, I've already signed up.", "The train was late.", "It lasts two hours."], a: 0, e: "附加問句 → 用 Yes/No 回答。(B) 用 training / train 陷阱。" },
  { q: "Where should we hold the company picnic?", o: ["In late June.", "Pick up your ticket.", "How about Central Park?"], a: 2, e: "用反問提出建議（How about…?）也是正確答法。" },
  { q: "Has the new manager been hired yet?", o: ["Higher than last year.", "She manages the store.", "The interviews are still going on."], a: 2, e: "間接回答「還沒」。(A) hired / higher 相似音陷阱。" },
  { q: "Let's review the contract before the meeting.", o: ["It's a new contract.", "That's a good idea.", "The view is beautiful."], a: 1, e: "提議 → 表示同意。(C) review / view 陷阱。" },
  { q: "What did you think of the presentation?", o: ["It was very informative.", "I presented it yesterday.", "It's in room five."], a: 0, e: "問意見 → 給出評價。" },
];

// Part 3 簡短對話：lines 對話（M 男 / W 女），qs 題目
window.PART3 = [
  {
    lines: [
      ["W", "Hi, I'm calling about the printer I ordered last week. It arrived this morning, but the paper tray is broken."],
      ["M", "I'm sorry to hear that. Could you give me your order number?"],
      ["W", "Sure, it's four five seven two one."],
      ["M", "Thank you. I'll send you a replacement tray by express delivery. It should arrive tomorrow."],
    ],
    qs: [
      { q: "Why is the woman calling?", o: ["To order a printer", "To report a damaged product", "To cancel an order", "To ask about prices"], a: 1, e: "女子說 the paper tray is broken → 回報產品損壞。" },
      { q: "What will the man do?", o: ["Send a replacement part", "Give a refund", "Visit the woman's office", "Transfer the call"], a: 0, e: "男子說 I'll send you a replacement tray。" },
      { q: "What does the man say about the replacement?", o: ["It is currently out of stock", "It will require an extra fee", "It must be picked up at a store", "It will be delivered the next day"], a: 3, e: "男子說用快遞寄送，It should arrive tomorrow → 隔天送達。" },
    ],
  },
  {
    lines: [
      ["M", "Jenny, are you going to the marketing conference in Chicago next month?"],
      ["W", "I'd like to, but I have to finish the budget report first. It's due on the fifteenth."],
      ["M", "The conference starts on the twentieth, so you should have enough time."],
      ["W", "You're right. I'll ask our manager if the company can pay for the hotel."],
      ["M", "Good idea. And if you need any help with the report, just let me know. I finished mine yesterday."],
    ],
    qs: [
      { q: "What are the speakers mainly discussing?", o: ["A trip to a conference", "A new product", "A hiring decision", "An office move"], a: 0, e: "整段在討論要不要去 Chicago 的 marketing conference。" },
      { q: "What will the woman do next?", o: ["Book a flight", "Talk to her manager", "Finish a presentation", "Call a hotel"], a: 1, e: "最後一句 I'll ask our manager…" },
      { q: "What does the man offer to do?", o: ["Pay for the hotel", "Attend the conference alone", "Help with a report", "Speak to the manager"], a: 2, e: "if you need any help with the report, just let me know → 主動幫忙報告。付旅館費和問主管都是女子提到的事。" },
    ],
  },
  {
    lines: [
      ["W", "Excuse me, I'm looking for the Grand Hotel. Is it far from here?"],
      ["M", "It's about a fifteen-minute walk. But if you have luggage, I'd recommend taking the number eight bus. The stop is right across the street."],
      ["W", "Great, thank you. Do you know how much the fare is?"],
      ["M", "It's two dollars, but you'll need exact change."],
      ["W", "Oh, I only have a twenty. I'll buy a newspaper at that newsstand so I can get some coins."],
    ],
    qs: [
      { q: "Where does the woman want to go?", o: ["A bus station", "A hotel", "A restaurant", "A museum"], a: 1, e: "I'm looking for the Grand Hotel." },
      { q: "What does the man say about the bus?", o: ["It is free", "It requires exact change", "It runs every hour", "It is often late"], a: 1, e: "you'll need exact change「需要剛好的零錢」。" },
      { q: "What will the woman most likely do next?", o: ["Walk to the hotel", "Call a taxi", "Make a small purchase", "Ask the driver for change"], a: 2, e: "她只有二十元鈔票，打算在書報攤買報紙換零錢 → 買個小東西。司機不找零，所以「Ask the driver for change」不合理。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, Lisa. The client meeting has been moved from Thursday to Wednesday morning."],
      ["W", "Oh no, I'm leading a training session on Wednesday morning."],
      ["M", "Could someone else lead the training?"],
      ["W", "Maybe Kevin can. He helped me prepare the materials, so he knows the content well. I'll ask him right away."],
    ],
    qs: [
      { q: "What problem does the woman mention?", o: ["She has a schedule conflict", "She lost some materials", "She is feeling sick", "She missed a deadline"], a: 0, e: "會議改到週三早上，但她那時要帶訓練 → 時間衝突。" },
      { q: "Who most likely is Kevin?", o: ["A client", "A coworker", "The woman's manager", "A new trainee"], a: 1, e: "He helped me prepare the materials → 一起工作的同事。" },
      { q: "What will the woman most likely do next?", o: ["Reschedule the client meeting", "Prepare new materials", "Cancel the training session", "Ask a colleague to take over"], a: 3, e: "I'll ask him right away → 請同事 Kevin 代為主持訓練（take over）。" },
    ],
  },
  {
    lines: [
      ["W", "Welcome to Green Leaf Café. What can I get for you?"],
      ["M", "I'd like a large coffee and a blueberry muffin, please."],
      ["W", "I'm sorry, we just sold our last blueberry muffin. We do have banana muffins, though. They're fresh out of the oven."],
      ["M", "That sounds good. I'll take one of those."],
      ["W", "Great. By the way, if you join our rewards program today, your next drink is free."],
    ],
    qs: [
      { q: "Where most likely does the conversation take place?", o: ["At a café", "At a bakery supplier", "At a grocery store", "At an office"], a: 0, e: "Welcome to Green Leaf Café." },
      { q: "What does the man decide to do?", o: ["Order a different muffin", "Cancel his order", "Come back later", "Get a refund"], a: 0, e: "藍莓的賣完了，他改點香蕉馬芬。" },
      { q: "What does the woman say about the rewards program?", o: ["It costs a monthly fee", "It offers discounts on muffins", "It is only for new customers", "It provides a free beverage"], a: 3, e: "your next drink is free → 下次飲料免費。「discounts on muffins」是用 muffin 做的同字陷阱。" },
    ],
  },
  {
    lines: [
      ["M", "Hello, this is David from Sunrise Apartments. I'm returning your call about the apartment for rent."],
      ["W", "Thanks for calling back. Is the two-bedroom unit still available?"],
      ["M", "Yes, it is. Would you like to see it this weekend?"],
      ["W", "Saturday afternoon would be perfect. Around two o'clock?"],
      ["M", "Two o'clock works. Please bring a photo ID with you, since we'll need to make a copy before the tour."],
    ],
    qs: [
      { q: "Why is the man calling?", o: ["To return a call about an apartment", "To collect the rent", "To repair something", "To sell furniture"], a: 0, e: "I'm returning your call about the apartment for rent." },
      { q: "When will the woman see the apartment?", o: ["On Friday morning", "On Saturday afternoon", "On Sunday afternoon", "On Monday evening"], a: 1, e: "Saturday afternoon would be perfect." },
      { q: "What does the man ask the woman to bring?", o: ["A deposit", "A reference letter", "Identification", "A bank statement"], a: 2, e: "Please bring a photo ID → 帶身分證件。" },
    ],
  },
  {
    lines: [
      ["W", "Mark, the projector in conference room A isn't turning on, and my presentation starts in twenty minutes."],
      ["M", "Hmm, the IT department is closed for lunch right now. Why don't you use room C instead? Its projector was replaced last week."],
      ["W", "Good idea. Could you let the attendees know about the room change?"],
      ["M", "Sure, I'll send everyone an email now."],
    ],
    qs: [
      { q: "What is the woman's problem?", o: ["She lost her presentation file", "A projector is not working", "A room is fully booked", "She is late for work"], a: 1, e: "the projector … isn't turning on。" },
      { q: "What does the man offer to do?", o: ["Fix the projector", "Call the IT department", "Email the attendees", "Give the presentation"], a: 2, e: "I'll send everyone an email now." },
      { q: "According to the man, what happened last week?", o: ["The IT department moved", "Room A was renovated", "A meeting was canceled", "A projector in another room was replaced"], a: 3, e: "Its projector was replaced last week → room C 的投影機上週換新。「Room A was renovated」是用 Room A 做的陷阱。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, I'd like to return this jacket. I bought it here last week, but it's too small."],
      ["W", "Do you have your receipt?"],
      ["M", "Yes, here it is."],
      ["W", "Thank you. Would you like a refund, or would you prefer to exchange it for a larger size?"],
      ["M", "I'll exchange it. I really like the color."],
    ],
    qs: [
      { q: "Why does the man want to return the jacket?", o: ["It is damaged", "It is the wrong color", "It is too small", "It was too expensive"], a: 2, e: "it's too small。" },
      { q: "What does the man decide to do?", o: ["Get a refund", "Exchange the jacket", "Buy a second jacket", "Speak to a manager"], a: 1, e: "I'll exchange it." },
      { q: "Why does the man choose an exchange?", o: ["A refund would take too long", "He has lost his receipt", "He is pleased with the color", "The store has no larger sizes"], a: 2, e: "I really like the color → 他很喜歡這個顏色，所以換大一號而不退款。他有收據，所以「He has lost his receipt」錯。" },
    ],
  },
];
