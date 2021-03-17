import React from "react";
import { domesticAndForeign, domesticAndForeignState } from "./data";
import useRadio from "./useRadio";
import RadioButtons from "./RadioButtons";

const DomesticAndForeignRadios = () => {
  const { toggleCheck, radio, radiosList } = useRadio(
    domesticAndForeign,
    domesticAndForeignState
  );
  return (
    <RadioButtons
      toggleCheck={toggleCheck}
      radio={radio}
      radiosList={radiosList}
    />
  );
};

export default DomesticAndForeignRadios;
