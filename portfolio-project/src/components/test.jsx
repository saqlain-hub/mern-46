import React from "react";
import { motion } from "framer-motion";

const test = () => {
  return (
    <div className="course">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 2 }}
      ></motion.div>
    </div>
  );
};

export default test;
