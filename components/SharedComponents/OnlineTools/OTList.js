import React from "react";
import { ListContainer } from "./styled";
import OTListItem from "./OTListItem";
import { data } from "./data";

const OTList = () => {
  return (
    <ListContainer>
      {data.map((item, index) => (
        <OTListItem key={index} item={item} />
      ))}
    </ListContainer>
  );
};

export default OTList;
