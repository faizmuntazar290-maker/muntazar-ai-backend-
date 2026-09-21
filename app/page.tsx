"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");

  const askAI = () => {
    if (!question.trim()) return;

    alert("Tambayarka: " + question);
  };

  return (
    <main className="app">
      {/* Background decoration */}
      <div className="glow glowOne" />
      <div className="glow glowTwo" />

      {/* Header */}
      <header className="header">
        <div className="brand">
          <div className="logo">☾</div>

          <div>
            <h1>Muntazar AI</h1>
            <p>Ilmi • Hujja • Intizar</p>
          </div>
        </div>

        <button className="language">HA</button>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="badge">
          <span>✦</span>
          Islamic Research Assistant
        </div>

        <h2>
          Assalamu Alaikum
          <br />
          <span>Barka da zuwa Muntazar AI</span>
        </h2>

        <p>
          Mataimakinka na ilimi da bincike kan Ahlul Bayt (AS),
          Mahdawiyya, Qur&apos;ani, Hadith da tarihin Musulunci.
        </p>
      </section>

      {/* AI Search */}
      <section className="aiBox">
        <div className="aiTitle">
          <div className="aiIcon">✦</div>

          <div>
            <h3>Tambayi Muntazar AI</h3>
            <span>Tambaya • Bincike • Ilimi</span>
          </div>
        </div>

        <div className="searchBox">
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                askAI();
              }
            }}
            placeholder="Me kake son ka bincika?"
          />

          <button onClick={askAI}>
            <span>➤</span>
          </button>
        </div>

        <div className="suggestions">
          <button onClick={() => setQuestion("Waye Imam Mahdi (AJ)?")}>
            Imam Mahdi
          </button>

          <button onClick={() => setQuestion("Menene Mahdawiyya?")}>
            Mahdawiyya
          </button>

          <button onClick={() => setQuestion("Bincika Hadith")}>
            Hadith
          </button>
        </div>
      </section>

      {/* Main Features */}
      <section className="section">
        <div className="sectionHeader">
          <div>
            <span className="smallLabel">EXPLORE</span>
            <h3>Bincike da Koyo</h3>
          </div>

          <button className="seeAll">Duba duka →</button>
        </div>

        <div className="cards">

          <FeatureCard
            icon="☾"
            title="Mahdawiyya"
            description="Koyi game da Imam Mahdi (AJ), Ghayba, Intizar da alamomin zuwan mai ceto."
            large
          />

          <FeatureCard
            icon="🕌"
            title="Ahlul Bayt"
            description="Bincike kan rayuwa, koyarwa da tarihin Ahlul Bayt (AS)."
          />

          <FeatureCard
            icon="📖"
            title="Qur'an & Tafsir"
            description="Binciken ayoyi, ma'anoni da tafsiri."
          />

          <FeatureCard
            icon="📚"
            title="Hadith Research"
            description="Nemo Hadith tare da source, isnad da grading."
          />

          <FeatureCard
            icon="🔎"
            title="Source Verification"
            description="Duba tushen magana da matsayin ingancinsa."
          />

          <FeatureCard
            icon="⚖️"
            title="Compare Sources"
            description="Kwatanta bayanai daga mabambantan majiyoyi."
          />

        </div>
      </section>

      {/* Research Banner */}
      <section className="researchBanner">
        <div className="researchIcon">🔎</div>

        <div>
          <span>RESEARCH MODE</span>
          <h3>Bincike mai zurfi</h3>
          <p>
            Nemo hujjoji, sources da bayanan malamai cikin tsari.
          </p>
        </div>

        <button>→</button>
      </section>

      {/* Bottom Navigation */}
      <nav className="bottomNav">
        <NavItem icon="⌂" label="Home" active />
        <NavItem icon="⌕" label="Research" />
        <NavItem icon="▣" label="Library" />
        <NavItem icon="●" label="Profile" />
      </nav>

      <footer>
        <div>☾ Muntazar AI</div>
        <span>Ilmi • Hujja • Intizar</span>
      </footer>

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #041712;
          color: #ffffff;
          font-family:
            Inter,
            Arial,
            Helvetica,
            sans-serif;
        }

        button,
        input {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .app {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 50% -10%,
              rgba(38, 133, 105, 0.25),
              transparent 35%
            ),
            #041712;
          padding: 24px 18px 110px;
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(80px);
          pointer-events: none;
          opacity: 0.18;
        }

        .glowOne {
          width: 180px;
          height: 180px;
          background: #0e9f77;
          top: 220px;
          right: -80px;
        }

        .glowTwo {
          width: 150px;
          height: 150px;
          background: #d6b56a;
          top: 650px;
          left: -100px;
        }

        .header {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          font-size: 27px;
          color: #071f19;
          background: linear-gradient(
            135deg,
            #e6ca82,
            #b58b3c
          );
          box-shadow: 0 8px 30px rgba(214, 181, 106, 0.2);
        }

        .brand h1 {
          margin: 0;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.3px;
        }

        .brand p {
          margin: 3px 0 0;
          color: #829b92;
          font-size: 11px;
        }

        .language {
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #d6b56a;
          border-radius: 999px;
          padding: 9px 13px;
          font-size: 12px;
          font-weight: 700;
        }

        .hero {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 58px auto 30px;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 1px solid rgba(214,181,106,0.2);
          background: rgba(214,181,106,0.07);
          color: #d6b56a;
          padding: 8px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
        }

        .hero h2 {
          margin: 18px 0 12px;
          font-size: clamp(34px, 8vw, 58px);
          line-height: 1.05;
          letter-spacing: -1.8px;
        }

        .hero h2 span {
          color: #d6b56a;
        }

        .hero p {
          max-width: 650px;
          color: #8fa69f;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        .aiBox {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 35px auto 55px;
          padding: 20px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 25px;
          background: linear-gradient(
            145deg,
            rgba(13,49,40,0.96),
            rgba(7,31,25,0.96)
          );
          box-shadow: 0 20px 60px rgba(0,0,0,0.25);
        }

        .aiTitle {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .aiIcon {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          color: #071f19;
          background: #d6b56a;
          font-weight: 900;
        }

        .aiTitle h3 {
          margin: 0;
          font-size: 16px;
        }

        .aiTitle span {
          display: block;
          margin-top: 3px;
          color: #718b82;
          font-size: 11px;
        }

        .searchBox {
          display: flex;
          gap: 8px;
          padding: 7px;
          background: #041712;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
        }

        .searchBox input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: white;
          padding: 12px;
        }

        .searchBox input::placeholder {
          color: #536b64;
        }

        .searchBox button {
          width: 46px;
          height: 46px;
          border: 0;
          border-radius: 14px;
          color: #071f19;
          background: #d6b56a;
          font-weight: 900;
          transition: transform .2s;
        }

        .searchBox button:hover {
          transform: scale(1.05);
        }

        .suggestions {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 12px;
        }

        .suggestions button {
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.035);
          color: #91a9a1;
          border-radius: 999px;
          padding: 7px 11px;
          font-size: 11px;
        }

        .section {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: auto;
        }

        .sectionHeader {
          display: flex;
          align-items: end;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .smallLabel {
          color: #648078;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .sectionHeader h3 {
          margin: 5px 0 0;
          font-size: 22px;
        }

        .seeAll {
          border: 0;
          background: transparent;
          color: #d6b56a;
          font-size: 11px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .featureCard {
          min-height: 180px;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 22px;
          padding: 18px;
          background: rgba(10,39,31,0.88);
          transition:
            transform .2s,
            border-color .2s;
        }

        .featureCard:hover {
          transform: translateY(-4px);
          border-color: rgba(214,181,106,0.3);
        }

        .featureCard.large {
          grid-column: span 2;
          min-height: 190px;
          background:
            linear-gradient(
              135deg,
              rgba(20,76,61,0.9),
              rgba(8,37,29,0.95)
            );
        }

        .cardIcon {
          width: 45px;
          height: 45px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(214,181,106,0.1);
          color: #d6b56a;
          font-size: 22px;
          margin-bottom: 22px;
        }

        .featureCard h4 {
          margin: 0 0 8px;
          font-size: 15px;
        }

        .featureCard p {
          margin: 0;
          color: #7e9790;
          font-size: 11px;
          line-height: 1.7;
        }

        .researchBanner {
          max-width: 1100px;
          margin: 28px auto;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px;
          border: 1px solid rgba(214,181,106,0.14);
          border-radius: 22px;
          background: rgba(214,181,106,0.05);
        }

        .researchIcon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: rgba(214,181,106,0.1);
        }

        .researchBanner div:nth-child(2) {
          flex: 1;
        }

        .researchBanner span {
          color: #d6b56a;
          font-size: 9px;
          letter-spacing: 1.5px;
          font-weight: 800;
        }

        .researchBanner h3 {
          margin: 3px 0;
          font-size: 15px;
        }

        .researchBanner p {
          margin: 0;
          color: #718981;
          font-size: 10px;
        }

        .researchBanner button {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          background: rgba(255,255,255,0.04);
          color: #d6b56a;
        }

        .bottomNav {
          position: fixed;
          z-index: 20;
          left: 50%;
          bottom: 14px;
          transform: translateX(-50%);
          width: calc(100% - 28px);
          max-width: 550px;
          display: flex;
          justify-content: space-around;
          padding: 9px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 22px;
          background: rgba(5,24,19,0.94);
          backdrop-filter: blur(18px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
        }

        .navItem {
          border: 0;
          background: transparent;
          color: #5f7770;
          min-width: 65px;
          padding: 5px;
          border-radius: 15px;
          font-size: 10px;
        }

        .navItem.active {
          color: #d6b56a;
          background: rgba(214,181,106,0.08);
        }

        .navIcon {
          font-size: 19px;
          display: block;
          margin-bottom: 2px;
        }

        footer {
          max-width: 1100px;
          margin: 45px auto 0;
          text-align: center;
          color: #4e665f;
          font-size: 10px;
        }

        footer span {
          display: block;
          margin-top: 5px;
          color: #384f48;
        }

        @media (min-width: 700px) {
          .app {
            padding-left: 35px;
            padding-right: 35px;
          }

          .cards {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .featureCard.large {
            grid-column: span 2;
          }
        }

      `}</style>
    </main>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  large = false,
}: {
  icon: string;
  title: string;
  description: string;
  large?: boolean;
}) {
  return (
    <div className={`featureCard ${large ? "large" : ""}`}>
      <div className="cardIcon">{icon}</div>

      <h4>{title}</h4>

      <p>{description}</p>
    </div>
  );
}

function NavItem({
  icon,
  label,
  active = false,
}: {
  icon: string;
  label: string;
  active?: boolean;
}) {
  return (
    <button className={`navItem ${active ? "active" : ""}`}>
      <span className="navIcon">{icon}</span>
      {label}
    </button>
  );
}