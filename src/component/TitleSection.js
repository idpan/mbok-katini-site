import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-weight: 700;
  color: var(--text-main-color);
  font-size: 3.2rem;
  text-align: center;
  //
`;

export default function TitleSection(props) {
  return <Title className={props.className}>{props.children}</Title>;
}
