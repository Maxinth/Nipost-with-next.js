import React from "react";
import { domesticAndForeign, domesticAndForeignState } from "./data";
import GenerateRadios from "./GenerateRadios";
import PropTypes from "prop-types";

const DomesticAndForeignRadios = ({ getRadioVal }) => {
  return (
    <GenerateRadios
      list={domesticAndForeign}
      stateObj={domesticAndForeignState}
      getRadioVal={getRadioVal}
    />
  );
};

DomesticAndForeignRadios.propTypes = {
  getRadioVal: PropTypes.func,
};

export default DomesticAndForeignRadios;
