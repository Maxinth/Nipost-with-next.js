import React from "react";
import { data } from "./data";
import { IconContainer, IconsContainer } from "./styled";

const SocialIcons = () => {
  return (
    <IconsContainer>
      {data.map((item, index) => (
        <IconContainer key={index} color={item.color}>
          {item.icon}
        </IconContainer>
      ))}
    </IconsContainer>
  );
};

export default SocialIcons;
