import React from "react";
import { DropDownContainer } from "./styled";
import OnlineTools from "../OnlineTools";
import Navigation from "../Navigation";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../../../context";

const DropDownBox = ({ details }) => {
  const { itemInView, handleMouseOut } = useGlobalContext();
  const { leftOffset } = itemInView;
  return (
    <DropDownContainer
      style={{ left: `${leftOffset}px` }}
      onMouseLeave={handleMouseOut}
      offset={leftOffset}
    >
      <OnlineTools />
      <Navigation details={details} />
    </DropDownContainer>
  );
};

DropDownBox.propTypes = {
  details: PropTypes.array,
};

export default DropDownBox;
