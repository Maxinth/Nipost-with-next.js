import React from "react";
import CalculatorPage from "../components/CalculatorPageComps";
import TransitionBox from "../components/TransitionBox";

const Calculator = () => {
  return (
    <TransitionBox docTitle="Nipost - Use our expenses calculator">
      <CalculatorPage text="online calculator" />
    </TransitionBox>
  );
};

export default Calculator;
