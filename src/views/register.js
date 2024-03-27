import React from 'react'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {
  return (
    <div className="register-container">
      <Helmet>
        <title>Register - Financely</title>
        <meta property="og:title" content="Register - Financely" />
      </Helmet>
    </div>
  )
}

export default Register
