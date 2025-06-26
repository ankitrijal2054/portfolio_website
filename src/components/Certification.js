import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiExternalLink, FiAward } from "react-icons/fi";
import "../styles/Certification.css";

function Certification() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: "GEN AI LANGUAGE MODELING WITH TRANSFORMERS",
      provider: "IBM",
      link: "https://coursera.org/share/c30ef75fbc0b626bccacb5616cfb9f02"
    },
    {
      title: "ADVANCED DEEP LEARNING SPECIALIST",
      provider: "IBM",
      link: "https://www.credly.com/badges/e52a1fe9-a116-4c8e-851b-e0ee92a1301e/public_url"
    },
    {
      title: "MACHINE LEARNING WITH PYTHON",
      provider: "COURSERA",
      link: "https://www.credly.com/badges/59cbe745-fc1c-4a53-89d2-00e389761d8a/public_url"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container className="certification-container" ref={ref}>
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
                Certifications
              </Card.Title>
            </motion.div>

            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="certification-card"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="certification-icon">
                    <FiAward size={24} />
                  </div>
                  <div className="certification-content">
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-title"
                      whileHover={{ color: "#007bff" }}
                    >
                      {cert.title}
                      <FiExternalLink className="external-link-icon" />
                    </motion.a>
                    <p className="certification-provider">{cert.provider}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Certification;