import React from "react";
import { data } from "./data";
import CalcInput from "./CalcInput";
import { CostSection } from "./styled";

const CalcInputs = () => {
  return (
    <CostSection>
      {data.map((item) => (
        <CalcInput key={item.text} {...item} />
      ))}
    </CostSection>
  );
};

export default CalcInputs;
