// src/components/Project.js
import React from "react";
import { Container, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import "../styles/Project.css";
import weatherimg from "../image/weather.png";
import sentimentimg from "../image/sentiment.png";
import chatbotimg from "../image/chatbot.png";
import housingimg from "../image/housing_price.png";

function Project() {
  // Array of projects with details
  const projects = [
    {
      href: "https://github.com/ankitrijal2054/AI_Chatbot",
      img: chatbotimg,
      alt: "AI Chatbot",
      title: "AI Chatbot",
      description:
        "A chatbot with a custom knowledge base using LangChain and RAG.",
    },
    {
      href: "https://sentiment-analysis-app-33hz.onrender.com",
      img: sentimentimg,
      alt: "Sentiment App",
      title: "Sentiment Analysis App",
      description: "An NLP-based app to analyze sentiment in text.",
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

  return (
    <Container className="project-container">
      <Card className="text-left theme-card">
        <Card.Body>
          <Card.Title className="theme-card-title">Projects</Card.Title>
          <div className="project-tiles">
            {projects.map((project, index) => (
              <OverlayTrigger
                key={index}
                placement="top"
                overlay={
                  <Tooltip id={`tooltip-${index}`}>
                    <strong>{project.title}</strong> - {project.description}
                  </Tooltip>
                }
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-tile"
                >
                  <div className="project-tile-inner">
                    <img
                      src={project.img}
                      alt={project.alt}
                      className="project-image"
                    />
                  </div>
                </a>
              </OverlayTrigger>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Project;
