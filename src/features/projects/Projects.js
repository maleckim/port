import React, { memo, useRef, useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

import useOnScreen from "../../utils/useOnScreen";
import npmmScreen from "./assets/npmm.png";
import npmmCli from "./assets/npmm-cli.gif";
import quickShop from "./assets/quickshop.gif";
import jsonTool from "./assets/json-tool.png";

const projectItems = [
  {
    name: "test 1",
  },
  {
    name: "test 2",
  },
  {
    name: "test 3",
  },
  {
    name: "test 4",
  },
  {
    name: "test 5",
  },
];

const Projects = (props) => {
  const projects = useRef();
  const isVisible = useOnScreen(projects, "-150px");

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false);
  }, [isVisible]);

  const ProjectList = (props) => {
    return (
      <motion.div style={{ paddingLeft: props.index + "px" }} className="project-item">
        <h1>{props.name}</h1>
      </motion.div>
    );
  };

  return (
    <AnimateSharedLayout>
      <motion.div layout ref={projects} id="projects" className="projects-main">
        <motion.div class="projects-header">
          <h1>Projects</h1>
        </motion.div>
        {projectItems.map((item, index) => {
          const midway = projectItems.length / 2;
          const downward = projectItems.length - 1;
          return <ProjectList index={index <= midway ? index * 15 : (downward - index) * 15} name={item.name} />;
        })}
      </motion.div>
    </AnimateSharedLayout>
  );
};

Projects.propTypes = {};

export default Projects;
