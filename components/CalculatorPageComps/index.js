import React from "react";
import PropTypes from "prop-types";
import CalculatorDetails from "../HomePageComponents/Tabs/CalculatorDetails";
import SharedLayout from "../SharedComponents/SharedLayout";

const CalculatorPage = ({ text }) => {
  return (
    <SharedLayout text={text}>
      <CalculatorDetails />
    </SharedLayout>
  );
};

CalculatorPage.propTypes = {
  text: PropTypes.string,
};

export default CalculatorPage;
