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
  transition: all 0.8s ease-in-out, color 0.2s;
  /* transition: all 2s ease-in-out, color 0.2s; */
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  font-family: "Raleway", sans-serif;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.7rem;
  @media (min-width: 648px) {
    font-size: 0.8rem;
  }
  @media (min-width: 700px) {
    font-size: 0.9rem;
  }
  @media (min-width: 800px) {
    font-size: 0.95rem;
  }

  ${(props) =>
    props.position === "activeSlide" &&
    css`
      opacity: 1;
      /* transform: translateX(0%); */
      transform: translateY(0%);
    `}

  ${(props) =>
    props.position === "lastSlide" &&
    css`
      // make slide drop to the bottom after sliding in from left
      transform: translateX(-100%);
      /* transform: translateY(-100%); */
    `}

    
${(props) =>
    props.position === "nextSlide" &&
    css`
      /* transform: translateX(100%); */
      transform: translateY(100%);
    `}

    :hover {
    color: rgb(21, 129, 157);
  }
`;

export { SlidesContainer, NewsBox };
