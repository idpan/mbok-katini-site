import React from "react";
import styled from "styled-components";
import BentoCard from "../component/BentoCard";
import PageTemplate from "../layout/PageTemplate";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../component/Button";
import TumpengCard from "../component/TumpengCard";
import CardMenuPaket from "../component/CardMenuPaket";
const dataInfo = require("../../data/dataInfo");
const Title = styled.h2`
  font-weight: 700;
  color: var(--text-main-color);
  font-size: 3.2rem;
  margin-top: 50px;
  text-align: center;
`;

// * {
//   border: 1px solid blue;
// }
export default function Tumpeng() {
  const thumbData = useStaticQuery(graphql`
    query bentoImageQuery {
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
  const thumbMenuTumpeng = thumbData.find(
    (el) =>
      el.node.childImageSharp.fluid.originalName == "tumpeng.jpg" ||
      el.node.childImageSharp.fluid.originalName == "tumpeng.jpeg"
  ).node.childImageSharp.gatsbyImageData;

  const thumbMenuTumpengMini = thumbData.find(
    (el) =>
      el.node.childImageSharp.fluid.originalName == "tumpeng-mini.jpg" ||
      el.node.childImageSharp.fluid.originalName == "tumpeng-mini.jpeg"
  ).node.childImageSharp.gatsbyImageData;

  return (
    <PageTemplate>
      <Title>Tumpeng</Title>

      <TumpengCard></TumpengCard>
    </PageTemplate>
  );
}
