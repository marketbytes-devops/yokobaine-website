"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "The Awakening",
    subtitle: "Revolutionize Education. Empower Every Mind.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "All-In-One Platform",
    subtitle: "YoKoBaine is not just a tool",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    title: "Empowering Every Mind",
    subtitle: "Today's education system feels like a collection of disconnected islands.",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 450);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  function handleDot(i) {
    if (i === current || fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
    }, 450);
  }

  return (
    <>
      <style>{`
    

        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          overflow: hidden;
          background: #fdf4ed;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        /* ── Orbit: zero-size anchor at screen centre, spins forever ── */
        .orbit-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          pointer-events: none;
          z-index: 0;
          animation: heroSpin 10s linear infinite;
        }

        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .orb {
          position: absolute;
          width: 70vw;
          max-width: 820px;
          aspect-ratio: 1;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.78;
        }

        /* Orange: top quadrant */
        .orb-orange {
          background: radial-gradient(circle at 40% 35%, #ffb347 0%, #f97316 55%, transparent 80%);
          top: -80vw;
          left: -35vw;
        }

        /* Green: bottom quadrant — 180° opposite */
        .orb-green {
          background: radial-gradient(circle at 55% 60%, #b8f254 0%, #84cc16 50%, transparent 80%);
          top: 10vw;
          left: -35vw;
        }

        /* ── Content wrapper ── */
        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          /* Horizontal padding so text sits centred with breathing room */
          padding: 0 10%;
          width: 100%;
        }
.slide-title {
  color: #111;
  font-size: clamp(36px, 6vw, 72px); /* responsive but smaller */
  line-height: 1.15;
  transition: opacity 0.45s ease, transform 0.45s ease;
}


     
        .slide-sub {
          margin-top: 16px;
          color: #888;
          /* font-size, font-family from global p */
          font-size: clamp(1rem, 1.8vw, 1.3rem);
          font-weight: 400;
          transition: opacity 0.45s ease, transform 0.45s ease;
        }

        /* body copy — global p styles apply, just add spacing + muted colour */
        .slide-body {
          margin-top: 12px;
    
          max-width: 500px;
          margin-left: auto;
          margin-right: auto;
          transition: opacity 0.45s ease;
        }

        /* Fade-out state */
        .slide-title.fade,
        .slide-sub.fade,
        .slide-body.fade {
          opacity: 0;
          transform: translateY(14px);
        }

        /* ── CTA button ── */
        .hero-cta {
          margin-top: 48px;
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.72);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 9999px;
          padding: 16px 20px 16px 40px;
          /* Reset global p font styles on the button */
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #111;
          cursor: pointer;
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.25s, transform 0.2s;
          border: none;
        }
        .hero-cta:hover {
          box-shadow: 0 10px 44px rgba(0, 0, 0, 0.15);
          transform: translateY(-2px);
        }
        .hero-cta-plus {
          width: 34px;
          height: 34px;
       
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          font-size: 1.2rem;
          line-height: 1;
          flex-shrink: 0;
        }

        /* ── Dot navigation ── */
        .hero-dots {
          position: absolute;
          bottom: 52px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 2;
        }
        .hero-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 1.5px solid #555;
          background: transparent;
          cursor: pointer;
          transition: background 0.3s, transform 0.2s;
          padding: 0;
        }
        .hero-dot.on {
          background: #333;
          border-color: #333;
          transform: scale(1.25);
        }

        /* ── Corner speech bubbles ── */
        .hero-bubble {
          position: absolute;
          z-index: 3;
          font-family: var(--font-poppins), sans-serif;
          font-size: 0.82rem;
          font-weight: 700;
          color: #fff;
          border-radius: 999px;
          padding: 9px 20px;
          pointer-events: none;
        }
        .bubble-hey {
          bottom: 52px;
          left: 36px;
          background: #f97316;
          transform: rotate(-7deg);
          animation: bUp 3.2s ease-in-out infinite alternate;
        }
        .bubble-here {
          bottom: 64px;
          right: 36px;
          background: #65a30d;
          transform: rotate(5deg);
          animation: bUp2 3.8s ease-in-out infinite alternate;
        }
        @keyframes bUp  { to { transform: rotate(-7deg) translateY(-10px); } }
        @keyframes bUp2 { to { transform: rotate(5deg)  translateY(-7px);  } }
      `}</style>

      <div className="hero">

    
        <div className="orbit-wrap">
          <div className="orb orb-orange" />
          <div className="orb orb-green" />
        </div>

      
        <div className="hero-content">
          <h2 className={`slide-title${fading ? " fade" : ""}`}>
            {slides[current].title}
          </h2>
          <p className={`slide-sub${fading ? " fade" : ""}`}>
            {slides[current].subtitle}
          </p>
          <h5 className={`slide-body${fading ? " fade" : ""}`}>
            {slides[current].body}
          </h5>
          <button className="hero-cta">
            START COLLABORATE
            <span className="hero-cta-plus">+</span>
          </button>
        </div>

        {/* Dot navigation */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero-dot${i === current ? " on" : ""}`}
              onClick={() => handleDot(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Floating corner speech bubbles */}
        <div className="hero-bubble bubble-hey">Hey!!!</div>
        <div className="hero-bubble bubble-here">We Are Here</div>
      </div>
    </>
  );
}