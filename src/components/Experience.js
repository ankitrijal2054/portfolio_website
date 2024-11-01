// src/components/Experience.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Home.css";

function Experience() {
  return (
    <Container className="home-container">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Experience</Card.Title>
          <Card.Text>This page will have my Experience info</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Experience;
