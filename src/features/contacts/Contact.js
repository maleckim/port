import React from 'react'

import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Contact = () => (
  <div className="contact-content">
    <a
      className="contact-icon"
      style={{ textDecoration: 'none' }}
      href="mailto:maleckimatthewm@gmail.com"
    >
      <EmailIcon />
    </a>

    <a
      className="contact-icon"
      style={{ textDecoration: 'none' }}
      target="_blank"
      href="https://github.com/maleckim"
      rel="noreferrer"
    >
      <GitHubIcon />
    </a>

    <a
      className="contact-icon"
      style={{ textDecoration: 'none' }}
      target="_blank"
      href="https://www.linkedin.com/in/maleckimatthew/"
      rel="noreferrer"
    >
      <LinkedInIcon />
    </a>
  </div>
)

export default Contact
