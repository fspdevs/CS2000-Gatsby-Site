import React from 'react';
import styled from '@emotion/styled';
import { colors, device } from '../../../config/theme';
import { PortalImage } from './images';
import Slide from 'react-reveal/Slide';

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
  border-bottom: 1px ${colors.parBlue.light} solid;
  padding-bottom: 10px;
  align-self: start;
  width: 100%;
  text-shadow: 1px 1px 5px ${colors.parBlue.dark};
`;

const H5 = styled.h5`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
    'Roboto', 'Helvetica', 'Arial', sans-serif;
  line-height: 2rem;
`;
const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  justify-content: center;
  margin: 20px 15px;
  @media ${device.laptop}{
    width: 60%;
  }
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 70%;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;
const PortalRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 40%;
  justify-content: space-between;
  margin-bottom: 40px;
  @media ${device.laptopL} {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
`;
const LI = styled.li`
  font-size: 18px;
  margin: 20px 0;
  list-style-type: none;
  background-color: #e74c3c60;
  padding: 5px;
  font-family: 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
    'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  color: black;
  border-radius: 5px / 20px;
  :hover {
    background-color: #eb1d0080;
    border: 2px outset ${colors.parBlue.light};
    font-weight: 600;
    padding: 10px 0;
  }
`;
const UL = styled.ul`
  font-size: 14px;
  font-family: lato;
  margin: 0;
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
        <PortalRow>
          <ImageWrap>
            <PortalImage />
          </ImageWrap>

          <UL>
            <Slide right cascade>
              <div>
                <LI>User Friendly</LI>
                <LI>Latest Web HTML5</LI>
                <LI>Customer Support</LI>
                <LI>24/7 Access</LI>
                <LI>Custom Development</LI>
                <LI>Rewards Program</LI>
              </div>
            </Slide>
          </UL>
        </PortalRow>
      </PortalWrapper>
    </>
  );
};
export default Portal;
