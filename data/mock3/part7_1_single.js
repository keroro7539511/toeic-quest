// 模擬考 3 — Part 7 單篇閱讀（Questions 147–175，共 10 組 29 題）
// 雙篇 / 三篇閱讀在 part7_2_multi.js，於本檔之後載入並 concat。
window.MOCK3 = window.MOCK3 || {};
window.MOCK3.part7 = (window.MOCK3.part7 || []).concat([
  // Questions 147–148
  {
    passages: [
      {
        kind: "text",
        title: "Text-message chain",
        messages: [
          ["Priya Nair", "1:12 P.M.", "Gavin, the rental car counter at the airport says our reservation is under your name, not mine."],
          ["Gavin Fletcher", "1:14 P.M.", "Sorry about that. I booked it with my company card last week."],
          ["Priya Nair", "1:15 P.M.", "They won't release the car unless the person on the reservation shows a driver's license."],
          ["Gavin Fletcher", "1:17 P.M.", "My train gets in at 2:30. Can you wait for me there?"],
          ["Priya Nair", "1:18 P.M.", "The client lunch is at 3:00 across town."],
          ["Gavin Fletcher", "1:20 P.M.", "Then take a taxi and keep the receipt. I'll pick up the car and meet you at the restaurant."],
        ],
      },
    ],
    qs: [
      { q: "Where most likely is Ms. Nair?", o: ["At a train station", "At a restaurant", "At an airport", "At a client's office"], a: 2, type: "detail", e: "Ms. Nair 在 1:12 說 the rental car counter at the airport（機場的租車櫃台）告訴她訂位是 Mr. Fletcher 的名字，所以她人在機場。火車站是 Mr. Fletcher 要抵達的地方。" },
      { q: "At 1:18 P.M., what does Ms. Nair most likely mean when she writes, \"The client lunch is at 3:00 across town\"?", o: ["She cannot wait for Mr. Fletcher to arrive.", "She wants Mr. Fletcher to change the reservation.", "She has already arrived at the restaurant.", "She thinks the lunch should be moved to a later time."], a: 0, type: "intent", e: "Mr. Fletcher 問她能不能等到 2:30，她回答午餐 3 點在城市另一頭，意思是等下去會來不及，所以不能等。Mr. Fletcher 接著叫她搭計程車，也證明了這個意思。" },
    ],
  },
  // Questions 149–150
  {
    passages: [
      {
        kind: "ad",
        title: "Fairbanks Upholstery & Furniture Repair",
        body: "Don't throw away that favorite armchair! Since 1998, Fairbanks Upholstery has given old sofas, chairs, and dining sets a second life. Choose from more than 400 fabrics and leathers in our showroom at 72 Tilden Road, or let us bring samples to your home or office at no charge.\n\nWe also repair broken frames, replace worn springs, and refinish wooden surfaces. Most jobs are completed within two weeks.\n\nBusinesses: ask about our discounted rates for hotels, restaurants, and offices with ten or more pieces of furniture. Call 555-0127 for a free estimate.",
      },
    ],
    qs: [
      { q: "What is being advertised?", o: ["A furniture store's annual sale", "A service that restores used furniture", "A company that rents office equipment", "A workshop on making wooden furniture"], a: 1, type: "main", e: "廣告說 Fairbanks 讓舊沙發、椅子「重獲新生」，並提供修理骨架、更換彈簧、重新上漆等服務，所以是舊家具修復服務。內文沒有提到特賣或出租。" },
      { q: "What is indicated about business customers?", o: ["They must visit the showroom in person.", "They receive free delivery.", "Their orders are completed within one week.", "They may pay lower prices for large jobs."], a: 3, type: "detail", e: "最後一段說飯店、餐廳和辦公室有十件以上家具時，可以詢問 discounted rates（優惠價格）。一般工作需要兩週，不是一週；送樣品到府免費，但沒有提到免運費。" },
    ],
  },
  // Questions 151–152
  {
    passages: [
      {
        kind: "notice",
        title: "Notice to Shoppers — Pell Street Hardware",
        body: "Beginning Monday, October 6, Pell Street Hardware will no longer provide free plastic bags at the checkout. Paper bags will be available for 10 cents each, and all bag fees will be donated to the Pell Valley Food Bank.\n\nTo help with the change, every customer who spends $30 or more during the week of October 6 will receive a free reusable cotton bag, while supplies last. Reusable bags are also sold near the entrance for $2.50.\n\nPlease remember that our self-checkout lanes now accept reusable bags. Simply press \"Own Bag\" on the screen before scanning your items.",
      },
    ],
    qs: [
      { q: "What is the purpose of the notice?", o: ["To explain a change in a store policy", "To announce the opening of a new market", "To ask shoppers to volunteer at a food bank", "To introduce new self-checkout machines"], a: 0, type: "main", e: "公告第一句就說從 10 月 6 日起不再免費提供塑膠袋，整篇在說明購物袋規定的改變。食物銀行只是袋子費用的捐贈對象，自助結帳機也不是新的。" },
      { q: "What is NOT mentioned as being available to shoppers?", o: ["Paper bags for a small fee", "A free bag with a qualifying purchase", "Reusable bags for sale near the entrance", "Home delivery of groceries"], a: 3, type: "not", e: "紙袋每個 10 分錢、消費滿 30 美元送環保袋、入口處販售環保袋都有提到；只有送貨到府完全沒有出現在公告中。" },
    ],
  },
  // Questions 153–154
  {
    passages: [
      {
        kind: "receipt",
        title: "Volta Electronics — Store #14, Garnet Mall",
        table: {
          headers: ["Item", "Qty", "Price"],
          rows: [
            ["Wireless keyboard, KX-200", "1", "$59.00"],
            ["USB-C cable, 2 m", "2", "$24.00"],
            ["Laptop sleeve, 15-inch", "1", "$32.00"],
            ["Subtotal", "", "$115.00"],
            ["Member discount (10%)", "", "-$11.50"],
            ["Total", "", "$103.50"],
          ],
        },
        body: "Date: June 14 | Paid by: Credit card ending 4471\nVolta Rewards member: Simone Grady\n\nItems may be returned within 30 days with this receipt. Opened software and headphones may be exchanged but not returned. Volta Rewards members receive an additional 15 days for returns on all items.",
      },
    ],
    qs: [
      { q: "What is indicated about Ms. Grady?", o: ["She paid for her purchase in cash.", "She belongs to a store's loyalty program.", "She bought a pair of headphones.", "She exchanged a keyboard on June 14."], a: 1, type: "detail", e: "收據上寫 Volta Rewards member: Simone Grady，並有會員折扣 10%，表示她是商店會員計畫的成員。她用信用卡付款，也沒有買耳機。" },
      { q: "By what date can Ms. Grady most likely return the laptop sleeve?", o: ["June 29", "July 14", "July 29", "August 14"], a: 2, type: "infer", e: "一般退貨期限是 30 天，會員再多 15 天，共 45 天。6 月 14 日加 45 天是 7 月 29 日。只算 30 天會選到 July 14，是常見陷阱。" },
    ],
  },
  // Questions 155–157
  {
    passages: [
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Harriet Vance <hvance@brooklinedist.com>"], ["To", "Marco Lindahl <mlindahl@brooklinedist.com>"], ["Date", "August 25"], ["Subject", "Forklift certification renewal"]],
        body: "Dear Mr. Lindahl,\n\nOur records show that your forklift operator certification will expire on September 30. Under company policy, warehouse staff may not operate forklifts without a valid certificate, so please renew yours before that date.\n\nThe renewal course takes half a day and includes a short written test and a driving assessment. Sessions will be held in the training room at the Ashby warehouse on September 9 and September 16, from 8:00 A.M. to 12:00 P.M. You will be paid your regular wage while attending.\n\nTo reserve a place, please reply to this e-mail with your preferred date. Note that each session is limited to eight participants, and places are assigned in the order that requests are received.\n\nRegards,\nHarriet Vance\nSafety Coordinator, Brookline Distribution",
      },
    ],
    qs: [
      { q: "Why did Ms. Vance send the e-mail?", o: ["To offer Mr. Lindahl a new position", "To report a problem with a forklift", "To announce a change in company policy", "To remind an employee to renew a qualification"], a: 3, type: "main", e: "第一段說 Mr. Lindahl 的堆高機操作證書 9 月 30 日到期，請他在那之前更新，目的是提醒員工更新證照。公司規定只是被引用，並沒有改變。" },
      { q: "What will Mr. Lindahl be required to do during the course?", o: ["Take a written test", "Train new warehouse staff", "Repair a forklift", "Pay a registration fee"], a: 0, type: "detail", e: "第二段說課程包含 a short written test and a driving assessment（筆試和駕駛評估）。上課期間照領薪水，不需要付費。" },
      { q: "What is suggested about the renewal sessions?", o: ["They are held at several locations.", "They last a full day.", "They may fill up quickly.", "They are offered every month."], a: 2, type: "infer", e: "最後一段說每場限八人，並依收到申請的順序分配名額，暗示名額可能很快額滿。課程只有半天，地點也只有 Ashby 倉庫一處。" },
    ],
  },
  // Questions 158–160
  {
    passages: [
      {
        kind: "webpage",
        title: "Plateful Meal Kits — Delivery FAQ",
        body: "When will my box arrive?\nBoxes are delivered on the day you choose when you subscribe — Tuesday, Wednesday, or Thursday — between 8:00 A.M. and 8:00 P.M. On the morning of your delivery, you will receive a text message with a two-hour delivery window.\n\nWhat if I'm not home?\nYou do not need to be home. Each box is packed with insulated liners and ice packs that keep ingredients fresh for up to 48 hours. If you live in an apartment building, you may enter delivery instructions, such as a door code, on your account page.\n\nCan I skip a week?\nYes. You can skip any delivery or pause your subscription at no cost, as long as you make the change by 11:59 P.M. five days before your scheduled delivery. Changes made after this deadline will apply to the following week.\n\nCan I change my delivery day?\nYes, but changes take effect two weeks after they are made, as our kitchens plan orders in advance.",
      },
    ],
    qs: [
      { q: "How are customers informed of a more exact delivery time?", o: ["By checking a tracking map online", "By receiving a text message", "By calling a customer service line", "By reading a note on the box"], a: 1, type: "detail", e: "第一段說配送當天早上會收到簡訊，告知兩小時的配送時段。其他方式網頁都沒有提到。" },
      { q: "What is NOT stated about Plateful boxes?", o: ["They keep food fresh for up to two days.", "They can be delivered on three different weekdays.", "Customers can leave instructions for the drivers.", "They can be returned for recycling."], a: 3, type: "not", e: "48 小時保鮮、週二到週四三天可選、可以填寫門禁密碼等指示都有提到；箱子能否回收完全沒有說明。" },
      { q: "On the Web page, the word \"window\" in paragraph 1 is closest in meaning to", o: ["period", "opening", "view", "frame"], a: 0, type: "vocab", e: "a two-hour delivery window 指「兩小時的配送時段」，window 在這裡是「一段時間」的意思，最接近 period。opening、view、frame 都是「窗戶」相關的字面意思陷阱。" },
    ],
  },
  // Questions 161–163
  {
    passages: [
      {
        kind: "memo",
        title: "Memo",
        meta: [["To", "All Employees"], ["From", "Lionel Garza, Facilities Manager"], ["Date", "March 3"], ["Subject", "Visitor registration"]],
        body: "Starting March 17, all visitors to our Ellery Road office must be registered in advance through our new online visitor system, Gatepass. Until now, guests have signed in on paper at the reception desk, which has often caused long lines in the lobby on busy mornings.\n\nWhen you are expecting a visitor, enter his or her name, company, and arrival time in Gatepass at least one hour before the visit. The visitor will then receive an e-mail with a code to scan at the new kiosk in the lobby, which will print a name badge. Guests who arrive without a code will have to wait while the receptionist contacts their host.\n\nDelivery drivers and contractors who come to the building regularly will be issued permanent passes. Please direct any questions to me at extension 4420.",
      },
    ],
    qs: [
      { q: "What is the purpose of the memo?", o: ["To announce the hiring of a new receptionist", "To ask employees to update their contact information", "To explain a new procedure for receiving guests", "To report that the lobby will be renovated"], a: 2, type: "main", e: "備忘錄說明 3 月 17 日起訪客必須透過 Gatepass 事先登記，並解釋操作步驟，目的是說明接待訪客的新程序。大廳只是新增一台機器，並沒有整修。" },
      { q: "According to the memo, what problem did the old system cause?", o: ["People had to wait in line at the entrance.", "Visitors often went to the wrong floor.", "Name badges were frequently lost.", "Hosts were not told when guests arrived."], a: 0, type: "detail", e: "第一段說過去在接待櫃台用紙本簽到，忙碌的早上常在大廳大排長龍（long lines in the lobby），也就是訪客要排隊等候。" },
      { q: "In the memo, the word \"issued\" in paragraph 3 is closest in meaning to", o: ["published", "given", "discussed", "worried"], a: 1, type: "vocab", e: "will be issued permanent passes 是「會被發給永久通行證」，issue 在此是「發給、核發」，最接近 given。issue 也有「發行（刊物）」的意思，所以 published 是一字多義陷阱。" },
    ],
  },
  // Questions 164–167
  {
    passages: [
      {
        kind: "chat",
        title: "Online chat discussion",
        messages: [
          ["Hana Moretti", "10:02 A.M.", "Quick update: the delegation from Kinsei Motors now lands on Tuesday evening instead of Monday. Their factory tour was planned for Tuesday morning."],
          ["Yusuf Demir", "10:04 A.M.", "Can we move the tour to Wednesday morning? The production line is running at full speed then, so they'd see everything."],
          ["Clara Benson", "10:05 A.M.", "Wednesday morning is when the safety inspectors are coming. Visitors aren't allowed on the floor during an inspection."],
          ["Hana Moretti", "10:07 A.M.", "What about Wednesday afternoon?"],
          ["Clara Benson", "10:08 A.M.", "That works. The inspection should be finished by noon."],
          ["Diego Salas", "10:10 A.M.", "I've booked a table at Vierra's for lunch with them on Wednesday. Should I change it to dinner instead?"],
          ["Hana Moretti", "10:11 A.M.", "Let's keep lunch. It'll give us a chance to go over the contract before the tour."],
          ["Diego Salas", "10:12 A.M.", "Got it. I'll also arrange a car to pick them up at the airport on Tuesday."],
          ["Hana Moretti", "10:13 A.M.", "Thanks. Yusuf, please let the line supervisors know about the new time."],
        ],
      },
    ],
    qs: [
      { q: "Why does the factory tour need to be rescheduled?", o: ["The production line will be shut down.", "A contract has not been signed.", "A restaurant is fully booked.", "Some visitors will arrive later than planned."], a: 3, type: "detail", e: "Ms. Moretti 一開始就說 Kinsei Motors 的代表團改成週二晚上才抵達，而參觀原訂週二早上，所以必須改時間。" },
      { q: "Why is Wednesday morning unsuitable for the tour?", o: ["The factory will be closed for a holiday.", "An inspection will take place.", "Mr. Demir will be traveling.", "The visitors have another meeting."], a: 1, type: "detail", e: "Ms. Benson 說週三早上安全檢查人員會來，檢查期間訪客不得進入廠區。產線週三早上是正常運作的，不是關閉。" },
      { q: "At 10:11 A.M., what does Ms. Moretti most likely mean when she writes, \"Let's keep lunch\"?", o: ["She wants to order food to the office.", "She thinks the meal should be shorter.", "She does not want Mr. Salas to change a reservation.", "She plans to skip the tour herself."], a: 2, type: "intent", e: "Mr. Salas 問要不要把週三午餐訂位改成晚餐，Ms. Moretti 回答 Let's keep lunch，並說可以趁參觀前討論合約，意思是不要更改午餐訂位。" },
      { q: "What will Mr. Demir most likely do next?", o: ["Inform some supervisors of a schedule change", "Pick up the visitors at the airport", "Contact the safety inspectors", "Reserve a table for dinner"], a: 0, type: "infer", e: "最後 Ms. Moretti 請 Yusuf（Mr. Demir）通知產線主管新的參觀時間，所以他接下來會去通知主管。去機場接機是 Mr. Salas 負責安排的。" },
    ],
  },
  // Questions 168–171
  {
    passages: [
      {
        kind: "letter",
        title: "Letter",
        body: "September 1\n\nMs. Grace Pemberly\n14 Fennel Lane\nKelburn\n\nDear Ms. Pemberly,\n\nAs part of the Greener Kelburn initiative, the city's Parks Department will plant 1,200 new trees along residential streets this autumn. — [1] — Your address on Fennel Lane has been selected because the strip of grass between your sidewalk and the street is wide enough to support a young tree.\n\nThe tree will be planted at no cost to you. — [2] — Our crews will also water it every week for the first two years, after which its roots should be well established. We ask only that you avoid parking vehicles or placing heavy objects on the planting area.\n\nIf you would like to choose the species of your tree, please return the enclosed card by September 12. Options include red maple, linden, and Japanese cherry. — [3] — If we do not receive your card by that date, a species suited to your street's conditions will be selected for you.\n\nResidents who do not wish to have a tree planted may decline by calling 555-0192. — [4] — We hope, however, that you will join your neighbors in helping to make Kelburn a cooler, greener city.\n\nSincerely,\n\nPaulina Ferro\nUrban Forestry Coordinator, Kelburn Parks Department",
      },
    ],
    qs: [
      { q: "Why was the letter sent to Ms. Pemberly?", o: ["To inform her about a planned improvement near her home", "To ask her to volunteer for a tree-planting event", "To request payment for a city service", "To warn her about a parking regulation"], a: 0, type: "main", e: "信中說公園處要在住宅街道種樹，而她家門前的草地夠寬，被選為種植地點，目的是通知她家附近即將進行的綠化工程。信中明說免費，所以不是要求付款。" },
      { q: "What will the Parks Department do after the tree is planted?", o: ["Replace it every two years", "Send Ms. Pemberly care instructions", "Install a fence around it", "Water it on a regular basis"], a: 3, type: "detail", e: "第二段說工作人員頭兩年會每週澆水（water it every week），也就是定期澆水。every two years 是把「兩年」拿來混淆的陷阱。" },
      { q: "What will most likely happen if Ms. Pemberly does not return the card?", o: ["Her tree will not be planted.", "The city will choose the type of tree.", "She will receive a phone call.", "She will be charged a fee."], a: 1, type: "infer", e: "第三段說如果期限前沒收到回函，會替她選一種適合該街道條件的樹種，也就是由市政府決定樹種。不想種樹要另外打電話拒絕，沒回函並不等於不種。" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Each of these was chosen because it grows well in our region's climate.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 2, type: "insert", e: "句中的 Each of these 需要一組可選的東西當指涉對象，正好是 [3] 前面列出的三種樹（red maple、linden、Japanese cherry），說明這些樹種被選中的原因。其他位置前面都沒有可以對應的清單。" },
    ],
  },
  // Questions 172–175
  {
    passages: [
      {
        kind: "article",
        title: "Fieldsight to Expand Drone Services",
        body: "LARKSPUR (May 21) — Fieldsight, a Larkspur-based company that uses drones to photograph farmland, announced on Monday that it will open offices in two neighboring provinces later this year. — [1] —\n\nFounded in 2019 by agricultural engineer Teodora Ilic, Fieldsight flies drones equipped with special cameras over crop fields. The images reveal which parts of a field need more water or fertilizer, often weeks before any problem can be seen from the ground. — [2] — Farmers who use the service say they have cut their fertilizer costs by as much as 20 percent.\n\n\"When we started, almost all of our clients were large commercial farms,\" said Ms. Ilic. \"Now nearly half are family farms with fewer than 50 hectares.\" — [3] — To serve these smaller customers, Fieldsight recently introduced a monthly subscription that costs considerably less than its standard per-flight rate.\n\nThe new offices, in Corvale and East Marren, will each employ about fifteen people, including drone pilots and data analysts. — [4] — The company currently has 40 employees, all of whom work at its headquarters in Larkspur.",
      },
    ],
    qs: [
      { q: "What is the article mainly about?", o: ["A new law regulating the use of drones", "A company's plan to grow its business", "A competition for agricultural engineers", "A decline in the price of fertilizer"], a: 1, type: "main", e: "第一段就說 Fieldsight 將在兩個鄰近省份開設辦公室，後文再介紹公司背景與新辦公室的人力，主旨是公司擴展業務。肥料「成本」下降是客戶的好處，不是肥料「價格」下降。" },
      { q: "What is NOT mentioned as a benefit of Fieldsight's service?", o: ["It can detect problems early.", "It can help lower fertilizer expenses.", "It offers a less expensive option for small farms.", "It trains farmers to operate drones."], a: 3, type: "not", e: "提早發現問題、肥料成本最多降兩成、為小農推出較便宜的月費方案都有提到；文章中只有公司的無人機飛手，並沒有說要訓練農民操作無人機。" },
      { q: "What is suggested about Fieldsight's clients?", o: ["Most of them are located outside Larkspur.", "They must sign contracts lasting several years.", "A larger share of them are small farms than before.", "They usually pay for each flight in advance."], a: 2, type: "infer", e: "Ms. Ilic 說剛創業時幾乎都是大型商業農場，現在將近一半是小於 50 公頃的家庭農場，可推論小型農場在客戶中的比例變高了。" },
      { q: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong?\n\"Fieldsight is currently accepting applications for these positions.\"", o: ["[1]", "[2]", "[3]", "[4]"], a: 3, type: "insert", e: "these positions 必須指前面提到的職位，[4] 前一句正好說新辦公室要僱用無人機飛手和資料分析師，所以放在 [4]。其他位置前面都沒有提到任何職缺。" },
    ],
  },
]);
