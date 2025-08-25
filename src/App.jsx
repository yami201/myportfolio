import { Suspense } from "react"
import CustomCursor from "./components/CustomCursor.jsx"
import Experience from "./components/experience/experience.jsx"
import Loader from "./components/Loader.jsx"
import useStore from "./hooks/useStore.js"
import Hero from "./sections/Hero.jsx"
import Projects from "./sections/Projects.jsx"
import Section from "./components/Section.jsx"
import Skills from "./sections/Skills.jsx"
import Particles from "./components/Particles.jsx"


export default function App() {
  const UiShown = useStore((state) => state.UiShown)

  return (
    <>
      <CustomCursor />
      <div className="absolute w-screen h-screen inset-0">
        <Particles />
      </div>
      <main
        className="relative w-full h-screen overflow-y-scroll overflow-x-hidden"
      >
        <Section id="hero">
          <div className={`absolute w-full h-screen ${UiShown && 'z-[-10]'}`}>
            <Experience />
          </div>

          {UiShown && <Hero />}
        </Section>
        {UiShown && (
          <>
            <Section id="skills">
              <Skills />
            </Section>
            <Section id="projects">
              <Projects />
            </Section>
          </>
        )}
      </main>
    </>
  )
}
