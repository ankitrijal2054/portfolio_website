import React, { useState, useEffect, createContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Social from "./components/Social";
import Contact from "./components/Contact";
import ChatBot from "./components/Chat";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import "./styles/App.css";
import "./styles/Background.scss";
import Education from "./components/Education";
import Certification from "./components/Certification";

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const backgroundClass =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark-theme"
      : "light-theme";

  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AnimatePresence>
        <motion.div
          className={`app-container ${backgroundClass}`}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>

          <NavBar />
          <div className="content">
            <motion.section 
              id="aboutme" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AboutMe />
            </motion.section>
            
            <motion.section 
              id="experience" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Experience />
            </motion.section>
            
            <motion.section 
              id="education" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Education />
            </motion.section>
            
            <motion.section 
              id="skill" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Skill />
            </motion.section>
            
            <motion.section 
              id="project" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Project />
            </motion.section>
            
            <motion.section 
              id="certification" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Certification />
            </motion.section>
            
            <motion.section 
              id="social" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Social />
            </motion.section>
            
            <motion.section 
              id="contact" 
              className="section-container"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Contact />
            </motion.section>
          </div>
          
          <ScrollToTop />
          {/*<ChatBot />*/}
        </motion.div>
      </AnimatePresence>
    </ThemeContext.Provider>
  );
}

export default App;