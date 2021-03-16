import React from "react";
import { Button } from "./styled";
import PropTypes from "prop-types";

const Btn = ({ text }) => {
  return <Button type="submit">{text}</Button>;
};

Btn.propTypes = {
  text: PropTypes.string,
};

export default Btn;
