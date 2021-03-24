import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ListItem, Span } from "./styled";

const OTListItem = () => {
  return (
    <ListItem>
      <ArrowForwardIcon /> <Span>Track And Trace</Span>
    </ListItem>
  );
};

export default OTListItem;
