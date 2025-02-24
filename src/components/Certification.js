import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Certification.css";

function Certification() {
  return (
    <Container className="certification-container">
      <Card className="text-left theme-card">
        <Card.Body>
          <Card.Title className="theme-card-title">Certification</Card.Title>

          <div className="certification-section">
            <h6 className="certification-title">
              <a
                href="https://coursera.org/share/c30ef75fbc0b626bccacb5616cfb9f02"
                target="_blank"
                rel="noopener noreferrer"
              >
                GEN AI LANGUAGE MODELING WITH TRANSFORMERS
              </a>
            </h6>
            <p className="certification-details">- IBM</p>
            <h4 className="certification-title">
              <a
                href="https://www.credly.com/badges/e52a1fe9-a116-4c8e-851b-e0ee92a1301e/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                ADVANCED DEEP LEARNING SPECIALIST
              </a>
            </h4>
            <p className="certification-details">- IBM</p>
            <h4 className="certification-title">
              <a
                href="https://www.credly.com/badges/59cbe745-fc1c-4a53-89d2-00e389761d8a/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                MACHINE LEARNING WITH PYTHON
              </a>
            </h4>
            <p className="certification-details">- COURSERA</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Certification;
