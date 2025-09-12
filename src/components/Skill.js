import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaPython, FaGithub, FaAws, FaTimes } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiHuggingface,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiScipy,
  SiPandas,
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
      "ReactJs",
      <FaReact />,
      "https://react.dev/",
      "I have built interactive user interfaces and single-page applications using React, leveraging its component-based architecture for maintainable code.",
    ],
    [
      "Python",
      <FaPython />,
      "https://www.python.org/",
      "Used Python for data analysis, machine learning projects, and backend development with frameworks like Flask and Django.",
    ],
    [
      "C#",
      <TbBrandCSharp />,
      "https://learn.microsoft.com/en-us/dotnet/csharp/",
      "Developed desktop applications and games using C# with .NET framework.",
    ],
    [
      "AWS",
      <FaAws />,
      "https://aws.amazon.com/",
      "Deployed scalable web applications and managed cloud infrastructure using various AWS services like EC2, S3, and Lambda.",
    ],
    [
      "GitHub",
      <FaGithub />,
      "https://github.com/",
      "Managed version control, collaborated on open-source projects, and automated workflows using GitHub Actions.",
    ],
    [
      "PostgreSQL",
      <BiLogoPostgresql />,
      "https://www.postgresql.org/",
      "Designed and optimized relational databases for web applications, ensuring data integrity and efficient queries.",
    ],
    [
      "NumPy",
      <SiNumpy />,
      "https://numpy.org/",
      "Performed numerical computations and data manipulation in Python for scientific computing.",
    ],
    [
      "Pandas",
      <SiPandas />,
      "https://pandas.pydata.org/",
      "Analyzed and processed large datasets using Pandas for data cleaning, transformation, and visualization.",
    ],
    [
      "SciPy",
      <SiScipy />,
      "https://scipy.org/",
      "Utilized SciPy for advanced mathematical functions and algorithms in scientific computing.",
    ],
    [
      "TensorFlow",
      <SiTensorflow />,
      "https://www.tensorflow.org/",
      "Built and trained machine learning models using TensorFlow for tasks like image recognition and natural language processing.",
    ],
    [
      "PyTorch",
      <SiPytorch />,
      "https://pytorch.org/",
      "Developed deep learning models with PyTorch, focusing on neural networks and AI applications.",
    ],
    [
      "Transformer",
      <SiHuggingface />,
      "https://huggingface.co/models?library=transformers&sort=trending",
      "Worked with transformer models from Hugging Face for NLP tasks such as text generation and sentiment analysis.",
    ],
  ];

  const skills = skillList.map((skill) => ({
    name: skill[0],
    icon: skill[1],
    link: skill[2],
    description: skill[3],
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
          <>
            <motion.div
              className="skill-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="skill-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
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
          </>
        )}
      </AnimatePresence>
    </Container>
  );
}

export default Skill;