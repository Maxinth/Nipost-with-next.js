import React from "react";
import { data } from "./data";

import styled from "styled-components";

const IconsContainer = styled.div`
  background-color: #fff;
  display: none;
  padding: 0.5rem 7rem;
  width: 50%;
  @media (min-width: 531px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const IconContainer = styled.span`
  background-color: rgb(21, 129, 157);
  border-radius: 100px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.2rem;
  > svg {
    /* padding: 1rem; */
    color: #fff;
    font-size: 1.5rem;
    /* width: 100%; */
  }
`;

const SocialIcons = () => {
  return (
    <IconsContainer>
      {data.map((item, index) => (
        <IconContainer key={index}>{item}</IconContainer>
      ))}
    </IconsContainer>
  );
};

export default SocialIcons;
