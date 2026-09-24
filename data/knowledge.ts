import { NextResponse } from "next/server";
import { findKnowledgeItem } from "../../../data/knowledge";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body?.message;
    const language = body?.language || "ha";

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

    const result = findKnowledgeItem(message);

    if (result) {
      return NextResponse.json({
        ok: true,
        answer: `${result.title}\n\n${result.answer}`,
        language,
        mode: "local-knowledge",
        category: result.category,
        topic: result.id,
      });
    }

    return NextResponse.json({
      ok: true,
      answer: `🌙 Muntazar AI — Local Knowledge Mode

Na karɓi tambayarka:

"${message}"

A yanzu ban sami takamaiman bayanin wannan tambayar a Knowledge Base ba.

Za ka iya tambaya game da:

🌙 Mahdawiyya
🕌 Ahlul Bayt (AS)
📚 Imamat
📖 Hadith
📖 Qur'ani da Tafsir
🔍 Source Verification

Muna ci gaba da faɗaɗa Knowledge Base ɗin Muntazar AI.`,
      language,
      mode: "local-knowledge",
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
export function findKnowledgeItem(
  question: string
): KnowledgeItem | null {
  const normalizedQuestion = question.toLowerCase().trim();

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