import React from "react";
import GenerateRadios from "./GenerateRadios";
import { emsAndLetters, emsAndLetterState } from "./data";
import PropTypes from "prop-types";

const EmsAndLettersRadios = ({ getRadioVal }) => {
  return (
    <GenerateRadios
      list={emsAndLetters}
      stateObj={emsAndLetterState}
      getRadioVal={getRadioVal}
    />
  );
};

EmsAndLettersRadios.propTypes = {
  getRadioVal: PropTypes.func,
};

export default EmsAndLettersRadios;
