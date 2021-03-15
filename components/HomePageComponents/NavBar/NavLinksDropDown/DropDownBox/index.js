import React, { useEffect } from "react";
import { DropDownContainer, Box } from "./styled";
import OnlineTools from "../OnlineTools";
import Navigation from "../Navigation";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../../../context";
import useDropDown from "../../../../useDropDown";

const DropDownBox = ({ details, testCondition }) => {
  const { itemInView, handleMouseOut } = useGlobalContext();
  const { leftOffset } = itemInView;
  const { currentHeight, contentRef, getNewHeight } = useDropDown();
  // useEffect for changing height of linksdropDown
  useEffect(() => {
    let detailsHeight = contentRef.current.getBoundingClientRect().height;
    getNewHeight(testCondition, detailsHeight);
  }, [testCondition, currentHeight]);

  return (
    <DropDownContainer
      height={currentHeight}
      // onMouseLeave={handleMouseOut}
      offset={leftOffset}
    >
      <Box ref={contentRef}>
        <OnlineTools />
        <Navigation details={details} />
      </Box>
    </DropDownContainer>
  );
};

DropDownBox.propTypes = {
  details: PropTypes.array,
};

export default DropDownBox;
