import React from "react";
import styled from "styled-components";
import PageTemplate from "../layout/PageTemplate";
import TitleSection from "../component/TitleSection";
import TumpengCard from "../component/TumpengCard";
const Wrapper = styled.div`
  padding-top: 80px;
`;
export default function Tumpeng() {
  return (
    <PageTemplate>
      <Wrapper>
        <TitleSection>Tumpeng</TitleSection>
        <TumpengCard />
      </Wrapper>
    </PageTemplate>
  );
}
