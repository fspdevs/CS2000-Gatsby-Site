import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const H2 = styled.h2`
  border-bottom: 1px ${props => props.theme.colors.parBlue.light} solid;
  padding-bottom: 10px;
`;
const InfoWrap = styled.div`
  padding: 20px;
  width: 100%;
`;
const StyledInfo = styled.form`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 75%;
  @media (max-width: 515px) {
    font-size: 14px;
    margin-left: 0px;
  }
`;

export const ContactInfo = () => {
  return (
    <>
      <InfoWrap>
        <StyledInfo>
          <Fade left>
            <H2>Contact Info</H2>

            <p>
              {' '}
              We understand that time is valuable and you may need to ask a
              quick question to the Capital Source 2000 team, please feel free
              to fill out the designated form below and your Capital Source 2000
              representative will be able to answer any questions that you may
              have.
            </p>
            <table>
              <tr>
                <th>Phone</th>
                <td>(215) 291 - 7722</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>info@capitalsource2000.com</td>
              </tr>
            </table>
          </Fade>
        </StyledInfo>
      </InfoWrap>
      <style jsx>
        {`
 
 @media (max-width: 515px) {
  td {
   font-size: 13px;
  }
        `}
      </style>
    </>
  );
};
