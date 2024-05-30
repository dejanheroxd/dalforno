import React from "react";
import { motion } from "framer-motion";

export default function OwnerIntro() {
  return (
    <div className="mb-28">
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2232 },
        }}
        viewport={{ once: true }}
        className="text-italia text-2xl lg:text-3xl lg:pb-2"
      >
        Ιδιοκτήτης & Εκτελεστικός Σεφ
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="text-xl"
      >
        Alberto Paganini
      </motion.p>
    </div>
  );
}
