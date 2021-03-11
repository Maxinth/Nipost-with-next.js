import React from "react";
import { PickUpBox, Header, Btn } from "./styled";

const PickUpServices = ({ show }) => {
  return (
    <PickUpBox showContents={show}>
      <Header> Pick Up Services </Header>
      <Header md as="h2">
        We Deliver in two hours
      </Header>
      <Btn>read more</Btn>
    </PickUpBox>
  );
};

export default PickUpServices;
