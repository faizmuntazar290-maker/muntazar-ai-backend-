"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");

  const askMuntazar = () => {
    if (!question.trim()) return;

    alert("Tambayarka ta shiga Muntazar AI: " + question);
  };

  return (
    <main className="min-h-screen bg-[#071f19] text-white">
      <div className="mx-auto max-w-6xl px-5 py-8">

        {/* Header */}
        <header className="mb-10 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#d6b56a]">
              🌙 Muntazar AI
            </h1>

            <p className="mt-2 text-sm text-gray-300">
              Ilmi • Hujja • Intizar
            </p>
          </div>

          <div className="rounded-full border border-[#d6b56a]/30 px-4 py-2 text-sm">
            Hausa
          </div>
        </header>

        {/* Welcome */}
        <section className="mb-8">
          <h2 className="text-3xl font-bold">
            Assalamu Alaikum
          </h2>

          <p className="mt-3 max-w-2xl text-gray-300">
            Muntazar AI mataimaki ne na ilimi da bincike
            kan Ahlul Bayt (AS), Mahdawiyya, Qur’ani,
            Hadith da tarihin Musulunci.
          </p>
        </section>

        {/* Ask AI */}
        <section className="mb-10 rounded-3xl border border-[#d6b56a]/20 bg-[#0b2a22] p-5 shadow-xl">
          <h3 className="mb-4 text-lg font-semibold">
            🤖 Tambayi Muntazar AI
          </h3>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Rubuta tambayarka..."
              className="flex-1 rounded-2xl border border-white/10 bg-[#071f19] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-[#d6b56a]"
            />

            <button
              onClick={askMuntazar}
              className="rounded-2xl bg-[#d6b56a] px-7 py-4 font-bold text-[#071f19] transition hover:opacity-90"
            >
              Aika
            </button>
          </div>
        </section>

        {/* Features */}
        <section>
          <h3 className="mb-5 text-xl font-bold">
            Bincike da Koyo
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <Feature
              icon="🌙"
              title="Mahdawiyya"
              description="Koyi game da Imam Mahdi (AJ), Ghayba, Intizar da al'amuran Mahdawiyya."
            />

            <Feature
              icon="🕌"
              title="Ahlul Bayt"
              description="Bincike kan rayuwa, koyarwa da tarihin Ahlul Bayt (AS)."
            />

            <Feature
              icon="📖"
              title="Qur’an & Tafsir"
              description="Binciken ayoyi, ma'anoni da bayanin tafsiri."
            />

            <Feature
              icon="📚"
              title="Hadith Research"
              description="Nemo Hadith tare da source, isnad, grading da bayanin masana."
            />

            <Feature
              icon="🔍"
              title="Source Verification"
              description="Duba tushen magana da matsayin ingancinsa."
            />

            <Feature
              icon="⚖️"
              title="Compare Sources"
              description="Kwatanta bayanai daga mabambantan majiyoyi cikin tsari."
            />

          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          Muntazar AI — Ilmi • Hujja • Intizar
        </footer>

      </div>
    </main>
  );
}

function Feature({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0b2a22] p-5 transition hover:border-[#d6b56a]/40">
      <div className="mb-4 text-3xl">
        {icon}
      </div>

      <h4 className="mb-2 text-lg font-bold">
        {title}
      </h4>

      <p className="text-sm leading-6 text-gray-400">
        {description}
      </p>
    </div>
  );
}
