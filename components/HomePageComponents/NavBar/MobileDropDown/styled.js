import styled from "styled-components";

const DropDownContainer = styled.section`
  transition: height 0.4s;
  /* height: 0px; */
  height: ${({ height }) => height && `${height}px`};
  background-color: rgb(190, 186, 186);
  width: 100%;
  overflow: hidden;
  border: 2px solid green;

  > div {
    padding: 1rem;
  }
  @media (min-width: 780px) {
    display: none;
  }
`;

export { DropDownContainer };
