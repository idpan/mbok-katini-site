import React from "react";

import styled from "styled-components";
import BentoCard from "../component/BentoCard";
import PageTemplate from "../layout/PageTemplate";

import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "../component/Button";
const Title = styled.h2`
  font-weight: 700;
  color: var(--text-main-color);
  font-size: 3.2rem;
  margin-top: 50px;
  text-align: center;
  //
`;
// const Wrapper = styled.div`
//   margin: auto;
//   padding: 50px 30px 30px;
//   margin-bottom: 50px;
//   margin-top: 20px;
//   width: fit-content;
//   border: none;
//   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
//   ul {
//     margin-bottom: 20px;
//   }
//   li {
//     list-style: inside;
//   }
//   .image-wrapper {
//     width: 100%;
//     margin-bottom: 30px;
//     @media (min-width: 600px) {
//       width: 300px;
//     }
//   }
//   .bento-card {
//     @media (min-width: 600px) {
//       display: flex;
//       justify-content: center;
//       gap: 20px;
//     }
//     margin: auto;
//   }
//   .price {
//     color: var(--text-second-color);
//     margin-top: 20px;
//     text-align: left;
//     font-size: 1.4rem;
//     font-weight: 500;
//     @media (min-width: 768px) {
//       font-size: 1.8rem;
//     }
//   }
// `;
// margin-bottom: 30px;
export default function Bento() {
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
  const thumbMenu = thumbData.find(
    (el) =>
      el.node.childImageSharp.fluid.originalName == "bento.jpg" ||
      el.node.childImageSharp.fluid.originalName == "bento.jpeg"
  );
  const thumbImage = thumbMenu?.node.childImageSharp.gatsbyImageData;
  return (
    <PageTemplate>
      <Title>Bento</Title>
      {/* <Wrapper>
        <div className="bento-card">
          <div>
            <div className="image-wrapper">
              <GatsbyImage image={thumbImage}></GatsbyImage>
            </div>
          </div>
          <div>
            <ul>
              <li>Nasi putih / kuning</li>
              <li>Mie goreng</li>
              <li>Telur dadar</li>
              <li>Ayam bakar / goreng</li>
              <li>Sambal merah / hijau</li>
              <li>Kerupuk</li>
            </ul>
            <p className="price">25.000</p>
            <a href="">
              <Button>Pesan Sekarang</Button>
            </a>
          </div>
        </div>
      </Wrapper> */}
      <BentoCard></BentoCard>
    </PageTemplate>
  );
}
