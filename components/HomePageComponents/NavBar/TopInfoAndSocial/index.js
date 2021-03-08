import React from "react";
import styled from "styled-components";
import { Info } from "./styled";
import SocialIcons from "./SocialIcons";

const Container = styled.section`
  color: #fff;
  font-family: "Open Sans", sans-serif;
  font-size: 0.9rem;
  display: flex;
`;

const NavTopInfoAndSocial = () => {
  return (
    <Container>
      <Info>Contact me on +234 902 428 2995</Info>
      <SocialIcons />
    </Container>
  );
};

export default NavTopInfoAndSocial;
