import React from "react";
import Banner from "../SharedComponents/Banner";
import { Container } from "./styled";
import PropTypes from "prop-types";
import InPageNav from "../SharedComponents/InPageNav";

const CalculatorPage = ({ text }) => {
  return (
    <Container>
      <Banner text={text} />
      <InPageNav pageName={text} />
    </Container>
  );
};

CalculatorPage.propTypes = {
  text: PropTypes.string,
};

export default CalculatorPage;
