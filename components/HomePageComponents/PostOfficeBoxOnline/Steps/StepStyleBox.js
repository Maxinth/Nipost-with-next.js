import React from "react";
import { OuterBox, InnerBox } from "./styled";
import PropTypes from "prop-types";

const StepStyleBox = ({ num }) => {
  return (
    <OuterBox>
      <InnerBox>{num}</InnerBox>
    </OuterBox>
  );
};

StepStyleBox.propTypes = {
  num: PropTypes.number,
};
export default StepStyleBox;
