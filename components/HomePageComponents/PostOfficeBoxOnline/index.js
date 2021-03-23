import React from "react";
import { Section } from "./styled";
import LetterBox from "./LetterBox";
import OfficeBoxOnline from "./OfficeBoxOnline";

const PostOfficeBoxOnline = () => {
  return (
    <Section>
      <LetterBox src="/letterbox.gif" alt="letterbox" />
      <OfficeBoxOnline />
    </Section>
  );
};

export default PostOfficeBoxOnline;
