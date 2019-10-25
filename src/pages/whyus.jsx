import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { Layout } from 'layouts';
import Model from '../components/why/Model';
import Stats from '../components/why/Statistics';
import Overview from '../components/why/Overview';
import Portal from '../components/why/Portal';

const WhyUs = () => {
  return (
    <>
      <Layout>
        <Helmet title={'Why Capital Source 2000?'} />
        <Header title="Why Us?"></Header>
        <Model />
        <Stats />
        <Overview />
        <Portal />
      </Layout>
    </>
  );
};
export default WhyUs;
