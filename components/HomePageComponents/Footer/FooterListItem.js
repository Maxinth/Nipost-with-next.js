import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { ListItem, Span } from "./styled";
import PropTypes from "prop-types";

const FooterListItem = ({ withIcon, item }) => {
  return (
    <ListItem doLink={withIcon}>
      {withIcon && <ChevronRightIcon />}
      <Span>{item}</Span>
    </ListItem>
  );
};

FooterListItem.propTypes = {
  withIcon: PropTypes.bool,
  item: PropTypes.string,
};

export default FooterListItem;
