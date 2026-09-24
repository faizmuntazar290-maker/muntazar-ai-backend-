import { NextResponse } from "next/server";

type KnowledgeItem = {
  keywords: string[];
  title: string;
  answer: string;
};

const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: [
      "mahdawiyya",
      "mahdi",
      "imam mahdi",
      "imam zaman",
      "imamuz zaman",
    ],
    title: "🌙 Menene Mahdawiyya?",
    answer: `Mahdawiyya fanni ne na binciken Musulunci da ya shafi Imam Mahdi (AJ), imamatinsa, Ghayba, bayyanarsa, alamomin bayyanarsa, da nauyin masu jiran bayyanarsa.

A cikin nazarin Mahdawiyya ana duba:

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

⚠️ Wannan amsa ce daga Local Knowledge Base. Ba a amfani da OpenAI API.`,
  },

  {
    keywords: [
      "intizar",
      "intizarul faraj",
      "muntazir",
      "muntazirin",
      "jiran imam mahdi",
      "jiran mahdi",
    ],
    title: "🌙 Menene Intizar?",
    answer: `Intizar yana nufin jira da tsammani. A mahallin Mahdawiyya, Intizar ba zama kawai ana jira ba ne.

Yana haɗuwa da:

• Gyaran kai
• Ilimi
• Kyawawan halaye
• Ibada
• Adalci
• Hakuri
• Taimakon mutane
• Gujewa zalunci
• Shirya kai ta fuskar ilimi da akhlaq

Muntazir yana ƙoƙarin gyara kansa da aikinsa yayin jiran Faraj.`,
  },

  {
    keywords: [
      "ahlul bayt",
      "ahlulbayt",
      "ahl al bayt",
      "ahlul bait",
    ],
    title: "🕌 Su waye Ahlul Bayt?",
    answer: `Ahlul Bayt suna da muhimmiyar matsayi a tarihin Musulunci da koyarwar addini.

A cikin koyarwar Shi'a Imamiyya, ana danganta Ahlul Bayt da:

• Imam Ali (AS)
• Sayyida Fatima (SA)
• Imam Hasan (AS)
• Imam Husayn (AS)
• Zuriyar Imam Husayn (AS) har zuwa Imam Mahdi (AJ)

Nazarin Ahlul Bayt ya haɗa da Qur'ani, Hadith, Tarihi, Akhlaq da Imamat.`,
  },

  {
    keywords: [
      "imam ali",
      "ali ibn abi talib",
      "ali bin abi talib",
    ],
    title: "🕌 Imam Ali (AS)",
    answer: `Imam Ali ibn Abi Talib (AS) yana daga cikin manyan mutane a tarihin Musulunci.

A koyarwar Shi'a Imamiyya, Imam Ali (AS) shi ne Imam na farko daga cikin Imamai goma sha biyu.

Ana nazarin rayuwarsa ta fannoni kamar:

• Ilimi
• Adalci
• Ibada
• Jarumtaka
• Akhlaq
• Khilafa
• Nahj al-Balagha
• Imamat`,
  },

  {
    keywords: [
      "imam husayn",
      "imam hussain",
      "husayn ibn ali",
      "hussain ibn ali",
      "karbala",
      "ashura",
    ],
    title: "🕌 Imam Husayn (AS)",
    answer: `Imam Husayn ibn Ali (AS) shi ne Imam na uku a cikin Imaman goma sha biyu a koyarwar Shi'a Imamiyya.

Rayuwarsa da abin da ya faru a Karbala suna da muhimmiyar matsayi a tarihin Musulunci.

Ana nazarin:

• Karbala
• Ashura
• Adalci
• Tsayuwa kan gaskiya
• Hakuri
• Shahada
• Akhlaq`,
  },

  {
    keywords: [
      "imamat",
      "imama",
      "imamah",
      "menene imamat",
      "menene imama",
    ],
    title: "📚 Menene Imamat?",
    answer: `Imamat yana nufin jagoranci ko shugabanci na addini.

A cikin koyarwar Shi'a Imamiyya, Imamat wani matsayi ne na jagorancin addini bayan Annabi Muhammad (SAW), kuma ana danganta shi da Imamai goma sha biyu.

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
12. Imam Muhammad al-Mahdi (AJ)`,
  },

  {
    keywords: [
      "ghayba",
      "ghaiba",
      "gaiba",
      "ghaybat",
      "ghaybat al kubra",
      "ghaybat al sughra",
    ],
    title: "🌙 Menene Ghayba?",
    answer: `Ghayba tana nufin ɓoyuwar Imam Mahdi (AJ) daga bayyanar jama'a.

A koyarwar Imamiyya ana magana musamman game da:

• Ghaybat al-Sughra
• Ghaybat al-Kubra

Ghaybat al-Sughra ita ce ƙaramar Ghayba, sannan Ghaybat al-Kubra ita ce babbar Ghayba.

Wannan batu yana buƙatar nazarin tarihi da riwayoyi daga sources daban-daban.`,
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

A binciken hadith ana duba:

• Isnad
• Matn
• Littafin da ya kawo hadisin
• Marubuci
• Volume
• Page
• Hadith number
• Matsayin isnad
• Ra'ayoyin malaman hadith

Muhimmin abu shi ne: kasancewar wani hadisi a cikin littafi ba lallai yana nufin cewa dukkan malamai sun ɗauke shi a matsayin sahihi ba.`,
  },

  {
    keywords: [
      "quran",
      "qur'an",
      "kurani",
      "kur'ani",
      "aya",
      "ayat",
      "tafsir",
    ],
    title: "📖 Qur'ani da Tafsir",
    answer: `Qur'ani shi ne littafin Allah a Musulunci.

Tafsir kuwa bincike da sharhi ne kan ma'anoni da abin da ayoyin Qur'ani suke nufi.

A Muntazar AI za mu iya tsara binciken Qur'ani da:

• Surah
• Ayah
• Arabic text
• Fassarar Hausa
• Tafsir
• Asbab al-Nuzul
• Topics
• Cross references
• Sources

Ba za mu ƙirƙiri aya ko mu danganta magana ga Qur'ani ba tare da tabbatarwa ba.`,
  },

  {
    keywords: [
      "source",
      "sources",
      "reference",
      "references",
      "madogara",
      "tushen",
      "hujja",
      "source verification",
      "tabbatar da source",
    ],
    title: "🔍 Source Verification",
    answer: `Source Verification yana nufin bincika inda wata magana ta fito da matsayin source ɗin.

Misali idan an kawo hadisi, ana iya bincika:

1. Wane littafi ya kawo shi?
2. Wane marubuci ne?
3. Wane volume?
4. Wane page?
5. Wane hadith number?
6. Mene ne isnad?
7. Shin akwai wasu riwayoyi?
8. Me malaman hadith suka ce?
9. Shin akwai sabani kan ingancinsa?

Muntazar AI zai yi amfani da wannan tsarin domin rage yiwuwar kawo bayanan da ba a tabbatar ba.`,
  },

  {
    keywords: [
      "muntazar ai",
      "menene muntazar ai",
      "muntazar",
    ],
    title: "🤖 Muntazar AI",
    answer: `Muntazar AI mataimakin ilimi da bincike ne da ake ginawa domin:

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
      "salam",
      "sannu",
      "hello",
      "hi",
      "barka",
      "assalamu alaikum",
      "salamu alaikum",
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

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[’‘]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\s+/g, " ");
}

function findAnswer(message: string): KnowledgeItem | null {
  const question = normalizeText(message);

  let bestMatch: KnowledgeItem | null = null;
  let bestScore = 0;

  for (const item of knowledgeBase) {
    let score = 0;

    for (const keyword of item.keywords) {
      const key = normalizeText(keyword);

      if (question.includes(key)) {
        score += key.length;
      }
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch;
}

function generalAnswer(message: string): string {
  return `🌙 Muntazar AI — Local Knowledge Mode

Na karɓi tambayarka:

"${message}"

A yanzu ban sami takamaiman bayanin wannan tambayar a Local Knowledge Base ba.

Za ka iya tambaya game da:

🌙 Mahdawiyya
🕌 Ahlul Bayt
📚 Imamat
🌙 Ghayba
📖 Hadith
📖 Qur'ani da Tafsir
🔍 Source Verification

⚠️ Wannan Local Knowledge Mode ne. Za mu ci gaba da faɗaɗa Knowledge Base ɗin Muntazar AI.`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body?.message;

    if (
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

    const matched = findAnswer(message);

    const answer = matched
      ? `${matched.title}\n\n${matched.answer}`
      : generalAnswer(message);

    return NextResponse.json({
      ok: true,
      answer,
      language: body?.language || "ha",
      mode: "local-knowledge",
      topic: matched?.title || "general",
    });
  } catch (error) {
    console.error("Muntazar AI error:", error);

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