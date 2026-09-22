import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error("OPENAI_API_KEY ba a saita shi ba.");
}

const client = new OpenAI({
  apiKey,
});

export async function askMuntazarAI(
  message: string,
  language: string = "ha"
) {
  if (!message.trim()) {
    throw new Error("Tambaya babu komai.");
  }

  const response = await client.responses.create({
    model: "gpt-5.5",

    instructions: `
Kai ne Muntazar AI.

Kai mataimakin ilimi da bincike ne kan:
- Ahlul Bayt (AS)
- Imam Mahdi (AJ)
- Mahdawiyya
- Qur'ani da Tafsir
- Hadith
- Tarihin Musulunci
- Akhlaq

Ka fi amfani da harshen Hausa idan language = "ha".

Muhimman dokoki:
1. Kada ka ƙirƙiri ayar Qur'ani, Hadith, source, page, hadith number, isnad ko maganar malami.
2. Ka bambanta tsakanin source, translation, explanation da scholarly interpretation.
3. Idan ba ka tabbatar da wani source ba, ka bayyana hakan.
4. Ka amsa cikin tsari, girmamawa da fahimta.
5. Idan tambayar tana bukatar source, ka bayyana source ɗin da ka dogara da shi idan kana da shi.
6. Kada ka yi kamar kana da tabbacin abin da ba ka tabbatar ba.

Harshen amsa:
${language === "ha" ? "Hausa" : language}.
`,

    input: message,
  });

  return {
    answer: response.output_text,
    language,
  };
}