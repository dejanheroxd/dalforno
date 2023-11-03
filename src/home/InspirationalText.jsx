import React from "react";
import { motion } from "framer-motion";

export default function InspirationalText() {
  return (
    <div class="w-[280px] flex flex-col items-center text-center lg:text-left lg:items-start lg:w-[430px]">
      <div class="flex flex-col lg:hidden w-60 lg:w-96 text-center lg:text-left">
        <p class="text-italia font-serif py-10 text-lg md:text-lg lg:text-3xl">
          Authentic Italian Flavors, Generations in the Making
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.2 },
        }}
        viewport={{ once: true }}
        class="text-italia hidden lg:block font-serif py-16 text-lg lg:text-3xl"
      >
        <p class="pb-[7px]">Authentic Italian Flavors,</p>
        <p>Generations in the Making</p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.25 },
        }}
        viewport={{ once: true }}
        class="text-stone-800 font-serif lg:text-lg lg:leading-9 lg:pb-6"
      >
        Welcome to our Italian pizzeria, where we bring the flavors of Italy to
        your plate. Our passion for authentic Italian taste spans generations.
        Each dish is a labor of love, crafted with the finest ingredients. Join
        us on our culinary journey. Buon appetito!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.8, delay: 0.3 },
        }}
        viewport={{ once: true }}
      >
        <a href="/about" aria-label="More Info About Us">
          <button class="px-12 lg:px-6 py-3 lg:py-[6px] border border-gray-700 text-sm sm:text-base font-semibold text-gray-700 my-8 sm:hover:text-italia sm:duration-300">
            More Info About Us
          </button>
        </a>
      </motion.div>
    </div>
  );
}
