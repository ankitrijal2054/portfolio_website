// src/components/Project.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Project.css";
import weatherimg from "../assets/weather.png";
import cardgameimg from "../assets/cardgame.png";

function Project() {
  return (
    <Container className="home-container">
      <Card className="text-left">
        <Card.Body>
          <Card.Title>Project</Card.Title>
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
