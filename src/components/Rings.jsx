import React, { useRef, useEffect } from "react";
import gsap from "gsap";


const colors = ["#7aa3ff", "#ff6ec7", "#7fff7a", "#ffd37a", "#ff7a7a"];

export default function Rings() {
  const ringCount = 10;
  const maxRadius = 5;
  const ringsRef = useRef([]);

  useEffect(() => {
    ringsRef.current.forEach((ring, i) => {
      if (!ring) return;

      // Wave animation (up/down)
      const delay = i * 0.1;
      gsap.to(ring.position, {
        y: "-=0.15",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay
      });

      gsap.to(ring.rotation, {
      z: "+=" + Math.PI * 2,
      duration: 60,
      repeat: -1,
      ease: "none",
    });
    });
  }, []);

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {Array.from({ length: ringCount }).map((_, i) => {
        const radius = ((i + 1) / ringCount) * maxRadius;
        const angle = 2 * Math.PI * Math.random();
        
        const color = colors[Math.floor(Math.random() * colors.length)];

        return (
          <group key={i} ref={(el) => (ringsRef.current[i] = el)}>
            <mesh>
              <torusGeometry args={[radius, 0.01, 8, 128]} />
              <meshStandardMaterial
                color="#282828"
                metalness={1}
                roughness={0.2}
              />
            </mesh>
            <mesh
              position={[radius * Math.sin(angle), radius * Math.cos(angle), 0]}
            >
              <sphereGeometry args={[0.02, 8, 8]} />
              <meshStandardMaterial
                color="white"
                emissive={color}
                emissiveIntensity={4}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
