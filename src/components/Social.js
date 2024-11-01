// src/components/Social.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Home.css";

function Social() {
  return (
    <Container className="home-container">
      <Card className="text-left">
        <Card.Body>
          <Card.Title>Social</Card.Title>
          <Card.Text>This page will have my Social info</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Social;
