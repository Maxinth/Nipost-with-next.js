import React from "react";
import Step from "./Step";
import { data } from "./data";

const GenerateSteps = () => {
  return (
    <>
      {data.map((item, index) => (
        <Step key={index} num={index + 1} text={item} />
      ))}
    </>
  );
};

export default GenerateSteps;
