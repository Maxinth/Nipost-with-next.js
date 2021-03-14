import React from "react";
import { DropDownContainer } from "./styled";
import OnlineTools from "../OnlineTools";
import Navigation from "../Navigation";

const DropDownBox = () => {
  return (
    <DropDownContainer>
      <OnlineTools />
      <Navigation />
    </DropDownContainer>
  );
};

export default DropDownBox;
