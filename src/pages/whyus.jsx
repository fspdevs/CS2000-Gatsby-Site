import React from 'react';
import { Helmet } from 'react-helmet';
import { Header } from 'components';
import { Layout } from 'layouts';
import styled from '@emotion/styled';
import Model from '../components/why/Model';

const AboutRow1Wrap = styled.div`
  background: #ecf0f1;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  z-index: -100;
`;


const WhyUs = () => {
  return (
    <>
      <Layout>
        <AboutRow1Wrap>
          <Helmet title={'Why Capital Source 2000?'} />
          <Header title="Why Us?"></Header>
          <Model />
        </AboutRow1Wrap>
      </Layout>
    </>
  );
};
export default WhyUs;
