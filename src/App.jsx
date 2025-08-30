import { useState, useEffect, lazy } from "react"
import CustomCursor from "./components/CustomCursor.jsx"
import Loader from "./components/Loader.jsx"
import useStore from "./hooks/useStore.js"
import Particles from "./components/Particles.jsx"
import Section from "./components/Section.jsx"
import { assets } from "./constants/index.js"

// Lazy imports
const Hero = lazy(() => import("./sections/Hero.jsx"))
const Projects = lazy(() => import("./sections/Projects.jsx"))
const Skills = lazy(() => import("./sections/Skills.jsx"))
const About = lazy(() => import("./sections/About.jsx"))
const Career = lazy(() => import("./sections/Career.jsx"))
const Contact = lazy(() => import("./sections/Contact.jsx"))
const Experience = lazy(() => import("./components/experience/experience.jsx"))

/* --- Preload images/icons --- */
function preloadImage(src) {
  return new Promise((resolve) => {
    const img = new Image()
    img.src = src
    img.onload = img.onerror = resolve
  })
}

/* --- Preloader --- */
function Preloader({ children }) {
  const [progress, setProgress] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let completed = 0
    const total =
      assets.length + 7 // number of lazy imports we have

    // Update progress helper
    const update = () => {
      completed++
      setProgress(Math.round((completed / total) * 100))
      if (completed === total) setReady(true)
    }

    // Preload all images/icons
    assets.forEach((src) => {
      preloadImage(src).then(update)
    })

    // Preload all lazy components (force dynamic imports)
    Promise.all([
      import("./sections/Hero.jsx"),
      import("./sections/Projects.jsx"),
      import("./sections/Skills.jsx"),
      import("./sections/About.jsx"),
      import("./sections/Career.jsx"),
      import("./sections/Contact.jsx"),
      import("./components/experience/experience.jsx"),
    ]).then(() => {
      // Count them all at once
      for (let i = 0; i < 7; i++) update()
    })
  }, [])

  return ready ? children : <Loader progress={progress} />
}

/* --- App --- */
export default function App() {
  const UiShown = useStore((state) => state.UiShown)

  return (
    <>
      <CustomCursor />
      <Preloader>
        <div className="fixed w-screen h-screen inset-0">
          <Particles />
        </div>
        <main
          className={`relative w-full h-screen ${
            !UiShown && "max-h-screen overflow-hidden"
          }`}
        >
          <Section id="hero">
            <div className={`absolute w-full h-screen ${UiShown && "z-[-10]"}`}>
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
              <Section id="contact" className="px-8">
                <Contact />
              </Section>
            </>
          )}
        </main>
      </Preloader>
    </>
  )
}
