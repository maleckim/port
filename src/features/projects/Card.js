import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";

const Card = (props) => {
  function Item() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
    const landingVariants = {
      enter: {
        width: "60%",

        transition: {
          duration: 1,
          type: "spring",
          stiffness: 200,
          bounce: 0.5,
        },
      },

      exit: {
        width: "40%",

        transition: {
          type: "spring",
          stiffness: 60,
          bounce: 0.5,
        },
      },
    };
    return (
      <motion.li
        layout
        onClick={toggleOpen}
        initial={{ borderRadius: 10 }}
        variants={landingVariants}
        animate={isOpen ? "enter" : "exit"}
      >
        <motion.div>
          <h1>{props.title}</h1>
        </motion.div>

        <motion.div layout>
          <motion.img src={props.image} />
        </motion.div>
        <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
      </motion.li>
    );
  }

  return (
    <AnimateSharedLayout>
      <Item key={props.id} />
    </AnimateSharedLayout>
  );
};

function Content() {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1 } }}
      exit={{ opacity: 0, transition: { delay: 0 } }}
    >
      <div className="row">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Malesuada bibendum arcu vitae elementum curabitur vitae.
        </h1>
      </div>
    </motion.div>
  );
}

export default Card;
