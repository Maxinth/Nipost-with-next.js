import React from "react";
import { useSelect } from "./useSelect";
import GenerateSelectBoxes from "./GenerateSelectBoxes";

const DestinationSelectBoxForForeignRadio = () => {
  const { foreignRadioClickList, onChangeLocaleOptionVal } = useSelect();
  return (
    <GenerateSelectBoxes
      selectBoxList={foreignRadioClickList}
      onChange={onChangeLocaleOptionVal}
    />
  );
};

export default DestinationSelectBoxForForeignRadio;
