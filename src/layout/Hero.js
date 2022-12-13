import React from "react";
import styled from "styled-components";
import ShapeHeroBottom from "../component/ShapeHeroBottom";
import imageHero from "../assets/images/hero_image.png";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import OptimizeImage from "../component/OptimizeImage";
const Wrapper = styled.div`
background:var(--text-second-color) ;
padding-top:80px;
position: relative;
z-index:-50;
background-image:linear-gradient(to right, black   ,transparent );
height:500px;
.header-text{
  padding-left:20px;
  h1{
    color: var(--main-color);
    font-weight:800;
    font-size:2rem;
    width:20rem;
    font-family:"Nunito";
  }
  p{
    color: var(--text-light-color);
    width:23rem;
    font-size:1.1rem;
  }
}
.gatsby-image-wrapper{

  position:absolute;
  z-index:-20;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  img{
    object-fit:cover;
    height: 100%;
    
  }
  picture{
    
    height: 100%;
    
  }
}
@media screen and (min-width:768px){
  
  background-size:contain;
  background-position-x:right ;
  height: 600px;
  
  .gatsby-image-wrapper{
    
    -webkit-mask-image: linear-gradient(to left,black,black, transparent);
    mask-image: linear-gradient(to left,black,black, transparent);
    left: 40%;}  
  .header-text{
    h1{
      font-size:4.8rem;
      width:48rem;
    }
    p{
      font-size:2rem;
      width:48rem;
    }
  }
  @media screen and (min-width:1200px){
    .header-text{
      padding-top:50px; 
      padding-left:300px;
    }
  }`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -10;
  background-image: linear-gradient(
    to bottom,
    black 10%,
    transparent,
    transparent
  );
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
// background: red;
export default function Hero() {
  const data = useStaticQuery(graphql`
    query hero {
      file(relativePath: { eq: "hero_image.png" }) {
        childrenImageSharp {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  `);
  const image = data.file.childrenImageSharp[0].gatsbyImageData;
  return (
    <Wrapper className="hero">
      <div className="header-text">
        <h1>Warung Makan Mbok Katini</h1>
        <p>Menjual makanan enak dengan harga merakyat</p>
      </div>
      <Layer />
      <GatsbyImage image={image} alt="hero_image" />
      {/* <img src={imageHero} alt="imagehero" /> */}
      <ShapeHeroBottom />
    </Wrapper>
  );
}
