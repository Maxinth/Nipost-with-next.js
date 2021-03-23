import React from "react";
import { Section as Box, Heading } from "./styled";
import FooterList from "./FooterList";
import FooterSocialIcons from "./FooterSocialIcons";

const FooterBox = (props) => {
  const { heading, ...footerListProps } = props;
  return (
    <Box>
      <Heading>{heading}</Heading>
      <FooterList {...footerListProps} />
      <FooterSocialIcons heading={heading} />
    </Box>
  );
};

export default FooterBox;
