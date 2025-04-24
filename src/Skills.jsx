import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: { scale: 0.95 },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.02,
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)",
    transition: { type: "spring", stiffness: 300 },
  },
  tap: {
    scale: 0.98,
  },
};

// SkillCard Component
const SkillCard = ({ skill }) => (
  <motion.div
    className="flex flex-col items-center p-3 rounded-lg transition group"
    variants={item}
    whileHover="hover"
    whileTap="tap"
  >
    <motion.div
      className="w-12 h-12 mb-2 flex items-center justify-center rounded-full bg-white/10 p-1 backdrop-blur"
      whileHover={{ rotate: 10, scale: 1.1 }}
    >
      <img
        src={skill.image}
        alt={skill.name}
        title={skill.name}
        className="h-10 w-10 object-contain transition-transform group-hover:scale-110 filter brightness-150"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src =
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg";
          e.currentTarget.onerror = null;
        }}
        role="img"
        aria-label={skill.name}
      />
    </motion.div>
    <span className="text-sm text-center text-gray-300 group-hover:text-blue-200">
      {skill.name}
    </span>
  </motion.div>
);

// Skills Component
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "from-blue-300 to-purple-400",
      icon: "💻",
      skills: [
        {
          name: "React",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "JavaScript",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "HTML5",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS3",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "Tailwind",
          image:
            "https://unpkg.com/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          name: "Redux",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
      ],
    },
    {
      title: "Backend",
      color: "from-blue-400 to-indigo-500",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "Express",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
          name: "Python",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Java",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
          name: "MongoDB",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
          name: "Firebase",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
      ],
    },
    {
      title: "DevOps & Tools",
      color: "from-indigo-400 to-blue-500",
      icon: "🛠️",
      skills: [
        {
          name: "Docker",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Git",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "GitHub",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          name: "VSCode",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        },
        {
          name: "Postman",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
        },
        {
          name: "Android Studio",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
        },
      ],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="py-20 bg-gradient-to-b from-[#0C014D] to-black text-white overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-medium mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            My <span className="text-blue-300">Technical Toolkit</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Technologies and tools I use to build efficient, scalable, and
            beautiful web experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:shadow-xl transition-all"
              variants={card}
              whileHover="hover"
              whileTap="tap"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div
                className={`text-xl font-semibold mb-6 flex items-center gap-3`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`}
                ></span>
                <span className="text-blue-100">
                  {category.icon} {category.title}
                </span>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={container}
              >
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
