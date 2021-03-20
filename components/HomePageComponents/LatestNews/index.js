import React from "react";
import { NewsContainer, Title } from "./styled";
import Controls from "./Controls";
import LatestNewsSlides from "./slides";
const LatestNews = () => {
  return (
    <NewsContainer>
      <Title>Latest News</Title>
      <LatestNewsSlides />
      <Controls />
    </NewsContainer>
  );
};

export default LatestNews;
