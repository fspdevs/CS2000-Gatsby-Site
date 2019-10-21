import React from 'react';
// import { graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import LandingBGImage from '../components/home/LandingBGImage'
import { Header } from 'components';
import { Layout } from 'layouts';

const HomeWrapperRow1 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 600px;
  justify-content: center;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;

const HomeWrapperRow2 = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 600px;
  justify-content: center;
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
      <Header title="CAPITAL SOURCE 2000"></Header>
     
        <LandingBGImage >
        <div id="my-overlay-landing"></div>
        </LandingBGImage >
      <HomeWrapperRow1>
        <div>
          <p className="line-1 headline">Profit through</p>
          <p className="line-2 headline">small business</p>
        </div>
      </HomeWrapperRow1>
      <HomeWrapperRow2>
        
      </HomeWrapperRow2>
      <style jsx>
        {`
          #my-overlay-Landing {
            height: 600px;
            width: 100vw;
          }

          .headline {
            text-align: center;
            font-size: 97px;
            padding: 0px;
            height: 400px;
            margin: 0px;
            border-width: 0px;
            // line-height: 97px;
            white-space: nowrap;
            min-width: 0px;
            // min-height: 0px;
            // transform: rotate(0deg);
            // opacity: 1;
            // left: 223.906px;
            // top: 116.78px;
            visibility: visible;
            
          }
          // p {
          //   margin-top:  20px ;
          // }

          .line-1 {
            // position: absolute;
            font-align: center;
            color: #fff;
            height: 120px;
            text-shadow: none;
            font-weight: 800;
            font-size: 100px;
            line-height: 100px;
            font-family: 'Open Sans',sans;
            // margin: 0;
            border-width: 0;
            border-style: none;
            white-space: nowrap;
            // letter-spacing: 0;
           text-shadow: 3px 3px #040428;
          }

          .line-2 {
            // position: absolute;
            color: #e4ea00;
            // color: #fff;
            height: 120px;
            text-shadow: none;
            font-weight: 800;
            font-size: 100px;
            line-height: 100px;
            font-family: 'Open Sans',sans;
            margin: 0;
            border-width: 0;
            border-style: none;
            white-space: nowrap;
            // letter-spacing: 0;
           text-shadow: 3px 3px #040428;
           color: 
          }

        `}
      </style>
    </Layout>
  );
};

export default Index;
