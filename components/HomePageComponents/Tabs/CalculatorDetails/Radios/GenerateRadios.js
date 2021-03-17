import React from "react";
import useRadio from "./useRadio";
import RadioButtons from "./RadioButtons";
import PropTypes from "prop-types";

const GenerateRadios = ({ list, stateObj }) => {
  const { toggleCheck, radio, radiosList } = useRadio(list, stateObj);
  return (
    <RadioButtons
      toggleCheck={toggleCheck}
      radio={radio}
      radiosList={radiosList}
    />
  );
};

GenerateRadios.propTypes = {
  list: PropTypes.array,
  stateObj: PropTypes.object,
};

export default GenerateRadios;
