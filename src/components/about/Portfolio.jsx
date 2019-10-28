import React from 'react';
import styled from '@emotion/styled';

const H2 = styled.h2`
  border-bottom: 1px ${props => props.theme.colors.parBlue.light} solid;
  padding-bottom: 10px;
`;
const PortfolioWrap = styled.div`
  padding: 20px;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

`;

const Portfolio = () => {
  return (
    <>
      <PortfolioWrap>
       
          <H2>Portfolio Objective</H2>
          
          <p className="portfolio-text">
            {' '}
            Our portfolio is designed to grow through the responsible management and deployment of investor 
            funds alongside our capital to provide additional funding to small businesses.
          </p>
          
      </PortfolioWrap>
    </>
  );
};

export default Portfolio
