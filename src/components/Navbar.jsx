import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 10);

      if (currentY > lastScrollY.current) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/programs", name: "Programs" },
    { path: "/admissions", name: "Admissions" },
    // { path: "/parents", name: "Parents" },
    { path: "/contact", name: "Contact" },
    { path: "/faq", name: "FAQ" },
  ];

  return (
    <motion.nav
  initial={{ y: 0 }}
  animate={{ y: showNavbar ? '0%' : '-100%' }}
  transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 w-full px-4 py-4 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#D88B3F] shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        {/* Logo and Title */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/1.png" alt="Logo" className="h-24 w-22 object-contain" />
          <h2 className="text-xl font-bold">Offspring Montessori</h2>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map(({ path, name }) => (
            <Link
              key={path}
              to={path}
              className="relative hover:underline transition"
            >
              {location.pathname === path && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 h-1 w-full bg-white rounded"
                />
              )}
              {name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Dropdown Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            className={`absolute top-full left-0 w-full ${
              scrolled ? 'bg-[#D88B3F]' : 'bg-black/80'
            } text-white shadow-lg px-6 py-4 md:hidden`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map(({ path, name }) => (
                <Link
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className="hover:underline"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
