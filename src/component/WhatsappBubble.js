import React from "react";
import styled from "styled-components";
import whatsapp_bubble from "../assets/icon/whatsapp-bubble.png";
const dataInfo = require("../../data/dataInfo");
const WhatsappHotline = styled.a`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 100;
`;
export default function WhatsappBubble() {
  return (
    <WhatsappHotline
      href={dataInfo.whatsapp_link("halo mau tanya - tanya dong")}
      target="_blank"
    >
      <img src={whatsapp_bubble} alt="whatsapp_hotline" />
    </WhatsappHotline>
  );
}
