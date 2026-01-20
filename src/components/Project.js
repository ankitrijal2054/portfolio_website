import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Project.css";
import clipforgeimg from "../image/clipforge.png";
import collabcanvasimg from "../image/collabcanvas.png";
import chatbotimg from "../image/chatbot.png";
import housingimg from "../image/housing_price.png";
import imageassistantimg from "../image/image_assistant.png";
import unilangimg from "../image/unilang.png";
import lawmintimg from "../image/lawmint.png";
import studybuddyimg from "../image/study_buddy.png";
import aimathtutorimg from "../image/ai_math_tutor.png";

function Project() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      href: "https://study-buddy-28043.web.app/login",
      img: studybuddyimg,
      alt: "Study Buddy",
      title: "Study Buddy",
      description:
        "A persistent AI learning companion that keeps students engaged through conversational learning, adaptive quizzes, personalized recommendations, and intelligent nudges."
    },
    {
      href: "https://ai-math-tutor-b09db.web.app/",
      img: aimathtutorimg,
      alt: "AI Math Tutor",
      title: "AI Math Tutor",
      description:
        "AI Math Tutor is a web-based conversational AI tutoring platform that teaches mathematics through the Socratic method through step-by-step reasoning using leading questions, hints, and validation, building genuine understanding and critical thinking skills."
    },
    {
      href: "https://lawmint-c5a21.web.app/",
      img: lawmintimg,
      alt: "Lawmint",
      title: "Lawmint",
      description:
        "AI-Powered Demand Letters for Modern Law Firms. Draft, refine, and collaborate on demand letters securely and effortlessly. Transform how your firm creates legal documents with intelligent automation.",
    },
    {
      href: "https://multi-model-ai-assistant.streamlit.app/",
      img: imageassistantimg,
      alt: "AI Image Assistant",
      title: "AI Image Assistant",
      description:
        "An AI assistant that that allows users to upload an image and either ask questions about it or generate a caption.",
    },
    {
      href: "https://collabcanvas-1fd25.web.app/",
      img: collabcanvasimg,
      alt: "CollabCanvas",
      title: "CollabCanvas",
      description:
        "A real-time AI-powered collaborative design canvas built with React, TypeScript, Firebase, and GPT-4 Turbo. Multiple users can draw, create, and edit objects simultaneously with live cursor tracking and presence awareness (<100 ms latency).",
    },
    {
      href: "https://drive.google.com/file/d/1wfykY2cKTEqkn2HE5oE3GwSgdObf8xBw/view",
      img: unilangimg,
      alt: "Unilang",
      title: "Unilang",
      description:
        "Real-time messaging app with AI-powered translation, smart replies, tone adjustment, and slang detection for culturally aware communication across languages.",
    },
    {
      href: "https://drive.google.com/file/d/1-A4oRd3rHFjfV6bA83ixF3hfGDsazxK4/view?usp=drive_link",
      img: clipforgeimg,
      alt: "ClipForge",
      title: "ClipForge",
      description:
        "ClipForge is a modern, cross-platform desktop video editor built with Electron, React, and TypeScript. It provides an intuitive interface for video trimming, preview, and export with professional-grade performance.",
    },
    {
      href: "https://github.com/ankitrijal2054/AI_Chatbot",
      img: chatbotimg,
      alt: "AI Chatbot",
      title: "AI Chatbot",
      description:
        "A chatbot with a custom knowledge base using LangChain and RAG.",
    },
    {
      href: "https://github.com/ankitrijal2054/House_Price_Prediction",
      img: housingimg,
      alt: "Housing Price Prediction",
      title: "Housing Price Predictor",
      description:
        "A machine learning model predicting house prices based on features.",
    },
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
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Container className="project-container" ref={ref}>
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
                Projects
              </Card.Title>
            </motion.div>

            <div className="project-tiles">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-tile"
                  >
                    <div className="project-tile-inner">
                      <div className="project-image-container">
                        <img
                          src={project.img}
                          alt={project.alt}
                          className="project-image"
                          loading="lazy"
                        />
                        <div className="project-overlay">
                          <div className="project-info">
                            <h4 className="project-title">{project.title}</h4>
                            <p className="project-description">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </motion.div>
    </Container>
  );
}

export default Project;
