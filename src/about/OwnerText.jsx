import React from "react";
import { motion } from "framer-motion";

export default function OwnerText() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="pt-8 text-xl italic pb-10"
      >
        "Al Dente makes you smile"
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true }}
        className="w-80 lg:w-[440px] lg:text-lg"
      >
        I'm a paragraph. Click here to add your own text and edit me. It’s easy.
        Just click “Edit Text” or double click me to add your own content and
        make changes to the font. I’m a great place for you to tell a story and
        let your users know a little more about you.
      </motion.p>
    </div>
  );
}
