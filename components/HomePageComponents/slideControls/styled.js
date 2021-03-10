import styled from "styled-components";

const ControlsContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  transition: margin-top 0.2s;
  position: absolute;
  bottom: -60px;
  right: 100px;
  left: 100px;
  transition: bottom 0.2s;
  svg {
    color: rgb(0, 0, 0);
    transition: color 0.2s;
    border: 1px solid transparent;
  }
  svg.current {
    color: yellow;
  }
  @media (min-width: 300px) {
    bottom: -60px;
  }
  @media (min-width: 400px) {
    bottom: calc(-60px - 2vw);
  }
  @media (min-width: 500px) {
    bottom: calc(-60px - 15vw);
  }

  @media (min-width: 700px) {
    bottom: calc(-60px - 18vw);
  }
  @media (min-width: 900px) {
    bottom: -230px;
  }
  @media (min-width: 950px) {
    bottom: calc(-230px - 2vw);
  }
  @media (min-width: 1000px) {
    bottom: calc(-230px - 4vw);
  }
  @media (min-width: 1100px) {
    bottom: calc(-230px - 6vw);
  }
  @media (min-width: 1200px) {
    bottom: calc(-230px - 8vw);
  }
`;

export { ControlsContainer };
