import { skills } from "../constants/index.js";
import SkillCategory from "../components/skills/SkillCategory.jsx";
import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader.jsx";

export default function Skills() {
  return (
    <div className="min-h-screen w-full py-16 text-white">
      <SectionHeader content="my stack" />

      <SkillCategory title="Frontend" items={skills.frontend} />
      <SkillCategory title="Backend" items={skills.backend} />
      <SkillCategory title="Blockchain" items={skills.blockchain} />
      <SkillCategory title="Databases" items={skills.databases} />
      <SkillCategory title="Devops" items={skills.devops} />
    </div>
  )
}
