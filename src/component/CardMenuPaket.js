import React from "react";
import styled from "styled-components";
import Button from "./Button";
const dataInfo = require("../../data/dataInfo");
const Wrapper = styled.div`
  width: 26.5rem;
  height: fit-content;
  border: none;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (min-width: 768px) {
    max-width: 36rem;
  }
`;
const ImageWrapper = styled.div`
  height: 300px;

  overflow: hidden;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;

    object-fit: cover;
    display: block;
  }
`;
const Title = styled.h5`
  font-weight: 700;
  color: var(--text-second-color);
  font-size: 2.2rem;
  @media (min-width: 768px) {
    font-size: 2.6rem;
    margin-bottom: 15px;
  }
`;
const CardBody = styled.div`
  padding: 20px 20px 25px;
  @media (min-width: 768px) {
    padding: 30px 30px 40px;
  }
`;
const CardText = styled.div`
  li {
    list-style: inside;
    margin-bottom: 10px;
  }
  strong {
    font-size: 1.5rem;
  }
  margin-top: 20px;

  font-size: 1rem;
  color: var(--text-dark-color);
  @media (min-width: 768px) {
    font-size: 1.2rem;
  }
`;
const Price = styled.p`
  color: var(--text-second-color);
  margin-top: 20px;

  font-size: 1.4rem;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 30px;
  }
`;
export default function CardMenuPaket(props) {
  return (
    <Wrapper className={props.className}>
      <ImageWrapper>{props.image}</ImageWrapper>
      <CardBody>
        <Title className="card-title">{props.title} </Title>
        <CardText className="card-text">{props.bodyText}</CardText>
        <Price>Rp {props.price.toLocaleString("id-ID")}</Price>
        <a
          target="_blank"
          href={dataInfo.whatsapp_link(`aku mau pesan ${props.menuName} dong`)}
        >
          <Button>Pesan Sekarang</Button>
        </a>
      </CardBody>
    </Wrapper>
  );
}
