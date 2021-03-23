import React from "react";
import { Section as Box, Heading } from "./styled";
import FooterList from "./FooterList";

const FooterBox = (props) => {
  const { heading, ...footerListProps } = props;
  return (
    <Box>
      <Heading>{heading}</Heading>
      <FooterList {...footerListProps} />
    </Box>
  );
};

export default FooterBox;
