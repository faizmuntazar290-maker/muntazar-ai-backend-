// data/knowledge.ts

export type KnowledgeItem = {
  id: string;
  category: string;
  title: string;
  keywords: string[];
  answer: string;
  tags: string[];
};

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: "mahdawiyya-intro",
    category: "Mahdawiyya",
    title: "🌙 Menene Mahdawiyya?",
    keywords: [
      "mahdawiyya",
      "menene mahdawiyya",
      "mahdi",
      "imam mahdi",
      "imam al mahdi",
      "imami mahdi",
      "mahdiyya",
    ],
    answer:
      "Mahdawiyya wani bangare ne na koyarwar Musulunci da ya shafi Imam Mahdi (AJ), imamatinsa, bayyanarsa, alamu da suka shafi bayyanarsa, da kuma nauyin mutum wajen shirya kansa da gyara al'umma. A Muntazar AI, za mu bambanta tsakanin abin da yake cikin Qur'ani, hadisi, tarihi, da kuma bayanin malamai.",
    tags: ["Mahdawiyya", "Imam Mahdi", "Intizar"],
  },

  {
    id: "imam-mahdi",
    category: "Mahdawiyya",
    title: "🌙 Waye Imam Mahdi (AJ)?",
    keywords: [
      "waye imam mahdi",
      "waye mahdi",
      "imam mahdi",
      "mahdi aj",
      "imam zaman",
      "imamuz zaman",
      "imam zamaninsa",
    ],
    answer:
      "Imam Mahdi (AJ) shi ne Imam na goma sha biyu a tsarin Imamai goma sha biyu na Ahlul Bayt (AS) a aqidar Imamiyya. Ana kiransa Muhammad ibn al-Hasan al-Askari. Koyarwar Mahdawiyya tana magana ne kan rayuwarsa, imamatinsa, Ghayba da kuma bayyanarsa a lokacin da Allah Ya kaddara.",
    tags: ["Imam Mahdi", "Ahlul Bayt", "Imamat"],
  },

  {
    id: "intizar",
    category: "Mahdawiyya",
    title: "⏳ Menene Intizar?",
    keywords: [
      "intizar",
      "menene intizar",
      "jiran imam mahdi",
      "jira imam mahdi",
      "muntazir",
      "muntazirun",
      "intizarul faraj",
    ],
    answer:
      "Intizar yana nufin jiran faraj da bayyanar Imam Mahdi (AJ), tare da yin aiki na gari da gyaran kai. Jiran Imam ba wai zama babu aiki ba ne; ya hada da ibada, kyawawan dabi'u, neman ilimi, taimakon mutane, nisantar zalunci da kokarin zama cikin shirin karbar gaskiya.",
    tags: ["Intizar", "Muntazirun", "Mahdawiyya"],
  },

  {
    id: "ahlul-bayt",
    category: "Ahlul Bayt",
    title: "🕌 Su waye Ahlul Bayt (AS)?",
    keywords: [
      "ahlul bayt",
      "su waye ahlul bayt",
      "ahlul bait",
      "ahlulbayt",
      "iyalan annabi",
      "aahlul bayt",
    ],
    answer:
      "Ahlul Bayt na Annabi Muhammad (SAW) suna da matsayi na musamman a koyarwar Musulunci. A cikin al'adar Imamiyya, ana magana musamman kan Annabi Muhammad (SAW), Sayyida Fatima (SA), Imam Ali (AS), da Imamai daga zuriyar Imam Ali da Sayyida Fatima (SA), har zuwa Imam Mahdi (AJ).",
    tags: ["Ahlul Bayt", "Fatima", "Ali", "Imamai"],
  },

  {
    id: "twelve-imams",
    category: "Imamat",
    title: "📚 Imamai goma sha biyu",
    keywords: [
      "imamai goma sha biyu",
      "12 imams",
      "imamai 12",
      "goma sha biyu",
      "jerin imamai",
      "sunayen imamai",
    ],
    answer:
      "A tsarin Imamiyya, Imamai goma sha biyu su ne: 1. Imam Ali ibn Abi Talib (AS), 2. Imam Hasan al-Mujtaba (AS), 3. Imam Husayn (AS), 4. Imam Ali Zayn al-Abidin (AS), 5. Imam Muhammad al-Baqir (AS), 6. Imam Ja'far al-Sadiq (AS), 7. Imam Musa al-Kazim (AS), 8. Imam Ali al-Rida (AS), 9. Imam Muhammad al-Jawad (AS), 10. Imam Ali al-Hadi (AS), 11. Imam Hasan al-Askari (AS), 12. Imam Muhammad al-Mahdi (AJ).",
    tags: ["Imamat", "Imamai", "Ahlul Bayt"],
  },

  {
    id: "imam-ali",
    category: "Ahlul Bayt",
    title: "🕌 Imam Ali (AS)",
    keywords: [
      "imam ali",
      "ali ibn abi talib",
      "imam ali as",
      "ali as",
      "imam amirul muminin",
      "amirul muminin",
    ],
    answer:
      "Imam Ali ibn Abi Talib (AS) dan Annabi Muhammad (SAW) ne kuma yana daga cikin manyan mutane a tarihin Musulunci. A cikin aqidar Imamiyya, shi ne Imam na farko daga cikin Imamai goma sha biyu.",
    tags: ["Imam Ali", "Ahlul Bayt", "Imamat"],
  },

  {
    id: "imam-husayn",
    category: "Ahlul Bayt",
    title: "🕊️ Imam Husayn (AS)",
    keywords: [
      "imam husayn",
      "imam hussain",
      "husaini",
      "karbala",
      "ashura",
      "imam husain",
    ],
    answer:
      "Imam Husayn ibn Ali (AS) shi ne Imam na uku a tsarin Imamai goma sha biyu na Imamiyya. Rayuwarsa da tsayuwarsa a Karbala sun zama muhimmin bangare na tarihin Ahlul Bayt da koyarwar sadaukarwa, adalci da kin amincewa da zalunci.",
    tags: ["Imam Husayn", "Karbala", "Ashura"],
  },

  {
    id: "quran",
    category: "Qur'an",
    title: "📖 Qur'ani da Tafsir",
    keywords: [
      "qurani",
      "quran",
      "tafsir",
      "aya",
      "ayat",
      "fassarar qurani",
      "menene qurani",
    ],
    answer:
      "Qur'ani shi ne littafin Allah da aka saukar wa Annabi Muhammad (SAW). Tafsir yana nufin nazari da bayanin ma'anoni da darussan ayoyin Qur'ani. A Muntazar AI, ya kamata a bambanta tsakanin rubutun aya, fassara, da tafsirin malamai.",
    tags: ["Qur'an", "Tafsir", "Aya"],
  },

  {
    id: "hadith",
    category: "Hadith",
    title: "📚 Menene Hadith?",
    keywords: [
      "hadith",
      "hadisi",
      "menene hadith",
      "menene hadisi",
      "riwaya",
      "ruwaya",
      "sunnah",
    ],
    answer:
      "Hadith ko riwaya magana ce, aiki, ko amincewa da aka danganta ga Annabi (SAW), ko kuma a wasu taraddun ilimi ga wasu jagororin addini. Binciken hadith yana bukatar a duba source, isnad, matn, da yadda malamai suka tantance riwayar.",
    tags: ["Hadith", "Riwaya", "Isnad"],
  },

  {
    id: "source-verification",
    category: "Source Verification",
    title: "🔍 Source Verification",
    keywords: [
      "source verification",
      "tantance source",
      "tantance hadisi",
      "ingancin hadisi",
      "hadisi sahihi",
      "sahih",
      "isnad",
      "source",
      "madogara",
    ],
    answer:
      "Source verification yana nufin binciken inda wata magana ko hadisi ya fito, littafin da ya kawo shi, isnad dinsa, matn dinsa, da hukuncin masana a kansa. Kasancewar magana a cikin wani littafi kadai ba ya nufin cewa dukkan malamai sun dauke ta a matsayin sahihiya.",
    tags: ["Verification", "Hadith", "Sources"],
  },

  {
    id: "knowledge-base",
    category: "Muntazar AI",
    title: "🤖 Menene Knowledge Base?",
    keywords: [
      "knowledge base",
      "menene knowledge base",
      "database",
      "bayanan muntazar",
      "yadda muntazar ke aiki",
    ],
    answer:
      "Knowledge Base ita ce tarin bayanan da aka shirya domin Muntazar AI ya iya nemo bayanin da ya dace da tambayar mai amfani. A wannan Local Demo, ana neman kalmomin tambaya a cikin bayanan da aka riga aka saka.",
    tags: ["Muntazar AI", "Knowledge Base", "Local"],
  },
];

export function findKnowledgeItem(
  question: string
): KnowledgeItem | null {
  const normalizedQuestion = question
    .toLowerCase()
    .trim();

  if (!normalizedQuestion) {
    return null;
  }

  for (const item of knowledgeBase) {
    const found = item.keywords.some((keyword) =>
      normalizedQuestion.includes(keyword.toLowerCase())
    );

    if (found) {
      return item;
    }
  }

  return null;
}