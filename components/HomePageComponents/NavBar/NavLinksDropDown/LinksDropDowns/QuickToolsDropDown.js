import React from "react";
import DropDownBox from "../DropDownBox";
import { quickToolsDetails } from "./data";
import { useGlobalContext } from "../../../../context";

export const QuickToolsDropDown = () => {
  const { itemInView } = useGlobalContext();
  const { quickTools } = itemInView;

  return <DropDownBox details={quickToolsDetails} testCondition={quickTools} />;
};
