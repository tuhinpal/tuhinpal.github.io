"use client"
import { useState, useEffect, useRef } from "react";

const QUESTIONS = [
  { id: 1, text: "Favourite hobby", points: 5, type: "text", category: "easy" },
  { id: 2, text: "Favourite dessert", points: 5, type: "text", category: "easy" },
  { id: 3, text: "Favourite weather", points: 5, type: "text", category: "easy" },
  { id: 4, text: "Favourite snack", points: 5, type: "text", category: "easy" },
  { id: 5, text: "Favourite city", points: 5, type: "text", category: "easy" },
  { id: 6, text: "Comfort food", points: 10, type: "text", category: "medium" },
  { id: 7, text: "City you were born in", points: 10, type: "text", category: "medium" },
  { id: 8, text: "Childhood nickname", points: 10, type: "text", category: "medium" },
  { id: 9, text: "First mobile phone", points: 10, type: "text", category: "medium" },
  { id: 10, text: "First solo trip", points: 10, type: "text", category: "medium" },
  { id: 11, text: "An outfit you love the most", points: 15, type: "text", category: "hard" },
  { id: 12, text: "Your childhood dream job", points: 15, type: "text", category: "hard" },
  { id: 13, text: "A subject in school you never liked", points: 15, type: "text", category: "hard" },
  { id: 14, text: "A personal possession you value a lot", points: 15, type: "text", category: "hard" },
  { id: 15, text: "Coffee or Chai?", points: 5, type: "choice", options: ["Coffee", "Chai"], category: "quick" },
  { id: 16, text: "Beaches or Mountains?", points: 5, type: "choice", options: ["Beaches", "Mountains"], category: "quick" },
  { id: 17, text: "Dogs or Cats?", points: 5, type: "choice", options: ["Dogs", "Cats"], category: "quick" },
  { id: 18, text: "Movies or TV Shows?", points: 5, type: "choice", options: ["Movies", "TV Shows"], category: "quick" },
  { id: 19, text: "Roti or Rice?", points: 5, type: "choice", options: ["Roti", "Rice"], category: "quick" },
  { id: 20, text: "Your biggest pet peeve", points: 20, type: "text", category: "bonus" },
  { id: 21, text: "Your ideal way to relax", points: 20, type: "text", category: "bonus" },
];

const MAX_SCORE = QUESTIONS.reduce((s, q) => s + q.points, 0);
const catColors = { easy: "#7ed6df", medium: "#f6a623", hard: "#e74c6f", quick: "#a29bfe", bonus: "#fd79a8" };
const catLabels = { easy: "Easy", medium: "Medium", hard: "Hard", quick: "Quick Fire", bonus: "Bonus" };

function encodeData(name, partnerName, answers) {
  const data = { n: name, p: partnerName, a: answers };
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}
function decodeData(encoded) {
  try { return JSON.parse(decodeURIComponent(escape(atob(encoded)))); } catch { return null; }
}

function ProgressRing({ progress, size = 100 }) {
  const r = (size - 8) / 2, circ = 2 * Math.PI * r, offset = circ - progress * circ;
  return (
    <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(231,76,111,0.12)" strokeWidth="6" />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="#e74c6f" strokeWidth="6"
        strokeDasharray={circ} strokeDashoffset={offset} strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(.4,0,.2,1)" }} />
    </svg>
  );
}

export default function PartnerQuiz() {
  const [phase, setPhase] = useState("loading");
  const [myName, setMyName] = useState("");
  const [partnerName, setPartnerName] = useState("");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [inputVal, setInputVal] = useState("");
  const [animating, setAnimating] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [verifyData, setVerifyData] = useState(null);
  const [verdicts, setVerdicts] = useState({});
  const [verifyDone, setVerifyDone] = useState(false);
  const [verifyQ, setVerifyQ] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const d = params.get("d");
    if (d) {
      const decoded = decodeData(d);
      if (decoded) { setVerifyData(decoded); setPhase("verify_intro"); return; }
    }
    setPhase("intro");
  }, []);

  useEffect(() => {
    if (phase === "playing" && inputRef.current) inputRef.current.focus();
  }, [currentQ, phase]);

  const handleAnswer = (val) => {
    if (animating) return;
    const q = QUESTIONS[currentQ];
    const newAnswers = { ...answers, [q.id]: val };
    setAnswers(newAnswers);
    setAnimating(true);
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(currentQ + 1);
        setInputVal("");
      } else {
        const encoded = encodeData(myName, partnerName, newAnswers);
        const base = window.location.origin + window.location.pathname;
        setShareLink(`${base}?d=${encoded}`);
        setPhase("share");
      }
      setAnimating(false);
    }, 350);
  };

  const handleTextSubmit = () => { if (inputVal.trim()) handleAnswer(inputVal.trim()); };

  const handleVerdict = (qId, correct) => {
    setVerdicts(prev => ({ ...prev, [qId]: correct }));
    setTimeout(() => {
      if (verifyQ < QUESTIONS.length - 1) setVerifyQ(verifyQ + 1);
      else setVerifyDone(true);
    }, 300);
  };

  const calcScore = () => QUESTIONS.reduce((s, q) => s + (verdicts[q.id] ? q.points : 0), 0);

  const getVerdict = (pct) => {
    if (pct >= 80) return { emoji: "🔥", title: "Soulmates!", sub: "They know you inside out!" };
    if (pct >= 60) return { emoji: "💕", title: "Adorable!", sub: "They really pay attention" };
    if (pct >= 40) return { emoji: "😊", title: "Getting there!", sub: "Not bad, but room to grow" };
    if (pct >= 20) return { emoji: "🤔", title: "Hmm...", sub: "Time for more deep conversations?" };
    return { emoji: "😅", title: "Uh oh!", sub: "Do they even know you?!" };
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
  };

  if (phase === "loading") return <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/></div>;

  // ─── INTRO ───
  if (phase === "intro") return (
    <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/>
      <div style={{ ...S.screen, justifyContent: "center", textAlign: "center" }}>
        <div style={{ animation: "floatIn 0.8s ease-out" }}>
          <div style={{ fontSize: 60, marginBottom: 8 }}>💑</div>
          <h1 style={S.mainTitle}>How Well Do You<br/><span style={{ color: "#e74c6f", fontStyle: "italic" }}>Really</span> Know<br/>Your Partner?</h1>
          <p style={S.subtitle}>Answer 21 questions about your partner.<br/>Then share the link and let them judge!</p>
          <button style={S.primaryBtn} onClick={() => setPhase("setup")}>Let's Play →</button>
          <p style={{ fontSize: 12, color: "#b0a090", marginTop: 24, fontFamily: "'Caveat', cursive" }}>Inspired by the Blinkit packaging game</p>
        </div>
      </div>
    </div>
  );

  // ─── SETUP ───
  if (phase === "setup") return (
    <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/>
      <div style={{ ...S.screen, justifyContent: "center", textAlign: "center" }}>
        <div style={{ animation: "floatIn 0.6s ease-out", width: "100%", maxWidth: 380 }}>
          <div style={{ fontSize: 44, marginBottom: 12 }}>✏️</div>
          <h2 style={S.sectionTitle}>Who's playing?</h2>
          <div style={{ marginTop: 24 }}>
            <label style={S.label}>Your name</label>
            <input style={S.input} placeholder="Enter your name..." value={myName}
              onChange={e => setMyName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && document.getElementById("p2input")?.focus()} />
          </div>
          <div style={{ marginTop: 16 }}>
            <label style={S.label}>Your partner's name</label>
            <input id="p2input" style={S.input} placeholder="Enter their name..." value={partnerName}
              onChange={e => setPartnerName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && myName.trim() && partnerName.trim() && setPhase("playing")} />
          </div>
          <button style={{ ...S.primaryBtn, marginTop: 28, opacity: myName.trim() && partnerName.trim() ? 1 : 0.4 }}
            disabled={!myName.trim() || !partnerName.trim()} onClick={() => setPhase("playing")}>
            Start Answering
          </button>
        </div>
      </div>
    </div>
  );

  // ─── PLAYING ───
  if (phase === "playing") {
    const q = QUESTIONS[currentQ];
    return (
      <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/>
        <div style={S.screen}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: 8 }}>
            <span style={{ fontSize: 18, color: "#b0a090", fontFamily: "'Caveat', cursive" }}>About {partnerName}</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#8d7b6a" }}>{currentQ + 1}/{QUESTIONS.length}</span>
          </div>
          <div style={{ width: "100%", height: 4, background: "rgba(231,76,111,0.1)", borderRadius: 2, marginBottom: 28 }}>
            <div style={{ width: `${(currentQ / QUESTIONS.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #e74c6f, #f6a623)", borderRadius: 2, transition: "width 0.5s ease" }} />
          </div>
          <div key={q.id} style={{ ...S.questionCard, animation: animating ? "slideOut 0.3s ease-in" : "slideIn 0.4s ease-out" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: catColors[q.category], textTransform: "uppercase", letterSpacing: 1.5 }}>{catLabels[q.category]}</span>
              <span style={{ fontSize: 11, background: catColors[q.category], color: "#fff", padding: "2px 8px", borderRadius: 10, fontWeight: 700 }}>{q.points} pts</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: "#3d2c1e", margin: "8px 0 4px", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.3 }}>
              {q.text.replace(/\byou\b/gi, partnerName).replace(/\byour\b/gi, partnerName + "'s")}
            </h2>
            <p style={{ fontSize: 13, color: "#a08e7a" }}>What would <strong>{partnerName}</strong> say?</p>
          </div>
          {q.type === "text" ? (
            <div style={{ width: "100%", marginTop: 24 }}>
              <input ref={inputRef} style={S.answerInput} placeholder="Type your answer..." value={inputVal}
                onChange={e => setInputVal(e.target.value)} onKeyDown={e => e.key === "Enter" && handleTextSubmit()} />
              <button style={{ ...S.primaryBtn, width: "100%", marginTop: 12, opacity: inputVal.trim() ? 1 : 0.4 }}
                disabled={!inputVal.trim()} onClick={handleTextSubmit}>Next →</button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: 12, width: "100%", marginTop: 24 }}>
              {q.options.map(opt => (
                <button key={opt} style={S.choiceBtn} onClick={() => handleAnswer(opt)}>{opt}</button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // ─── SHARE ───
  if (phase === "share") return (
    <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/>
      <div style={{ ...S.screen, justifyContent: "center", textAlign: "center" }}>
        <div style={{ animation: "floatIn 0.6s ease-out", width: "100%", maxWidth: 400 }}>
          <div style={{ fontSize: 52, marginBottom: 8 }}>🎉</div>
          <h2 style={S.sectionTitle}>All done!</h2>
          <p style={S.subtitle}>Now share this link with <strong style={{ color: "#e74c6f" }}>{partnerName}</strong> so they can judge your answers!</p>
          <div style={{ background: "#fff", border: "2px solid #e8ddd0", borderRadius: 14, padding: "14px 16px", wordBreak: "break-all", fontSize: 11, color: "#8d7b6a", textAlign: "left", marginBottom: 16, maxHeight: 100, overflow: "auto", lineHeight: 1.5 }}>
            {shareLink}
          </div>
          <button style={{ ...S.primaryBtn, width: "100%" }} onClick={copyLink}>
            {copied ? "✓ Copied!" : "📋 Copy Link to Share"}
          </button>
          <p style={{ fontSize: 13, color: "#b0a090", marginTop: 20, lineHeight: 1.6 }}>
            Your answers are embedded in the link — no login or database needed!
          </p>
        </div>
      </div>
    </div>
  );

  // ─── VERIFY INTRO ───
  if (phase === "verify_intro" && verifyData) return (
    <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/>
      <div style={{ ...S.screen, justifyContent: "center", textAlign: "center" }}>
        <div style={{ animation: "floatIn 0.8s ease-out" }}>
          <div style={{ fontSize: 56, marginBottom: 8 }}>💌</div>
          <h1 style={{ ...S.mainTitle, fontSize: 30 }}>Hey {verifyData.p}!</h1>
          <p style={S.subtitle}>
            <strong style={{ color: "#e74c6f" }}>{verifyData.n}</strong> thinks they know you really well.<br/>Let's find out!
          </p>
          <p style={{ fontSize: 14, color: "#a08e7a", marginBottom: 28 }}>
            You'll see their answer to each question.<br/>Mark it ✓ correct or ✗ wrong.
          </p>
          <button style={S.primaryBtn} onClick={() => setPhase("verifying")}>Let's See →</button>
        </div>
      </div>
    </div>
  );

  // ─── VERIFYING ───
  if (phase === "verifying" && verifyData && !verifyDone) {
    const q = QUESTIONS[verifyQ];
    const theirAnswer = verifyData.a[q.id] || "—";
    const already = verdicts[q.id] !== undefined;
    return (
      <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/>
        <div style={S.screen}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", marginBottom: 8 }}>
            <span style={{ fontSize: 18, color: "#b0a090", fontFamily: "'Caveat', cursive" }}>{verifyData.n}'s guesses</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#8d7b6a" }}>{verifyQ + 1}/{QUESTIONS.length}</span>
          </div>
          <div style={{ width: "100%", height: 4, background: "rgba(231,76,111,0.1)", borderRadius: 2, marginBottom: 28 }}>
            <div style={{ width: `${(verifyQ / QUESTIONS.length) * 100}%`, height: "100%", background: "linear-gradient(90deg, #e74c6f, #f6a623)", borderRadius: 2, transition: "width 0.5s ease" }} />
          </div>
          <div key={q.id} style={{ ...S.questionCard, animation: already ? "slideOut 0.3s ease-in" : "slideIn 0.4s ease-out" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <span style={{ fontSize: 11, fontWeight: 700, color: catColors[q.category], textTransform: "uppercase", letterSpacing: 1.5 }}>{catLabels[q.category]}</span>
              <span style={{ fontSize: 11, background: catColors[q.category], color: "#fff", padding: "2px 8px", borderRadius: 10, fontWeight: 700 }}>{q.points} pts</span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#3d2c1e", margin: "8px 0 16px", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.3 }}>
              {q.text}
            </h2>
            <div style={{ background: "linear-gradient(135deg, #fdf6ee, #fef0e8)", border: "2px solid #f0e2d0", borderRadius: 12, padding: "16px 18px", textAlign: "center" }}>
              <p style={{ fontSize: 11, color: "#b0a090", marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>{verifyData.n} said:</p>
              <p style={{ fontSize: 24, fontWeight: 800, color: "#e74c6f", fontFamily: "'Playfair Display', Georgia, serif", margin: 0 }}>"{theirAnswer}"</p>
            </div>
          </div>
          <p style={{ fontSize: 14, color: "#8d7b6a", marginTop: 20, marginBottom: 12 }}>Is that correct?</p>
          <div style={{ display: "flex", gap: 12, width: "100%" }}>
            <button style={{ ...S.choiceBtn, borderColor: "#27ae60", color: "#27ae60", fontWeight: 800, fontSize: 17 }}
              onClick={() => handleVerdict(q.id, true)}>✓ Correct</button>
            <button style={{ ...S.choiceBtn, borderColor: "#e74c6f", color: "#e74c6f", fontWeight: 800, fontSize: 17 }}
              onClick={() => handleVerdict(q.id, false)}>✗ Wrong</button>
          </div>
        </div>
      </div>
    );
  }

  // ─── RESULTS ───
  if (verifyDone && verifyData) {
    const score = calcScore();
    const pct = Math.round((score / MAX_SCORE) * 100);
    const v = getVerdict(pct);
    return (
      <div style={S.wrapper}><div style={S.bg1}/><div style={S.bg2}/>
        <div style={{ ...S.screen, justifyContent: "flex-start", paddingTop: 20 }}>
          <div style={{ textAlign: "center", animation: "floatIn 0.8s ease-out", width: "100%" }}>
            <div style={{ fontSize: 52, marginBottom: 4 }}>{v.emoji}</div>
            <h2 style={{ ...S.sectionTitle, marginBottom: 2 }}>{v.title}</h2>
            <p style={{ color: "#a08e7a", fontSize: 14, marginBottom: 16 }}>{v.sub}</p>
            <div style={{ position: "relative", display: "inline-block", marginBottom: 16 }}>
              <ProgressRing progress={pct / 100} size={100} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <span style={{ fontSize: 26, fontWeight: 800, color: "#e74c6f", fontFamily: "'Playfair Display', Georgia, serif" }}>{score}</span>
                <span style={{ fontSize: 10, color: "#b0a090" }}>/ {MAX_SCORE}</span>
              </div>
            </div>
            <p style={{ fontSize: 15, color: "#8d7b6a", marginBottom: 16 }}><strong>{verifyData.n}</strong> scored <strong style={{ color: "#e74c6f" }}>{pct}%</strong></p>
            <div style={{ width: "100%", maxHeight: "50vh", overflowY: "auto", paddingRight: 4 }}>
              {QUESTIONS.map((q, i) => {
                const correct = verdicts[q.id];
                const theirAnswer = verifyData.a[q.id] || "—";
                return (
                  <div key={q.id} style={{
                    ...S.resultRow, borderLeft: `3px solid ${correct ? "#27ae60" : "#e74c6f"}`,
                    animation: `floatIn 0.4s ease-out`, animationDelay: `${i * 0.04}s`, animationFillMode: "both",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                      <span style={{ fontSize: 12, fontWeight: 700, color: "#8d7b6a" }}>{q.text}</span>
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 8,
                        background: correct ? "#27ae6018" : "#e74c6f18", color: correct ? "#27ae60" : "#e74c6f",
                      }}>{correct ? `+${q.points}` : "+0"}</span>
                    </div>
                    <div style={{ fontSize: 14, color: "#5a4a3a", background: "rgba(0,0,0,0.03)", padding: "6px 10px", borderRadius: 6 }}>
                      "{theirAnswer}" <span style={{ marginLeft: 4 }}>{correct ? "✓" : "✗"}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

const S = {
  wrapper: { position: "relative", width: "100%", minHeight: "100vh", background: "linear-gradient(170deg, #fdf6ee 0%, #fef9f3 40%, #f9f0e5 100%)", fontFamily: "'DM Sans', sans-serif", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: 16 },
  bg1: { position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle, rgba(231,76,111,0.06) 0%, transparent 70%)", pointerEvents: "none" },
  bg2: { position: "absolute", bottom: -40, left: -40, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle, rgba(246,166,35,0.06) 0%, transparent 70%)", pointerEvents: "none" },
  screen: { position: "relative", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: 420, minHeight: "85vh", padding: "24px 20px" },
  mainTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 34, fontWeight: 800, color: "#3d2c1e", lineHeight: 1.2, marginBottom: 16 },
  sectionTitle: { fontFamily: "'Playfair Display', Georgia, serif", fontSize: 26, fontWeight: 800, color: "#3d2c1e", marginBottom: 8 },
  subtitle: { fontSize: 15, color: "#8d7b6a", lineHeight: 1.6, marginBottom: 28 },
  label: { display: "block", fontSize: 12, fontWeight: 700, color: "#a08e7a", textTransform: "uppercase", letterSpacing: 1.2, marginBottom: 6, textAlign: "left" },
  input: { width: "100%", padding: "14px 16px", border: "2px solid #e8ddd0", borderRadius: 12, fontSize: 16, fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#3d2c1e", outline: "none" },
  answerInput: { width: "100%", padding: "16px 18px", border: "2px solid #e8ddd0", borderRadius: 14, fontSize: 17, fontFamily: "'DM Sans', sans-serif", background: "#fff", color: "#3d2c1e", outline: "none" },
  primaryBtn: { display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "14px 32px", background: "linear-gradient(135deg, #e74c6f 0%, #d4385a 100%)", color: "#fff", border: "none", borderRadius: 14, fontSize: 16, fontWeight: 700, fontFamily: "'DM Sans', sans-serif", cursor: "pointer", boxShadow: "0 4px 16px rgba(231,76,111,0.25)" },
  choiceBtn: { flex: 1, padding: "18px 16px", background: "#fff", border: "2px solid #e8ddd0", borderRadius: 14, fontSize: 16, fontWeight: 700, color: "#3d2c1e", fontFamily: "'DM Sans', sans-serif", cursor: "pointer", transition: "all 0.2s" },
  questionCard: { width: "100%", background: "#fff", borderRadius: 18, padding: "24px 22px", boxShadow: "0 2px 16px rgba(61,44,30,0.06)" },
  resultRow: { background: "#fff", borderRadius: 12, padding: "12px 14px", marginBottom: 8, boxShadow: "0 1px 6px rgba(61,44,30,0.04)", textAlign: "left" },
};

const styleTag = document.createElement("style");
styleTag.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Caveat:wght@400;600&family=DM+Sans:wght@400;500;700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  @keyframes floatIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes slideIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
  @keyframes slideOut { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(-40px); } }
  input::placeholder { color: #c4b5a5; }
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-thumb { background: #ddd0c3; border-radius: 4px; }
`;
document.head.appendChild(styleTag);
