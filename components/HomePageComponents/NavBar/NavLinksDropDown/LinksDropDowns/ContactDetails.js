import React from "react";
import DropDownBox from "../DropDownBox";
import { contactDetails } from "./data";

export const ContactDetails = () => {
  return <DropDownBox details={contactDetails} />;
};
