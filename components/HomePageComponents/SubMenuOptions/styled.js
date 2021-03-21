import styled from "styled-components";

const MenusContainer = styled.section`
  background-color: rgb(21, 129, 157);
  padding: 0 2rem;
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-family: "Open Sans", sans-serif;
  transition: background-color 0.2s;
  cursor: pointer;
  > svg {
    color: #fff;
    font-size: 3rem;
  }

  :hover {
    background-color: rgb(42, 100, 150);
  }
`;
const Span = styled.span`
  text-transform: uppercase;
  color: #fff;
  text-align: center;
  display: inline-block;
  margin-top: 1rem;
`;
export { MenusContainer, MenuBox, Span };
