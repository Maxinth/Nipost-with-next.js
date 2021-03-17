export const getRadiosView = (setterFn, id) => {
  if (id === "letters") {
    setterFn(true);
  }
  if (id === "ems") {
    setterFn(false);
  }
  // if both ifs fail , do nothing
  return;
};
