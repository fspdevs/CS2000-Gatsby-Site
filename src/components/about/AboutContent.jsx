import React from 'react';
import styled from '@emotion/styled';
import AboutBGImage from '../about/AboutBGImage'
import AboutMain from '../about/AboutMain'
import Portfolio from "../about/Portfolio"
import Dedication from "../about/Dedication"

const AboutRow1Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 450px;
`;

const AboutRow2Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  height: 450px;
  max-width: 1366px;
`;


const AboutContent = () => {
  return (
    <>
    <AboutBGImage> 
      <div id="my-overlay-about"></div>
    </AboutBGImage>
     <AboutRow1Wrap>
      <AboutMain />
    </AboutRow1Wrap>
    <AboutRow2Wrap>
       <Portfolio />
       <Dedication />
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

export default AboutContent