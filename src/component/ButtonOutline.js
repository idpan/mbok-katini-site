import React from "react";
import styled from "styled-components";
const Wrapper = styled.button`
  background-color: transparent;
  font-size: 1.2rem;
  padding: 1rem 1.7rem;
  color: #eb7d23;
  border-radius: 4px;
  border: 3px solid #eb7d23 !important;
  font-weight: 700;
  &:hover {
    background: #eb7d23;
    color: #fcfcfc;
  }
  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding: 1.4rem 4rem;
  }
`;
export default function ButtonOutline(props) {
  return <Wrapper style={{}}>{props.children}</Wrapper>;
}
