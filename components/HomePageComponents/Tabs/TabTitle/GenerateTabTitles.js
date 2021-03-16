import React from "react";
import { data } from "./data";
import { Span, TabBox, TabSection } from "./styled";
import PropTypes from "prop-types";

const GenerateTabTitles = ({ changeItem }) => {
  return (
    <TabSection>
      {data.map((item, index) => (
        <TabBox key={index} onClick={() => changeItem(item.itemId)}>
          {item.icon} <Span>{item.title}</Span>
        </TabBox>
      ))}
    </TabSection>
  );
};

GenerateTabTitles.propTypes = {
  changeItem: PropTypes.func,
};

export default GenerateTabTitles;
