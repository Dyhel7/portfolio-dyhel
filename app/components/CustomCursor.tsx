"use client";

import { useEffect, useRef, useState } from "react";

type Burst = {
  id: number;
  x: number;
  y: number;
};

type LightningBoltProps = {
  className: string;
};

function LightningBolt({ className }: LightningBoltProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10 6L44 28L30 32L45 57L28 47L21 58L15 38L8 45L10 6Z"
        fill="#050505"
        stroke="white"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />

      <path
        d="M15 14L35 27L24 30L32 44"
        stroke="rgba(255,255,255,0.45)"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailOneRef = useRef<HTMLDivElement>(null);
  const trailTwoRef = useRef<HTMLDivElement>(null);

  const animationFrameRef = useRef<number | null>(null);
  const burstIdRef = useRef(0);

  const targetPositionRef = useRef({ x: 0, y: 0 });
  const trailOnePositionRef = useRef({ x: 0, y: 0 });
  const trailTwoPositionRef = useRef({ x: 0, y: 0 });

  const magneticElementRef = useRef<HTMLElement | null>(null);
  const visibleRef = useRef(false);
  const hoverRef = useRef(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia(
      "(pointer: fine) and (hover: hover)",
    ).matches;

    if (!supportsFinePointer) {
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const centerPosition = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    targetPositionRef.current = centerPosition;
    trailOnePositionRef.current = centerPosition;
    trailTwoPositionRef.current = centerPosition;

    const interactiveSelector =
      'a, button, [role="button"], summary, label[for], [data-magnetic]';

    const moveElement = (
      element: HTMLDivElement | null,
      x: number,
      y: number,
    ) => {
      if (!element) return;

      element.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const resetMagneticElement = (element: HTMLElement | null) => {
      if (!element) return;

      element.style.removeProperty("--magnetic-x");
      element.style.removeProperty("--magnetic-y");
      element.classList.remove("cursor-magnetic");
    };

    const updateHoverState = (nextState: boolean) => {
      if (hoverRef.current === nextState) return;

      hoverRef.current = nextState;
      setIsHovering(nextState);
    };

    const updateVisibility = (nextState: boolean) => {
      if (visibleRef.current === nextState) return;

      visibleRef.current = nextState;
      setIsVisible(nextState);
    };

    /*
     * Cursor utama tidak memakai lerp.
     * Hanya trail dekoratif yang bergerak lebih lambat.
     */
    const animateTrails = () => {
      const target = targetPositionRef.current;
      const trailOne = trailOnePositionRef.current;
      const trailTwo = trailTwoPositionRef.current;

      trailOne.x += (target.x - trailOne.x) * 0.34;
      trailOne.y += (target.y - trailOne.y) * 0.34;

      trailTwo.x += (trailOne.x - trailTwo.x) * 0.24;
      trailTwo.y += (trailOne.y - trailTwo.y) * 0.24;

      moveElement(trailOneRef.current, trailOne.x, trailOne.y);
      moveElement(trailTwoRef.current, trailTwo.x, trailTwo.y);

      animationFrameRef.current =
        window.requestAnimationFrame(animateTrails);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      targetPositionRef.current = { x, y };

      /*
       * Posisi cursor utama diperbarui langsung di event pointermove.
       * Ini yang menghilangkan delay.
       */
      moveElement(cursorRef.current, x, y);
      updateVisibility(true);

      const eventTarget =
        event.target instanceof Element ? event.target : null;

      const interactiveElement = eventTarget?.closest(
        interactiveSelector,
      ) as HTMLElement | null;

      if (interactiveElement !== magneticElementRef.current) {
        resetMagneticElement(magneticElementRef.current);
        magneticElementRef.current = interactiveElement;

        if (interactiveElement) {
          interactiveElement.classList.add("cursor-magnetic");
        }
      }

      updateHoverState(Boolean(interactiveElement));

      if (!interactiveElement) return;

      const rect = interactiveElement.getBoundingClientRect();
      const relativeX = x - (rect.left + rect.width / 2);
      const relativeY = y - (rect.top + rect.height / 2);

      /*
       * Nilai kecil supaya efek magnet tetap profesional,
       * bukan membuat tombol berpindah terlalu jauh.
       */
      const magneticX = Math.max(
        -7,
        Math.min(7, relativeX * 0.1),
      );

      const magneticY = Math.max(
        -5,
        Math.min(5, relativeY * 0.1),
      );

      interactiveElement.style.setProperty(
        "--magnetic-x",
        `${magneticX}px`,
      );

      interactiveElement.style.setProperty(
        "--magnetic-y",
        `${magneticY}px`,
      );
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;

      setIsPressed(true);

      burstIdRef.current += 1;

      const burst: Burst = {
        id: burstIdRef.current,
        x: event.clientX,
        y: event.clientY,
      };

      setBursts((currentBursts) => [...currentBursts, burst]);

      window.setTimeout(() => {
        setBursts((currentBursts) =>
          currentBursts.filter((item) => item.id !== burst.id),
        );
      }, 700);
    };

    const handlePointerUp = () => {
      setIsPressed(false);
    };

    const handlePointerLeave = () => {
      updateVisibility(false);
      setIsPressed(false);
      updateHoverState(false);
      resetMagneticElement(magneticElementRef.current);
      magneticElementRef.current = null;
    };

    const handlePointerEnter = () => {
      updateVisibility(true);
    };

    animationFrameRef.current =
      window.requestAnimationFrame(animateTrails);

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    document.addEventListener("mouseleave", handlePointerLeave);
    document.addEventListener("mouseenter", handlePointerEnter);

    return () => {
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      resetMagneticElement(magneticElementRef.current);

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseleave", handlePointerLeave);
      document.removeEventListener("mouseenter", handlePointerEnter);

      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <>
      <div
        ref={trailTwoRef}
        className={`lightning-trail lightning-trail--two ${
          isVisible ? "is-visible" : ""
        }`}
        aria-hidden="true"
      >
        <LightningBolt className="lightning-trail__bolt" />
      </div>

      <div
        ref={trailOneRef}
        className={`lightning-trail lightning-trail--one ${
          isVisible ? "is-visible" : ""
        }`}
        aria-hidden="true"
      >
        <LightningBolt className="lightning-trail__bolt" />
      </div>

      <div
        ref={cursorRef}
        className={`premium-cursor ${
          isVisible ? "is-visible" : ""
        }`}
        aria-hidden="true"
      >
        <div
          className={[
            "premium-cursor__inner",
            isHovering ? "is-hovering" : "",
            isPressed ? "is-pressed" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <LightningBolt className="premium-cursor__bolt" />

          <span className="premium-cursor__spark premium-cursor__spark--1" />
          <span className="premium-cursor__spark premium-cursor__spark--2" />
          <span className="premium-cursor__spark premium-cursor__spark--3" />
        </div>
      </div>

      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="cursor-click-burst"
          style={{
            left: burst.x,
            top: burst.y,
          }}
          aria-hidden="true"
        >
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      ))}
    </>
  );
}