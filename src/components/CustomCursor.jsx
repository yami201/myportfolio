import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef();
  const circleRef = useRef();

  useEffect(() => {
    let mouseX = 0, mouseY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // dot snaps to mouse instantly
      gsap.set(dotRef.current, {
        x: mouseX,
        y: mouseY,
      });

      // elastic follow for circle
      gsap.to(circleRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "expo.out"
      });

    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 bg-white"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={circleRef}
        className="fixed border-white top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-40"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
}
