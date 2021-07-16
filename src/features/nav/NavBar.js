import React, {  useRef } from 'react'
import { motion } from 'framer-motion'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined'


import Slide from '@material-ui/core/Slide'


export default function IconBreadcrumbs(props) {


  const { about, landing, projects } = props.visibility
  const ref = useRef()
 


  const goToAbout = () => {
    const selectedEl = document.querySelector('#about')
    selectedEl.scrollIntoView({ inline: 'center' })
  }

  const goToLanding = () => {
    const selectedEl = document.querySelector('#landing')

    selectedEl.scrollIntoView(false)
  }
  const goToProjects = () => {
    const selectedEl = document.querySelector('#projects')
    selectedEl.scrollIntoView(false)
  }

  return (
    <Slide initial direction="down" in={true} >
      <motion.div ref={ref} className="side-nav">
        <HomeOutlinedIcon
          onClick={() => goToLanding()}
          className={landing ? 'side-icon active' : 'side-icon'}
          style={{ fontSize: 30, color: '#FF737F' }}
        />
        <InfoOutlinedIcon
          onClick={() => goToAbout()}
          className={about ? 'side-icon active' : 'side-icon'}
          style={{ fontSize: 30, color: '#FF737F' }}
        />
        <CodeOutlinedIcon
          className={projects ? 'side-icon active' : 'side-icon'}
          style={{ fontSize: 30, color: '#FF737F' }}
          onClick={() => goToProjects()}
        />
      </motion.div>
    </Slide>
  )
}
