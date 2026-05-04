import React, { useState } from "react";

function Proposal() {
  const [accepted, setAccepted] = useState(false);

  const moveButton = (e) => {
    const btn = e.target;
    const parent = btn.parentElement;

    const maxX = parent.clientWidth - btn.offsetWidth;
    const maxY = parent.clientHeight - btn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = x + "px";
    btn.style.top = y + "px";
  };

  return (
    <div className="container">
      {!accepted ? (
        <>
          <img src="/ss.png" alt="Laxmi" className="profile-img" />

          <h1>Hey Laxmi ji 😊</h1>

          <p className="main-text">
            Shayad humne zyada baat nahi ki hai ab tak...  
            Par tu mujhe achhi lagti hai as a person 🙂  
            Socha aaj seedha puch hi leta hoon...
          </p>

          <h3>Will you be my friend? 🤝</h3>

          <div className="buttons">
            <button className="yes" onClick={() => setAccepted(true)}>
              Yes 😊
            </button>

            <button
              className="no"
              onMouseEnter={moveButton}
              onTouchStart={moveButton}
            >
              No 😅
            </button>
          </div>
        </>
      ) : (
        <div className="success-card">
          <img src="/ss.png" alt="Laxmi" className="profile-img big-img" />

          <h1>Yayyy Laxmi! 🎉</h1>

          <p className="love-text">
            Ab officially hum dost hain 😄  
            Aur mujhe khushi hai ki maine aaj ye pucha 🤝
          </p>

          <p className="tagline">
            New Friendship Started ✨  
            Simple • Real • Honest 😊
          </p>
        </div>
      )}
    </div>
  );
}

export default Proposal;