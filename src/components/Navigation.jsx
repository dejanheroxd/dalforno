import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [navActive, setNavActive] = useState(false);

  function toggleNavActive() {
    setNavActive((prev) => !prev);
  }

  const navVars = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const btnVars1 = {
    animate: {
      rotate: navActive ? 45 : 0,
      y: navActive ? 4 : 0,
      transition: { duration: 0.1 },
    },
    exit: { rotate: 0 },
  };

  const btnVars2 = {
    animate: {
      rotate: navActive ? -45 : 0,
      y: navActive ? -2 : 0,
      transition: { duration: 0.1 },
    },
    exit: { rotate: 0 },
  };

  return (
    <header className="relative h-14 flex sm:justify-center sm:px-4 list-none">
      <li>
        <a
          href="/"
          className="absolute left-4 font-semibold text-lg top-[14px]"
        >
          Dalforno
        </a>
      </li>
      <button
        aria-label="navigation button"
        onClick={() => toggleNavActive()}
        className="absolute right-3 top-0 z-50 "
      >
        <div className="absolute right-[4px] h-10 w-10 items-center z-50 flex flex-col justify-center sm:hidden top-2">
          <AnimatePresence>
            <motion.span
              variants={btnVars1}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-black h-[2px] duration-300  w-7 block mb-1"
            ></motion.span>
          </AnimatePresence>
          <AnimatePresence>
            <motion.span
              variants={btnVars2}
              initial="initial"
              animate="animate"
              exit="exit"
              className="bg-black h-[2px] duration-300  w-7 "
            ></motion.span>
          </AnimatePresence>
        </div>
      </button>
      <AnimatePresence>
        {navActive && (
          <motion.ul
            variants={navVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="h-screen z-40 origin-right w-screen flex flex-col justify-center items-center gap-y-8 text-3xl sm:flex bg-white border sm:items-center sm:gap-x-20 border-red-500"
          >
            <li onClick={() => toggleNavActive()}>
              <a href="/">Home</a>
            </li>
            <li onClick={() => toggleNavActive()}>
              <a href="/about/">About</a>
            </li>
            <li onClick={() => toggleNavActive()}>
              <a href="/menu/">Menu</a>
            </li>
            <li onClick={() => toggleNavActive()}>
              <a href="/contact/">Contact</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
      <button className="hidden sm:block sm:absolute sm:text-white sm:bg-red-500 sm:h-full sm:w-32 sm:right-0">
        Reserve
      </button>
    </header>
  );
}
