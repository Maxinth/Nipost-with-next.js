import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ListItem, Span } from "./styled";
import PropTypes from "prop-types";

const GenerateListItems = ({ items, withIcon }) => {
  return (
    <>
      {items.map((item, index) => (
        <ListItem key={index}>
          {withIcon && <ChevronRightIcon />}
          <Span>{item}</Span>
        </ListItem>
      ))}
    </>
  );
};

GenerateListItems.propTypes = {
  withIcon: PropTypes.bool,
  items: PropTypes.array,
};

export default GenerateListItems;
