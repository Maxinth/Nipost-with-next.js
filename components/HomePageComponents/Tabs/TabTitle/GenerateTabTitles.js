import React from "react";
import { data, makeCurrent } from "./data";
import { Span, TabBox, TabSection } from "./styled";
import PropTypes from "prop-types";

const GenerateTabTitles = ({ changeItem, currentItem }) => {
  return (
    <TabSection>
      {data.map((item, index) => (
        <TabBox
          key={index}
          onClick={() => changeItem(item.itemId)}
          isCurrentItem={makeCurrent(currentItem, item.itemId)}
        >
          {item.icon} <Span>{item.title}</Span>
        </TabBox>
      ))}
    </TabSection>
  );
};

GenerateTabTitles.propTypes = {
  changeItem: PropTypes.func,
  currentItem: PropTypes.string,
};

export default GenerateTabTitles;
