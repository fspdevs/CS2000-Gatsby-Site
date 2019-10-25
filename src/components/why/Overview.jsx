import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../../config/theme';
import Slide from 'react-reveal/Slide';

const OverWrapper = styled.section`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.parGrey.light};
`;
const OverContainer = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  margin: 0 15%;
`;
const OverTitle = styled.h4`
  font-size: 25px;
  border-bottom: 1px ${colors.parGrey.mediumLight} solid;
  padding-bottom: 10px;
  align-self: start;
  width: 100%;
`;

const OverCol = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 0;
  margin: 0 20px 0 0;
`;
const H5 = styled.h5`
  font-size: 16px;
`;

const ColWrapper = styled.v`
  display: flex;
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

const Overview = () => {
  return (
    <>
      <OverWrapper>
        <OverContainer>
          <OverTitle>Industry Overview</OverTitle>
          <ColWrapper>
            <OverCol>
              <H5>
                Traditional small business lending has decreased dramatically
                since the collapse of the U.S. banking industry in 2008.
              </H5>
              <UL>
                <Slide left cascade>
                  <div>
                    <LI>
                      The number of small business loans peaked at 14 billion in
                      2007 and declined to less than 5 billion in 2010.
                    </LI>
                    <LI>
                      While the TARP program sanctioned more than $30 billion to
                      banks to provide small business loans, however, only about
                      $4 billion was actually loaned.
                    </LI>
                    <LI>
                      A recent survey conducted by Pepperdine University
                      revealed that 67% of those who applied for a traditional
                      business loan were unsuccessful.
                    </LI>
                  </div>
                </Slide>
              </UL>
            </OverCol>
            <OverCol>
              <H5>
                Why do billions of dollars in Small Business loan applications
                go unfunded each year?
              </H5>

              <UL>
                <Slide right cascade>
                  <div>
                    <LI>
                      Many banks have legacy portfolios of non-performing loans
                      and higher reserve requirements making them reluctant to
                      lend money in this category.
                    </LI>
                    <LI>
                      Additionally, traditional lending institutions have
                      employed stricter underwriting guidelines further limiting
                      the amount of small business funding.
                    </LI>
                  </div>
                </Slide>
              </UL>
            </OverCol>
          </ColWrapper>
        </OverContainer>
      </OverWrapper>
    </>
  );
};

export default Overview;
