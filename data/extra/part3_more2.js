// Part 3 追加練習（第 2 批）：12 組對話
window.PART3.push(...[
  {
    lines: [
      ["W", "Hi, this is Rachel in accounting. I can't connect to the company network from my laptop. I keep getting an error message."],
      ["M", "Are you working from home today, or are you in the office?"],
      ["W", "I'm at home. I installed a software update last night, and the problem started this morning."],
      ["M", "That update changed the security settings for remote access. You'll need to download a new certificate from the employee portal."],
      ["W", "Well, I can't get into the portal either. It's on the company network."],
      ["M", "Right. In that case, I'll send the file to your personal e-mail address, and I'll stay on the line while you install it."],
    ],
    qs: [
      { q: "What problem does the woman report?", o: ["She forgot her password", "She cannot access the company network", "Her laptop screen is broken", "Her e-mail account is full"], a: 1, e: "女子說 I can't connect to the company network → 連不上公司網路。「Her laptop screen is broken」只提到 laptop，是同字陷阱。" },
      { q: "What does the woman imply when she says, \"Well, I can't get into the portal either\"?", o: ["She needs a new laptop", "She has already contacted another department", "She prefers to work in the office", "She cannot follow the man's instructions"], a: 3, e: "男子要她從 employee portal 下載憑證，但 portal 也在公司網路上，她進不去 → 她無法照男子的指示做。" },
      { q: "What will the man do next?", o: ["Send a file to the woman's personal e-mail", "Visit the woman's home", "Cancel a software update", "Reset the woman's password"], a: 0, e: "男子說 I'll send the file to your personal e-mail address → 把檔案寄到她的私人信箱。" },
    ],
  },
  {
    lines: [
      ["W", "Hello, I'm calling to register for the Global Retail Summit in Denver. Is the early bird rate still available?"],
      ["M", "I'm afraid that offer ended last Friday. But we still have several other options."],
      ["W", "I see. My manager approved a budget of three hundred dollars for this, so a full pass is out of the question. I'll just come for the second day. That's when the panel on online sales takes place."],
      ["M", "That's a good choice. That panel is very popular. Would you also like to book a room at the conference hotel? Attendees get a fifteen percent discount."],
      ["W", "No, thanks. My sister lives in Denver, so I'll stay with her."],
    ],
    graphic: { kind: "table", title: "Global Retail Summit: Registration Rates", headers: ["Registration Type", "Price"], rows: [["Full Pass, Early Bird", "$400"], ["Full Pass", "$520"], ["One-Day Pass", "$280"], ["Workshop Add-on", "$90"]] },
    qs: [
      { q: "What is the purpose of the call?", o: ["To book a hotel room", "To cancel a reservation", "To register for an event", "To ask about a job"], a: 2, e: "女子一開頭說 I'm calling to register for the Global Retail Summit → 報名活動。訂飯店是男子後來的提議，她拒絕了。" },
      { q: "Look at the graphic. How much will the woman most likely pay?", o: ["$280", "$400", "$520", "$90"], a: 0, e: "早鳥價已結束，預算只有三百元，她只參加第二天 → 單日票 $280。「$90」雖低於預算，但只是工作坊加購，不是報名費。" },
      { q: "Why does the woman decline the man's offer?", o: ["The hotel is fully booked", "Her company will not pay for it", "She lives near the venue", "She will stay with a relative"], a: 3, e: "她說 My sister lives in Denver, so I'll stay with her → 住親戚家。住在 Denver 的是她姊妹，不是她本人，所以「She lives near the venue」是陷阱。" },
    ],
  },
  {
    lines: [
      ["W", "Carlos, the shipment of office chairs for Pelham Bank was supposed to leave the warehouse this morning. Why is it still on the loading dock?"],
      ["M", "The truck we hired broke down on the highway. The trucking company says they can't send another one until Friday."],
      ["W2", "Friday is too late. Pelham Bank is opening its new branch on Thursday, and they need the chairs set up the day before."],
      ["W", "Lin, didn't we use a different carrier for the hospital order last month?"],
      ["W2", "Yes, Swift Freight. They were a bit more expensive, but they delivered on time."],
      ["M", "I'll call them right now and see if they have a truck available this afternoon."],
    ],
    qs: [
      { q: "What problem are the speakers discussing?", o: ["Some chairs were damaged", "An order was sent to the wrong address", "A client canceled an order", "A vehicle has broken down"], a: 3, e: "男子說 The truck we hired broke down → 卡車故障導致出貨延遲。chairs 是對話中出現的字，但椅子本身沒有損壞。" },
      { q: "When does the client need the chairs set up?", o: ["On Tuesday", "On Wednesday", "On Thursday", "On Friday"], a: 1, e: "銀行週四開幕，需要 the day before 把椅子擺好 → 週三。「On Thursday」是直接聽到的字，屬於陷阱。" },
      { q: "What will the man do next?", o: ["Visit a hospital", "Repair a truck", "Contact a shipping company", "Speak with a bank manager"], a: 2, e: "男子說 I'll call them right now，them 指貨運公司 Swift Freight → 聯絡運輸公司。" },
    ],
  },
  {
    lines: [
      ["M", "Diane, have you seen the floor plan for our new office building? The movers are coming next Monday."],
      ["W", "Yes, I just got it. Our marketing team is on the seventh floor, but I was hoping we'd be next to the legal department. We send them contracts to review almost every day."],
      ["M", "Actually, the building manager told me yesterday that marketing and accounting are switching floors. Accounting needs extra space for a storage room."],
      ["W", "Oh, that's good news. Then we'll be just one floor above the legal team."],
      ["M", "Exactly. By the way, please make sure everyone on your team packs their desks by Friday afternoon. Labels for the boxes are in the supply closet."],
    ],
    graphic: { kind: "table", title: "Hartwell Tower: Office Directory", headers: ["Floor", "Department"], rows: [["5", "Legal"], ["6", "Accounting"], ["7", "Marketing"], ["8", "Human Resources"]] },
    qs: [
      { q: "What will happen next Monday?", o: ["The company will move to a new building", "A new manager will start work", "Some contracts will be signed", "A storage room will be cleaned"], a: 0, e: "The movers are coming next Monday → 搬家公司下週一來，公司要搬進新大樓。" },
      { q: "Look at the graphic. Which floor will the marketing team move to?", o: ["The fifth floor", "The seventh floor", "The sixth floor", "The eighth floor"], a: 2, e: "行銷部原本在七樓，但要和會計部互換，會計部在六樓 → 搬到六樓，正好在法務部五樓的上一層。「The seventh floor」是圖表原本的位置。" },
      { q: "What does the man ask the woman to do?", o: ["Review some contracts", "Make sure her staff pack their desks", "Order more labels", "Meet with the building manager"], a: 1, e: "男子說 make sure everyone on your team packs their desks by Friday → 確保團隊收拾好辦公桌。labels 已經放在儲藏櫃，不需要再訂。" },
    ],
  },
  {
    lines: [
      ["W", "Hello, Mr. Okafor? This is Melissa Grant from Bayside Engineering. We reviewed your application for the project coordinator position, and we'd like to invite you for an interview."],
      ["M", "That's great news. Thank you for calling."],
      ["W", "Would next Tuesday at two P.M. work for you? You'd meet with me and the head of our design team."],
      ["M", "Tuesday afternoon? I'm flying back from a trade show in Singapore that morning."],
      ["W", "I understand. How about Wednesday at ten A.M., then? And please bring samples of any project schedules you've prepared in the past."],
      ["M", "Wednesday works perfectly. I'll bring a few examples."],
    ],
    qs: [
      { q: "Why is the woman calling?", o: ["To offer the man a job", "To schedule an interview", "To confirm a flight", "To request a reference"], a: 1, e: "女子說 we'd like to invite you for an interview → 安排面試。還沒到錄取階段，所以「To offer the man a job」不對。" },
      { q: "Why does the man say, \"I'm flying back from a trade show in Singapore that morning\"?", o: ["To indicate that he is unavailable at the suggested time", "To explain why he applied for the job", "To recommend a business destination", "To ask for travel expenses"], a: 0, e: "對方提議週二下午，他說當天早上才從新加坡飛回來 → 委婉表示那個時間不方便，所以女子馬上改約週三。" },
      { q: "What does the woman ask the man to bring?", o: ["A copy of his passport", "A list of references", "His university diploma", "Examples of his previous work"], a: 3, e: "女子請他帶 samples of any project schedules you've prepared in the past → 過去工作的範例。" },
    ],
  },
  {
    lines: [
      ["W", "Hugo, a guest in room four twelve just complained that the air conditioner is making a loud noise. She said she couldn't sleep last night."],
      ["M", "I checked that unit yesterday. The fan motor needs to be replaced, and the part won't arrive until Thursday."],
      ["M2", "Then we shouldn't leave her in that room. The suites on the ninth floor are mostly empty this week."],
      ["W", "Good idea, Pierre. As the manager, you can approve an upgrade at no extra charge, right?"],
      ["M2", "Yes, I'll authorize it. Angela, please call the guest and offer her the suite. And send a fruit basket to apologize."],
      ["M", "I'll put a sign on four twelve so no one else is assigned to it until the repair is done."],
    ],
    qs: [
      { q: "What problem is mentioned?", o: ["A room was not cleaned", "A guest lost her room key", "An appliance is too noisy", "A bill was incorrect"], a: 2, e: "the air conditioner is making a loud noise → 冷氣（電器）太吵。" },
      { q: "Why can't the problem be fixed right away?", o: ["The technician is on vacation", "The hotel is fully booked", "The guest refused to let staff in", "A replacement part has not arrived"], a: 3, e: "維修人員說 the part won't arrive until Thursday → 零件還沒到。九樓套房大多是空的，所以「The hotel is fully booked」不對。" },
      { q: "What will the woman most likely do next?", o: ["Contact a guest", "Order a part", "Clean a suite", "Put up a sign"], a: 0, e: "經理對 Angela（女子）說 please call the guest and offer her the suite → 她要打電話給房客。掛告示是 Hugo 要做的事。" },
    ],
  },
  {
    lines: [
      ["W", "Okay, let's look at the results of our spring advertising campaign for the fitness app. Social media brought in the most new customers by far."],
      ["M", "Yes, but it was also the most expensive. I think we should stop using the channel that performed the worst and move that money into social media."],
      ["W", "I agree in principle, but the magazine ads only ran in two issues. They didn't really have a fair chance."],
      ["M", "Fair point. Then let's drop the channel with the second lowest numbers instead. Radio ads are expensive to produce anyway."],
      ["W", "All right. I'll draft a revised budget and share it with the director on Friday."],
    ],
    graphic: { kind: "bars", title: "Spring Campaign: New Customers by Channel", unit: "", items: [["Radio", 120], ["Social Media", 340], ["Magazines", 90], ["Billboards", 210]] },
    qs: [
      { q: "What product is being advertised?", o: ["A sports drink", "A gym membership", "A pair of running shoes", "A mobile application"], a: 3, e: "女子說 advertising campaign for the fitness app → 手機應用程式。fitness 容易讓人誤選健身房會員。" },
      { q: "Look at the graphic. How many new customers came from the channel the speakers decide to stop using?", o: ["90", "120", "210", "340"], a: 1, e: "雜誌表現最差但被保留，改砍「第二低」的管道，男子也提到 Radio ads → 廣播帶來 120 位新客戶。「90」是雜誌的數字。" },
      { q: "What does the woman say she will do?", o: ["Design a magazine ad", "Hire a new director", "Prepare a revised budget", "Record a radio commercial"], a: 2, e: "女子說 I'll draft a revised budget → 準備修正版預算。director 只是她要分享的對象。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, I brought my car in this morning for an oil change. Is it ready yet?"],
      ["W", "Almost. But while we were working on it, our mechanic noticed that your front brakes are badly worn."],
      ["M", "Really? How much would it cost to replace them?"],
      ["W", "About three hundred dollars, including labor. We could do it today, but it would take another two hours."],
      ["M", "I have to pick up my daughter from school at three."],
      ["W", "In that case, I can give you a ride in our shuttle van, and you can come back for the car later this afternoon."],
    ],
    qs: [
      { q: "Why did the man bring his car to the shop?", o: ["For an oil change", "For a brake repair", "For new tires", "For a car wash"], a: 0, e: "男子說 I brought my car in this morning for an oil change → 換機油。煞車是技師後來才發現的問題。" },
      { q: "What does the man imply when he says, \"I have to pick up my daughter from school at three\"?", o: ["He wants a cheaper repair", "He will pay for the repair later", "He cannot wait two hours for the car", "His daughter needs a ride to the shop"], a: 2, e: "修煞車還要再兩小時，他說三點要接女兒 → 暗示他沒辦法等兩小時，所以女子提議用接駁車載他。" },
      { q: "What does the woman offer to do?", o: ["Give a discount on parts", "Provide a ride", "Perform a free inspection", "Lend the man a car"], a: 1, e: "女子說 I can give you a ride in our shuttle van → 開接駁車載他。她沒有提供代步車。" },
    ],
  },
  {
    lines: [
      ["W", "Hi, I'm here to pick up a prescription under the name Laura Weber. My doctor said she sent it over this morning."],
      ["M", "Let me check. Yes, we received it, but one of the medicines isn't in stock right now. We'll get more tomorrow."],
      ["W", "Oh, that's inconvenient. I'm leaving on a business trip tomorrow morning."],
      ["M", "Our branch on Maple Avenue has it. I can transfer the prescription there, and it'll be ready in about an hour."],
      ["W", "That would be great. It's on my way home anyway."],
      ["M", "Good. Also, this medicine can make you sleepy, so please don't drive after taking it."],
    ],
    qs: [
      { q: "Where most likely is the conversation taking place?", o: ["At a doctor's office", "At a hospital", "At a pharmacy", "At a travel agency"], a: 2, e: "女子來領處方藥（pick up a prescription），男子查庫存 → 藥局。醫生只是把處方傳過來，不在現場。" },
      { q: "Why is the woman concerned?", o: ["She is going on a trip soon", "She lost her prescription", "The price is too high", "Her doctor is unavailable"], a: 0, e: "藥要明天才進貨，但她 leaving on a business trip tomorrow morning → 她馬上要出差。" },
      { q: "What does the man warn the woman about?", o: ["The store closes early", "She needs a new prescription", "The other branch is far away", "The medicine may cause drowsiness"], a: 3, e: "this medicine can make you sleepy → 會讓人想睡（drowsiness）。分店其實在她回家的路上，並不遠。" },
    ],
  },
  {
    lines: [
      ["W", "Hi, Mr. Brennan. I'm planning the summer reading festival at the Oakdale Public Library, and I'm hoping local businesses will help sponsor it."],
      ["M", "I'd be happy to help. My bookstore sponsored a similar event last year. What do you need?"],
      ["W", "We'd like to give each child who finishes five books a small prize. A gift card from your store would be perfect."],
      ["M", "I can donate fifty gift cards worth ten dollars each. In return, could you put our logo on the festival posters?"],
      ["W", "Of course. I'll send you a draft of the poster by the end of the week so you can approve it."],
    ],
    qs: [
      { q: "What is the woman doing?", o: ["Applying for a job", "Organizing a community event", "Opening a bookstore", "Writing a book review"], a: 1, e: "女子說 I'm planning the summer reading festival at the library → 籌辦社區活動。書店是男子的。" },
      { q: "What does the man ask for?", o: ["A list of participants", "A discount on books", "Tickets to the festival", "His company logo on posters"], a: 3, e: "男子說 could you put our logo on the festival posters → 把書店標誌印在海報上，作為贊助的回報。" },
      { q: "What will the woman send the man?", o: ["A draft of a poster", "Some gift cards", "A sponsorship contract", "A list of books"], a: 0, e: "I'll send you a draft of the poster → 寄海報草稿給他確認。禮物卡是男子要捐出的東西。" },
    ],
  },
  {
    lines: [
      ["M", "Thank you for calling Nordal Home Appliances. How can I help you?"],
      ["W", "I bought one of your coffee makers two weeks ago, and now water leaks from the bottom every time I use it."],
      ["M", "I'm sorry about that. We've had a few reports of a faulty seal in one batch. Could you read me the serial number on the back of the machine?"],
      ["W", "Sure. It's B as in boy, seven, three, zero, one, five."],
      ["M", "Yes, that's from the affected batch. We'll send you a brand new unit, and the courier will collect the old one when it's delivered."],
      ["W", "That's a relief. I was worried I'd have to drive to the store to return it."],
    ],
    qs: [
      { q: "What problem does the woman report?", o: ["Her coffee maker leaks water", "Her coffee maker is too noisy", "Her coffee maker does not turn on", "Her coffee maker is missing a part"], a: 0, e: "water leaks from the bottom → 咖啡機漏水。對話提到 faulty seal（密封圈有瑕疵），但不是少了零件。" },
      { q: "What does the man ask the woman to provide?", o: ["A store receipt", "Her home address", "A serial number", "A photo of the product"], a: 2, e: "Could you read me the serial number → 請她提供序號。" },
      { q: "What will the company do?", o: ["Give the woman a refund", "Replace the product", "Send a technician", "Extend the warranty"], a: 1, e: "We'll send you a brand new unit → 寄一台全新的給她，也就是換貨。courier 是來收舊機的快遞員，不是技師。" },
    ],
  },
  {
    lines: [
      ["M", "Thanks for meeting with us, Ms. Ferreira. Yuki and I would like to request funding for new design software for our team."],
      ["W", "Sure. What's wrong with the program you're using now?"],
      ["W2", "It's eight years old, and it keeps crashing when we open large files. Last month we missed a deadline for a client because of it."],
      ["W", "I see. How much would the new software cost?"],
      ["M", "Twelve licenses would come to about nine thousand dollars a year. But the company offers a thirty-day free trial."],
      ["W", "Then start with the trial and keep track of how much time it saves. If the results are good, I'll approve it in next quarter's budget."],
    ],
    qs: [
      { q: "What are the speakers mainly discussing?", o: ["Hiring a designer", "Meeting with a client", "Moving to a new office", "Purchasing some software"], a: 3, e: "男子說 request funding for new design software → 申請經費購買軟體。design、client 都是對話中的字，屬於同字陷阱。" },
      { q: "What problem with the current program is mentioned?", o: ["It is too expensive", "It often stops working", "It is difficult to learn", "It cannot be installed"], a: 1, e: "it keeps crashing → 經常當機，也就是常常停止運作。" },
      { q: "What does Ms. Ferreira suggest?", o: ["Hiring more staff", "Asking for a discount", "Trying the product first", "Contacting a client"], a: 2, e: "她說 start with the trial → 先試用三十天，看看能省多少時間再決定是否核准。" },
    ],
  },
]);
