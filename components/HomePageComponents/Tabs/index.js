import React from "react";
import styled from "styled-components";
import GenerateTabTitles from "./TabTitle/GenerateTabTitles";
import TrackItemsDetails from "./TrackItemsDetails";
const TabContainer = styled.section`
  background-color: rgb(245, 245, 245);
  margin-top: 8rem;
  border: 1px solid black;
  padding: 1rem;
  transition: margin-top 0.2s;
  @media (min-width: 456px) {
    margin-top: calc(8rem + 10vw);
  }
  @media (min-width: 666px) {
    margin-top: calc(8rem + 20vw);
  }
`;

const Tabs = () => {
  return (
    <TabContainer>
      <GenerateTabTitles />
      <TrackItemsDetails />
    </TabContainer>
  );
};

export default Tabs;
