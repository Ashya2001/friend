import React, { useState } from "react";

function Proposal() {
  const [accepted, setAccepted] = useState(false);

const moveButton = (e) => {
  const btn = e.target;
  const parent = btn.parentElement; // 👈 buttons container

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
          <img src="/ss.png" alt="Sweety" className="profile-img" />

          <h1>Hey Sweety ❤️</h1>
          <h2>Tu meri best friend hai... 😊</h2>

          <p className="main-text">
            Tu meri life ka sabse special part hai 💖  
            Aur aaj kuch dil se bolna hai...
          </p>

          <h3>Will you be my girlfriend? 💕</h3>

          <div className="buttons">
            <button className="yes" onClick={() => setAccepted(true)}>
              Yes 😍
            </button>

            <button
              className="no"
              onMouseEnter={moveButton}
              onTouchStart={moveButton}  // 📱 mobile ke liye
            >
              No 😅
            </button>
          </div>
        </>
      ) : (
        <div className="success-card">
          <img src="/ss.png" alt="Sweety" className="profile-img big-img" />

          <h1>Yayyy Sweety! 🎉❤️</h1>

          <p className="love-text">
            Ab tu meri girlfriend hai 😍  
            Aur ye moment mere liye sabse special hai 💖
          </p>

          <p className="tagline">
            Best friend ➝ Girlfriend ❤️  
            Perfect Story 😎✨
          </p>
        </div>
      )}
    </div>
  );
}

export default Proposal;