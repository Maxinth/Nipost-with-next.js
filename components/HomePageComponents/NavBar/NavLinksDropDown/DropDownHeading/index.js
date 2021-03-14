import React from "react";
import { Heading } from "./styled";
import PropTypes from "prop-types";

const DropHeading = ({ text }) => {
  return <Heading>{text}</Heading>;
};

DropHeading.propTypes = {
  text: PropTypes.string,
};

export default DropHeading;
