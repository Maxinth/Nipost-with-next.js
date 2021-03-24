import React from "react";
import { Section, Heading } from "./styled";
import PropTypes from "prop-types";
import { bgImg } from "./data";

const Banner = ({ text }) => {
  return (
    <Section image={bgImg}>
      <Heading>{text}</Heading>
    </Section>
  );
};

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
