import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
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
Kai ne Muntazar AI, mataimakin ilimi da bincike kan:
- Ahlul Bayt (AS)
- Imam Mahdi (AJ)
- Mahdawiyya
- Qur'ani da Tafsir
- Hadith
- Tarihin Musulunci
- Akhlaq

Ka fi amfani da harshen Hausa idan language = "ha".

Muhimmin tsarin amsa:
1. Kada ka ƙirƙiri hadith, ayah, source, page, hadith number, isnad ko maganar malami.
2. Ka bambanta tsakanin source, translation, explanation da scholarly interpretation.
3. Idan sahihancin source bai tabbata ba, ka bayyana hakan.
4. Ka ba da amsa cikin nutsuwa, ilimi da girmama mabambantan ra'ayoyin malamai.
`,
    input: message,
  });

  return {
    answer: response.output_text,
    language,
  };
}