"use client";

import { useState, useEffect } from "react";

const SLIDES = [
  {
    title: "The Awakening",
    subtitle: "Revolutionize Education. Empower Every Mind.",
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
  const [isHovered, setIsHovered] = useState(false);

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

  return (
    <div className="overflow-x-hidden">
      <div className="relative w-full bg-[#fdf4ed] flex flex-col min-h-screen items-center justify-center pb-[200px] z-0">
        <div className="absolute pointer-events-none overflow-hidden inset-0 z-[-1] mt-[-120px]">
          <div className="absolute top-1/2 left-1/2 w-0 h-0">
            <div
              className="absolute rounded-full opacity-[0.78] w-[70vw] max-w-[820px] aspect-square blur-[110px] top-[-80vw] left-[-35vw]"
              style={{ background: "radial-gradient(circle at 40% 35%, #ffb347 0%, #f97316 55%, transparent 80%)" }}
            />
            <div
              className="absolute rounded-full opacity-[0.78] w-[70vw] max-w-[820px] aspect-square blur-[110px] top-[10vw] left-[-35vw]"
              style={{ background: "radial-gradient(circle at 55% 60%, #b8f254 0%, #84cc16 50%, transparent 80%)" }}
            />
          </div>
        </div>
        <div className="relative mt-40 z-1 text-center px-[10%] w-full">
          <h2
            className="text-[#111] transition-all duration-450ms ease-in-out border-none bg-none p-0"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(14px)" : "translateY(0)"
            }}
          >
            {SLIDES[current].title}
          </h2>
          <h3
            className="mt-4 text-[#888] transition-all duration-450ms ease-in-out border-none bg-none p-0"
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(14px)" : "translateY(0)",
              fontWeight: "500"
            }}
          >
            {SLIDES[current].subtitle}
          </h3>
          <p
            className="mt-4 md:mt-6 max-w-[500px] text-[#020617] mx-auto transition-opacity duration-450ms ease-in-out border-none bg-none p-0"
            style={{ opacity: fading ? 0 : 1 }}
          >
            {SLIDES[current].body}
          </p>

          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`
              mt-4 md:mt-12 inline-flex items-center gap-4 backdrop-blur-md rounded-full py-4 px-6
              tracking-[0.13em] uppercase text-[#111] cursor-pointer border-none transition-all duration-250ms
              bg-[rgba(255,255,255,0.72)]
              ${isHovered ? 'shadow-[0_10px_44px_rgba(0,0,0,0.15)] -translate-y-0.5' : 'shadow-[0_6px_30px_rgba(0,0,0,0.08)]'}
            `}
          ><span className="whitespace-nowrap">
              START COLLABORATE
            </span>
            <span className="rounded-full flex items-center justify-center text-black shrink-0">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}