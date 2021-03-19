import React from "react";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { Box } from "./styled";
import ServiceSelectBoxForDomesticRadio from "./SelectBoxes/ServiceSelectBoxForDomesticRadio";

const LettersRadioClickedView = ({ toggleView, radiosView }) => {
  return (
    <Box>
      <DomesticAndForeignRadios
        toggleView={toggleView}
        radiosView={radiosView}
      />
      <ServiceSelectBoxForDomesticRadio />
    </Box>
  );
};

export default LettersRadioClickedView;
