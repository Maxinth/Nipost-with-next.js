import React from "react";
import { DetailsBox } from "./styled";
import PropTypes from "prop-types";
import GenerateInnerListItems from "./GenerateInnerListItems";
import TransitionChildHeight from "./TransitionChildHeight";

const DropDownDetails = ({ showDetails, details }) => {
  return (
    <TransitionChildHeight condition={showDetails} ParentBox={DetailsBox}>
      <GenerateInnerListItems data={details} />
    </TransitionChildHeight>
  );
};

DropDownDetails.propTypes = {
  showDetails: PropTypes.bool,
  addDetailsHeight: PropTypes.func,
};

export default DropDownDetails;
