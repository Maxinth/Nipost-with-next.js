import React from "react";
import News from "./News";
import { getSlidePosition } from "./useSlider";
import PropTypes from "prop-types";

const GenerateNews = ({ data, index }) => {
  return (
    <>
      {data.map((item, itemIndex) => {
        let slidePosition = getSlidePosition(index, itemIndex, data);
        return (
          <News key={itemIndex} newsHeadLine={item} position={slidePosition} />
        );
      })}
    </>
  );
};

GenerateNews.propTypes = {
  data: PropTypes.array,
  index: PropTypes.number,
};
export default GenerateNews;
