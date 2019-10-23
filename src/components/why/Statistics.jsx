import React from 'react';
import styled from '@emotion/styled';

const StatsWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StatsCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const StatsTitle = styled.h4`
  font-size: 25px;
`;
const StatsContent = styled.div`
  flex-direction: column;
  display: flex;
`;

const ChartBox = styled.div`
  width: 100%;
  margin: 5px 10px;
`;

const LI = styled.li`
  background: grey;
`;

const Stats = () => {
  return (
    <>
      <StatsWrapper>
        <StatsCol>
          <StatsTitle>Porfolio Diversification</StatsTitle>
          <StatsContent>
            <h5>Risk Mitigation Through Industry Diversification</h5>
            <ChartBox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
              fusce ut placerat orci nulla. Donec et odio pellentesque diam
              volutpat commodo sed. Nisl suscipit adipiscing bibendum est
              ultricies integer quis auctor. Ullamcorper velit sed ullamcorper
              morbi tincidunt.
            </ChartBox>
          </StatsContent>
        </StatsCol>
        <StatsCol>
          <StatsTitle>Capital Source 2000 Advantages</StatsTitle>
          <h5>
            Once an MCA is approved and funded it begins to generate cash flow
            the next day.
          </h5>
          <ul>
            <li>
              Our MCA’s range in size from $5,000 to $150,000 and average
              funding size $25,101
            </li>
            <li>
              Funding terms are typically given a for a 66 to 132 business day
              period or 3 to 6 months based on 22 business days per month.
            </li>
            <li>
              Client payments are collected via ACH debit directly from client
              bank accounts.
            </li>
            <li>
              MCA payback is generally based on an average factoring rate of
              1.40
            </li>
          </ul>
        </StatsCol>
      </StatsWrapper>
    </>
  );
};
export default Stats;
