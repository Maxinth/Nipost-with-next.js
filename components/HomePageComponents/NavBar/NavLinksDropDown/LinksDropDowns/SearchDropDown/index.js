import React from "react";
import InputBox from "../../../../Tabs/InputBox";
import Btn from "../../../../Tabs/Btn";
import { Section, Box } from "./styled";

export const SearchDropDown = () => {
  return (
    <Section>
      <Box>
        <InputBox text="Enter keyword" />
        <Btn text="search" />
      </Box>
    </Section>
  );
};
