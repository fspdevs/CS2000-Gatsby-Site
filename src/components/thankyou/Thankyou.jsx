import React from "react";
// import styled from 'styled-components'
import styled from '@emotion/styled';
import ThankYouBGImage from "./ThankYouBGImage";

const H2 = styled.h2`
//    border-bottom: 1px ${props => props.theme.colors.parBlue.light} solid;
  padding-bottom: 10px;
`;

const ThankYou = () => (
  <>
    {/* background image wraper around overlay div */}
    <ThankYouBGImage>
      <div id="my-overlay-thank"></div>
    </ThankYouBGImage>

    {/* main div to get styled on top of BG */}
    <div className="thank-you-section">
      <div className="thank-you-container">
          <div className="thank-you-overlay">
        <H2 className="thank-you-title">Thank you for your message</H2>
        <h3 className="thank-you-sub">We will get back to you shortly </h3>
        </div>
      </div>
      <style jsx>
        {`
          .thank-you-section {
            height: 875px;
            // background: rgb(68,146,201);
            // background: linear-gradient(342deg, rgba(68,146,201,1) 0%, rgba(34,72,99,1) 
            // 100%);

            background: rgb(255,255,255);
            background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(157,157,157,1) 100%);
          }

        //   #my-overlay-thank {
        //     height: 875px;
        //     opacity: 0.4;
        //     background: white;
        //     width: 100vw;
        //   }

     

          .thank-you-container {
            margin: 0 auto;
         
            max-width: 1366px;
            
            
          }

          .thank-you-title {
            font-family: "Anton", san-serif;
            font-size: 70px;
            text-align: center;
            padding-top: 300px;
            color: black;
            font-family: 'Candal',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif;
        
    
          }

          .thank-you-sub {
            font-family: "Anton", san-serif;
            font-size: 50px;
            text-align: center;
            color: black;
            font-family: 'Candal',-apple-system,'BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial',sans-serif;
            // border-bottom: 1px blue solid;
          }

          @media only screen and (max-width: 600px) {
            .thank-you-title {
              font-size: 50px;
            }

            .thank-you-sub {
              font-size: 30px;
            }

            .thank-you-section {
              height: 700px;
            }

            .thank-you-title {
              padding-top: 200px;
            }
          }
        `}
      </style>
    </div>
  </>
)

export default ThankYou