import React from "react";
import { data } from "./data";
import FooterBox from "./FooterBox";

const GenerateFooterBoxes = () => {
  return (
    <>
      {data.map((item) => (
        <FooterBox key={item.heading} {...item} />
      ))}
    </>
  );
};

export default GenerateFooterBoxes;
