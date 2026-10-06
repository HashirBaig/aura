import { motion } from "motion/react";

import Navbar from "@/components/Layout/Navbar";
import HeadphoneScene from "@/components/Three/HeadphoneScene";

function LandingPage() {
  return (
    <main>
      <section id="hero" className="relative min-h-screen overflow-hidden">
        <Navbar />

        <div className="mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center px-6 pt-24 lg:grid-cols-2 lg:px-10">
          {/* Left */}
          <div className="relative z-10">
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="mb-5 text-xs uppercase tracking-[0.3em] text-white/40"
            >
              Wireless Spatial Headphones
            </motion.p>

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="text-6xl font-medium tracking-tigher sm:text-7xl lg:text-8xl"
            >
              Hear
              <br />
              Beyond.
            </motion.h1>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="mt-7 max-w-md text-base leading-7 text-white/50"
            >
              Immersive sound, all-day comfort and a design engineered to
              disappear into your world.
            </motion.p>

            <motion.a
              href="#sound"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.7,
              }}
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-8 inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-sm text-white"
            >
              Explore AURA
              <span className="ml-3">↓</span>
            </motion.a>
          </div>

          {/* Right / 3D */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.4,
              duration: 1,
              ease: "easeOut",
            }}
            className="relative h-125 lg:h-175"
          >
            {/* Background circle */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-82.5 w-82.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

            <HeadphoneScene />
          </motion.div>
        </div>
      </section>

      {/* Temporary sections so scrolling works */}
      <section
        id="sound"
        className="flex min-h-screen items-center px-6 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Immersive Sound
          </p>

          <h2 className="mt-4 text-5xl font-medium tracking-tight lg:text-7xl">
            360° Spatial Audio
          </h2>

          <p className="mt-6 max-w-md text-lg text-white/40">
            Sound that moves around you.
          </p>
        </div>
      </section>

      <section
        id="design"
        className="flex min-h-screen items-center px-6 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Designed for Comfort
          </p>

          <h2 className="mt-4 text-5xl font-medium tracking-tight lg:text-7xl">
            Light by design.
          </h2>
        </div>
      </section>

      <section
        id="colors"
        className="flex min-h-screen items-center px-6 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Choose Your Finish
          </p>

          <h2 className="mt-4 text-5xl font-medium tracking-tight lg:text-7xl">
            Make it yours.
          </h2>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
