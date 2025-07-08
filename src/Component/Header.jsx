import React, { useState } from 'react';
import { FaPenNib, FaBars, FaTimes, FaCaretDown } from 'react-icons/fa';
import Logo from '../Asset/logo.png';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white shadow-lg h-32 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5">

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-sm">
     {/* Unique Dropdown */}
<div className="relative group">
  <a
    href="/about"
    className="flex items-center gap-1 font-medium hover:text-blue-600 transition-colors duration-200 relative"
  >
    About Us
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
    <FaCaretDown className="text-xs mt-1" />
  </a>

  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -10 }}
      transition={{ duration: 0.3 }}
      className="absolute hidden group-hover:flex flex-col bg-white/20 backdrop-blur-md border border-orange-200/30 shadow-xl rounded-2xl mt-2 py-3 px-4 space-y-2 z-20 w-52"
    >
      <a href="/ourteam" className="text-black hover:text-blue-600 transition-colors">Our Team</a>
      <a href="/intro" className="text-black hover:text-blue-600 transition-colors">Our Vision & Mission</a>
    </motion.div>
  </AnimatePresence>
</div>


          {/* Main Links */}
          {[
            { label: 'Learn', href: '/learn' },
            { label: 'Projects', href: '/project' },
            { label: 'Our Services', href: '/citizen-science' },
          ].map(({ label, href }, i) => (
            <a
              key={i}
              href={href}
              className="relative group hover:text-blue-600 transition"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          ))}

          {/* CTA */}
          <motion.a
            href="/enquiry"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
          >
            Have a Question?
          </motion.a>
        </nav>

        {/* Logo (Right Side) */}
        <a href="/" className="flex items-center w-44 space-x-2 text-2xl font-bold text-black">
          <img src={Logo} alt="Logo" />
        </a>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-2xl text-black"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md"
          >
            {/* Dropdown (static on mobile) */}
            <div className="space-y-1">
              <p className="font-semibold text-blue-600">About Us</p>
              <div className="ml-4 space-y-1 text-sm">
                <a href="/intro" className="block">Our Vision & Mission</a>
                <a href="/ourteam" className="block">Our Team</a>
              </div>
            </div>

            {/* Mobile Links */}
            <a href="/learn" className="block">Learn</a>
            <a href="/project" className="block">Projects</a>
            <a href="/citizen-science" className="block">Our Services</a>

            {/* CTA */}
            <a
              href="/enquiry"
              className="block mt-4 bg-blue-600 text-white text-center py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Have a Question?
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
