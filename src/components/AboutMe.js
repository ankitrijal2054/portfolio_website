import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/AboutMe.css";

function AboutMe() {
  const texts = [
    "Aspiring ML Engineer",
    "Passionate Software Developer",
    "Traveller",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container fluid className="about-me-container" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Row className="about-me-row justify-content-center">
          <Col lg={6} md={12}>
            <motion.div variants={itemVariants}>
              <Card className="text-center theme-card hero-card">
                <Card.Body>
                  <div className="animated-text-container">
                    <motion.div
                      className="animated-text-line greeting"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      Hello,
                    </motion.div>
                    <motion.div
                      className="animated-text-line name"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                    >
                      I'm Ankit Rijal.
                    </motion.div>
                    <motion.div
                      className="animated-swiping-text"
                      key={currentTextIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      {texts[currentTextIndex]}
                    </motion.div>
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col lg={6} md={12}>
            <motion.div variants={itemVariants}>
              <Card className="text-center theme-card bio-card">
                <Card.Body>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                  >
                    <Card.Text className="bio-text">
                      I am a curious builder who started as a software developer
                      and is now diving headfirst into the world of AI. With a
                      background in creating reliable, user-friendly
                      applications, I’ve recently been exploring how artificial
                      intelligence can make technology smarter, faster, and more
                      helpful. Whether it’s crafting chatbots, experimenting
                      with image-based tools, or just solving everyday problems
                      with code, I’m passionate about turning ideas into real,
                      working things. Welcome to my digital playground. Let’s
                      explore the future of tech together!
                    </Card.Text>
                  </motion.div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          <Col md={12} className="d-flex justify-content-center">
            <motion.div className="button-group mt-4" variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="primary"
                  href="/portfolio_website/assets/Resume-Ankit_Rijal.pdf"
                  download
                  className="btn-modern btn-primary-modern"
                >
                  <span>Download CV</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  onClick={scrollToContact}
                  className="btn-modern btn-secondary-modern"
                >
                  <span>Contact Me</span>
                </Button>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default AboutMe;
