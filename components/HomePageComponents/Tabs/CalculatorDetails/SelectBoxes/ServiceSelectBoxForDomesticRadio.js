import React from "react";
import { useSelect } from "./useSelect";
import GenerateSelectBoxes from "../SelectBoxes/GenerateSelectBoxes";

const ServiceSelectBoxForDomesticRadio = () => {
  const { onChange, selectBoxForDomesticRadio } = useSelect();

  return (
    <GenerateSelectBoxes
      selectBoxList={selectBoxForDomesticRadio}
      onChange={onChange}
    />
  );
};
export default ServiceSelectBoxForDomesticRadio;
