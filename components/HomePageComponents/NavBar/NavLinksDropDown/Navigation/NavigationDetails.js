import React from "react";
import { NavigationBox, Span, NavListItem } from "./styled";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import PropTypes from "prop-types";

const NavigationDetails = ({ details }) => {
  return (
    <NavigationBox>
      {details.map((item, index) => (
        <NavListItem key={index}>
          <ArrowForwardIosIcon /> <Span>{item}</Span>
        </NavListItem>
      ))}
    </NavigationBox>
  );
};

NavigationDetails.propTypes = {
  details: PropTypes.array,
};
export default NavigationDetails;
