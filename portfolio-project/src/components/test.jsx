import React from "react";
import { motion } from "framer-motion";

const test = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className="course">
      <motion.div
        className="box"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 4 }}
        drag
      ></motion.div>
    </div>
  );
};

export default test;
