// src/components/Skill.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaReact, FaPython, FaGithub, FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import "../styles/Card.css";
import "../styles/Skill.css";

function Skill() {
  const skill = [
    {
      name: "ReactJs",
      icon: <FaReact />,
      link: "https://react.dev/",
    },
    {
      name: "Python",
      icon: <FaPython />,
      link: "https://www.python.org/",
    },
    {
      name: "C#",
      icon: <TbBrandCSharp />,
      link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "Java",
      icon: <FaJava />,
      link: "https://www.java.com/en/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/",
    },
    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql />,
      link: "https://www.postgresql.org/",
    },
  ];

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
