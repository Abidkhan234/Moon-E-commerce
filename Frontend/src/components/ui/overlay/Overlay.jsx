import { motion } from "motion/react";
import usePreventScroll from "../../hooks/usePreventScroll";

const Overlay = ({ ref = null, active, setActive }) => {
  // For Preventing Scrolling
  if (ref) {
    usePreventScroll(ref, active);
  }
  // For Preventing Scrolling

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bg-black z-40 h-[100vh] w-full"
      onClick={() => setActive(!active)}
      ref={ref}
    ></motion.div>
  );
};

export default Overlay;
