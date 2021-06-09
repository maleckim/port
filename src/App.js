import React, { useState, useRef, useEffect, forwardRef } from "react";
import NavBar from "./features/nav/NavBar";
import Landing from "./features/landing/Landing";
import About from "./features/about/About";
import Projects from "./features/projects/Projects";
import ScrollDots from "./features/components/ScrollDots";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import useOnScreen from "./utils/useOnScreen";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { Page } from "framer";

import "./App.css";

function App() {
  const [about, setAboutVis] = useState(false);
  const [landing, setLandingVis] = useState(false);
  const [projects, setProjectsVis] = useState(false);

  const checkAboutVis = (e) => {
    if (e !== about) {
      setAboutVis(e);
    }
  };
  const checkLandingVis = (e) => {
    if (e !== landing) {
      setLandingVis(e);
    }
  };
  const checkProjectsgVis = (e) => {
    if (e !== projects) {
      setProjectsVis(e);
    }
  };

  const visStatus = { about, landing, projects };

  return (
    <div className="App">
      <ScrollDots className={landing ? "show" : "hide"} section="landingDot" />
      <ScrollDots className={about ? "show" : "hide"} section="aboutDot" />
      <ScrollDots className={projects ? "show" : "hide"} section="projectsDot" />

      <NavBar visibility={visStatus} />
      <Landing check={checkLandingVis} />
      <About check={checkAboutVis} />
      <Projects check={checkProjectsgVis} />
    </div>
  );
}

export default App;
