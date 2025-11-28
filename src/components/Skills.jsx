import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaBrain, FaCheck, FaChartBar } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    languages: {
      title: "Languages & Programming",
      icon: <FaCode />,
      skills: ["Python", "C", "SQL", "R (basic)"]
    },
    frontend: {
      title: "Frontend & Libraries",
      icon: <FaTools />,
      skills: ["React.js", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Django (basic)"]
    },
    visualization: {
      title: "Visualization & Analytics",
      icon: <FaChartBar />,
      skills: ["Power BI", "Tableau (basic)", "Excel", "Power Query", "DAX", "Data Modeling"]
    },
    dataTools: {
      title: "ETL, Databases & Platforms",
      icon: <FaDatabase />,
      skills: ["MySQL", "SQLite", "Pandas", "NumPy", "Jupyter Notebook", "VS Code / PyCharm"]
    },
    softSkills: {
      title: "Soft Skills",
      icon: <FaBrain />,
      skills: ["Communication", "Problem-Solving", "Customer Support", "Time Management", "Team Collaboration", "Analytical Thinking"]
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">What I Know</p>
          <h2>My Skills</h2>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(skillsData).map(([key, category], index) => (
            <motion.div
              key={key}
              className="skill-category"
              variants={itemVariants}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3 className="category-title">{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaCheck className="skill-icon" />
                    <span className="skill-name">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;