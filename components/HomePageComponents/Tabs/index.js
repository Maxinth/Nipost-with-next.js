import React from "react";
import { TabContainer } from "./styled";
import GenerateTabTitles from "./TabTitle/GenerateTabTitles";
// import TrackItemsDetails from "./TrackItemsDetails";
import LocatePODetails from "./LocatePoDetails";

const Tabs = () => {
  return (
    <TabContainer>
      <GenerateTabTitles />
      {/* <TrackItemsDetails /> */}
      <LocatePODetails />
    </TabContainer>
  );
};

export default Tabs;
