import React from "react";
import { SelectBoxItem, SelectBoxOption, SelectBoxContainer } from "./styled";
import PropTypes from "prop-types";

const SelectBox = ({ items, currentChoice, onChange, id }) => {
  return (
    <SelectBoxContainer>
      <SelectBoxItem
        name={id}
        id={id}
        value={currentChoice}
        onChange={onChange}
      >
        {items.map((item, index) => {
          const { itemName, itemValue } = item;

          return (
            <SelectBoxOption value={itemValue} key={`${index}${itemValue}`}>
              {itemName.toUpperCase()}
            </SelectBoxOption>
          );
        })}
      </SelectBoxItem>
    </SelectBoxContainer>
  );
};

SelectBox.propTypes = {
  items: PropTypes.array,
  currentChoice: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};

export default SelectBox;
