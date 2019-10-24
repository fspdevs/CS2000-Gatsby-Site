import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTrophy } from '@fortawesome/free-solid-svg-icons'
import Fade from "react-reveal/Fade"

const ResultsRow1Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
//   width: 75%;
//   justify-content: space-around;
  height: 300px;
//   width: 150px;
`;

const WhoRow2Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
//   justify-content: space-around;
  margin: 0 auto;
  height: 450px;
  max-width: 1366px;
`;


const Results = () => {
  const [state, setState] = useState({
    hoverWho: false,
    hoverResults: false
  })

const hoverWho = () => {
    console.log("in here")

setState({
    ...state,
    hoverWho: true,
  })
    
     console.log(state)
}

const unHoverWho = () => {

  console.log("unhover")
  setState({
    ...state,
    hoverWho: false,
  })
}


// useEffect(() => {
//   if (state.hoverWho === true) {
//     // if true run handle show function to open modal
  
//     // set state modal toggle back to false
 
//   }
// })


  return (
    <>
    < div className="wrapper">
      <Fade right>
    <ResultsRow1Wrap onMouseEnter={hoverWho}  onMouseLeave={unHoverWho} className="section-who">
   {/* <div className="icon-div briefcase"> */}
        <FontAwesomeIcon icon={faTrophy} size="2x" className="icon icon-change icon-spin" style={state.hoverWho ? {color: '#e74c3c', border: '2px solid #e74c3c'}:  {color: 'black', border: '2px solid black'}}/>
        {/* <i class="fas fa-trophy"></i> */}
        <div className="who-text">
            <h2 className="icon-change" style={state.hoverWho ? {color: '#e74c3c'}:  {color: 'black'}}>Results</h2>
            <p className="home-p">We are a results oriented company that offers alternative lending to small businesses. Our portfolio of clients speaks for itself.</p>
        </div>

    {/* </div> */}
    </ResultsRow1Wrap>
    </Fade>
    </div>
{/* 
    <WhoRow2Wrap>
        <h2>Who We Are</h2>
        <p>Capital Source 2000 Inc. is a Philadelphia based, privately owned company which provides working capital to small businesses across the United States through receivables financing.</p>
    </WhoRow2Wrap> */}
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
          }

          .wrapper {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-content: center;
          }

        //   .svg-inline--fa fa-briefcase fa-w-16 fa-2x icon {
        //    width: 70px;
        //    height: 70px;
        // }
        `}
      </style>
    </>
  );
};

export default Results