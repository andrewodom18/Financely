import React from 'react';
import { Helmet } from 'react-helmet';

import PageHeader from '../components/page-header';
import PageFooter from '../components/page-footer';

import './not-found.css';

const NotFound = (props) => {
  return (
    <>
      <PageHeader />
      <div className='not-found-container'>
        <Helmet>
          <title>404 - Not Found</title>
        </Helmet>
        <h3>OOPS! PAGE NOT FOUND</h3>
        <div className='not-found-container1'>
          <h1 className='not-found-text1'>404</h1>
        </div>
        <div className='not-found-container2'>
          <h2 className='not-found-text2'>NOTHING TO SEE HERE!</h2>
        </div>
      </div>
      <PageFooter />
    </>
  );
};

export default NotFound;
