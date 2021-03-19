import React from "react";
import { data } from "./data";
import CalcInput from "./CalcInput";

const GenerateCalcInputs = () => {
  return (
    <>
      {data.map((item) => (
        <CalcInput key={item.text} {...item} />
      ))}
    </>
  );
};

export default GenerateCalcInputs;
