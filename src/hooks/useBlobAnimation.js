import { useEffect, useState } from "react";
import { useSpring, useMotionValue, animate } from "framer-motion";
import { BlobHeroLocationDefault, BlobHeroLocationMobile } from "../constants";

export default function useBlobAnimation(
  currentSection,
  isMobile
) {
  // Motion values
  const posX = useMotionValue(0);
  const posY = useMotionValue(2);
  const scale = useMotionValue(1);

  const leftEyeX = useMotionValue(-0.05);
  const leftEyeY = useMotionValue(0.15);
  const rightEyeX = useMotionValue(0.05);
  const rightEyeY = useMotionValue(0.15);

  const eyesBlink = useMotionValue(1);

  // Springs
  const springX = useSpring(posX, { stiffness: 80, damping: 15 });
  const springY = useSpring(posY, { stiffness: 80, damping: 15 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 12 });

  const springLeftEyeX = useSpring(leftEyeX, { stiffness: 100, damping: 12 });
  const springLeftEyeY = useSpring(leftEyeY, { stiffness: 100, damping: 12 });
  const springRightEyeX = useSpring(rightEyeX, { stiffness: 100, damping: 12 });
  const springRightEyeY = useSpring(rightEyeY, { stiffness: 100, damping: 12 });

  const springEyesBlink = useSpring(eyesBlink, { stiffness: 200, damping: 40 });

  // Exposed coords
  const [coords, setCoords] = useState({ x: 0, y: 2, s: 1 });
  const [eyes, setEyes] = useState({
    left: { x: -0.05, y: 0.15 },
    right: { x: 0.05, y: 0.15 },
  });

  const [blink, setBlink] = useState(1);

  // Eye blinking
  useEffect(() => {
    const controls = animate(eyesBlink, [1, 0.1, 0, 0.1, 1], {
      duration: 0.4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 1.5,
    });

    return () => controls.stop();
  }, []);

  // Sync springs with state
  useEffect(() => {
    const subs = [
      springX.on("change", (v) => setCoords((p) => ({ ...p, x: v }))),
      springY.on("change", (v) => setCoords((p) => ({ ...p, y: v }))),
      springScale.on("change", (v) => setCoords((p) => ({ ...p, s: v }))),
      springLeftEyeX.on("change", (v) =>
        setEyes((p) => ({ ...p, left: { ...p.left, x: v } }))
      ),
      springLeftEyeY.on("change", (v) =>
        setEyes((p) => ({ ...p, left: { ...p.left, y: v } }))
      ),
      springRightEyeX.on("change", (v) =>
        setEyes((p) => ({ ...p, right: { ...p.right, x: v } }))
      ),
      springRightEyeY.on("change", (v) =>
        setEyes((p) => ({ ...p, right: { ...p.right, y: v } }))
      ),
      springEyesBlink.on("change", (v) => setBlink(v))
    ];
    return () => subs.forEach((unsub) => unsub());
  }, []);

  // Intro animation
  useEffect(() => {
    animate(posY, 0, { type: "spring", stiffness: 120, damping: 15 });
  }, []);

  // Change Blob Position when it is Hero
  useEffect(() => {
    const target = isMobile ? BlobHeroLocationMobile : BlobHeroLocationDefault;
    if (currentSection === "hero") {
      posX.set(target.position.x);
      posY.set(target.position.y);
      scale.set(target.scale);
      leftEyeX.set(target.eyes.left.x);
      leftEyeY.set(target.eyes.left.y);
      rightEyeX.set(target.eyes.right.x);
      rightEyeY.set(target.eyes.right.y);
    }
  }, [isMobile, currentSection]);

  return { coords, eyes, blink };
}
