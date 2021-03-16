import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import GenerateTabTitles from "./TabTitle/GenerateTabTitles";

const TabContainer = styled.section`
  background-color: rgb(245, 245, 245);
  margin-top: 8rem;
  border: 1px solid black;
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
    </TabContainer>
  );
};

export default Tabs;
