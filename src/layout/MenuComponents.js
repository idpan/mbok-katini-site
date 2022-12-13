import React from "react";
import styled from "styled-components";
export const NavFilter = styled.div`
  width: 100%;
  max-width: 53rem;
  overflow: scroll;

  margin: auto;
  padding: 30px 20px 0;
  display: flex;
  gap: 20px;
  input:checked + span {
    color: var(--text-main-color);
  }
  input {
    display: none;
  }
  label {
    white-space: nowrap;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    overflow: visible;
    justify-content: center;
    label {
      font-size: 1.8rem;
    }
  }
`;
export const MenuWrapper = styled.div`
  padding-top: 50px;
  padding-bottom: 100px;
  overflow: hidden;
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  justify-items: center;
  grid-row-gap: 60px;
  grid-column-gap: 20px;
`;
export const NavFilterTag = (props) => {
  <label htmlFor={props.label + "-radio"}>
    <input
      data-category={props.label}
      name="category"
      id={props.label + "-radio"}
      type="radio"
    />
    <span className="">children</span>
  </label>;
};
