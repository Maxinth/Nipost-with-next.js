import React, { useEffect } from "react";
import { ContentBox, Box } from "./styled";
import useDropDown from "../../../useDropDown";
import PropTypes from "prop-types";
import GenerateInnerListItems from "./GenerateInnerListItems";

const DropDownDetails = ({ showDetails, addDetailsHeight, details }) => {
  const { currentHeight, contentRef, getNewHeight } = useDropDown();

  // useEffect for each detailsDropDown based on showDetails
  useEffect(() => {
    let detailsHeight = contentRef.current.getBoundingClientRect().height;
    getNewHeight(!showDetails, detailsHeight);
    addDetailsHeight(currentHeight);
  }, [showDetails, currentHeight]);

  return (
    <Box details height={currentHeight}>
      <ContentBox ref={contentRef}>
        <GenerateInnerListItems data={details} />
      </ContentBox>
    </Box>
  );
};

DropDownDetails.propTypes = {
  showDetails: PropTypes.bool,
  addDetailsHeight: PropTypes.func,
};

export default DropDownDetails;
