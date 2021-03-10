import React from "react";
import { DropDownContainer, ContentBox } from "./styled";
import useDropDown from "../../../useDropDown";
import DropListItem from "./DropListItem";
import { data } from "./data";

const MobileDropDown = () => {
  const { currentHeight, contentRef, setCurrentHeight } = useDropDown();

  return (
    <DropDownContainer height={currentHeight}>
      <ContentBox ref={contentRef}>
        {data.map((item, index) => (
          <DropListItem key={index} {...item} />
        ))}
      </ContentBox>
    </DropDownContainer>
  );
};

export default MobileDropDown;
