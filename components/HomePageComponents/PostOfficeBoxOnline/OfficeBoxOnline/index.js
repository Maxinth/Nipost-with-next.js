import React from "react";
import { OfficeSection, Heading, Text } from "./styled";
import Steps from "../Steps";
const OfficeBoxOnline = () => {
  return (
    <OfficeSection>
      <Heading>POST OFFICE BOX ONLINE</Heading>
      <Text>
        Getting your post office box is a lot easy now. Your can now complete
        your application online and your are assigned a post office box after
        completion of the application process.
      </Text>
      <Heading as="h5" sm>
        STEPS FOR POST OFFICE BOX ONLINE APPLICATION
      </Heading>
      <Steps />
    </OfficeSection>
  );
};

export default OfficeBoxOnline;
