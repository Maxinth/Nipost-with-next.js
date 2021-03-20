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
      break;
    case "foreign":
      setterFn(foreignSelected);
      break;
    default:
      return;
  }
};
