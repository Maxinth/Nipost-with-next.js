import React from "react";
import { LinksContainer, ArmsImage } from "./styled";
import GenerateNavLinks from "./GenerateNavLinks";
import SearchAndClose from "./SearchAndClose";

const NavigationLinks = () => {
  return (
    <LinksContainer>
      <GenerateNavLinks />
      <SearchAndClose />
      <ArmsImage src="/coatofarms.png" alt="Coat of Arms" />
    </LinksContainer>
  );
};

export default NavigationLinks;
