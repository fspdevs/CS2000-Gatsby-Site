import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
// Using staticquery hook to call for image files and exporting them as gatsby Images to be used in a separate component
export const ImageOne = () => {
  const image = Data();
  return <Img fluid={image.imageOne.childImageSharp.fluid} />;
};
export const ImageTwo = () => {
  const image = Data();
  return <Img fluid={image.imageTwo.childImageSharp.fluid} />;
};
export const ImageThree = () => {
  const image = Data();
  return <Img fluid={image.imageThree.childImageSharp.fluid} />;
};
export const PortalImage = () => {
  const image = Data();
  return <Img fluid={image.portalImage.childImageSharp.fluid} />;
};

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 900) {
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
