import React from "react";
import { Container, Image } from "./styled";
import RedirectBox from "./RedirectBox";
import { bgImg } from "./data";

const CustomErrorPage = () => {
  return (
    <Container>
      <Image src={bgImg} alt="error 404" />
      <RedirectBox />
    </Container>
  );
};

export default CustomErrorPage;
