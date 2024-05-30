import React from "react";
import { motion } from "framer-motion";

export default function Hours() {
  return (
    <div class="flex justify-center items-center h-72 2xl:order-1 2xl:w-2/4 2xl:h-full">
      <div class="2xl:flex 2xl:justify-center 2xl:pr-32">
        <div class="w-60 2xl:w-96 xl:w-96 font-serif sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.2 },
            }}
            viewport={{ once: true }}
            class="l pb-10 2xl:pb-16 text-italia"
          >
            Ώρες Λειτουργίας
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.23 },
            }}
            viewport={{ once: true }}
            class="l pb-1 2xl:pb-4 text-stone-800"
          >
            Δευ - Παρ: 5μμ - 12πμ
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.26 },
            }}
            viewport={{ once: true }}
            class="l pb-1 2xl:pb-4 text-stone-800"
          >
            Σάββατο: 5μμ - 12πμ
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, delay: 0.29 },
            }}
            viewport={{ once: true }}
            class="l pb-1 2xl:pb-4 text-stone-800"
          >
            Κυριακή: 5μμ - 12πμ
          </motion.p>
        </div>
      </div>
    </div>
  );
}
