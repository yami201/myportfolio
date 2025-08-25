import { motion, useInView } from "framer-motion"
import SkillTile from "./SkillTile.jsx"
import { useRef } from "react"

const SkillCategory = ({ title, items }) => {
  const ref = useRef()
  const inView = useInView(ref, { amount: 0.2 })
  return (
    <div
        className="mb-10 md:mb-28 flex max-md:flex-col w-full"
    >
      <motion.h3
        ref={ref}
        initial="hidden"
        whileInView="visible"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut", staggerChildren: 0.1 },
          },
        }}
        className="text-3xl font-bold uppercase text-gray-400 mb-6 md:w-1/3 md:pl-10">
        {title}
      </motion.h3>

      <div className="flex flex-wrap gap-6 md:w-2/3">
        {items.map((skill) => (
          <motion.div
            key={skill.name}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            <SkillTile {...skill} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SkillCategory;