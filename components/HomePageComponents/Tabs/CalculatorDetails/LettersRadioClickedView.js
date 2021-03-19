import React from "react";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { Box } from "./styled";

const LettersRadioClickedView = ({ toggleView, radiosView }) => {
  return (
    <Box>
      <DomesticAndForeignRadios
        toggleView={toggleView}
        radiosView={radiosView}
      />
    </Box>
  );
};

export default LettersRadioClickedView;
