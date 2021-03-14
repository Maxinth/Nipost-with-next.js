import React from "react";
import { DropDownContainer } from "./styled";
import OnlineTools from "../OnlineTools";
import Navigation from "../Navigation";
import PropTypes from "prop-types";

const DropDownBox = ({ details }) => {
  return (
    <DropDownContainer>
      <OnlineTools />
      <Navigation details={details} />
    </DropDownContainer>
  );
};

DropDownBox.propTypes = {
  details: PropTypes.array,
};

export default DropDownBox;
