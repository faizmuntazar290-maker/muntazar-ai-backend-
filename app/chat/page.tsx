"use client";

import { useState } from "react";

type Message = {
  role: "user" | "ai";
  text: string;
};

export default function ChatPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const text = message.trim();

    if (!text || loading) return;

    // Nuna tambayar user nan take
    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text,
      },
    ]);

    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          language: "ha",
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(
          data.error || "An samu matsala wajen samun amsa."
        );
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: data.answer,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "An samu matsala wajen samun amsa. Da fatan za ka sake gwadawa.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="chatPage">
      {/* HEADER */}
      <header className="chatHeader">
        <a href="/" className="backButton">
          ←
        </a>

        <div>
          <h1>Muntazar AI</h1>
          <p>Ilmi • Hujja • Intizar</p>
        </div>

        <div className="status">
          <span></span>
          AI
        </div>
      </header>

      {/* CHAT AREA */}
      <section className="chatArea">
        {messages.length === 0 ? (
          <div className="welcome">
            <div className="bigLogo">☾</div>

            <h2>Assalamu Alaikum</h2>

            <p>
              Barka da zuwa Muntazar AI. Tambaye ni game da
              Ahlul Bayt (AS), Imam Mahdi (AJ), Qur&apos;ani,
              Hadith da tarihin Musulunci.
            </p>

            <div className="quickQuestions">
              <button
                onClick={() =>
                  setMessage("Waye Imam Mahdi (AJ)?")
                }
              >
                Waye Imam Mahdi?
              </button>

              <button
                onClick={() =>
                  setMessage("Menene Mahdawiyya?")
                }
              >
                Menene Mahdawiyya?
              </button>

              <button
                onClick={() =>
                  setMessage("Bincika wani Hadith")
                }
              >
                Bincika Hadith
              </button>
            </div>
          </div>
        ) : (
          <div className="messages">
            {messages.map((item, index) => (
              <div
                key={index}
                className={
                  item.role === "user"
                    ? "message userMessage"
                    : "message aiMessage"
                }
              >
                <div className="messageLabel">
                  {item.role === "user"
                    ? "Kai"
                    : "Muntazar AI"}
                </div>

                <div className="messageText">
                  {item.text}
                </div>
              </div>
            ))}

            {loading && (
              <div className="message aiMessage">
                <div className="messageLabel">
                  Muntazar AI
                </div>

                <div className="typing">
                  <span></span>
                  <span></span>
                  <span></span>
                  <b>Yana tunani...</b>
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* INPUT */}
      <div className="inputArea">
        <div className="inputBox">
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Rubuta tambayarka..."
            disabled={loading}
          />

          <button
            onClick={sendMessage}
            disabled={loading || !message.trim()}
          >
            {loading ? "..." : "➤"}
          </button>
        </div>

        <p className="notice">
          Muntazar AI • Ilmi • Hujja • Intizar
        </p>
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #041712;
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        button,
        input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .chatPage {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(35, 130, 100, 0.2),
              transparent 35%
            ),
            #041712;
          display: flex;
          flex-direction: column;
        }

        /* HEADER */

        .chatHeader {
          height: 72px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(5, 27, 21, 0.92);
        }

        .backButton {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #d6b56a;
          background: rgba(255, 255, 255, 0.05);
          text-decoration: none;
          font-size: 22px;
        }

        .chatHeader h1 {
          margin: 0;
          font-size: 16px;
        }

        .chatHeader p {
          margin: 3px 0 0;
          color: #718981;
          font-size: 10px;
        }

        .status {
          margin-left: auto;
          display: flex;
          align-items: center;
          gap: 6px;
          color: #7f9990;
          font-size: 10px;
        }

        .status span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #45c795;
        }

        /* CHAT */

        .chatArea {
          flex: 1;
          width: 100%;
          max-width: 900px;
          margin: auto;
          padding: 25px 18px 150px;
        }

        .welcome {
          max-width: 600px;
          margin: 70px auto;
          text-align: center;
        }

        .bigLogo {
          width: 72px;
          height: 72px;
          margin: auto;
          display: grid;
          place-items: center;
          border-radius: 23px;
          background: linear-gradient(
            135deg,
            #e6ca82,
            #b58b3c
          );
          color: #071f19;
          font-size: 38px;
          box-shadow: 0 15px 40px rgba(214, 181, 106, 0.18);
        }

        .welcome h2 {
          margin: 22px 0 10px;
          font-size: 27px;
        }

        .welcome p {
          color: #829a92;
          line-height: 1.8;
          font-size: 13px;
        }

        .quickQuestions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 8px;
          margin-top: 25px;
        }

        .quickQuestions button {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          color: #a0b5ae;
          padding: 9px 12px;
          border-radius: 999px;
          font-size: 11px;
        }

        .quickQuestions button:hover {
          border-color: rgba(214, 181, 106, 0.3);
          color: #d6b56a;
        }

        /* MESSAGES */

        .messages {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .message {
          max-width: 82%;
          padding: 14px 16px;
          border-radius: 18px;
        }

        .userMessage {
          align-self: flex-end;
          background: #174b3c;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .aiMessage {
          align-self: flex-start;
          background: #0b2b22;
          border: 1px solid rgba(255, 255, 255, 0.07);
        }

        .messageLabel {
          color: #d6b56a;
          font-size: 9px;
          font-weight: bold;
          margin-bottom: 7px;
        }

        .messageText {
          color: #d9e4e0;
          font-size: 13px;
          line-height: 1.7;
          white-space: pre-wrap;
        }

        /* TYPING */

        .typing {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #718981;
          font-size: 11px;
        }

        .typing span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d6b56a;
          animation: typing 1.2s infinite;
        }

        .typing span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing span:nth-child(3) {
          animation-delay: 0.4s;
        }

        .typing b {
          margin-left: 5px;
          font-weight: normal;
        }

        @keyframes typing {
          0%,
          60%,
          100% {
            opacity: 0.3;
            transform: translateY(0);
          }

          30% {
            opacity: 1;
            transform: translateY(-3px);
          }
        }

        /* INPUT */

        .inputArea {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 14px 18px 18px;
          background: linear-gradient(
            to top,
            #041712 70%,
            rgba(4, 23, 18, 0)
          );
        }

        .inputBox {
          max-width: 900px;
          margin: auto;
          display: flex;
          gap: 8px;
          padding: 7px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 20px;
          background: #08251e;
        }

        .inputBox input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          padding: 12px;
        }

        .inputBox input::placeholder {
          color: #536b64;
        }

        .inputBox button {
          width: 46px;
          height: 46px;
          border: 0;
          border-radius: 15px;
          background: #d6b56a;
          color: #071f19;
          font-weight: bold;
        }

        .inputBox button:disabled {
          opacity: 0.45;
          cursor: not-allowed;
        }

        .notice {
          text-align: center;
          color: #405850;
          font-size: 9px;
          margin: 8px 0 0;
        }

        @media (min-width: 700px) {
          .chatHeader {
            padding-left: 35px;
            padding-right: 35px;
          }

          .chatArea {
            padding-left: 35px;
            padding-right: 35px;
          }
        }
      `}</style>
    </main>
  );
}