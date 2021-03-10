import React, { useEffect } from "react";
import { ContentBox, ListItem, Box } from "./styled";
import useDropDown from "../../../useDropDown";
import PropTypes from "prop-types";

const DropDownDetails = ({ showDetails, addDetailsHeight }) => {
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
        <ListItem inner>details</ListItem>
        <ListItem inner>details 1</ListItem>
        <ListItem inner>details 2</ListItem>
      </ContentBox>
    </Box>
  );
};

DropDownDetails.propTypes = {
  showDetails: PropTypes.bool,
  addDetailsHeight: PropTypes.func,
};

export default DropDownDetails;
