import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "../styles/Social.css";
import "../styles/Card.css";

function Social() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/ankitrijal2054",
      color: "#333",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ankitrjl2054/",
      color: "#0077b5",
    },
    {
      name: "X/Twitter",
      icon: <FaXTwitter />,
      link: "https://x.com/ankit_rijal2054",
      color: "#1da1f2",
    },
    {
      name: "Instagram",
      icon: <FaInstagramSquare />,
      link: "https://www.instagram.com/ankit_rjl",
      color: "#e4405f",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <Container className="social-container" ref={ref}>
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
                Social
              </Card.Title>
            </motion.div>
            
            <div className="social-links">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-tile"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 180,
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  style={{ "--social-color": social.color }}
                >
                  <div className="social-tile-inner">
                    <div className="social-tile-front">
                      <motion.div
                        whileHover={{ 
                          rotate: [0, -10, 10, -10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {social.icon}
                      </motion.div>
                    </div>
                    <div className="social-tile-back">
                      <span>{social.name}</span>
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

export default Social;