import React from "react";
import { OfficeSection, Heading, Text } from "./styled";
import Steps from "../Steps";
import { heading, details, stepsHeading } from "./data";

const OfficeBoxOnline = () => {
  return (
    <OfficeSection>
      <Heading>{heading}</Heading>
      <Text>{details}</Text>
      <Heading as="h5" sm>
        {stepsHeading}
      </Heading>
      <Steps />
    </OfficeSection>
  );
};

export default OfficeBoxOnline;
