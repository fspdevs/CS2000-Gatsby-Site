import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTrophy } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const WhoRow1Wrap = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 300px;

  @media (max-width: 900px) {
    height: 150px;
  }
  @media (max-width: 490px) {
    height: 150px;

    margin-right: auto;
  }
`;

const WhoWeAre = () => {
  const [state, setState] = useState({
    hoverWho: false,
    hoverResults: false,
  });


  // hover state update mouse over 
  const hoverWho = () => {
    setState({
      ...state,
      hoverWho: true,
    });

  };
  // hover state return to false mouse off
  const unHoverWho = () => {
    setState({
      ...state,
      hoverWho: false,
    });

  };

  const unHoverWho = () => {
    console.log('unhover');
    setState({
      ...state,
      hoverWho: false,
    });
  };
  return (
    <>
      <div className="wrapper">

        {/* animation fade */}
        <Fade left>
          {/* area wrapper that calls mouse hover events */}

          <WhoRow1Wrap
            onMouseEnter={hoverWho}
            onMouseLeave={unHoverWho}
            className="section-who"
          >

            {/* icon section */}
            <FontAwesomeIcon
              icon={faBriefcase}
              size="2x"
              alt="Breifcase Icon"
              className="icon  icon-change icon-spin"
              style={
                state.hoverWho
                  ? { color: '#e74c3c', border: '2px solid #e74c3c' }
                  : { color: 'black', border: '2px solid black' }
              }
            />

            {/* text section */}
            <div className="who-text">
              <h2
                className="icon-change"
                style={
                  state.hoverWho ? { color: '#e74c3c' } : { color: 'black' }
                }
              >
                Who We Are
              </h2>
              <p className="home-p">
                Capital Source 2000 Inc. is a Philadelphia based, privately
                owned company which provides working capital to small businesses
                across the United States through receivables financing.
              </p>
            </div>
          </WhoRow1Wrap>
        </Fade>
      </div>

      <style jsx>
        {`
          .icon {
            padding: 15px;
            height: 70px !important;
            width: 70px !important;
            border: 2px solid black;
            border-radius: 50%;
            margin: 20px;
          }

          .who-text {
            max-width: 550px;
          }

          .home-p {
            font-size: 14px !important;
          }

          .wrapper {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-content: center;
          }

          .icon-change {
            color: #232526;
          }

          .icon:hover {
            border: 2px solid #e74c3c;
          }
          .section-who .icon {
            color: blue;
          }

          .section-who .icon-change .icon:hover {
            color: blue;
          }

          .icon-spin {
            border-radius: 50%;
            -webkit-transition: -webkit-transform 0.8s ease-in-out;
            transition: transform 0.8s ease-in-out;
          }
          .icon-spin:hover {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          }

          @media (max-width: 365px) {
            .icon {
              display: none;
            }

            .wrapper {
              margin: 20px;
            }
          }
        `}
      </style>
    </>
  );
};

export default WhoWeAre;
