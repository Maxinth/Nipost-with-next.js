import React from "react";
import News from "./News";
import { itemPosition } from "./useSliderAndGetCurrentValues";
import PropTypes from "prop-types";

const GenerateNews = ({ data, index }) => {
  return (
    <>
      {data.map((item, itemIndex) => {
        let slidePosition = itemPosition(index, itemIndex, data);
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
