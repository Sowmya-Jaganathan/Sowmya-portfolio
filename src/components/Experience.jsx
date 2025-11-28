import { motion } from 'framer-motion';
import { FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const experienceData = [
  {
    id: 1,
    role: "Full-Stack Developer Intern",
    company: "Live Stream Technology",
    duration: "Aug 2024 – Sep 2024",
    location: "Remote / Coimbatore, India",
    summary: "Real-time streaming platform • React.js, Node.js, WebSockets",
    bullets: [
      "Built and deployed features that reduced buffering and boosted engagement.",
      "Shipped optimized REST APIs with cross-functional squads, cutting latency by 15%.",
      "Partnered with QA and support teams to triage live customer issues and document fixes.",
      "Crafted interactive dashboards and UI components that lifted retention."
    ]
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Pinesphere",
    duration: "May 2023 – Jun 2023",
    location: "Coimbatore, India",
    summary: "Client website delivery • Django, HTML, CSS, JavaScript",
    bullets: [
      "Delivered responsive web experiences that increased traffic by ~30%.",
      "Improved SEO and page-speed metrics through careful optimization.",
      "Led feature demos, walkthroughs, and customer-support style sessions.",
      "Documented troubleshooting steps to accelerate future onboarding."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">Internships</p>
          <h2>Professional Experience</h2>
        </div>

        <div className="experience-grid">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="experience-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaLaptopCode />
                </div>
                <div>
                  <h3>{exp.role}</h3>
                  <p className="experience-company">{exp.company}</p>
                </div>
              </div>
              <div className="experience-meta">
                <span>{exp.duration}</span>
                <span>•</span>
                <span>{exp.location}</span>
              </div>
              <p className="experience-summary">{exp.summary}</p>
              <ul>
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

