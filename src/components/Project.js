// src/components/Project.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Project.css";
import weatherimg from "../image/weather.png";
import cardgameimg from "../image/cardgame.png";

function Project() {
  return (
    <Container className="project-container">
      <Card className="text-left theme-card">
        <Card.Body>
          <Card.Title className="theme-card-title">Project</Card.Title>
          <div className="project-tiles">
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
