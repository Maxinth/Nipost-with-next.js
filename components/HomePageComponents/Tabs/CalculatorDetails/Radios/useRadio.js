import { useState } from "react";
import { emsAndLetterResetState } from "./data"; // HERE

const useRadio = (radiosList, radioStateObj, forEms = false) => {
  // state to decide which radio button is clicked
  const [radio, setRadio] = useState(radioStateObj);

  // get a copy of the initial state.
  const initialState = radioStateObj;

  // custom function to handle toggle on click
  const toggleCheck = (id) => {
    // HERE IF
    if (forEms) {
      return setRadio({ ...emsAndLetterResetState, [id]: true });
    }
    return setRadio({ ...initialState, [id]: true });
  };

  return {
    toggleCheck,
    radio,
    radiosList,
  };
};

export default useRadio;
