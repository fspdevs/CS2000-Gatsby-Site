import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { Layout } from 'layouts';
import Model from '../components/why/Model';
import Stats from '../components/why/Statistics';
import Overview from '../components/why/Overview';

const WhyUs = () => {
  return (
    <>
      <Layout>
        {/* <AboutRow1Wrap> */}
        <Helmet title={'Why Capital Source 2000?'} />
        <Header title="Why Us?"></Header>
        <Model />
        <Stats />
        <Overview />
        {/* </AboutRow1Wrap> */}
      </Layout>
    </>
  );
};
export default WhyUs;
