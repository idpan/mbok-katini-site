import { Link } from "gatsby";
import React from "react";

import styled from "styled-components";
import ButtonOutline from "../component/ButtonOutline";
import CardMenuAlacart from "../component/CardMenuAlacart";
import CarouselCard from "../component/CarouselCard";

const Wrapper = styled.div`
  text-align: center;
  padding: 20px 0;
`;
const Title = styled.h2`
  font-weight: 700;
  color: var(--text-main-color);
  font-size: 3.2rem;
`;
const Description = styled.p`
  color: var(--text-dark-color);
  font-size: 1.4rem;
  margin-bottom: 30px;
`;

export default function SectionMenu({
  title,
  description,
  ctaButtonText = "Semua Menu",
  children,
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <CarouselCard
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          481: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
        }}
      >
        {children}
      </CarouselCard>
      <Link className="mt-4 mt-md-5" to="/menu">
        <ButtonOutline>{ctaButtonText}</ButtonOutline>
      </Link>
    </Wrapper>
  );
}
