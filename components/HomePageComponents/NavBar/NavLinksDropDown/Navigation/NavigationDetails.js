import React from "react";
import { NavigationBox, Span, NavListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const NavigationDetails = () => {
  return (
    <NavigationBox>
      <ArrowForwardIosIcon /> <Span>News</Span>
      <ArrowForwardIosIcon /> <Span>photo gallery</Span>
    </NavigationBox>
  );
};

export default NavigationDetails;
