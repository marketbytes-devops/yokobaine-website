"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
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

const CARDS = [
  {
    type: "image",
    bg: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&q=80",
    alt: "Teacher at smart board",
  },
  {
    type: "color",
    bg: "#2D9E2D",
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    type: "image",
    bg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&q=80",
    alt: "Student studying",
  },
  {
    type: "color",
    bg: "#E09000",
    text: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.",
  },
  {
    type: "image",
    bg: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=500&q=80",
    alt: "Family learning together",
  },
  {
    type: "image",
    bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80",
    alt: "Team meeting",
  },
];


const CARD_FINAL = [
  { tx: -420, ty:  20, rotate: -8,  zIndex: 2, w: 300, h: 260 },
  { tx: -215, ty: -20, rotate: -4,  zIndex: 3, w: 300, h: 260},
  { tx:   -5, ty:  10, rotate:  2,  zIndex: 4, w: 300, h: 260 },
  { tx:  205, ty: -25, rotate:  6,  zIndex: 3, w: 300, h: 260 },
  { tx:  395, ty:   5, rotate: 10,  zIndex: 2, w: 300, h: 260},
  { tx:  575, ty:  18, rotate: 14,  zIndex: 1, w: 300, h:260 },
];

function clamp(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); }


function easeOutBack(t) {
  const c1 = 1.70158;
  const c3 = c1 + 1;
  return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function HeroSection() {
  const [current, setCurrent]   = useState(0);
  const [fading, setFading]     = useState(false);
  const [progress, setProgress] = useState(0);
  const scatterRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % SLIDES.length);
        setFading(false);
      }, 450);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = scatterRef.current;
      if (!el) return;
      const rect  = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      setProgress(clamp(scrolled / total, 0, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleDot(i) {
    if (i === current || fading) return;
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 450);
  }

  const blast = easeOutBack(clamp(progress * 1.6, 0, 1)); 

  
  const START_Y = 300;

  const STAGE_W  = 820;
  const STAGE_H  = 280;
  const CENTER_X = STAGE_W / 2;
  const CENTER_Y = STAGE_H / 2 + 20;

  return (
    <div style={{ overflowX: "hidden" }}>
      <style>{`
        @keyframes heroSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-hero-spin { animation: heroSpin 10s linear infinite; }

        .sc-card {
          position: absolute;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          will-change: transform, opacity;
          box-shadow: 0 8px 32px rgba(0,0,0,0.22);
        }
        .sc-card:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.35) !important;
          z-index: 99 !important;
        }
        html, body {
          overflow-x: hidden !important;
          max-width: 100vw !important;
        }
      `}</style>


      <div
        className="relative w-full bg-[#fdf4ed] flex flex-col min-h-screen items-center justify-center"
        style={{ paddingBottom: "200px", zIndex: 0 }}
      >
        <div className="absolute pointer-events-none" style={{ overflow: "hidden", top: "-120px", left: 0, right: 0, bottom: 0, zIndex: -1 }}>
          <div className="absolute animate-hero-spin" style={{ top: "50%", left: "50%", width: 0, height: 0 }}>
            <div className="absolute rounded-full opacity-[0.78]" style={{ width: "70vw", maxWidth: "820px", aspectRatio: "1", filter: "blur(110px)", background: "radial-gradient(circle at 40% 35%, #ffb347 0%, #f97316 55%, transparent 80%)", top: "-80vw", left: "-35vw" }} />
            <div className="absolute rounded-full opacity-[0.78]" style={{ width: "70vw", maxWidth: "820px", aspectRatio: "1", filter: "blur(110px)", background: "radial-gradient(circle at 55% 60%, #b8f254 0%, #84cc16 50%, transparent 80%)", top: "10vw", left: "-35vw" }} />
          </div>
        </div>

        <div className="hero-content relative mt-40 z-[1] text-center px-[10%] w-full">
          <h2
            className="text-[#111] leading-[1.15] transition-[opacity,transform] duration-[450ms] ease-in-out"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", opacity: fading ? 0 : 1, transform: fading ? "translateY(14px)" : "translateY(0)", border: "none", background: "none", boxShadow: "none", padding: 0 }}
          >
            {SLIDES[current].title}
          </h2>
          <p
            className="mt-4 text-[#888] font-normal transition-[opacity,transform] duration-[450ms] ease-in-out"
            style={{ opacity: fading ? 0 : 1, transform: fading ? "translateY(14px)" : "translateY(0)", border: "none", background: "none", boxShadow: "none", padding: 0 }}
          >
            {SLIDES[current].subtitle}
          </p>
          <h5
            className="mt-3 max-w-[500px] mx-auto transition-opacity duration-[450ms] ease-in-out"
            style={{ opacity: fading ? 0 : 1, border: "none", background: "none", boxShadow: "none", padding: 0 }}
          >
            {SLIDES[current].body}
          </h5>

          <button
            className="mt-12 inline-flex items-center gap-4 backdrop-blur-[16px] rounded-full py-4 pl-10 pr-5 font-bold text-[0.82rem] tracking-[0.13em] uppercase text-[#111] cursor-pointer shadow-[0_6px_30px_rgba(0,0,0,0.08)] border-none transition-[box-shadow,transform] duration-[250ms] hover:shadow-[0_10px_44px_rgba(0,0,0,0.15)] hover:-translate-y-0.5"
            style={{ backgroundColor: "rgba(255,255,255,0.72)" }}
          >
            START COLLABORATE
            <span className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-black text-[1.2rem] leading-none shrink-0">+</span>
          </button>
        </div>

   
      </div>

      {/* ── SCATTER / BLAST SECTION ───────────────────────────────────────── */}
      <div
        ref={scatterRef}
        style={{ position: "relative", height: "220vh", background: "#fdf4ed" }}
      >
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "relative", width: `${STAGE_W}px`, height: `${STAGE_H}px` }}>
            {CARDS.map((card, i) => {
              const f = CARD_FINAL[i];

              // All cards blast from (0, START_Y) → their final (tx, ty)
              const currentTx = f.tx * blast;
              const currentTy = START_Y + (f.ty - START_Y) * blast;

              // Rotate: each card spins into its final angle
              const currentRotate = f.rotate * blast;

              // Scale: starts at 0.6 at origin, expands to 1.0
              const currentScale = 0.6 + 0.4 * clamp(blast, 0, 1);

              // Opacity: pop in fast
              const opacity = clamp(progress * 8, 0, 1);

              return (
                <div
                  key={i}
                  className="sc-card"
                  style={{
                    left:   CENTER_X + currentTx - f.w / 2,
                    top:    CENTER_Y + currentTy - f.h / 2,
                    width:  f.w,
                    height: f.h,
                    zIndex: f.zIndex,
                    opacity,
                    transform: `rotate(${currentRotate}deg) scale(${currentScale})`,
                    transition: "box-shadow 0.2s ease",
                  }}
                >
                  {card.type === "image" ? (
                    <img src={card.bg} alt={card.alt} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "flex-end", padding: "18px 16px", background: card.bg }}>
                      <p style={{ color: "#fff", fontSize: "0.78rem", fontWeight: 600, lineHeight: 1.4, margin: 0 }}>{card.text}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Talk to us */}
          <div
            style={{
              position: "absolute",
              bottom: "12%",
              left: "50%",
              transform: `translateX(-50%) translateY(${(1 - clamp(progress * 2 - 0.5, 0, 1)) * 30}px)`,
              opacity: clamp(progress * 2 - 0.5, 0, 1),
            }}
          >
            <button style={{ background: "#1a1a2e", color: "#fff", border: "none", borderRadius: "999px", padding: "12px 32px", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer", boxShadow: "0 6px 24px rgba(0,0,0,0.18)", letterSpacing: "0.04em" }}>
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}