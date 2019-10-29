import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout } from 'layouts';
import AboutContent from '../components/about/AboutContent';

const About = center => (
  <Layout>
    <Helmet title={'About Us'} defer={false} />
    <Header title="About Us"></Header>
    <AboutContent />
  </Layout>
);

export default About;

About.propTypes = {
  center: PropTypes.object,
};
