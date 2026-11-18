// Part 4 追加練習（p4:39–53）：15 段獨白
window.PART4.push(...[
  {
    kind: "broadcast", speaker: "W",
    text: "This is Andrea Wells with your midday business report. Corvel Electronics, the maker of home security cameras, released its annual results this morning, and the numbers were better than many analysts expected. Total revenue rose eleven percent compared with last year, mainly thanks to strong demand for its new outdoor camera. Interestingly, the company's chief executive said Corvel will now focus on its weakest market. The region that currently accounts for the smallest share of sales will receive a new regional office and a dedicated marketing team next spring. The company believes this market could double in size within three years. Investors seemed to like the news, as Corvel's share price climbed six percent by noon. After a short break, I'll be speaking with a local bakery owner about how rising flour prices are affecting small businesses. Stay with us.",
    graphic: {"kind":"bars","title":"Corvel Electronics: Share of Sales by Region","unit":"%","items":[["North America",41],["Europe",26],["Asia",19],["South America",14]]},
    qs: [
      { q: "What is the report mainly about?", o: ["A product recall","A merger between two firms","A company's yearly results","A change in leadership"], a: 2, e: "released its annual results，報導的主軸是公司的年度業績。雖然提到執行長，但沒有換人，所以不是領導層異動。" },
      { q: "Look at the graphic. Which region will receive a new office?", o: ["South America","Asia","Europe","North America"], a: 0, e: "新辦公室會設在 the smallest share of sales 的地區，看圖表占比最小的是南美洲（14%）。北美洲是占比最大的，剛好相反。" },
      { q: "What will listeners most likely hear next?", o: ["A weather forecast","A traffic update","An advertisement for cameras","An interview with a business owner"], a: 3, e: "最後說休息後會 speaking with a local bakery owner，也就是訪問一位商家老闆。攝影機是前面報導的產品，不是接下來的內容。" }
    ]
  },
  {
    kind: "introduction", speaker: "M",
    text: "Good morning, everyone. Before we go over this week's deadlines, I'd like you to meet the newest member of our design team, Hana Kowalski. Hana spent the last six years designing exhibition spaces for the Lindell Museum of Science, so she knows a lot about guiding people through information in a clear way. Here at Pinewood Packaging, she'll be leading the redesign of our cereal box line, which, as you know, our biggest client wants finished by the end of the year. Hana will spend the next few days meeting with each of you to learn about your current projects. Now, I know many of you have been waiting for an extra pair of hands. But Hana is still setting up her computer and accounts. So for this week, please keep sending your requests to me. Hana, would you like to say a few words?",
    qs: [
      { q: "Where did Ms. Kowalski work before?", o: ["At a packaging factory","At a museum","At a cereal company","At a design school"], a: 1, e: "她過去六年在 Lindell Museum of Science 設計展覽空間，所以之前在博物館工作。Pinewood Packaging 是她的新公司，穀片是客戶的產品。" },
      { q: "Why does the speaker say, \"But Hana is still setting up her computer and accounts\"?", o: ["To apologize for a technical problem","To ask for help from the technology department","To explain why a meeting was delayed","To indicate that Ms. Kowalski is not ready to take on work yet"], a: 3, e: "前一句說大家都在等人手，接著說她還在設定電腦、這週需求請交給他，意思是她還沒辦法接工作。並不是在抱怨技術問題。" },
      { q: "What will most likely happen next?", o: ["Ms. Kowalski will speak to the group.","A client contract will be reviewed.","The listeners will tour the factory.","A deadline will be extended."], a: 0, e: "最後一句 Hana, would you like to say a few words? 請她跟大家說幾句話，所以接下來是她向大家發言。" }
    ]
  },
  {
    kind: "instructions", speaker: "W",
    text: "Hello, and thank you for taking part in today's tasting session here at Brookvale Dairy. My name is Leila, and I'll be guiding you through the next hour. In front of you are five small cups of yogurt, each marked with a number. These are flavors we are considering for our new summer line. Please taste them in order, starting with number one, and drink a little water between each sample. After each cup, rate the flavor on the tablet next to you. You'll be asked about sweetness, texture, and whether you would buy the product. Some of you may feel unsure about how to describe a taste. Honestly, there are no wrong answers. When you've finished all five, please leave the tablet on the table and stop by the front desk. We'll give you a gift card for your time.",
    qs: [
      { q: "Who most likely are the listeners?", o: ["Participants in a product test","Dairy farm workers","Cooking class students","Supermarket employees"], a: 0, e: "taking part in today's tasting session，要試吃優格並評分，是產品試吃測試的參與者。Dairy 是公司名稱的一部分，聽眾不是酪農場員工。" },
      { q: "Why does the speaker say, \"there are no wrong answers\"?", o: ["To explain that the tablets are easy to use","To correct an earlier statement","To encourage listeners to give honest opinions","To announce that every participant will win a prize"], a: 2, e: "前一句說有人可能不知道怎麼形容味道，她說答案沒有對錯，是要大家放心照自己的感覺回答。最後的禮物卡是感謝，跟這句話無關。" },
      { q: "What should listeners do when they finish?", o: ["Wash the cups","Go to the front desk","Fill out a paper form","Choose a flavor to take home"], a: 1, e: "全部試完後 stop by the front desk，到前台領禮物卡。評分是在平板上做，不是紙本表格。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Good morning, and welcome to the Bayline Ferry Terminal. Because of strong winds near the harbor entrance this morning, one of our scheduled sailings has been canceled. The ferry with the shortest crossing time uses a smaller boat, and it cannot sail safely in these conditions. Passengers holding tickets for that sailing may exchange them for the next available departure at no charge, or receive a full refund at ticket window three. All other ferries are expected to leave on time, but the crossings may be a little rough, so we recommend that you stay seated while the boat is moving. Also, drivers taking their cars on board must be in the vehicle loading lane at least thirty minutes before departure. Thank you for your patience, and we'll provide further updates as conditions change.",
    graphic: {"kind":"table","title":"Bayline Ferry Departures","headers":["Destination","Departure","Crossing Time"],"rows":[["Kelby Island","9:00 A.M.","50 minutes"],["Port Alder","9:20 A.M.","20 minutes"],["Granton","9:45 A.M.","35 minutes"],["Marrow Point","10:10 A.M.","75 minutes"]]},
    qs: [
      { q: "What has caused a change in service?", o: ["A mechanical problem","A staff shortage","Repairs at the dock","Weather conditions"], a: 3, e: "Because of strong winds，強風導致航班取消，也就是天候因素。他提到小船無法安全航行，但不是機械故障。" },
      { q: "Look at the graphic. Which destination's ferry has been canceled?", o: ["Kelby Island","Port Alder","Granton","Marrow Point"], a: 1, e: "取消的是 the ferry with the shortest crossing time，表格中航程最短的是 20 分鐘的 Port Alder。只聽到「最短」卻沒看表就答不出來。" },
      { q: "What are drivers reminded to do?", o: ["Buy their tickets online","Stay inside their cars during the trip","Line up well before departure","Park in a different lot"], a: 2, e: "drivers ... must be in the vehicle loading lane at least thirty minutes before departure，要提早排進上船車道。stay seated 是對所有乘客的建議，不是針對駕駛的提醒。" }
    ]
  },
  {
    kind: "talk", speaker: "M",
    text: "Welcome, everyone, to this afternoon's session on taking better photos of your property listings. I've been a real estate photographer for over ten years, and I can tell you that buyers decide within seconds whether to click on a listing. The good news is that you don't need expensive equipment. A recent smartphone is more than enough. The most important factor is light. Whenever possible, schedule your photo sessions in the late morning, open every curtain, and turn on all the lamps in the room. Also, remove personal items such as family pictures and refrigerator magnets, because buyers want to imagine themselves living there. In a moment, I'll hand out a checklist you can bring to every shoot. Then we'll move into the model apartment next door so that you can practice what we've discussed.",
    qs: [
      { q: "Who most likely are the listeners?", o: ["Professional photographers","Furniture designers","Real estate agents","Interior painters"], a: 2, e: "課程教大家拍 your property listings，也就是自己刊登的房屋物件，聽眾是房仲。專業攝影師是說話者本人的身分，不是聽眾。" },
      { q: "According to the speaker, what matters most when taking photos?", o: ["The type of camera","The size of the room","The editing software","The amount of light"], a: 3, e: "The most important factor is light，最重要的是光線。他特別說不需要昂貴器材，所以相機種類不是重點。" },
      { q: "What will the listeners do after receiving a checklist?", o: ["Practice in another room","Watch a video","Take a short break","Upload some photos"], a: 0, e: "發完清單後 move into the model apartment next door 去練習，也就是到另一個空間實作。" }
    ]
  },
  {
    kind: "voicemail", speaker: "W",
    text: "Hello, Mr. Okonkwo, this is Priya from Stitch and Thread Tailoring, calling about the suit you dropped off on Monday. We've finished shortening the trousers, and they look great. However, when we started on the jacket, we found that the sleeves can only be shortened by about two centimeters, not the four you asked for, because of the way the buttons are sewn on. We could move the buttons, but that would take two more days. I know your sister's wedding is this Saturday. So my suggestion is to come in tomorrow for a quick fitting, and you can see whether two centimeters is enough. We're open until seven, and the fitting only takes about ten minutes. Please call me back at 555-0136 to let me know what time works for you.",
    qs: [
      { q: "What type of business does the speaker work for?", o: ["A clothing store","A tailor shop","A wedding planning service","A dry cleaner"], a: 1, e: "她來自 Stitch and Thread Tailoring，負責把褲子、袖子改短，是裁縫店。婚禮是客人要參加的活動，不是她的業務。" },
      { q: "Why does the speaker say, \"I know your sister's wedding is this Saturday\"?", o: ["To point out that there may not be enough time for extra work","To congratulate the listener on a family event","To recommend buying a new suit","To ask how many guests will attend"], a: 0, e: "前一句說移扣子要多兩天，接著提到星期六的婚禮，暗示時間可能來不及，所以建議先試穿看兩公分夠不夠。不是在道賀。" },
      { q: "What does the speaker ask the listener to do?", o: ["Pick up his trousers today","Choose some new buttons","Call to arrange a time","Send his measurements"], a: 2, e: "Please call me back ... to let me know what time works for you，請他回電約時間。扣子只是可能的修改方式，沒有請他挑選。" }
    ]
  },
  {
    kind: "talk", speaker: "W",
    text: "Good morning, and welcome to the second day of our workshop for freelance designers and writers. Yesterday we talked about setting your rates. Today, I want to focus on time. Take a look at the chart on the screen. It comes from a survey of more than two thousand freelancers. As you can see, client work takes up less than half of a typical week. Many people assume that e-mail is the biggest problem, and it is a large category. But this morning I'd like to talk about the activity that takes the second smallest share of time. In my experience, it's also the one that most freelancers find stressful, because without it, there's no future income. I'll share three simple methods that helped me cut that time in half. Before we start, please find a partner and spend five minutes describing how you currently do it.",
    graphic: {"kind":"bars","title":"How Freelancers Spend Their Working Hours","unit":"%","items":[["Client projects",48],["E-mail and messages",22],["Finding new clients",17],["Invoicing and records",13]]},
    qs: [
      { q: "Who most likely are the listeners?", o: ["Survey researchers","Marketing managers","Office administrators","Freelance workers"], a: 3, e: "workshop for freelance designers and writers，聽眾是自由接案的設計師和寫手。調查只是圖表的資料來源，聽眾不是研究人員。" },
      { q: "Look at the graphic. Which activity will the speaker discuss?", o: ["Client projects","E-mail and messages","Finding new clients","Invoicing and records"], a: 2, e: "她要談 the second smallest share of time，圖上第二少的是 Finding new clients（17%），而且「少了它就沒有未來收入」也符合找新客戶。電子郵件她特別說不是今天的重點。" },
      { q: "What does the speaker ask the listeners to do first?", o: ["Read a handout","Talk with a partner","Complete a survey","Calculate their rates"], a: 1, e: "Before we start, please find a partner and spend five minutes describing...，先找夥伴聊五分鐘。收費是昨天的主題。" }
    ]
  },
  {
    kind: "introduction", speaker: "W",
    text: "Good morning, and welcome to the opening session of the Regional Food Retail Conference. I'm very pleased to introduce our keynote speaker, Dr. Samuel Oduya. Dr. Oduya began his career as a produce buyer for a small grocery chain. After noticing how much fresh food was thrown away each week, he went back to school to study supply chain management. Today, he runs a research center that helps stores predict demand more accurately. His most recent book, Nothing Left Over, has been translated into twelve languages. This morning, he'll explain how supermarkets can cut food waste while still keeping their shelves full. Dr. Oduya will take questions at the end, so please write them on the cards placed on your tables, and our staff will collect them. Please join me in welcoming Dr. Oduya.",
    qs: [
      { q: "What will Dr. Oduya mainly talk about?", o: ["Reducing waste in food stores","Designing grocery store layouts","Hiring produce buyers","Translating business books"], a: 0, e: "he'll explain how supermarkets can cut food waste，主題是超市如何減少食物浪費。書被翻譯成十二種語言只是介紹他的成就。" },
      { q: "What did Dr. Oduya do after working as a buyer?", o: ["He opened his own grocery store.","He returned to school.","He moved to another country.","He became a food critic."], a: 1, e: "he went back to school to study supply chain management，他回學校進修。went back to school 換成 returned to school。" },
      { q: "How should listeners submit their questions?", o: ["By raising their hands","By sending a text message","By visiting a Web site","By writing them on cards"], a: 3, e: "please write them on the cards placed on your tables，把問題寫在桌上的卡片，由工作人員收走。" }
    ]
  },
  {
    kind: "instructions", speaker: "M",
    text: "Good morning, volunteers, and thank you for helping out at the Greenfield Charity Fun Run. Over eight hundred runners have registered this year, which is a new record. I'm Tom, and I'll be your team leader today. Your group will be running the water station in front of the city library. The first runners should reach you about fifteen minutes after the race starts, so please have at least two hundred cups filled and lined up by then. When you hand out water, hold the cup out at arm's length and let runners take it from you. Don't chase them. Also, the empty cups that runners drop must be picked up quickly, because they can be slippery. A van will bring extra supplies around ten o'clock. Right now, let's head over to the supply tent and pick up your volunteer vests.",
    graphic: {"kind":"table","title":"Fun Run Water Stations","headers":["Station","Distance","Location"],"rows":[["Station 1","Kilometer 3","City Library"],["Station 2","Kilometer 6","Harbor Bridge"],["Station 3","Kilometer 9","Riverside Park"],["Station 4","Kilometer 12","Town Hall"]]},
    qs: [
      { q: "What does the speaker say about this year's event?", o: ["It has a new route.","It was moved to a different date.","It has a record number of participants.","It is being sponsored by the library."], a: 2, e: "Over eight hundred runners have registered this year, which is a new record，報名人數創新高。圖書館只是補水站的位置，不是贊助者。" },
      { q: "Look at the graphic. Where will the listeners work?", o: ["Station 1","Station 2","Station 3","Station 4"], a: 0, e: "他們負責 in front of the city library 的補水站，對照表格，City Library 是 Station 1。" },
      { q: "What will the listeners do next?", o: ["Fill cups with water","Pick up some clothing","Unload a van","Greet the runners"], a: 1, e: "最後說 let's head over to the supply tent and pick up your volunteer vests，去領志工背心，背心換成 clothing。裝水是之後的工作。" }
    ]
  },
  {
    kind: "broadcast", speaker: "M",
    text: "You're listening to Kitchen Table on KQRT Radio, and I'm your host, Ben Alvarado. Every Saturday, we answer your cooking questions live, and today we have a very special guest in the studio. Chef Marisol Ortega, owner of the popular restaurant Casa Ortega, is here to talk about cooking with seasonal vegetables. Chef Ortega has just published her first cookbook, and she's agreed to give a signed copy to three of today's callers. To ask her a question, call us at 555-0172. I'll warn you, though. The last time we gave away a cookbook, our lines were full within two minutes. Before we take the first call, Chef Ortega will tell us about a simple winter soup she serves at her restaurant every December. Chef, welcome to the show.",
    qs: [
      { q: "Who is Marisol Ortega?", o: ["A food critic","A cookbook publisher","A radio producer","A restaurant owner"], a: 3, e: "owner of the popular restaurant Casa Ortega，她是餐廳老闆。她出版了食譜，但不是出版社。" },
      { q: "What does the speaker imply when he says, \"The last time we gave away a cookbook, our lines were full within two minutes\"?", o: ["The station needs more phone lines.","A previous guest was very popular.","Listeners should call quickly.","The giveaway will last only two minutes."], a: 2, e: "他先說 I'll warn you，再說上次兩分鐘就滿線，暗示想拿到簽名書的聽眾要趕快打。並不是說活動只進行兩分鐘。" },
      { q: "What will Chef Ortega most likely do next?", o: ["Describe a recipe","Answer a caller's question","Sign some books","Announce the prize winners"], a: 0, e: "Before we take the first call, Chef Ortega will tell us about a simple winter soup，接電話前先介紹一道湯，也就是說明食譜。回答聽眾問題是之後的事。" }
    ]
  },
  {
    kind: "instructions", speaker: "W",
    text: "Good morning, everyone, and thanks for coming to this quick housekeeping meeting before your shifts begin. Starting today, we're using a new room cleaning checklist, which you'll find in the front pocket of your supply cart. The biggest change is the order of tasks. From now on, please remove the sheets and start with the beds first, then clean the bathroom, and dust and vacuum last. Guests have told us that rooms sometimes smell too strongly of cleaning products, so please use only the new unscented spray in the green bottles. Also, if you find any item a guest left behind, don't leave it in the room. Put it in a labeled bag and bring it to the front desk right away. Our hotel manager, Mr. Ferraro, will be checking a few rooms on each floor this week to see how the new system is working, so please follow the checklist carefully.",
    qs: [
      { q: "What is the main purpose of the talk?", o: ["To welcome new employees","To explain a policy on guest complaints","To introduce a new cleaning procedure","To assign rooms to staff members"], a: 2, e: "整段在說明新的客房清潔檢查表和工作順序，目的是介紹新的清潔流程。雖然提到房客反映氣味，但重點不是客訴處理政策。" },
      { q: "What should the listeners do with items guests have left behind?", o: ["Leave them in the room","Take them to the front desk","Keep them in the supply cart","Report them to the manager"], a: 1, e: "Put it in a labeled bag and bring it to the front desk，裝袋後送到櫃台。她特別說 don't leave it in the room。" },
      { q: "What will Mr. Ferraro do this week?", o: ["Inspect some rooms","Order new supplies","Interview some guests","Train new staff"], a: 0, e: "Mr. Ferraro will be checking a few rooms on each floor，會抽查客房，checking 換成 inspect。" }
    ]
  },
  {
    kind: "talk", speaker: "M",
    text: "Thanks for joining this month's security training. Today's topic is fake e-mails, which are designed to trick you into sharing passwords or opening harmful files. Last quarter, our IT team blocked over three thousand of these messages, but some still reached employees' inboxes. Here are three warning signs. First, the sender's address looks almost correct but has a small spelling difference. Second, the message creates pressure, for example by saying your account will be closed today. Third, it asks you to click a link to confirm personal details. If you notice any of these signs, don't reply and don't delete the message. Instead, use the report button at the top of your e-mail program, and our team will investigate. Next week, we'll send a practice e-mail to everyone to see how well you remember today's tips.",
    qs: [
      { q: "What is the talk mainly about?", o: ["Updating computer software","Recognizing suspicious e-mails","Creating strong passwords","Organizing an inbox"], a: 1, e: "主題是 fake e-mails，並教大家三個警訊，也就是如何辨識可疑郵件。提到密碼是因為假信會騙密碼，但不是在教設定密碼。" },
      { q: "What should listeners do if they receive a suspicious message?", o: ["Delete it immediately","Reply to the sender","Call the help desk","Use a reporting function"], a: 3, e: "use the report button，用回報按鈕通報。他特別說 don't delete，所以立刻刪除是陷阱。" },
      { q: "What will happen next week?", o: ["A new e-mail program will be installed.","Employees will change their passwords.","A test message will be sent.","Another training session will be held."], a: 2, e: "we'll send a practice e-mail to everyone，下週會寄演練郵件來測試大家，practice e-mail 換成 test message。" }
    ]
  },
  {
    kind: "introduction", speaker: "W",
    text: "Good evening. On behalf of the Westbrook Chamber of Commerce, I'm delighted to present this year's Green Business Award to Hollis Street Bakery. Two years ago, owner Teresa Lund decided she was tired of seeing unsold bread go into the trash at the end of each day. So she started a partnership with three local shelters, which now receive her extra bread every evening. She also replaced all of the bakery's plastic packaging with paper bags made from recycled material. Customers who bring their own containers receive a ten percent discount, and more than half of her regular customers now do. These changes have cut the bakery's waste by nearly seventy percent. Teresa, please come up to the stage to receive your award. And afterward, everyone is invited to enjoy the pastries she kindly brought for tonight's reception.",
    qs: [
      { q: "What is the purpose of the speech?", o: ["To present an award","To celebrate a store opening","To announce a new partnership","To introduce a guest speaker"], a: 0, e: "I'm delighted to present this year's Green Business Award，目的是頒獎。和收容所的合作是兩年前就開始的事蹟，不是今天要宣布的。" },
      { q: "According to the speaker, what do many of the bakery's customers do?", o: ["Volunteer at local shelters","Return paper bags to the store","Bring their own containers","Order bread online"], a: 2, e: "more than half of her regular customers now do，指的是自備容器。收容所是接受麵包的單位，顧客並沒有去當志工。" },
      { q: "What are listeners invited to do after the award is presented?", o: ["Make a donation","Take a tour of the bakery","Fill out a survey","Enjoy some food"], a: 3, e: "everyone is invited to enjoy the pastries，邀請大家享用糕點，pastries 換成 food。" }
    ]
  },
  {
    kind: "broadcast", speaker: "W",
    text: "Welcome back to Money Matters, the program that helps you spend smarter. Today's question comes from a listener named Gavin. He says his family's phone bill has become too expensive and asks which mobile plan he should choose. Gavin, you sent us the price list from your provider, Talkwell Mobile, so let's look at it. You mentioned that you mostly use your phone for messages and maps and that you use about twelve gigabytes of data a month. Many people pay for unlimited data they never use. My advice is to pick the cheapest plan that still gives you a little more than you need. That way, you won't run out of data before the month ends. And remember, many providers offer a discount if you set up automatic payments, so ask about that too. After the news, we'll talk about saving for retirement.",
    graphic: {"kind":"table","title":"Talkwell Mobile Monthly Plans","headers":["Plan","Data","Price"],"rows":[["Basic","5 GB","$20"],["Standard","15 GB","$35"],["Plus","30 GB","$45"],["Unlimited","No limit","$60"]]},
    qs: [
      { q: "What is the purpose of the program?", o: ["To review new smartphones","To report on the phone industry","To give financial advice","To advertise a mobile provider"], a: 2, e: "the program that helps you spend smarter，節目幫聽眾聰明花錢，是理財建議。提到電信業者只是例子，不是在打廣告。" },
      { q: "Look at the graphic. Which plan does the speaker recommend for Gavin?", o: ["Basic","Standard","Plus","Unlimited"], a: 1, e: "Gavin 每月用約 12 GB，建議選「比需要多一點又最便宜」的方案；5 GB 不夠，15 GB 的 Standard 最符合。吃到飽是她說很多人浪費錢的選擇。" },
      { q: "What does the speaker suggest asking about?", o: ["A discount for automatic payments","A family plan","A free phone upgrade","A lower international rate"], a: 0, e: "providers offer a discount if you set up automatic payments, so ask about that，建議詢問自動扣款折扣。雖然提到家裡的電話費，但沒有提家庭方案。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Good evening, shoppers, and thank you for choosing Fairway Market. We'd like to remind you that the store will close two hours early tonight, at eight o'clock, so that our staff can complete our yearly inventory count. We will reopen at our usual time tomorrow morning. While you're here, stop by aisle nine, where Chef Robin is preparing free samples of our new ready-to-eat salad bowls. They're made fresh in our kitchen every morning. Also, if you haven't downloaded the Fairway Market app yet, now is a great time. App users can collect points on every purchase, and this week only, you'll earn double points on all fresh fruit. Our staff at the checkout counters will be happy to help you set it up. Thank you for shopping with us.",
    qs: [
      { q: "Why will the store close early tonight?", o: ["A holiday is approaching.","Some repairs are needed.","A new section is being installed.","Employees will count products."], a: 3, e: "so that our staff can complete our yearly inventory count，員工要做年度盤點，也就是清點商品。" },
      { q: "What is available in aisle nine?", o: ["Free food samples","Discounted fruit","A cooking class","Kitchen equipment"], a: 0, e: "aisle nine 有主廚準備的 free samples of our new ready-to-eat salad bowls，是免費試吃。主廚在場但不是烹飪課。" },
      { q: "How can listeners earn extra points this week?", o: ["By shopping before eight o'clock","By buying fresh fruit as app users","By ordering salad bowls in advance","By completing a survey at checkout"], a: 1, e: "App users ... this week only, you'll earn double points on all fresh fruit，用 app 買新鮮水果能得雙倍點數。八點是打烊時間，跟點數無關。" }
    ]
  }
]);
