"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export default function ChatInput() {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!message.trim()) return;

    alert("Tambaya: " + message);

    setMessage("");
  };

  return (
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
        className="rounded-2xl bg-[#d6b56a] px-7 py-4 font-bold text-[#071f19]"
      >
        Aika
      </button>
    </form>
  );
}