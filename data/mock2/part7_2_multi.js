// 模擬考 2 — Part 7 多篇閱讀（Questions 176–200）
// 雙篇 2 組（176–180、181–185）＋ 三篇 3 組（186–190、191–195、196–200）
// 單篇閱讀由另一個檔案負責，於本檔之前載入。
window.MOCK2 = window.MOCK2 || {};
window.MOCK2.part7 = (window.MOCK2.part7 || []).concat([
  // ===== Questions 176–180：webpage + e-mail =====
  {
    passages: [
      {
        kind: "webpage",
        title: "Copperleaf Language Services — Rates",
        table: {
          headers: ["Service", "Standard (5 business days)", "Express (2 business days)"],
          rows: [
            ["Document translation (per word)", "$0.12", "$0.18"],
            ["Proofreading of an existing translation (per word)", "$0.05", "$0.08"],
            ["Certified translation of official documents (per page)", "$35", "$50"],
          ],
        },
        body: "Our team of more than 60 professional translators works in 25 languages. All quotes are free. Translation orders of more than 10,000 words receive a 10 percent discount. Certified translations include a signed statement of accuracy and are accepted by most government offices. To request a quote, upload your files at www.copperleafls.com/quote.",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Rosa Delgado <rdelgado@vantermedical.com>"], ["To", "quotes@copperleafls.com"], ["Date", "April 7"], ["Subject", "Translation request"]],
        body: "Hello,\n\nVanter Medical Devices is preparing to launch a blood pressure monitor in Brazil and Portugal. We need the user manual, which is about 12,000 words long, translated from English into Portuguese. Our product launch is scheduled for May 20, and our printer needs the final text by May 6, so we will not need express service.\n\nWe also have a Portuguese version of our product warranty that was translated by a former employee. Could one of your translators check it for errors? It is about 900 words long.\n\nFinally, I would like to know whether your translators have experience with medical terminology. Please send the quote to this address.\n\nRosa Delgado\nProduct Manager, Vanter Medical Devices",
      },
    ],
    qs: [
      { q: "What is indicated about Copperleaf Language Services?", o: ["It specializes in medical documents.", "It does not charge for price estimates.", "It has offices in 25 countries.", "It requires payment before work begins."], a: 1, type: "detail", e: "網頁寫 All quotes are free「所有報價免費」，也就是估價不收費。25 是翻譯的語言數，不是辦公室所在的國家數。" },
      { q: "Why does Vanter Medical Devices need a translation?", o: ["It is going to sell a product in new markets.", "It has received a complaint from a customer.", "It is opening a factory in Brazil.", "It must submit documents to a government office."], a: 0, type: "detail", e: "Ms. Delgado 說公司準備在巴西和葡萄牙推出血壓計，所以需要葡文說明書，也就是要在新市場銷售產品。信中沒有提到建廠或送交政府文件。" },
      { q: "What does Ms. Delgado ask about?", o: ["The cost of printing the user manual", "The number of languages Copperleaf offers", "The deadline for submitting files", "The translators' knowledge of a specialized field"], a: 3, type: "detail", e: "信件最後一段問翻譯人員是否熟悉醫療術語（medical terminology），也就是特定專業領域的知識。印刷是她們自己的印刷廠負責，不是向 Copperleaf 詢問的內容。" },
      { q: "What is suggested about the translation of the user manual?", o: ["It will be completed in two business days.", "It will require a certified translator.", "It will qualify for a reduced rate.", "It will be printed by Copperleaf."], a: 2, type: "cross", e: "需整合兩篇：說明書約 12,000 字，而網頁說超過 10,000 字的翻譯訂單打九折，所以可以享有折扣。她明確說不需要快件，所以不是兩個工作天完成。" },
      { q: "How much per word will Copperleaf most likely charge to review the warranty?", o: ["$0.05", "$0.08", "$0.12", "$0.18"], a: 0, type: "cross", e: "保固書已經翻好，只需要檢查錯誤，屬於 Proofreading；她又說不需要快件服務，所以適用標準價每字 $0.05。$0.12 是重新翻譯的價格，$0.08 是快件校對價。" },
    ],
  },

  // ===== Questions 181–185：online review + e-mail =====
  {
    passages: [
      {
        kind: "review",
        title: "Guest Reviews — The Alderwick Hotel, Brennan Bay",
        body: "Reviewed by Martin Achebe — September 22\nRating: 3 out of 5\n\nI stayed at the Alderwick for four nights while attending a conference at the nearby Brennan Bay Exhibition Hall. The location is excellent, just a five-minute walk from the hall, and my room on the eighth floor was spacious and quiet. The staff at the front desk were friendly and helpful.\n\nHowever, I was disappointed by two things. First, the hotel's Web site stated that breakfast was included in the room rate, but I was charged $18 each morning. Second, the business center, which I had planned to use to print handouts for my presentation, was closed for renovation during my entire stay. Nobody mentioned this when I made my reservation, and I had to take a taxi to a copy shop across town.\n\nI would consider staying here again, but only if these issues are addressed.",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Celia Moreau <cmoreau@alderwickhotel.com>"], ["To", "Martin Achebe <m.achebe@quillonpartners.com>"], ["Date", "September 24"], ["Subject", "Your recent stay"]],
        body: "Dear Mr. Achebe,\n\nThank you for taking the time to review your stay at the Alderwick Hotel. I am glad that you enjoyed your room and our location.\n\nI looked into the breakfast charges you mentioned. You booked your stay through a travel Web site using our \"Room Only\" rate, which does not include breakfast. I understand, however, that this was not made clear, so I have arranged for the charges for all four mornings to be refunded to your credit card.\n\nI also apologize for the inconvenience caused by the closure of our business center. The renovation was completed last week, and the center now has two new printers and a private meeting room. I should mention that our front desk staff are always able to print documents for guests, even when the business center is unavailable. I have reminded our reservations team to inform guests of any such closures at the time of booking.\n\nAs a token of our appreciation, I would like to offer you a complimentary upgrade to a suite on your next visit.\n\nSincerely,\n\nCelia Moreau\nGuest Relations Manager",
      },
    ],
    qs: [
      { q: "Why did Mr. Achebe visit Brennan Bay?", o: ["To look for a new office", "To meet with hotel managers", "To take part in a conference", "To attend a hotel opening"], a: 2, type: "detail", e: "評論第一句說他住了四晚，是為了參加附近展覽館的研討會（attending a conference），而且他還要在會中做簡報。" },
      { q: "What does Mr. Achebe praise about the hotel?", o: ["Its breakfast menu", "Its business center", "Its low room rates", "Its convenient location"], a: 3, type: "detail", e: "他說地點極佳，走路五分鐘就到展覽館（The location is excellent）。早餐和商務中心正是他不滿意的兩點。" },
      { q: "How much money will most likely be returned to Mr. Achebe?", o: ["$18", "$36", "$54", "$72"], a: 3, type: "cross", e: "需整合兩篇：評論說每天早上被收 $18，Ms. Moreau 說會退還「四個早上」的費用，所以是 18 × 4 = $72。只寫 $18 是只看單日金額的陷阱。" },
      { q: "What does Ms. Moreau suggest about Mr. Achebe's trip to the copy shop?", o: ["It was approved by the hotel in advance.", "It may not have been necessary.", "It will be paid for by the hotel.", "It took longer than he expected."], a: 1, type: "cross", e: "評論說他因為商務中心關閉只好搭車到城另一頭的影印店；Ms. Moreau 回信說即使商務中心不能用，櫃台人員隨時都能幫房客列印，暗示他其實不必跑那一趟。信中沒有說要負擔計程車或影印費。" },
      { q: "What does Ms. Moreau offer Mr. Achebe?", o: ["A better room on a future stay", "Free use of a meeting room", "A discount on his next conference", "A free breakfast for the rest of the year"], a: 0, type: "detail", e: "信件最後說下次入住時免費升等套房（a complimentary upgrade to a suite），也就是未來住宿時更好的房間。meeting room 是商務中心的新設施，不是給他的補償。" },
    ],
  },

  // ===== Questions 186–190：advertisement + order form + e-mail =====
  {
    passages: [
      {
        kind: "ad",
        title: "Halvard Office Furniture — Spring Clearance Sale, April 1–15",
        body: "Make room for our new collection! Save on desks, chairs, and storage at our Riverside warehouse showroom.\n\n- Executive desks: 25% off\n- Ergonomic chairs: 30% off\n- Filing cabinets and bookcases: 15% off\n\nFree delivery within Clayton County on orders over $1,000. Assembly is available for an additional $40 per item. Sale prices apply only to items in stock; special orders are excluded.\n\nBusiness customers who open a Halvard trade account during the sale will receive an extra 5 percent off their first order.",
      },
      {
        kind: "form",
        title: "Halvard Office Furniture — Order Form",
        table: {
          headers: ["Item", "Model", "Qty", "Unit Price (sale)", "Total"],
          rows: [
            ["Ergonomic chair", "Arden Mesh", "8", "$154.00", "$1,232.00"],
            ["Executive desk", "Corbin Oak", "2", "$487.50", "$975.00"],
            ["Assembly", "-", "2", "$40.00", "$80.00"],
          ],
        },
        body: "Customer: Pellham Architects (trade account opened April 3)\nOrder number: H-2291\nOrder date: April 3\nSubtotal: $2,287.00\nTrade account discount (5%): -$114.35\nDelivery: Free (Clayton County)\nTotal: $2,172.65\nRequested delivery date: April 10",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Owen Pellham <opellham@pellhamarchitects.com>"], ["To", "orders@halvardfurniture.com"], ["Date", "April 11"], ["Subject", "Order H-2291"]],
        body: "Hello,\n\nOur furniture was delivered yesterday as scheduled, and your team did an excellent job of putting the desks together. However, when we unpacked the chairs, we found that one of them has a broken armrest. Could you send a replacement as soon as possible? A new architect is joining us on April 14, and she will need it.\n\nAlso, now that our new staff members have their desks, we realize that we need more storage space. I would like to order three of the bookcases displayed near the entrance of your showroom. Could you tell me whether they are still available at the sale price?\n\nOwen Pellham\nOffice Manager, Pellham Architects",
      },
    ],
    qs: [
      { q: "According to the advertisement, what is true about the sale?", o: ["It is available only to business customers.", "It includes free assembly of all items.", "It lasts for one month.", "It does not apply to special orders."], a: 3, type: "detail", e: "廣告寫 special orders are excluded「特別訂製品不適用」。組裝每件要加 $40，不是免費；特賣期間是 4 月 1 日到 15 日，只有半個月。" },
      { q: "What does the order form suggest about the assembly service?", o: ["It was requested for the desks only.", "It was provided at no charge.", "It will be done by Pellham Architects' staff.", "It was added after the order was placed."], a: 0, type: "infer", e: "訂單上組裝的數量是 2，和書桌的數量 2 相同，而椅子有 8 張，所以只有書桌要組裝。第三篇信中也說送貨團隊把書桌組好，印證了這一點。" },
      { q: "What is indicated about Pellham Architects?", o: ["It has ordered from Halvard several times.", "It is located outside Clayton County.", "It qualified for an additional discount.", "It requested a later delivery date."], a: 2, type: "cross", e: "需整合廣告與訂單：廣告說特賣期間開設企業帳戶，首筆訂單再打 95 折；訂單顯示它 4 月 3 日開了帳戶並扣了 5% 折扣。運費免收表示它在 Clayton County 境內，所以「位在郡外」是錯的；既然是首筆訂單，也不是常客。" },
      { q: "What problem does Mr. Pellham mention?", o: ["An item was damaged.", "A delivery arrived late.", "Some desks were not assembled.", "He was charged the wrong price."], a: 0, type: "detail", e: "信中說有一張椅子的扶手斷了，請對方寄送替換品。他說家具準時送達（as scheduled），書桌也組裝得很好，所以其他選項都與內容相反。" },
      { q: "What will Mr. Pellham most likely be told about the bookcases?", o: ["They must be specially ordered.", "They are available at 15 percent off.", "They cannot be delivered to his office.", "They are sold only with filing cabinets."], a: 1, type: "cross", e: "需整合廣告與信件：他 4 月 11 日寫信，特賣到 4 月 15 日，而且書櫃是展示間的現貨，所以仍可享書櫃的 85 折（15% off）。" },
    ],
  },

  // ===== Questions 191–195：schedule + e-mail + notice =====
  {
    passages: [
      {
        kind: "schedule",
        title: "Northern Retail Forum — Day 2 Program, Thursday, October 16",
        table: {
          headers: ["Time", "Session", "Speaker", "Room"],
          rows: [
            ["9:00–10:00", "Keynote: The Future of In-Store Shopping", "Adaeze Nwosu, Halcyon Department Stores", "Main Hall"],
            ["10:15–11:15", "Pricing Strategies for Small Retailers", "Kenji Moriyama, Moriyama Consulting", "Room 2A"],
            ["10:15–11:15", "Building Customer Loyalty Online", "Lucia Ferraz, Bramble & Co.", "Room 2B"],
            ["11:30–12:30", "Managing Seasonal Staff", "Peter Hollis, Crestline Outdoor", "Room 2A"],
            ["12:30–1:30", "Lunch", "-", "Terrace Café"],
            ["1:30–2:30", "Panel: Retail Technology on a Budget", "Various speakers", "Main Hall"],
          ],
        },
        body: "Lakeshore Convention Center. Sessions in Rooms 2A and 2B are limited to 80 participants each. Seats are available on a first-come, first-served basis.",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Kenji Moriyama <kenji@moriyamaconsulting.com>"], ["To", "Joan Albright <jalbright@northernretailforum.org>"], ["Date", "October 10"], ["Subject", "Thursday session"]],
        body: "Dear Ms. Albright,\n\nI'm afraid I have a conflict on the morning of October 16. One of my long-standing clients has asked me to attend a board meeting in Halifax that morning, and it cannot be rescheduled. My return flight lands at 12:15 P.M., so I could still present in the afternoon.\n\nWould it be possible to move my session to a later time? I understand this may cause difficulties, so if it would be easier, I could record my presentation in advance instead. I would also be happy to join the afternoon panel discussion, as I have spent much of the past year advising clients on low-cost software.\n\nBest regards,\n\nKenji Moriyama",
      },
      {
        kind: "notice",
        title: "Program Changes — Northern Retail Forum, Day 2",
        body: "Please note the following changes to Thursday's program:\n\n- Kenji Moriyama's session, Pricing Strategies for Small Retailers, will now take place from 3:00 to 4:00 P.M. in Room 2A.\n- The session originally scheduled for 11:30 A.M. in Room 2A will begin at 10:15 A.M. instead, so that attendees can enjoy a longer lunch break.\n- The afternoon panel discussion will now include Mr. Moriyama.\n\nBecause Room 2A will be in use until 4:00 P.M., the closing reception will begin at 4:30 P.M. instead of 4:00 P.M. We apologize for any inconvenience.",
      },
    ],
    qs: [
      { q: "What is indicated about the sessions in Rooms 2A and 2B?", o: ["They require advance registration.", "They have a limited number of seats.", "They are recorded for later viewing.", "They are open only to speakers."], a: 1, type: "detail", e: "議程表下方註明 2A、2B 每場限 80 人，先到先入座，也就是座位有限。錄影是 Mr. Moriyama 自己提議的替代方案，並非所有場次都錄影。" },
      { q: "Why is Mr. Moriyama unable to speak at his scheduled time?", o: ["His flight to the forum was canceled.", "He was asked to give the keynote speech.", "He must attend a meeting for a client.", "He has not finished preparing his presentation."], a: 2, type: "detail", e: "信中說一位長期客戶請他當天早上到 Halifax 出席董事會，無法改期。班機是他「回程」的時間，並沒有被取消。" },
      { q: "What is suggested about the panel discussion?", o: ["It will cover a topic Mr. Moriyama is familiar with.", "It will take place in Room 2A.", "It was moved to the morning.", "It will be led by Ms. Albright."], a: 0, type: "cross", e: "需整合議程表與信件：座談主題是 Retail Technology on a Budget「低預算的零售科技」，而 Mr. Moriyama 說他過去一年都在指導客戶使用低成本軟體，正是他熟悉的領域，所以他才主動表示願意參加。" },
      { q: "Who will most likely speak in Room 2A at 10:15 A.M.?", o: ["Adaeze Nwosu", "Kenji Moriyama", "Lucia Ferraz", "Peter Hollis"], a: 3, type: "cross", e: "需整合議程表與公告：公告說原本 11:30 在 2A 的場次改到 10:15，查議程表可知那是 Peter Hollis 的 Managing Seasonal Staff。Kenji Moriyama 是原本 10:15 的講者，已經改到下午 3 點。" },
      { q: "According to the notice, what will happen as a result of the changes?", o: ["The lunch break will be canceled.", "A keynote speech will be shortened.", "An event will start later than planned.", "A session will be moved to a larger room."], a: 2, type: "detail", e: "公告最後說 2A 要用到下午 4 點，所以閉幕酒會從 4 點延到 4 點半開始。午餐時間其實是變長而不是取消。" },
    ],
  },

  // ===== Questions 196–200：article + application form + e-mail =====
  {
    passages: [
      {
        kind: "article",
        title: "Fairview Launches Storefront Improvement Grants",
        body: "FAIRVIEW (February 3) — The Fairview City Council has approved a program that will help small businesses improve the appearance of their storefronts. Business owners in the city's Old Market district can apply for grants of up to $8,000 to cover half the cost of exterior projects such as new signs, awnings, windows, and outdoor lighting. Interior renovations are not eligible.\n\nTo qualify, a business must have operated in Old Market for at least two years and must have fewer than 25 employees. Applicants must also submit two written estimates from licensed contractors along with their application.\n\n\"Many of these buildings are more than a hundred years old,\" said council member Ruth Okonjo, who proposed the program. \"Small improvements can make the whole district more attractive to visitors.\"\n\nApplications will be accepted from March 1 to April 15. Grant recipients will be announced in May, and all projects must be completed by the end of the year.",
      },
      {
        kind: "form",
        title: "Old Market Storefront Improvement Grant — Application",
        table: {
          headers: ["Field", "Response"],
          rows: [
            ["Business name", "Tamsin's Book Nook"],
            ["Owner", "Tamsin Greaves"],
            ["Address", "27 Cooper Lane, Old Market"],
            ["Year business opened", "2019"],
            ["Number of employees", "6"],
            ["Project description", "Replace front windows; install a new hanging sign and exterior lights"],
            ["Estimated total cost", "$14,600"],
            ["Grant amount requested", "$7,300"],
            ["Contractor estimates attached", "Halden Glass & Glazing; Brightway Electric"],
          ],
        },
        body: "Date submitted: March 4",
      },
      {
        kind: "email",
        title: "E-mail",
        meta: [["From", "Desmond Achterberg <dachterberg@fairviewcity.gov>"], ["To", "Tamsin Greaves <tamsin@booknookfairview.com>"], ["Date", "May 12"], ["Subject", "Your grant application"]],
        body: "Dear Ms. Greaves,\n\nI am pleased to inform you that your application for a Storefront Improvement Grant has been approved for the full amount you requested. The review committee was particularly impressed by your plan to restore the original style of the building's front windows.\n\nBefore we can release the funds, please send us copies of your signed contracts with both of the companies listed in your application. Payment will be made directly to you once we have received them.\n\nPlease also be aware that a city inspector will visit your shop after the work is finished to confirm that it has been carried out as described. Finally, we would like to feature your shop in a brochure promoting the Old Market district. If you are interested, simply reply to this e-mail.\n\nSincerely,\n\nDesmond Achterberg\nFairview Economic Development Office",
      },
    ],
    qs: [
      { q: "Which project would NOT be eligible for a grant?", o: ["Installing outdoor lights", "Replacing a shop's front windows", "Putting up a new awning", "Repainting the walls inside a shop"], a: 3, type: "not", e: "文章說補助用於招牌、遮雨棚、窗戶、戶外照明等外觀工程，並明確寫 Interior renovations are not eligible，所以重漆店內牆壁不符資格。" },
      { q: "What is suggested about Tamsin's Book Nook?", o: ["It has more than 25 employees.", "It meets the program's requirement for time in business.", "It is located outside the Old Market district.", "It applied after the deadline."], a: 1, type: "cross", e: "需整合文章與申請表：資格是在 Old Market 營業至少兩年，書店 2019 年開業，早已超過兩年。員工 6 人、地址在 Old Market、3 月 4 日送件也都在規定內，所以其他選項都錯。" },
      { q: "How did Ms. Greaves calculate the grant amount she requested?", o: ["She asked for the maximum amount allowed.", "She divided the project cost in half.", "She used the lowest of several estimates.", "She included the cost of interior work."], a: 1, type: "cross", e: "需整合文章與申請表：補助最多負擔工程費用的一半，她的工程總額 $14,600，申請 $7,300，剛好是一半。上限是 $8,000，她並沒有申請上限金額。" },
      { q: "What is Ms. Greaves asked to send to Mr. Achterberg?", o: ["Photographs of her shop", "A revised project description", "Copies of agreements with two contractors", "Two additional cost estimates"], a: 2, type: "cross", e: "信中請她寄來和申請表上兩家公司簽好的合約影本；對照申請表，這兩家就是 Halden Glass & Glazing 和 Brightway Electric 兩家承包商。估價單在申請時已經附上了。" },
      { q: "According to the e-mail, what will happen after the work is completed?", o: ["Ms. Greaves will receive a second grant.", "The shop will be featured in a newspaper.", "A city official will examine the work.", "Ms. Okonjo will visit the shop."], a: 2, type: "detail", e: "信中說工程完成後，市府檢查員會到店裡確認工程是否依申請內容施作。宣傳是放在推廣手冊（brochure），而且要她願意才會刊登，不是報紙。" },
    ],
  },
]);
