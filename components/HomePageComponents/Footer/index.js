import React from "react";
import { FooterStyled } from "./styled";
import FooterMain from "./FooterMain";
import Signature from "./Signature";

const Footer = () => {
  return (
    <FooterStyled>
      <FooterMain />
      <Signature />
    </FooterStyled>
  );
};

export default Footer;
