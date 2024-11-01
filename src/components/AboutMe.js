// src/components/AboutMe.js
import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import "../styles/Home.css";

function AboutMe() {
  // Function to handle scrolling to the Contact section
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container fluid className="home-container">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Hello, I'm Ankit Rijal.</Card.Title>
          <Card.Text>
            Hello! I'm Ankit Rijal, an experienced software developer with a
            strong foundation in full-stack development, specializing in C#,
            Python, and React JS. I have a track record of leading projects to
            optimize performance and scalability, from seamless SVN-to-Git
            migrations to automated database updates. My commitment to
            high-quality, user-focused software is reflected in my work, both in
            professional roles and personal projects. Currently pursuing a
            Master’s in Artificial Intelligence, I'm constantly exploring new
            technologies to elevate my skills and deliver impactful solutions.
            Let's connect and build something great together!
          </Card.Text>
          <div className="button-group">
            <Button
              variant="primary"
              href="../assets/Resume-Ankit_Rijal.pdf"
              download
              className="about-button"
            >
              Download CV
            </Button>
            <Button
              variant="secondary"
              onClick={scrollToContact}
              className="about-button"
            >
              Contact Me
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AboutMe;
