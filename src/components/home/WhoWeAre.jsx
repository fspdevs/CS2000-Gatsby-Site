import React, { useState, useEffect } from "react"
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faTrophy } from '@fortawesome/free-solid-svg-icons'
import Fade from "react-reveal/Fade"

const WhoRow1Wrap = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: row;
  align-content: center;
//   width: 75%;
  height: 300px;
//   width: 150px;
@media (max-width: 900px) {
  // width: 100% !important;
height: 150px;
}
@media (max-width: 490px) {
  // width: 100% !important;
height: 150px;
// width: 75% !important;
margin-right: auto;
}
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
    
    

    const hoverWho = () => {
        console.log("in here")

    setState({
        ...state,
        hoverWho: true,
      })
        //  styleRedIcon = {'border': '2px solid pink', 'color': 'purple'}
         console.log(state)
    }

    const unHoverWho = () => {
        // styleRedIcon = {border: "2px solid black", color: "black"}
        console.log("unhover")
        setState({
          ...state,
          hoverWho: false,
        })
    }


    // useEffect(() => {
    //     if (state.hoverWho === true) {
    //       // if true run handle show function to open modal
    //       styleRedIcon = {'border': '2px solid pink', 'color': 'purple'}
    //       // set state modal toggle back to false
    //      console.log(styleRedIcon)
    //     }
    //   })


  return (
    <>
      < div className="wrapper">
      <Fade left>
    <WhoRow1Wrap onMouseEnter={hoverWho}  onMouseLeave={unHoverWho} className="section-who"
  >
       
   {/* <div className="icon-div briefcase"> */}
   
        <FontAwesomeIcon icon={faBriefcase} size="2x" className="icon  icon-change icon-spin" style={state.hoverWho ? {color: '#e74c3c', border: '2px solid #e74c3c'}:  {color: 'black', border: '2px solid black'}}/>
  
        {/* <i class="fas fa-trophy"></i> */}
        <div className="who-text">
            <h2  className="icon-change" style={state.hoverWho ? {color: '#e74c3c'}:  {color: 'black'}}
            >Who We Are</h2>
            <p className="home-p">Capital Source 2000 Inc. is a Philadelphia based, privately owned company which provides working capital to small businesses across the United States through receivables financing.</p>
        </div>
      

    {/* </div> */}
    </WhoRow1Wrap>
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
          .section-who  .icon {
              color: blue;
          }

          .section-who .icon-change .icon:hover {
              color: blue;
          }

         .icon-spin {
            border-radius: 50%;
            -webkit-transition: -webkit-transform .8s ease-in-out;
                    transition:         transform .8s ease-in-out;
          }
          .icon-spin:hover {
            -webkit-transform: rotate(360deg);
                    transform: rotate(360deg);
          }

        //   .icon-change:hover {
        //       color: #e74c3c;
        //     //   border: 2px solid #e74c3c;
        //   }

        //   .svg-inline--fa fa-briefcase fa-w-16 fa-2x icon {
        //    width: 70px;
        //    height: 70px;
        // }
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

export default WhoWeAre