// src/components/Project.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Project.css";
import weatherimg from "../image/weather.png";
import cardgameimg from "../image/cardgame.png";
import sentimentimg from "../image/sentiment.png";
import chatbotimg from "../image/chatbot.png";
import housingimg from "../image/housing_price.png";

function Project() {
  return (
    <Container className="project-container">
      <Card className="text-left theme-card">
        <Card.Body>
          <Card.Title className="theme-card-title">Project</Card.Title>
          <div className="project-tiles">
            <a
              href="https://github.com/ankitrijal2054/AI_Chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile"
            >
              <div className="project-tile-inner">
                <img
                  src={chatbotimg}
                  alt="AI Chatbot"
                  className="project-image"
                />
              </div>
            </a>
            <a
              href="https://sentiment-analysis-app-33hz.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile"
            >
              <div className="project-tile-inner">
                <img
                  src={sentimentimg}
                  alt="Sentiment App"
                  className="project-image"
                />
              </div>
            </a>
            <a
              href="https://github.com/ankitrijal2054/House_Price_Prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile"
            >
              <div className="project-tile-inner">
                <img
                  src={housingimg}
                  alt="Housing Price Prediction"
                  className="project-image"
                />
              </div>
            </a>
            <a
              href="https://weather-app-3jmk.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile"
            >
              <div className="project-tile-inner">
                <img
                  src={weatherimg}
                  alt="Weather App"
                  className="project-image"
                />
              </div>
            </a>
            <a
              href="http://cardroot.azurewebsites.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-tile"
            >
              <div className="project-tile-inner">
                <img
                  src={cardgameimg}
                  alt="Card Root Game"
                  className="project-image"
                />
              </div>
            </a>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Project;
