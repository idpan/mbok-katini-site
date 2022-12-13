import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 0;
  overflow: hidden;
  svg {
    position: relative;
    display: block;
    width: calc(143% + 1.3px);
    height: 90px;
  }
  .shape-fill {
    fill: #121212;
  }

  @media (max-width: 767px) {
    svg {
      width: calc(101% + 1.3px);
      height: 59px;
    }
  }
`;
export default function ShapeHeroBottom() {
  return (
    <Wrapper className="custom-shape-divider-bottom-1664683391">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
          className="shape-fill"
        ></path>
      </svg>
    </Wrapper>
  );
}
