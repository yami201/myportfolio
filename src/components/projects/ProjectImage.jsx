import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"

gsap.registerPlugin(ScrollTrigger)

const ProjectImage = ({ src, alt, hoverActive }) => {
    const imgRef = useRef(null)

    useEffect(() => {
        if (!imgRef.current) return

        gsap.fromTo(
            imgRef.current,
            { y: "0%" }, // start position
            {
                y: "-10%", // move up
                ease: "none",
                scrollTrigger: {
                    trigger: imgRef.current,     // track when the image wrapper hits viewport
                    start: "top bottom",         // 0 → when top of wrapper hits bottom of viewport
                    end: "bottom top",           // 1 → when bottom of wrapper hits top of viewport
                    scrub: true,                 // smoothly ties animation to scroll
                },
            }
        )
    }, [])

    return (
        <>
            {/* Mobile view */}
            <div className="relative w-full h-[400px] overflow-hidden md:hidden rounded-lg">
                <img
                    ref={imgRef}
                    src={src}
                    alt={alt}
                    className="absolute top-0 left-0 w-full h-[110%]"
                />
            </div>

            {/* Desktop  */}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={hoverActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="hidden md:block absolute right-50 top-1/2 -translate-y-1/2 w-[400px] pointer-events-none rounded-lg"
            >
                <img src={src} alt={alt} className="w-full h-auto object-contain" />
            </motion.div>
        </>
    )
}

export default ProjectImage
