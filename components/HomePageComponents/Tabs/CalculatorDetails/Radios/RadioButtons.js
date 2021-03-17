import React from "react";
import { RadioContainer } from "./styled";
import RadioButton from "./RadioButton";
import PropTypes from "prop-types";

const RadioButtons = ({ toggleCheck, radio, radiosList, toggleView }) => {
  return (
    <RadioContainer>
      {radiosList.map((item) => (
        <RadioButton
          key={item.id}
          {...item}
          checked={radio[item.id]} // see comments
          toggleCheck={() => toggleCheck(item.id)} // see comments
          toggleView={() => toggleView(item.id)}
        />
      ))}
    </RadioContainer>
  );
};

RadioButtons.propTypes = {
  toggleCheck: PropTypes.func,
  radio: PropTypes.object,
  radiosList: PropTypes.array,
};

export default RadioButtons;

/* 
toggleCheck is set to change only the radio button with matching id to true while 
the other is false and vice versa

the checked prop uses the property accessor on the radio object to get the initial
values of each button which is false for both buttons.

The false value corresponds to the <RadioButtonUnchecked /> radio button in RadioButton
which changes to the <RadioButtonChecked when clicked and the toggleCheck function sets
the current value of the clicked item to true.

*/
