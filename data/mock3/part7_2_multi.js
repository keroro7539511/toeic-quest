// 模擬考 3 — Part 7 多篇閱讀（Questions 176–200）
// 雙篇 2 組（176–180、181–185）＋ 三篇 3 組（186–190、191–195、196–200）
// 單篇閱讀由另一個檔案負責，於本檔之前載入。
window.MOCK3 = window.MOCK3 || {};
window.MOCK3.part7 = (window.MOCK3.part7 || []).concat([
  // ===== Questions 176–180：e-mail + reply =====
  {
    passages: [
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Marisol Ventura <mventura@olivotrattoria.com>"], ["To", "sales@kilnworkstableware.com"], ["Date", "July 8"], ["Subject", "Tableware inquiry"]],
        body: "Hello,\n\nI am the owner of Olivo Trattoria, and we will open our second location on Harlan Street in early September. I saw your stoneware collection at the Westbrook Restaurant Show last month and would like to order dinner plates, pasta bowls, and coffee cups for the new dining room, which seats 80 guests.\n\nI have two questions. First, can the pieces be produced in a dark green glaze to match our interior? Second, how long would an order of about 250 pieces of each item take to arrive? Our opening date cannot be changed, so we need everything delivered no later than August 25.\n\nThank you,\nMarisol Ventura",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Byron Asante <basante@kilnworkstableware.com>"], ["To", "Marisol Ventura <mventura@olivotrattoria.com>"], ["Date", "July 9"], ["Subject", "RE: Tableware inquiry"]],
        body: "Dear Ms. Ventura,\n\nThank you for your interest in Kilnworks. All of the pieces you mentioned are available in Forest, a deep green glaze that is one of our most popular colors. Prices are based on the number of pieces ordered of each item:\n\n1–199 pieces: $9.50 each\n200–499 pieces: $8.25 each\n500 pieces or more: $7.00 each\n\nBecause every piece is shaped by hand, standard orders take six weeks to produce, plus one week for delivery. For customers on a tight schedule, we offer rush production in four weeks for an additional 10 percent of the order total.\n\nI have enclosed a small tile glazed in Forest so that you can see the color in person. If you confirm your order by July 14, I can guarantee you a place in this month's production schedule.\n\nBest regards,\nByron Asante\nSales Representative, Kilnworks Tableware",
      },
    ],
    qs: [
      { q: "Why did Ms. Ventura write to Kilnworks Tableware?", o: ["To ask about ordering items for a new restaurant", "To complain about a damaged shipment", "To invite the company to a trade show", "To request a refund for an earlier order"], a: 0, type: "main", e: "Ms. Ventura 說她的餐廳九月要開第二家分店，想為新用餐區訂購盤子、碗和杯子，並詢問顏色與交貨時間，目的是詢問訂購事宜。商展是她看到產品的地方，不是邀請對方參展。" },
      { q: "Where did Ms. Ventura first see Kilnworks products?", o: ["At a friend's restaurant", "On the company's Web site", "At an industry event", "In a magazine advertisement"], a: 2, type: "detail", e: "第一封信說她上個月在 Westbrook Restaurant Show 看到 Kilnworks 的石器系列，這是餐飲業的展覽，也就是業界活動。" },
      { q: "How much will Ms. Ventura most likely pay for each dinner plate, not including any additional fees?", o: ["$7.00", "$8.25", "$9.50", "$9.08"], a: 1, type: "cross", e: "第一封信說每個品項約訂 250 件，第二封信的價格表中 200–499 件是每件 $8.25。題目說不含額外費用，所以不必加上急件的一成費用；$9.08 是把急件費算進去的陷阱。" },
      { q: "What will Ms. Ventura most likely need to do to receive her order on time?", o: ["Choose a more popular glaze", "Reduce the number of pieces she orders", "Pick up the order from the factory herself", "Pay for faster production"], a: 3, type: "cross", e: "最晚 7 月 14 日下單，一般訂單需 6 週製作加 1 週運送，會在 9 月初才到，趕不上第一封信要求的 8 月 25 日；急件 4 週製作加 1 週運送則可在 8 月中送達，所以她需要支付急件費用。" },
      { q: "What did Mr. Asante send with his e-mail?", o: ["A product catalog", "A signed contract", "A sample of a glaze color", "A list of other customers"], a: 2, type: "detail", e: "第二封信最後一段說附上一塊上了 Forest 釉色的小磁磚，讓她親眼看看顏色，也就是釉色樣品。" },
    ],
  },

  // ===== Questions 181–185：job advertisement + e-mail =====
  {
    passages: [
      {
        kind: "ad",
        title: "Now Hiring — Front Office Coordinator, Sorrel Veterinary Hospital",
        body: "Sorrel Veterinary Hospital, a busy animal clinic in the Weller Park neighborhood, is seeking a front office coordinator to join our team. The coordinator greets clients, schedules appointments, processes payments, and answers telephone and e-mail inquiries.\n\nRequirements:\n- At least two years of experience in a customer-facing role\n- Fluency in English and Portuguese\n- Familiarity with scheduling software\n\nExperience in a medical or veterinary office is a plus but not required. The position is full-time, Tuesday through Saturday, 9:00 A.M. to 5:30 P.M. Employees receive health insurance and a 30 percent discount on care for their own pets.\n\nTo apply, send a résumé and a short cover letter to Dr. Annika Holm at jobs@sorrelvet.com by March 20. Interviews will be held the week of March 27.",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Tomás Ribeiro <tribeiro@mailbox.com>"], ["To", "Dr. Annika Holm <jobs@sorrelvet.com>"], ["Date", "March 16"], ["Subject", "Front office coordinator position"]],
        body: "Dear Dr. Holm,\n\nI am writing to apply for the front office coordinator position advertised on your Web site. For the past three years, I have worked at the reception desk of the Bellmont Hotel, where I check in guests, manage reservations with the hotel's booking software, and respond to complaints. Because many of our guests come from Brazil and Portugal, I use Portuguese every day at work.\n\nAlthough I have never worked in a clinic, I have two dogs of my own and have been a client of Sorrel Veterinary Hospital for several years, so I know how much your clients value friendly, patient service.\n\nI should mention that I am taking an evening course on Tuesdays until the end of May, and the class begins at 5:00 P.M. I hope that some arrangement could be made for those few weeks.\n\nMy résumé is attached. Thank you for your consideration.\n\nSincerely,\nTomás Ribeiro",
      },
    ],
    qs: [
      { q: "What is NOT listed as a duty of the front office coordinator?", o: ["Greeting clients", "Scheduling appointments", "Handling payments", "Assisting veterinarians during examinations"], a: 3, type: "not", e: "廣告列出的工作是接待客戶、安排預約、處理付款、回覆電話和電子郵件；協助獸醫看診並沒有出現在職責中。" },
      { q: "What is indicated about Mr. Ribeiro?", o: ["He has more customer service experience than the position requires.", "He has previously worked at a medical office.", "He is not familiar with scheduling software.", "He speaks only English and Portuguese."], a: 0, type: "cross", e: "廣告要求至少兩年面對客戶的經驗，Mr. Ribeiro 在飯店櫃台做了三年，超過最低要求。他明說沒在診所工作過；他會用訂房系統，也沒有說只會兩種語言。" },
      { q: "How is Mr. Ribeiro familiar with Sorrel Veterinary Hospital?", o: ["He applied for a job there before.", "He has taken his own pets there.", "A friend of his works there.", "He has seen its advertisements at his hotel."], a: 1, type: "detail", e: "e-mail 第二段說他養了兩隻狗，多年來都是 Sorrel 動物醫院的客戶，也就是他帶自己的寵物去過那裡。" },
      { q: "What problem might Mr. Ribeiro have if he is hired?", o: ["He cannot start work until the end of May.", "He does not live in the Weller Park area.", "His class conflicts with the clinic's working hours.", "He is unable to work on Saturdays."], a: 2, type: "cross", e: "廣告說工作時間是週二到週六 9:00 到 5:30，而他每週二有 5:00 開始的晚間課程，兩者時間衝突，需整合兩篇才能得出。他只說課程到五月底，並沒有說五月底才能上班。" },
      { q: "What benefit is offered to employees of Sorrel Veterinary Hospital?", o: ["Reduced prices for animal care", "Free parking near the clinic", "Paid training courses", "Additional vacation days"], a: 0, type: "detail", e: "廣告說員工享有健康保險，以及自己寵物看診 30% 的折扣，也就是動物照護的優惠價格。其他福利都沒有提到。" },
    ],
  },

  // ===== Questions 186–190：Web page + rental agreement + e-mail =====
  {
    passages: [
      {
        kind: "webpage",
        title: "Haulright Truck & Van Rental — Rates",
        table: {
          headers: ["Vehicle", "Best for", "Daily rate", "Per kilometer"],
          rows: [
            ["Cargo Van", "Small apartment or office moves", "$49", "$0.30"],
            ["12-foot Truck", "1–2 bedroom homes", "$69", "$0.40"],
            ["16-foot Truck", "2–3 bedroom homes", "$89", "$0.45"],
            ["20-foot Truck", "Large homes or offices", "$109", "$0.50"],
          ],
        },
        body: "All rentals include basic insurance and 24-hour roadside assistance. Vehicles must be returned with a full fuel tank; otherwise, a refueling charge of $4.00 per liter will apply. Customers who book online at least seven days in advance receive 10 percent off the daily rate. Furniture pads and hand trucks may be added for $12 per day.",
      },
      {
        kind: "form",
        title: "Rental Agreement — Haulright Branch #08 (Redfern)",
        table: {
          headers: ["Field", "Details"],
          rows: [
            ["Agreement number", "08-55217"],
            ["Customer", "Karin Ostby"],
            ["Vehicle", "16-foot Truck"],
            ["Pick-up", "Saturday, April 4, 8:00 A.M."],
            ["Return", "Saturday, April 4, 7:00 P.M."],
            ["Booking method", "Online (March 30)"],
            ["Add-ons", "Hand truck (1)"],
            ["Odometer out / in", "48,210 km / 48,290 km"],
          ],
        },
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Karin Ostby <kostby@quickpost.net>"], ["To", "customercare@haulright.com"], ["Date", "April 6"], ["Subject", "Charges on agreement 08-55217"]],
        body: "To whom it may concern,\n\nI rented a truck from your Redfern branch on April 4 to move my family out of our two-bedroom apartment. The truck was clean and easy to drive, and the staff were very helpful when I picked it up.\n\nHowever, I have two questions about my final bill. First, I was charged the full daily rate even though I reserved the truck on your Web site. Second, I was charged $24 for fuel. I filled the tank at a gas station only two kilometers from your branch, so I am confident that it was full when I returned the truck. I still have the receipt from the gas station and can send you a photo of it.\n\nI would appreciate it if you could review these charges.\n\nKarin Ostby",
      },
    ],
    qs: [
      { q: "According to the Web page, what is included in every rental?", o: ["A full tank of fuel at no charge", "Help in case of a breakdown on the road", "Free use of a hand truck", "Unlimited kilometers"], a: 1, type: "detail", e: "網頁說所有租車都包含基本保險和 24 小時道路救援（roadside assistance），也就是車子在路上故障時的協助。手推車每天要加收 12 美元，里程也要另外計費。" },
      { q: "Why most likely was Ms. Ostby charged the full daily rate?", o: ["She added a hand truck to her rental.", "She returned the truck late.", "She picked up the truck on a weekend.", "She did not book far enough in advance."], a: 3, type: "cross", e: "網頁說線上預訂且至少提前七天才有九折。租車合約顯示她 3 月 30 日線上預訂、4 月 4 日取車，只提前五天，所以不符合折扣資格。她以為「線上訂」就有折扣，是本題的陷阱。" },
      { q: "How much should Ms. Ostby have been charged for the distance she drove?", o: ["$24.00", "$32.00", "$36.00", "$40.00"], a: 2, type: "cross", e: "合約的里程表從 48,210 到 48,290 公里，共開 80 公里；她租的是 16 呎貨車，每公里 $0.45，80 × 0.45 = $36。$24 是油費，$40 是用 20 呎貨車費率算的陷阱。" },
      { q: "What does Ms. Ostby say she can provide?", o: ["Proof that she refueled the truck", "A copy of her rental agreement", "Photographs of the truck's condition", "A letter from a branch employee"], a: 0, type: "detail", e: "她在 e-mail 中說還留著加油站的收據，可以拍照寄給對方，也就是她確實加滿油的證明。" },
      { q: "What is indicated about the vehicle Ms. Ostby rented?", o: ["It is the largest vehicle Haulright offers.", "It is recommended for a move of her size.", "It was rented for more than one day.", "It is available only at the Calloway branch."], a: 1, type: "cross", e: "她說是從兩房公寓搬家，合約顯示她租 16 呎貨車，而網頁上 16 呎貨車的建議用途是 2–3 bedroom homes，正好符合她的搬家規模。最大的是 20 呎貨車；她當天取車當天還。" },
    ],
  },

  // ===== Questions 191–195：article + application form + e-mail =====
  {
    passages: [
      {
        kind: "article",
        title: "Harbor Lights Food Festival Seeks Vendors",
        body: "PORT ELLIS (May 2) — Organizers of the Harbor Lights Food Festival are now accepting applications from food vendors for this year's event, which will take place along the waterfront from July 17 to 19. Last year's festival drew more than 60,000 visitors.\n\nVendors will be placed in one of three zones. The Pier Zone, nearest the main stage, costs $600 for all three days. The Market Zone, along Front Street, costs $450, and the Garden Zone, located beside the children's play area, costs $350. Vendors who need electricity must say so on their applications; power is available only in the Pier and Market Zones.\n\nApplications are due by June 6. Festival coordinator Wendell Achike said preference will be given to businesses based in Port Ellis. \"We want visitors to taste what our own city has to offer,\" he said.",
      },
      {
        kind: "form",
        title: "Vendor Application — Harbor Lights Food Festival",
        table: {
          headers: ["Field", "Response"],
          rows: [
            ["Business name", "Saffron Cart"],
            ["Owner", "Leila Mansouri"],
            ["Business address", "22 Quay Street, Port Ellis"],
            ["Food type", "Persian rice bowls and grilled flatbreads"],
            ["Zone preference", "1st choice: Garden Zone / 2nd choice: Market Zone"],
            ["Electricity needed", "Yes (one refrigerator and one electric grill)"],
            ["Date submitted", "May 28"],
          ],
        },
        body: "Applicants will be notified of their zone assignments by June 20.",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Wendell Achike <wachike@harborlightsfest.org>"], ["To", "Leila Mansouri <leila@saffroncart.com>"], ["Date", "June 18"], ["Subject", "Your vendor application"]],
        body: "Dear Ms. Mansouri,\n\nThank you for applying to be a vendor at this year's Harbor Lights Food Festival. I am pleased to tell you that Saffron Cart has been accepted.\n\nAfter reviewing your application, we were unable to give you your first choice because of the equipment you listed. Instead, you have been assigned space 14 in your second-choice zone. Please submit your payment by July 1 to confirm your space.\n\nAll vendors must attend a short safety briefing at the festival office on July 15 at 6:00 P.M. Food handling permits will be checked at that time, so please remember to bring yours.\n\nWe look forward to seeing you at the waterfront.\n\nWendell Achike\nFestival Coordinator",
      },
    ],
    qs: [
      { q: "What is the purpose of the article?", o: ["To report the results of last year's festival", "To announce a change in the festival's location", "To invite businesses to take part in an event", "To introduce a new festival coordinator"], a: 2, type: "main", e: "文章第一句說美食節正在接受餐飲攤商報名，接著說明區域、費用和截止日，目的是邀請業者參加活動。去年的參觀人數只是背景資訊。" },
      { q: "According to the article, why will some applicants be given preference?", o: ["They are located in Port Ellis.", "They applied before June 6.", "They have taken part in the festival before.", "They do not need electricity."], a: 0, type: "detail", e: "文章最後說會優先考慮 businesses based in Port Ellis（設在 Port Ellis 的業者）。June 6 是所有人的截止日，不是優先條件。" },
      { q: "Why was Ms. Mansouri not given her first choice?", o: ["She submitted her application too late.", "Her business is not based in Port Ellis.", "The zone was already full.", "The zone does not have a power supply."], a: 3, type: "cross", e: "表格顯示她第一志願是 Garden Zone，而且需要電力；文章說只有 Pier 和 Market 區有電；e-mail 也說是因為她列出的設備才無法安排第一志願。三篇整合可知原因是 Garden Zone 沒有電。" },
      { q: "How much will Ms. Mansouri most likely pay for her space?", o: ["$350", "$450", "$600", "$800"], a: 1, type: "cross", e: "e-mail 說她被分到第二志願的區域，表格上第二志願是 Market Zone，文章說 Market Zone 費用為 $450。$350 是第一志願 Garden Zone 的費用，是陷阱。" },
      { q: "What is Ms. Mansouri asked to bring on July 15?", o: ["Her payment", "Her electric grill", "A food handling permit", "A copy of her application"], a: 2, type: "detail", e: "e-mail 第三段說 7 月 15 日安全說明會時會檢查食品處理許可證，請她帶來。付款期限是 7 月 1 日，不是在說明會繳交。" },
    ],
  },

  // ===== Questions 196–200：memo + receipt + e-mail =====
  {
    passages: [
      {
        kind: "memo",
        title: "Memo",
        meta: [["To", "All Staff"], ["From", "Rhea Domingo, Finance Department"], ["Date", "January 8"], ["Subject", "Updated travel expense policy"]],
        body: "Effective February 1, the following limits will apply to all domestic business travel:\n\n- Hotel: up to $160 per night ($210 per night in Halvern City)\n- Meals: up to $65 per day; alcoholic beverages will not be reimbursed\n- Ground transportation: taxis and ride-share services may be used only when public transportation is unavailable or when traveling with heavy equipment\n\nAll claims must be submitted within 30 days of the end of the trip, together with itemized receipts. Any expense that exceeds these limits must be approved in advance by a department head. Claims submitted without itemized receipts will be returned for correction.",
      },
      {
        kind: "receipt",
        title: "Lantern House Hotel — Halvern City",
        table: {
          headers: ["Date", "Description", "Amount"],
          rows: [
            ["Feb. 10", "Room (Deluxe King)", "$225.00"],
            ["Feb. 10", "Restaurant — dinner", "$48.00"],
            ["Feb. 11", "Room (Deluxe King)", "$225.00"],
            ["Feb. 11", "Restaurant — dinner (includes wine, $14.00)", "$61.00"],
            ["", "Total", "$559.00"],
          ],
        },
        body: "Guest: Anders Kovacs | Check-in: February 10 | Check-out: February 12\nThank you for staying with us!",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Rhea Domingo <rdomingo@pentaravisions.com>"], ["To", "Anders Kovacs <akovacs@pentaravisions.com>"], ["Date", "March 4"], ["Subject", "Your expense claim"]],
        body: "Dear Mr. Kovacs,\n\nI have reviewed the expense claim you submitted on March 2 for your trip to Halvern City. Unfortunately, I am not able to process it in full.\n\nFirst, the nightly rate for your room is higher than our policy allows, and I could not find any record of approval from Ms. Patel, your department head. If she approved the rate before your trip, please ask her to forward that approval to me. Otherwise, I can reimburse you only up to the limit for each night.\n\nSecond, part of one of your restaurant charges cannot be reimbursed under our policy, so I have subtracted that amount.\n\nAll of the other items have been approved. Please let me know how you would like to proceed.\n\nRhea Domingo\nFinance Department",
      },
    ],
    qs: [
      { q: "What is the purpose of the memo?", o: ["To remind staff to book hotels early", "To introduce a new finance director", "To explain how to use public transportation", "To announce new rules for business travel expenses"], a: 3, type: "main", e: "備忘錄列出 2 月 1 日起住宿、餐費、交通的報銷上限與申請規定，目的是公布新的出差費用規定。大眾運輸只是規定中的一項。" },
      { q: "By how much did Mr. Kovacs's room rate exceed the policy limit each night?", o: ["$15", "$25", "$50", "$65"], a: 0, type: "cross", e: "收據顯示房價每晚 $225，飯店在 Halvern City，備忘錄規定該市上限為每晚 $210，所以每晚超出 $15。用一般上限 $160 去算會得到 $65，是陷阱。" },
      { q: "How much did Ms. Domingo most likely subtract from one of the restaurant charges?", o: ["$13.00", "$14.00", "$48.00", "$61.00"], a: 1, type: "cross", e: "備忘錄規定酒精飲料不予報銷，收據上 2 月 11 日的晚餐包含 $14 的葡萄酒，所以扣掉的是 $14。e-mail 說只扣「其中一部分」，所以不是整筆 $61。" },
      { q: "What is indicated about Mr. Kovacs's expense claim?", o: ["It did not include itemized receipts.", "It was approved in advance by Ms. Patel.", "It was submitted within the required time period.", "It included charges for a taxi."], a: 2, type: "cross", e: "收據顯示他 2 月 12 日退房，e-mail 說他 3 月 2 日提出申請，只相隔 18 天，在備忘錄規定的 30 天內。Ms. Domingo 說找不到 Ms. Patel 的核准紀錄，所以不能說已事先核准。" },
      { q: "What does Ms. Domingo ask Mr. Kovacs to do?", o: ["Resubmit his receipts", "Book a less expensive hotel on his next trip", "Pay back an advance he received", "Have his manager send proof of an approval"], a: 3, type: "detail", e: "e-mail 說如果 Ms. Patel 出差前有核准房價，請她把核准紀錄轉寄過來，也就是請他的主管提供核准證明。" },
    ],
  },
]);
