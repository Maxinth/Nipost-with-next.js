import React from "react";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { ControlsBox, Span } from "./styled";

const Controls = () => {
  return (
    <ControlsBox>
      <Span>
        <ChevronLeftIcon />
      </Span>
      <Span>
        <ChevronRightIcon />
      </Span>
    </ControlsBox>
  );
};

export default Controls;
