import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../styles/AboutMe.css";

function AboutMe() {
  const texts = [
    "Aspiring ML Engineer",
    "Passionate Software Developer",
    "Traveller",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container fluid className="about-me-container">
      <Row className="about-me-row justify-content-center">
        <Col md={6}>
          <Card className="text-center theme-card">
            <Card.Body>
              <div className="animated-text-container">
                <div className="animated-text-line">Hello,</div>
                <div className="animated-text-line">I'm Ankit Rijal.</div>
                <div className="animated-swiping-text" key={currentTextIndex}>
                  {texts[currentTextIndex]}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5}>
          <Card className="text-center theme-card">
            <Card.Body>
              <Card.Text>
                I am a software developer with a strong foundation in full-stack
                development, specializing in C#, Python, and React.js. With
                hands-on experience optimizing performance and
                scalability—ranging from SVN-to-Git migrations to automated
                database updates—I have developed a keen problem-solving
                mindset. Currently pursuing a Master’s in Artificial
                Intelligence, I am transitioning into the field of machine
                learning, deepening my expertise in data-driven solutions and
                AI-powered applications. I am eager to apply my software
                development experience to real-world ML challenges and
                collaborate on innovative projects. Let’s connect and explore
                the future of AI together!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} className="d-flex justify-content-center">
          <div className="button-group mt-3">
            <Button
              variant="primary"
              href="/portfolio_website/assets/Resume-Ankit_Rijal.pdf"
              download
              className="btn-modern"
            >
              Download CV
            </Button>
            <Button
              variant="secondary"
              onClick={scrollToContact}
              className="btn-modern"
            >
              Contact Me
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
