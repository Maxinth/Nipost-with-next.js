import React from "react";
import InputBox from "../../InputBox";
import { CalcBox, Button } from "./styled";

const CalcInput = () => {
  return (
    <CalcBox reverse>
      <InputBox text="Enter Weight" />
      <Button>Kg</Button>
    </CalcBox>
  );
};

export default CalcInput;
