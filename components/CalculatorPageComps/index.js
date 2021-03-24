import React from "react";
import PropTypes from "prop-types";
import CalculatorSection from "./CalculatorSection";
import SharedLayout from "../SharedComponents/SharedLayout";

const CalculatorPage = ({ text }) => {
  return (
    <SharedLayout text={text}>
      <CalculatorSection />
    </SharedLayout>
  );
};

CalculatorPage.propTypes = {
  text: PropTypes.string,
};

export default CalculatorPage;
