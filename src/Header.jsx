import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certifications", label: "Certifications" },
    { id: "achievements", label: "Achievements" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveLink(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id, e) => {
    e.preventDefault();
    setActiveLink(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`transparent fixed w-full z-50 transition-all duration-300backdrop-blur-sm `}
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-medium bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent"
            onClick={(e) => handleLinkClick("home", e)}
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href={`#${link.id}`}
                  className={`block px-1 py-2 font-medium transition-colors ${
                    activeLink === link.id
                      ? "text-sky-400"
                      : "text-slate-200 hover:text-white"
                  }`}
                  onClick={(e) => handleLinkClick(link.id, e)}
                >
                  {link.label}
                </a>
                {activeLink === link.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.div>
            ))}

            <motion.a
              href="#contact"
              className="relative px-4 py-2 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-md font-medium group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => handleLinkClick("contact", e)}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-700 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.a>
          </nav>

          <motion.button
            className="md:hidden p-2 focus:outline-none text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-sky-400" />
            ) : (
              <FiMenu size={24} />
            )}
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-1 py-3">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`px-4 py-3 rounded-lg text-lg ${
                      activeLink === link.id
                        ? "bg-white/10 text-sky-400"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => handleLinkClick(link.id, e)}
                  >
                    {link.label}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  className="mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white rounded-lg font-semibold text-center"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  onClick={(e) => handleLinkClick("contact", e)}
                >
                  Contact
                </motion.a>

                <motion.div
                  className="flex justify-center gap-4 mt-4 pt-4 border-t border-white/10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-300 hover:text-white"
                  >
                    <FiTwitter size={20} />
                  </a>
                  <a
                    href="mailto:hello@example.com"
                    className="p-2 text-slate-300 hover:text-white"
                  >
                    <FiMail size={20} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
