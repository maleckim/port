import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTransform, useViewportScroll } from 'framer'
import useOnScreen from '../../utils/useOnScreen'

const About = (props) => {
  const about = useRef()
  const isVisible = useOnScreen(about, '-300px')
  const { scrollYProgress } = useViewportScroll()
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -200])

  const tagVariants = {
    show: {
      opacity: 1,

      transition: {
        delay: 0.2,
        duration: 0.7,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    hidden: {
      opacity: 0,

      transition: {
        duration: 1.2,
        ease: [0.2, 0, 0.17, 1],
      },
    },
  }

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false)
  }, [isVisible])

  return (
    <motion.div
      ref={about}
      variants={tagVariants}
      initial="show"
      animate={isVisible ? 'show' : 'hidden'}
      style={{
        y: yPosAnim,

        zIndex: 2,
        display: 'flex',
        position: 'relative',
      }}
      className="about-main"
      id="about"
    >
      <div className="about-content">
        <h1 className="about-intro">
        Greetings! I'm a software developer known for my remarkable adaptability and unwavering patience. I excel in swiftly adjusting to diverse challenges and intricate tasks. Drawing from four years of experience, I've honed a meticulous approach that values methodical problem-solving and a steady pace. This blend allows me to navigate complex projects with precision and composure, ensuring exceptional outcomes every step of the way.
        </h1>
      </div>
    </motion.div>
  )
}

export default About
