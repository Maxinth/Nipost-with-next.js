import React from "react";
import DropDownBox from "../DropDownBox";
import { contactDetails } from "./data";
import { useGlobalContext } from "../../../../context";

export const ContactDetails = () => {
  const { itemInView } = useGlobalContext();
  const { contact } = itemInView;
  return <DropDownBox details={contactDetails} testCondition={contact} />;
};
