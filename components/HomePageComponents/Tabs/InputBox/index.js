import React from "react";
import { Input } from "./styled";
import PropTypes from "prop-types";

const InputBox = ({ text }) => {
  return <Input placeholder={text} />;
};

InputBox.propTypes = {
  text: PropTypes.string,
};
export default InputBox;
