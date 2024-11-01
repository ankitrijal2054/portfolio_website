// src/components/Skill.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Home.css";

function Skill() {
  return (
    <Container className="home-container">
      <Card className="text-left">
        <Card.Body>
          <Card.Title>Skill</Card.Title>
          <Card.Text>This page will have my Skill info</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Skill;
