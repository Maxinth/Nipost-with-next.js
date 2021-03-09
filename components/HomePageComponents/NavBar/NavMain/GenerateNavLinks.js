import React from "react";
import Link from "next/link";
import { BaseLink } from "./styled";
import { data } from "./data";

const GenerateNavLinks = () => {
  return (
    <>
      {data.map((item, index) => (
        <Link href={item.goTo} key={index}>
          <BaseLink>{item.linkText}</BaseLink>
        </Link>
      ))}
    </>
  );
};

export default GenerateNavLinks;
