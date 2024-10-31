// src/components/Home.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/Home.css";

function Home() {
  return (
    <Container className="home-container">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Welcome to My Portfolio</Card.Title>
              <Card.Text>This website is under construction.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
