// src/components/Experience.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Experience.css"; // Link to the new Experience.css

function Experience() {
  return (
    <Container className="experience-container">
      <Card className="text-left experience-card">
        <Card.Body>
          <Card.Title>Experience</Card.Title>

          <div className="experience-section">
            <h3 className="role-title">Software Developer</h3>
            <p className="company-details">
              The Reynolds and Reynolds | January 2022 – July 2024
            </p>
            <ul className="experience-details">
              <li>
                Led the development and maintenance of the KeyTrak application
                suite (Desktop, Web, Mobile), utilizing C#, .Net, React,
                TypeScript, and React Native.
              </li>
              <li>
                Enhanced application functionality through RESTful API design,
                adhering to SOLID principles for optimized performance and
                maintainability.
              </li>
              <li>
                Played a key role in Agile practices, ensuring smooth feature
                rollouts and robust CI/CD pipelines for continuous deployment.
              </li>
              <li>
                Boosted database performance and system reliability, identifying
                and resolving critical production issues to reduce downtime.
              </li>
              <li>
                Improved testing efficiency by implementing Jest-based unit
                tests, enhancing software reliability and user satisfaction.
              </li>
            </ul>
          </div>

          <div className="experience-section">
            <h4 className="project-title">Notable Projects</h4>
            <ul className="project-details">
              <li>
                <strong>SVN to GitHub Repository Migration:</strong>{" "}
                Successfully migrated an extensive SVN repository to GitHub,
                improving team collaboration and ensuring data integrity.
              </li>
              <li>
                <strong>Build Process Migration to GitHub Actions:</strong>{" "}
                Transitioned build processes from Jenkins to GitHub Actions,
                streamlining deployment and boosting pipeline efficiency.
              </li>
              <li>
                <strong>Database Update Automation:</strong> Developed a
                PowerShell script to automate database updates, integrated with
                the CI/CD pipeline to minimize manual intervention.
              </li>
              <li>
                <strong>Motion Detection Integration:</strong> Integrated motion
                detection functionality in the KeyTrak Guardian application
                using the Accord.Net library for enhanced security features.
              </li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Experience;
