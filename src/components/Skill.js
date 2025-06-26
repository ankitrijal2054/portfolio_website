import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaReact, FaPython, FaGithub, FaAws } from "react-icons/fa";
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

  const skillList = [
    ["ReactJs", <FaReact />, "https://react.dev/"],
    ["Python", <FaPython />, "https://www.python.org/"],
    [
      "C#",
      <TbBrandCSharp />,
      "https://learn.microsoft.com/en-us/dotnet/csharp/",
    ],
    ["AWS", <FaAws />, "https://aws.amazon.com/"],
    ["GitHub", <FaGithub />, "https://github.com/"],
    ["PostgreSQL", <BiLogoPostgresql />, "https://www.postgresql.org/"],
    ["NumPy", <SiNumpy />, "https://numpy.org/"],
    ["Pandas", <SiPandas />, "https://pandas.pydata.org/"],
    ["SciPy", <SiScipy />, "https://scipy.org/"],
    ["TensorFlow", <SiTensorflow />, "https://www.tensorflow.org/"],
    ["PyTorch", <SiPytorch />, "https://pytorch.org/"],
    [
      "Transformer",
      <SiHuggingface />,
      "https://huggingface.co/models?library=transformers&sort=trending",
    ],
  ];

  const skills = skillList.map((skill) => ({
    name: skill[0],
    icon: skill[1],
    link: skill[2],
  }));

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
            
            <div className="skill-links">
              {skills.map((skill, index) => (
                <motion.a
                  key={index}
                  href={skill.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-tile"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 180,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
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
                </motion.a>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Skill;