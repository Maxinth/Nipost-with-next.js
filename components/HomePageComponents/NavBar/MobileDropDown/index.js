import React, { useEffect } from "react";
import { DropDownContainer, ContentBox } from "./styled";
import useDropDown from "../../../useDropDown";
import GenerateDropListItems from "./GenerateDropListItems";
import { useGlobalContext } from "../../../context";

const MobileDropDown = () => {
  const {
    currentHeight,
    contentRef,
    getNewHeight,
    getChildDetailsHeight,
  } = useDropDown();

  const { isClicked } = useGlobalContext();

  // useEffect for changing height of mobileMenu
  useEffect(() => {
    let detailsHeight = contentRef.current.getBoundingClientRect().height;
    getNewHeight(isClicked, detailsHeight);
  }, [isClicked, currentHeight]);

  return (
    <DropDownContainer height={currentHeight}>
      <ContentBox ref={contentRef}>
        <GenerateDropListItems getChildDetailsHeight={getChildDetailsHeight} />
      </ContentBox>
    </DropDownContainer>
  );
};

export default MobileDropDown;
