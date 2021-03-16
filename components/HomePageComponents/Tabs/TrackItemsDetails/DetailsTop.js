import React from "react";
import InputBox from "../InputBox";
import { Box } from "./styled";
import Btn from "../Btn";

const DetailsTop = () => {
  return (
    <Box>
      <InputBox text="Enter International tracking id" />
      <Btn text="track" />
    </Box>
  );
};

export default DetailsTop;
