import React from "react";
import { Input } from "./styled";
import PropTypes from "prop-types";

const InputBox = ({ text, disabled = false }) => {
  return <Input placeholder={text} disabled={disabled} />;
};

InputBox.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
};

export default InputBox;
