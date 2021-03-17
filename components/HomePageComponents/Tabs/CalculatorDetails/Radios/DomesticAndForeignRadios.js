import React from "react";
import { domesticAndForeign, domesticAndForeignState } from "./data";
import GenerateRadios from "./GenerateRadios";
import PropTypes from "prop-types";

const DomesticAndForeignRadios = ({ toggleView, radioVal }) => {
  return (
    <>
      {radioVal && (
        <GenerateRadios
          list={domesticAndForeign}
          stateObj={domesticAndForeignState}
          toggleView={toggleView}
        />
      )}
    </>
  );
};

DomesticAndForeignRadios.propTypes = {
  toggleView: PropTypes.func,
  radioVal: PropTypes.bool,
};

export default DomesticAndForeignRadios;

/*DomesticAndForeignRadios is displayed when the letters radio is toggled and  CHECKED */
