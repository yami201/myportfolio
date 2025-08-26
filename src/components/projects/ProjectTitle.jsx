import { AnimatePresence, motion } from "framer-motion";

const ProjectTitle = ({ title, active, link }) => {
  return (
    <>
      <h3 className="relative text-3xl md:text-5xl font-bold uppercase opacity-85 text-white flex">
        <span className="relative z-0">{title}</span>

        <motion.span
          initial={{ width: 0 }}
          animate={active ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute left-0 top-0 overflow-hidden whitespace-nowrap"
        >
          <span className="text-slate-400">{title}</span>
        </motion.span>

        <AnimatePresence>
          {active && link && (
            <motion.a
              href={link}
              target="_blank"
              initial={{ opacity: 0, x: -10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              rel="noopener noreferrer"
            >
              <img src="/icons/link.svg" alt="Link" className="size-10" />
            </motion.a>
          )}
        </AnimatePresence>
      </h3>

    </>
  );
};

export default ProjectTitle;
