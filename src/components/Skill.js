// src/components/Skill.js
import React from "react";
import { Container, Card } from "react-bootstrap";
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
      "Transformers",
      <SiHuggingface />,
      "https://huggingface.co/models?library=transformers&sort=trending",
    ],
  ];

  const skill = skillList.map((skill) => ({
    name: skill[0],
    icon: skill[1],
    link: skill[2],
  }));

  return (
    <Container className="skill-container">
      <Card className="text-left theme-card">
        <Card.Body>
          <Card.Title className="theme-card-title">Skill</Card.Title>
          <div className="skill-links">
            {skill.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skill-tile"
                key={index}
              >
                <div className="skill-tile-inner">
                  <div className="skill-tile-front">{social.icon}</div>
                  <div className="skill-tile-back">{social.name}</div>
                </div>
              </a>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Skill;
