import { motion } from "motion/react";

function Navbar() {
  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="absolute left-0 top-0 z-50 w-full"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-[0.35em] text-white"
        >
          AURA
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#sound"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Sound
          </a>

          <a
            href="#design"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Design
          </a>

          <a
            href="#colors"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Colors
          </a>
        </div>

        <button
          type="button"
          className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105"
        >
          Buy — €299
        </button>
      </nav>
    </motion.header>
  );
}

export default Navbar;
