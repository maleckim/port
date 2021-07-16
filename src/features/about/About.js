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
      animate={isVisible ? 'show' : 'hidden'}
      style={{
        y: yPosAnim,
        overflow: 'hidden',
        zIndex: 2,
        display: 'flex',
        position: 'relative',
      }}
      className="about-main"
      id="about"
    >
      <div className="about-content">
        <h1 style={{ color: 'white' }}>
          Hello! My name is Matthew Malecki and I’m a full-stack developer based
          in Chicago. I’ve been programming for 4 years and started developing
          things for the web in the last two. I have equal parts love for both
          front and back end development. My strengths lie in my perpetual
          patience and my ability to learn very quickly. I’m an extremely
          adaptive individual who loves to problem solve, being put into
          uncomfortable/unfamiliar positions is when I do my best.
        </h1>
      </div>
    </motion.div>
  )
}

export default About
