import { NextResponse } from "next/server";

/*
  MUNTAZAR AI
  LOCAL KNOWLEDGE ENGINE

  Wannan version ba ya amfani da OpenAI API.
  Yana aiki da Local Knowledge Base.

  Later:
  Za mu iya haɗa database + RAG + real AI API.
*/

type KnowledgeItem = {
  keywords: string[];
  title: string;
  answer: string;
};

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ");
}

function containsKeyword(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => text.includes(keyword));
}

/*
  LOCAL KNOWLEDGE BASE
*/

const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: [
      "mahdawiyya",
      "mahdi",
      "imam mahdi",
      "imam zaman",
      "imamuz zaman",
      "imam zamani",
    ],
    title: "🌙 Menene Mahdawiyya?",
    answer: `Mahdawiyya wani fanni ne na akida da binciken Musulunci da ya shafi Imam Mahdi (AJ), imamatinsa, rayuwarsa, Ghayba, bayyanarsa, alamomin bayyanarsa, da nauyin masu jiran bayyanarsa.

A cikin nazarin Mahdawiyya ana duba abubuwa kamar:

• Imam Mahdi (AJ)
• Imamat
• Ghaybat al-Sughra
• Ghaybat al-Kubra
• Intizarul Faraj
• Ayyukan Muntazir
• Alamomin bayyanar Imam Mahdi
• Adalci da gyaran al'umma
• Hadith da Qur'ani
• Tarihin Mahdawiyya
• Ra'ayoyin malaman Musulunci

Muhimmin abu shi ne a rarrabe tsakanin abin da yake da ingantaccen source, abin da aka rawaito, da abin da yake ra'ayin wani malami.

⚠️ Wannan amsa daga Local Knowledge Base ce. Ba zan ƙirƙiri hadisi ko source da ba a tabbatar da shi ba.`,
  },

  {
    keywords: [
      "menene intizar",
      "menene intizarul faraj",
      "intizar",
      "intizarul faraj",
      "jiran imam mahdi",
      "jiran mahdi",
      "muntazir",
      "muntazirin",
    ],
    title: "🌙 Menene Intizar?",
    answer: `Intizar yana nufin jira da tsammani, amma a mahallin Mahdawiyya ba kawai zama ana jira ba ne.

Intizar yana haɗuwa da:

1. Gyaran kai.
2. Ilimi.
3. Kyawawan halaye.
4. Adalci.
5. Yin ibada.
6. Taimakon mutane.
7. Gujewa zalunci.
8. Shirya kai ta fuskar ilimi da akhlaq.
9. Fatan bayyanar Imam Mahdi (AJ).
10. Yin aiki domin kyautata al'umma.

Saboda haka, Muntazir ba mutum ne da yake jiran abin da zai faru kawai ba; yana ƙoƙarin gyara kansa da aikinsa yayin jiran Faraj.

⚠️ Wannan Local Knowledge Base ce.`,
  },

  {
    keywords: [
      "ahlul bayt",
      "ahlulbayt",
      "ahl al bayt",
      "ahlu bait",
      "ahlul bait",
    ],
    title: "🕌 Su waye Ahlul Bayt?",
    answer: `Ahlul Bayt kalma ce da ake amfani da ita wajen magana game da iyalan gidan Annabi Muhammad (SAW).

A cikin al'adun Shi'a, Ahlul Bayt suna da muhimmiyar alaƙa da koyarwar Imamat, musamman:

• Imam Ali (AS)
• Sayyida Fatima (SA)
• Imam Hasan (AS)
• Imam Husayn (AS)
• Da zuriyar Imam Husayn (AS) har zuwa Imam Mahdi (AJ)

Ahlul Bayt suna da muhimmiyar matsayi a ilimin Musulunci, tarihin Musulunci, hadith, tafsir da akhlaq.

A Muntazar AI, za mu bambanta tsakanin:
• Qur'ani
• Hadith
• Tarihin da aka rawaito
• Fassara
• Sharhin malamai

⚠️ Idan tambaya ta bukaci specific hadith, za mu nemi ingantaccen source maimakon ƙirƙirar reference.`,
  },

  {
    keywords: [
      "imam ali",
      "ali ibn abi talib",
      "ali bin abi talib",
      "imam ali as",
    ],
    title: "🕌 Imam Ali (AS)",
    answer: `Imam Ali ibn Abi Talib (AS) yana daga cikin manyan mutane a tarihin Musulunci.

A cikin koyarwar Shi'a, Imam Ali (AS) shi ne Imam na farko daga cikin Imamai goma sha biyu.

Nazarin rayuwarsa ya haɗa da:

• Ilimi
• Adalci
• Ibada
• Jarumtaka
• Akhlaq
• Khilafa
• Nahj al-Balagha
• Tarihin Ahlul Bayt
• Imamat

Muntazar AI zai iya ware rayuwar Imam Ali (AS) zuwa tarihi, hadith, akhlaq da koyarwar Imamat.`,
  },

  {
    keywords: [
      "imam husayn",
      "imam hussain",
      "husayn ibn ali",
      "hussain ibn ali",
      "karbala",
      "ashura",
      "ashura",
    ],
    title: "🕌 Imam Husayn (AS)",
    answer: `Imam Husayn ibn Ali (AS) shi ne Imam na uku a cikin Imaman goma sha biyu a koyarwar Shi'a.

Rayuwarsa da shahadarsa a Karbala suna da muhimmiyar matsayi a tarihin Musulunci.

Nazarin Imam Husayn (AS) ya haɗa da:

• Karbala
• Ashura
• Adalci
• Tsayuwa kan gaskiya
• Hakuri
• Shahada
• Ayyukan Ahlul Bayt
• Darussan akhlaq

Karbala ba tarihi kawai ba ce; ana kuma nazarinta ta fuskar darussan akhlaq, adalci da tsayuwa kan gaskiya.`,
  },

  {
    keywords: [
      "imamat",
      "imam",
      "imama",
      "imamah",
      "menene imamat",
      "menene imama",
    ],
    title: "📚 Menene Imamat?",
    answer: `Imamat yana nufin jagoranci ko shugabanci na addini.

A cikin koyarwar Shi'a Imamiyya, Imamat wani matsayi ne na musamman na jagorancin addini bayan Annabi Muhammad (SAW), kuma ana danganta shi da Imamai goma sha biyu.

Su ne:

1. Imam Ali (AS)
2. Imam Hasan (AS)
3. Imam Husayn (AS)
4. Imam Ali Zayn al-Abidin (AS)
5. Imam Muhammad al-Baqir (AS)
6. Imam Ja'far al-Sadiq (AS)
7. Imam Musa al-Kazim (AS)
8. Imam Ali al-Rida (AS)
9. Imam Muhammad al-Jawad (AS)
10. Imam Ali al-Hadi (AS)
11. Imam Hasan al-Askari (AS)
12. Imam Muhammad al-Mahdi (AJ)

A Muntazar AI za mu kuma bambanta yadda mazhabobin Musulunci suke bayyana ma'anar Imamat da hujjarsu.`,
  },

  {
    keywords: [
      "ghayba",
      "ghaiba",
      "gaiba",
      "ghaybat",
      "ghaybat al kubra",
      "ghaybat al sughra",
      "boye",
      "ɓoye",
    ],
    title: "🌙 Menene Ghayba?",
    answer: `Ghayba tana nufin ɓoyuwar Imam Mahdi (AJ) daga bayyanar jama'a.

A koyarwar Imamiyya ana magana ne musamman game da:

• Ghaybat al-Sughra — ƙaramar Ghayba
• Ghaybat al-Kubra — babbar Ghayba

A lokacin Ghaybat al-Sughra, ana danganta sadarwa da Imam Mahdi (AJ) da wakilai na musamman.

Bayan wannan lokaci aka shiga Ghaybat al-Kubra, wadda ake fahimta a matsayin babban lokacin Ghayba.

Wannan batu yana da cikakken tarihin da ya kamata a bincika daga sources na tarihi da hadith.`,
  },

  {
    keywords: [
      "hadith",
      "hadisi",
      "hadis",
      "hadeeth",
      "menene hadith",
      "menene hadisi",
    ],
    title: "📖 Menene Hadith?",
    answer: `Hadith rahoto ne da ya shafi magana, aiki, ko amincewar Annabi (SAW), ko kuma a wasu al'adun hadith rahotannin Ahlul Bayt da Imamai.

A binciken hadith, ba a isa kawai a ce "akwai hadisin" ba.

Ana iya duba:

• Isnad
• Matn
• Littafin da ya kawo hadisin
• Marubuci
• Volume
• Page
• Hadith number
• Matsayin isnad
• Ra'ayin malaman hadith
• Bambancin riwayoyi

Muhimmin ka'ida a Muntazar AI:

"An kawo hadisi a littafi" ba lallai yana nufin "hadisin sahihi ne."

Saboda haka Source Verification yana da muhimmiyar rawa.`,
  },

  {
    keywords: [
      "quran",
      "qur'an",
      "kur'ani",
      "kurani",
      "aya",
      "ayat",
      "tafsir",
      "menene quran",
    ],
    title: "📖 Qur'ani da Tafsir",
    answer: `Qur'ani shi ne littafin Allah a Musulunci.

Tafsir kuwa bincike ne da sharhi kan ma'anoni da abin da ayoyin Qur'ani suke nufi.

A Muntazar AI, tsarin Qur'an & Tafsir zai iya haɗa:

• Surah
• Ayah
• Arabic text
• Fassarar Hausa
• Tafsir
• Asbab al-Nuzul
• Cross references
• Topics
• Sources

Muhimmiyar ka'ida ita ce kada a ƙirƙiri aya ko a danganta wata magana ga Qur'ani ba tare da tabbatarwa ba.`,
  },

  {
    keywords: [
      "source",
      "sources",
      "reference",
      "references",
      "madogara",
      "mashigar",
      "tushen",
      "hujja",
      "source verification",
      "tabbatar da source",
    ],
    title: "🔍 Source Verification",
    answer: `Source Verification yana nufin bincika inda wata magana ta fito da kuma matsayin source ɗin.

Misali, idan an kawo hadisi, ana iya bincika:

1. Wane littafi ya kawo shi?
2. Wane marubuci ne?
3. Wane volume?
4. Wane page?
5. Wane hadith number?
6. Mene ne isnad?
7. Shin akwai wasu riwayoyi?
8. Me malaman hadith suka ce?
9. Shin akwai sabani kan ingancinsa?

Muntazar AI zai tsara wannan domin kada amsa ta dogara kawai da "an ce".`,
  },

  {
    keywords: [
      "muntazar ai",
      "menene muntazar ai",
      "muntazar",
      "app",
      "application",
    ],
    title: "🤖 Muntazar AI",
    answer: `Muntazar AI mataimakin ilimi ne da ake ginawa domin bincike da koyo musamman a fannoni kamar:

🌙 Mahdawiyya
🕌 Ahlul Bayt (AS)
📖 Qur'ani da Tafsir
📚 Hadith
🔍 Source Verification
⚖️ Kwatanta sources
🎓 Study Mode
🌐 Hausa, Arabic da English

Manufar tsarin ita ce:

Tambaya
↓
Neman bayanai
↓
Source Verification
↓
Bayani
↓
References

A yanzu muna amfani da Local Knowledge Engine saboda ba mu haɗa paid AI API ba.`,
  },

  {
    keywords: [
      "salamu alaikum",
      "assalamu alaikum",
      "salam alaikum",
      "salam",
      "sannu",
      "hello",
      "hi",
      "barka",
    ],
    title: "🌙 Barka da zuwa",
    answer: `Wa alaikumus salam wa rahmatullahi wa barakatuh 🌙

Barka da zuwa Muntazar AI.

Ilmi • Hujja • Intizar

Za ka iya tambaya game da:

• Imam Mahdi (AJ)
• Mahdawiyya
• Ahlul Bayt (AS)
• Imamat
• Ghayba
• Intizar
• Hadith
• Qur'ani da Tafsir
• Tarihin Musulunci
• Source Verification`,
  },
];

/*
  FIND BEST LOCAL ANSWER
*/

function findKnowledgeAnswer(message: string): KnowledgeItem | null {
  const normalized = normalizeText(message);

  let bestMatch: KnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    let score = 0;

    for (const keyword of item.keywords) {
      const normalizedKeyword = normalizeText(keyword);

      if (normalized.includes(normalizedKeyword)) {
        /*
          Longer keywords get higher scores.
          Example:
          "imam mahdi" > "mahdi"
        */
        score += normalizedKeyword.length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch;
}

/*
  GENERAL LOCAL RESPONSE
*/

function createGeneralResponse(message: string): string {
  return `🌙 Muntazar AI — Local Knowledge Mode

Na fahimci tambayarka:

"${message}"

A yanzu ban sami takamaiman topic ɗin wannan tambayar a Local Knowledge Base ba.

Za ka iya tambaya game da:

🌙 Mahdawiyya
• Menene Mahdawiyya?
• Menene Intizar?
• Wane ne Imam Mahdi?

🕌 Ahlul Bayt
• Su waye Ahlul Bayt?
• Wanene Imam Ali?
• Wanene Imam Husayn?

📚 Imamat
• Menene Imamat?
• Su waye Imamai goma sha biyu?

🌙 Ghayba
• Menene Ghayba?
• Menene Ghaybat al-Sughra?
• Menene Ghaybat al-Kubra?

📖 Hadith
• Menene Hadith?
• Yaya ake tantance hadisi?

📖 Qur'ani
• Menene Tafsir?
• Yaya ake binciken aya?

🔍 Sources
• Menene Source Verification?
• Yaya ake tabbatar da reference?

⚠️ Wannan Local Knowledge Mode ne. Za mu ci gaba da faɗaɗa Knowledge Base ɗin Muntazar AI.`,
}

/*
  API POST
*/

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body?.message;

    if (
      !message ||
      typeof message !== "string" ||
      !message.trim()
    ) {
      return NextResponse.json(
        {
          ok: false,
          error: "Tambaya babu komai.",
        },
        {
          status: 400,
        }
      );
    }

    const knowledge = findKnowledgeAnswer(message);

    const answer = knowledge
      ? `${knowledge.title}\n\n${knowledge.answer}`
      : createGeneralResponse(message);

    return NextResponse.json({
      ok: true,
      answer,
      language: body?.language || "ha",
      mode: "local-knowledge",
      topic: knowledge?.title || "general",
    });
  } catch (error) {
    console.error("Muntazar AI Local API Error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "An samu matsala wajen karɓar tambayar.",
      },
      {
        status: 500,
      }
    );
  }
}