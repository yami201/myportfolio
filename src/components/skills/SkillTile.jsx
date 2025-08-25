import { motion, useInView } from "framer-motion"
import { useRef } from "react";

const SkillTile = ({ name, icon }) => {
  const ref = useRef()
  const inView = useInView(ref, { amount: 0.5 })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.1 },
        },
      }}
      
      className="flex w-fit items-center cursor-pointer select-none gap-3"
    >
      <motion.img
        src={icon}
        alt={name}
        whileHover={{ scale: 1.1 }}
        className={`w-12 h-12 transition-all grayscale hover:grayscale-0 focus:grayscale-0`}
      />
      <p className="mt-2 text-sm text-gray-300">{name}</p>
    </motion.div>
  )
}


export default SkillTile;