import React from "react";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "Become a Full Stack Web Developer",
    issuer: "Coursera",
    date: "March 2023",
    link: "https://www.coursera.org/account/accomplishments/verify/AXZiadBkl_ptcoFwMKFqvUScuhlJ",
    image: "/coursea.png",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "January 2024",
    link: "https://coursera.org/verify/example",
    image: "/meta.png",
  },
  {
    title: "Career in Front-End Web Development",
    issuer: "Coursera",
    date: "January 2023",
    link: "https://coursera.org/verify/AVXlrYiP8OiGpn1T-ngRIqV7P4FB",
    image: "/coursea.png",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
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
              Certifications
            </span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here's a collection of my professional certifications showcasing my
            technical skills and learning achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-all shadow-lg hover:shadow-xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={cert.image}
                alt={`${cert.title} logo`}
                className="h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold text-blue-300 mb-2">
                {cert.title}
              </h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-gray-500 text-sm">{cert.date}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
