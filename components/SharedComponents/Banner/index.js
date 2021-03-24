import React from "react";
import { Section, BannerImage, Heading } from "./styled";
import PropTypes from "prop-types";

const Banner = ({ text }) => {
  return (
    <Section>
      <BannerImage src="./busbanner.jpg" alt="banner" />
      <Heading>{text}</Heading>
    </Section>
  );
};

Banner.propTypes = {
  text: PropTypes.string,
};

export default Banner;
