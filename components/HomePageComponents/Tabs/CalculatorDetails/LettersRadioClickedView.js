import React, { useState } from "react";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { Box } from "./styled";
import ServiceSelectBoxForDomesticRadio from "./SelectBoxes/ServiceSelectBoxForDomesticRadio";
import DestinationSelectBoxForForeignRadio from "./SelectBoxes/DestinationSelectBoxForForeignRadio";

const LettersRadioClickedView = ({ toggleView, radiosView }) => {
  // state to determine which the select box in view based on the radio click
  const [currentRadio, setCurrentRadio] = useState("domestic");

  const handleToggle = (id) => {
    toggleView(id);
    setCurrentRadio(id);
  };

  return (
    <Box>
      <DomesticAndForeignRadios
        toggleView={handleToggle}
        radiosView={radiosView}
      />
      {currentRadio === "domestic" && <ServiceSelectBoxForDomesticRadio />}
      {currentRadio === "foreign" && <DestinationSelectBoxForForeignRadio />}
    </Box>
  );
};

export default LettersRadioClickedView;
