import React, { useEffect } from "react";
import useDropDown from "../../../../../useDropDown";
import { useGlobalContext } from "../../../../../context";
import { DropDownContainer } from "./styled";
import Contents from "./Contents";

export const SearchDropDown = () => {
  const { itemInView, handleMouseOut } = useGlobalContext();
  const { leftOffset, searchIcon } = itemInView;
  const { currentHeight, getNewHeight, contentRef } = useDropDown();

  //   useEffect for changing height of search dropdown
  useEffect(() => {
    let detailsHeight = contentRef.current.getBoundingClientRect().height;
    getNewHeight(searchIcon, detailsHeight);
  }, [searchIcon, currentHeight]);

  return (
    <DropDownContainer
      search
      height={currentHeight}
      onMouseLeave={handleMouseOut}
      offset={leftOffset}
    >
      <Contents contentRef={contentRef} />
    </DropDownContainer>
  );
};
