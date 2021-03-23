import React from "react";
import { StepSection } from "./styled";
import GenerateSteps from "./GenerateSteps";
import GetPostOffice from "./GetPostOffice";

const Steps = () => {
  return (
    <StepSection>
      <GenerateSteps />
      <GetPostOffice text="get post office box" />
    </StepSection>
  );
};

export default Steps;
