import { NextResponse } from "next/server";
import { askMuntazarAI } from "@/lib/ai";

export async function POST(request: Request) {
  try {
    const { message, language = "ha" } = await request.json();

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Tambaya babu komai." },
        { status: 400 }
      );
    }

    const result = await askMuntazarAI(message, language);

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
        error: "An samu matsala wajen sarrafa tambayar.",
      },
      { status: 500 }
    );
  }
}