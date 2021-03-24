import React from "react";
import Banner from "../SharedComponents/Banner";
import { Container } from "./styled";
import PropTypes from "prop-types";
import InPageNav from "../SharedComponents/InPageNav";
import CalculatorSection from "./CalculatorSection";

const CalculatorPage = ({ text }) => {
  return (
    <Container>
      <Banner text={text} />
      <InPageNav pageName={text} />
      <CalculatorSection />
    </Container>
  );
};

CalculatorPage.propTypes = {
  text: PropTypes.string,
};

export default CalculatorPage;
