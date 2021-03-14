import React from "react";
import DropHeading from "../DropDownHeading";
import { NavContainer } from "./styled";
import NavigationDetails from "./NavigationDetails";
import PropTypes from "prop-types";

const Navigation = ({ details }) => {
  return (
    <NavContainer>
      <DropHeading text="navigation" />
      <NavigationDetails details={details} />
    </NavContainer>
  );
};

Navigation.propTypes = {
  details: PropTypes.array,
};

export default Navigation;
