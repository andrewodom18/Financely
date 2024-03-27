import React from 'react'

import { Helmet } from 'react-helmet'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Financely</title>
        <meta property="og:title" content="Contact - Financely" />
      </Helmet>
    </div>
  )
}

export default Contact
