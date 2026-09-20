"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  async function askMuntazar() {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          language: "ha",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An samu matsala.");
      }

      setAnswer(data.answer);
    } catch (error) {
      setAnswer(
        error instanceof Error
          ? error.message
          : "An samu matsala wajen samun amsa."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#071f19] px-5 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        <header className="mb-10">
          <h1 className="text-4xl font-bold text-[#d6b56a]">
            🌙 Muntazar AI
          </h1>

          <p className="mt-2 text-gray-300">
            Ilmi • Hujja • Intizar
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-bold">
            Assalamu Alaikum
          </h2>

          <p className="mt-3 max-w-2xl text-gray-300">
            Muntazar AI mataimaki ne na ilimi da bincike
            kan Ahlul Bayt (AS), Imam Mahdi (AJ),
            Mahdawiyya, Qur'ani, Hadith da tarihin Musulunci.
          </p>
        </section>

        <section className="rounded-3xl border border-[#d6b56a]/20 bg-[#0b2a22] p-6">

          <h3 className="mb-4 text-xl font-bold">
            🤖 Tambayi Muntazar AI
          </h3>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Rubuta tambayarka a nan..."
            className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-[#071f19] p-5 text-white outline-none placeholder:text-gray-500 focus:border-[#d6b56a]"
          />

          <button
            onClick={askMuntazar}
            disabled={loading}
            className="mt-4 rounded-2xl bg-[#d6b56a] px-7 py-4 font-bold text-[#071f19] disabled:opacity-50"
          >
            {loading ? "Ana tunani..." : "Aika Tambaya"}
          </button>

          {answer && (
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#071f19] p-5">
              <h4 className="mb-3 font-bold text-[#d6b56a]">
                Muntazar AI
              </h4>

              <p className="whitespace-pre-wrap leading-7 text-gray-200">
                {answer}
              </p>
            </div>
          )}

        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          <Card
            icon="🌙"
            title="Mahdawiyya"
            text="Bincike kan Imam Mahdi (AJ) da Mahdawiyya."
          />

          <Card
            icon="🕌"
            title="Ahlul Bayt"
            text="Koyo game da Ahlul Bayt (AS)."
          />

          <Card
            icon="📖"
            title="Qur'an & Tafsir"
            text="Binciken ayoyi da tafsiri."
          />

          <Card
            icon="📚"
            title="Hadith"
            text="Bincike kan Hadith da majiyoyi."
          />

          <Card
            icon="🔍"
            title="Source Verification"
            text="Duba tushen bayanai da ingancinsu."
          />

          <Card
            icon="⚖️"
            title="Compare Sources"
            text="Kwatanta bayanai daga mabambantan majiyoyi."
          />

        </section>

        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          Muntazar AI — Ilmi • Hujja • Intizar
        </footer>

      </div>
    </main>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b2a22] p-5">
      <div className="mb-3 text-3xl">{icon}</div>

      <h3 className="mb-2 text-lg font-bold">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-400">
        {text}
      </p>
    </div>
  );
}