import { useState } from "react";

const useRadio = (radiosList, radioStateObj) => {
  // state to decide which radio button is clicked
  const [radio, setRadio] = useState(radioStateObj);

  // get a copy of the initial state.
  const initialState = radioStateObj;

  // custom function to handle toggle on click
  const toggleCheck = (id) => {
    return setRadio({ ...initialState, [id]: true });
  };

  return {
    toggleCheck,
    radio,
    radiosList,
  };
};

export default useRadio;
