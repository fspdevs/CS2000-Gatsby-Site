import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
// Using staticquery hook to call for image files and exporting them as gatsby Images to be used in a separate component
export const ImageOne = () => {
  const image = Data();
  return <Img fluid={image.imageOne.childImageSharp.fluid} alt="Calculator and Writing"/>;
};
export const ImageTwo = () => {
  const image = Data();
  return <Img fluid={image.imageTwo.childImageSharp.fluid} alt="Graph Chart"/>;
};
export const ImageThree = () => {
  const image = Data();
  return <Img fluid={image.imageThree.childImageSharp.fluid} alt="Money Cash"/>;
};
export const PortalImage = () => {
  const image = Data();
  return <Img fluid={image.portalImage.childImageSharp.fluid} alt="Dashboard with Chart"/>;
};

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export const Data = () => {
  const images = useStaticQuery(
    graphql`
      query ImageQuery {
        imageOne: file(relativePath: { eq: "1.jpg" }) {
          ...fluidImage
        }
        imageTwo: file(relativePath: { eq: "2.jpg" }) {
          ...fluidImage
        }
        imageThree: file(relativePath: { eq: "3.png" }) {
          ...fluidImage
        }
        portalImage: file(relativePath: { eq: "smart.jpg" }) {
          ...fluidImage
        }
      }
    `
  );
  return images;
};
