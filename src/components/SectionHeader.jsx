import { motion } from "framer-motion";
import ICONS from "../assests/icons";

const SectionHeader = ({ content }) => {
    return (
        <h2
            className="text-xl font-bold tracking-widest mb-12 flex items-center gap-4">
            <motion.span
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 3,
                }}>
                <ICONS.GearIcon
                    className="size-12"
                />
            </motion.span>
            <span className="uppercase">{content}</span>
        </h2>
    );
}

export default SectionHeader;