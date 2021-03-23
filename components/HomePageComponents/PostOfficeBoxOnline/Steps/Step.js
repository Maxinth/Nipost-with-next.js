import React from "react";
import { Text, StepBox } from "./styled";
import StepStyleBox from "./StepStyleBox";
import PropTypes from "prop-types";

const Step = ({ num, text }) => {
  return (
    <StepBox>
      <StepStyleBox num={num} />
      <Text>{text}</Text>
    </StepBox>
  );
};

Step.propTypes = {
  num: PropTypes.number,
  text: PropTypes.string,
};

export default Step;
