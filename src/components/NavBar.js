import React, { useContext, useEffect, useState } from "react";
import { Navbar, Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import { FaSun, FaMoon } from "react-icons/fa";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <motion.div
      className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Navbar bg={navbarTheme.bg} variant={navbarTheme.variant} expand="lg" className="modern-navbar">
        <Container>
          <Row className="w-100 align-items-center justify-content-between">
            <Col xs="auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navbar.Brand
                  onClick={() => scrollToSection("aboutme")}
                  style={{ cursor: "pointer" }}
                  className="brand-logo"
                >
                  <img
                    src={logo}
                    alt="Portfolio Logo"
                    width="50"
                    height="50"
                    className="d-inline-block align-top logo-image"
                  />
                </Navbar.Brand>
              </motion.div>
            </Col>
            
            <Col className="d-flex justify-content-center align-items-center">
              <motion.div 
                className="theme-toggle-container"
                whileHover={{ scale: 1.05 }}
              >
                <FaSun className={`theme-icon ${!isDarkMode ? 'active' : ''}`} />
                <Form.Check
                  type="switch"
                  id="theme-switch"
                  label=""
                  checked={isDarkMode}
                  onChange={toggleTheme}
                  className="theme-toggle"
                />
                <FaMoon className={`theme-icon ${isDarkMode ? 'active' : ''}`} />
              </motion.div>
            </Col>
            
            <Col xs="auto" className="d-flex justify-content-end">
              <Dropdown>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Dropdown.Toggle
                    variant="secondary"
                    id="dropdown-basic"
                    className={`modern-dropdown-toggle dropdown-toggle-${
                      isDarkMode ? "dark" : "light"
                    }`}
                  >
                    <HiMenu className="menu-icon" size={24} />
                  </Dropdown.Toggle>
                </motion.div>
                
                <Dropdown.Menu
                  className={`modern-dropdown-menu dropdown-menu-${isDarkMode ? "dark" : "light"}`}
                >
                  {[
                    { id: "aboutme", label: "About Me" },
                    { id: "experience", label: "Experience" },
                    { id: "education", label: "Education" },
                    { id: "skill", label: "Skills" },
                    { id: "project", label: "Projects" },
                    { id: "certification", label: "Certifications" },
                    { id: "social", label: "Social" },
                    { id: "contact", label: "Contact" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Dropdown.Item 
                        onClick={() => scrollToSection(item.id)}
                        className="modern-dropdown-item"
                      >
                        {item.label}
                      </Dropdown.Item>
                    </motion.div>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </motion.div>
  );
}

export default NavBar;