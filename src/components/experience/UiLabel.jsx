import { Html } from "@react-three/drei"
import Button from "../Button"
import useStore from "../../hooks/use-store"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"
import gsap from "gsap"

const UiLabel = ({ handleClick }) => {
  const started = useStore((state) => state.started)
  const ref = useRef()
  

  useGSAP(() => {
    if (started) {
      gsap.to(ref.current, {
        autoAlpha: 0,
        scale: 0.8,  
        y: -20,      
        duration: 0.6,
        ease: "power3.inOut"
      })
    }
  }, { dependencies: [started] })

  return (
    <Html
      ref={ref}
      position={[0, 0.7, 0]}
      className="w-54"
      style={{ transform: "translateX(-50%)" }}
    >
      <Button text="Click Me" onClick={handleClick} />
    </Html>
  )
}

export default UiLabel
