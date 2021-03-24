import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ListItem, Span } from "./styled";
import PropTypes from "prop-types";

const OTListItem = ({ item }) => {
  return (
    <ListItem>
      <ArrowForwardIcon /> <Span>{item}</Span>
    </ListItem>
  );
};

OTListItem.propTypes = {
  item: PropTypes.string,
};

export default OTListItem;
