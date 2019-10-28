import React from 'react';
import styled from '@emotion/styled';
import Chart from 'react-google-charts';
import Slide from 'react-reveal/Slide';
import { colors, device } from '../../../config/theme';

const StatsWrapper = styled.section`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StatsContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: center;
  margin: 0 15%;
  @media ${device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media ${device.desktopM} {
    margin: 0 10%;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5%;
  }
`;
const StatsCol = styled.div`
margin: 0 auto;
  @media ${device.laptop} {
    width: 90%;
    padding: 0px 15px;
  }
  @media ${device.tablet} {
    width: 80%;
    padding: 0 30px;
  }

  @media ${device.mobileL} {
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;
const StatsTitle = styled.h4`
  font-size: 25px;
  border-bottom: 1px ${colors.parBlue.light} solid;
  padding-bottom: 10px;
  margin: 10px 20px 10px 0px;
  text-align: left;
  text-shadow: 1px 1px 5px ${colors.parBlue.dark};
  @media ${device.desktop} {
    align-self: flex-start;
    width: 100%;
  }
`;
const StatsContent = styled.div`
  flex-direction: column;
  display: flex;
  text-align: left;
  margin: 0 auto;
  @media ${device.desktop} {
    width: 100%;
    display: flex;
    align-items: center;
  }
  @media ${device.laptop} {
    width: 90%;
    padding: 0px 15px;
  }
  @media ${device.tablet} {
    width: 70%;
    padding: 0 30px;
    display: flex;
  
  }
  @media ${device.mobileL} {
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: 100%;
  }
`;

const ChartBox = styled.div`
  margin: 5px 10px;
`;

const LI = styled.li`
  background: #f9f9f9;
  border-left: 4px solid ${colors.parBlue.mediumLight};
  margin: 20px auto;
  padding: 15px 20px;
`;
const UL = styled.ul`
  list-style-type: none;
`;

const Stats = () => {
  return (
    <>
      <StatsWrapper>
        <StatsContainer>
          <StatsCol>
            <StatsContent>
              <StatsTitle>Porfolio Diversification</StatsTitle>
              <h5>Risk Mitigation Through Industry Diversification</h5>

              <Chart
                width={'800px'}
                height={'500px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Industry', 'Distribution'],
                  ['Retail', 8.8],
                  ['Construction', 8.4],
                  ['Technology', 9.7],
                  ['Finance', 8.4],
                  ['Automative', 8.3],
                  ['Restaurant', 8.3],
                  ['Energy', 7.8],
                  ['Medical', 7],
                  ['Marketing', 7],
                  ['Manufacturing', 6.9],
                  ['Food Distribution', 6.5],
                  ['Gym/Salons', 4.6],
                  ['Home', 4.4],
                  ['Travel', 2.5],
                  ['Other Industries', 1.4],
                ]}
                options={{
                  title: '',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            </StatsContent>
          </StatsCol>

          <StatsCol>
            <StatsContent>
              <StatsTitle>Capital Source 2000 Advantages</StatsTitle>
              <h5>
                Once an MCA is approved and funded it begins to generate cash
                flow the next day.
              </h5>
              <ChartBox>
                <UL>
                  <Slide right cascade>
                    <div>
                      <LI>
                        Our MCA’s range in size from $5,000 to $150,000 and
                        average funding size $25,101
                      </LI>
                      <LI>
                        Funding terms are typically given a for a 66 to 132
                        business day period or 3 to 6 months based on 22
                        business days per month.
                      </LI>
                      <LI>
                        Client payments are collected via ACH debit directly
                        from client bank accounts.
                      </LI>
                      <LI>
                        MCA payback is generally based on an average factoring
                        rate of 1.40
                      </LI>
                    </div>
                  </Slide>
                </UL>
              </ChartBox>
            </StatsContent>
          </StatsCol>
        </StatsContainer>
      </StatsWrapper>
    </>
  );
};
export default Stats;
