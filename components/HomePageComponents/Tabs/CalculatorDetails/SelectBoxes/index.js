import React from "react";
import GenerateSelectBoxes from "./GenerateSelectBoxes";
import { useSelect } from "./useSelect";

const FormMain = () => {
  const { onChange, selectBoxList } = useSelect();

  return (
    <GenerateSelectBoxes selectBoxList={selectBoxList} onChange={onChange} />
  );
};

export default FormMain;
