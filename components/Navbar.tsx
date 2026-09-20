"use client";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-white/10 bg-[#071f19]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-around px-4 py-3">
        <button className="text-center text-sm text-[#d6b56a]">
          <div className="text-xl">🏠</div>
          Home
        </button>

        <button className="text-center text-sm text-gray-400">
          <div className="text-xl">🔎</div>
          Research
        </button>

        <button className="text-center text-sm text-gray-400">
          <div className="text-xl">📚</div>
          Library
        </button>

        <button className="text-center text-sm text-gray-400">
          <div className="text-xl">👤</div>
          Profile
        </button>
      </div>
    </nav>
  );
}