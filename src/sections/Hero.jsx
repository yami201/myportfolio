import { ReactTyped } from "react-typed"
import Button from "../components/Button.jsx"
import Github from "../assests/Github.jsx"
import LinkedIn from "../assests/LinkedIn.jsx"
import { motion } from "framer-motion"

const Hero = () => {
    const scrollToContactForm = () => {
        const contactForm = document.getElementById("contact");
        if (contactForm) {
            contactForm.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }
    return (
        <div className="relative h-screen py-10 md:py-20 flex flex-col max-md:pt-30 md:px-24  md:justify-center max-md:items-center">
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-slate-400 font-bold text-xl mb-2 ml-1">Hi, I am</motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="font-bold mb-4">
                <span className="text-6xl md:text-8xl">Mohammed</span><br />
                <span className="text-7xl md:text-9xl">NEJJAR</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="text-2xl md:text-4xl font-bold text-slate-600 mb-6 flex max-md:flex-col max-md:items-center">
                <ReactTyped
                    strings={[
                        "Software Engineer",
                        "Fullstack Developer",
                        "Blockchain Developer",
                        "DevOps Engineer",
                        "3D Enthusiast"
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }}
                className="w-72">
                <Button text="View My Work" target="projects" />
                <div className="flex justify-between mt-4">
                    <button 
                        onClick={scrollToContactForm}
                        className="border border-slate-500 bg-black rounded font-bold p-2 px-4 cursor-pointer">Hire Me</button>
                    <a
                        className="border border-slate-500 bg-black rounded font-bold p-2 px-4 cursor-pointer"
                        target="_blank"
                        href="https://github.com/yami201">
                        <Github />
                    </a>
                    <a
                        className="border border-slate-500 bg-black rounded font-bold p-2 px-4 cursor-pointer"
                        target="_blank"
                        href="https://www.linkedin.com/in/mohammed-nejjar">
                        <LinkedIn />
                    </a>
                </div>

            </motion.div>

        </div>
    )
}

export default Hero
