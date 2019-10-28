import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { Layout } from 'layouts';
import ThankYou from "../components/thankyou/Thankyou"
import PropTypes from 'prop-types';


const ThankYouPage = () => {
  return (
    <>
      <Layout>
        <Helmet title={'Thank You'} />
        <Header title="Thank You"></Header>
        <ThankYou />
       
      </Layout>
    </>
  );
};

ThankYouPage.propTypes = {
  center: PropTypes.object,
}; 

export default ThankYouPage;
