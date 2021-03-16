import styled, { css } from "styled-components";

const DropDownContainer = styled.section`
  background-color: rgb(243, 192, 66);
  position: absolute;
  top: 119px;
  z-index: 300;
  transition: all 0.2s, height 1s;
  /* padding: 0.2rem 1rem 2rem 1rem; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 1px 3px 6px #333;
  max-width: 700px;
  overflow: hidden;
  height: ${({ height }) => height && `${height}px`};

  @media (max-width: 815px) {
    display: none;
  }
  @media (min-width: 815px) {
    top: 100px;
  }
  ${({ offset }) =>
    offset &&
    css`
      @media (max-width: 817px) {
        left: ${offset - 250}px;
      }
      @media (max-width: 1350px) {
        left: ${offset - 200}px;
      }
      @media (min-width: 1350px) {
        left: ${offset}px;
      }
    `}
`;

const Box = styled.div`
  display: flex;
  width: 100%;
  padding: 0.2rem 1rem 2rem 1rem;
`;

export { DropDownContainer, Box };
