import React, { useState } from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { DetailsBox } from "./styled";

const CalculatorDetails = () => {
  const [radioVal, setRadioVal] = useState({});

  const getRadioVal = (val) => setRadioVal(val);
  console.log("radio = ", radioVal);

  return (
    <DetailsBox>
      <EmsAndLettersRadios getRadioVal={getRadioVal} />
      <DomesticAndForeignRadios getRadioVal={getRadioVal} />
    </DetailsBox>
  );
};

export default CalculatorDetails;
