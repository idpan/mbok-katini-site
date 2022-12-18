import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CopySection from "../layout/CopySection";
import Hero from "../layout/Hero";
import "../style/about.css";
import PageTemplate from "../layout/PageTemplate";
import mainLogo from "../assets/images/mbok-katini-logobatch.png";
import styled from "styled-components";
import topMobile from "../assets/images/ilustration/top-mobile.svg";
import bottomMobile from "../assets/images/ilustration/bottom-mobile.svg";
import { MENU_API } from "../constant";
import CardMenuAlacart from "../component/CardMenuAlacart";
import TumpengCard from "../component/TumpengCard";
import BentoCard from "../component/BentoCard";
import OptimizeImage from "../component/OptimizeImage";
import TitleSection from "../component/TitleSection";
import CarouselCard from "../component/CarouselCard";
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
`;

export default function Index() {
  const [featuredMenuAlacart, setFeaturedMenuAlacart] = useState([]);
  useEffect(() => {
    fetch(MENU_API)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedMenuAlacart(
          data.alacart.filter((el) => {
            return el.is_featured == true;
          })
        );
      });
  }, []);
  return (
    <PageTemplate>
      <Hero />
      <CopySection />
      {/* alacart menu section */}
      <section className="my-contaier pt-5 pb-5">
        <TitleSection className="mb-5">Alacart</TitleSection>
        <CarouselCard>
          {featuredMenuAlacart.map((menu, id) => {
            return (
              <CardMenuAlacart
                key={id}
                image={<OptimizeImage imageName={menu.image}></OptimizeImage>}
                title={menu.name}
                bodyText={menu.description}
              />
            );
          })}
        </CarouselCard>
      </section>
      {/* bento section*/}
      <Wrapper>
        <div className="top"></div>
        <section className=" ilustration-container my-contaier pb-5">
          <TitleSection>Bento</TitleSection>
          <BentoCard className=" mb-0"></BentoCard>
        </section>
        <div className="bottom"></div>
      </Wrapper>
      {/* tumpeng section */}
      <section className="my-contaier   pb-5">
        <TitleSection>Tumpeng</TitleSection>
        <TumpengCard></TumpengCard>
      </section>
      {/* about section */}
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
