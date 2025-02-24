import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Education.css";

function Education() {
  return (
    <Container className="education-container">
      <Card className="text-left theme-card">
        <Card.Body>
          <Card.Title className="theme-card-title">Education</Card.Title>

          <div className="education-section">
            <h3 className="degree-title">
              Master's in Artificial Intelligence
            </h3>
            <p className="college-details">
              University of the Cumberlands | August 2024 – September 2025
            </p>
          </div>
          <div className="education-section">
            <h3 className="degree-title">Bachelor's in Computer Science</h3>
            <p className="college-details">East Central University | 2021</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Education;
