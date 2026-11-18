// 模擬考 2 — Part 1 照片描述（Questions 1–6，原創題目，照片為自由授權圖片，出處見 credit）
window.MOCK2 = window.MOCK2 || {};
window.MOCK2.part1 = [
  {
    img: "images/mock2/m2_p1_01.jpg",
    alt: "A gray-haired man in an orange and black striped shirt pushes a lawn mower across the grass in a garden. Tall green bushes are on the left, and white steps with a railing lead up to a house on the right.",
    o: [
      "A man is climbing some stairs.",
      "A man is pushing a lawn mower.",
      "A man is trimming some bushes.",
      "A man is sitting on a garden bench."
    ],
    a: 1,
    e: "男子雙手握著割草機把手往前推，所以「A man is pushing a lawn mower.」正確。右邊有樓梯但他沒有在爬；旁邊有灌木叢但他沒有在修剪；照片中也沒有人坐在長椅上。",
    credit: "Shixart1985 / CC BY 2.0 / https://commons.wikimedia.org/wiki/File:Man_mowing_the_lawn_in_a_suburban_garden.jpg"
  },
  {
    img: "images/mock2/m2_p1_02.jpg",
    alt: "A man in a gray suit and tie climbs a metal stepladder with an orange top, holding the ladder with both hands and looking up. The ladder stands in front of a plain light gray wall.",
    o: [
      "A man is painting a wall.",
      "A man is folding up a ladder.",
      "A man is taking off his jacket.",
      "A man is standing on a ladder."
    ],
    a: 3,
    e: "穿西裝的男子雙腳踩在梯子上、手扶著梯子，所以「A man is standing on a ladder.」正確。牆是空白的，他手上沒有油漆工具；梯子是打開的，並沒有在收折；他的西裝外套也穿在身上。",
    credit: "Barrett Kuethen (amtec_photos) / CC BY-SA 2.0 / https://commons.wikimedia.org/wiki/File:Man_Climbing_Ladder.jpg"
  },
  {
    img: "images/mock2/m2_p1_03.jpg",
    alt: "At an exhibition hall, a young man in a black polo shirt stands in front of a tall freestanding display stand with a screen. He holds the edge of the screen with one hand, and another person behind him reaches up to the top of the screen.",
    o: [
      "A man is adjusting a display screen.",
      "A man is handing out brochures.",
      "Some people are sitting in an audience.",
      "A screen is being carried out of a hall."
    ],
    a: 0,
    e: "男子扶著展示架上的螢幕，後面的人也伸手調整，所以「A man is adjusting a display screen.」正確。沒有人在發手冊、也沒有觀眾坐著；螢幕是固定在展示架上，沒有被搬出去，「is being carried」是被動進行式陷阱。",
    credit: "Shixart1985 / CC BY 2.0 / https://commons.wikimedia.org/wiki/File:Workers_set_up_a_digital_display_at_an_exhibition.jpg"
  },
  {
    img: "images/mock2/m2_p1_04.jpg",
    alt: "Looking up at the corner of a tall building against a clear blue sky. Two workers hang from ropes on the side of the building, working on white equipment boxes and cables attached to the wall. More equipment is mounted on the roof.",
    o: [
      "Some workers are washing the windows from a platform.",
      "Some workers are climbing onto the roof.",
      "Some workers are hanging from ropes beside a building.",
      "Some equipment is being lifted by a crane."
    ],
    a: 2,
    e: "兩名工人靠繩索懸掛在大樓側面施工，所以「hanging from ropes beside a building」正確。他們不是站在平台上洗窗戶，也沒有在爬上屋頂；照片中看不到起重機（crane）。",
    credit: "Shixart1985 / CC BY 2.0 / https://commons.wikimedia.org/wiki/File:Workers_are_cleaning_the_windows_of_a_tall_building_using_ropes_in_a_clear_sky.jpg"
  },
  {
    img: "images/mock2/m2_p1_05.jpg",
    alt: "Several small white and blue motorboats are tied up side by side along a stone dock in a harbor. Larger white yachts are in the background, and mountains rise under a clear blue sky. No people are visible.",
    o: [
      "Some passengers are boarding a boat.",
      "A boat is being pulled out of the water.",
      "Some sails are being raised.",
      "Some boats have been tied up along a dock."
    ],
    a: 3,
    e: "幾艘小船並排繫在碼頭邊，「have been tied up」表示已經繫好的狀態，所以正確。照片裡沒有人，所以「passengers are boarding」不對；「is being pulled」「are being raised」都是正在進行的動作，和靜止的畫面不符，而且這些船也沒有帆。",
    credit: "Shixart1985 / CC BY 2.0 / https://commons.wikimedia.org/wiki/File:Boats_docked_at_a_marina_with_mountains_in_the_background_on_a_sunny_day.jpg"
  },
  {
    img: "images/mock2/m2_p1_06.jpg",
    alt: "An empty small office. A white desk with a computer monitor, keyboard, and small flower decorations stands in the middle, with a gray office chair behind it. A potted plant stands in a black pot near the wall, and a framed painting hangs above it. Two green armchairs are in the right corner.",
    o: [
      "A plant has been placed next to a wall.",
      "A painting is being hung on the wall.",
      "Some chairs have been stacked in a corner.",
      "A woman is working at a computer."
    ],
    a: 0,
    e: "盆栽已經擺在牆邊，「has been placed」描述已完成的狀態，所以正確。畫已經掛好，沒有人正在掛，「is being hung」是 being／been 陷阱；角落的椅子沒有疊起來；辦公室裡也沒有人在用電腦。",
    credit: "Shixart1985 / CC BY 2.0 / https://commons.wikimedia.org/wiki/File:Modern_office_space_closeup.jpg"
  }
];
