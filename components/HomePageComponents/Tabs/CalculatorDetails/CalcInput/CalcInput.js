import React from "react";
import InputBox from "../../InputBox";
import { CalcBox, Button } from "./styled";
import PropTypes from "prop-types";

const CalcInput = ({ btnText, text, reverseOrder }) => {
  return (
    <CalcBox reverse={reverseOrder}>
      <InputBox text={text} disabled={reverseOrder} />
      <Button>{btnText}</Button>
    </CalcBox>
  );
};

CalcInput.propTypes = {
  btnText: PropTypes.string,
  text: PropTypes.string,
  reverseOrder: PropTypes.bool,
};
export default CalcInput;
