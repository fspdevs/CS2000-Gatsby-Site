import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import LandingBGImage from '../components/home/LandingBGImage';
import { Header } from 'components';
import { Layout } from 'layouts';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBriefcase, faTrophy } from '@fortawesome/free-solid-svg-icons'
import WhoWeAre from '../components/home/WhoWeAre';
import Results from '../components/home/Results';
import Fade from "react-reveal/Fade"

// const element = <FontAwesomeIcon icon={faCoffee} />

const HomeWrapperRow1 = styled.div`
  display: flex;
  flex-direction: row;
  height: 400px;

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
  max-width: 70% !important;
  margin: 0 auto;
  //margin: 20px;
  // margin: 4rem 4rem 1rem 4rem;
  // @media (max-width: 1000px) {
  //   margin: 4rem 2rem 1rem 2rem;

  // }
  @media (max-width: 900px) {
    // width: 100% !important;
    margin: 0 auto;
    margin-left: 0px;
    flex-wrap: wrap;
  }
`;

const Index = () => {
  // const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title={'Home Page'} defer={false} />
      <Header title="CAPITAL SOURCE 2000"></Header>

      <LandingBGImage>
        <div id="my-overlay-landing"></div>
      </LandingBGImage>
      <HomeWrapperRow1>
  
        <div>
        <Fade bottom>
          <p className="line-1 headline">Profit through</p>
          <p className="line-2 headline">small business</p>
          </Fade>
        </div>
      
      </HomeWrapperRow1>
      <HomeWrapperRow2>
        <WhoWeAre />
        <Results />
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
            // padding: 0px;
            height: 400px;
            margin: 0px;
            border-width: 0px;
            white-space: nowrap;
            min-width: 0px;
            visibility: visible;
          }

          .line-1 {
            font-align: center;
            color: #fff;
            height: 120px;
            text-shadow: none;
            font-weight: 800;
            font-size: 100px;
            line-height: 100px;
            font-family: 'Open Sans', sans;
            border-width: 0;
            border-style: none;
            white-space: nowrap;
            text-shadow: 3px 3px #040428;
            margin-top: 110px;
          }

          .line-2 {
            color: #e4ea00;
            height: 120px;
            text-shadow: none;
            font-weight: 800;
            font-size: 100px;
            line-height: 100px;
            font-family: 'Open Sans', sans;
            margin: 0;
            border-width: 0;
            border-style: none;
            white-space: nowrap;
            text-shadow: 3px 3px #040428;
            color: ;
          }

          .icon {
            height: 200px;
          }

          @media (max-width: 1000px) {
            .headline {
              font-size: 75px;
            }
            .line-2 {
              height: 80px;
            }
            .line-1 {
              height: 80px;
            }
          }

          @media (max-width: 590px) {
            .headline {
              font-size: 45px;
            }
            .line-2 {
              height: 80px;
            }
            .line-1 {
              height: 80px;
            }
          }


          @media (max-width: 360px) {
            .headline {
              font-size: 35px;
            }
            .line-2 {
              height: 80px;
            }
            .line-1 {
              height: 80px;
            }
          }
        `}
      </style>
    </Layout>
  );
};

export default Index;
