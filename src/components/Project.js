// src/components/Project.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Home.css";

function Project() {
  return (
    <Container className="home-container">
      <Card className="text-left">
        <Card.Body>
          <Card.Title>Project</Card.Title>
          <Card.Text>This page will have my Project info</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Project;
