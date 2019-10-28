import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

const ResultsRow1Wrap = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: row;
  align-content: center;
  height: 300px;
  @media (max-width: 900px) {
    margin-top: 50px;
  }
`;

// set initial state false
const Results = () => {
  const [state, setState] = useState({
    hoverWho: false,
    hoverResults: false,
  });


  // on mouse hover state change
  const hoverWho = () => {

    setState({
      ...state,
      hoverWho: true,
    });

  };
  // mouse off state return to false
  const unHoverWho = () => {

    setState({
      ...state,
      hoverWho: false,
    });
  };

  return (
    <>

    {/* wrapper that triggers the hover events  */}
      <div className="wrapper">
        <Fade right>
          <ResultsRow1Wrap
            onMouseEnter={hoverWho}
            onMouseLeave={unHoverWho}
            className="section-who"
          >
            {/* icon section */}
            <FontAwesomeIcon
              icon={faTrophy}
              size="2x"
              className="icon icon-change icon-spin"
              alt="Trophy Icon"
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
                Results
              </h2>
              <p className="home-p">
                We are a results oriented company that offers alternative
                lending to small businesses. Our portfolio of clients speaks for
                itself.
              </p>
            </div>
          </ResultsRow1Wrap>
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

          .home-p {
            font-size: 16px;
          }
          .who-text {
            max-width: 550px;
            min-width: 250px;
          }

          .wrapper {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-content: center;
          }

        `}
      </style>
    </>
  );
};

export default Results;
