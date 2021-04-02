import React from "react";
import { DropDownContainer } from "./styled";
import GenerateDropListItems from "./GenerateDropListItems";
import { useGlobalContext } from "../../../context";
import TransitionChildHeight from "./TransitionChildHeight";

const MobileDropDown = () => {
  const { isClicked } = useGlobalContext();

  return (
    <TransitionChildHeight condition={isClicked} ParentBox={DropDownContainer}>
      <GenerateDropListItems />
    </TransitionChildHeight>
  );
};

export default MobileDropDown;
