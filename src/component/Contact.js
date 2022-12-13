import React from "react";
import styled from "styled-components";
import IconWithText from "./IconWithText";
import {
  InstagramIcon,
  TiktokIcon,
  GrabfoodIcon,
  GofoodIcon,
  WhatsappIcon,
  EmailIcon,
  LocationIcon,
} from "../utility/init";
import { graphql, useStaticQuery } from "gatsby";
const Wrapper = styled.div`
  font-size: 1.2rem;
  padding: 0 20px 0;
  min-width: 200px;
  .sosmed svg {
    width: 16px;
  }
`;
const Label = styled.p`
  font-size: 1rem;
  color: #b0b0b0;
`;
const Divider = styled.hr`
  background: #646464;
  height: 2px;
`;
export default function Contact({ className }) {
  const contactData = useStaticQuery(graphql`
    query contactQuery {
      allSite {
        edges {
          node {
            siteMetadata {
              gofood_link
              grabfood_link
              instagram_link
              location
              noHp
            }
          }
        }
      }
    }
  `).allSite.edges[0].node.siteMetadata;
  console.log(contactData);
  return (
    <Wrapper className={className + " " + "w-75 mx-auto  contact  text-center"}>
      <Divider className=" divide d-md-none " />
      <div className="personal-info gap-4  my-4 d-flex flex-column align-items-center ">
        <a
          className="my-nav-link"
          target="_blank"
          href={`https://api.whatsapp.com/send/?phone=${
            "62" + contactData.noHp.substring(1)
          }`}
        >
          <IconWithText text={contactData.noHp}>
            <WhatsappIcon />
          </IconWithText>
        </a>
        {/* <a className="my-nav-link" to="#">
          <IconWithText text="email@email.com">
            <EmailIcon />
          </IconWithText>
        </a> */}
        <a
          className="my-nav-link"
          target="_blank"
          href="https://goo.gl/maps/c2dEdg88XBfC5igC8"
        >
          <p>{contactData.location}</p>
        </a>
      </div>
      <Divider className=" divide " />
      <div className="sosmed my-4 hstack justify-content-center gap-4">
        <a
          className="my-nav-link"
          target="_blank"
          href={contactData.instagram_link}
        >
          <InstagramIcon />
        </a>
        {/* <a className="my-nav-link" terget="_blank" href="#">
          <TiktokIcon />
        </a> */}
      </div>
      <Label className=" label ">tersedia juga di :</Label>
      <div className="partner hstack justify-content-center gap-3">
        {/* <a
          className="my-nav-link"
          target="_blank"
          href={contactData.grabfood_link}
        >
          <GrabfoodIcon />
        </a> */}
        <a
          className="my-nav-link"
          target="_blank"
          href={contactData.gofood_link}
        >
          <GofoodIcon />
        </a>
      </div>
    </Wrapper>
  );
}
