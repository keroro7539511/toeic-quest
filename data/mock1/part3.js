// 模擬考 1 — Part 3 對話（Questions 32–70，13 組 39 題；最後 3 組為看圖題）
window.MOCK1 = window.MOCK1 || {};
window.MOCK1.part3 = [
  // Questions 32-34
  {
    lines: [
      ["W", "Hi, you must be Tom Reyes. I'm Grace Liu from Human Resources. Welcome to Pinecrest Financial."],
      ["M", "Thanks. I'm a little early. I wasn't sure how long the drive would take."],
      ["W", "No problem. Before we tour the building, I'll need you to fill out a few forms for payroll."],
      ["M", "Sure. Should I also get my security badge today?"],
      ["W", "Yes, but the security office doesn't open until ten. After the forms, I'll take you there, and then you'll meet your team in the accounting department."],
    ],
    qs: [
      { q: "Who most likely is the woman?", o: ["An accountant", "A human resources employee", "A security guard", "A new client"], a: 1, e: "I'm Grace Liu from Human Resources → 人資部員工。accounting、security 都是對話中出現的字，屬於陷阱。" },
      { q: "What does the woman ask the man to do first?", o: ["Meet his team", "Tour the building", "Get a security badge", "Complete some paperwork"], a: 3, e: "Before we tour the building, I'll need you to fill out a few forms → 先填表格（paperwork）。其他選項都是之後才做的事。" },
      { q: "Why can't the man get his badge right away?", o: ["An office is not open yet", "His photo has not been taken", "A form is missing", "A machine is broken"], a: 0, e: "the security office doesn't open until ten → 辦公室還沒開。" },
    ],
  },
  // Questions 35-37
  {
    lines: [
      ["M", "Excuse me, I bought this coffee grinder here about two months ago, and now it makes a loud noise whenever I use it."],
      ["W", "I'm sorry about that. Do you have the receipt with you?"],
      ["M", "Not the paper one, but I paid with my credit card, and I have the email confirmation on my phone."],
      ["W", "That will work. The grinder is still under the manufacturer's one-year warranty, so we'll send it to them for repair at no cost."],
      ["M", "How long does that usually take?"],
      ["W", "Two to three weeks. In the meantime, I can lend you one of our display models so you're not without one."],
    ],
    qs: [
      { q: "What is the man's problem?", o: ["He lost a receipt", "He was charged twice", "A product is making noise", "An item arrived late"], a: 2, e: "it makes a loud noise → 產品有噪音。他只是沒帶紙本收據，並非問題本身，所以「He lost a receipt」是陷阱。" },
      { q: "What does the man show the woman?", o: ["An electronic proof of purchase", "A warranty card", "A credit card statement", "A damaged part"], a: 0, e: "手機上的 email confirmation → 電子購買證明。「A credit card statement」只借用 credit card，並不是他出示的東西。" },
      { q: "What does the woman offer to do?", o: ["Give the man a full refund", "Replace the item immediately", "Contact the manufacturer by phone", "Provide a temporary substitute"], a: 3, e: "送修期間借他一台展示機 → 暫時的替代品。" },
    ],
  },
  // Questions 38-40
  {
    lines: [
      ["W", "Hello, I'm with Aldridge Consulting. We booked the Maple Room for our training session today, but it's much smaller than we expected."],
      ["M", "Let me look at your reservation. Ah, I see. You requested seating for forty, but the Maple Room only holds twenty-five. I'm very sorry. Let me get my manager. Carlos?"],
      ["M2", "Hi there. The Oak Room is available all day, and it holds up to fifty people. We can move you there."],
      ["W", "That would be great. But our participants start arriving at nine."],
      ["M2", "That's no problem. Our staff will set up the tables and the projector in the next twenty minutes. And we'll take ten percent off your bill for the trouble."],
    ],
    qs: [
      { q: "What problem does the woman mention?", o: ["Some equipment is missing", "A reservation cannot be found", "The event started late", "A room is too small"], a: 3, e: "it's much smaller than we expected → 會議室太小。" },
      { q: "What caused the problem?", o: ["The hotel was overbooked", "A booking detail was not followed", "A room was being renovated", "The woman came on the wrong day"], a: 1, e: "客戶要求四十個座位，卻被安排到只容納二十五人的房間 → 訂位的細節沒被照做。" },
      { q: "What does Carlos offer?", o: ["Free lunch for participants", "An extra projector", "A discount", "A later start time"], a: 2, e: "take ten percent off your bill → 折扣。projector 只是要幫忙架設，並非額外提供。" },
    ],
  },
  // Questions 41-43
  {
    lines: [
      ["M", "Olivia, I just heard from the supplier. The steel for the Hartman order won't arrive until next Wednesday."],
      ["W", "Next Wednesday? We promised Hartman the parts would ship on Thursday."],
      ["M", "I know. That gives our crew only one day to cut and assemble everything."],
      ["W", "Well, the second shift has been asking for extra hours."],
      ["M", "Good point. If we split the work between both shifts, we might just make it."],
      ["W", "Let's try that. I'll update the production schedule and send it to the shift supervisors this afternoon."],
    ],
    qs: [
      { q: "What are the speakers mainly discussing?", o: ["A delayed delivery of materials", "A new safety regulation", "A customer complaint", "A hiring plan"], a: 0, e: "鋼材要到下週三才會到 → 原料延遲交貨。" },
      { q: "What does the woman imply when she says, \"the second shift has been asking for extra hours\"?", o: ["Some workers are unhappy with their pay", "The factory should hire more staff", "Additional workers could help meet a deadline", "The schedule was posted incorrectly"], a: 2, e: "時間只剩一天，她提到第二班想多上班 → 暗示可以讓更多人一起趕工以準時交貨，男子接著說兩班分攤工作。" },
      { q: "What will the woman do this afternoon?", o: ["Call a supplier", "Revise a schedule", "Visit a client's office", "Inspect some steel"], a: 1, e: "I'll update the production schedule → 修改排程（revise = update）。" },
    ],
  },
  // Questions 44-46
  {
    lines: [
      ["W", "Brightsmile Dental, this is Amy speaking."],
      ["M", "Hi, I got a text reminding me about a cleaning appointment tomorrow, but I think there's a mistake. I had my teeth cleaned just last month."],
      ["W", "Let me check your file. Oh, you're right. The reminder was sent to the wrong patient. I apologize, Mr. Gold."],
      ["M", "That's all right. Actually, while I have you, one of my back teeth has been a little sensitive lately. Could the dentist take a look at it?"],
      ["W", "Of course. Dr. Moreno has an opening on Thursday at eleven. And please bring your new insurance card, since the one in our records has expired."],
    ],
    qs: [
      { q: "Why is the man calling?", o: ["To cancel an appointment", "To pay a bill", "To report an error", "To ask for directions"], a: 2, e: "他收到不該收到的提醒簡訊，I think there's a mistake → 回報錯誤。他不是要取消自己的預約，那個預約本來就不是他的。" },
      { q: "What does the man say about his tooth?", o: ["It was recently repaired", "It needs to be removed", "It is causing severe pain", "It has been bothering him slightly"], a: 3, e: "a little sensitive lately → 最近有點不舒服。「severe pain」程度太強，是常見的程度陷阱。" },
      { q: "What does the woman ask the man to bring?", o: ["An updated insurance card", "A list of medications", "A completed form", "His previous dental records"], a: 0, e: "please bring your new insurance card → 新的保險卡。" },
    ],
  },
  // Questions 47-49
  {
    lines: [
      ["M", "Hi, Luisa. I'm putting together the lunch order for Friday's staff appreciation event. Would you rather have Thai food or Italian?"],
      ["W", "We had Italian at the last three events."],
      ["M", "Fair enough. Thai it is. Bangkok Garden on Elm Street does large orders, but they need at least two days' notice."],
      ["W", "Then you'd better call them today. Oh, and remember that a few people on the design team don't eat meat."],
      ["M", "Right. I'll ask for several vegetarian dishes. Could you send me the final headcount by the end of the day?"],
    ],
    qs: [
      { q: "What event are the speakers preparing for?", o: ["A client meeting", "A staff celebration", "A restaurant opening", "A cooking class"], a: 1, e: "staff appreciation event → 員工感謝活動，也就是員工慶祝活動。" },
      { q: "Why does the woman say, \"We had Italian at the last three events\"?", o: ["To express a preference for a change", "To recommend the same restaurant", "To complain about the cost", "To correct the man's mistake"], a: 0, e: "前三次都吃義大利菜 → 暗示想換換口味，男子因此回答 Thai it is。" },
      { q: "What does the man ask the woman to do?", o: ["Call a restaurant", "Choose some dishes", "Contact the design team", "Confirm the number of attendees"], a: 3, e: "send me the final headcount → 確認出席人數。打電話給餐廳是女子叫男子做的事，方向相反。" },
    ],
  },
  // Questions 50-52
  {
    lines: [
      ["W", "Mr. Chandra, this is Paula Grant from Westgate Property Management. I'm calling about your apartment lease, which ends on June thirtieth."],
      ["M", "Oh, yes. I've been meaning to call you. I'd like to renew it for another year."],
      ["W", "Great. I should let you know that the monthly rent will go up by fifty dollars starting in July."],
      ["M", "I see. That's a bit more than I expected, but the location is really convenient for my commute, so I'll stay."],
      ["W", "Wonderful. I'll prepare the new lease. Could you stop by our office sometime next week to sign it?"],
      ["M", "Sure. I'll come by on Tuesday after work."],
    ],
    qs: [
      { q: "Why is the woman calling?", o: ["To schedule a repair", "To collect a late payment", "To announce building renovations", "To discuss a rental agreement"], a: 3, e: "I'm calling about your apartment lease → 討論租約（rental agreement）。" },
      { q: "Why does the man decide to stay?", o: ["The rent is lower than elsewhere", "He recently changed jobs", "It is convenient for getting to work", "The apartment was renovated"], a: 2, e: "the location is really convenient for my commute → 通勤方便。房租其實調漲了，所以租金較低的選項錯。" },
      { q: "What will the man do next week?", o: ["Move to a new apartment", "Visit an office to sign a document", "Pay a security deposit", "Meet a new tenant"], a: 1, e: "女子請他下週到辦公室簽約，他說週二下班後過去。" },
    ],
  },
  // Questions 53-55
  {
    lines: [
      ["W", "Hi, Sam. Thanks for coming up. My laptop keeps disconnecting from the Wi-Fi, and I can't upload my files to the shared drive."],
      ["M", "Hmm, has this been happening all day?"],
      ["W", "Since this morning. Nadia says hers is doing the same thing."],
      ["W2", "Yes, mine dropped the connection three times during a video call. But it's only happening on this floor. People downstairs are fine."],
      ["M", "Then it's probably not your laptops. It sounds like the wireless router on this floor. I'll restart it now, and if that doesn't work, I'll replace it with a spare from the storage room."],
      ["W2", "Thanks. Could you let us know when it's done? We have a client call at two."],
    ],
    qs: [
      { q: "What problem does the woman report?", o: ["A connection keeps failing", "A file has been deleted", "Her password has expired", "Her laptop will not turn on"], a: 0, e: "keeps disconnecting from the Wi-Fi → 網路一直斷線。檔案只是上傳不了，並沒有被刪除。" },
      { q: "What does Nadia say about the problem?", o: ["It began last week", "It affects only one floor", "It was caused by a video call", "It has already been fixed"], a: 1, e: "it's only happening on this floor → 只影響這一層樓。video call 是她斷線時正在做的事，不是原因。" },
      { q: "What does the man say he might do?", o: ["Order new laptops", "Reset everyone's passwords", "Swap out a device", "Move the women to another floor"], a: 2, e: "如果重開沒用，就用備品換掉路由器 → 更換設備（swap out a device）。" },
    ],
  },
  // Questions 56-58
  {
    lines: [
      ["M", "Hi, Ms. Duarte. This is Paul from Lakeshore Events, calling about the awards dinner you're planning for November."],
      ["W", "Oh, hello. Did you find a venue for us?"],
      ["M", "I did. The Riverside Pavilion can seat two hundred guests, and it has a stage for the award presentations. The only thing is, it's about forty minutes from downtown."],
      ["W", "Hmm, many of our guests will be coming straight from the office."],
      ["M", "In that case, we could arrange a shuttle bus from your building. It would add about eight hundred dollars to the budget."],
      ["W", "That sounds reasonable. Let me run it by our director first. I'll get back to you by Thursday."],
    ],
    qs: [
      { q: "What type of event is being planned?", o: ["A product launch", "A company picnic", "An award ceremony", "A concert"], a: 2, e: "awards dinner、award presentations → 頒獎典禮。" },
      { q: "What drawback of the venue does the man mention?", o: ["Its limited seating", "Its high rental fee", "Its lack of a stage", "Its distance from the city center"], a: 3, e: "about forty minutes from downtown → 離市中心遠。場地有舞台且能坐兩百人，所以其他選項都與內容相反。" },
      { q: "What will the woman do before Thursday?", o: ["Get approval from a supervisor", "Visit the venue", "Pay a deposit", "Send a guest list"], a: 0, e: "Let me run it by our director first → 先徵求主管同意。" },
    ],
  },
  // Questions 59-61
  {
    lines: [
      ["W", "Hi, I'm calling about a package I sent to Singapore last week with your express service. The tracking number is S G four four nine."],
      ["M", "Let me look that up. It appears the package is being held at customs in Singapore. There's a note saying the declaration form is missing the item's value."],
      ["W", "But I paid extra for express delivery so it would arrive by Monday."],
      ["M", "I understand. If you email us an invoice showing the value today, we can forward it to customs right away."],
      ["W", "I can do that. Is there anything else I need to send?"],
      ["M", "No, that should be all. And since the delivery will be late, I'll request a refund of the express fee for you."],
    ],
    qs: [
      { q: "What is the problem with the package?", o: ["It was sent to the wrong address", "It is being held because of missing information", "It was damaged during shipping", "It was returned to the sender"], a: 1, e: "被海關扣留，因為申報單缺少物品價值 → 資料不齊而被扣留。" },
      { q: "Why does the woman say, \"I paid extra for express delivery\"?", o: ["To express concern about a delay", "To ask about shipping options", "To confirm a payment method", "To request a cheaper service"], a: 0, e: "她多付了快遞費就是要週一前送達，聽到被扣留而說這句 → 表達對延誤的不滿與擔心。" },
      { q: "What does the man say he will do?", o: ["Send a new package", "Call the customs office", "Change the delivery address", "Request that a fee be returned"], a: 3, e: "I'll request a refund of the express fee → 申請退還費用。男子是把發票轉給海關，並沒有說要打電話。" },
    ],
  },
  // Questions 62-64
  {
    lines: [
      ["M", "Hi, I'd like to order business cards for our new sales manager. She starts on Monday."],
      ["W", "Sure. How many would you like?"],
      ["M", "Last time we ordered two hundred fifty, but they ran out quickly. This time let's get five hundred."],
      ["W", "No problem. With our standard service, they'll be ready on Wednesday. If you need them sooner, we can have them ready tomorrow for an extra charge."],
      ["M", "She won't need them until her first client meeting next Friday, so standard is fine."],
      ["W", "Great. Just email us your logo file, and we'll send you a proof to approve before printing."],
    ],
    graphic: { kind: "table", title: "Quick Print Center: Business Card Prices", headers: ["Quantity", "Standard (3 days)", "Rush (next day)"], rows: [["250 cards", "$30", "$45"], ["500 cards", "$50", "$70"], ["1,000 cards", "$85", "$110"]] },
    qs: [
      { q: "Who are the business cards for?", o: ["A client", "The man", "A printing company", "A new employee"], a: 3, e: "our new sales manager. She starts on Monday → 新進員工。" },
      { q: "Look at the graphic. How much will the man pay?", o: ["$45", "$70", "$50", "$85"], a: 2, e: "要訂五百張，且選一般服務（standard），對照表格是 $50。$70 是五百張的急件價。" },
      { q: "What does the woman ask the man to send?", o: ["A payment", "A digital image", "A signed contract", "A list of names"], a: 1, e: "email us your logo file → 電子圖檔。proof 是店家要寄給他確認的樣稿，不是他要寄的。" },
    ],
  },
  // Questions 65-67
  {
    lines: [
      ["W", "Jason, I've got the website traffic numbers for the first four months of the year."],
      ["M", "Great. How do they look?"],
      ["W", "Pretty steady, except for one month that was much higher than the others. That was when we ran the free shipping promotion."],
      ["M", "Interesting. So customers really respond to shipping offers. We should try that again this summer."],
      ["W", "I agree. But before we do, I'd like to find out how many of those visitors actually made purchases."],
      ["M", "Good idea. I'll ask Mei in the finance department for the sales figures."],
    ],
    graphic: { kind: "bars", title: "Online Store Visitors (thousands)", unit: "", items: [["January", 32], ["February", 28], ["March", 45], ["April", 30]] },
    qs: [
      { q: "What are the speakers discussing?", o: ["Website traffic", "Staff schedules", "Product prices", "Shipping costs"], a: 0, e: "website traffic numbers → 網站流量。shipping 只是促銷內容，不是討論主題。" },
      { q: "Look at the graphic. When did the company offer free shipping?", o: ["In January", "In February", "In April", "In March"], a: 3, e: "免運促銷那個月的流量明顯比其他月高，圖表中最高的是三月。" },
      { q: "What will the man do next?", o: ["Launch a summer promotion", "Update the website", "Request some sales data", "Contact a shipping company"], a: 2, e: "I'll ask Mei … for the sales figures → 索取銷售資料。夏季促銷只是之後的構想。" },
    ],
  },
  // Questions 68-70
  {
    lines: [
      ["M", "Excuse me, I'm redoing my kitchen, and I'm looking for new ceiling lights. Where can I find them?"],
      ["W", "They're in aisle twelve, next to the electrical supplies. Are you using this weekend's coupons? There's one for lighting."],
      ["M", "I have the flyer right here. I was actually going to use the coupon for paint, since I need to paint the walls too."],
      ["W", "Unfortunately, you can only use one coupon per purchase. But the lights cost a lot more than the paint, so that discount would save you more."],
      ["M", "Good point. I'll use that one, then. Do you offer installation?"],
      ["W", "We don't, but we have a list of local electricians at the service desk. I'll grab one for you."],
    ],
    graphic: { kind: "list", title: "Greenway Hardware: Weekend Coupons", items: ["10% off paint and brushes", "15% off garden tools", "20% off light fixtures", "25% off power tools"] },
    qs: [
      { q: "What is the man working on?", o: ["A garden", "A kitchen renovation", "A new office", "An electrical repair business"], a: 1, e: "I'm redoing my kitchen → 廚房翻修。" },
      { q: "Look at the graphic. What discount will the man most likely receive?", o: ["10%", "15%", "20%", "25%"], a: 2, e: "他本來想用油漆的券，但被建議改用燈具的券，對照清單燈具是 20%。10% 是油漆券，屬於陷阱。" },
      { q: "What will the woman do next?", o: ["Get a list of contractors", "Install some lights", "Show the man to aisle twelve", "Check the price of paint"], a: 0, e: "I'll grab one for you → 去拿當地電工名單。店家不提供安裝，所以「Install some lights」錯。" },
    ],
  },
];
