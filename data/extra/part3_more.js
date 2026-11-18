// Part 3 追加練習：10 組對話（含三人對話、看圖題、言外之意題）
window.PART3.push(...[
  {
    lines: [
      ["W", "Frank, Tony, do either of you know why we haven't received the printer paper we ordered? We're almost out."],
      ["M", "I placed the order on Monday, but the supplier called this morning. They said their warehouse is short on the brand we usually buy."],
      ["M2", "They offered us a different brand at the same price, right? I heard Frank on the phone."],
      ["M", "That's right. It's recycled paper, and they say the quality is just as good."],
      ["W", "Then let's accept it. We have a big client presentation on Thursday, and we'll need to print a lot of handouts."],
      ["M2", "I'll call the supplier back and confirm, then. If they ship today, it should be here by Wednesday."],
    ],
    qs: [
      { q: "What problem are the speakers discussing?", o: ["A printer is broken", "A client canceled a meeting", "An order has not arrived", "A supplier raised its prices"], a: 2, e: "女子問為什麼訂的紙還沒送到 → 訂單尚未到貨。「A supplier raised its prices」是陷阱，對話中說的是 at the same price。" },
      { q: "What does the supplier suggest?", o: ["Substituting a different product", "Canceling the order", "Picking up the items in person", "Paying for express shipping"], a: 0, e: "供應商 offered us a different brand → 改用其他品牌替代，substitute 是 different brand 的換句話說。" },
      { q: "What will one of the men do next?", o: ["Print some handouts", "Visit a warehouse", "Reschedule a presentation", "Contact a supplier"], a: 3, e: "第二位男子說 I'll call the supplier back and confirm → 聯絡供應商。handouts、warehouse 都是對話中出現過的字，屬於同字陷阱。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, I need two tickets to Westfield for tomorrow morning. My colleague and I have a meeting there at ten."],
      ["W", "Certainly. The earliest express train leaves at seven fifty."],
      ["M", "That's a bit too early for us. We're coming from the other side of the city. Is there anything after eight thirty that still gets us there before ten?"],
      ["W", "Yes, there's one train that fits. Would you like first class or standard?"],
      ["M", "Standard is fine. Can I pay with my company's corporate card?"],
      ["W", "Of course. Just sign here, and I'll need to see a photo ID as well."],
    ],
    graphic: { kind: "table", title: "Riverside Line to Westfield", headers: ["Train", "Departs", "Arrives"], rows: [["Express 204", "7:50 A.M.", "8:45 A.M."], ["Local 306", "8:10 A.M.", "9:40 A.M."], ["Express 208", "8:35 A.M.", "9:25 A.M."], ["Local 312", "9:00 A.M.", "10:30 A.M."]] },
    qs: [
      { q: "Why is the man traveling to Westfield?", o: ["To visit a relative", "To attend a meeting", "To start a new job", "To tour a factory"], a: 1, e: "男子說 My colleague and I have a meeting there at ten → 去開會。" },
      { q: "Look at the graphic. Which train will the man most likely take?", o: ["Express 204", "Local 306", "Local 312", "Express 208"], a: 3, e: "條件是八點半以後出發、十點前抵達，只有 8:35 出發、9:25 抵達的 Express 208 符合。Local 312 雖在八點半後出發，但十點半才到。" },
      { q: "What does the woman ask the man to do?", o: ["Show some identification", "Choose a seat", "Pay in cash", "Return later"], a: 0, e: "女子說 I'll need to see a photo ID → 出示身分證件。男子用公司卡付款，所以「Pay in cash」錯。" },
    ],
  },
  {
    lines: [
      ["W", "Good morning, Harbor View Clinic. How can I help you?"],
      ["M", "Hi, this is Daniel Ortiz. I have an appointment with Dr. Kwan on Friday at three, but something came up at work. Could I move it to next week?"],
      ["W", "Let me check. Dr. Kwan is fully booked on Monday and Tuesday. She has an opening on Wednesday at eight in the morning."],
      ["M", "Eight in the morning? I usually drop my kids off at school around then."],
      ["W", "I understand. Dr. Patel also has a four thirty slot on Wednesday afternoon, if you don't mind seeing a different doctor."],
      ["M", "That would work. I'll need to fill out a new insurance form, right? My plan changed last month."],
      ["W", "Yes. You can download it from our website and bring it with you."],
    ],
    qs: [
      { q: "Why is the man calling?", o: ["To change an appointment", "To ask for test results", "To register as a new patient", "To request a prescription"], a: 0, e: "男子說 Could I move it to next week → 更改預約時間。" },
      { q: "Why does the man say, \"I usually drop my kids off at school around then\"?", o: ["To explain why he will be late", "To ask about a school nearby", "To indicate that a time is inconvenient", "To request an earlier appointment"], a: 2, e: "櫃台提出早上八點，他說那時要送小孩上學 → 委婉表示那個時間不方便，之後櫃台才改提下午的時段。" },
      { q: "What does the woman tell the man to do?", o: ["Arrive fifteen minutes early", "Get a form online", "Call his insurance company", "Speak with Dr. Kwan directly"], a: 1, e: "女子說 You can download it from our website → 上網取得表格。「Call his insurance company」只是用 insurance 做的同字陷阱。" },
    ],
  },
  {
    lines: [
      ["M", "Good evening. I have a reservation under the name Hiroshi Sato. It's for three nights."],
      ["W", "Welcome, Mr. Sato. I see you booked a standard room. Since we're not busy this week, I can move you to a suite with a harbor view at no extra charge."],
      ["M", "That's very kind. Does the suite have a desk? I'll need to do some work in the evenings."],
      ["W", "Yes, it has a large desk and a separate sitting area. Breakfast is served in the lobby restaurant from six thirty until ten."],
      ["M", "Great. One more thing. My flight home leaves late on Thursday. Is it possible to check out after noon?"],
      ["W", "Late checkout is available for a fee of thirty dollars. Or we can hold your luggage at the front desk free of charge."],
    ],
    qs: [
      { q: "Where does the conversation take place?", o: ["At an airport", "At a restaurant", "At a travel agency", "At a hotel"], a: 3, e: "訂房、升級套房、退房等內容 → 在飯店櫃台。airport、restaurant 都是對話提到的字，但不是地點。" },
      { q: "What does the woman offer the man?", o: ["A discount on meals", "A better room", "A free airport shuttle", "An extra night"], a: 1, e: "免費從標準房升級到海景套房 → a better room。" },
      { q: "What does the man ask about?", o: ["Booking a flight", "Reserving a table for dinner", "Leaving the hotel later than usual", "Using a business center"], a: 2, e: "Is it possible to check out after noon → 詢問延後退房，選項用 leaving later than usual 換句話說。" },
    ],
  },
  {
    lines: [
      ["W", "Hi, I'm organizing a lunch for our sales team next Tuesday. There will be about twenty-five people."],
      ["M", "Wonderful. Have you had a chance to look at our lunch packages?"],
      ["W", "Yes. We had the sandwich platter last time and everyone enjoyed it, but this time I'd like to serve something hot."],
      ["M", "I understand. Our grilled chicken plate is very popular for hot meals."],
      ["W", "It sounds delicious, but it's over my budget. I can spend up to fifteen dollars per person."],
      ["M", "Then there's one other hot option that fits your budget. Could you give me the address of your office? Our driver will need it for the delivery."],
    ],
    graphic: { kind: "table", title: "Bella Cucina Catering: Lunch Packages", headers: ["Package", "Price per Person"], rows: [["Sandwich Platter", "$12"], ["Salad Bar", "$10"], ["Pasta Buffet", "$15"], ["Grilled Chicken Plate", "$18"]] },
    qs: [
      { q: "What event is the woman planning?", o: ["A team lunch", "A retirement party", "A product launch", "A training workshop"], a: 0, e: "a lunch for our sales team → 團隊午餐。" },
      { q: "Look at the graphic. Which package will the woman most likely order?", o: ["Sandwich Platter", "Salad Bar", "Grilled Chicken Plate", "Pasta Buffet"], a: 3, e: "她要熱食、每人預算最多十五元。烤雞超出預算，三明治和沙拉不是熱食，只剩 $15 的 Pasta Buffet。" },
      { q: "What information does the man request?", o: ["A credit card number", "The number of guests", "A delivery address", "The time of the event"], a: 2, e: "男子要辦公室地址給外送司機。人數女子一開始就說了，所以「The number of guests」是陷阱。" },
    ],
  },
  {
    lines: [
      ["W", "Mr. Hughes, the packaging machine on line three stopped again this morning. That's the second time this week."],
      ["M", "I was afraid of that. Rachel, did the maintenance team find the cause last time?"],
      ["W2", "They replaced a worn belt, but they think the real problem is the motor. A new one has to be ordered from the manufacturer in Germany."],
      ["M", "How long will that take?"],
      ["W2", "About ten days. Until then, we can keep the line running, but only at about half speed."],
      ["W", "In that case, we won't finish the Delmont order by Friday."],
      ["M", "Then I'd better call Delmont and explain the situation. Rachel, please order the motor today."],
    ],
    qs: [
      { q: "Where do the speakers most likely work?", o: ["At a repair shop", "At a manufacturing plant", "At a shipping company", "At an electronics store"], a: 1, e: "packaging machine、line three、maintenance team → 工廠生產線。" },
      { q: "What does Rachel say about a replacement part?", o: ["It is out of stock", "It is too expensive", "It must come from overseas", "It was installed incorrectly"], a: 2, e: "馬達要向德國的製造商訂購 → 必須從國外送來，overseas 是 Germany 的換句話說。" },
      { q: "What will the man do next?", o: ["Contact a client", "Hire extra workers", "Inspect the machine", "Go to Germany"], a: 0, e: "I'd better call Delmont → Delmont 是下訂單的客戶，所以是聯絡客戶。「Go to Germany」是同字陷阱。" },
    ],
  },
  {
    lines: [
      ["M", "Ms. Novak, thanks for showing me this office space. It's much brighter than the other places I've seen."],
      ["W", "Yes, the large windows get sunlight all day. It's two hundred square meters, and the monthly rent includes water and electricity."],
      ["M", "That's helpful. My only concern is parking. Several of my employees drive to work."],
      ["W", "There's a public garage just around the corner, and the building owner has an agreement with it. Tenants get a discount on monthly passes."],
      ["M", "That would solve the problem. How soon could we move in?"],
      ["W", "The current tenant leaves at the end of this month. I can email you a copy of the lease this afternoon so you can review it."],
    ],
    qs: [
      { q: "What does the man like about the office space?", o: ["Its low rent", "Its location", "Its size", "Its natural light"], a: 3, e: "much brighter、窗戶整天有陽光 → 自然採光。面積與租金只是女子補充的資訊。" },
      { q: "What concern does the man mention?", o: ["Parking for employees", "The length of the lease", "Noise from the street", "The cost of utilities"], a: 0, e: "My only concern is parking → 員工停車問題。水電已含在租金內，所以「The cost of utilities」不對。" },
      { q: "What will the woman send the man?", o: ["A floor plan", "A contract", "A parking pass", "A list of properties"], a: 1, e: "email you a copy of the lease → 租約，也就是合約（contract）。" },
    ],
  },
  {
    lines: [
      ["W", "Kenji, have you seen the results from the customer survey for our new energy drink?"],
      ["M", "Just the summary. Most people liked the taste, but a lot of them said the can is hard to open."],
      ["W", "Right. And the design team spent three months on that can."],
      ["M", "I know. But if customers are frustrated, they won't buy it again. Maybe we should test a different lid before the national launch."],
      ["W", "I agree. I'll set up a meeting with the design team for Monday so we can go over the comments together."],
    ],
    qs: [
      { q: "What product are the speakers discussing?", o: ["A coffee maker", "A snack bar", "A beverage", "A kitchen tool"], a: 2, e: "new energy drink → 飲料（beverage）。" },
      { q: "What does the woman imply when she says, \"the design team spent three months on that can\"?", o: ["The project was finished early", "The designers may be disappointed by the feedback", "The can was very expensive to produce", "The survey took too long to complete"], a: 1, e: "設計團隊花了三個月做的罐子卻被批評難開 → 暗示他們聽到回饋可能會很失望。對話沒提到成本或問卷花多久。" },
      { q: "What will the woman do?", o: ["Launch the product nationally", "Conduct another survey", "Change the product's flavor", "Arrange a meeting"], a: 3, e: "I'll set up a meeting with the design team → 安排會議。「Launch the product nationally」是同字陷阱。" },
    ],
  },
  {
    lines: [
      ["M", "Hi, I reserved a compact car online for this weekend. The confirmation number is K R seven five one."],
      ["W", "Thank you. Hmm, I'm afraid all of our compact cars are out right now. One was due back an hour ago, but the customer hasn't returned it yet."],
      ["M", "Oh no. I'm driving to a wedding in Brookfield, and I need to leave soon."],
      ["W", "I'm very sorry. I can give you a mid-size car for the same price. It's larger and more comfortable."],
      ["M", "That's fine with me. Does it have navigation? I've never driven to Brookfield before."],
      ["W", "It does. And please remember to return it with a full tank, or there's a refueling charge."],
    ],
    qs: [
      { q: "Why is the man at the rental counter?", o: ["To pick up a car he reserved", "To return a vehicle", "To report an accident", "To ask for directions"], a: 0, e: "I reserved a compact car online → 來取預約的車。「To return a vehicle」是把別的客戶沒還車的內容拿來做陷阱。" },
      { q: "What problem does the woman mention?", o: ["The man's reservation cannot be found", "The price has increased", "A car needs repairs", "A vehicle has not been returned on time"], a: 3, e: "One was due back an hour ago, but the customer hasn't returned it → 有車逾時未還。" },
      { q: "What does the woman remind the man to do?", o: ["Check the navigation system", "Drive carefully in Brookfield", "Refill the fuel tank before returning", "Sign an insurance form"], a: 2, e: "return it with a full tank → 還車前加滿油。" },
    ],
  },
  {
    lines: [
      ["W", "Hello, I saw a flyer about the photography workshop at the community center. Is there still space?"],
      ["M", "Let me see. The Saturday morning class is full, but there are three spots left in the Thursday evening class."],
      ["W", "Thursday evenings are fine. Do I need to bring my own camera?"],
      ["M", "Yes, any digital camera will do. Even a smartphone is OK for the first few lessons."],
      ["W", "Great. How much is the fee?"],
      ["M", "It's sixty dollars for six weeks. If you sign up online before Friday, you'll get ten dollars off."],
    ],
    qs: [
      { q: "What is the woman interested in?", o: ["Buying a camera", "Joining a class", "Renting a room", "Displaying her photographs"], a: 1, e: "她詢問攝影課是否還有名額 → 想報名課程。" },
      { q: "What does the man say about the Saturday class?", o: ["It has been canceled", "It is for advanced students", "It has no openings", "It meets in a different building"], a: 2, e: "The Saturday morning class is full → 沒有空位（no openings）。" },
      { q: "How can the woman get a discount?", o: ["By registering online early", "By bringing a friend", "By paying in cash", "By using her own camera"], a: 0, e: "週五前上網報名可折十元 → 提早線上報名。「By using her own camera」是用 camera 做的同字陷阱。" },
    ],
  },
]);
