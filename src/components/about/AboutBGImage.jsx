import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const AboutBGImage = ({ children, className }) => (
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
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
        {children}
           
          </BackgroundImage>
        )
      }}
    />
  )

  const StyledBackgroundSection = styled(AboutBGImage)`
  width: 100vw;
  background-position: bottom center;
  background-repeat: no-repeat;
  // background-size: cover;
  filter: brightness(93%);
  position: absolute !important;
  height: 1020px;
  z-index: -100;
  margin-top: -100px;
     
`

export default  StyledBackgroundSection

