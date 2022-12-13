import React from "react";
import styled from "styled-components";
import IconWithText from "./IconWithText";
import { InstagramIcon, GofoodIcon, WhatsappIcon } from "../utility/init";
const dataInfo = require("../../data/dataInfo");
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
  return (
    <Wrapper className={className + " " + "w-75 mx-auto  contact  text-center"}>
      <Divider className=" divide d-md-none " />
      <div className="personal-info gap-4  my-4 d-flex flex-column align-items-center ">
        <a
          className="my-nav-link"
          target="_blank"
          href={dataInfo.whatsapp_link("halo mau tanya - tanya dong")}
        >
          <IconWithText text={dataInfo.phoneNumber}>
            <WhatsappIcon />
          </IconWithText>
        </a>
        <a
          className="my-nav-link"
          target="_blank"
          href={dataInfo.location_link}
        >
          <p>{dataInfo.location}</p>
        </a>
      </div>
      <Divider className=" divide " />
      <div className="sosmed my-4 hstack justify-content-center gap-4">
        <a
          className="my-nav-link"
          target="_blank"
          href={dataInfo.instagram_link}
        >
          <InstagramIcon />
        </a>
      </div>
      <Label className=" label ">tersedia juga di :</Label>
      <div className="partner hstack justify-content-center gap-3">
        <a className="my-nav-link" target="_blank" href={dataInfo.gofood_link}>
          <GofoodIcon />
        </a>
      </div>
    </Wrapper>
  );
}
