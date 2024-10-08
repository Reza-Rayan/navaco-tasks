import { motion } from "framer-motion";
import "./Avatar.css";
import toast from "react-hot-toast";
// ------------------------------------

const Avatar = () => {
  const handleClick = () => {
    toast.success("Avatar has been Clicked", { duration: 6000 });
    // Here I show a messag
  };

  return (
    <motion.div
      className="avatar fixed bottom-0 left-0 w-32 h-32 md:w-24 md:h-24 lg:w-64 lg:h-64 bg-avatar bg-no-repeat bg-contain"
      animate={{ x: [0, window.innerWidth] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }} // Infinite loop
      onClick={handleClick}
    ></motion.div>
  );
};

export default Avatar;
