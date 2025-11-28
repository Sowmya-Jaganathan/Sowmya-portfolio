import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Attendance System (DL)",
      description: "Facial-recognition attendance pipeline using Python, OpenCV, and CNNs to automate identification, improve accuracy, and support low-light environments with preprocessing.",
      image: "https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Python", "OpenCV", "CNN", "Automation"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Superstore Sales Analysis",
      description: "Power BI dashboard powered by DAX and custom data modeling to track sales, profit, and orders with slicers for region, category, and segments.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Power BI", "DAX", "Data Modeling", "Analytics"],
      github: "https://github.com/Sowmya-Jaganathan/Superstore-PowerBI-Analysis.git",
      demo: "#"
    },
    {
      id: 3,
      title: "FitLife – AI Fitness Platform",
      description: "React + Tailwind experience delivering personalized workouts, calorie insights, and demo flows that mirror customer onboarding for wellness startups.",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["React", "Tailwind CSS", "AI", "UX"],
      github: "https://github.com/Sowmya-Jaganathan/FIT-LIFE.git",
      demo: "#"
    },
    {
      id: 4,
      title: "Sentiment Analysis (NLP)",
      description: "End-to-end NLP workflow that cleans social content, applies TF-IDF, and trains Logistic Regression & SVM models for opinion mining.",
      image: "https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tags: ["Python", "NLP", "TF-IDF", "ML"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">My Work</p>
          <h2>Recent Projects</h2>
        </div>

        <div className="projects-container">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Code">
                      <FaGithub />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;