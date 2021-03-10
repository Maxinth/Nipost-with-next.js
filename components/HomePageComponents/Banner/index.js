import React from "react";
import styled from "styled-components";

const BannerContainer = styled.section`
  width: 100%;
`;
const BannerImage = styled.img`
  object-fit: contain;
  display: block;
  width: 100%;
`;

const HomeBanner = () => {
  return (
    <BannerContainer>
      <BannerImage src="/homeBanner/13.jpg" alt="Nipost Banner" />
    </BannerContainer>
  );
};

export default HomeBanner;
