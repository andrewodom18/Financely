import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - Financely</title>
        <meta property="og:title" content="Login - Financely" />
      </Helmet>
    </div>
  )
}

export default Login
