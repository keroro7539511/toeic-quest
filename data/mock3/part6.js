// 模擬考 3 — Part 6 短文填空（Questions 131–146）
// 4 篇 × 4 題；每篇 1 題句子插入（type: "insert"）
window.MOCK3 = window.MOCK3 || {};
window.MOCK3.part6 = [
  // Questions 131–134
  {
    passage: {
      kind: "email",
      title: "E-mail",
      meta: [["To", "All Patients"], ["From", "Anita Kovac <akovac@corvellclinic.com>"], ["Date", "January 20"], ["Subject", "New check-in system"]],
      body: "Dear Patients,\n\nWe are pleased to announce that, starting Monday, February 3, Corvell Family Clinic {{1}} a new mobile check-in system. Instead of showing your patient card at the reception desk, you will simply scan a code on your phone at the entrance.\n\nTo use the system, download the Corvell app and log in with your patient number. {{2}} Patients who do not have a smartphone may continue to use their plastic cards.\n\nWe believe this change will reduce waiting times during our busiest hours. {{3}}, it will allow us to see how many people are in the building at any given time, so you can check {{4}} the waiting room is crowded before you arrive.\n\nIf you have any questions, please speak with a staff member at the reception desk.\n\nSincerely,\nAnita Kovac\nPatient Services Manager",
    },
    qs: [
      { o: ["will introduce", "introduced", "has introduced", "was introducing"], a: 0, type: "grammar", e: "e-mail 日期是 1 月 20 日，新系統 2 月 3 日才開始使用，是未來的事，要用 will introduce。introduced、has introduced 都表示已經發生。" },
      { o: ["The reception desk is open from 7:30 A.M. to 6:00 P.M.", "Appointment fees will increase slightly next year.", "Your personal code will then appear on the home screen.", "Please return your plastic card to the reception desk by the end of the month."], a: 2, type: "insert", e: "前一句說下載 app 並登入，接著說「個人代碼就會出現在首頁」，正好說明掃描用的代碼從哪裡來。要求歸還實體卡與下一句「沒有智慧型手機的病患可以繼續用實體卡」矛盾。" },
      { o: ["However", "In addition", "Otherwise", "For example"], a: 1, type: "connector", e: "前句說新系統能減少等待時間，這句再補充另一個好處（可以看到診所內的人數），是「附加」關係，用 In addition。However 表轉折，For example 表舉例，都不合。" },
      { o: ["unless", "although", "despite", "whether"], a: 3, type: "grammar", e: "check whether ...「確認是否……」，whether 引導名詞子句當 check 的受詞。unless、although 是副詞子句連接詞，despite 是介系詞，都不能當受詞。" },
    ],
  },
  // Questions 135–138
  {
    passage: {
      kind: "memo",
      title: "Memo",
      meta: [["To", "All Staff, Dalmore Building"], ["From", "Gareth Nunes, Facilities"], ["Date", "April 7"], ["Subject", "New waste-sorting stations"]],
      body: "Next week, new waste-sorting stations will be installed in every kitchen area of the Dalmore Building. Each station has three {{1}} bins: green for food waste, blue for recyclable plastic and paper, and gray for all other trash.\n\nFood waste collected in the green bins will be sent to a local farm, where it {{2}} into compost for growing vegetables. {{3}} Last year, our offices sent nearly twelve tons of waste to the landfill.\n\nPosters explaining which items belong in each bin will be placed above the stations. Please take a moment to read them {{4}} throwing anything away. Thank you for your cooperation.",
    },
    qs: [
      { o: ["separately", "separate", "separation", "separates"], a: 1, type: "grammar", e: "數詞 three 和名詞 bins 之間要用形容詞 separate「分開的、各自的」。separately 是副詞，不能修飾名詞。" },
      { o: ["turns", "has turned", "turning", "will be turned"], a: 3, type: "grammar", e: "主詞 it 指的是廚餘，廚餘是「被」做成堆肥，而且是之後才會發生的事，要用未來被動 will be turned。turns、has turned 都是主動。" },
      { o: ["We hope this program will greatly reduce the amount of garbage our company produces.", "The farm is located about thirty minutes north of the city.", "The kitchen areas will be closed during the installation.", "Staff are reminded to wash their own dishes after lunch."], a: 0, type: "insert", e: "空格後說「去年辦公室送了將近 12 噸垃圾到掩埋場」，是用數據支持「希望大幅減少公司垃圾量」這句話。農場位置雖然和前句有關，但接不上後面的垃圾量數據。" },
      { o: ["during", "until", "before", "unless"], a: 2, type: "grammar", e: "丟東西「之前」先看海報，用 before + V-ing。during 後面要接名詞，不接動名詞片語；until「直到」語意不合。" },
    ],
  },
  // Questions 139–142
  {
    passage: {
      kind: "article",
      title: "Merriton Textiles Installs Solar Roof",
      body: "HALDEN (August 12) — Merriton Textiles has completed the installation of more than 3,000 solar panels on the roof of its main factory. The panels are expected to supply about 40 percent of the electricity the factory {{1}} each year.\n\nThe project cost approximately $2.1 million, but company president Lucia Brandt says the investment will pay for itself within eight years. \"Energy is one of our largest {{2}},\" Ms. Brandt explained. \"Producing our own power will make our costs much more predictable.\"\n\n{{3}} Several of Merriton's major customers, including two international clothing brands, have asked their suppliers to reduce carbon emissions. The solar roof should help Merriton meet these {{4}}.\n\nThe company plans to add panels to the roof of its warehouse next year.",
    },
    qs: [
      { o: ["consuming", "consumption", "consumes", "to consume"], a: 2, type: "grammar", e: "the electricity (that) the factory ______ 是省略關係代名詞的子句，factory 是主詞，需要一個動詞，用 consumes。consumption 是名詞，consuming、to consume 都不能當子句的動詞。" },
      { o: ["expenses", "profits", "employees", "products"], a: 0, type: "vocab", e: "下一句說自己發電能讓「成本」更好預測，可見能源是公司最大的「開銷」之一，用 expenses。profits「利潤」與成本概念相反。" },
      { o: ["Ms. Brandt joined Merriton Textiles as a designer in 2015.", "The factory will close for two weeks during the holidays.", "Solar panels work best in regions with long summers.", "The decision was also influenced by the company's clients."], a: 3, type: "insert", e: "空格後說幾家大客戶要求供應商減少碳排放，正好說明「這個決定也受到客戶影響」。其他句子都與後文的客戶要求沒有關聯。" },
      { o: ["invitations", "requirements", "complaints", "budgets"], a: 1, type: "vocab", e: "客戶「要求」供應商減碳，太陽能屋頂幫公司達成這些「要求」，meet requirements 是常見搭配。complaints 不能用 meet；budgets 與前文無關。" },
    ],
  },
  // Questions 143–146
  {
    passage: {
      kind: "letter",
      title: "Letter",
      body: "December 9\n\nMs. Valeria Duchesne\n31 Rue Marchand\nQuebec City, QC G1K 3R2\n\nDear Ms. Duchesne,\n\nThank you for submitting your photographs of the coastal villages of northern Portugal. Our editorial team was very impressed with your work, and we would like to feature six of the images in the spring issue of Wayfarer Quarterly, which {{1}} on March 1.\n\nAs is our standard practice, we will pay $150 for each photograph used. {{2}}, we will credit you by name beneath each image and in the list of contributors at the front of the issue.\n\nBefore we can proceed, we need you to sign the enclosed agreement, which gives us permission to print the images in both the magazine and its online edition. {{3}} Please return the signed agreement no later than January 15 so that our design team has {{4}} time to prepare the layout.\n\nWe look forward to seeing your work in print.\n\nSincerely,\n\nRohan Mistry\nPhoto Editor, Wayfarer Quarterly",
    },
    qs: [
      { o: ["was published", "has been published", "publishes", "will be published"], a: 3, type: "grammar", e: "信件日期是 12 月 9 日，春季號 3 月 1 日才出刊，是未來的事，而且雜誌是「被」出版，要用未來被動 will be published。只看句子會以為過去式也可以，必須對照信件日期。" },
      { o: ["Instead", "In addition", "Otherwise", "Nevertheless"], a: 1, type: "connector", e: "前句說每張照片付 150 美元，這句再補充「也會在照片下方標註姓名」，是額外的回報，用 In addition。Instead 表示「取代」，會變成不付錢只署名，語意不對。" },
      { o: ["Our spring issue will focus on mountain hiking trails.", "We are unable to use any of the photographs at this time.", "You will, however, keep full ownership of the photographs.", "The payment was sent to your bank account last week."], a: 2, type: "insert", e: "前一句說合約授權雜誌刊登照片，接著用 however 說明「但照片的所有權仍屬於你」，語意銜接最自然。「無法使用照片」與前文要刊登六張矛盾；「上週已付款」與「簽約後才能進行」矛盾。" },
      { o: ["sufficient", "numerous", "frequent", "eventual"], a: 0, type: "vocab", e: "have sufficient time「有足夠的時間」準備版面。numerous「眾多的」要接可數複數名詞，time 在此不可數；frequent「頻繁的」、eventual「最終的」都不合語意。" },
    ],
  },
];
