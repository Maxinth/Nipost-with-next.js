import React from "react";
import { data } from "./data";
import DropListItem from "./DropListItem";

const GenerateDropListItems = () => {
  return (
    <>
      {data.map((item, index) => (
        <DropListItem key={index} {...item} />
      ))}
    </>
  );
};

export default GenerateDropListItems;
