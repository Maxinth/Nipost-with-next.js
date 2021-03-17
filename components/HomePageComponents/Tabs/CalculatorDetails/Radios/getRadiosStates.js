import { emsSelected, lettersSelected } from "./data";

export const getRadiosStates = (id, initState, setterFn) => {
  // toggle state based on id and initState
  const doStateToggle = { ...initState, [id]: true };

  // new states
  switch (id) {
    case "ems":
      setterFn(emsSelected);
      break;
    case "letters":
      setterFn(lettersSelected);
      break;
    case "domestic":
    case "foreign":
      setterFn(doStateToggle);
      break;
    default:
      return;
  }
};
