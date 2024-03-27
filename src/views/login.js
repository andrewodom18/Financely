import React from 'react';
import { Helmet } from 'react-helmet';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';

import './login.css';

const Login = (props) => {
  return (
    <>
      <PageHeader />
      <div className='login-container'>
        <Helmet>
          <title>Login - Financely</title>
          <meta property='og:title' content='Login - Financely' />
        </Helmet>
      </div>
      <PageFooter />
    </>
  );
};

export default Login;
