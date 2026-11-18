// Part 4 追加練習：15 段獨白（p4:24–38）
window.PART4.push(...[
  {
    kind: "voicemail", speaker: "W",
    text: "Hi, Mr. Patel. This is Hannah calling from Ridgeway Auto Service about your car. We've finished the oil change and the brake inspection you asked for, and the brakes are in good condition. However, our mechanic noticed that your front tires are quite worn, and I wouldn't recommend driving on them much longer, especially with winter coming. I've sent you a price list with four options. Since you mentioned that you drive a lot for work, I'd suggest the option with the longest warranty. It's not the cheapest, but it should last you several years. We have that brand in stock, so we could install the tires today if you let us know before four o'clock. Otherwise, your car will be ready for pickup at five. Please call me back at 555-0172.",
    graphic: {"kind":"table","title":"Ridgeway Auto Service: Tire Options","headers":["Brand","Price per Tire","Warranty"],"rows":[["Roadmax","$85","2 years"],["Trekline","$110","5 years"],["Duragrip","$95","3 years"],["Velto","$120","4 years"]]},
    qs: [
      { q: "Why is the speaker calling?", o: ["To confirm an appointment time","To ask about an overdue payment","To report on the condition of a vehicle","To apologize for a repair delay"], a: 2, e: "她說明換機油和煞車檢查的結果，並指出前輪胎磨損，是在報告車子的狀況。沒有提到付款或延誤。" },
      { q: "Look at the graphic. Which brand does the speaker recommend?", o: ["Trekline","Roadmax","Velto","Duragrip"], a: 0, e: "她建議 the option with the longest warranty，看表格保固最長的是 5 年的 Trekline。Velto 最貴但保固只有 4 年，Roadmax 是最便宜的，都是陷阱。" },
      { q: "According to the speaker, what will happen if the listener calls before four o'clock?", o: ["He will receive a discount.","His car will be washed for free.","His brakes will be replaced.","New tires will be put on today."], a: 3, e: "we could install the tires today if you let us know before four o'clock，四點前回覆今天就能換新輪胎。煞車狀況良好，不需要更換。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Attention, passengers. This is an announcement for travelers on the nine thirty express train to Lindale. Because of a signal problem near the station, the platform shown on the departure board for your train cannot be used this morning. Your train will instead depart from the same platform as the ten o'clock service to Carver Hill. Please allow extra time, since you will need to use the underground walkway to reach it. The departure time has not changed. We'd also like to remind passengers that the station café is closed for renovation this week. However, free coffee and tea are being offered in the waiting room on the main level until eleven o'clock. We apologize for the inconvenience, and thank you for traveling with Eastline Rail.",
    graphic: {"kind":"table","title":"Morning Departures","headers":["Time","Destination","Platform"],"rows":[["9:15 A.M.","Westbrook","Platform 2"],["9:30 A.M.","Lindale","Platform 5"],["9:45 A.M.","Port Avery","Platform 3"],["10:00 A.M.","Carver Hill","Platform 1"]]},
    qs: [
      { q: "What has caused a change?", o: ["A train has been canceled.","There is a technical problem with a signal.","A ticket machine is out of order.","An underground walkway is closed."], a: 1, e: "Because of a signal problem near the station，是號誌出問題造成月台更動。地下通道是要走的路線，並沒有關閉。" },
      { q: "Look at the graphic. Which platform will the train to Lindale depart from?", o: ["Platform 2","Platform 5","Platform 3","Platform 1"], a: 3, e: "列車改從和十點開往 Carver Hill 相同的月台出發，看表格是 Platform 1。Platform 5 是看板上原本的月台，是陷阱。" },
      { q: "What is being offered in the waiting room?", o: ["Free beverages","Discounted tickets","Seat upgrades","Travel guides"], a: 0, e: "free coffee and tea are being offered in the waiting room，咖啡和茶就是 beverages（飲料）。咖啡廳在整修，但候車室有免費飲料。" }
    ]
  },
  {
    kind: "meeting", speaker: "W",
    text: "Okay, let's move on to the next item on the agenda. I'd like to share how our new line of reusable water bottles performed in its first three months. As you can see on this chart, sales grew in all four regions, which is great news. The region with the strongest growth was the one where we partnered with local fitness centers to display the bottles. Because that approach worked so well, management has decided to try it in the region with the weakest results starting next month. Now, that means our team will need to contact gyms there and arrange the displays. I know everyone is already busy with the summer catalog. Well, I've asked two people from the marketing department to help us for a few weeks. I'll introduce them on Thursday.",
    graphic: {"kind":"bars","title":"Water Bottle Sales Growth by Region","unit":"%","items":[["North",18],["South",32],["East",9],["West",21]]},
    qs: [
      { q: "What product is the speaker discussing?", o: ["Exercise machines","Sports clothing","A seasonal catalog","Water bottles"], a: 3, e: "她談的是 our new line of reusable water bottles 的銷售表現。健身中心是合作陳列的地點，夏季型錄是團隊在忙的另一件事。" },
      { q: "Look at the graphic. In which region will the new approach be tried next month?", o: ["North","East","South","West"], a: 1, e: "要在 the region with the weakest results 試行，看長條圖成長最少的是 9% 的 East。South 成長最多，是原本已經採用這個做法的區域。" },
      { q: "Why does the speaker say, \"I know everyone is already busy with the summer catalog\"?", o: ["To explain why a deadline has been moved","To ask for volunteers to work overtime","To show she understands a concern about workload","To praise the team for its recent work"], a: 2, e: "她接著說已經請行銷部兩個人來幫忙，可見她是在表示理解大家工作量的負擔。並沒有提到延後截止日或加班。" }
    ]
  },
  {
    kind: "advertisement", speaker: "M",
    text: "Moving to a new home or office doesn't have to be stressful. At Swift Haul Movers, our trained crews will pack, load, and deliver your belongings safely and on schedule. Unlike many moving companies, we give you a fixed price before moving day, so there are no surprise charges at the end. We also offer free storage for up to thirty days, which is perfect if your new place isn't ready yet. And if you're moving a business, we can work evenings and weekends so your staff never miss a day of work. Don't just take our word for it. Swift Haul was voted the best moving company in the region by readers of City Living Magazine two years in a row. Call us this month to schedule a free estimate, and receive a set of moving boxes at no cost.",
    qs: [
      { q: "What is being advertised?", o: ["A moving service","A storage facility","A delivery app","A magazine subscription"], a: 0, e: "Swift Haul Movers 幫客戶打包、裝車、運送，是搬家服務。免費倉儲只是附加服務，雜誌是投票來源。" },
      { q: "According to the speaker, how is the company different from many others?", o: ["It operates internationally.","It hires only full-time staff.","It provides a set price in advance.","It offers same-day service."], a: 2, e: "Unlike many moving companies, we give you a fixed price before moving day，事先給固定價格，換句話說就是 a set price in advance。" },
      { q: "What will customers receive if they call this month?", o: ["A discount on storage","Free packing supplies","A magazine subscription","An extra worker on moving day"], a: 1, e: "本月來電可免費獲得 a set of moving boxes，紙箱就是打包用品。免費倉儲是平常就有的服務，不是本月優惠。" }
    ]
  },
  {
    kind: "news", speaker: "W",
    text: "In local business news, the Fairmont Farmers Market will move to a new location this spring. For the past twelve years, the market has been held every Saturday in the parking lot behind City Hall. But starting in April, it will take place in Lakeside Park, which offers much more space and shade. According to market director Elena Ruiz, the number of vendors has nearly doubled since last year, and many shoppers have complained about crowded walkways. The new site will have room for up to eighty stalls, as well as a covered area for live music. Ms. Ruiz also noted that free parking will be available at the nearby community college on market days. The opening day at Lakeside Park is scheduled for April fifth. Coming up next, we'll have your weekend weather forecast.",
    qs: [
      { q: "What is the news report mainly about?", o: ["A new parking regulation","The opening of a college","A market's change of location","A live music festival"], a: 2, e: "開頭就說 the Fairmont Farmers Market will move to a new location，主旨是市集搬遷。停車和現場音樂都只是細節。" },
      { q: "Why is the change being made?", o: ["The rent at City Hall has increased.","The parking lot will be repaved.","Shoppers asked for longer hours.","More space is needed for sellers."], a: 3, e: "攤商數量幾乎翻倍、走道擁擠，新地點空間更大，所以是需要更多空間給攤商（vendors = sellers）。" },
      { q: "What will listeners most likely hear next?", o: ["A weather report","An interview with a vendor","A traffic update","A musical performance"], a: 0, e: "最後一句 Coming up next, we'll have your weekend weather forecast，接下來是天氣預報。" }
    ]
  },
  {
    kind: "tour", speaker: "M",
    text: "Welcome to Belmont Chocolate Works, and thanks for joining today's tour. I'm Lucas, and I've worked here for almost ten years. We'll begin in the roasting room, where the cocoa beans are heated to bring out their flavor. After that, we'll walk along the glass hallway above the production floor so you can watch the bars being wrapped. Please keep in mind that photography is not allowed in that area, since some of our machines use a special design. At the end of the tour, you'll each get to make your own chocolate bar and choose the toppings. Now, the roasting room is quite warm. And there's a coat rack right by the door. Oh, and one more thing. The gift shop closes at four today instead of six, so plan accordingly.",
    qs: [
      { q: "Who most likely is the speaker?", o: ["A machine engineer","A tour guide","A gift shop clerk","A pastry chef"], a: 1, e: "他歡迎大家參加 today's tour 並說明參觀路線，是導覽員。雖然提到機器和禮品店，但他不是工程師或店員。" },
      { q: "What are listeners told about the glass hallway?", o: ["Taking pictures is not permitted there.","It is closed for repairs today.","It is the warmest part of the factory.","Visitors can buy snacks there."], a: 0, e: "photography is not allowed in that area，玻璃走廊禁止攝影，也就是不能拍照。最熱的是烘焙室，不是走廊。" },
      { q: "Why does the speaker say, \"the roasting room is quite warm\"?", o: ["To explain how the beans are heated","To warn that the tour will be short","To recommend drinking some water","To suggest that listeners take off their coats"], a: 3, e: "他接著說門邊就有衣帽架，暗示大家先把外套脫下掛好再進烘焙室。並不是在說明烘豆的方式。" }
    ]
  },
  {
    kind: "voicemail", speaker: "M",
    text: "Hello, Ms. Nakamura. This is Daniel Ortiz from the human resources department at Crestview Engineering. We were scheduled to hold your second interview this Thursday at ten A.M. Unfortunately, the department manager, who would like to meet you personally, has to travel to a client site that day. I'm very sorry for the short notice. We'd like to move the interview to Friday at the same time, if that works for you. Also, on Fridays our building's main entrance is closed in the morning for floor cleaning. Please use the side entrance on Grant Street, and the security guard will give you a visitor pass. Could you call me back by tomorrow afternoon to let me know whether Friday is convenient? My direct number is 555-0193. Thank you, and again, my apologies.",
    qs: [
      { q: "Why is the speaker calling?", o: ["To offer the listener a position","To request a list of references","To describe a client project","To reschedule an appointment"], a: 3, e: "他打來是要把第二次面試從星期四改到星期五，也就是改約時間。還沒到錄取的階段。" },
      { q: "Why does the original plan need to be changed?", o: ["A meeting room is being cleaned.","The listener asked for a different day.","A manager will be away on business.","The company is moving its office."], a: 2, e: "部門經理 has to travel to a client site that day，要出差不在。清潔是星期五正門關閉的原因，不是改期的原因。" },
      { q: "What does the speaker tell the listener to do on Friday?", o: ["Bring a photo ID","Enter through a different door","Park on Grant Street","Wait in the main lobby"], a: 1, e: "正門關閉，請她 use the side entrance on Grant Street，也就是走另一個門。Grant Street 是側門所在的街，不是要她停車的地方。" }
    ]
  },
  {
    kind: "announcement", speaker: "W",
    text: "Good evening, Summit Fitness members. We have a few updates about the facility. First, the indoor swimming pool will be closed from Monday, June tenth, through Sunday, June sixteenth, while we replace the heating system. During that week, members can use the pool at our Riverside branch free of charge. Just show your membership card at the front desk. Second, we are adding three new early morning yoga classes starting at six A.M. These classes fill up fast, so be sure to reserve a spot through our mobile app. Finally, the locker rooms on the second floor have been completely remodeled. The new lockers now have digital locks, so you no longer need to bring your own. Thank you, and have a great workout.",
    qs: [
      { q: "Who is the announcement intended for?", o: ["Members of a gym","Swimming instructors","Hotel guests","Construction workers"], a: 0, e: "開頭 Good evening, Summit Fitness members，對象是健身中心的會員。泳池整修是內容，不代表聽眾是施工人員。" },
      { q: "What does the speaker say about the yoga classes?", o: ["They will be taught online.","They should be booked in advance.","They are free for new members.","They will be held at another branch."], a: 1, e: "These classes fill up fast, so be sure to reserve a spot，要事先預約。用手機程式預約，不代表課程在線上進行。" },
      { q: "What has changed about the lockers?", o: ["They are larger than before.","They have been moved to the first floor.","Members no longer need their own locks.","They must be reserved through an app."], a: 2, e: "置物櫃有了 digital locks，so you no longer need to bring your own，不用自備鎖頭。更衣室在二樓，用程式預約的是瑜伽課。" }
    ]
  },
  {
    kind: "meeting", speaker: "M",
    text: "Thanks for coming in early, everyone. Before we open for lunch, I want to go over the new reservation system we're starting next week. Instead of taking bookings in the paper notebook, we'll be using a tablet at the host stand. Customers will also be able to reserve tables online, and the tablet will update automatically. I know some of you were worried it would be complicated. Honestly, I learned it in about ten minutes. Rosa from the software company will be here on Monday at two o'clock, between lunch and dinner, to give a short training session. Everyone who works at the host stand needs to attend. For now, please keep using the notebook as usual. Oh, and we're running low on menus, so if you see any damaged ones, set them aside and let me know.",
    qs: [
      { q: "Where most likely does the speaker work?", o: ["At a software company","At a bookstore","At a restaurant","At a hotel front desk"], a: 2, e: "提到 open for lunch、host stand、reserve tables、menus，是餐廳。Rosa 才是軟體公司的人。" },
      { q: "Why does the speaker say, \"Honestly, I learned it in about ten minutes\"?", o: ["To complain about a training session","To explain why he arrived early","To suggest that a tablet needs to be repaired","To reassure staff that a system is easy to use"], a: 3, e: "前一句說有人擔心系統很複雜，他說自己十分鐘就學會，是要讓員工安心，表示系統不難。" },
      { q: "What will happen on Monday afternoon?", o: ["New menus will be delivered.","A training session will be held.","The restaurant will close early.","Online reservations will begin."], a: 1, e: "Rosa 星期一兩點會來 give a short training session。網路訂位是下週開始，並沒有說是星期一下午。" }
    ]
  },
  {
    kind: "advertisement", speaker: "W",
    text: "Planning a lunch meeting or an office party? Let Greenfork Catering take care of the food. We use fresh ingredients from local farms, and every order is prepared on the morning of your event. Our lunch packages start at just twelve dollars per person, and we can easily adjust any menu for guests with special dietary needs. This month, we're introducing our newest package, a hot pasta buffet, served with garlic bread and a seasonal salad. To celebrate, we're taking two dollars per person off that package for all orders placed before the end of the month. Delivery and setup are free for groups of twenty or more. To see photos of our dishes and place an order, visit our Web site today.",
    graphic: {"kind":"list","title":"Greenfork Catering Lunch Packages","items":["Package A: Sandwich Platter, $12 per person","Package B: Salad Bar, $14 per person","Package C: Hot Pasta Buffet, $16 per person","Package D: Grilled Chicken Box, $18 per person"]},
    qs: [
      { q: "What does the speaker say about the business?", o: ["It has several restaurant locations.","It prepares food on the day of each event.","It specializes in desserts.","It opened earlier this month."], a: 1, e: "every order is prepared on the morning of your event，餐點在活動當天製作。This month 是推出新方案，不是開業。" },
      { q: "Look at the graphic. How much per person will the newest package cost this month?", o: ["$14","$16","$12","$18"], a: 0, e: "最新方案是 hot pasta buffet，清單上是每人 16 美元，本月每人折兩美元，所以是 14 美元。直接選 16 美元是只看圖沒聽折扣的陷阱。" },
      { q: "What is offered to groups of twenty or more?", o: ["Free delivery and setup","A complimentary dessert","An extra seasonal salad","A larger discount"], a: 0, e: "Delivery and setup are free for groups of twenty or more，二十人以上免費外送和布置。當季沙拉是義大利麵方案本來就附的。" }
    ]
  },
  {
    kind: "news", speaker: "M",
    text: "And now for a look at your weekend commute. The Metro Transit Authority has announced that the Green Line will be closed between Central Station and Harbor Point this Saturday and Sunday. Crews will be replacing tracks that are more than forty years old. Free shuttle buses will run every ten minutes between the closed stations, but officials warn that trips could take twenty minutes longer than usual. If you're heading to Sunday's baseball game at Harbor Point Stadium, you may want to think twice about taking the train. The city is adding extra buses on Route 12, which stops right in front of the stadium. Service on the entire Green Line is expected to return to normal by Monday morning. I'm Tom Becker, and I'll be back with sports after this short break.",
    qs: [
      { q: "What is the report mainly about?", o: ["The opening of a new stadium","An increase in bus fares","Road construction downtown","A temporary closure of a train line"], a: 3, e: "主旨是綠線本週末部分路段停駛，是暫時性的鐵路關閉。球場和公車都只是相關細節。" },
      { q: "Why is the work being done?", o: ["A station is being expanded.","Ticket machines are being upgraded.","Some equipment is very old.","Trains are being cleaned."], a: 2, e: "要更換 tracks that are more than forty years old，軌道已經非常老舊。把 tracks 換成 equipment 是常見的換句話說。" },
      { q: "What does the speaker imply when he says, \"you may want to think twice about taking the train\"?", o: ["The game might be canceled.","Train tickets have become expensive.","The stadium is far from the station.","Taking a bus may be a better option."], a: 3, e: "接著說市政府加開停在球場正前方的 12 號公車，暗示搭公車去比較好。並沒有說比賽可能取消。" }
    ]
  },
  {
    kind: "tour", speaker: "W",
    text: "Good morning, everyone, and welcome to the Old Town walking tour. My name is Grace, and I'll be your guide for the next two hours. Our route today includes four stops, which you can see on the map in your brochure. However, I've just been told that the third stop on the list is hosting a private event this morning, so we won't be able to go inside. Instead, we'll spend that extra time at the market, where you can sample some local cheeses. Since we'll be walking on old stone streets, please watch your step, especially near the bridge. If anyone needs a break, just let me know. And remember, the tour ends at the same place we started, so you won't need to find your way back. Alright, let's head to our first stop.",
    graphic: {"kind":"list","title":"Old Town Walking Tour Stops","items":["Stop 1: Clock Tower","Stop 2: Merchant's Bridge","Stop 3: Harbor Customs House","Stop 4: Saint Anne's Market"]},
    qs: [
      { q: "Who most likely are the listeners?", o: ["Tourists","Market vendors","Bus drivers","City officials"], a: 0, e: "說話者是 walking tour 的導覽員，聽眾是參加導覽的遊客。市場是行程中的一站，聽眾不是攤商。" },
      { q: "Look at the graphic. Which place will the listeners NOT be able to enter?", o: ["Clock Tower","Harbor Customs House","Merchant's Bridge","Saint Anne's Market"], a: 1, e: "第三站有私人活動不能進去，看清單第三站是 Harbor Customs House。Merchant's Bridge 是提醒要小心腳步的地方。" },
      { q: "What will listeners be able to do at the market?", o: ["Purchase souvenirs","Take a long break","Taste some food","Meet a local artist"], a: 2, e: "在市場 you can sample some local cheeses，sample 在這裡是試吃，也就是品嘗食物。" }
    ]
  },
  {
    kind: "voicemail", speaker: "W",
    text: "Hi, Mr. Lambert. This is Sophie Grant, the events coordinator at the Harborside Hotel. I'm calling about the sales workshop your company has booked with us for March eighteenth. I received your e-mail saying that the number of participants has increased from forty to sixty. Unfortunately, the Maple Room you reserved can't hold that many people. The good news is that our ballroom is available that day, and since you're a returning client, we'd charge you the same rate as the Maple Room. I just need you to sign an updated contract. I'll e-mail it to you this afternoon. Also, you asked about lunch options. Our chef can provide a vegetarian menu, but we'd need the final count of vegetarian meals by March tenth. Feel free to call me at extension 214 with any questions.",
    qs: [
      { q: "Where does the speaker work?", o: ["At a catering company","At a convention center","At a hotel","At a travel agency"], a: 2, e: "她是 the events coordinator at the Harborside Hotel，在飯店工作。雖然談到會議廳和午餐，但不是會議中心或外燴公司。" },
      { q: "What problem does the speaker mention?", o: ["A room is too small.","A date is no longer available.","A price has gone up.","A contract has been lost."], a: 0, e: "人數增加到六十人，the Maple Room you reserved can't hold that many people，原本的場地太小。價格沒變，反而以原價升級。" },
      { q: "What does the speaker need by March tenth?", o: ["A deposit payment","The number of a certain type of meal","A list of participants' names","A signed contract"], a: 1, e: "三月十日前需要 the final count of vegetarian meals，也就是素食餐的份數。合約只說要簽，沒有說期限是三月十日。" }
    ]
  },
  {
    kind: "announcement", speaker: "M",
    text: "Good morning. This is Kevin Shaw from building management with an announcement for all tenants of the Lakeview Office Tower. Starting tomorrow, the elevators on the east side of the building will be out of service for routine maintenance. The work is expected to take about two weeks. The west side elevators will remain in operation, but they will likely be crowded during the morning rush. We know that's not ideal. That's why we're asking companies to consider letting employees start a little earlier or later than usual during this period. Also, deliveries for any office should go through the loading dock on the ground floor, not the main lobby. A notice with full details has been posted next to each elevator. Thank you for your patience.",
    qs: [
      { q: "Who is the announcement intended for?", o: ["Delivery drivers","People who work in a building","Elevator technicians","Hotel guests"], a: 1, e: "對象是 all tenants of the Lakeview Office Tower，也就是在這棟辦公大樓上班的人。送貨只是其中一項提醒。" },
      { q: "Why does the speaker say, \"We know that's not ideal\"?", o: ["To report that a repair has been delayed","To explain why a schedule has been changed","To correct an error in a notice","To acknowledge an inconvenience for listeners"], a: 3, e: "前面說西側電梯早上會很擠，他說這不理想，是承認這會造成大家不便，接著才提出錯開上班時間的建議。" },
      { q: "According to the speaker, where should deliveries be sent?", o: ["To the main lobby","To the west side elevators","To the loading dock","To the management office"], a: 2, e: "deliveries ... should go through the loading dock on the ground floor, not the main lobby，要走卸貨區。大廳是刻意排除的地點。" }
    ]
  },
  {
    kind: "meeting", speaker: "W",
    text: "The last thing I want to discuss today is our product packaging. Over the past two months, our customer service team has received more than three hundred complaints that our coffee makers are difficult to remove from their boxes. Some customers even said they damaged the machine while trying to get it out. So, our design team has created a new box that opens from the side instead of the top. It also uses forty percent less plastic, which should help us meet our environmental goals. Before we change all our packaging, though, we'll test the new box in two of our stores in Denver. I'd like each of you to visit one of those stores next month and talk to customers about it. I'll send out a schedule by Friday so you can choose a date.",
    qs: [
      { q: "What is the main topic of the talk?", o: ["A product's packaging","A change in store hours","A new coffee flavor","A customer service policy"], a: 0, e: "開頭就說 The last thing I want to discuss today is our product packaging，主題是產品包裝。咖啡機是產品，不是新口味。" },
      { q: "What does the speaker say about the new box?", o: ["It is cheaper to produce.","It is made entirely of paper.","It contains less plastic.","It is smaller than the old one."], a: 2, e: "It also uses forty percent less plastic，塑膠用量較少。只是減少塑膠，並沒有說完全用紙製成或比較便宜。" },
      { q: "What does the speaker ask the listeners to do?", o: ["Design a new logo","Respond to customer complaints","Order samples from a supplier","Visit a store to gather opinions"], a: 3, e: "她希望每個人 visit one of those stores next month and talk to customers about it，去門市了解顧客的意見。投訴是客服團隊收到的，不是要聽眾回覆。" }
    ]
  }
]);
