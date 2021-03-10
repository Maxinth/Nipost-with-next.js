import styled from "styled-components";

const BannerContainer = styled.section`
  width: 100%;
  display: flex;
  position: relative;
`;
const BannerImage = styled.img`
  object-fit: contain;
  display: block;
  width: 100%;
  position: absolute;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.7s ease-in;
  /* opacity: 0; */
  opacity: ${({ match }) => (match === "current" ? 1 : 0)};

  // make visible ONLY when the position is "activeSlide"
  ${(props) =>
    props.position === "activeSlide" &&
    css`
      opacity: 1;
    `}
`;

export { BannerContainer, BannerImage };
