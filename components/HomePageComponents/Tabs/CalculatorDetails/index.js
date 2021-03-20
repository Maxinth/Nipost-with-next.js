import React, { useState, useEffect } from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import { DetailsBox } from "./styled";
import { getRadiosView } from "./toggleRadiosView";
import SelectBoxes from "./SelectBoxes";
import LettersRadioClickedView from "./LettersRadioClickedView";
import GenerateCalcInputs from "./CalcInput";
import { changeLocaleList } from "./SelectBoxes/changeLocaleList";
const CalculatorDetails = () => {
  // state to decide if the second radio batches, domesticAndForeign come into view
  const [isSecondRadiosBatchVisible, setSecondRadiosBatch] = useState(false);

  const [radioClicked, setRadioClicked] = useState("domestic");

  const toggleSecondRadiosView = (id) => {
    getRadiosView(setSecondRadiosBatch, id);
    // changeLocaleList(id, setRadioClicked);
    setRadioClicked(id);
  };

  useEffect(() => {
    changeLocaleList(radioClicked, setRadioClicked);
  }, [radioClicked]);

  return (
    <DetailsBox>
      <EmsAndLettersRadios toggleView={toggleSecondRadiosView} />
      {isSecondRadiosBatchVisible && (
        <LettersRadioClickedView
          toggleView={toggleSecondRadiosView}
          radiosView={isSecondRadiosBatchVisible}
          radioClicked={radioClicked}
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
