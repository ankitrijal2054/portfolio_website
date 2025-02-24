import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { ThemeContext } from "../App";
import { FaSun, FaMoon } from "react-icons/fa"; // Sun and Moon icons for theme toggle
import { HiMenu } from "react-icons/hi";
import logo from "../image/logo.png";
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
        <Row className="w-100 align-items-center justify-content-between">
          <Col xs="auto">
            <Navbar.Brand
              onClick={() => scrollToSection("aboutme")}
              style={{ cursor: "pointer" }}
            >
              <img
                src={logo}
                alt="Portfolio Logo"
                width="50"
                height="50"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
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
          <Col xs="auto" className="d-flex justify-content-end">
            <Dropdown>
              <Dropdown.Toggle
                variant="secondary"
                id="dropdown-basic"
                className={`d-flex align-items-center dropdown-toggle-${
                  isDarkMode ? "dark" : "light"
                }`}
              >
                <HiMenu className="me-2" size={24} />
              </Dropdown.Toggle>
              <Dropdown.Menu
                className={`dropdown-menu-${isDarkMode ? "dark" : "light"}`}
              >
                <Dropdown.Item onClick={() => scrollToSection("aboutme")}>
                  About Me
                </Dropdown.Item>
                <Dropdown.Item onClick={() => scrollToSection("experience")}>
                  Experience
                </Dropdown.Item>
                <Dropdown.Item onClick={() => scrollToSection("skill")}>
                  Skill
                </Dropdown.Item>
                <Dropdown.Item onClick={() => scrollToSection("project")}>
                  Project
                </Dropdown.Item>
                <Dropdown.Item onClick={() => scrollToSection("social")}>
                  Social
                </Dropdown.Item>
                <Dropdown.Item onClick={() => scrollToSection("contact")}>
                  Contact
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavBar;
