import React from "react";
import styled from "styled-components";
import BentoCard from "../component/BentoCard";
import PageTemplate from "../layout/PageTemplate";
import TitleSection from "../component/TitleSection";
const Wrapper = styled.div`
  padding-top: 80px;
`;
export default function Bento() {
  return (
    <PageTemplate>
      <Wrapper>
        <TitleSection>Bento</TitleSection>
        <BentoCard />
      </Wrapper>
    </PageTemplate>
  );
}
