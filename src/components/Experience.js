import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Experience.css";

function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container className="experience-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Card className="text-left theme-card modern-card">
          <Card.Body>
            <motion.div variants={itemVariants}>
              <Card.Title className="theme-card-title section-title">
                Experience
              </Card.Title>
            </motion.div>

            <motion.div className="experience-section" variants={itemVariants}>
              <div className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3 className="role-title">Software Developer</h3>
                  <p className="company-details">
                    The Reynolds and Reynolds | January 2022 – July 2024
                  </p>
                  <ul className="experience-details">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      Led and collaborated on the development and maintenance of
                      KeyTrak applications (Desktop, Web, Mobile), impacting over
                      5,000 automotive dealerships, real estate firms, and corporate
                      offices.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      Spearheaded 20+ feature rollouts using Agile methodologies,
                      improving deployment efficiency by 30% through a robust CI/CD
                      pipeline.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      Developed and optimized 30+ RESTful APIs, implementing SOLID
                      principles for enhanced scalable, maintainable solutions.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6, duration: 0.6 }}
                    >
                      Ensured software reliability by achieving 95%+ unit test
                      coverage with Jest, significantly reducing production defects.
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7, duration: 0.6 }}
                    >
                      Collaborated cross-functionally with teams of 10+ developers,
                      ensuring timely delivery of high-impact software solutions.
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div className="experience-section" variants={itemVariants}>
              <h4 className="project-title">Notable Projects</h4>
              <div className="projects-grid">
                {[
                  {
                    title: "SVN to GitHub Repository Migration",
                    description: "Successfully migrated an extensive SVN repository to GitHub, improving developer collaboration by 20% and streamlining version control."
                  },
                  {
                    title: "Build Process Migration to GitHub Actions",
                    description: "Migrated 50+ build processes from Jenkins to GitHub Actions, enhancing automation and reliability."
                  },
                  {
                    title: "Database Update Automation",
                    description: "Developed a Created a PowerShell script and console application to automate database updates, reducing manual intervention by 90%."
                  },
                  {
                    title: "Motion Detection Integration",
                    description: "Integrated motion detection functionality in the KeyTrak Guardian application using the Accord.Net library for enhanced security features."
                  }
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h5 className="project-card-title">{project.title}</h5>
                    <p className="project-card-description">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Experience;