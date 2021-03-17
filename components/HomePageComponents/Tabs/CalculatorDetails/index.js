import React from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";

const CalculatorDetails = () => {
  return (
    <div>
      <EmsAndLettersRadios />
      <DomesticAndForeignRadios />
    </div>
  );
};

export default CalculatorDetails;
