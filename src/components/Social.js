// src/components/Social.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Social.css";
import "../styles/Home.css";

function Social() {
  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/ankitrijal2054",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ankitrjl2054/",
    },
    {
      name: "X/Twitter",
      icon: <FaXTwitter />,
      link: "https://x.com/ankit_rijal2054",
    },
    {
      name: "Instagram",
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/ankit_rjl",
    },
  ];

  return (
    <Container className="home-container">
      <Card className="text-left">
        <Card.Body>
          <Card.Title>Social</Card.Title>
          <div className="social-links">
            {socials.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="social-tile"
                key={index}
              >
                <div className="social-tile-inner">
                  <div className="social-tile-front">{social.icon}</div>
                  <div className="social-tile-back">{social.name}</div>
                </div>
              </a>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Social;
