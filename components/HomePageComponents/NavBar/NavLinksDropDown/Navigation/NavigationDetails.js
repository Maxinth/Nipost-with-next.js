import React from "react";
import { NavigationBox, Span, NavListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const NavigationDetails = () => {
  return (
    <NavigationBox>
      <NavListItem>
        <ArrowForwardIosIcon /> <Span>News</Span>
      </NavListItem>
      <NavListItem>
        <ArrowForwardIosIcon /> <Span>photo gallery</Span>
      </NavListItem>
    </NavigationBox>
  );
};

export default NavigationDetails;
