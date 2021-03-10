import React from "react";
import PropTypes from "prop-types";
import { BannerImage } from "./styled";

const GenerateBannerImages = ({
  data,
  index,
  matchCurrentItem,
  itemPosition,
}) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <BannerImage
          src={item}
          alt="Nipost Banner"
          key={itemIndex}
          match={matchCurrentItem(itemIndex)}
          position={itemPosition(index, itemIndex, data)}
        />
      ))}
    </>
  );
};

GenerateBannerImages.propTypes = {
  data: PropTypes.array,
};
export default GenerateBannerImages;
