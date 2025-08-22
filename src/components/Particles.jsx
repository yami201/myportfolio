import { Sparkles } from "@react-three/drei";

export default function Particles() {
  return (
    <Sparkles
      count={100}          // how many particles
      scale={[5, 1, 5]} // area (X, Y, Z) — here spread across radius ~5, at y ≈ 0.5
      speed={0.2}         // animation speed
      color="7aa3ff"     // blue
    />
  );
}
