import React from "react";
import GenerateRadios from "./GenerateRadios";
import { emsAndLetters, emsAndLetterState } from "./data";

const EmsAndLettersRadios = () => {
  return <GenerateRadios list={emsAndLetters} stateObj={emsAndLetterState} />;
};

export default EmsAndLettersRadios;
