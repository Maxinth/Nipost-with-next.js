import React from "react";
import useRadio from "./useRadio";
import RadioButtons from "./RadioButtons";
import PropTypes from "prop-types";

const GenerateRadios = ({ list, toggleView, stateObj }) => {
  const { toggleCheck, radio, radiosList } = useRadio(list, stateObj);

  return (
    <RadioButtons
      toggleCheck={toggleCheck}
      radio={radio}
      radiosList={radiosList}
      toggleView={toggleView}
    />
  );
};

GenerateRadios.propTypes = {
  list: PropTypes.array,
  stateObj: PropTypes.object,
  toggleView: PropTypes.func,
};

export default GenerateRadios;
