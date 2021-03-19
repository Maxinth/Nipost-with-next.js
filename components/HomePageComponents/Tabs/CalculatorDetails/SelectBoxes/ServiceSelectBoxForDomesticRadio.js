import React from "react";
import { useSelect } from "./useSelect";
import GenerateSelectBoxes from "../SelectBoxes/GenerateSelectBoxes";

const ServiceSelectBoxForDomesticRadio = () => {
  const { selectBoxForDomesticRadio, onChangeLocaleOptionVal } = useSelect();

  return (
    <GenerateSelectBoxes
      selectBoxList={selectBoxForDomesticRadio}
      onChange={onChangeLocaleOptionVal}
    />
  );
};
export default ServiceSelectBoxForDomesticRadio;
