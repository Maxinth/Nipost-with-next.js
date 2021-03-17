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
      setRadio({ letters: false, ems: true });
      console.log("id=== ems ran");
    } else if (id === "letters") {
      console.log("id=== letters ran");
      setRadio({ letters: true, ems: false });
    } else if (id === "domestic") {
      setRadio({ domestic: true, foreign: false });
    } else if (id === "foreign") {
      setRadio({ domestic: false, foreign: true });
    }
  };

  console.log("radio = ", radio);

  return {
    toggleCheck,
    radio,
    radiosList,
  };
};

export default useRadio;
