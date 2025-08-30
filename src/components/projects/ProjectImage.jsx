import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"

gsap.registerPlugin(ScrollTrigger)

const ProjectImage = ({ src, alt, hoverActive }) => {
    const imgRef = useRef(null)
    const isMobile = useMediaQuery({ maxWidth: 767 })


    if (isMobile) {
        return (
            <div className="relative w-full aspect-video overflow-hidden rounded-lg mb-4">
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    loading="eager"
                    className="absolute top-0 left-0 w-full h-[130%]"
                />
            </div>
        )
    }

    useEffect(() => {
        if (!imgRef.current) return

        gsap.fromTo(
            imgRef.current,
            { y: "0%" },
            {
                y: "-10%",
                ease: "none",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            }
        )
    }, [])

    return (

        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={hoverActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute right-50 top-1/2 -translate-y-1/2 w-[400px] pointer-events-none rounded-lg"
        >
            <img src={src} alt={alt} className="w-full h-auto object-contain" />
        </motion.div>
    )
}

export default ProjectImage
