import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Suspense, useRef } from "react";
import gsap from "gsap";
import Blob from "./components/Blob.jsx";
import Rings from "./components/Rings.jsx";
import Particles from "./components/Particles.jsx";
import { Html } from "@react-three/drei";
import Button from "./components/Button.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
export default function App() {
  const blobRef = useRef();
  const ringsRef = useRef();
  const dirLightRef = useRef();

  const handleHover = (hovered) => {
    if (dirLightRef.current) {
      gsap.to(dirLightRef.current, {
        intensity: hovered ? 3.5 : 2,
        duration: 0.5,
        ease: "sine.inOut"
      });
    }
  };

  return (
    <>
      <CustomCursor />
      <Canvas
        camera={{ position: [0, 4, 8], fov: 20 }}
        dpr={[1, 2]}
      >

      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={0.6} /> 
      <directionalLight 
        position={[0, 2, 4]} 
        intensity={2} 
        ref={dirLightRef}
      />

      <Suspense fallback={null}>
        <group position={[0, 0, -1]}>
          <group
            onPointerOver={() => handleHover(true)}
            onPointerOut={() => handleHover(false)}
          >
            <Blob ref={blobRef} />
            <Html className="w-54" position={[0, 0.7, 0]} style={{ transform: 'translateX(-50%)' }}>
              <Button 
                text='Click Me' 
                />
            </Html>
          </group>
          <Rings ref={ringsRef} />

          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
            <planeGeometry args={[2, 2]} />
              <meshBasicMaterial
                color="#000000"
              />
          </mesh>
          <Particles />
        </group>


      </Suspense>

      <EffectComposer disableNormalPass>
        <Bloom 
          intensity={1} 
          luminanceThreshold={0.1} 
          luminanceSmoothing={0.9} 
          />
      </EffectComposer>
    </Canvas>
  </>
  );
}
