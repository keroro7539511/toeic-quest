// 模擬考 1 — Part 1 照片描述（Questions 1–6，原創題目，照片為自由授權圖片，出處見 credit）
window.MOCK1 = window.MOCK1 || {};
window.MOCK1.part1 = [
  {
    img: "images/mock1/m1_p1_01.jpg",
    alt: "A dining table covered with a white patterned cloth and set with plates, gold chargers, folded napkins, wine glasses, two unlit candles, and a vase of yellow and orange flowers. Wooden chairs stand around the table and no people are present.",
    o: [
      "Some candles are being lit.",
      "Food is being served to some guests.",
      "A table has been set for a meal.",
      "Some chairs have been stacked against the wall."
    ],
    a: 2,
    e: "餐桌上已擺好盤子、餐巾和酒杯，「has been set」表示已經布置好的狀態，所以正確。蠟燭沒有點燃，照片中也沒有人，所以「are being lit」「is being served」這類正在進行的動作都不對；椅子是放在桌邊，沒有疊靠在牆上。",
    credit: "Aaron Gustafson / CC BY-SA 2.0 / https://www.flickr.com/photos/86537625@N00/305019436"
  },
  {
    img: "images/mock1/m1_p1_02.jpg",
    alt: "Four people sit around a round table covered with papers, cups, and glasses of water. One man is talking and gesturing while the others listen. A blank flip chart stands behind them.",
    o: [
      "Some people are having a discussion at a table.",
      "A woman is writing on a board.",
      "A man is pouring coffee into a cup.",
      "Some people are leaving a meeting room."
    ],
    a: 0,
    e: "四個人圍坐在圓桌旁，一人邊說邊比手勢，其他人在聽，所以「Some people are having a discussion at a table.」正確。後方有白板架，但女子坐著沒有在寫字；桌上有杯子但沒人在倒咖啡；大家都坐著，沒有人正在離開。",
    credit: "The Natural Step Canada / CC BY 2.0 / https://www.flickr.com/photos/36238874@N02/9819156864"
  },
  {
    img: "images/mock1/m1_p1_03.jpg",
    alt: "Dozens of bicycles parked tightly together in metal racks on a brick-paved area in front of a building wall.",
    o: [
      "A cyclist is riding along a path.",
      "Some bicycles are being washed.",
      "Bicycles are being loaded onto a truck.",
      "Many bicycles have been parked close together."
    ],
    a: 3,
    e: "大量腳踏車緊密地停在車架上，「have been parked」表示已停放的狀態，所以正確。照片中沒有人在騎車，也沒有卡車；「are being washed」「are being loaded」是正在進行的被動式，與靜止停放的畫面不符。",
    credit: "StockyPics / CC0 / https://www.flickr.com/photos/135371437@N04/23622124062"
  },
  {
    img: "images/mock1/m1_p1_04.jpg",
    alt: "A worker in a uniform shirt, cap, and black gloves bends over a wooden crate on a pallet in a warehouse. Shelves with boxes and a ladder are in the background.",
    o: [
      "A worker is driving a forklift.",
      "A worker is bending over a wooden crate.",
      "A worker is climbing a ladder.",
      "Some boxes are being loaded into a van."
    ],
    a: 1,
    e: "工作人員彎著腰靠在木箱上處理東西，所以「A worker is bending over a wooden crate.」正確。背景架子旁有一把梯子，但沒有人在爬，是「照片中有該物品但動作錯」的陷阱；照片中也沒有人開堆高機或廂型車。",
    credit: "U.S. Fish and Wildlife Service, Northeast Region / Public Domain / https://www.flickr.com/photos/43322816@N08/16201214400"
  },
  {
    img: "images/mock1/m1_p1_05.jpg",
    alt: "A construction worker wearing a hard hat, sunglasses, and a safety vest uses a grinder on a metal post, sending sparks flying in front of a glass building.",
    o: [
      "A worker is washing some windows.",
      "A worker is climbing down a ladder.",
      "A worker is wearing a hard hat.",
      "A worker is taking off a safety vest."
    ],
    a: 2,
    e: "工人頭上戴著安全帽，「is wearing」描述穿戴的狀態，所以正確。背景是玻璃帷幕，但他不是在洗窗戶；照片中沒有梯子；他身上穿著反光背心，並沒有在脫下（taking off 是動作，wearing 是狀態，要分清楚）。",
    credit: "runneralan2004 / CC BY 2.0 / https://www.flickr.com/photos/90029322@N00/10092757714"
  },
  {
    img: "images/mock1/m1_p1_06.jpg",
    alt: "Many pedestrians in winter coats walk across a wide striped crosswalk on a wet street in front of an old city building. One person is pushing a wheelchair.",
    o: [
      "Pedestrians are crossing a street.",
      "People are waiting in line at a bus stop.",
      "Some people are opening umbrellas.",
      "The road is being repaired."
    ],
    a: 0,
    e: "許多行人正走過斑馬線，所以「Pedestrians are crossing a street.」正確。路面雖然濕濕的，但沒有人在撐傘，這是由場景聯想出來的陷阱；行人都在走動而不是排隊等公車；也沒有道路施工。",
    credit: "u.hopper / CC BY 2.0 / https://www.flickr.com/photos/125857513@N06/14600151031"
  }
];
