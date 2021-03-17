import React from "react";
import TrackItemsDetails from "./TrackItemsDetails";
import LocatePODetails from "./LocatePoDetails";
import CalculatorDetails from "./CalculatorDetails";
import PropTypes from "prop-types";

const TabDetailsShown = ({ currentItem }) => {
  return (
    <>
      {currentItem === "trackItems" && <TrackItemsDetails />}
      {currentItem === "locatePo" && <LocatePODetails />}
      {currentItem === "calculator" && <CalculatorDetails />}
    </>
  );
};

TabDetailsShown.propTypes = {
  currentItem: PropTypes.string,
};

export default TabDetailsShown;
