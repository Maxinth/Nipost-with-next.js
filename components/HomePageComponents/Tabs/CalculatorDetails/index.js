import React from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { DetailsBox } from "./styled";

const CalculatorDetails = () => {
  return (
    <DetailsBox>
      <EmsAndLettersRadios />
      <DomesticAndForeignRadios />
    </DetailsBox>
  );
};

export default CalculatorDetails;
