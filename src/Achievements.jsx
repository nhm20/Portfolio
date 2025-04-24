import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Leetcode Contest Rating",
    description:
      "Achieved a rating of 1433 in Leetcode contests, showcasing problem-solving skills.",
    date: "June 2024",
  },
  {
    title: "Ideathon Competition",
    description:
      "Secured Rs. 20000 for making a revenue model for a startup in an Ideathon competition.",
    date: "April 2023",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-black via-[#0C014D] to-[#0C014D] text-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Achievements
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A glimpse into my accomplishments showcasing skills, innovation, and
            leadership.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {achievements.map((achieve, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-xl w-full sm:w-[22rem] p-6 border border-gray-800 hover:border-blue-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-blue-300 mb-2">
                {achieve.title}
              </h3>
              <p className="text-gray-300 mb-2">{achieve.description}</p>
              <p className="text-gray-500 text-sm">{achieve.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
