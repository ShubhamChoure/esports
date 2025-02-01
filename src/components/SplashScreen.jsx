import { motion } from "framer-motion"

const SplashScreen = () => {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2 }}
    >
      <motion.p
        className="text-white text-sm mb-2"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        TECHNOMEET 2025
      </motion.p>
      <motion.h1
        className="text-white text-6xl font-bold mb-2"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        eSports
      </motion.h1>
      <motion.p
        className="text-white text-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        BY PGMCOE IT DEPT
      </motion.p>
    </motion.div>
  )
}

export default SplashScreen
