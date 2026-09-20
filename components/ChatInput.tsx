"use client";

import { useState } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          language: "ha",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "An samu matsala.");
      }

      setAnswer(data.answer);
      setMessage("");
    } catch (error) {
      setAnswer("An samu matsala wajen samun amsa.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tambayi Muntazar AI..."
          className="flex-1 rounded-2xl border border-white/10 bg-[#071f19] px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-[#d6b56a]"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-2xl bg-[#d6b56a] px-7 py-4 font-bold text-[#071f19] disabled:opacity-50"
        >
          {loading ? "Ana tunani..." : "Aika"}
        </button>
      </form>

      {answer && (
        <div className="rounded-2xl border border-white/10 bg-[#0b2a22] p-5">
          <h3 className="mb-3 font-bold text-[#d6b56a]">
            🤖 Muntazar AI
          </h3>

          <p className="whitespace-pre-wrap leading-7 text-gray-200">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}