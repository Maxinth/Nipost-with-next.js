import React from "react";
import { data } from "./data";
import { Span, TabBox, TabSection } from "./styled";

const GenerateTabTitles = () => {
  return (
    <TabSection>
      {data.map((item, index) => (
        <TabBox key={index}>
          {item.icon} <Span>{item.title}</Span>
        </TabBox>
      ))}
    </TabSection>
  );
};

export default GenerateTabTitles;
