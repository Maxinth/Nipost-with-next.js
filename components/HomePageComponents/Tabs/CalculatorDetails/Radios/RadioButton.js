import React from "react";
import PropTypes from "prop-types";
import RadioButtonDisplayed from "./RadioButtonDisplayed";
import { Label, RadioButtonContainer, LabelText } from "./styled";

const RadioButton = ({ checked, toggleCheck, label, id, getRadio }) => {
  // so I don;t have to write same props twice, once for each button state.
  const handleToggle = () => {
    toggleCheck();
    getRadio();
  };

  const radioInputProps = {
    type: "radio",
    id: id,
    onClick: handleToggle,
  };

  return (
    <RadioButtonContainer>
      <Label htmlFor={id} onClick={handleToggle}>
        <RadioButtonDisplayed
          checked={checked}
          radioInputProps={radioInputProps}
        />
        <LabelText> {label}</LabelText>
      </Label>
    </RadioButtonContainer>
  );
};

RadioButton.propTypes = {
  checked: PropTypes.bool,
  toggleCheck: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  getRadio: PropTypes.func,
};

export default RadioButton;

/* 
the toggleCheck prop has been added to the label element so it can also listen 
for the click event and select an item as the radio buttons would do
when clicked 
*/
