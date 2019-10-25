import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { Layout } from 'layouts';
import Model from '../components/why/Model';

import Overview from '../components/why/Overview';

const ThankYou = () => {
  return (
    <>
      <Layout>
        <Helmet title={'Thank You'} />
        <Header title="Thank You"></Header>
        <Model />
        <Overview />
      </Layout>
    </>
  );
};
export default ThankYou;
