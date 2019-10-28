import React from 'react';
import styled from '@emotion/styled';
import { ImageOne, ImageTwo, ImageThree } from './images';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { device } from '../../../config/theme';

const ModelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f1;
  width: 100%;
`;
const ModelContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  justify-content: center;
  margin: 20px 15px;
  @media ${device.laptopL} {
    width: 300px;
  }
  @media ${device.laptop}{
    width: 30%;
  }
  @media ${device.mobileL}{
    width: 80%;
  }
`;
const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: #fff;
`;

const P = styled.p`
  font-family: lato;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
  color: #666;
  @media ${device.mobileL}{
    font-weight: bold;
  }
`;
const H3 = styled.h3`
  font-weight: 600;
  font-size: 30px;
  margin: 30px;
  text-shadow: 1px 2px  5px grey;
  font-family: 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Segoe UI',
    'Roboto', 'Helvetica', 'Arial', sans-serif;
`;

const H5 = styled.h5`
  font-size: 20px;
`;
const LI = styled.li`
  margin: 0;
  list-style-type: none;
`;
const UL = styled.ul`
  font-size: 14px;
  font-family: lato;
  margin: 10px 0;
`;
const Div = styled.div`
  align-items: flex-start;
  display: flex;
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    margin: 20px;
    align-items: center; 
  }
`;
const Model = () => {
  return (
    <>
      <ModelWrapper>
        <Pulse>
          <div style={{ textAlign: 'center' }}>
            <H3>How Our Model Works</H3>
            <P>It All Starts With Underwriting</P>
          </div>
        </Pulse>
        <ModelContainer>
          <Fade bottom cascade>
            <Div>
              <Box>
                <ImageOne />
                <Subtitle>
                  <H5>Underwriting</H5>
                  <P>
                    Capital Source 2000 uses a financial matrix for our
                    underwriting which evaluates clients with an emphasis based
                    on cash flow rather than traditional credit metrics.
                  </P>
                </Subtitle>
              </Box>
              <Box>
                <ImageTwo />
                <Subtitle>
                  <H5>Analysis</H5>
                  <P>
                    We investigate numerous sources in addition to credit scores
                    to screen applicants including:
                  </P>
                  <UL>
                    <LI>Site Inspections</LI>
                    <LI>MCA Industry Databases</LI>
                    <LI>Background Checks</LI>
                  </UL>
                </Subtitle>
              </Box>
              <Box>
                <ImageThree />
                <Subtitle>
                  <H5>Funded</H5>
                  <P>
                    We complete the underwriting process to reach a decision in
                    48 hours.
                  </P>
                </Subtitle>
              </Box>
            </Div>
          </Fade>
        </ModelContainer>
      </ModelWrapper>
    </>
  );
};

export default Model;
