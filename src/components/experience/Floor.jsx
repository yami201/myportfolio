import useStore from "../../hooks/useStore"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

const Floor = () => {
  const ref = useRef()
  const ringsVisible = useStore((state) => state.ringsVisible)
  const showUi = useStore((state) => state.showUi)
  const setCurrentSection = useStore((state) => state.setCurrentSection)

  useGSAP(() => {
    if (!ringsVisible) {
      gsap.to(ref.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 1,
        ease: "power3.inOut",
        onComplete: () => {
            showUi()
            setCurrentSection('hero')
        }
      })
    }
  }, { dependencies: [ringsVisible] })

  return (
    <mesh
      ref={ref}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, 0, 0]}
    >
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial color="#000000" transparent opacity={1} />
    </mesh>
  )
}

export default Floor
