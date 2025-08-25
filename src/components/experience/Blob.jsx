import { useRef } from "react"
import { MeshDistortMaterial } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { clamp, damp } from "three/src/math/MathUtils.js"
import useStore from "../../hooks/useStore"
import { useMediaQuery } from "react-responsive"
import useBlobAnimation from "../../hooks/useBlobAnimation"

const Blob = () => {
  const root = useRef()
  const leftEye = useRef()
  const rightEye = useRef()
  const currentSection = useStore((s) => s.currentSection)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const timeRef = useRef(0)


  const { coords, eyes, blink } = useBlobAnimation(currentSection, isMobile)


  useFrame(({ pointer }, delta) => {
    if (!root.current) return
    timeRef.current += delta
    const breath = 1 + Math.sin(timeRef.current * 1.2) * 0.05
    root.current.scale.set(coords.s, coords.s * breath, coords.s)



    const maxDist = 0.1
    const targetY = clamp(pointer.x * maxDist, -maxDist, maxDist)
    const targetX = clamp(-pointer.y * maxDist, -maxDist, maxDist)
    root.current.rotation.y = damp(root.current.rotation.y, targetY, 5, delta)
    root.current.rotation.x = damp(root.current.rotation.x, targetX, 5, delta)
  })

  return (
    <group ref={root} position={[coords.x, coords.y, 0]} scale={[coords.s, coords.s, coords.s]}>
      <mesh>
        <sphereGeometry args={[0.2, 128, 128]} />
        <MeshDistortMaterial
          color="#e9ecff"
          emissive="#6587d6"
          emissiveIntensity={0.2}
          roughness={1}
          metalness={0.0}
          distort={0.2}
          speed={1.4}
        />
      </mesh>

      <group>
        <mesh ref={leftEye} position={[eyes.left.x, eyes.left.y, 0.2]} scale={[0.55, blink* 1.5, 0.6]}>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <mesh ref={rightEye} position={[eyes.right.x, eyes.right.y, 0.2]} scale={[0.55,blink* 1.5, 0.6]}>
          <sphereGeometry args={[0.04, 32, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </group>
    </group>
  )
}

export default Blob
