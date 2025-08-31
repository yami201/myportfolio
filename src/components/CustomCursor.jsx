import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const CustomCursor = () => {
  const circleRef = useRef();
  const dotRef = useRef();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  if(isMobile) {
    // If mobile, disable custom cursor
    return null;
  }

  useEffect(() => {
    const circleEl = circleRef.current
    const dotEl = dotRef.current

    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    let prevMouse = { x: mouse.x, y: mouse.y }

    const handleMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY

      // dot follows instantly
      gsap.set(dotEl, { x: mouse.x, y: mouse.y })
    }

    window.addEventListener("mousemove", handleMove)

    const tick = () => {
      const dx = mouse.x - prevMouse.x
      const dy = mouse.y - prevMouse.y
      prevMouse.x = mouse.x
      prevMouse.y = mouse.y

      const velocity = Math.min(Math.sqrt(dx * dx + dy * dy) * 4, 150)
      const scaleValue = (velocity / 150) * 0.5
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)

      gsap.to(circleEl, {
        x: mouse.x,
        y: mouse.y,
        scaleX: 1 + scaleValue,
        scaleY: 1 - scaleValue,
        rotation: angle,
        duration: 0.4,
        ease: "expo.out"
      })
    }

    gsap.ticker.add(tick)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      gsap.ticker.remove(tick)
    };
  }, []);

  return (
    <>
      {/* Main small dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[10001]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      {/* Elastic squishy circle */}
      <div
        ref={circleRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-white pointer-events-none z-[10000]"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </>
  );
};

export default CustomCursor;
