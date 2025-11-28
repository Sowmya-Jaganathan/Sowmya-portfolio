import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      id: 1,
      title: "B.Tech Artificial Intelligence & Data Science",
      institution: "KGiSL Institute of Technology, Coimbatore",
      duration: "Aug 2022 – May 2026",
      description: "GPA: 8.3 | Coursework across AI/ML, data analytics, and full-stack development.",
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      title: "Higher Secondary (XII)",
      institution: "Hindusthan Matriculation Hr. Sec. School, Coimbatore",
      duration: "Jun 2021 – May 2022",
      description: "Percentage: 87% | Computer Science stream with focus on math & statistics.",
      icon: <FaSchool />
    },
    {
      id: 3,
      title: "Secondary School (X)",
      institution: "Hindusthan Matriculation Hr. Sec. School, Coimbatore",
      duration: "Jun 2019 – Aug 2020",
      description: "Percentage: 76% | Built a strong foundation in science and problem-solving.",
      icon: <FaSchool />
    }
  ];

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div className="section-title">
          <p className="section-subtitle">My Journey</p>
          <h2>Education</h2>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                {item.icon}
              </div>
              <div className="timeline-content">
                <div className="timeline-date">{item.duration}</div>
                <h3>{item.title}</h3>
                <h4>{item.institution}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;