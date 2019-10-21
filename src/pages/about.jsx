import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';
import styled from '@emotion/styled';
import AboutMain from '../components/about/AboutMain';
import AboutBGImage from "../components/about/AboutBGImage";
import AboutContent from "../components/about/AboutContent";

// const AboutRow1Wrap = styled.div`
//   margin-top: 20px;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `;

const About = center => (
  <Layout>
    <Helmet title={'About Us'} defer={false}/>
    <Header title="About Us"></Header>

    <AboutContent/>
    {/* <AboutRow1Wrap>
      <AboutMain />

    </AboutRow1Wrap> */}
    {/* <Container center={center}> */}
      {/* <h3>
        If you would like to build this site completely from scratch, you can
        read the guide{' '}
        <a href="https://justinformentin.com/gatsby-v2-guide">here.</a>
      </h3> */}
    {/* </Container> */}
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
