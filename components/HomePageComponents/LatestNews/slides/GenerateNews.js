import React from "react";
import News from "./News";
import { data } from "./data";

const GenerateNews = () => {
  return (
    <>
      {data.map((item, index) => (
        <News key={index} newsHeadLine={item} />
      ))}
    </>
  );
};

export default GenerateNews;
