import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaChartBar } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Who Am I</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <img src="/sowmya.jpg" alt="Sowmya Jaganathan" className="about-photo" />
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p>
              Passionate and self-driven AI & Data Science undergraduate with a strong foundation in frontend development, data analytics, and machine learning. I enjoy translating business goals into reliable, data-backed solutions.
            </p>
            <p>
              My toolkit spans Python, C, SQL, React.js, Power BI, Tableau (basic), and modern analytics workflows built with Jupyter Notebook, VS Code, and PyCharm. I have delivered production-ready work like a Smart Attendance System leveraging deep learning and an NLP-driven Sentiment Analysis pipeline.
            </p>
            <p>
              With a current GPA of 8.3 at KGiSL Institute of Technology, I have completed multiple internships, collaborated with cross-functional teams, and consistently demonstrated strong communication, problem-solving, and customer support skills.
            </p>
          </motion.div>

          <motion.div 
            className="about-highlights"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="highlight-card">
              <div className="highlight-icon">
                <FaGraduationCap />
              </div>
              <div className="highlight-info">
                <h3>Education</h3>
                <p>B.Tech AI & Data Science (GPA 8.3)</p>
                <p>KGISL Institute of Technology</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaLaptopCode />
              </div>
              <div className="highlight-info">
                <h3>Technical Focus</h3>
                <p>Frontend Engineering</p>
                <p>Data Analytics & ML</p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon">
                <FaChartBar />
              </div>
              <div className="highlight-info">
                <h3>Expertise</h3>
                <p>Power BI & Tableau Dashboards</p>
                <p>AI-driven Automation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;