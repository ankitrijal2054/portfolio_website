import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaPython, FaGithub, FaAws, FaDocker, FaJenkins } from "react-icons/fa";
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
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const skillList = [
  [
    "Python",
    <FaPython />,
    "Core language for my AI and software projects — from building LLM-powered apps (FastAPI, Flask, Streamlit) to data pipelines, model training, and backend services.",
    "AI & Data",
  ],
  [
    "C#",
    <TbBrandCSharp />,
    "Developed enterprise-grade applications at Reynolds & Reynolds using C# and .NET, including 30+ RESTful APIs and full-stack systems used by 5,000+ users.",
    "Backend",
  ],    
  [
    "ReactJs",
    <FaReact />,
    "Built dynamic UIs and SPAs for projects like SmartPrep AI and Guide2Smart AI, and used extensively at Reynolds & Reynolds to deliver cross-platform enterprise apps.",
    "Frontend",
  ],
  [
    "PostgreSQL",
    <BiLogoPostgresql />,
    "Designed and optimized relational databases to support scalable apps, ensuring efficient queries and secure data handling at Reynolds & Reynolds for enterprise systems.",
    "Backend",
  ],
  [
    "ElectronJs",
    <SiElectron />,
    "Delivered cross-platform desktop apps (e.g., KeyTrak system) by combining Electron.js with C#/.NET and React.js for enterprise clients.",
    "Frontend",
  ],
  [
    "AWS",
    <FaAws />,
    "Deployed and managed personal apps on AWS (EC2, S3, Amplify) — including Dockerized ML models and monitoring workflows.",
    "Cloud & Delivery",
  ],
  [
    "GitHub",
    <FaGithub />,
    "Led SVN-to-Git migration at Reynolds & Reynolds and automated CI/CD with GitHub Actions. Also used across all personal projects for version control and collaboration.",
    "Cloud & Delivery",
  ],
  [
    "Jenkins",
    <FaJenkins />,
    "Created and maintained CI/CD pipelines, and migrated 50+ Jenkins pipelines to GitHub Actions, reducing deployment time by 30%.",
    "Cloud & Delivery",
  ],
  [
    "Docker",
    <FaDocker />,
    "Containerized ML models and full-stack apps for consistent deployment; used in MLOps pipelines with AWS EC2 and FastAPI.",
    "Cloud & Delivery",
  ],
  [
    "Streamlit",
    <SiStreamlit />,
    "Built and deployed AI prototypes like AI Image Assistant on Streamlit Cloud for interactive data science and vision-language apps.",
    "AI & Data",
  ],
  [
    "LangChain",
    <SiLangchain />,
    "Used in RAG-based chatbots with ChromaDB and Hugging Face to enable document-aware, persistent LLM responses.",
    "AI & Data",
  ],
  [
    "OpenAI API",
    <SiOpenai />,
    "Integrated OpenAI models into NLP workflows for text generation, summarization, and study-assistant features.",
    "AI & Data",
  ],
  [
    "Google Gemini API",
    <SiGooglegemini />,
    "Developed apps like SmartPrep AI and AI Image Assistant using Gemini 1.5 Flash for text generation and vision-language tasks.",
    "AI & Data",
  ],
  [
    "Transformer",
    <SiHuggingface />,
    "Implemented Hugging Face Transformers in RAG pipelines and chatbots for embeddings, inference optimization, and fine-tuning.",
    "AI & Data",
  ],
  [
    "Github Copilot",
    <SiGithubcopilot />,
    "Leveraged for AI-powered coding assistance — from debugging issues to speeding up prototyping and improving productivity in various projects.",
    "Cloud & Delivery",
  ],
  [
    "NumPy",
    <SiNumpy />,
    "Used extensively for scientific computing, feature engineering, and preprocessing in ML projects.",
    "AI & Data",
  ],
  [
    "Pandas",
    <SiPandas />,
    "Applied to clean, transform, and analyze datasets for ML pipelines and predictive modeling.",
    "AI & Data",
  ],
  [
    "SciPy",
    <SiScipy />,
    "Leveraged for advanced math functions and algorithms supporting ML model experimentation.",
    "AI & Data",
  ],
  [
    "TensorFlow",
    <SiTensorflow />,
    "Trained and deployed deep learning models (vision, NLP) in ML coursework and projects like predictive modeling.",
    "AI & Data",
  ],
  [
    "Jupyter Notebook",
    <SiJupyter />,
    "Used extensively for prototyping machine learning models, data preprocessing, and visualizing results in an interactive workflow.",
    "AI & Data",
  ],
  ];

  const skills = skillList.map((skill) => ({
    name: skill[0],
    icon: skill[1],
    description: skill[2],
    category: skill[3],
  }));
  const activeSkill = skills[activeSkillIndex];

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

            <motion.div
              className="skill-detail-panel"
              variants={itemVariants}
              aria-live="polite"
            >
              <div className="skill-detail-icon" aria-hidden="true">
                {activeSkill.icon}
              </div>
              <div>
                <span>{activeSkill.category}</span>
                <h3>{activeSkill.name}</h3>
                <p>{activeSkill.description}</p>
              </div>
            </motion.div>

            <div className="skill-cloud" aria-label="Skill cloud">
              {skills.map((skill, index) => (
                <motion.button
                  key={skill.name}
                  type="button"
                  className={`skill-cloud-item ${
                    activeSkillIndex === index ? "active" : ""
                  }`}
                  variants={itemVariants}
                  aria-label={`${skill.name}: ${skill.description}`}
                  aria-pressed={activeSkillIndex === index}
                  onClick={() => setActiveSkillIndex(index)}
                  onFocus={() => setActiveSkillIndex(index)}
                  onMouseEnter={() => setActiveSkillIndex(index)}
                  whileHover={{ y: -6, scale: 1.03 }}
                  whileFocus={{ y: -6, scale: 1.03 }}
                >
                  <span className="skill-cloud-icon" aria-hidden="true">
                    {skill.icon}
                  </span>
                  <span className="skill-cloud-name">{skill.name}</span>
                </motion.button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Skill;