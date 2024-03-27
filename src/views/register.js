import React from 'react';
import { Helmet } from 'react-helmet';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';

import './register.css';

const Register = (props) => {
  return (
    <>
      <PageHeader />
      <div className='register-container'>
        <Helmet>
          <title>Register - Financely</title>
          <meta property='og:title' content='Register - Financely' />
        </Helmet>
      </div>
      <PageFooter />
    </>
  );
};

export default Register;
