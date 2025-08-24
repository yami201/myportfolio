import { Suspense } from "react"
import CustomCursor from "./components/CustomCursor.jsx"
import Experience from "./components/experience/experience.jsx"
import Loader from "./components/Loader.jsx"
import useStore from "./hooks/use-store.js"
import Hero from "./sections/Hero.jsx"
import Projects from "./sections/Projects.jsx"
import Section from "./components/Section.jsx"
import Skills from "./sections/Skills.jsx"

export default function App() {
  const UiShown = useStore((state) => state.UiShown)

  return (
    <>
      <CustomCursor />

      <div className="fixed inset-0">
        <Suspense fallback={<Loader />}>
          <Experience />
        </Suspense>
      </div>
      {UiShown && (
        <div className="relative w-full h-screen">
          <Section id='hero'>
            <Hero />
          </Section>
          <Section id='skills'>
            <Skills />
          </Section>
          <Section id='projects'>
            <Projects />
          </Section>
        </div>
      )}
    </>
  )
}
