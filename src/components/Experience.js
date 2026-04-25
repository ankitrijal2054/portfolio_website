import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Experience.css";

const experiences = [
  {
    role: "AI Software Engineer",
    company: "Flourish Schools, Remote",
    dates: "Feb 2026 - Current",
    status: "Current",
    bullets: [
      "Developed an AI agent using the Pydantic deep agents framework to generate symbolic math modules with deterministic orchestration, quality gates, crash-safe persistence, and error-driven self-correction.",
      "Reduced math module build timelines from months to days by automating the generation, validation, and correction workflow for AI-powered education content.",
      "Implemented AI grading to automate scoring and feedback, reducing teachers' manual grading time while keeping student feedback fast and consistent.",
    ],
    projects: [
      {
        title: "Symbolic Math Module Generator",
        description:
          "AI agent workflow for generating structured math modules with persistence, quality gates, and self-correction loops.",
      },
      {
        title: "AI Grading System",
        description:
          "Automated grading and feedback flow designed to help teachers evaluate student work faster and more consistently.",
      },
    ],
  },
  {
    role: "Software Developer",
    company: "The Reynolds and Reynolds Company, College Station, TX",
    dates: "Jan 2022 - Jul 2024",
    bullets: [
      "Developed full-stack KeyTrak applications across desktop, web, and mobile using C#/.NET, React.js, and Electron.js, serving 5,000+ enterprise customers.",
      "Designed 30+ RESTful APIs using ASP.NET Core with SOLID principles, improving system performance, modularity, and long-term maintainability.",
      "Migrated 50+ CI/CD pipelines from Jenkins to GitHub Actions, reducing deployment time by 30%.",
      "Led version control migration from SVN to Git across Agile teams, enabling modern collaboration workflows.",
    ],
    projects: [
      {
        title: "SVN to GitHub Repository Migration",
        description:
          "Migrated an extensive SVN repository to GitHub, improving developer collaboration and modernizing version control workflows.",
      },
      {
        title: "Build Process Migration to GitHub Actions",
        description:
          "Moved 50+ build processes from Jenkins to GitHub Actions, improving automation, reliability, and deployment speed.",
      },
      {
        title: "Database Update Automation",
        description:
          "Built PowerShell and console tooling to automate database updates, reducing manual intervention by 90%.",
      },
      {
        title: "Motion Detection Integration",
        description:
          "Integrated motion detection into KeyTrak Guardian using Accord.Net to support enhanced security workflows.",
      },
    ],
  },
];

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
              {experiences.map((experience, experienceIndex) => (
                <div className="timeline-item" key={experience.role}>
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="role-heading">
                      <div>
                        <h3 className="role-title">{experience.role}</h3>
                        <p className="company-details">
                          {experience.company} | {experience.dates}
                        </p>
                      </div>
                      {experience.status && (
                        <span className="role-status">{experience.status}</span>
                      )}
                    </div>

                    <ul className="experience-details">
                      {experience.bullets.map((bullet, bulletIndex) => (
                        <motion.li
                          key={bullet}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.3 + experienceIndex * 0.2 + bulletIndex * 0.08,
                            duration: 0.6,
                          }}
                        >
                          {bullet}
                        </motion.li>
                      ))}
                    </ul>

                    {experience.projects?.length > 0 && (
                      <div className="role-projects">
                        <h4 className="project-title">Notable Projects</h4>
                        <div className="projects-grid">
                          {experience.projects.map((project, projectIndex) => (
                            <motion.div
                              key={project.title}
                              className="project-card"
                              initial={{ opacity: 0, y: 20 }}
                              animate={inView ? { opacity: 1, y: 0 } : {}}
                              transition={{
                                delay:
                                  0.6 +
                                  experienceIndex * 0.2 +
                                  projectIndex * 0.08,
                                duration: 0.6,
                              }}
                              whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                              <h5 className="project-card-title">{project.title}</h5>
                              <p className="project-card-description">
                                {project.description}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Experience;