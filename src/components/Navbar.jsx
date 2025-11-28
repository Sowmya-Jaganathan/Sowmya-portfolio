import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    if (isOpen) setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClass = isScrolled ? 'navbar scrolled' : 'navbar';

  return (
    <motion.nav 
      className={navbarClass}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <Link to="hero" spy={true} smooth={true} offset={-80} duration={500} className="logo">
          Sowmya Jaganathan
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="nav-link"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="skills" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="nav-link"
              onClick={closeMenu}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="experience" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="nav-link"
              onClick={closeMenu}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="projects" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="nav-link"
              onClick={closeMenu}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="education" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="nav-link"
              onClick={closeMenu}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="contact" 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={500} 
              className="nav-link contact-link"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;