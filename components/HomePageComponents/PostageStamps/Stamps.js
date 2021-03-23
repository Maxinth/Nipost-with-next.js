import React from "react";
import { StampBox, Heading, StampText } from "./styled";
import StampBtn from "../PostOfficeBoxOnline/Steps/GetPostOffice";
import { title, text } from "./data";

const Stamps = () => {
  return (
    <StampBox>
      <Heading>{title}</Heading>
      <StampText>{text}</StampText>
      <StampBtn text="locations" />
    </StampBox>
  );
};

export default Stamps;
