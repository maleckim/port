import React, { useRef, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import useOnScreen from '../../utils/useOnScreen'

import npmmScreen from './assets/npmm-logo.svg'

const tagVariants = {
  show: {
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  hidden: {
    opacity: 0,

    transition: {
      duration: 0.9,
      ease: [0.83, 0, 0.17, 1],
    },
  },
}

const Projects = (props) => {
  const projects = useRef()
  const isVisible = useOnScreen(projects, '-150px')

  useEffect(() => {
    isVisible ? props.check(true) : props.check(false)
  }, [isVisible])

  const image = ['npmm', 'j-build', 'quickshop']

  const projectData = {
    npmm: [
      'React - Redux - Postgres - Node (express)',
      'NPMM allows developers to frictionlessly browse and save npm packages. Saved packages can then be programmatically installed with our command line interface. Imagine the npmjs.com website but with a few critical features added in for ease of use.',
    ],
    'j-build': [
      'React - Redux - AWS S3 (sdk & bucket gui) - Firebase',
      "Initially I created this because I found myself repeatedly manually creating extensive JSONs for a particular 'card generation' style page. It began as a single page html using only inline vanilla js. Once it became a bit unreadable/unmanageable I switched it over to react. After awhile I decided to turn it into more of a learning experience and implemented redux for the state management, AWS for serving, and I began to dabble with firebase for data persistence.",
    ],
    quickshop: [
      'PHP - Laravel',
      "One day I was in the mood to play with a new language/framework so I landed on PHP/Laravel. My purpose was to branch out but also to work with MVC model specifically. I modeled the application's general flow and feel after Amazons site. ",
    ],
  }

  const [current, setCurrent] = useState(0)
  function Slideshow({ images }) {
    const variants = {
      enter: {
        x: 1000,
        opacity: 0,
      },
      hidden: { opacity: 0 },
      center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
      },
      exit: {
        zIndex: 0,
        x: 1000,
        opacity: 0,
      },
    }
    const currentProject = images[current]
    const currentProjectInfo = projectData[currentProject]

    return (
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={current}
          // custom={direction}
          variants={variants}
          initial="enter"
          // animate="center"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 200, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="proj-info-text"
        >
          <h1>{currentProject}</h1>
          <h2 className="proj-tech">{currentProjectInfo[0]}</h2>
          <h2>{currentProjectInfo[1]}</h2>
        </motion.div>
      </AnimatePresence>
    )
  }

  return (
    <motion.div
      ref={projects}
      variants={tagVariants}
      animate={isVisible ? 'show' : 'hidden'}
      style={{ zIndex: 1 }}
      id="projects"
      className="projects-main"
    >
      <div className="projects-container">
        <div className="proj-header">
          <h1>Projects</h1>
        </div>

        <div onClick={() => setCurrent(0)} className="proj-card">
          <img className="proj-logo" src={npmmScreen} />
        </div>
        <div onClick={() => setCurrent(1)} className="proj-card">
          <svg
            width={252}
            height={202.65}
            viewBox="0 0 252 202.65"
            className="prefix__css-1j8o68f"
          >
            <rect
              width={240}
              height={193}
              rx={8}
              transform="scale(1.05)"
              fill="#111"
            />
            <g xmlns="http://www.w3.org/2000/svg" fill="#61c0bf">
              <path
                className="prefix__st4"
                d="M113.82 100.2h-2.062c-6.765 0-9.075-3.713-9.075-9.9 0-2.64.33-5.445.825-8.168.495-2.887.825-5.61.825-8.745.082-7.342-3.135-11.055-8.333-12.457v-.248c5.198-1.237 8.415-5.197 8.333-12.54 0-3.135-.33-6.022-.825-8.745-.495-2.887-.825-5.527-.825-8.332 0-6.435 2.64-10.065 9.075-10.065h2.062M138.9 21h2.063c6.435 0 9.075 3.548 9.075 10.065 0 2.805-.33 5.445-.825 8.332-.495 2.805-.825 5.61-.825 8.745-.083 7.343 3.135 11.303 8.332 12.54v.248c-5.197 1.403-8.415 5.032-8.332 12.458 0 3.134.33 5.857.825 8.744.495 2.806.825 5.528.825 8.168 0 6.188-2.31 9.9-9.075 9.9H138.9"
                fill="none"
                stroke="#61c0bf"
                strokeWidth={4.949999999999999}
                strokeMiterlimit={10}
              />
            </g>
            <path
              d="M38.526 182.338c-6.88 0-12.526-5.557-12.526-12.526v-6.44h8.38v6.44c0 2.293 1.853 4.146 4.146 4.146s4.058-1.853 4.058-4.146v-50.724h8.469v50.724c0 6.969-5.646 12.526-12.527 12.526zm44.522-35.903v7.674H59.23v-7.674h23.818zm28.732-1.5c1.94 1.94 3.176 4.587 3.176 7.498v19.32c0 5.821-4.764 10.585-10.586 10.585H91.314l-.088-62.809h11.644c6.44.265 10.233 6.44 10.145 12.262l-.088 8.733c0 1.588-.441 3.088-1.147 4.411zm-7.41 28.934c1.235 0 2.205-.97 2.205-2.117l-.088-19.319c0-1.235-.97-2.117-2.117-2.117h-4.676v23.553h4.676zm-4.764-45.96v13.939h3.529c.706 0 1.411-.618 1.411-1.412l.088-8.733c0-1.764-.882-3.705-2.117-3.793h-2.91zm35.524 54.605c-7.145 0-12.967-5.822-12.967-12.967V119.44h8.38v50.106c0 2.558 2.029 4.675 4.587 4.675s4.587-2.117 4.587-4.675V119.44h8.38v50.106c0 7.145-5.821 12.967-12.967 12.967zm29.526-63.338v62.81h-8.38v-62.81h8.38zm16.47 54.87h12.173v8.292h-20.466V119h8.292v55.046zm31.377 8.38h-11.027V119.53h11.027c7.498 0 13.497 6.087 13.497 13.585v35.727c0 3.617-1.411 7.057-3.97 9.616s-5.91 3.97-9.527 3.97zm-2.646-54.428v45.96h2.646c1.323 0 2.647-.53 3.617-1.5s1.5-2.205 1.5-3.617v-35.727a5.12 5.12 0 00-5.117-5.116h-2.646z"
              fill="#61c0bf"
            />
          </svg>
        </div>
        <div onClick={() => setCurrent(2)} className="proj-card">
          <svg
            width={252}
            height={202.65}
            viewBox="0 0 200 40.70320770684062"
            className="proj-logo"
          >
            <defs id="SvgjsDefs1552"></defs>
            <g
              id="SvgjsG1553"
              featurekey="YhTCwJ-0"
              transform="matrix(2.0682523920558986,0,0,2.0682523920558986,-1.9441573668788958,-10.093067965047116)"
              fill="#2c3951"
            >
              <path d="M8.22 5.48 q2.08 0 3.72 0.95 t2.59 2.61 t0.97 3.7 q0 1.88 -0.97 3.51 t-2.47 2.27 l0 0.04 l4.38 0 l0 1.44 l-8.26 0 q-3.04 0 -5.11 -2.08 t-2.13 -5.18 q0 -2.04 0.96 -3.7 t2.65 -2.61 t3.67 -0.95 z M2.74 12.74 q0 2.4 1.58 4.03 t3.9 1.67 q2.34 0 3.89 -1.65 t1.59 -4.05 q0 -2.42 -1.57 -4.05 t-3.93 -1.65 q-2.3 0 -3.85 1.62 t-1.61 4.08 z M19.72 10.64 l0 5.68 q0 1.08 0.51 1.77 t1.63 0.71 q1.44 0 2.17 -0.96 t0.73 -2.56 l0 -4.64 l1.56 0 l0 7.28 q0.02 0.56 0.08 2.08 l-1.48 0 q-0.02 -0.96 -0.04 -1.54 l-0.04 0 q-0.36 0.78 -1.21 1.28 t-1.93 0.5 q-1.72 -0.02 -2.63 -1.03 t-0.91 -2.71 l0 -5.86 l1.56 0 z M30.2 5.84 q0.46 0 0.8 0.33 t0.34 0.81 q0 0.5 -0.32 0.82 t-0.82 0.32 t-0.82 -0.32 t-0.32 -0.82 q0 -0.48 0.34 -0.81 t0.8 -0.33 z M30.98 10.64 l0 9.36 l-1.56 0 l0 -9.36 l1.56 0 z M38.4 10.4 q2.22 0 3.58 1.48 l-1.24 1.1 q-0.94 -1.14 -2.36 -1.14 q-1.46 0 -2.31 0.95 t-0.85 2.53 q0 1.5 0.91 2.48 t2.25 1 q1.54 0 2.38 -1.16 l1.16 1.1 q-1.3 1.48 -3.54 1.5 q-2.14 -0.02 -3.47 -1.36 t-1.37 -3.56 q0.02 -2.24 1.4 -3.58 t3.46 -1.34 z M45.28 4.880000000000001 l0 9.88 l4.26 -4.12 l2.22 0 l-4.52 4.26 l4.98 5.1 l-2.3 0 l-4.64 -4.92 l0 4.92 l-1.56 0 l0 -15.12 l1.56 0 z M58.14 5.48 q2.58 0 3.96 1.66 l-1.38 1.2 q-0.8 -1.26 -2.58 -1.3 q-1.34 0 -2.18 0.64 t-0.84 1.74 q0 0.96 0.64 1.52 t2.4 1.1 q2.28 0.66 3.23 1.61 t0.95 2.57 q0 1.88 -1.4 3 t-3.58 1.14 q-1.46 0 -2.6 -0.52 t-1.76 -1.44 l1.44 -1.18 q0.46 0.76 1.28 1.17 t1.74 0.41 q1.26 0 2.17 -0.71 t0.91 -1.75 q0 -0.94 -0.53 -1.48 t-1.75 -0.92 l-1.62 -0.54 q-1.82 -0.62 -2.57 -1.55 t-0.75 -2.29 q0 -1.8 1.34 -2.93 t3.48 -1.15 z M66.4 4.880000000000001 l0 7.06 l0.04 0 q0.42 -0.7 1.24 -1.12 t1.78 -0.42 q1.76 0 2.65 1.02 t0.89 2.72 l0 5.86 l-1.56 0 l0 -5.68 q0 -1.08 -0.5 -1.77 t-1.64 -0.71 q-1.44 0 -2.17 0.95 t-0.73 2.57 l0 4.64 l-1.56 0 l0 -15.12 l1.56 0 z M80.42 10.4 q2.18 0 3.56 1.35 t1.44 3.57 q0 2.14 -1.4 3.51 t-3.6 1.41 q-2.2 0 -3.58 -1.39 t-1.42 -3.53 q0 -2.16 1.4 -3.53 t3.6 -1.39 z M77.10000000000001 15.32 q0 1.54 0.93 2.49 t2.39 0.99 q1.46 0 2.38 -0.97 t0.94 -2.51 q0 -1.52 -0.93 -2.5 t-2.41 -0.98 q-1.44 0 -2.36 0.97 t-0.94 2.51 z M92.72 10.4 q2.22 0 3.56 1.4 t1.36 3.52 q0 2.1 -1.36 3.49 t-3.32 1.43 q-1.2 0 -2.17 -0.52 t-1.43 -1.38 l-0.04 0 l0 6.22 l-1.56 0 l0 -13.92 l1.56 0 l0 1.36 l0.04 0 q1.38 -1.6 3.36 -1.6 z M89.32 15.32 q0 1.54 0.93 2.49 t2.39 0.99 q1.46 0 2.38 -0.97 t0.94 -2.51 q0 -1.52 -0.93 -2.5 t-2.41 -0.98 q-1.44 0 -2.36 0.97 t-0.94 2.51 z"></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="proj-info">
        <Slideshow images={image} />
      </div>
    </motion.div>
  )
}

export default Projects
