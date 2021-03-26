import React from "react";
import { Container, HomeRedirectBox, Image, Anchor } from "./styled";
import Link from "next/link";

const bgImg = "/lego404.png";
const CustomErrorPage = () => {
  return (
    <Container>
      <Image src={bgImg} alt="error 404" />
      <HomeRedirectBox>
        <Link href="/">
          <Anchor>Go back to home page</Anchor>
        </Link>
      </HomeRedirectBox>
    </Container>
  );
};

export default CustomErrorPage;
