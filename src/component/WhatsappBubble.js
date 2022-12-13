import React from "react";
import styled from "styled-components";
import whatsapp_bubble from "../assets/icon/whatsapp-bubble.png";
import dataInfo from "../../data/dataInfo.js";
import { useStaticQuery, graphql } from "gatsby";
const WhatsappHotline = styled.a`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 100;
`;
console.log(dataInfo);
export default function WhatsappBubble() {
  const contactData = useStaticQuery(graphql`
    query whatsappQuery {
      allSite {
        edges {
          node {
            siteMetadata {
              noHp
            }
          }
        }
      }
    }
  `).allSite.edges[0].node.siteMetadata;
  return (
    <WhatsappHotline
      href={`https://api.whatsapp.com/send/?phone=${
        "62" + contactData.noHp.substring(1)
      }`}
      target="_blank"
    >
      <img src={whatsapp_bubble} alt="whatsapp_hotline" />
    </WhatsappHotline>
  );
}
