// src/components/NavBar.js
import React, { useContext, useEffect, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Form } from "react-bootstrap";
import { ThemeContext } from "../App";
import { FaSun, FaMoon } from "react-icons/fa";
import logo from "../assets/logo.png"; // Import the icon
import "../styles/NavBar.css";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isDarkMode, setIsDarkMode] = useState(
    theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemPrefersDark);
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [theme, setTheme]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const navbarTheme = isDarkMode
    ? { bg: "dark", variant: "dark" }
    : { bg: "light", variant: "light" };

  return (
    <Navbar bg={navbarTheme.bg} variant={navbarTheme.variant} expand="lg">
      <Container>
        <Row className="w-100 align-items-center">
          <Col xs="auto">
            <Navbar.Brand
              onClick={() => scrollToSection("home")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={logo}
                alt="Portfolio Logo"
                width="40"
                height="40"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-center">
            <Nav>
              <Nav.Link
                onClick={() => scrollToSection("home")}
                style={{ cursor: "pointer" }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection("contact")}
                style={{ cursor: "pointer" }}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs="auto" className="d-flex align-items-center">
            <FaSun className="me-2" />
            <Form.Check
              type="switch"
              id="theme-switch"
              label=""
              checked={isDarkMode}
              onChange={toggleTheme}
              className="theme-toggle"
            />
            <FaMoon className="ms-2" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
