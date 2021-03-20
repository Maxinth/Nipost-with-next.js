import React from "react";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { Box } from "./styled";
import ServiceSelectBoxForDomesticRadio from "./SelectBoxes/ServiceSelectBoxForDomesticRadio";
import DestinationSelectBoxForForeignRadio from "./SelectBoxes/DestinationSelectBoxForForeignRadio";

const LettersRadioClickedView = ({ toggleView, radiosView, radioClicked }) => {
  return (
    <Box>
      <DomesticAndForeignRadios
        toggleView={toggleView}
        radiosView={radiosView}
      />
      {radioClicked === "domestic" && <ServiceSelectBoxForDomesticRadio />}
      {radioClicked === "foreign" && <DestinationSelectBoxForForeignRadio />}
    </Box>
  );
};

export default LettersRadioClickedView;
