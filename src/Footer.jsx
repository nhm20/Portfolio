import React from "react";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaFileAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section id="contact">
      <div className="shooting-stars-bg">
        <footer className="bg-gradient-to-b from-black to-[#04010c] text-white border-t border-[#1e3a8a]">
          <div className="container mx-auto px-6 py-16 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              {/* Left Side - Name and Title */}
              <motion.div
                className="flex flex-col items-center md:items-start text-center md:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
                  <span className="text-[#1e3a8a]">Mohan</span>
                </h2>
                <p className="text-gray-300 text-sm">
                  Full Stack Developer & UX Enthusiast
                </p>
              </motion.div>

              {/* Middle - Contact */}
              <motion.div
                className="flex flex-col items-center gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <a
                  href="mailto:mohan2@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:bg-[#1e3a8a] hover:text-white transition-all transform group"
                >
                  <FiMail className="h-5 w-5" />
                  <span>Mail Me </span>
                  <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>

              {/* Right Side - Social Links */}
              <motion.div
                className="flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                <a
                  href="https://github.com/nhm20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#1e3a8a] hover:text-white transition-all transform hover:scale-105"
                  aria-label="GitHub"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kethamohan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-[#1e3a8a] hover:text-white transition-all transform hover:scale-105"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="h-6 w-6" />
                </a>
              </motion.div>
            </div>

            {/* Copyright */}
            <motion.div
              className="mt-12 pt-6 border-t border-[#1e3a8a] text-center text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <p>© {new Date().getFullYear()} Mohan. All rights reserved.</p>
              <p className="mt-1">Built with React.js</p>
            </motion.div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer;
