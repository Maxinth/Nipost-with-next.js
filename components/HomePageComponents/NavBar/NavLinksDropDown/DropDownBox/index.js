import React, { useEffect } from "react";
import { DropDownContainer } from "./styled";
import PropTypes from "prop-types";
import { useGlobalContext } from "../../../../context";
import useDropDown from "../../../../useDropDown";
import Contents from "./Contents";

const DropDownBox = ({ details, testCondition }) => {
  const { itemInView, handleMouseOut } = useGlobalContext();
  const { leftOffset } = itemInView;
  const { currentHeight, getNewHeight, contentRef } = useDropDown();

  // useEffect for changing height of links dropdown
  useEffect(() => {
    let detailsHeight = contentRef.current.getBoundingClientRect().height;
    getNewHeight(testCondition, detailsHeight);
  }, [testCondition, currentHeight]);

  return (
    <DropDownContainer
      height={currentHeight}
      onMouseLeave={handleMouseOut}
      offset={leftOffset}
    >
      <Contents details={details} contentRef={contentRef} />
    </DropDownContainer>
  );
};

DropDownBox.propTypes = {
  details: PropTypes.array,
  testCondition: PropTypes.bool,
};

export default DropDownBox;
