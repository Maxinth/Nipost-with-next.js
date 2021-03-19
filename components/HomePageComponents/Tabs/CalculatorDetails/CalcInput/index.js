import React from "react";
import CalcInputs from "./CalculateInputs";
import { Section, Box } from "./styled";
import Btn from "../../Btn";

const GenerateCalcInputs = () => {
  return (
    <Section>
      <CalcInputs />
      <Box>
        <Btn text="calculate" />
      </Box>
    </Section>
  );
};

export default GenerateCalcInputs;
