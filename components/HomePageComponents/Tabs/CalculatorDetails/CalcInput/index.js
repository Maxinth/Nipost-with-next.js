import React from "react";
import CalcInputs from "./CalculateInputs";
import { Section } from "./styled";
import Btn from "../../Btn";

const GenerateCalcInputs = () => {
  return (
    <Section main>
      <CalcInputs />
      <Btn text="calculate" />
    </Section>
  );
};

export default GenerateCalcInputs;
