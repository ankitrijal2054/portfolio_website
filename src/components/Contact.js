// src/components/Contact.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Home.css";

function Contact() {
  return (
    <Container className="home-container">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>This page will have my contact info</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Contact;
