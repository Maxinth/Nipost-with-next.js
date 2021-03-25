import React from "react";
import OnlineTools from "../SharedComponents/OnlineTools";
import { Section } from "../CalculatorPageComps/styled";
import LocatePODetails from "../HomePageComponents/Tabs/LocatePoDetails";

const POAddressMain = () => {
  return (
    <Section>
      <LocatePODetails />
      <OnlineTools />
    </Section>
  );
};

export default POAddressMain;
