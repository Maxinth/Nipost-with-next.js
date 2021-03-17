import React from "react";
import { domesticAndForeign, domesticAndForeignState } from "./data";
import GenerateRadios from "./GenerateRadios";
import PropTypes from "prop-types";

const DomesticAndForeignRadios = ({ getRadioVal, radioVal }) => {
  const { ems, letters } = radioVal;
  console.log("ems from domestic = ", ems);

  return (
    <>
      {(!ems || ems === undefined) && (
        <GenerateRadios
          list={domesticAndForeign}
          stateObj={domesticAndForeignState}
          getRadioVal={getRadioVal}
        />
      )}
    </>
  );
};

DomesticAndForeignRadios.propTypes = {
  getRadioVal: PropTypes.func,
  radioVal: PropTypes.object,
};

export default DomesticAndForeignRadios;

/*DomesticAndForeignRadios is displayed when the letters radio is toggled and  CHECKED */
