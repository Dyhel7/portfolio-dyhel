"use client";

import { useEffect, useState } from "react";

const INTRO_TEXT = "//Ha_llo!";
const STORAGE_KEY = "dyhel-intro-played";

type IntroPhase = "typing" | "hold" | "exit";

export default function Intro() {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<IntroPhase>("typing");

  useEffect(() => {
    /*
     * Intro hanya diputar sekali selama tab browser masih terbuka.
     * Refresh halaman tidak akan mengulang intro.
     */
    
    setIsVisible(true);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let characterIndex = 0;
    let typingTimer: number | undefined;
    let holdTimer: number | undefined;
    let exitTimer: number | undefined;

    const finishIntro = (holdDuration = 850, exitDuration = 850) => {
      setPhase("hold");

      holdTimer = window.setTimeout(() => {
        setPhase("exit");
      }, holdDuration);

      exitTimer = window.setTimeout(() => {
               setIsVisible(false);
        document.body.style.overflow = originalOverflow;
      }, holdDuration + exitDuration);
    };

    if (prefersReducedMotion) {
      setDisplayedText(INTRO_TEXT);
      finishIntro(200, 300);
    } else {
      typingTimer = window.setInterval(() => {
        characterIndex += 1;

        setDisplayedText(INTRO_TEXT.slice(0, characterIndex));

        if (characterIndex >= INTRO_TEXT.length) {
          window.clearInterval(typingTimer);
          finishIntro();
        }
      }, 145);
    }

    return () => {
      if (typingTimer) window.clearInterval(typingTimer);
      if (holdTimer) window.clearTimeout(holdTimer);
      if (exitTimer) window.clearTimeout(exitTimer);

      document.body.style.overflow = originalOverflow;
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const progress = displayedText.length / INTRO_TEXT.length;
  const isComplete = displayedText === INTRO_TEXT;

  return (
    <div
      className={`site-intro ${
        phase === "exit" ? "site-intro--exit" : ""
      }`}
      aria-hidden="true"
    >
      <div className="site-intro__grid" />
      <div className="site-intro__scan" />

      <div className="site-intro__content">
        <p className="site-intro__meta">
          DYHEL_PORTFOLIO / BOOT_SEQUENCE
        </p>

        <div
          className={`site-intro__text ${
            isComplete ? "site-intro__text--complete" : ""
          }`}
        >
          <span>{displayedText}</span>
          <span className="site-intro__cursor" />
        </div>

        <div className="site-intro__progress">
          <span
            style={{
              transform: `scaleX(${progress})`,
            }}
          />
        </div>

        <div className="site-intro__footer">
          <span>
            [{String(displayedText.length).padStart(2, "0")}/
            {String(INTRO_TEXT.length).padStart(2, "0")}]
          </span>

          <span>
            {phase === "typing"
              ? "LOADING_IDENTITY..."
              : "IDENTITY_LOADED"}
          </span>
        </div>
      </div>
    </div>
  );
}