import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import Link from "next/link";
import { Anchor } from "./styled";

const HomeLink = () => {
  return (
    <Link href="/">
      <Anchor>
        <HomeIcon />
      </Anchor>
    </Link>
  );
};

export default HomeLink;
