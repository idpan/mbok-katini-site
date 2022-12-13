import React from "react";
import Button from "./Button";
import styled from "styled-components";
import OptimizeImage from "./OptimizeImage";
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
  return (
    <>
      <Wrapper className={props.className}>
        <div className="bento-card">
          <div>
            <div className="image-wrapper">
              <OptimizeImage imageName="bento"></OptimizeImage>
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
