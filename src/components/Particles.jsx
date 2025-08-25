import { Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Particles() {
  return (
    <Canvas
      camera={{ position: [0, 4, 8], fov: 20 }}
      dpr={[1, 2]}
      className='fixed top-0 left-0 w-full h-full bg-transparent'
    >
      <Sparkles
        count={100}
        size={2}
        scale={[5, 1, 5]}
        speed={0.2}
        color={"white"}
      />
    </Canvas>
  );
}
