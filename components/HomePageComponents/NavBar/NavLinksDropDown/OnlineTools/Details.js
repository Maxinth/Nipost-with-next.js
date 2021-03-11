import React from "react";
import { data } from "./data";
import { DetailsBox, Span, DetailsItem } from "./styled";

const Details = () => {
  return (
    <DetailsBox>
      {data.map((item, index) => (
        <DetailsItem key={index}>
          {item.icon} <Span>{item.text}</Span>
        </DetailsItem>
      ))}
    </DetailsBox>
  );
};

export default Details;
