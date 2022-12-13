import React from "react";
import CardMenuPaket from "../component/CardMenuPaket";
import Button from "./Button";
import styled from "styled-components";
import { MenuWrapper } from "../layout/MenuComponents";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
const dataInfo = require("../../data/dataInfo");
const Wrapper = styled.div`
  margin: auto;
  padding: 30px 30px;
  margin-top: 20px;
  margin-bottom: 80px;
  width: fit-content;
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  ul {
    margin-bottom: 20px;
  }
  li {
    list-style: inside;
  }
  .image-wrapper {
    width: 100%;
    margin-bottom: 30px;
    @media (min-width: 600px) {
      width: 300px;
    }
  }
  .bento-card {
    @media (min-width: 600px) {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    margin: auto;
  }
  .price {
    color: var(--text-second-color);
    margin-top: 20px;
    text-align: left;
    font-size: 1.4rem;
    font-weight: 500;
    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
export default function BentoCard(props) {
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
    <>
      <Wrapper className={props.className}>
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
            <a href={dataInfo.whatsapp_link}>
              <Button>Pesan Sekarang</Button>
            </a>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
