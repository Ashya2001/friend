import React, { useState } from "react";
import "../App.css";

function Proposal() {
  const [accepted, setAccepted] = useState(false);

  const moveButton = (e) => {
    const btn = e.target;
    const parent = btn.parentElement;

    const maxX = parent.clientWidth - btn.offsetWidth;
    const maxY = parent.clientHeight - btn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
  };

  return (
    <div className="app">
      <div className="container">
        {!accepted ? (
          <>
            <img src="/ss.png" alt="Mehak " className="profile-img" />

            <h1>Hey Mehak  👩‍⚕️✨</h1>

            <p className="main-text">
              Shayad humari zyada baatein nahi hui ab tak... <br />
              Par jitni bhi hui hain, unmein ek alag si positivity mili 😊
              <br />
              <br />
              Aur sach bolu...
            </p>

            <div className="shayari-box">
              <p className="shayari">
                “Kuch log milte hi ache lagne lagte hain, <br />
                Na wajah chahiye, na zyada waqt ❤️ <br />
                Bas dil kehta hai... <br />
                Inse friendship thodi aur special honi chahiye ✨”
              </p>
            </div>

            <h3>
              Toh Mehak  🤭 <br />
              Will you be my Best Friend? 🌸
            </h3>

            <div className="buttons">
              <button
                className="yes"
                onClick={() => setAccepted(true)}
              >
                Haan 😊
              </button>

              <button
                className="no"
                onMouseEnter={moveButton}
                onTouchStart={moveButton}
              >
                Sochungi 😅
              </button>
            </div>
          </>
        ) : (
          <div className="success-card">
            <img
              src="/ss.png"
              alt="Anu"
              className="profile-img big-img"
            />

            <h1>Yayyy Mehak  🎉</h1>

            <p className="love-text">
              Ab officially hum Best Friends hain 😄🤝
              <br />
              Aur mujhe sach me bahut accha laga ki maine ye pucha ✨
            </p>

            <div className="friendship-box">
              <p className="friendship-line">
                “Har achhi friendship ki shuruaat <br />
                ek simple ‘Hi’ se hoti hai 😊”
              </p>
            </div>

            <p className="tagline">
              New Bond Started 🌸 <br />
              Pure • Respectful • Real ✨
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Proposal;