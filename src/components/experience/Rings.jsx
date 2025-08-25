import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { sphereColors } from "../../constants"
import useStore from "../../hooks/useStore"

gsap.registerPlugin(useGSAP)

export default function Rings() {
  const ringCount = 10
  const maxRadius = 5
  const ringsRef = useRef([])
  const started = useStore((state) => state.started)
  const hideRings = useStore((state) => state.hideRings)

  // Idle + intro animations
  useGSAP(() => {
    ringsRef.current.forEach((ring, i) => {
      if (!ring) return

      const delay = i * 0.1

      // Wave idle
      gsap.to(ring.position, {
        y: "-=0.15",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay
      })

      // Slow rotation
      gsap.to(ring.rotation, {
        z: "+=" + Math.PI * 2,
        duration: 60,
        repeat: -1,
        ease: "none"
      })

      // Pop in (intro)
      gsap.from(ring.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "back.out(1.7)",
        delay: delay * 0.5
      })
    })
  }, { scope: ringsRef })

  // Fade-out when started
  useGSAP(() => {
    if (started) {
      gsap.to(ringsRef.current.map(r => r?.scale), {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        stagger: 0.05,
        ease: "power3.in",
        onComplete: hideRings
      })
    }
  }, { dependencies: [started] })

  return (
    <group rotation={[Math.PI / 2, 0, 0]}>
      {Array.from({ length: ringCount }).map((_, i) => {
        const radius = ((i + 1) / ringCount) * maxRadius
        const angle = 2 * Math.PI * Math.random()
        const color = sphereColors[Math.floor(Math.random() * sphereColors.length)]

        return (
          <group key={i} ref={el => (ringsRef.current[i] = el)}>
            {/* Torus */}
            <mesh>
              <torusGeometry args={[radius, 0.01, 8, 128]} />
              <meshStandardMaterial
                color="#282828"
                metalness={1}
                roughness={0.2}
                transparent
                opacity={1}
              />
            </mesh>

            {/* Glowing sphere */}
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
        )
      })}
    </group>
  )
}
