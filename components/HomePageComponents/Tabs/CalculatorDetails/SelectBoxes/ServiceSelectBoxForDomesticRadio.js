import React from "react";
import { useSelect } from "./useSelect";
import GenerateSelectBoxes from "../SelectBoxes/GenerateSelectBoxes";

const ServiceSelectBoxForDomesticRadio = () => {
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
export default ServiceSelectBoxForDomesticRadio;
