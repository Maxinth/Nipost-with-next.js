import { useState } from "react";
import { getRadiosStates } from "./getRadiosStates";
import useChangeOptionsOnRadioToggle from "./useChangeOptionsOnRadioToggle";

const useRadio = (radiosList, radioStateObj) => {
  // state to decide which radio button is clicked
  const [radio, setRadio] = useState(radioStateObj);
  const { radioClicked, getRadioClicked } = useChangeOptionsOnRadioToggle(); // NEW
  // custom function to handle toggle base on radio id on click
  const toggleCheck = (id) => {
    getRadiosStates(id, setRadio);
    getRadioClicked(id); // NEW
  };

  // console.log("radio = ", radio);

  return {
    toggleCheck,
    radio,
    radiosList,
    radioClicked, //NEW
  };
};

export default useRadio;
