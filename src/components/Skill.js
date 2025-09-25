import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaPython, FaGithub, FaAws, FaTimes, FaDocker, FaJenkins } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiHuggingface,
  SiTensorflow,
  SiJupyter,
  SiNumpy,
  SiScipy,
  SiPandas,
  SiElectron,
  SiLangchain,
  SiGooglegemini,
  SiOpenai,
  SiGithubcopilot,
  SiStreamlit,
} from "react-icons/si";
import "../styles/Card.css";
import "../styles/Skill.css";

function Skill() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillList = [
  [
    "Python",
    <FaPython />,
    "Core language for my AI and software projects — from building LLM-powered apps (FastAPI, Flask, Streamlit) to data pipelines, model training, and backend services.",
  ],
  [
    "C#",
    <TbBrandCSharp />,
    "Developed enterprise-grade applications at Reynolds & Reynolds using C# and .NET, including 30+ RESTful APIs and full-stack systems used by 5,000+ users.",
  ],    
  [
    "ReactJs",
    <FaReact />,
    "Built dynamic UIs and SPAs for projects like SmartPrep AI and Guide2Smart AI, and used extensively at Reynolds & Reynolds to deliver cross-platform enterprise apps.",
  ],
  [
    "PostgreSQL",
    <BiLogoPostgresql />,
    "Designed and optimized relational databases to support scalable apps, ensuring efficient queries and secure data handling at Reynolds & Reynolds for enterprise systems.",
  ],
  [
    "ElectronJs",
    <SiElectron />,
    "Delivered cross-platform desktop apps (e.g., KeyTrak system) by combining Electron.js with C#/.NET and React.js for enterprise clients.",
  ],
  [
    "AWS",
    <FaAws />,
    "Deployed and managed personal apps on AWS (EC2, S3, Amplify) — including Dockerized ML models and monitoring workflows.",
  ],
  [
    "GitHub",
    <FaGithub />,
    "Led SVN-to-Git migration at Reynolds & Reynolds and automated CI/CD with GitHub Actions. Also used across all personal projects for version control and collaboration.",
  ],
  [
    "Jenkins",
    <FaJenkins />,
    "Created and maintained CI/CD pipelines, and migrated 50+ Jenkins pipelines to GitHub Actions, reducing deployment time by 30%.",
  ],
  [
    "Docker",
    <FaDocker />,
    "Containerized ML models and full-stack apps for consistent deployment; used in MLOps pipelines with AWS EC2 and FastAPI.",
  ],
  [
    "Streamlit",
    <SiStreamlit />,
    "Built and deployed AI prototypes like AI Image Assistant on Streamlit Cloud for interactive data science and vision-language apps.",
  ],
  [
    "LangChain",
    <SiLangchain />,
    "Used in RAG-based chatbots with ChromaDB and Hugging Face to enable document-aware, persistent LLM responses.",
  ],
  [
    "OpenAI API",
    <SiOpenai />,
    "Integrated OpenAI models into NLP workflows for text generation, summarization, and study-assistant features.",
  ],
  [
    "Google Gemini API",
    <SiGooglegemini />,
    "Developed apps like SmartPrep AI and AI Image Assistant using Gemini 1.5 Flash for text generation and vision-language tasks.",
  ],
  [
    "Transformer",
    <SiHuggingface />,
    "Implemented Hugging Face Transformers in RAG pipelines and chatbots for embeddings, inference optimization, and fine-tuning.",
  ],
  [
    "Github Copilot",
    <SiGithubcopilot />,
    "Leveraged for AI-powered coding assistance — from debugging issues to speeding up prototyping and improving productivity in various projects.",
  ],
  [
    "NumPy",
    <SiNumpy />,
    "Used extensively for scientific computing, feature engineering, and preprocessing in ML projects.",
  ],
  [
    "Pandas",
    <SiPandas />,
    "Applied to clean, transform, and analyze datasets for ML pipelines and predictive modeling.",
  ],
  [
    "SciPy",
    <SiScipy />,
    "Leveraged for advanced math functions and algorithms supporting ML model experimentation.",
  ],
  [
    "TensorFlow",
    <SiTensorflow />,
    "Trained and deployed deep learning models (vision, NLP) in ML coursework and projects like predictive modeling.",
  ],
  [
    "Jupyter Notebook",
    <SiJupyter />,
    "Used extensively for prototyping machine learning models, data preprocessing, and visualizing results in an interactive workflow.",
  ],
  ];

  const skills = skillList.map((skill) => ({
    name: skill[0],
    icon: skill[1],
    description: skill[2],
  }));

  const handleSkillClick = (skill, event) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  return (
    <Container className="skill-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Card className="text-left theme-card modern-card">
          <Card.Body>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <Card.Title className="theme-card-title section-title">
                Skills
              </Card.Title>
            </motion.div>

            <div className="skill-links">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="skill-tile"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(event) => handleSkillClick(skill, event)}
                >
                  <div className="skill-tile-inner">
                    <div className="skill-tile-front">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {skill.icon}
                      </motion.div>
                    </div>
                    <div className="skill-tile-back">
                      <span>{skill.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>

      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            className="skill-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="skill-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="skill-modal-header">
                <h3 className="skill-modal-title">{selectedSkill.name}</h3>
                <button className="skill-modal-close" onClick={closeModal}>
                  <FaTimes />
                </button>
              </div>
              <div className="skill-modal-body">
                <p>{selectedSkill.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default Skill;