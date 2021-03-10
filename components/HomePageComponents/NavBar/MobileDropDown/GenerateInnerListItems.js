import React from "react";
import PropTypes from "prop-types";
import { ListItemInner } from "./styled";

const GenerateInnerListItems = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <ListItemInner key={index}>{item}</ListItemInner>
      ))}
    </>
  );
};

GenerateInnerListItems.propTypes = {
  data: PropTypes.array,
};

export default GenerateInnerListItems;
