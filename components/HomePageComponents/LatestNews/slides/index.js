import React from "react";
import { SlidesContainer } from "./styled";
import GenerateNews from "./GenerateNews";
import PropTypes from "prop-types";

const LatestNewsSlides = ({ news, index }) => {
  return (
    <SlidesContainer>
      <GenerateNews data={news} index={index} />
    </SlidesContainer>
  );
};

LatestNewsSlides.propTypes = {
  news: PropTypes.array,
  index: PropTypes.number,
};

export default LatestNewsSlides;
