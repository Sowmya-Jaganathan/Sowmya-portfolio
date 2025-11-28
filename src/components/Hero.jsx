import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4>Hello, I'm</h4>
          <h1>Sowmya Jaganathan</h1>
          <div className="typing-container">
            <TypeAnimation
              sequence={[
                'AI & Data Science Student',
                1000,
                'Frontend Developer',
                1000,
                'Machine Learning Engineer',
                1000,
                'Data Analyst',
                1000
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>
          <p>
            AI & Data Science undergraduate with hands-on experience in frontend development, data analytics, and machine learning. Skilled in Python, C, React.js, and Power BI, with real-world projects like Smart Attendance (DL) and Sentiment Analysis (NLP). A fast learner and problem-solver eager to contribute to impactful, innovation-driven teams.
          </p>
          <div className="hero-buttons">
            <Link to="contact" spy={true} smooth={true} offset={-80} duration={500}>
              <button className="btn">Get In Touch</button>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
              <button className="btn btn-outline">View My Work</button>
            </Link>
          </div>
          <div className="hero-contact-meta">
            <div className="contact-chip">
              <span className="chip-label">Email</span>
              <a href="mailto:sowmyajaganathan07@gmail.com">sowmyajaganathan07@gmail.com</a>
            </div>
            <div className="contact-chip">
              <span className="chip-label">Mobile</span>
              <a href="tel:+918637408959">+91 8637408959</a>
            </div>
            <div className="contact-chip">
              <span className="chip-label">Location</span>
              <span>Coimbatore, India</span>
            </div>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Sowmya-Jaganathan" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/sowmya-jaganathan" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="image-container">
            <img src="/sowmya.jpg" alt="Sowmya Jaganathan" />
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <Link to="about" spy={true} smooth={true} offset={-80} duration={500}>
          <FaArrowDown />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;