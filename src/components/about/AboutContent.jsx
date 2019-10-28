import React from 'react';
import styled from '@emotion/styled';
import AboutBGImage from '../about/AboutBGImage';
import AboutMain from '../about/AboutMain';
import Portfolio from '../about/Portfolio';
import Dedication from '../about/Dedication';
import Fade from 'react-reveal/Fade';

const AboutRow1Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  min-height: 450px;
`;

const AboutRow2Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  min-height: 450px;
  max-width: 1366px;
  @media (max-width: 760px) {
    flex-wrap: wrap;
    font-size: 16px;
  }
  @media (max-width: 433px) {
    font-size: 14px;
  }
`;

const AboutContent = () => {
  return (
    <>
      <AboutBGImage>
        <div id="my-overlay-about"></div>
      </AboutBGImage>
      <AboutRow1Wrap>
        <Fade bottom>
          <AboutMain />
        </Fade>
      </AboutRow1Wrap>
      <AboutRow2Wrap>
        <Fade left>
          <Portfolio />
        </Fade>
        <Fade right>
          <Dedication />
        </Fade>
      </AboutRow2Wrap>
      <style jsx>
        {`
          #my-overlay-about {
            height: 900px;
            width: 100vw;
          }
        `}
      </style>
    </>
  );
};

export default AboutContent;
