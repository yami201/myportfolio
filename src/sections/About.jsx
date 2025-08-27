import { motion } from "framer-motion";

const About = () => {
    return (
        <section
            id="about"
            className="w-full text-white pb-24 px-6 md:px-24"
        >
            <div className="max-w-6xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-6xl font-bold leading-snug text-gray-200 mb-12 md:mb-24 text-justify"
                >
                    I believe in using code not just to build software,
                    but to bring ideas to life and shape meaningful digital experiences.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-gray-400 text-lg md:mb-10 md:pb-4 md:border-b border-gray-500"
                >
                    This is me.
                </motion.p>

                <div className="md:flex">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold mb-8 md:w-1/3"
                    >
                        Hi, I’m Mohammed.
                    </motion.h2>


                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-lg text-gray-300 leading-relaxed md:w-2/3"
                    >
                        <p>
                            I’m a fresh graduate in Computer Science Engineering from Morocco, driven by
                            a passion for coding and turning ideas into meaningful digital experiences.
                        </p>

                        <p>
                            I’m especially curious about{" "}
                            <span className="text-white font-medium">blockchain</span> and{" "}
                            <span className="text-white font-medium">software automation</span>, always
                            seeking ways to push boundaries and think differently.
                        </p>

                        <p>
                            My goal is to grow as an engineer by contributing to impactful projects
                            while continuously learning and refining my craft.
                        </p>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default About;
