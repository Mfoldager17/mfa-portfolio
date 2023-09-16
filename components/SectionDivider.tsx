"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gray-400  my-20 h-16 w-1 sm:h-16 sm:w-1 rounded-full block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  );
}
