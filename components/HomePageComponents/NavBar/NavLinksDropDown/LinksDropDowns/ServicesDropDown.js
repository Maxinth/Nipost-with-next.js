import React from "react";
import DropDownBox from "../DropDownBox";
import { servicesDetails } from "./data";

export const ServicesDropDown = () => {
  return <DropDownBox details={servicesDetails} />;
};
