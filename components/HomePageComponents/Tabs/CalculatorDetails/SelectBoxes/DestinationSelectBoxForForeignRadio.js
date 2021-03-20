import React from "react";
import { useSelect } from "./useSelect";
import GenerateSelectBoxes from "./GenerateSelectBoxes";

const DestinationSelectBoxForForeignRadio = () => {
  const {
    foreignAndDomesticRadioClicksList,
    onChangeLocaleOptionVal,
  } = useSelect();
  return (
    <GenerateSelectBoxes
      selectBoxList={foreignAndDomesticRadioClicksList}
      onChange={onChangeLocaleOptionVal}
    />
  );
};

export default DestinationSelectBoxForForeignRadio;
