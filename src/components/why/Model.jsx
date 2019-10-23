import React from 'react';
import styled from '@emotion/styled';
import Image1 from '../../images/1.jpg';
import Image2 from '../../images/2.jpg';
import Image3 from '../../images/3.png';

const ModelWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ecf0f1;
`;
const ModelContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 293px;
  justify-content: center;
  margin: 20px 15px;
`;
const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: #fff;
`;

const P = styled.p`
  font-size: 14px;
  font-family: lato;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
  color: #666;
`;
const H3 = styled.h3`
font-size: 30px;
  margin: 30px;
`;

const H5 = styled.h5`
  font-size: 20px;
`;

const Model = () => {
  return (
    <>
      <ModelWrapper>
        <H3>How Our Model Works</H3>
        <ModelContainer>
          <Box>
            <img src={Image1} />
            <Subtitle>
              <H5>Underwriting</H5>
              <P>
                Capital Source 2000 uses a financial matrix for our underwriting
                which evaluates clients with an emphasis based on cash flow
                rather than traditional credit metrics.
              </P>
            </Subtitle>
          </Box>
          <Box>
            <img src={Image2} />
            <Subtitle>
              <H5>Analysis</H5>
              <P>
                We investigate numerous sources in addition to credit scores to
                screen applicants including:
                <ul>
                  <li>Site Inspections</li>
                  <li>MCA Industry Databases</li>
                  <li>Background Checks</li>
                </ul>
              </P>
            </Subtitle>
          </Box>
          <Box>
            <img src={Image3} />
            <Subtitle>
              <H5>Funded</H5>
              <P>
                We complete the underwriting process to reach a decision in 48
                hours.
              </P>
            </Subtitle>
          </Box>
        </ModelContainer>
      </ModelWrapper>
    </>
  );
};

export default Model;
