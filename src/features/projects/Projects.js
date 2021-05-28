import React, { useRef, useEffect } from "react";

import useOnScreen from "../../utils/useOnScreen";

const Projects = (props) => {
  const projects = useRef();
  const isVisible = useOnScreen(projects, "-150px");

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false);
  }, [isVisible]);

  return (
    <div ref={projects} id="projects" className="projects-main">
      <div className="projects-mid">
        <h1>hey</h1>
      </div>
    </div>
  );
};

Projects.propTypes = {};

export default Projects;
