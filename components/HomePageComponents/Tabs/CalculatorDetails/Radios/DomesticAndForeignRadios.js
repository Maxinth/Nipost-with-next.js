import React from "react";
import { domesticAndForeign, domesticAndForeignState } from "./data";
import GenerateRadios from "./GenerateRadios";

const DomesticAndForeignRadios = () => {
  return (
    <GenerateRadios
      list={domesticAndForeign}
      stateObj={domesticAndForeignState}
    />
  );
};

export default DomesticAndForeignRadios;
