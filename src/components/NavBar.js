// src/components/NavBar.js
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { ThemeContext } from "../App";
import logo from "../assets/logo.png"; // Import the icon
import "../styles/NavBar.css";

function NavBar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  // Set navbar background and variant based on theme
  const navbarTheme =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? { bg: "dark", variant: "dark" }
      : { bg: "light", variant: "light" };

  return (
    <Navbar bg={navbarTheme.bg} variant={navbarTheme.variant} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Portfolio Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
            {/* Add other links here as needed */}
          </Nav>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Theme
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleThemeChange("light")}>
                Light
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleThemeChange("dark")}>
                Dark
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleThemeChange("system")}>
                System
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
