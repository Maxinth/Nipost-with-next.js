import React from "react";
import useRadio from "./useRadio";
import RadioButtons from "./RadioButtons";
import PropTypes from "prop-types";

const GenerateRadios = ({ list, stateObj, getRadioVal }) => {
  const { toggleCheck, radio, radiosList } = useRadio(list, stateObj);

  return (
    <RadioButtons
      toggleCheck={toggleCheck}
      radio={radio}
      radiosList={radiosList}
      getRadio={() => getRadioVal(radio)}
    />
  );
};

GenerateRadios.propTypes = {
  list: PropTypes.array,
  stateObj: PropTypes.object,
  getRadioVal: PropTypes.func,
};

export default GenerateRadios;
