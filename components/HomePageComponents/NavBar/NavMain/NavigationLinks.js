import React from "react";
import Link from "next/link";
import { LinksContainer, BaseLink } from "./styled";
import { data } from "./data";

const NavigationLinks = () => {
  return (
    <LinksContainer>
      {data.map((item, index) => (
        <Link href={item.goTo} key={index}>
          <BaseLink>{item.linkText}</BaseLink>
        </Link>
      ))}
    </LinksContainer>
  );
};

export default NavigationLinks;
