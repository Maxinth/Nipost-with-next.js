import React from "react";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";

const LettersRadioClickedView = ({ toggleView, radiosView }) => {
  return (
    <>
      <DomesticAndForeignRadios
        toggleView={toggleView}
        radiosView={radiosView}
      />
    </>
  );
};

export default LettersRadioClickedView;
