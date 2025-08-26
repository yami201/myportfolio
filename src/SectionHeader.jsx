import { motion } from "framer-motion";

const SectionHeader = ({ content }) => {
    return (
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
            <span className="uppercase">{content}</span>
        </h2>
    );
}

export default SectionHeader;