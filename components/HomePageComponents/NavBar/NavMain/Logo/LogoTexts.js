import React from "react";
import { Box, LogoText } from "./styled";
import { data } from "./data";

const LogoTexts = () => {
  return (
    <Box>
      {data.map((item, index) => (
        <LogoText key={index}>{item}</LogoText>
      ))}
    </Box>
  );
};

export default LogoTexts;
