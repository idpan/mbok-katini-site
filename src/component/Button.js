import React from "react";
import styled from "styled-components";
const Wrapper = styled.button`
  background-image: linear-gradient(to top, #cf820e, #f2ac43);
  font-size: 1.2rem;
  padding: 1rem 1.7rem;
  color: #fcfcfc;
  border-radius: 4px;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 4rem;
  }
`;
export default function Button(props) {
  return <Wrapper className={props.className}>{props.children}</Wrapper>;
}
