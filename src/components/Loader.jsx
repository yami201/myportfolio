import { AnimatePresence, motion } from "framer-motion";

const Loader = ({ progress }) => {
  return (
    <AnimatePresence>

      <div 
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col justify-center items-center w-screen h-screen bg-black text-white font-bold">
        <motion.div
          className="flex space-x-2 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-white rounded-full"></span>
        </motion.div>

        <p className="text-lg">Loading {progress}%</p>
      </div>
    </AnimatePresence>
  );
};

export default Loader;
