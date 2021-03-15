import styled, { css } from "styled-components";

const DropDownContainer = styled.section`
  background-color: rgb(243, 192, 66);
  display: flex;
  position: absolute;
  top: 100px;
  z-index: 300;
  /* padding: 1rem 0.5rem 1rem 1rem; */
  padding: 0.2rem 1rem 2rem 1rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 1px 3px 6px #333;
  max-width: 700px;

  /* ${({ offset }) =>
    offset &&
    css`
      @media (max-width: 1200px) {
        left: 0px !important;
      }
      @media (max-width: 1200px) {
        left: ${offset}px !important;
      }
    `} */
`;

export { DropDownContainer };
