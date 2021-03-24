import React from "react";
import CalculatorDetails from "../HomePageComponents/Tabs/CalculatorDetails";
import { Section } from "./styled";
import OnlineTools from "../SharedComponents/OnlineTools";

const CalculatorSection = () => {
  return (
    <Section>
      <CalculatorDetails />
      <OnlineTools />
    </Section>
  );
};

export default CalculatorSection;
