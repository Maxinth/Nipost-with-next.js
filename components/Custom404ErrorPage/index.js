import React from "react";
import { Container, Image } from "./styled";
import RedirectBox from "./RedirectBox";
import { bgImg } from "./data";
import PropTypes from "prop-types";

const CustomErrorPage = ({ countDown }) => {
  const redirectTime = countDown === 1 ? "now" : `in ${countDown} seconds`;
  return (
    <Container>
      <Image src={bgImg} alt="error 404" />
      <RedirectBox />
      auto redirecting {redirectTime}
    </Container>
  );
};

CustomErrorPage.propTypes = {
  countDown: PropTypes.number,
};
export default CustomErrorPage;
