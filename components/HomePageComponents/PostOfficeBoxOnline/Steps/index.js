import React from "react";
import Step from "./Step";
import { StepSection } from "./styled";
import { data } from "./data";
import GetPostOffice from "./GetPostOffice";
const Steps = () => {
  return (
    <StepSection>
      {data.map((item, index) => (
        <Step key={index} num={index + 1} text={item} />
      ))}
      <GetPostOffice />
    </StepSection>
  );
};

export default Steps;
