import { ReactTyped } from "react-typed"
import Button from "../components/Button.jsx"
import Github from "../assests/Github.jsx"
import LinkedIn from "../assests/LinkedIn.jsx"

const Hero = () => {
    return (
        <div className="relative h-screen p-10 sm:p-20 flex flex-col max-md:pt-30 md:justify-center max-md:items-center">
            <p className="text-slate-400 font-bold text-xl mb-2 ml-1">Hi, I am</p>
            <h1 className="font-bold mb-4">
                <span className="text-6xl md:text-8xl">Mohammed</span><br />
                <span className="text-7xl md:text-9xl">NEJJAR</span>
            </h1>

            <div className="text-2xl md:text-4xl font-bold text-slate-600 mb-6 flex max-md:flex-col max-md:items-center">
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
            </div>

            <div className=" w-72">
                <Button text="View My Work" target="projects" />
                <div className="flex justify-between mt-4">
                    <div className="border border-slate-500 bg-black rounded font-bold p-2 px-4">Hire Me</div>
                    <a
                        className="border border-slate-500 bg-black rounded font-bold p-2 px-4"
                        target="_blank"
                        href="https://github.com/yami201">
                        <Github />
                    </a>
                    <a
                        className="border border-slate-500 bg-black rounded font-bold p-2 px-4"
                        target="_blank"
                        href="https://www.linkedin.com/in/mohammed-nejjar">
                        <LinkedIn />
                    </a>
                </div>

            </div>

        </div>
    )
}

export default Hero
