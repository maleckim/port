import React, { memo, useRef, useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Card from "./Card";
import useOnScreen from "../../utils/useOnScreen";
import npmmScreen from "./assets/npmm.png";
import npmmCli from "./assets/npmm-cli.gif";
import quickShop from "./assets/quickshop.gif";
import jsonTool from "./assets/json-tool.png";

const Projects = (props) => {
  const projects = useRef();
  const isVisible = useOnScreen(projects, "-150px");

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false);
  }, [isVisible]);

  const [npmm, npmmSelected] = useState(false);

  function select(cardId) {
    npmmSelected(!npmm);
  }

  const cards = [
    { id: "jsonTool", image: jsonTool, header: "JSON Creation Tool" },
    { id: "npmm", image: npmmScreen, header: "NPMM" },
    { id: "npmmCli", image: npmmCli, header: "NPMM CLI" },
    { id: "quickShop", image: quickShop, header: "Quick Shop" },
  ];

  return (
    <motion.div ref={projects} id="projects" className="projects-main">
      <motion.div className="projects-mid">
        <motion.ul>
          {cards.map((card) => (
            <Card image={card.image} title={card.header} id={card.id} />
          ))}
        </motion.ul>
      </motion.div>
    </motion.div>
  );
};

Projects.propTypes = {};

export default Projects;
