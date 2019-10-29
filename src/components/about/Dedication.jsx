import React from 'react';
import styled from '@emotion/styled';

const H2 = styled.h2`
  border-bottom: 1px ${props => props.theme.colors.parBlue.light} solid;
  padding-bottom: 10px;
`;
const DedicationWrap = styled.div`
  padding: 20px;
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

`;

const Dedication = () => {
  return (
    <>
      <DedicationWrap>
        <H2>Dedication</H2>

        <p className="portfolio-text">
          {' '}
          Capital Source 2000 is dedicated to enhancing your business's
          productivity while providing the best quality of service.
        </p>
      </DedicationWrap>
    </>
  );
};

export default Dedication;
