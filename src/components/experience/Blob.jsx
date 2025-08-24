import { useRef } from "react"
import { MeshDistortMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { clamp, damp } from "three/src/math/MathUtils.js"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import useStore from "../../hooks/use-store"
import BlobAnim from "../../animations/blob.js" 
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(useGSAP)

const Blob = () => {
  const root = useRef()
  const leftEye = useRef()
  const rightEye = useRef()
  const currentSection = useStore((state) => state.currentSection)
  const animRef = useRef(null)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  // Init animations
  useGSAP(() => {
    animRef.current = new BlobAnim(root.current, leftEye.current, rightEye.current)
    animRef.current.intro()
    animRef.current.startBreathing()
    animRef.current.startBlinking()

    return () => animRef.current.kill()
  }, { scope: root })

  // React to section changes
  useGSAP(() => {
    animRef.current?.animateSection(currentSection, isMobile)
  }, { dependencies: [currentSection] })

  // Pointer interactivity
  useFrame(({ pointer }, delta) => {
    if (!root.current) return
    const maxDist = 0.025
    const targetY = clamp(pointer.x * maxDist, -maxDist, maxDist)
    const targetX = clamp(-pointer.y * maxDist, -maxDist, maxDist)
    root.current.rotation.y = damp(root.current.rotation.y, targetY, 5, delta)
    root.current.rotation.x = damp(root.current.rotation.x, targetX, 5, delta)
  })

  return (
    <group ref={root}>
      <mesh>
        <sphereGeometry args={[0.2, 128, 128]} />
        <MeshDistortMaterial
          color="#e9ecff"
          emissive="#6587d6"
          emissiveIntensity={0.15}
          roughness={1}
          metalness={0.0}
          distort={0.2}
          speed={1.4}
        />
      </mesh>

      <group >
        <mesh ref={leftEye} position={[-0.05, 0.15, 0.2]} scale={[0.55, 1.5, 0.6]}>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh ref={rightEye} position={[0.05, 0.15, 0.2]} scale={[0.55, 1.5, 0.6]}>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>

    </group>
  )
}

export default Blob
