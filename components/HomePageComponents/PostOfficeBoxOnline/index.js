import React from "react";
import { Section } from "./styled";
import LetterBox from "./LetterBox";
import OfficeBoxOnline from "./OfficeBoxOnline";

const PostOfficeBoxOnline = () => {
  return (
    <Section>
      <LetterBox />
      <OfficeBoxOnline />
    </Section>
  );
};

export default PostOfficeBoxOnline;
