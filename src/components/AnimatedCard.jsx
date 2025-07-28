import { motion } from "framer-motion";

export default function AnimatedCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
    >
      {children}
    </motion.div>
  );
}
