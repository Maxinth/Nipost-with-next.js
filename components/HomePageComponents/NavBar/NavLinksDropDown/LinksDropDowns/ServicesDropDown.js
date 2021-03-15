import React from "react";
import DropDownBox from "../DropDownBox";
import { servicesDetails } from "./data";
import { useGlobalContext } from "../../../../context";

export const ServicesDropDown = () => {
  const { itemInView } = useGlobalContext();
  const { services } = itemInView;

  return <DropDownBox details={servicesDetails} testCondition={services} />;
};
