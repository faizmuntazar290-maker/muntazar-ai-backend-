import { NextResponse } from "next/server";
import {
  findKnowledgeItem,
  detectLanguage,
} from "../../../data/knowledge";

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

    const question = message.trim();

    // Detect the user's language.
    const detectedLanguage = detectLanguage(question);

    // Search the Knowledge Base.
    const result = findKnowledgeItem(question);

    // If relevant knowledge is found.
    if (result) {
      const answer =
        detectedLanguage === "ha"
          ? result.answerHa
          : result.answerEn;

      return NextResponse.json({
        ok: true,
        answer: answer,
        language: detectedLanguage,
        mode: "knowledge-base",
        category: result.category,
        topic: result.id,
        title: result.title,
        tags: result.tags,
      });
    }

    // If nothing is found.
    const fallbackHa = `
🌙 Muntazar AI

Na fahimci tambayarka:

"${question}"

Amma ban sami bayanin wannan tambayar a Knowledge Base ba tukuna.

Za ka iya tambaya game da:

🌙 Mahdawiyya
🕌 Ahlul Bayt (AS)
📚 Imamat
📖 Hadith
📖 Qur'ani da Tafsir
🔍 Source Verification

Muna ci gaba da faɗaɗa Knowledge Base na Muntazar AI.
`;

    const fallbackEn = `
🌙 Muntazar AI

I understood your question:

"${question}"

However, I could not find relevant information for this question in the Knowledge Base yet.

You can ask about:

🌙 Mahdawiyya
🕌 Ahlul Bayt (AS)
📚 Imamat
📖 Hadith
📖 Qur'an and Tafsir
🔍 Source Verification

We are continuing to expand the Muntazar AI Knowledge Base.
`;

    return NextResponse.json({
      ok: true,
      answer:
        detectedLanguage === "ha"
          ? fallbackHa.trim()
          : fallbackEn.trim(),
      language: detectedLanguage,
      mode: "knowledge-base",
      category: "General",
      topic: "not-found",
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