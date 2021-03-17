import React, { useState } from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { DetailsBox } from "./styled";
import { emsAndLetterState } from "./Radios/data";

const CalculatorDetails = () => {
  const [radioVal, setRadioVal] = useState(emsAndLetterState);

  const getRadioVal = (val) => setRadioVal(val);

  return (
    <DetailsBox>
      <EmsAndLettersRadios getRadioVal={getRadioVal} />
      <DomesticAndForeignRadios getRadioVal={getRadioVal} radioVal={radioVal} />
    </DetailsBox>
  );
};

export default CalculatorDetails;
