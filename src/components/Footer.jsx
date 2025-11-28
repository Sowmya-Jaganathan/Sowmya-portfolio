import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sowmya Jaganathan</h3>
            <p>Artificial Intelligence and Data Science Student</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
                  About
                </Link>
              </li>
              <li>
                <Link to="skills" spy={true} smooth={true} offset={-80} duration={500}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="experience" spy={true} smooth={true} offset={-80} duration={500}>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="education" spy={true} smooth={true} offset={-80} duration={500}>
                  Education
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/Sowmya-Jaganathan" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/sowmya-jaganathan" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="mailto:sowmyajaganathan07@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Sowmya Jaganathan. All Rights Reserved.</p>
        </div>

        <Link to="hero" spy={true} smooth={true} offset={-80} duration={800} className="back-to-top">
          <FaArrowUp />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;