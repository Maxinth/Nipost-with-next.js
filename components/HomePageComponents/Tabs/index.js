import React, { useState } from "react";
import { TabContainer } from "./styled";
import GenerateTabTitles from "./TabTitle/GenerateTabTitles";
import TabDetailsShown from "./TabDetailsShown";

const Tabs = () => {
  const [currentItem, setCurrentItem] = useState("calculator");
  const changeItem = (item) => setCurrentItem(item);
  return (
    <TabContainer>
      <GenerateTabTitles changeItem={changeItem} currentItem={currentItem} />
      <TabDetailsShown currentItem={currentItem} />
    </TabContainer>
  );
};

export default Tabs;
