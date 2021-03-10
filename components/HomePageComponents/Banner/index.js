import React from "react";
import { data, matchAndMakeCurrent } from "./data";
import useSliderAndGetCurrentValues, {
  itemPosition,
} from "../../useSliderAndGetCurrentValues";
import GenerateBannerImages from "./GenerateBannerImages";
import { BannerContainer } from "./styled";
import CircleControls from "../slideControls/CircleControls";

const HomeBanner = () => {
  const { items, index, makeCurrentSlide } = useSliderAndGetCurrentValues(data);
  const { matchCurrentItem } = matchAndMakeCurrent(index, makeCurrentSlide);
  return (
    <BannerContainer>
      <GenerateBannerImages
        data={items}
        currentIndex={index}
        matchCurrentItem={matchCurrentItem}
        itemPosition={itemPosition}
      />
      <CircleControls
        data={items}
        setIndex={makeCurrentSlide}
        currentItem={matchCurrentItem}
      />
    </BannerContainer>
  );
};

export default HomeBanner;
