import { useRef, useEffect } from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import useStore from "../hooks/useStore"

const Section = ({ id, children }) => (
  <section
    id={id}
    className="relative max-w-full h-screen border border-white">
    {children}
  </section>
)


export default Section
