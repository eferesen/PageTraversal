import { motion } from "framer-motion";

const PageMotion = ({ children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ x: "50vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.1, stiffness: 25 }}
    >
      {children}
    </motion.div>
  );
};

export default PageMotion;
