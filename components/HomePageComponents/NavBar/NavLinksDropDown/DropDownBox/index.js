import React from "react";
import { DropDownContainer } from "./styled";
import OnlineTools from "../OnlineTools";
import Navigation from "../Navigation";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../../../context";

const DropDownBox = ({ details }) => {
  const { itemInView, handleMouseOut } = useGlobalContext();
  const { leftOffset } = itemInView;

  //-------*******----------
  // OVER HERE
  // ADJUST OFFSET FOR SMALLER SCREENS - CHECK OUT ON BROWSER
  //-------*******----------

  return (
    <DropDownContainer onMouseLeave={handleMouseOut} offset={leftOffset}>
      <OnlineTools />
      <Navigation details={details} />
    </DropDownContainer>
  );
};

DropDownBox.propTypes = {
  details: PropTypes.array,
};

export default DropDownBox;
