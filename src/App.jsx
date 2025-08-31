import { lazy } from "react"
import CustomCursor from "./components/CustomCursor.jsx"
import useStore from "./hooks/useStore.js"
import Particles from "./components/Particles.jsx"
import Section from "./components/Section.jsx"
import Preloader from "./components/Preloader.jsx"
import Footer from "./sections/Footer.jsx"

const Hero = lazy(() => import("./sections/Hero.jsx"))
const Projects = lazy(() => import("./sections/Projects.jsx"))
const Skills = lazy(() => import("./sections/Skills.jsx"))
const About = lazy(() => import("./sections/About.jsx"))
const Career = lazy(() => import("./sections/Career.jsx"))
const Contact = lazy(() => import("./sections/Contact.jsx"))
const Experience = lazy(() => import("./components/experience/experience.jsx"))



const components = [
  import("./sections/Hero.jsx"),
  import("./sections/Projects.jsx"),
  import("./sections/Skills.jsx"),
  import("./sections/About.jsx"),
  import("./sections/Career.jsx"),
  import("./sections/Contact.jsx"),
  import("./components/experience/experience.jsx"),
]

/* --- App --- */
export default function App() {
  const UiShown = useStore((state) => state.UiShown)



  return (
    <>
      <CustomCursor />
      <Preloader components={components}>
        <div className="fixed w-screen h-screen inset-0">
          <Particles />
        </div>
        <main
          className={`relative w-full h-screen ${!UiShown && "max-h-screen overflow-hidden"
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
              <Section id="footer" className="px-8">
                <Footer />
              </Section>
            </>
          )}
        </main>
      </Preloader>
    </>
  )
}
