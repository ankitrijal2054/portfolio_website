// src/App.js
import React, { useState, useEffect, createContext } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Social from "./components/Social";
import Contact from "./components/Contact";
import ChatBot from "./components/Chat";
import "./styles/App.css";
import "./styles/Background.scss";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");

  useEffect(() => {
    const root = document.documentElement;
    if (
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const backgroundClass =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark-theme"
      : "light-theme";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`app-container ${backgroundClass}`}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>

        <NavBar />
        <div className="content">
          {/* Add padding and height for scrollable sections */}
          <section id="aboutme" style={{ padding: "50px 0" }}>
            <AboutMe />
          </section>
          <section id="experience" style={{ padding: "50px 0" }}>
            <Experience />
          </section>
          <section id="skill" style={{ padding: "50px 0" }}>
            <Skill />
          </section>
          <section id="project" style={{ padding: "50px 0" }}>
            <Project />
          </section>
          <section id="social" style={{ padding: "50px 0" }}>
            <Social />
          </section>
          <section id="contact" style={{ padding: "50px 0" }}>
            <Contact />
          </section>
        </div>
        {/*<ChatBot />*/}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
