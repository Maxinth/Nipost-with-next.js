import React, { useState } from "react";
import EmsAndLettersRadios from "./Radios/EmsAndLettersRadios";
import DomesticAndForeignRadios from "./Radios/DomesticAndForeignRadios";
import { DetailsBox } from "./styled";
import { getRadiosView } from "./toggleRadiosView";
import EmsDummyComponent from "./EmsDummyComponent";

const CalculatorDetails = () => {
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
          radioVal={isSecondRadiosBatchVisible}
        />
      )}
      {!isSecondRadiosBatchVisible && (
        <EmsDummyComponent radioVal={isSecondRadiosBatchVisible} />
      )}
    </DetailsBox>
  );
};

export default CalculatorDetails;

/*

toggleSecondRadiosView checks the id of the label/radio to see if it 


*/
