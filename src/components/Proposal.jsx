import React, { useEffect, useState } from "react";
import "../App.css";

function Proposal() {

  const [accepted, setAccepted] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowText(true);
    }, 600);

    return () => clearTimeout(timer);

  }, []);

const moveButton = (e) => {

  e.preventDefault();
  e.stopPropagation();

  const btn = e.currentTarget;
  const parent = btn.parentElement;

  const maxX = parent.clientWidth - btn.offsetWidth - 20;
  const maxY = parent.clientHeight - btn.offsetHeight - 20;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
};

  return (

    <div className="app">

      {/* BACKGROUND */}
      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>
      <div className="bg-circle three"></div>

      {/* FLOATING ICONS */}
      <span className="floating-heart h1">💖</span>
      <span className="floating-heart h2">✨</span>
      <span className="floating-heart h3">🌸</span>
      <span className="floating-heart h4">💜</span>

      <div className="container">

        {!accepted ? (

          <div className="glass-card">

            {/* IMAGE */}
            <div className="image-wrapper">

              <div className="ring"></div>

              <img
                src="/ss.png"
                alt="Zimal Fatima"
                className="profile-img"
              />

            </div>

            {/* TITLE */}
            <h1 className="title">
              Hey Zimal Fatima ✨
            </h1>

            {/* SUBTITLE */}
            <p className="subtitle">
              A Small Surprise For Someone Truly Special 🌸
            </p>

            {/* TEXT */}
            <p className={`main-text ${showText ? "show" : ""}`}>

              Shayad humari baatein abhi zyada nahi hui...
              <br /><br />

              Lekin tumhari vibes,
              thinking aur simplicity honestly bahut special lagi 💫

            </p>

            {/* SHAYARI */}
            <div className="shayari-box">

              <p className="shayari">

                “Kuch log bas ache nahi lagte...
                <br />

                Dil ko bhi ache lagne lagte hain 💖”

              </p>

            </div>

            {/* QUESTION */}
            <h2 className="question">

              So Zimal 🤍
              <br />

              Will You Be My Best Friend? ✨

            </h2>

            {/* BUTTONS */}
            <div className="buttons">

              <button
                className="yes"
                onClick={() => setAccepted(true)}
              >
                Yes💖
              </button>

         <button
  type="button"
  className="no"
  onMouseEnter={moveButton}
  onTouchStart={moveButton}
  onClick={(e) => {
    e.preventDefault();
    e.stopPropagation();
  }}
>
  Sochungi 😅
</button>

            </div>

          </div>

        ) : (

          <div className="success-card">

            {/* SUCCESS IMAGE */}
            <div className="image-wrapper">

              <div className="ring"></div>

              <img
                src="/ss.png"
                alt="Zimal Fatima"
                className="profile-img big-img"
              />

            </div>

            {/* SUCCESS TITLE */}
            <h1 className="success-title">

              Yayyyy Zimal 🎉

            </h1>

            {/* SUCCESS MESSAGE */}
            <p className="love-text">

              Ab officially hum
              Best Friends hain 😄🤝

              <br /><br />

              Aur sach me...
              mujhe bahut accha laga ki maine ye step liya 💖

            </p>

            {/* FOOTER */}
            <p className="tagline">

              A Beautiful Bond Started 💫
              <br />

              Pure • Genuine • Respectful 🌸

            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Proposal;