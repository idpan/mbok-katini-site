import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CopySection from "../layout/CopySection";
import Hero from "../layout/Hero";
import "../style/about.css";
import PageTemplate from "../layout/PageTemplate";
import SectionMenu from "../layout/SectionMenu";
import mainLogo from "../assets/images/mbok-katini-logobatch.png";
import styled from "styled-components";
import topMobile from "../assets/images/ilustration/top-mobile.svg";
import bottomMobile from "../assets/images/ilustration/bottom-mobile.svg";
import { MENU_API } from "../constant";
import CardMenuAlacart from "../component/CardMenuAlacart";
import CardMenuPaket from "../component/CardMenuPaket";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import TumpengCard from "../component/TumpengCard";
import BentoCard from "../component/BentoCard";
const Wrapper = styled.div`
  .top {
    background-image: url(${topMobile});

    background-position: top left;
  }
  .bottom {
    background-image: url(${bottomMobile});
    background-position: bottom right;
  }
  .top,
  .bottom {
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  section {
    background: #faf2d8;
    }
  }
`;
const Title = styled.h2`
  text-align: center;
  font-weight: 700;
  color: var(--text-main-color);
  font-size: 3.2rem;
`;
export default function Index() {
  const [featuredMenuAlacart, setFeaturedMenuAlacart] = useState([]);
  const [nasiBoxMenu, setNasiBoxMenu] = useState([]);
  const [tumpengMenu, setTumpengMenu] = useState([]);
  useEffect(() => {
    fetch(MENU_API)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMenuAlacart(
          data.alacart.filter((el) => {
            return el.is_featured == true;
          })
        );
        setNasiBoxMenu(data.nasi_box);
        setTumpengMenu(data.tumpeng);
      });
  }, []);
  const thumbData = useStaticQuery(graphql`
    query indexquery {
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
  return (
    <PageTemplate>
      <Hero />
      <CopySection />
      {/* alacart menu */}
      <section className="my-contaier pt-5 pb-5">
        <SectionMenu
          title="Alacarte"
          description="deskripsi disinideskripsi disinideskripsi disini"
        >
          {featuredMenuAlacart.map((menu, id) => {
            const thumbMenu = thumbData.find(
              (el) =>
                el.node.childImageSharp.fluid.originalName ==
                  menu.image + ".jpg" ||
                el.node.childImageSharp.fluid.originalName ==
                  menu.image + ".jpeg"
            );
            const thumbImage = thumbMenu?.node.childImageSharp.gatsbyImageData;
            return (
              <CardMenuAlacart
                key={id}
                image={<GatsbyImage image={thumbImage} alt={menu.image} />}
                title={menu.name}
                bodyText={menu.description}
              />
            );
          })}
        </SectionMenu>
      </section>
      {/* nasi box */}
      <Wrapper>
        <div className="top"></div>
        <section className=" ilustration-container my-contaier pb-5">
          <Title>Bento</Title>
          <BentoCard className=" mb-0"></BentoCard>
        </section>
        <div className="bottom"></div>
      </Wrapper>
      {/* tumpeng */}
      <section className="my-contaier   pb-5">
        <Title>Tumpeng</Title>
        <TumpengCard></TumpengCard>
      </section>
      <section className="about-section">
        <div className="my-container black-layer ">
          <div className="about-container">
            <img className="about-logo" src={mainLogo} alt="main-logo" />
            <p className="about-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
