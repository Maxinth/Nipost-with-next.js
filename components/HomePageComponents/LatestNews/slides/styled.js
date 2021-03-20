import styled, { css } from "styled-components";

const SlidesContainer = styled.section`
  background-color: #fff;
  padding: 1.2rem;
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  text-align: center;
`;

const NewsBox = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 2s ease-in-out;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  ${(props) =>
    props.position === "activeSlide" &&
    css`
      opacity: 1;
      transform: translateX(0%);
    `}

  ${(props) =>
    props.position === "lastSlide" &&
    css`
      transform: translateX(-100%);
    `}

    
${(props) =>
    props.position === "nextSlide" &&
    css`
      transform: translateX(100%);
    `} /* padding: 1rem; */
`;

export { SlidesContainer, NewsBox };
