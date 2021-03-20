import React from "react";
import { NewsContainer, Title } from "./styled";
import Controls from "./Controls";
import LatestNewsSlides from "./slides";
import { data } from "./slides/data";
import useSliderAndGetCurrentValues from "./slides/useSliderAndGetCurrentValues";
const LatestNews = () => {
  const {
    items,
    index,
    makeCurrentSlide,
    matchCurrentItem,
  } = useSliderAndGetCurrentValues(data);

  return (
    <NewsContainer>
      <Title>Latest News</Title>
      <LatestNewsSlides news={items} index={index} />
      <Controls />
    </NewsContainer>
  );
};

export default LatestNews;
