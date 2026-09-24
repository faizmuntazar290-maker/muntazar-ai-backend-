import { NextResponse } from "next/server";

function localMuntazarAnswer(message: string): string {
  const q = message.toLowerCase().trim();

  if (
    q.includes("imam mahdi") ||
    q.includes("imam zaman") ||
    q.includes("mahdi")
  ) {
    return `🌙 Muntazar AI — Local Demo

Imam Mahdi (AJ) yana daga cikin manyan batutuwan Mahdawiyya.

A wannan Demo version, muna gina tsarin Muntazar AI ne domin taimakawa wajen:
• Fahimtar Imamat
• Nazarin Imam Mahdi (AJ)
• Mahdawiyya da Intizar
• Hadith da Qur'ani
• Tarihin Ahlul Bayt (AS)
• Binciken sources

⚠️ Wannan amsar Local Demo ce. Ba ta amfani da OpenAI API a yanzu, saboda haka kada a ɗauki wannan amsar a matsayin binciken ƙarshe ko hujjar hadisi.

Za mu ƙara Source Verification da Hadith Database a mataki na gaba.`;
  }

  if (
    q.includes("ahlul bayt") ||
    q.includes("ahlulbayt") ||
    q.includes("imam ali") ||
    q.includes("imam husayn") ||
    q.includes("imam hussain")
  ) {
    return `🕌 Muntazar AI — Ahlul Bayt (AS)

Ahlul Bayt suna da muhimmiyar matsayi a tarihin Musulunci da koyarwar addini.

Muntazar AI zai taimaka wajen nazarin:
• Imam Ali (AS)
• Imam Hasan (AS)
• Imam Husayn (AS)
• sauran Imaman Ahlul Bayt (AS)
• Sayyida Fatima (SA)
• Tarihi
• Hadith
• Akhlaq
• Imamat

⚠️ Wannan Local Demo ce kawai. Domin samun cikakkiyar hujja, za mu haɗa sahihan source da database a mataki na gaba.`;
  }

  if (
    q.includes("hadith") ||
    q.includes("hadisi") ||
    q.includes("hadeeth")
  ) {
    return `📖 Muntazar AI — Hadith Research

Tsarin Muntazar AI zai iya taimakawa wajen binciken hadisi ta:

1. Sunan littafi
2. Marubuci
3. Volume
4. Page
5. Hadith number
6. Isnad
7. Arabic text
8. Fassarar Hausa
9. Matsayin hadisin
10. Ra'ayoyin malamai

⚠️ A wannan Local Demo ba zan ƙirƙiri hadisi ko source ba. Za mu haɗa Hadith Database domin tabbatar da references.`;
  }

  if (
    q.includes("qur'an") ||
    q.includes("quran") ||
    q.includes("aya") ||
    q.includes("tafsir")
  ) {
    return `📖 Muntazar AI — Qur'an & Tafsir

Za mu iya tsara tsarin bincike na Qur'ani kamar haka:

• Surah
• Ayah
• Arabic text
• Fassarar Hausa
• Tafsir
• Topic
• Cross references
• Sources

⚠️ Wannan Local Demo ce. Ba zan ƙirƙiri ayar Qur'ani ko attribution na tafsir ba tare da source ba.`;
  }

  if (
    q.includes("intizar") ||
    q.includes("muntazir") ||
    q.includes("jir")
  ) {
    return `🌙 Intizar — Muntazar AI

Intizar yana nufin jiran abin da ake sa ran zuwansa tare da shirye-shiryen da suka dace.

A tsarin Muntazar AI, za mu nazarci:

• Ilimi
• Akhlaq
• Ibadah
• Adalci
• Hakuri
• Shirye-shiryen kai
• Fahimtar Mahdawiyya

Wannan Local Demo ce; daga baya za mu haɗa hujjoji da references.`;
  }

  if (
    q.includes("assalamu") ||
    q.includes("salam") ||
    q.includes("hello") ||
    q.includes("sannu")
  ) {
    return `Wa alaikumus salam wa rahmatullahi wa barakatuh 🌙

Barka da zuwa Muntazar AI.

Ilmi • Hujja • Intizar

A wannan Local Demo za ka iya gwada tambayoyi kan:
• Imam Mahdi (AJ)
• Ahlul Bayt (AS)
• Mahdawiyya
• Hadith
• Qur'ani da Tafsir
• Tarihin Musulunci`;
  }

  return `🌙 Muntazar AI — Local Demo

Na karɓi tambayarka:

"${message}"

A yanzu Muntazar AI yana cikin Local Demo Mode, saboda ba mu haɗa paid AI API ba.

Za mu iya amfani da wannan tsarin wajen gina:
• Mahdawiyya
• Ahlul Bayt (AS)
• Hadith Research
• Qur'an & Tafsir
• Source Verification
• Hausa / Arabic / English

⚠️ Wannan amsa ce ta Demo; ba amsar AI mai zurfin bincike ba ce.

Mataki na gaba shi ne mu ƙara Knowledge Base domin Muntazar AI ya fara bada amsoshi daga bayanan da muka tanada.`;
}

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

    const answer = localMuntazarAnswer(message);

    return NextResponse.json({
      ok: true,
      answer,
      language: "ha",
      mode: "local-demo",
    });
  } catch (error) {
    console.error("Local Muntazar AI error:", error);

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