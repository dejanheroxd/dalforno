import React from "react";
import { motion } from "framer-motion";

export default function DiscountPriceName() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, delay: 0.2 },
      }}
      viewport={{ once: true }}
      class="flex flex-col items-center pt-5 2xl:pt-0"
    >
      <p class="text-white font-serif pt-6 pb-2 2xl:pb-0 xl:text-lg 2xl:text-2xl 2xl:pt-20">
        Mediterranean Magic Pizza
      </p>
      <div class="2xl:flex text-center 2xl:justify-center 2xl:items-center 2xl:pt-6 2xl:gap-x-5">
        <p class="text-white font-serif font-bold xl:text-3xl pb-3 xl:pb-5 2xl:pb-5 2xl:pt-3">
          Only 11.99
        </p>
        <a href="/menu" aria-label="See All">
          <button class="px-3 xl:px-4 xl:py-1 border border-white text-white sm:hover:bg-white sm:hover:text-italia duration-300">
            See All
          </button>
        </a>
      </div>
    </motion.div>
  );
}
