// data/knowledge.ts

export type KnowledgeItem = {
  id: string;
  category: string;
  title: string;
  keywords: string[];
  answerHa: string;
  answerEn: string;
  tags: string[];
};

export const knowledgeBase: KnowledgeItem[] = [
  {
    id: "mahdawiyya-intro",
    category: "Mahdawiyya",
    title: "🌙 Menene Mahdawiyya? / What is Mahdawiyya?",
    keywords: [
      "mahdawiyya",
      "mahdiyya",
      "mahdi",
      "imam mahdi",
      "menene mahdawiyya",
      "menene mahdiyya",
      "what is mahdawiyya",
      "what is mahdiyya",
      "what is mahdi",
      "imam mahdi",
    ],
    answerHa:
      "Mahdawiyya wani bangare ne na koyarwar Musulunci da ya shafi Imam Mahdi (AJ), imamatinsa, bayyanarsa, alamu da suka shafi bayyanarsa, da kuma nauyin mutum wajen shirya kansa da gyara al'umma. A Muntazar AI, za mu bambanta tsakanin abin da yake cikin Qur'ani, hadisi, tarihi, da bayanin malamai.",
    answerEn:
      "Mahdawiyya refers to teachings and discussions concerning Imam al-Mahdi (AJ), including his Imamate, occultation, appearance, related signs, and the responsibilities of believers. Muntazar AI distinguishes between Qur'anic evidence, hadith, historical reports, and scholarly interpretation.",
    tags: ["Mahdawiyya", "Imam Mahdi", "Intizar"],
  },

  {
    id: "imam-mahdi",
    category: "Mahdawiyya",
    title: "🌙 Waye Imam Mahdi? / Who is Imam Mahdi?",
    keywords: [
      "waye imam mahdi",
      "waye mahdi",
      "imam mahdi",
      "who is imam mahdi",
      "who is al mahdi",
      "imam al mahdi",
      "mahdi aj",
      "imam zaman",
      "imamuz zaman",
      "imam na goma sha biyu",
      "twelfth imam",
      "12th imam",
    ],
    answerHa:
      "A cikin aqidar Imamiyya, Imam Muhammad ibn al-Hasan al-Mahdi (AJ) shi ne Imam na goma sha biyu daga cikin Imamai goma sha biyu na Ahlul Bayt (AS). Koyarwar Mahdawiyya ta shafi imamatinsa, Ghayba, da bayyanarsa a lokacin da Allah Ya kaddara.",
    answerEn:
      "In Twelver Shi'a belief, Imam Muhammad ibn al-Hasan al-Mahdi (AJ) is the twelfth Imam from the Ahlul Bayt (AS). Mahdawiyya includes teachings concerning his Imamate, occultation, and eventual appearance at the time appointed by Allah.",
    tags: ["Imam Mahdi", "Ahlul Bayt", "Imamat"],
  },

  {
    id: "intizar",
    category: "Mahdawiyya",
    title: "⏳ Menene Intizar? / What is Intizar?",
    keywords: [
      "intizar",
      "menene intizar",
      "jiran imam mahdi",
      "jira imam mahdi",
      "jiran mahdi",
      "what is intizar",
      "what does intizar mean",
      "waiting for imam mahdi",
      "muntazir",
      "muntazirun",
      "intizarul faraj",
    ],
    answerHa:
      "Intizar yana nufin jiran faraj da bayyanar Imam Mahdi (AJ), tare da yin aiki na gari da gyaran kai. Jiran Imam ba wai zama babu aiki ba ne; ya hada da ibada, kyawawan dabi'u, neman ilimi, taimakon mutane, nisantar zalunci da kokarin zama cikin shirin karbar gaskiya.",
    answerEn:
      "Intizar refers to awaiting divine relief and the appearance of Imam al-Mahdi (AJ), together with personal and social preparation. It is not simply passive waiting; it is associated with worship, good character, seeking knowledge, helping others, avoiding injustice, and preparing oneself for truth.",
    tags: ["Intizar", "Muntazirun", "Mahdawiyya"],
  },

  {
    id: "ahlul-bayt",
    category: "Ahlul Bayt",
    title: "🕌 Su waye Ahlul Bayt? / Who are Ahlul Bayt?",
    keywords: [
      "ahlul bayt",
      "ahlulbait",
      "ahlul-bayt",
      "ahlul bait",
      "ahlulbayt",
      "su waye ahlul bayt",
      "su waye ahlulbait",
      "suwaye ahlulbayt",
      "menene ahlul bayt",
      "who are ahlul bayt",
      "who are ahlulbait",
      "what is ahlul bayt",
    ],
    answerHa:
      "Ahlul Bayt na Annabi Muhammad (SAW) suna da matsayi na musamman a koyarwar Musulunci. A cikin al'adar Imamiyya, ana magana musamman kan Annabi Muhammad (SAW), Sayyida Fatima (SA), Imam Ali (AS), da Imamai daga zuriyar Imam Ali da Sayyida Fatima (SA), har zuwa Imam Mahdi (AJ).",
    answerEn:
      "The Ahlul Bayt of Prophet Muhammad (SAW) hold a special position in Islamic teachings. In Twelver Shi'a tradition, the term particularly refers to the Prophet Muhammad (SAW), Lady Fatima (SA), Imam Ali (AS), and the Imams from their descendants through Imam Ali and Lady Fatima, ending with Imam al-Mahdi (AJ).",
    tags: ["Ahlul Bayt", "Fatima", "Ali", "Imams"],
  },

  {
    id: "twelve-imams",
    category: "Imamat",
    title: "📚 Imamai goma sha biyu / The Twelve Imams",
    keywords: [
      "imamai goma sha biyu",
      "imamai 12",
      "12 imams",
      "twelve imams",
      "the twelve imams",
      "jerin imamai",
      "sunayen imamai",
      "names of the twelve imams",
      "who are the twelve imams",
    ],
    answerHa:
      "A tsarin Imamiyya, Imamai goma sha biyu su ne: 1. Imam Ali ibn Abi Talib (AS), 2. Imam Hasan al-Mujtaba (AS), 3. Imam Husayn (AS), 4. Imam Ali Zayn al-Abidin (AS), 5. Imam Muhammad al-Baqir (AS), 6. Imam Ja'far al-Sadiq (AS), 7. Imam Musa al-Kazim (AS), 8. Imam Ali al-Rida (AS), 9. Imam Muhammad al-Jawad (AS), 10. Imam Ali al-Hadi (AS), 11. Imam Hasan al-Askari (AS), 12. Imam Muhammad al-Mahdi (AJ).",
    answerEn:
      "In Twelver Shi'a tradition, the Twelve Imams are: 1. Imam Ali ibn Abi Talib (AS), 2. Imam Hasan al-Mujtaba (AS), 3. Imam Husayn (AS), 4. Imam Ali Zayn al-Abidin (AS), 5. Imam Muhammad al-Baqir (AS), 6. Imam Ja'far al-Sadiq (AS), 7. Imam Musa al-Kazim (AS), 8. Imam Ali al-Rida (AS), 9. Imam Muhammad al-Jawad (AS), 10. Imam Ali al-Hadi (AS), 11. Imam Hasan al-Askari (AS), 12. Imam Muhammad al-Mahdi (AJ).",
    tags: ["Imamat", "Twelve Imams", "Ahlul Bayt"],
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
      "amirul muminin",
      "imam amirul muminin",
      "who is imam ali",
      "imam na farko",
      "first imam",
    ],
    answerHa:
      "Imam Ali ibn Abi Talib (AS) dan Abu Talib ne, dan uwan Annabi Muhammad (SAW), kuma mijin Sayyida Fatima (SA) ne. A cikin aqidar Imamiyya, shi ne Imam na farko daga cikin Imamai goma sha biyu.",
    answerEn:
      "Imam Ali ibn Abi Talib (AS) was the cousin of Prophet Muhammad (SAW) and the husband of Lady Fatima (SA). In Twelver Shi'a belief, he is the first of the Twelve Imams.",
    tags: ["Imam Ali", "Ahlul Bayt", "Imamat"],
  },

  {
    id: "imam-hasan",
    category: "Ahlul Bayt",
    title: "🕌 Imam Hasan al-Mujtaba (AS)",
    keywords: [
      "imam hasan",
      "imam hassan",
      "hasan al mujtaba",
      "imam hasan as",
      "who is imam hasan",
      "imam na biyu",
      "second imam",
    ],
    answerHa:
      "Imam Hasan ibn Ali (AS) shi ne Imam na biyu a tsarin Imamai goma sha biyu na Imamiyya. Shi dan Imam Ali (AS) da Sayyida Fatima (SA), kuma jikan Annabi Muhammad (SAW) ne.",
    answerEn:
      "Imam Hasan ibn Ali (AS) is the second Imam in Twelver Shi'a belief. He was the son of Imam Ali (AS) and Lady Fatima (SA), and the grandson of Prophet Muhammad (SAW).",
    tags: ["Imam Hasan", "Ahlul Bayt", "Imamat"],
  },

  {
    id: "imam-husayn",
    category: "Ahlul Bayt",
    title: "🕊️ Imam Husayn (AS)",
    keywords: [
      "imam husayn",
      "imam hussain",
      "imam husain",
      "husaini",
      "karbala",
      "ashura",
      "imam husayn as",
      "who is imam husayn",
      "imam na uku",
      "third imam",
    ],
    answerHa:
      "Imam Husayn ibn Ali (AS) shi ne Imam na uku a tsarin Imamai goma sha biyu na Imamiyya. Rayuwarsa da tsayuwarsa a Karbala sun zama muhimmin bangare na tarihin Ahlul Bayt da koyarwar sadaukarwa, adalci da kin amincewa da zalunci.",
    answerEn:
      "Imam Husayn ibn Ali (AS) is the third Imam in Twelver Shi'a belief. His stand at Karbala is a major part of Ahlul Bayt history and is associated with sacrifice, justice, and resistance to oppression.",
    tags: ["Imam Husayn", "Karbala", "Ashura"],
  },

  {
    id: "quran",
    category: "Qur'an",
    title: "📖 Qur'ani da Tafsir / Qur'an and Tafsir",
    keywords: [
      "qurani",
      "quran",
      "qur'an",
      "tafsir",
      "aya",
      "ayat",
      "fassarar qurani",
      "fassarar quran",
      "menene qurani",
      "menene quran",
      "what is quran",
      "what is tafsir",
      "quran tafsir",
    ],
    answerHa:
      "Qur'ani shi ne littafin Allah da aka saukar wa Annabi Muhammad (SAW). Tafsir yana nufin nazari da bayanin ma'anoni da darussan ayoyin Qur'ani. A Muntazar AI, ya kamata a bambanta tsakanin rubutun aya, fassara, da tafsirin malamai.",
    answerEn:
      "The Qur'an is the revealed Book of Allah given to Prophet Muhammad (SAW). Tafsir refers to the study and explanation of the meanings and lessons of Qur'anic verses. Muntazar AI distinguishes the Qur'anic text itself from translations and scholarly interpretations.",
    tags: ["Qur'an", "Tafsir", "Aya"],
  },

  {
    id: "hadith",
    category: "Hadith",
    title: "📚 Menene Hadith? / What is Hadith?",
    keywords: [
      "hadith",
      "hadisi",
      "menene hadith",
      "menene hadisi",
      "riwaya",
      "ruwaya",
      "sunnah",
      "what is hadith",
      "what is a hadith",
      "hadith meaning",
      "what is riwaya",
    ],
    answerHa:
      "Hadith ko riwaya magana ce, aiki, ko amincewa da aka danganta ga Annabi (SAW), ko kuma a wasu taraddun ilimi ga wasu jagororin addini. Binciken hadith yana bukatar a duba source, isnad, matn, da yadda malamai suka tantance riwayar.",
    answerEn:
      "A hadith or riwayah is a report attributed to the Prophet (SAW), or in some scholarly traditions to other religious authorities. Hadith research requires examining the source, chain of transmission (isnad), text (matn), and scholarly evaluation.",
    tags: ["Hadith", "Riwaya", "Isnad"],
  },

  {
    id: "source-verification",
    category: "Source Verification",
    title: "🔍 Source Verification / Tantance Madogara",
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
      "what is source verification",
      "verify hadith",
      "hadith authenticity",
    ],
    answerHa:
      "Source verification yana nufin binciken inda wata magana ko hadisi ya fito, littafin da ya kawo shi, isnad dinsa, matn dinsa, da hukuncin masana a kansa. Kasancewar magana a cikin wani littafi kadai ba ya nufin cewa dukkan malamai sun dauke ta a matsayin sahihiya.",
    answerEn:
      "Source verification means investigating where a statement or hadith comes from, the book that records it, its chain of transmission, its text, and how scholars have evaluated it. The mere presence of a report in a book does not by itself mean that all scholars consider it authentic.",
    tags: ["Verification", "Hadith", "Sources"],
  },

  {
    id: "knowledge-base",
    category: "Muntazar AI",
    title: "🤖 Menene Knowledge Base? / What is a Knowledge Base?",
    keywords: [
      "knowledge base",
      "menene knowledge base",
      "database",
      "bayanan muntazar",
      "yadda muntazar ke aiki",
      "yaya muntazar yake aiki",
      "muntazar ai",
      "menene muntazar ai",
      "what is knowledge base",
      "how does muntazar ai work",
    ],
    answerHa:
      "Knowledge Base ita ce tarin bayanan da aka shirya domin Muntazar AI ya iya nemo bayanin da ya dace da tambayar mai amfani. Wannan ita ce tushen bayanan da tsarin zai yi amfani da shi wajen gina amsa.",
    answerEn:
      "A Knowledge Base is a structured collection of information that Muntazar AI can search to find material relevant to a user's question. It provides the factual material that the AI can use when generating an answer.",
    tags: ["Muntazar AI", "Knowledge Base", "Local"],
  },
];

/**
 * Normalize text so that:
 * "Ahlul Bayt"
 * "ahlulbait"
 * "Ahlul-Bayt"
 *
 * can be treated similarly during search.
 */
function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\u0600-\u06ff]/g, "");
}

/**
 * Find knowledge related to the user's question.
 *
 * This is still retrieval, not the final AI generation.
 * The next step will connect this retrieved knowledge
 * to an AI model.
 */
export function findKnowledgeItem(
  question: string
): KnowledgeItem | null {
  const normalizedQuestion = normalize(question);

  if (!normalizedQuestion) {
    return null;
  }

  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      const normalizedKeyword = normalize(keyword);

      if (
        normalizedKeyword &&
        normalizedQuestion.includes(normalizedKeyword)
      ) {
        return item;
      }
    }
  }

  return null;
}

/**
 * Detect whether the user is more likely using Hausa or English.
 *
 * This is only a simple detector for now.
 * The AI language detection will come later.
 */
export function detectLanguage(
  question: string
): "ha" | "en" {
  const normalized = question.toLowerCase();

  const hausaWords = [
    "menene",
    "waye",
    "su waye",
    "yaya",
    "me yasa",
    "ina",
    "yaushe",
    "wane",
    "wace",
    "akan",
    "game da",
    "fassara",
    "bayani",
    "hadisi",
    "qurani",
    "imamai",
  ];

  const englishWords = [
    "what",
    "who",
    "where",
    "when",
    "why",
    "how",
    "which",
    "about",
    "explain",
    "tell",
    "meaning",
    "hadith",
    "quran",
    "imam",
  ];

  let hausaScore = 0;
  let englishScore = 0;

  for (const word of hausaWords) {
    if (normalized.includes(word)) {
      hausaScore++;
    }
  }

  for (const word of englishWords) {
    if (normalized.includes(word)) {
      englishScore++;
    }
  }

  return hausaScore > englishScore ? "ha" : "en";
}