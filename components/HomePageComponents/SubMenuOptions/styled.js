import styled from "styled-components";

const Container = styled.section`
  background-color: rgb(245, 245, 245);
  padding-top: 2rem;
  /* background-color: rgb(21, 129, 157); */
`;
const MenusContainer = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 2rem;
  background-color: rgb(21, 129, 157);
  @media (min-width: 320px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (min-width: 531px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media (min-width: 801px) {
    /* grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
     */
    display: flex;
    flex-wrap: wrap;
    > * {
      flex: 1;
    }
  }
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
export { MenusContainer, MenuBox, Span, Container };
