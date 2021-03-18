import React, { useState } from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { DetailsBox } from "./styled";
import { getRadiosView } from "./toggleRadiosView";
import SelectBoxes from "./SelectBoxes";

const CalculatorDetails = () => {
  // state to decide if the second radio batches, domesticAndForeign come into view
  const [isSecondRadiosBatchVisible, setSecondRadiosBatch] = useState(false);

  const toggleSecondRadiosView = (id) => {
    getRadiosView(setSecondRadiosBatch, id);
  };

  return (
    <DetailsBox>
      <EmsAndLettersRadios toggleView={toggleSecondRadiosView} />
      {isSecondRadiosBatchVisible && (
        <DomesticAndForeignRadios
          toggleView={toggleSecondRadiosView}
          radiosView={isSecondRadiosBatchVisible}
        />
      )}
      {!isSecondRadiosBatchVisible && <SelectBoxes />}
    </DetailsBox>
  );
};

export default CalculatorDetails;

/*

toggleSecondRadiosView checks the id of the label/radio to see if it 


*/
