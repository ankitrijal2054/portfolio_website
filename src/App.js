// src/App.js
import React, { useState, useEffect, createContext } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Contact from "./components/Contact";
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
          <section id="home" style={{ padding: "50px 0", minHeight: "100vh" }}>
            <Home />
          </section>
          <section
            id="contact"
            style={{ padding: "50px 0", minHeight: "100vh" }}
          >
            <Contact />
          </section>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
