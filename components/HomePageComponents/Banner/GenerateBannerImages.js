import React from "react";
import PropTypes from "prop-types";
import { BannerImage, Box } from "./styled";
// import PickUpServices from "./PickUpServices";

const GenerateBannerImages = ({
  data,
  index,
  matchCurrentItem,
  itemPosition,
}) => {
  return (
    <>
      {data.map((item, itemIndex) => (
        <Box key={itemIndex}>
          <BannerImage
            src={item}
            alt="Nipost Banner"
            match={matchCurrentItem(itemIndex)}
            position={itemPosition(index, itemIndex, data)}
          />
          {/* {<PickUpServices show={itemIndex === 0} />} */}
        </Box>
      ))}
    </>
  );
};

GenerateBannerImages.propTypes = {
  data: PropTypes.array,
};
export default GenerateBannerImages;
