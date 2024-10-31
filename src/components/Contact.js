// src/components/Home.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Contact.css";

function Contact() {
  return (
    <Container className="contact-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
              <Card.Text>This page will have my contact info</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
