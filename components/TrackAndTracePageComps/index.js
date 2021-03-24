import React from "react";
import { Container } from "../CalculatorPageComps/styled";
import Banner from "../SharedComponents/Banner";
import InPageNav from "../SharedComponents/InPageNav";
import PropTypes from "prop-types";

const TrackAndTracePage = ({ text }) => {
  return (
    <Container>
      <Banner text={text} />
      <InPageNav pageName={text} />
    </Container>
  );
};

TrackAndTracePage.propTypes = {
  text: PropTypes.string,
};

export default TrackAndTracePage;
