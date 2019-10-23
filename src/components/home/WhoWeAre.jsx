import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faTrophy } from '@fortawesome/free-solid-svg-icons'

const WhoRow1Wrap = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-content: center;
//   width: 75%;
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


const WhoWeAre = () => {
    const [state, setState] = useState({
        hoverWho: false,
        hoverResults: false
      })
    
    
    let styleRedIcon;

    const hoverWho = () => {
        console.log("in here")

    setState({
        ...state,
        hoverWho: !state.hover,
      })
        //  styleRedIcon = {'border': '2px solid pink', 'color': 'purple'}
         console.log(state)
    }

    const unHoverWho = () => {
        styleRedIcon = {border: "2px solid black", color: "black"}
    }

    useEffect(() => {
        if (state.hoverWho === true) {
          // if true run handle show function to open modal
          styleRedIcon = {'border': '2px solid pink', 'color': 'purple'}
          // set state modal toggle back to false
         console.log(styleRedIcon)
        }
      })


  return (
    <>
      < div className="wrapper">
    <WhoRow1Wrap onMouseEnter={hoverWho} className="section-who"
  >
      {/*   onMouseLeave={unHoverWho} */}
   {/* <div className="icon-div briefcase"> */}
        <FontAwesomeIcon icon={faBriefcase} size="2x" className="icon  icon-change" style={{styleRedIcon}}/>
        {/* <i class="fas fa-trophy"></i> */}
        <div className="who-text">
            <h2  className="icon-change" style={styleRedIcon}>Who We Are</h2>
            <p className="home-p">Capital Source 2000 Inc. is a Philadelphia based, privately owned company which provides working capital to small businesses across the United States through receivables financing.</p>
        </div>

    {/* </div> */}
    </WhoRow1Wrap>
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

          .who-text {
              max-width: 550px;
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
          .section-who  .icon {
              color: blue;
          }

          .section-who .icon-change .icon:hover {
              color: blue;
          }

        //   .icon-change:hover {
        //       color: #e74c3c;
        //     //   border: 2px solid #e74c3c;
        //   }

        //   .svg-inline--fa fa-briefcase fa-w-16 fa-2x icon {
        //    width: 70px;
        //    height: 70px;
        // }
        `}
      </style>
    </>
  );
};

export default WhoWeAre