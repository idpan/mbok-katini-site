import React from "react";
import styled from "styled-components";
import timeIcon from "../assets/icon/time.svg";
import foodMenuIcon from "../assets/icon/food-menu.svg";
import calenderIcon from "../assets/icon/calender.svg";
import IconWithTitleAndCaption from "../component/IconWithTitleAndCaption";
import bottomCopySection from "../assets/images/ilustration/bottom-copySection.svg";
const Wrapper = styled.section`
  margin-top: -2px;
  .my-container {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .bottom {
    margin-top: -2px;
    background-image: url(${bottomCopySection});
    background-position: bottom left;
    height: 150px;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
export default function copySection() {
  return (
    <Wrapper className=" position-relative ">
      <div className=" dark-bg  my-container d-flex flex-column gap-5 flex-md-row justify-content-end ">
        <IconWithTitleAndCaption
          image={timeIcon}
          title="Bebas Pilih Waktu"
        ></IconWithTitleAndCaption>
        <IconWithTitleAndCaption
          image={foodMenuIcon}
          title="Bebas Pilih Menu"
        ></IconWithTitleAndCaption>
        <IconWithTitleAndCaption
          image={calenderIcon}
          title="Tanpa Berlangganan"
        ></IconWithTitleAndCaption>
      </div>
      <div className="bottom"></div>
    </Wrapper>
  );
}
