import React from "react";
import { useSelect } from "./useSelect";
import GenerateSelectBoxes from "../SelectBoxes/GenerateSelectBoxes";

const ServiceSelectBoxForDomesticRadio = () => {
  const { domesticRadioClicksList, onChangeLocaleOptionVal } = useSelect();

  return (
    <GenerateSelectBoxes
      selectBoxList={domesticRadioClicksList}
      onChange={onChangeLocaleOptionVal}
    />
  );
};
export default ServiceSelectBoxForDomesticRadio;
