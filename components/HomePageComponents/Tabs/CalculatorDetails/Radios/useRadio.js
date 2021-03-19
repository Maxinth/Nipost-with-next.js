import { useState } from "react";
import { getRadiosStates } from "./getRadiosStates";

const useRadio = (radiosList, radioStateObj) => {
  // state to decide which radio button is clicked
  const [radio, setRadio] = useState(radioStateObj);

  // custom function to handle toggle base on radio id on click
  const toggleCheck = (id) => {
    getRadiosStates(id, setRadio);
  };

  // console.log("radio = ", radio);

  return {
    toggleCheck,
    radio,
    radiosList,
  };
};

export default useRadio;
