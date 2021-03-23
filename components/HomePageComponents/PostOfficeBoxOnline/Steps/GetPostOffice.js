import React from "react";
import { ButtonContainer, Btn } from "./styled";
import PropTypes from "prop-types";

const SubmitBtn = ({ text }) => {
  return (
    <ButtonContainer>
      <Btn type="submit">{text}</Btn>
    </ButtonContainer>
  );
};

SubmitBtn.propTypes = {
  text: PropTypes.string,
};

export default SubmitBtn;
