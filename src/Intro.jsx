import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import profileImage from "/profile.jpg";

export default function HeroIntro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const phrases = [
    "empower transformation",
    "ignite creativity",
    "shape the future",
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % phrases.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const phraseVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-transparent via-[#0C014D] via-40% to-black text-white px-4 md:px-8 relative overflow-hidden"
    >
      {/* Profile Image */}
      <motion.div
        className="mb-8 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src={profileImage}
          alt="Raghu Ram - Web Architect"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl ring-4 ring-blue-300/40"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        />
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-2xl mx-auto z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Digital experiences that <br />
          <span className="relative inline-block h-[1.2em]">
            <AnimatePresence mode="wait">
              <motion.span
                key={phrases[current]}
                className="italic font-serif text-blue-300 relative z-10 absolute left-0 right-0"
                variants={phraseVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.4 }}
              >
                {phrases[current]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Hey, I'm <span className="font-medium text-blue-300">Mohan</span>,
          a Web Architect passionate about creating impactful digital solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="relative inline-flex items-center px-6 py-3 bg-blue-300 text-black font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            View My Work →
          </motion.a>

          <motion.a
            href="mailto:mohan@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-blue-300">📩</span> Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Background Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-blue-300/20 filter blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
    </section>
  );
}
