import React, { useState, useEffect } from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import { DetailsBox } from "./styled";
import { getRadiosView } from "./toggleRadiosView";
import SelectBoxes from "./SelectBoxes";
import LettersRadioClickedView from "./LettersRadioClickedView";
import GenerateCalcInputs from "./CalcInput";

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
        <LettersRadioClickedView
          toggleView={toggleSecondRadiosView}
          radiosView={isSecondRadiosBatchVisible}
        />
      )}
      {!isSecondRadiosBatchVisible && <SelectBoxes />}
      <GenerateCalcInputs />
    </DetailsBox>
  );
};

export default CalculatorDetails;

/*

toggleSecondRadiosView checks the id of the label/radio to see if it 


*/
