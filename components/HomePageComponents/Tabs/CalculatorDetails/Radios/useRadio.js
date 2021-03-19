import { useState } from "react";
import { getRadiosStates } from "./getRadiosStates";
// import useChangeOptionsOnRadioToggle from "./useChangeOptionsOnRadioToggle";
import { useGlobalContext } from "../../../../context";

const useRadio = (radiosList, radioStateObj) => {
  // const { changeLocaleList, setLocaleList, localeList } = useGlobalContext();

  // state to decide which radio button is clicked
  const [radio, setRadio] = useState(radioStateObj);
  // const { radioClicked, getRadioClicked } = useChangeOptionsOnRadioToggle(); // NEW
  // custom function to handle toggle base on radio id on click
  const toggleCheck = (id) => {
    // getRadioClicked(id);
    getRadiosStates(id, setRadio);
    // changeLocaleList(id, setLocaleList);
  };

  // useEffect(() => {
  //   toggleCheck(radioClicked);
  // }, [radioClicked, localeList]);

  return {
    toggleCheck,
    radio,
    radiosList,
  };
};

export default useRadio;
