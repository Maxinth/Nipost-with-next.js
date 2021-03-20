import React from "react";
import { ControlsBox, Span } from "./styled";
import { controlsData } from "./slides/data";

const Controls = ({ makeCurrentSlide, index }) => {
  return (
    <ControlsBox>
      {controlsData.map((item) => (
        <Span key={item.id} onClick={() => makeCurrentSlide(index + item.val)}>
          {item.icon}
        </Span>
      ))}
    </ControlsBox>
  );
};

export default Controls;
