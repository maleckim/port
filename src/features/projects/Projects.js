import React, { memo, useRef, useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence, usePresence } from "framer-motion";

import useOnScreen from "../../utils/useOnScreen";
import { useInView } from "react-intersection-observer";
import npmmScreen from "./assets/npmm.png";
import npmmCli from "./assets/npmm-cli.gif";
import quickShop from "./assets/quickshop.gif";
import jsonTool from "./assets/json-tool.png";

const projectItems = [
  {
    name: "test 1",
    content: "test content 1",
  },
  {
    name: "test 2",
    content: "test content 2",
  },
  {
    name: "test 3",
    content: "test content 3",
  },
  {
    name: "test 4",
    content: "test content 4",
  },
  {
    name: "test 5",
    content: "test content 5",
  },
];

const Projects = (props) => {
  const projects = useRef();
  const isVisible = useOnScreen(projects, "-150px");

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false);
  }, [isVisible]);

  function Item(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
      setIsOpen(!isOpen);
    };

    return (
      <motion.div layout className="project-item">
        <motion.h1 onClick={toggleOpen} id={props.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          {props.name}
        </motion.h1>
        {isOpen && <Content name={props.content} />}
      </motion.div>
    );
  }

  return (
    <div id="projects" ref={projects} className="projects-main">
      <motion.div className="projects-header">Projects</motion.div>
      <AnimateSharedLayout>
        {projectItems.map((item, index) => (
          <Item name={item.name} content={item.content} index={index} />
        ))}
      </AnimateSharedLayout>
    </div>
  );
};

function Content(props) {
  return (
    <motion.div
      layout
      id={props.name}
      layoutId="underline"
      className="project-content"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }} // use variant instead of Animation Controls
      exit={{ opacity: 0 }}
    >
      <AnimatePresence exitBeforeEnter={true}>
        <motion.div>{props.name}</motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

const containerVariants = {
  hidden: {
    opacity: 0,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

Projects.propTypes = {};

export default Projects;
