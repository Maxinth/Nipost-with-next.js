import React from "react";
import TrackItemDetails from "../HomePageComponents/Tabs/TrackItemsDetails";
import OnlineTools from "../SharedComponents/OnlineTools";
import { Section } from "../CalculatorPageComps/styled";

const TrackItemsMain = () => {
  return (
    <Section>
      <TrackItemDetails />
      <OnlineTools />
    </Section>
  );
};

export default TrackItemsMain;
