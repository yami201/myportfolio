import { skills } from "../constants/index.js";
import SkillCategory from "../components/skills/SkillCategory.jsx";
import { motion } from "framer-motion";
// Full section
export default function Skills() {
  return (
    <section className="min-h-screen w-full px-8 py-16 text-white">
      <h2 
        className="text-xl font-bold tracking-widest mb-12 flex items-center gap-4">
        <span>
          <motion.img
            src="/icons/gear.svg"
            alt="Gear"
            className="size-12"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 3, 
            }}
          />
        </span>
        <span>MY STACK</span>
      </h2>

      <SkillCategory title="Frontend" items={skills.frontend} />
      <SkillCategory title="Backend" items={skills.backend} />
      <SkillCategory title="Blockchain" items={skills.blockchain} />
      <SkillCategory title="Databases" items={skills.databases} />
      <SkillCategory title="Devops" items={skills.devops} />
    </section>
  )
}
