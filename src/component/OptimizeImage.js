import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function OptimizeImage(props) {
  const thumbData = useStaticQuery(graphql`
    query OptimizeImageQuery {
      allFile(filter: { relativeDirectory: { eq: "thumb" } }) {
        edges {
          node {
            childImageSharp {
              fluid {
                originalName
              }
              gatsbyImageData(
                formats: WEBP
                placeholder: DOMINANT_COLOR
                layout: FULL_WIDTH
              )
            }
          }
        }
      }
    }
  `).allFile.edges;
  const thumbMenu = thumbData.find(
    (el) =>
      el.node.childImageSharp.fluid.originalName == props.imageName + ".jpg" ||
      el.node.childImageSharp.fluid.originalName == props.imageName + ".jpeg"
  );
  const thumbImage = thumbMenu?.node.childImageSharp.gatsbyImageData;
  return <GatsbyImage image={thumbImage}></GatsbyImage>;
}
