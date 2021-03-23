import React from "react";
import PropTypes from "prop-types";
import FooterListItem from "./FooterListItem";

const GenerateListItems = ({ items, withIcon }) => {
  return (
    <>
      {items.map((item, index) => (
        <FooterListItem key={index} item={item} withIcon={withIcon} />
      ))}
    </>
  );
};

GenerateListItems.propTypes = {
  withIcon: PropTypes.bool,
  items: PropTypes.array,
};

export default GenerateListItems;
