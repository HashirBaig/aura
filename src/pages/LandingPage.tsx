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

      {/* Immersive Sound */}
      <section
        id="sound"
        className="relative flex min-h-[70vh] items-center overflow-hidden px-6 py-24 lg:px-10"
      >
        {/* Background circles */}
        <div className="pointer-events-none absolute -right-40 top-1/2 h-136 w-136 -translate-y-1/2 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute -right-20 top-1/2 h-96 w-[24rem] -translate-y-1/2 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-0 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full border border-white/10" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Immersive Sound
            </p>

            <h2 className="mt-5 max-w-xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              360° Spatial Audio
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-white/40">
              Sound that moves around you. A wider soundstage creates a more
              natural sense of depth, direction, and space.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1 }}
            className="flex min-h-80 items-center justify-center"
          >
            <div className="relative flex h-72 w-72 items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-full w-full rounded-full border border-white/20"
              />

              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.1, 0.25, 0.1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 0.6,
                  ease: "easeInOut",
                }}
                className="absolute h-[70%] w-[70%] rounded-full border border-white/20"
              />

              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/3">
                <span className="text-3xl">360°</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comfort / Design */}
      <section
        id="design"
        className="relative flex min-h-[70vh] items-center px-6 py-24 lg:px-10"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Designed for Comfort
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Light by design.
              <br />
              Built to disappear.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-white/40">
              Soft materials and carefully balanced weight make AURA comfortable
              from the first track to the last.
            </p>
          </motion.div>

          <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4">
            {[
              {
                value: "40 mm",
                label: "Dynamic drivers",
              },
              {
                value: "280 g",
                label: "Total weight",
              },
              {
                value: "Memory",
                label: "Foam cushions",
              },
              {
                value: "Aluminum",
                label: "Lightweight frame",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="border-t border-white/10 pt-5"
              >
                <p className="text-2xl font-medium tracking-tight sm:text-3xl">
                  {feature.value}
                </p>

                <p className="mt-2 text-sm text-white/35">{feature.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Battery */}
      <section
        id="battery"
        className="flex min-h-[80vh] items-center justify-center px-6 py-24 text-center lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            Battery
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="mt-5 text-[clamp(6rem,18vw,14rem)] font-medium leading-none tracking-[-0.08em]"
          >
            40
          </motion.h2>

          <p className="-mt-2 text-2xl font-medium tracking-[0.2em] text-white/70">
            HRS
          </p>

          <p className="mx-auto mt-6 max-w-sm text-base leading-7 text-white/40">
            Enough battery for long workdays, long flights, and even longer
            playlists.
          </p>
        </motion.div>
      </section>

      {/* Colors */}
      <section
        id="colors"
        className="relative flex min-h-[70vh] items-center px-6 py-24 lg:px-10"
      >
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Choose Your Finish
            </p>

            <h2 className="mt-5 text-5xl font-medium tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Make it yours.
            </h2>

            <p className="mt-6 max-w-md text-lg leading-8 text-white/40">
              Three understated finishes designed to fit naturally into your
              everyday setup.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <button
                type="button"
                className="group flex max-w-sm items-center justify-between border-b border-white/10 pb-4 text-left"
              >
                <span className="flex items-center gap-4">
                  <span className="h-5 w-5 rounded-full bg-[#171719] ring-1 ring-white/20" />

                  <span className="text-base text-white">Midnight</span>
                </span>

                <span className="text-sm text-white/35 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9 }}
            className="relative flex min-h-105 items-center justify-center"
          >
            <div className="absolute h-112 w-md rounded-full border border-white/5" />

            <div className="absolute h-80 w-[20rem] rounded-full border border-white/10" />

            <p className="relative text-center text-sm uppercase tracking-[0.3em] text-white/20">
              3D Product
              <br />
              Color Preview
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        id="buy"
        className="flex min-h-[70vh] items-center justify-center px-6 py-24 lg:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-white/40">
            AURA One
          </p>

          <h2 className="mt-5 text-5xl font-medium tracking-tighter sm:text-7xl lg:text-8xl">
            Your sound.
            <br />
            Your world.
          </h2>

          <p className="mt-7 text-xl text-white/50">€299</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            type="button"
            className="mt-8 rounded-full bg-white px-8 py-4 text-sm font-medium text-black"
          >
            Buy AURA
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}

export default LandingPage;
