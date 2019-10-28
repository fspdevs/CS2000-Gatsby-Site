import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const LandingBGImage = ({ children, className }) => (
  // image query 
    <StaticQuery
      query={graphql`
        query {
          desktop: file(relativePath: { eq: "bgAbout.jpg" }) {
            childImageSharp {
              fluid(quality: 90, maxWidth: 1920) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `}

      render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
          <BackgroundImage
            Tag="section"
            className={className}
            alt=""
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
        {children}
           
          </BackgroundImage>
        )
      }}
    />
  )

  const StyledBackgroundSection = styled(LandingBGImage)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat;
  background-size: cover;
  filter: blur(1.1px);
  position: absolute !important;
  height: 100%;
  z-index: -100;    
`
const H2 = styled.h2`
  border-bottom: 1px ${props => props.theme.colors.parBlue.light} solid;
  padding-bottom: 10px;
`;
export default  StyledBackgroundSection

