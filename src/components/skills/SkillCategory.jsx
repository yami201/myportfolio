import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive"
import SkillTile from "./SkillTile.jsx"

const SkillCategory = ({ title, items }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 })

  return (
    <div className="mb-10 md:mb-28 flex max-md:flex-col w-full">
      {isMobile ? (
        <>
          <h3 className="text-3xl font-bold uppercase text-gray-400 mb-6 md:w-1/3 md:pl-10">
            {title}
          </h3>
          <ul className="flex flex-wrap gap-6 md:w-2/3">
            {items.map((skill) => (
              <li key={skill.name}>
                <SkillTile {...skill} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.2, ease: "easeOut" },
              },
            }}
            className="text-3xl font-bold uppercase text-gray-400 mb-6 md:w-1/3 md:pl-10"
          >
            {title}
          </motion.h3>

          <ul className="flex flex-wrap gap-6 md:w-2/3">
            {items.map((skill) => (
              <motion.li
                key={skill.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.25, ease: "easeOut" },
                  },
                }}
              >
                <SkillTile {...skill} />
              </motion.li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default SkillCategory
