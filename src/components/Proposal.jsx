import React, { useState, useEffect } from "react";
import "../App.css";

const Proposal = () => {
  const [questionOpen, setQuestionOpen] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [hearts, setHearts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Trigger animation on mount
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      setHearts((prev) => [...prev, { id, x: Math.random() * 100, y: 100 }]);
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== id));
      }, 4000);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Move "No" button
  const moveButton = (e) => {
    const btn = e.target;
    const container = btn.parentElement;
    const maxX = container.clientWidth - btn.offsetWidth;
    const maxY = container.clientHeight - btn.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    setButtonPosition({ x, y });
  };

  return (
    <div className={`farewell-app ${loaded ? "loaded" : ""}`}>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{ left: `${heart.x}%`, top: `-20px` }}
        >
          ❤️
        </div>
      ))}

      <div className="farewell-container">
        {/* Header */}
        <div className="farewell-header animate-item">
          <h1 className="glow-text">✨ Aakhri Baat ✨</h1>
          <p className="subheadline">
            Shayad aaj last day ho baat karne ka... <br />
            Jaane se pehle, dil ki baat kehni hai.
          </p>
        </div>

        {/* Shiva & Aaru Row */}
        <div className="friends-row">
          {/* Shiva Card */}
          <div className="friend-card premium-card animate-item delay-1">
            <div className="avatar-glow">
              <div className="avatar">
                <span className="avatar-initial">S</span>
              </div>
            </div>
            <h2 className="friend-name">Shiva</h2>
            <div className="badge">✨ My Best Friend ✨</div>
            <p className="friend-desc">
              "Shiva sirf mera dost nahi, ek bhai jaisa hai. <br />
              Tu hamesa mere dil mein  rahega or teri yaadein mere saath."
            </p>
            <div className="friendship-line">🤝 Shiva & Ashish – Forever 🤝</div>
            <div className="friendship-line mt-2">🧑‍🤝‍🧑 Shiva & Aaru – Good Friends 🧑‍🤝‍🧑</div>
          </div>

          {/* Aaru (Sonali) Card */}
          <div className="friend-card premium-card animate-item delay-2">
            <div className="avatar-glow">
              <div className="avatar">
                <span className="avatar-initial">A</span>
              </div>
            </div>
            <h2 className="friend-name">Aaru (Sonali) 🫧</h2>
            <div className="badge">💖 Doctor | Healer 💖</div>
            <p className="friend-desc">
              "Teri hansee mein dawa hai, teri baaton mein sukoon. <br />
            Teri smile meri duniya ka sabse beautiful moment hai. 
  Tu paas ho ya door, meri har khushi mein tera naam hai."
            </p>
            <div className="friendship-line">✨ Shiva & Sonali – Good Friends ✨</div>
          </div>
        </div>

        {/* Ashish Section */}
        <div className="ashish-section animate-item delay-3">
          <div className="ashish-card premium-card">
            <div className="avatar ashish-avatar">
              <span className="avatar-initial">A</span>
            </div>
            <h2 className="ashish-name">Ashish (Main) 🤍</h2>
            <div className="badge ashish-badge">💻 IT | Tech & Emotions 💻</div>
            <p className="ashish-desc">
        "Rishte distance se nahi, feelings se bante hain. <br />
Aur meri feelings mein tum hamesha special rahoge."
            </p>
          </div>

          {/* Special Question for Sonali */}
          <div className="question-section animate-item delay-4">
            {!questionOpen ? (
              <button
                className="premium-btn ask-btn"
                onClick={() => setQuestionOpen(true)}
              >
                💌 Sonali, ek baat poochni hai? 💌
              </button>
            ) : (
              <div className="question-card glass-pop">
                {answer === null ? (
                  <>
                    <h3 className="question-text">
                      Sonali, will you be my <span className="highlight">special someone</span>? 🌸
                    </h3>
                    <div className="question-buttons">
                      <button
                        className="yes-btn"
                        onClick={() => setAnswer("accepted")}
                      >
                        Haan 😊
                      </button>
                      <button
                        className="no-btn"
                        onMouseEnter={moveButton}
                        onTouchStart={moveButton}
                        style={{
                          position: "relative",
                          left: `${buttonPosition.x}px`,
                          top: `${buttonPosition.y}px`,
                        }}
                      >
                        Sochungi 😅
                      </button>
                    </div>
                  </>
                ) : answer === "accepted" ? (
                  <div className="success-message">
                    <span className="heart-glow">❤️‍🔥</span>
                    <p>
                      Thank you Sonali! <br />
                      Ab ye farewell nahi, ek nayi shuruaat hai. 🥺✨
                    </p>
                  </div>
                ) : (
                  <div className="funny-message">
                    <p>Chalo, time hai abhi bhi... soch lo 😄</p>
                    <button
                      className="premium-btn small-btn"
                      onClick={() => setAnswer(null)}
                    >
                      Wapas poocho 💔
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Promise Button */}
          <div className="promise-area animate-item delay-5">
            <button className="premium-btn promise-btn">
              🤝 Dosti Kabhi Khatam Nahi Hoti 🤝
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="farewell-footer animate-item delay-6">
          <p>
            🌸 Shiva, Aaru – tum jaise dost milna mushkil hai. <br />
            Uper raho, main niche bhi hamesha tumhara hi rahunga. <br />
            Aur Sonali... tumhara jawab intezaar karega. 🌸
          </p>
        </div>
      </div>
    </div>
  );
};

export default Proposal;