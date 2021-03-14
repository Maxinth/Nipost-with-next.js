import React from "react";
import { Container } from "./styled";
import DropHeading from "../DropDownHeading";
import Details from "./Details";

const OnlineTools = () => {
  return (
    <Container>
      <DropHeading text="online tools" />
      <Details />
    </Container>
  );
};

export default OnlineTools;
