import React from "react";
import { Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Project.css";
import weatherimg from "../image/weather.png";
import recommenderimg from "../image/recommender.png";
import smartprepimg from "../image/smart_prep.png";
import chatbotimg from "../image/chatbot.png";
import housingimg from "../image/housing_price.png";
import imageassistantimg from "../image/image_assistant.png";

function Project() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const projects = [
    {
      href: "https://github.com/ankitrijal2054/SmartPrep_AI",
      img: smartprepimg,
      alt: "Smart Prep AI",
      title: "Smart Prep AI",
      description:
        "An adaptive quiz web app that uses llm to generate personalized questions, explanations, and summaries based on users’ study materials and performance.",
    },
    {
      href: "https://github.com/ankitrijal2054/song-recommender",
      img: recommenderimg,
      alt: "Song Recommender App",
      title: "Song Recommender App",
      description:
        "A personalized music recommendation web app that uses content-based filtering and Last.fm metadata to suggest songs tailored to user preferences.",
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
    {
      href: "https://weather-app-3jmk.onrender.com/",
      img: weatherimg,
      alt: "Weather App",
      title: "Weather App",
      description:
        "A real-time weather forecasting app using OpenWeatherMap API.",
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
