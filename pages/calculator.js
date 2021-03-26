import React from "react";
import CalculatorPage from "../components/CalculatorPageComps";
import TransitionBox from "../components/TransitionBox";

const Calculator = () => {
  return (
    <TransitionBox>
      <CalculatorPage text="online calculator" />
    </TransitionBox>
  );
};

export default Calculator;
