// 模擬考 3 — Part 1 照片描述（Questions 1–6，原創題目，照片為自由授權圖片，出處見 credit）
window.MOCK3 = window.MOCK3 || {};
window.MOCK3.part1 = [
  {
    img: "images/mock3/m3_p1_01.jpg",
    alt: "A man in a navy blue T-shirt holds a stack of three flat brown cardboard boxes in both hands. A brown paper shopping bag and a small takeout food box sit on top of the stack. The background is black.",
    o: [
      "A man is opening a paper bag.",
      "A man is holding a stack of boxes.",
      "A man is putting on a T-shirt.",
      "Some boxes are being thrown away."
    ],
    a: 1,
    e: "男子雙手捧著一疊紙盒，上面放著紙袋，所以「A man is holding a stack of boxes.」正確。紙袋是放在盒子上，他沒有在打開；他已經穿著 T 恤，不是正在穿上（putting on 是「穿上」的動作）；盒子也沒有被丟掉。",
    credit: "Meanwell Packaging / CC BY 2.0 / https://commons.wikimedia.org/wiki/File:A_man_carrying_takeaway_delivery_packages.jpg"
  },
  {
    img: "images/mock3/m3_p1_02.jpg",
    alt: "A woman in a leopard-print dress stands at a large white photocopier with its lid raised and places a sheet of paper on the glass. A framed picture hangs on the yellow wall behind the machine.",
    o: [
      "A woman is repairing a printer.",
      "A woman is hanging a picture on the wall.",
      "A woman is sitting at a computer.",
      "A woman is placing a document on a copier."
    ],
    a: 3,
    e: "女子掀開影印機上蓋，把文件放在玻璃面上，所以「placing a document on a copier」正確。她是在使用機器而不是修理；牆上的畫已經掛好了，她沒有在掛畫；她是站著，也沒有在用電腦。",
    credit: "Countvictor / CC BY-SA 4.0 / https://commons.wikimedia.org/wiki/File:Nigerian_lady_operating_a_printer.jpg"
  },
  {
    img: "images/mock3/m3_p1_03.jpg",
    alt: "In a workshop, a man in a blue checked shirt bends over a bicycle and uses a small tool on its frame near the chain and rear gears. Shelves with boxes and helmets are in the background, and part of another person is visible at the right edge.",
    o: [
      "A man is working on a bicycle.",
      "A man is riding a bicycle down a street.",
      "Some bicycles are being displayed in a window.",
      "A man is filling a box with tools."
    ],
    a: 0,
    e: "男子彎腰拿工具處理腳踏車的車架和鏈條，「working on」就是「修理、處理」，所以正確。照片在室內工作間，沒有人騎車；只有一台車，也沒有櫥窗；背景有箱子，但他沒有在把工具裝進箱子。",
    credit: "NoahNairobi / CC BY-SA 4.0 / https://commons.wikimedia.org/wiki/File:The_Bicycle_Mechanic.jpg"
  },
  {
    img: "images/mock3/m3_p1_04.jpg",
    alt: "Black and white photo inside a library. Two women stand facing tall metal bookshelves and put books onto the shelves. Many shelves are still partly empty, and large cardboard boxes are spread across the floor in the foreground.",
    o: [
      "Some boxes are being loaded onto a cart.",
      "Some women are sitting at a desk.",
      "Some women are arranging books on shelves.",
      "All of the shelves have been emptied."
    ],
    a: 2,
    e: "兩位女子站在書架前把書放上架，所以「arranging books on shelves」正確。地上的箱子是放著的，沒有人在把它們搬上推車；她們是站著不是坐著；書架雖然有不少空格，但還有書，「All of the shelves have been emptied」說全部清空是錯的。",
    credit: "University of Texas at Arlington Photograph Collection / CC BY 4.0 / https://commons.wikimedia.org/wiki/File:Interior_of_University_of_Texas_at_Arlington_Library_(10003723).jpg"
  },
  {
    img: "images/mock3/m3_p1_05.jpg",
    alt: "A workshop wall covered with a perforated metal pegboard. Pliers, wrenches, a hammer, and other hand tools hang from hooks on the board, and a row of screwdrivers sits in a holder along the bottom. No people are in the photo.",
    o: [
      "Some tools are being hung on a board.",
      "Some tools have been laid out on a workbench.",
      "A worker is reaching for some pliers.",
      "Some tools have been hung on a board."
    ],
    a: 3,
    e: "照片中沒有人，工具已經掛在洞洞板上，用「have been hung」描述完成的狀態才正確。「are being hung」表示有人正在掛，是經典的 being／been 陷阱；工具不是平放在工作台上；照片裡也沒有工人。",
    credit: "Shixart1985 / CC BY 2.0 / https://commons.wikimedia.org/wiki/File:Various_tools_hanging_on_a_pegboard_in_a_workshop_setting_with_natural_light_filtering_in.jpg"
  },
  {
    img: "images/mock3/m3_p1_06.jpg",
    alt: "At night outside a large supermarket, long rows of shopping carts are lined up along the building's wall under a lit metal roof. One car is parked in the lot nearby, and no shoppers are visible.",
    o: [
      "Shopping carts have been lined up along a wall.",
      "Shopping carts are being pushed across a parking lot.",
      "Some cars are entering a garage.",
      "Customers are waiting outside a store."
    ],
    a: 0,
    e: "購物推車整齊排在建築物牆邊，「have been lined up」表示已排好的狀態，所以正確。照片裡沒有人在推車，「are being pushed」是正在進行的動作；只有一台車停著，沒有車開進車庫；店外也看不到顧客在排隊。",
    credit: "PattayaPatrol / CC BY-SA 4.0 / https://commons.wikimedia.org/wiki/File:DZ6_2587_Shopping_carts_lined_up_outside_a_supermarket_at_night_ready_for_the_next_days_customers.jpg"
  }
];
