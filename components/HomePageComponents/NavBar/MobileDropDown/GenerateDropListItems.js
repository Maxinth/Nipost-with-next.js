import React from "react";
import { data } from "./data";
import DropListItem from "./DropListItem";
import PropTypes from "prop-types";

const GenerateDropListItems = ({ getChildDetailsHeight }) => {
  return (
    <>
      {data.map((item, index) => (
        <DropListItem
          key={index}
          {...item}
          addDetailsHeight={getChildDetailsHeight}
        />
      ))}
    </>
  );
};

GenerateDropListItems.propTypes = {
  getChildDetailsHeight: PropTypes.func,
};

export default GenerateDropListItems;
