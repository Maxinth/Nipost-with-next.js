import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ControlsBox, Span } from "./styled";

const Controls = ({ makeCurrentSlide, index }) => {
  return (
    <ControlsBox>
      <Span onClick={() => makeCurrentSlide(index + 1)}>
        <ChevronLeftIcon />
      </Span>
      <Span onClick={() => makeCurrentSlide(index - 1)}>
        <ChevronRightIcon />
      </Span>
    </ControlsBox>
  );
};

export default Controls;
