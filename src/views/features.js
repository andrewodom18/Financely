import React from 'react'

import { Helmet } from 'react-helmet'

import './features.css'

const Features = (props) => {
  return (
    <div className="features-container">
      <Helmet>
        <title>Features - Financely</title>
        <meta property="og:title" content="Features - Financely" />
      </Helmet>
    </div>
  )
}

export default Features
