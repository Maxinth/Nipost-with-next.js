import React from "react";
import { Section, Heading } from "./styled";
import FooterList from "./FooterList";

const FooterBox = (props) => {
  const { heading, ...footerListProps } = props;
  return (
    <Section>
      <Heading>{heading}</Heading>
      <FooterList {...footerListProps} />
    </Section>
  );
};

export default FooterBox;
