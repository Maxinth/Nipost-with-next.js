import React from "react";
import { Time, Text } from "./styled";

const AutoRedirect = ({ redirectTime }) => {
  return (
    <Text>
      auto redirecting
      <Time>{redirectTime}</Time>
    </Text>
  );
};

export default AutoRedirect;
