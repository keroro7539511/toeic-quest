// 模擬考的播音稿與時間設定（網頁與 tools/gen_audio.py 共用）
// 說明文字為自行改寫，模仿正式考試的流程，並非官方原文。
window.EXAM_SCRIPT = {
  directions: {
    1: {
      en: "Listening Test. In this section, you will hear a variety of statements, questions, conversations, and talks in English, and you will answer questions about what you hear. The Listening test lasts about forty-five minutes and has four parts. Everything will be spoken only one time, so listen carefully. Part 1. Directions: For each question in this part, you will hear four statements about a picture in your test book. Choose the statement that best describes what you see in the picture, and mark your answer on your answer sheet. The statements are not printed in your test book.",
      zh: "聽力測驗約 45 分鐘，共四個部分，每段錄音只播放一次。Part 1：每題會聽到四個描述照片的句子，選出最符合照片的一句。句子不會印在題本上。",
    },
    2: {
      en: "Part 2. Directions: You will hear a question or statement followed by three responses. They are not printed in your test book and will be spoken only one time. Choose the best response to the question or statement, and mark the letter A, B, or C on your answer sheet.",
      zh: "Part 2：每題會聽到一個問句或直述句，接著三個回應，選出最適當的回應。題目和選項都不會印出。",
    },
    3: {
      en: "Part 3. Directions: You will hear some conversations between two or more people. You will answer three questions about what the speakers say in each conversation. Choose the best response to each question, and mark the letter A, B, C, or D on your answer sheet. The conversations are not printed in your test book and will be spoken only one time.",
      zh: "Part 3：聽兩人或三人的對話，每段對話回答三題。題目和選項印在題本上，對話本身不會印出。",
    },
    4: {
      en: "Part 4. Directions: You will hear some talks given by a single speaker. You will answer three questions about what the speaker says in each talk. Choose the best response to each question, and mark the letter A, B, C, or D on your answer sheet. The talks are not printed in your test book and will be spoken only one time.",
      zh: "Part 4：聽一段由一個人說的獨白（公告、留言、廣播等），每段回答三題。",
    },
  },
  part1Intro: "Number {n}. Look at the picture marked number {n} in your test book.",
  part2Intro: "Number {n}.",
  setIntro: {
    conversation: "Questions {a} through {b} refer to the following conversation.",
    conversation3: "Questions {a} through {b} refer to the following conversation with three speakers.",
    conversationGraphic: "Questions {a} through {b} refer to the following conversation and graphic.",
    talk: "Questions {a} through {b} refer to the following {kind}.",
    talkGraphic: "Questions {a} through {b} refer to the following {kind} and graphic.",
  },
  talkNames: {
    announcement: "announcement", voicemail: "telephone message", advertisement: "advertisement",
    news: "news report", broadcast: "broadcast", tour: "talk", meeting: "excerpt from a meeting",
    talk: "talk", introduction: "introduction", instructions: "instructions",
  },
  questionRead: "Number {n}. {q}",
  // 作答停頓（毫秒）：Part 1/2 每題 5 秒；Part 3/4 每題題目唸完後 8 秒
  pauseShort: 5000,
  pauseLong: 8000,
  readingMinutes: 75,
};
