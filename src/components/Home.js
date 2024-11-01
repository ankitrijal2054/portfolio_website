// src/components/Home.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Home.css";

function Home() {
  return (
    <Container fluid className="home-container">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Hello, I'm Ankit.</Card.Title>
          <Card.Text>A Passionate Software Developer.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;
