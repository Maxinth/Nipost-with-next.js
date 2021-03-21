import React from "react";
import { data } from "./data";
import MenuOptions from "./MenuOptions";
import { MenusContainer } from "./styled";

const GenerateMenuOptions = () => {
  return (
    <MenusContainer>
      {data.map((item, index) => (
        <MenuOptions key={index} {...item} />
      ))}
    </MenusContainer>
  );
};

export default GenerateMenuOptions;
