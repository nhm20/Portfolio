import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
const projects = [
  {
    title: "LearnSpark",
    description:
      "An interactive learning platform for students and tutors can earn by sharing knowledge.",
    tags: ["React", "Tailwindcss", "Node.js", "MongoDB"],
    link: "https://github.com/nhm20/learnSpark-Frontend",
    image: "/learnspark.png",
  },
  {
    title: "Smart City OS App",
    description:
      "An Android application for managing urban resources and  services with a unified dashboard.",
    tags: ["Kotlin", "Firebase", "Google Maps API"],
    link: "https://github.com/nhm20/SmartCityOS",
    image: "/smart.png",
  },
  {
    title: "Chatbot",
    description:
      "Conversational chatbot designed to provide legal information and assist users with common legal queries.",
    tags: ["Python", "flask", "HTML"],
    link: "https://github.com/nhm20/Law-Chatbot",
    image: "/chatbot.png",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-28 px-4 md:px-8 bg-gradient-to-b from-black via-[#0C014D] to-[#0C014D] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, built with modern technologies and
            best practices.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-black rounded-xl overflow-hidden border border-gray-800 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/50 shadow-lg hover:shadow-xl relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative overflow-hidden h-52">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-800 text-blue-300 font-medium rounded-full tracking-wide hover:bg-gray-700 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-800 border border-gray-700 text-blue-300 hover:text-white hover:border-blue-400 hover:bg-gray-700 transition-all font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
