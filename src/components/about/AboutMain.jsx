import React from 'react';
import styled from '@emotion/styled';

const H2 = styled.h2`
  border-bottom: 1px ${props => props.theme.colors.parBlue.light} solid;
  padding-bottom: 10px;
`;
const AboutWrap = styled.div`
  padding: 75px 20px 0px 20px;
  width: 80%;
  margin: 0 auto;
  max-width: 1000px;
  @media (max-width: 760px) {
    font-size: 16px;
  }
  @media (max-width: 433px) {
    font-size: 14px;
  }
`;

const AboutMain = () => {
  return (
    <>
      <AboutWrap>
        <H2>About Us</H2>

        <p className="about-text">
          {' '}
          Capital Source 2000 Inc. is a growing leader in the alternative
          finance industry established by banking and factoring industry
          veterans in 2015. Our company takes great pride in helping small
          businesses achieve their full potential by providing the working
          capital they need to grow their business. We utilize exclusive working
          relationships with our partners to service our clients, finding the
          best clients through rigorous non-algorithmic underwriting.
        </p>
      </AboutWrap>
    </>
  );
};

export default AboutMain;
