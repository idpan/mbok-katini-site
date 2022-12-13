import React from "react";
import CardMenuPaket from "./CardMenuPaket";
import Button from "./Button";
import styled from "styled-components";
import OptimizeImage from "./OptimizeImage";
const dataInfo = require("../../data/dataInfo");

const Wrapper = styled.div`
  padding: 50px 30px 100px;
  ul {
    margin-bottom: 20px;
  }
  li {
    list-style: inside;
  }
  .image-wrapper {
    width: 200px;
    height: 250px;
    overflow: hidden;
    margin-bottom: 20px;
    .gatsby-image-wrapper {
      width: 100%;
      height: 100%;

      object-fit: cover;
      display: block;
    }
  }

  .tumpeng-desktop-card {
    display: none;
    margin-bottom: 50px;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      display: grid;
      gap: 20px;
    }
    .tumpeng-card {
      max-width: 600px;
      padding: 20px;
      display: flex;
      gap: 20px;
      height: fit-content;
      border: none;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    }
  }
  .tumpeng-mobile-card {
    display: flex;
    gap: 30px;
    row-gap: 50px;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .title {
    text-align: left;
    font-weight: 700;
    color: var(--text-second-color);
    font-size: 2.2rem;
    @media (min-width: 768px) {
      font-size: 2.6rem;
      margin-bottom: 15px;
    }
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
export default function TumpengCard() {
  return (
    <Wrapper>
      <div className="tumpeng-mobile-card">
        <CardMenuPaket
          image={<OptimizeImage imageName="tumpeng"></OptimizeImage>}
          title={"Tumpeng"}
          bodyText={
            <ul>
              <li>Ayam 10 potong</li>
              <li>Telor 8</li>
              <li>Mie goreng</li>
              <li>Orek tempe</li>
              <li>Sambal merah</li>
              <li>Urap</li>
            </ul>
          }
          price={250000}
          menuName="tumpeng"
        />
        <CardMenuPaket
          image={<OptimizeImage imageName="tumpeng-mini"></OptimizeImage>}
          title={"Tumpeng Mini Cone / Rose"}
          bodyText={
            <>
              <div>
                <p>
                  <strong> 1-10 box</strong> ~ <strong> 30.000</strong>
                </p>
                <p>
                  <strong> 11-20 box</strong> ~ <strong> 28.500</strong>
                </p>
                <p>
                  <strong> 21-30 box</strong> ~ <strong> 27.000</strong>
                </p>
                <p>
                  <strong> 50 box</strong> ~ <strong>25.000</strong>
                </p>
              </div>
              <br />
              <ul>
                <li>Nasi kuning</li>
                <li>Ayam bakar/goreng</li>
                <li>Telur dadar</li>
                <li>Tempe orek</li>
                <li>Kentang balado</li>
                <li>Timun & salada</li>
                <li>Sambal merah / ijo</li>
              </ul>
            </>
          }
          price={25000}
          menuName="tumpeng mini cone / rose"
        />
      </div>
      <div className="tumpeng-desktop-card">
        <div className="tumpeng-card">
          <div>
            <div className="image-wrapper">
              <OptimizeImage imageName="tumpeng"></OptimizeImage>
            </div>
            <p className="price">Rp 250.000</p>
            <a href={dataInfo.whatsapp_link("aku mau pesan tumpeng")}>
              <Button>Pesan Sekarang</Button>
            </a>
          </div>
          <div>
            <h3 className="title">Tumpeng</h3>
            <ul>
              <li>Ayam 10 potong</li>
              <li>Telor 8</li>
              <li>Mie goreng</li>
              <li>Orek tempe</li>
              <li>Sambal merah</li>
              <li>Urap</li>
            </ul>
          </div>
        </div>
        <div className="tumpeng-card">
          <div>
            <div className="image-wrapper ">
              <OptimizeImage imageName="tumpeng-mini"></OptimizeImage>
            </div>
            <p className="price">Rp 25.000</p>
            <a
              href={dataInfo.whatsapp_link(
                "aku mau pesan tumpeng mini cone / rose"
              )}
            >
              <Button>Pesan Sekarang</Button>
            </a>
          </div>

          <div className="tumpeng-info">
            <h3 className="title">Tumpeng Mini Cone / Rose </h3>
            <div>
              <div>
                <p>
                  <strong> 1-10 box</strong> ~ <strong> 30.000</strong>
                </p>
                <p>
                  <strong> 11-20 box</strong> ~ <strong> 28.500</strong>
                </p>
                <p>
                  <strong> 21-30 box</strong> ~ <strong> 27.000</strong>
                </p>
                <p>
                  <strong> 50 box</strong> ~ <strong>25.000</strong>
                </p>
              </div>
              <br />
              <ul>
                <li>Nasi kuning</li>
                <li>Ayam bakar/goreng</li>
                <li>Telur dadar</li>
                <li>Tempe orek</li>
                <li>Kentang balado</li>
                <li>Timun & salada</li>
                <li>Sambal merah / ijo</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
