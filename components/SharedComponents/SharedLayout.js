import React from "react";
import { Container } from "../CalculatorPageComps/styled";
import Banner from "./Banner";
import InPageNav from "./InPageNav";
import PropTypes from "prop-types";

const SharedLayout = ({ text, children }) => {
  return (
    <Container>
      <Banner text={text} />
      <InPageNav pageName={text} />
      {children}
    </Container>
  );
};

SharedLayout.propTypes = {
  text: PropTypes.string,
  children: PropTypes.object,
};

export default SharedLayout;
