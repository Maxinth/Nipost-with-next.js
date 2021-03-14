import React from "react";
import DropHeading from "../DropDownHeading";
import { Container } from "./styled";
import NavigationDetails from "./NavigationDetails";

const Navigation = () => {
  return (
    <Container>
      <DropHeading text="navigation" />
      <NavigationDetails />
    </Container>
  );
};

export default Navigation;
