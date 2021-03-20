import { useState, useEffect } from "react";
import { getRadiosStates } from "./getRadiosStates";
import useChangeOptionsOnRadioToggle from "./useChangeOptionsOnRadioToggle";
// import { useGlobalContext } from "../../../../context";

const useRadio = (radiosList, radioStateObj) => {
  // state to decide which radio button is clicked
  const [radio, setRadio] = useState(radioStateObj);
  const { radioClicked, getRadioClicked } = useChangeOptionsOnRadioToggle(); // NEW

  // const { changeLocaleList, setLocaleList, localeList } = useGlobalContext();

  // custom function to handle toggle base on radio id on click
  const toggleCheck = (id) => {
    getRadioClicked(id);
    getRadiosStates(id, setRadio);
    // console.log("radioClicked inside toggleCheck = ", radioClicked);
    // // changeLocaleList(radioClicked, setLocaleList);
  };

  // useEffect(() => {
  //   changeLocaleList(radioClicked, setLocaleList);
  //   console.log("radioClicked inside useEffect = ", radioClicked);
  // }, [radioClicked, localeList]);

  return {
    toggleCheck,
    radio,
    radiosList,
    radioClicked, //NEW
  };
};

export default useRadio;
