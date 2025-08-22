import { useEffect, useRef } from "react";
import gsap from "gsap";
import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { clamp, damp } from "three/src/math/MathUtils.js";

const Blob = () => {
  const root = useRef();
  const leftEye = useRef();
  const rightEye = useRef();

  useEffect(() => {
    // idle breathing + bobbing
    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { ease: "sine.inOut" } });
    tl.to(root.current.position, { y: "+=0.1", duration: 1 }, 0);
    tl.to(root.current.scale, { x: 1.03, y: 0.98, z: 1.03, duration: 1 }, 0);

    // blinking loop
    const blinkTl = gsap.timeline({ repeat: -1, repeatDelay: 3 }); 
    blinkTl.to([leftEye.current.scale, rightEye.current.scale], {
      y: 0.05,
      duration: 0.08,
      ease: "power2.in"
    })
    .to([leftEye.current.scale, rightEye.current.scale], {
      y: 1.5,
      duration: 0.14,
      ease: "power2.out"
    }, "+=0.02");

    return () => {
      tl.kill();
      blinkTl.kill();
    };
  }, []);

  useFrame(({ pointer }, delta) => {
    if (!root.current) return;

    // pointer is -1..1 in both axes; map to small angles
    const maxDist = 0.025;   // left/right (Y)

    const targetY = clamp(pointer.x * maxDist, -maxDist, maxDist);
    const targetX = clamp(-pointer.y * maxDist, -maxDist, maxDist);

    // damp(current, target, smoothing, delta)
    root.current.rotation.y = damp(root.current.rotation.y, targetY, 5, delta);
    root.current.rotation.x = damp(root.current.rotation.x, targetX, 5, delta);
  });




  return (
    <group ref={root} >
      {/* Blob */}
      <mesh>
        <sphereGeometry args={[0.2, 128, 128]} />
        {/* Slight wobble/distortion + emissive for glow */}
        <MeshDistortMaterial
          color="#e9ecff"
          emissive="#7aa3ff"
          emissiveIntensity={0.15}
          roughness={1}
          metalness={0.0}
          distort={0.2}
          speed={1.4}
        />
      </mesh>

      {/* Eyes (scaled spheres to look like ovals) */}
      <mesh ref={leftEye} position={[-0.05, 0.40, 0.92]} scale={[0.55, 1.5, 0.6]}>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial color="black" roughness={0.8} metalness={0.0} />
      </mesh>
      <mesh ref={rightEye} position={[0.05, 0.40, 0.92]} scale={[0.55, 1.5, 0.6]}>
        <sphereGeometry args={[0.04, 32, 32]} />
        <meshStandardMaterial color="black" roughness={0.8} metalness={0.0} />
      </mesh>
    </group>
  );
}

export default Blob;
