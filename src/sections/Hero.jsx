import Button from "../components/Button";
import { words } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
    return ( 
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="Background" />
            </div>

            <main className="hero-layout">
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >Shaping 
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                                                <img 
                                                    src={word.imgPath} 
                                                    alt={word.text} 
                                                    className="xl-size-12 md:size-10 size-7 md:p-2 pd-1 rounded-full bg-white-50"/>
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >Into Real Projects</motion.h1>
                            <motion.h1
                                initial={{ opacity: 0, y: -50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 1 }}
                            >That Deliver Results</motion.h1>
                        </div>
                        <motion.p 
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            className="mx:text-xl relative z-10 pointer-events-none">Hi, I’m Mohammed — a software engineer from Morocco who loves turning ideas into clean, scalable code.</motion.p>
                        <Button 
                            className="md:w-80 md:h-16 w-60 h-12"
                            text='See my Work'
                            target="projects"
                            />
                    </div>
                </header>
                
            </main>

        </section>
     );
}
 
export default Hero;