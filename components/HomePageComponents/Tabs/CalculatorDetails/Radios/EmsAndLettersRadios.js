import React from "react";
import useRadio from "./useRadio";
import RadioButtons from "./RadioButtons";
import { emsAndLetters, emsAndLetterState } from "./data";

const EmsAndLettersRadios = () => {
  const { toggleCheck, radio, radiosList } = useRadio(
    emsAndLetters,
    emsAndLetterState
  );
  return (
    <RadioButtons
      toggleCheck={toggleCheck}
      radio={radio}
      radiosList={radiosList}
    />
  );
};

export default EmsAndLettersRadios;
