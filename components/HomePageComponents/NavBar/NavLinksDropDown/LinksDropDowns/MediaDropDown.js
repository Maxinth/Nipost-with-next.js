import React from "react";
import DropDownBox from "../DropDownBox";
import { mediaDetails } from "./data";
import { useGlobalContext } from "../../../../context";

export const MediaDropDown = () => {
  const { itemInView } = useGlobalContext();
  const { media } = itemInView;

  return <DropDownBox details={mediaDetails} testCondition={media} />;
};
