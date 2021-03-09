import React from "react";
import { Link } from "next/link";
import { LinksContainer } from "./styled";

const NavLinks = () => {
  return (
    <LinksContainer>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/">
        <a>about us</a>
      </Link>
      <Link href="/">
        <a>contact</a>
      </Link>
    </LinksContainer>
  );
};

export default NavLinks;
