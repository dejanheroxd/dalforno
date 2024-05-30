import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
  const [navActive, setNavActive] = useState(false);

  function toggleNavActive() {
    if (window.innerWidth < 600) {
      setNavActive((prev) => !prev);
    } else {
      setNavActive(true);
    }
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

  const navItem = {
    initial: {
      x: "100vw",
      transition: { duration: 0.4, ease: [0.37, 0, 0.63, 1] },
    },
    animate: {
      x: 0,
      transition: { duration: 0.6, ease: [0, 0.55, 0.45, 1] },
    },
    exit: {
      x: 0,
      transition: { duration: 2.4 },
    },
  };

  const reserve = {
    initial: {
      opacity: 0,
      y: -100,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 },
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

  useEffect(() => {
    if (navActive && window.innerWidth < 600) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.classList.overflow = "visible";
    };
  }, [navActive]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 700) {
        setNavActive(true);
      } else {
        setNavActive(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky bg-white top-0 left-0 z-40 h-16 sm:h-[65px] flex sm:justify-center sm:px-4 list-none">
      <li>
        <a
          aria-label="HOME"
          href="/"
          className="absolute text-black text-3xl left-4 font-semibold top-[12px]"
        >
          D
        </a>
      </li>
      <button
        aria-label="navigation button"
        onClick={() => toggleNavActive()}
        className="absolute right-3 top-[11px] z-50 "
      >
        <div className="sticky right-[4px] h-10 w-10 items-center z-50 flex flex-col justify-center sm:hidden top-3">
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
            className="h-screen fixed top-0 z-40 origin-right w-screen flex flex-col justify-center items-center gap-y-8 text-3xl sm:flex bg-white sm:items-center
            sm:static sm:justify-start sm:text-italia lg:pl-32 sm:pl-24 sm:flex-row sm:gap-y-0 sm:text-base lg:gap-x-24 sm:gap-x-16 sm:h-full sm:w-full sm:z-10"
          >
            <div className="overflow-hidden sm:hover:text-red-950 sm:duration-200 ">
              <motion.li
                variants={navItem}
                initial="initial"
                animate="animate"
                exit="initial"
                onClick={() => toggleNavActive()}
              >
                <a href="/" aria-label="HOME">
                  ΑΡΧΙΚΗ
                </a>
              </motion.li>
            </div>
            <div className="overflow-hidden sm:hover:text-red-950 sm:duration-200">
              <motion.li
                variants={navItem}
                initial="initial"
                animate="animate"
                exit="initial"
                onClick={() => toggleNavActive()}
              >
                <a href="/about/" aria-label="ABOUT">
                  ΛΙΓΑ ΓΙΑ ΕΜΑΣ
                </a>
              </motion.li>
            </div>
            <div className="overflow-hidden sm:hover:text-red-950 sm:duration-200">
              <motion.li
                variants={navItem}
                initial="initial"
                animate="animate"
                exit="initial"
                onClick={() => toggleNavActive()}
              >
                <a href="/menu/" aria-label="MENU">
                  ΜΕΝΟΥ
                </a>
              </motion.li>
            </div>
            <div className="overflow-hidden sm:hover:text-red-950 sm:duration-200">
              <motion.li
                variants={navItem}
                initial="initial"
                animate="animate"
                exit="initial"
                onClick={() => toggleNavActive()}
              >
                <a href="/contact/" aria-label="CONTACT">
                  ΕΠΙΚΟΙΝΩΝΙΑ
                </a>
              </motion.li>
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
      <a href="/contact" aria-label="contact">
        <motion.button
          variants={reserve}
          initial="initial"
          animate="animate"
          className="hidden sm:block sm:absolute sm:text-white sm:bg-italia sm:h-12 top-2 sm:w-32 sm:right-3 sm:z-50 sm:hover:bg-red-700 sm:hover:text-white sm:duration-300"
        >
          Κράτηση
        </motion.button>
      </a>
    </header>
  );
}
