import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const navLinks = [
  { to: "/BmiCalculator", label: "BMI Calculator" },
  { to: "/CaloriesCalculator", label: "Calorie Calculator" },
  { to: "/Courses", label: "Courses" },
  { to: "/Community", label: "Community" },
];

const authLinks = [
  { to: "/Login", label: "Login" },
  { to: "/Register", label: "Register" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
    },
  },
};

const menuItemVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="h-[85px]  z-50">
      <div className="flex items-center justify-between py-6 px-10 bg-gradient-to-r from-purple-900/70 to-slate-950/70 shadow-2xl border-b border-purple-800/40 backdrop-blur-lg rounded-b-2xl">
        <Link to="/">
          <h1 className="text-2xl font-extrabold text-white tracking-widest drop-shadow-lg glow-logo">
            MUSCLE <span className="text-blue-400">FORCE</span>
          </h1>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12 ml-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-white font-semibold text-lg px-2 py-1 transition group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {authLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative text-white font-semibold text-lg px-2 py-1 transition group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
        {/* Hamburger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <AiOutlineClose size={26} />
            ) : (
              <AiOutlineMenu size={26} />
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-[85px] left-0 right-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-lg z-40"
          >
            <div className="flex flex-col items-center py-6 gap-2">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={menuItemVariants} className="w-full">
                  <Link
                    to={link.to}
                    onClick={toggleMenu}
                    className="block w-full text-center text-gray-200 py-3 text-lg font-medium hover:bg-gray-800 hover:text-blue-400 transition"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="border-t border-gray-700 w-2/3 my-2"></div>
              {authLinks.map((link) => (
                <motion.div key={link.to} variants={menuItemVariants} className="w-full">
                  <Link
                    to={link.to}
                    onClick={toggleMenu}
                    className="block w-full text-center text-gray-200 py-3 text-lg font-medium hover:bg-gray-800 hover:text-blue-400 transition"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>
        {`
          .glow-logo {
            text-shadow: 0 0 8px #6366f1, 0 0 16px #6366f1;
          }
          .group:hover .group-hover\\:w-full {
            width: 100%;
          }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
