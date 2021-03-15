import styled from "styled-components";

const DropDownContainer = styled.section`
  background-color: rgb(243, 192, 66);
  display: flex;
  position: absolute;
  top: 105px;
  z-index: 300;
  /* padding: 1rem 0.5rem 1rem 1rem; */
  padding: 0.2rem 1rem 2rem 1rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  box-shadow: 1px 3px 6px #333;
  max-width: 700px;
`;

export { DropDownContainer };
