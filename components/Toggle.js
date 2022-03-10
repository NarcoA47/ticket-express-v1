import { motion } from "framer-motion";

function Toggle() {
  return (
    <motion.div className="fixed bottom-0 inset-x-0 h-10 w-10 flex flex-col items-center rounded-full bg-blue-500"></motion.div>
  );
}

export default Toggle;
