import React from 'react';
import styled from '@emotion/styled';

const OverWrapper = styled.section`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  //   align-items: center;
`;
const OverContainer = styled.div`
  padding: 5px;
  display: flex;
  margin: 15%;
  //   justify-content: center;
`;
const OverTitle = styled.h4`
  font-size: 25px;
  border-bottom: 1px blue solid;
  padding-bottom: 10px;

  align-self: start;
  width: 100%;
  text-align: ;
`;

const OverCol = styled.div`
  display: flex;
  flex-direction: column;
`;
const H3 = styled.h3`
  font-size: 30px;
`;

const Overview = () => {
  return (
    <>
      <OverWrapper>
        <OverContainer>
          <OverTitle>Industry Overview</OverTitle>
          <OverCol>
            <H3>
              Traditional small business lending has decreased dramatically
              since the collapse of the U.S. banking industry in 2008.
            </H3>
          </OverCol>
          <OverCol></OverCol>
        </OverContainer>
      </OverWrapper>
    </>
  );
};

export default Overview;
