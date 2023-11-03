import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function HorizontalScroll() {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-124%"]);

  return (
    <div className="bg-white">
      <section ref={targetRef} className="relative h-[300vh] bg-white">
        <div className="sticky top-0 bg-italia flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="absolute  right-[-1200px]">
            <p className="text-9xl font-serif font-semibold text-white">
              Best Pizza in Town
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
