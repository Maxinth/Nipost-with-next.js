import React from "react";
import { data } from "./data";
import { DetailsBox } from "./styled";
import DetailsListItem from "./DetailsListItem";

const Details = () => {
  return (
    <DetailsBox>
      {data.map((item, index) => (
        <DetailsListItem key={index} item={item} />
      ))}
    </DetailsBox>
  );
};

export default Details;
