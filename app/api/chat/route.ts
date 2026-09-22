import { NextResponse } from "next/server";
import { askMuntazarAI } from "../../../../lib/ai";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body?.message;
    const language = body?.language || "ha";

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

    const result = await askMuntazarAI(
      message,
      language
    );

    return NextResponse.json({
      ok: true,
      answer: result.answer,
      language: result.language,
    });
  } catch (error) {
    console.error("Muntazar AI error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "An samu matsala wajen samun amsa.",
      },
      {
        status: 500,
      }
    );
  }
}