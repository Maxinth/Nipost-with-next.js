import React from "react";
import { Container } from "./styled";
import Stamps from "./Stamps";
import StampsImage from "../PostOfficeBoxOnline/LetterBox";

const PostageStamps = () => {
  return (
    <Container>
      <Stamps />
      <StampsImage src="./stamps0000.gif" alt="stamps" />
    </Container>
  );
};

export default PostageStamps;
