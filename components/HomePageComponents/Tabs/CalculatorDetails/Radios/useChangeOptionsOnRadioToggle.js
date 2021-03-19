import { useState } from "react";

const useChangeOptionsOnRadioToggle = () => {
  const [radioClicked, setRadioClicked] = useState("domestic");

  const getRadioClicked = (id) => {
    if (id === "domestic" || id === "foreign") {
      setRadioClicked(id);
    }
    return;
  };
  return {
    radioClicked,
    getRadioClicked,
  };
};

export default useChangeOptionsOnRadioToggle;
