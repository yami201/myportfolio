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
import About from "./sections/About.jsx"
import Career from "./sections/Career.jsx"


export default function App() {
  const UiShown = useStore((state) => state.UiShown)

  return (
    <>
      <CustomCursor />
      <Suspense fallback={<Loader />}>
        <div className="fixed w-screen h-screen inset-0">
          <Particles />
        </div>
        <main
          className={`relative w-full h-screen ${!UiShown && 'max-h-screen overflow-hidden'}`}
        >
          <Section id="hero">
            <div className={`absolute w-full h-screen ${UiShown && 'z-[-10]'}`}>
              <Experience />
            </div>

            {UiShown && <Hero />}
          </Section>
          {UiShown && (
            <>
              <Section id="about" className="px-8">
                <About />
              </Section>
              <Section id="experience" className="px-8">
                <Career />
              </Section>
              <Section id="skills" className="px-8">
                <Skills />
              </Section>
              <Section id="projects" className="px-8">
                <Projects />
              </Section>
            </>
          )}
        </main>

      </Suspense>
    </>
  )
}
