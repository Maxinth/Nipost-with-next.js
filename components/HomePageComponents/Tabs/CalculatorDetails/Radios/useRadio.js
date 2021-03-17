import { useState } from "react";
import { emsAndLetterResetState, emsSelected, lettersSelected } from "./data"; // HERE

const useRadio = (radiosList, radioStateObj) => {
  // state to decide which radio button is clicked
  const [radio, setRadio] = useState(radioStateObj);

  // get a copy of the initial state.
  const initialState = radioStateObj;

  // custom function to handle toggle on click
  const toggleCheck = (id) => {
    if (id === "ems") {
      setRadio({ ems: true, letters: false });
      console.log("id === ems ran");
    } else if (id === "letters") {
      console.log("id === letters ran");
      setRadio({ ems: false, letters: true });
    } else if (id === "domestic") {
      setRadio({ ...initialState, [id]: true });
      console.log("id === domestic ran");
    } else if (id === "foreign") {
      console.log("id === foreign ran");
      setRadio({ ...initialState, [id]: true });
    }
  };

  // console.log("radio = ", radio);

  return {
    toggleCheck,
    radio,
    radiosList,
  };
};

export default useRadio;
