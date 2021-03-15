import React from "react";
import DropDownBox from "../DropDownBox";
import { aboutDetails } from "./data";
import { useGlobalContext } from "../../../../context";

export const AboutDropDown = () => {
  const { itemInView } = useGlobalContext();
  // home: false,
  //   aboutUs: false,
  //   services: false,
  //   media: false,
  //   quickTools: false,
  //   contact: false,
  //   searchIcon: false,

  const { aboutUs } = itemInView;

  return <DropDownBox details={aboutDetails} testCondition={aboutUs} />;
};
