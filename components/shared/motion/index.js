import { motion } from 'framer-motion';

const PageMotion = ({ children, direction }) => {
  //  initial={{ x: '50vw' }}
  let viewPortWidth
  direction > 0 ? viewPortWidth ='-50vw': viewPortWidth ='50vw'

  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ x: viewPortWidth}}
      animate={{ x: 10 }}
      transition={{ type: "spring", delay: 0.1, stiffness: 30 }}
    >
      {children}
    </motion.div>
  );
};

export default PageMotion;
