import React from "react";
import styled from "styled-components";
import { Info } from "./styled";
import SocialIcons from "./SocialIcons";
const Container = styled.section`
  background-color: rgb(105, 105, 105);
  color: #fff;
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
