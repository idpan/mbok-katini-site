import React from "react";
import styled from "styled-components";
const Wrapper = styled.div``;
const Icon = styled.img`
  width: 36px;
  height: 36px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
const Title = styled.p`
  color: var(--main-color);
  font-weight: 700;
  line-height: 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;
const BodyText = styled.p`
  color: var(--text-light-color);
  font-size: 1rem;
  width: 15rem;
  @media (min-width: 768px) {
    font-size: 1.2rem;
    width: 25rem;
  }
`;
export default function IconWithTitleAndCaption({
  image,
  title = "title here..",
  bodyText = "body text here..",
}) {
  return (
    <Wrapper className="text-center vstack align-items-center">
      <Icon className="icon mb-4 mb-md-5 " src={image} alt="image" />
      <Title className="title mb-4 mb-md-4">{title}</Title>
    </Wrapper>
  );
}
