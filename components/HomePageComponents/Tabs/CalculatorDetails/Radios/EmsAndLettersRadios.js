import React from "react";
import GenerateRadios from "./GenerateRadios";
import { emsAndLetters, emsAndLetterState } from "./data";
import PropTypes from "prop-types";

const EmsAndLettersRadios = ({ toggleView }) => {
  return (
    <GenerateRadios
      list={emsAndLetters}
      stateObj={emsAndLetterState}
      toggleView={toggleView}
    />
  );
};

EmsAndLettersRadios.propTypes = {
  getRadioVal: PropTypes.func,
};

export default EmsAndLettersRadios;
