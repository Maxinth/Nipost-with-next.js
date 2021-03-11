import React from "react";
import PropTypes from "prop-types";
import { BannerImage } from "./styled";
// import PickUpServices from "./PickUpServices";
// import { showForIndexBanner } from "./data";

const GenerateBannerImages = ({
  data,
  index,
  matchCurrentItem,
  itemPosition,
}) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <div key={itemIndex}>
          <BannerImage
            src={item}
            alt="Nipost Banner"
            match={matchCurrentItem(itemIndex)}
            position={itemPosition(index, itemIndex, data)}
          />
          {/* {<PickUpServices show={itemIndex === 0} />} */}
        </div>
      ))}
    </>
  );
};

GenerateBannerImages.propTypes = {
  data: PropTypes.array,
};
export default GenerateBannerImages;
