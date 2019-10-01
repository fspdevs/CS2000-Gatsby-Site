import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header } from 'components';
import { Layout } from 'layouts';

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const Index = () => {
  // const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Helmet title={'Home Page'} defer={false} />
      <Header title="Home Page">Capital Source 2000</Header>
      <HomeWrapper/>
    </Layout>
  );
};

export default Index;
