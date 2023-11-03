import React from "react";
import { motion } from "framer-motion";

export default function SpecialOffer() {
  return (
    <motion.p
      initial={{ opacity: 0, x: -100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2 },
      }}
      viewport={{ once: true }}
      class="pb-10 pt-10 2xl:pt-0 text-center text-white text-3xl xl:text-4xl font-serif"
    >
      Special Offer
    </motion.p>
  );
}
