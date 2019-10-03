import React from 'react';
import styled from '@emotion/styled';

const H2 = styled.h2`
border-bottom: 1px black solid;
padding-bottom: 10px;
`
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
`;

export const ContactInfo = () => {
  return (
    <>
      <InfoWrap>
        <StyledInfo>
          <H2>Contact Info</H2>
          
          <p>
            {' '}
            We understand that time is valuable and you may need to ask a quick
            question to the Capital Source 2000 team, please feel free to fill
            out the designated form below and your Capital Source 2000
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
        </StyledInfo>
      </InfoWrap>
    </>
  );
};
