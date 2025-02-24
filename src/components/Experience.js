// src/components/Experience.js
import React from "react";
import { Container, Card } from "react-bootstrap";
import "../styles/Experience.css"; // Link to the new Experience.css

function Experience() {
  return (
    <Container className="experience-container">
      <Card className="text-left theme-card">
        <Card.Body>
          <Card.Title className="theme-card-title">Experience</Card.Title>

          <div className="experience-section">
            <h3 className="role-title">Software Developer</h3>
            <p className="company-details">
              The Reynolds and Reynolds | January 2022 – July 2024
            </p>
            <ul className="experience-details">
              <li>
                Led and collaborated on the development and maintenance of
                KeyTrak applications (Desktop, Web, Mobile), impacting over
                5,000 automotive dealerships, real estate firms, and corporate
                offices.
              </li>
              <li>
                Spearheaded 20+ feature rollouts using Agile methodologies,
                improving deployment efficiency by 30% through a robust CI/CD
                pipeline.
              </li>
              <li>
                Developed and optimized 30+ RESTful APIs, implementing SOLID
                principles for enhanced scalable, maintainable solutions.
              </li>
              <li>
                Ensured software reliability by achieving 95%+ unit test
                coverage with Jest, significantly reducing production defects.
              </li>
              <li>
                Collaborated cross-functionally with teams of 10+ developers,
                ensuring timely delivery of high-impact software solutions.
              </li>
            </ul>
          </div>

          <div className="experience-section">
            <h4 className="project-title">Notable Projects</h4>
            <ul className="project-details">
              <li>
                <strong>SVN to GitHub Repository Migration:</strong>{" "}
                Successfully migrated an extensive SVN repository to GitHub,
                improving developer collaboration by 20% and streamlining
                version control.
              </li>
              <li>
                <strong>Build Process Migration to GitHub Actions:</strong>{" "}
                Migrated 50+ build processes from Jenkins to GitHub Actions,
                enhancing automation and reliability.
              </li>
              <li>
                <strong>Database Update Automation:</strong> Developed a Created
                a PowerShell script and console application to automate database
                updates, reducing manual intervention by 90%.
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
