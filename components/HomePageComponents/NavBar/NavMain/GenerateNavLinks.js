import React from "react";
import Link from "next/link";
import { BaseLink } from "./styled";
import { data } from "./data";
import { useGlobalContext } from "../../../context";

const GenerateNavLinks = () => {
  const { handleHover } = useGlobalContext();
  return (
    <>
      {data.map((item, index) => (
        <Link href={item.goTo} key={index}>
          <BaseLink onMouseEnter={() => handleHover(item.id)}>
            {item.linkText}
          </BaseLink>
        </Link>
      ))}
    </>
  );
};

export default GenerateNavLinks;
