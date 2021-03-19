import {
  emsSelected,
  lettersSelected,
  domesticSelected,
  foreignSelected,
} from "./data";

export const getRadiosStates = (id, setterFn) => {
  // new states
  switch (id) {
    case "ems":
      setterFn(emsSelected);
      break;
    case "letters":
      setterFn(lettersSelected);
      break;
    case "domestic":
      setterFn(domesticSelected);
      console.log("domestic radio clicked from getRadioStates");
      break;
    case "foreign":
      setterFn(foreignSelected);
      console.log("foreign radio clicked from getRadioStates");
      break;
    default:
      return;
  }
};
