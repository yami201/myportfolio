import { useEffect, useState } from "react";
import ProjectStack from "./ProjectStack";
import ProjectImage from "./ProjectImage";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import ProjectTitle from "./ProjectTitle";
const ProjectItem = ({ index, project }) => {
    const [hovered, setHovered] = useState(false)
    const [toggled, setToggled] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: 767 })
    const [active, setActive] = useState(false)


    useEffect(
        () => {
            setActive(isMobile ? toggled : hovered)
        }, [toggled, hovered]
    )

    const handleClick = () => {
        if (isMobile) {
            setToggled(!toggled)
        }
    }

    

    return (
        <li
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={handleClick}
            className="relative w-full md:border-b border-slate-600 py-4 max-md:mb-6 ">
            {

                project.image && (
                    <ProjectImage
                        src={project.image}
                        alt={project.title}
                        hoverActive={active}
                    />
                )

            }
            <div className="flex w-full gap-4">
                <p className="font-bold text-lg">
                    _{String(index + 1).padStart(2, '0')}.
                </p>
                <div className="pt-2">
                    <ProjectTitle
                        title={project.title}
                        link={project.link ?? null}
                        active={active}
                    />

                    <ProjectStack skills={project.stack} />
                    <AnimatePresence>
                        {active && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="overflow-hidden"
                            >
                                <p className="mt-2 text-slate-400 max-w-2xl leading-relaxed">
                                    {project.description}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </li>
    );
}



export default ProjectItem;