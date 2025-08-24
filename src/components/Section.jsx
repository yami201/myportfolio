// SectionsWrapper.jsx
import { useInView } from "react-intersection-observer"
import useStore from "../hooks/use-store"

const Section = ({ id, children }) => {
  const setCurrentSection = useStore((state) => state.setCurrentSection)
  const { ref } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) setCurrentSection(id)
    }
  })

  return (
    <section ref={ref} id={id} className="min-h-screen w-full">
      {children}
    </section>
  )
}

export default Section
