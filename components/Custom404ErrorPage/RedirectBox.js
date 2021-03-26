import React from "react";
import Link from "next/link";
import { HomeRedirectBox, Anchor } from "./styled";

const RedirectBox = () => {
  return (
    <HomeRedirectBox>
      <Link href="/">
        <Anchor>Go back to home page</Anchor>
      </Link>
    </HomeRedirectBox>
  );
};

export default RedirectBox;
