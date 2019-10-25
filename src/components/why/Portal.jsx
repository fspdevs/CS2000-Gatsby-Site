import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../config/theme';

const PortalWrapper = styled.section`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PortalContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 15%;
`;

const PortalTitle = styled.h4`
  font-size: 25px;
  border-bottom: 1px ${colors.parGrey.mediumLight} solid;
  padding-bottom: 10px;
  align-self: start;
  width: 100%;
`;

const H5 = styled.h5`
  font-size: 15px;
  font-weight: 200;
  font-family: 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
    'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

const Portal = () => {
  return (
    <>
      <PortalWrapper>
        <PortalContainer>
          <PortalTitle>Our Client Portal</PortalTitle>
          <H5>
            Capital Source 2000, takes full advantage of our copyrighted Capital
            Control Center along with the web based Admin Portal. The Capital
            Source 2000 portal will automatically update using sophisticated
            algorithms from our accounting data. This allows us and our clients
            to effortlessly stay informed. Our Capital Control Center allows
            Capital Source 2000 to distinguish itself in the marketplace by
            offering multiple features. With this capability, we can monitor our
            client’s payments along with their set schedule at the click of a
            button. The Capital Control Center, also allows clients to monitor
            and build a combined point total through good payment history. Once
            our clients build a certain level of points they can redeem them
            with different gifts available on the portal. The gifts include
            iPads, laptops and a number of other devices.
          </H5>
        </PortalContainer>
      </PortalWrapper>
    </>
  );
};
export default Portal;
