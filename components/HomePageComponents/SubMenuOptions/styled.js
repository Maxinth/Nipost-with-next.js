import styled from "styled-components";

const Container = styled.section`
  background-color: rgb(245, 245, 245);
  padding-top: 1rem;
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
    align-items: center;
    /* justify-content: flex-start; */
    flex-wrap: wrap;
    > * {
      flex: 1;
    }
  }

  @media (min-width: 500px) {
    max-width: unset;
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
  width: 100%;
  height: 100%;
  /* max-width: 300px; */

  cursor: pointer;
  > svg {
    color: #fff;
    font-size: 3rem;

    @media (min-width: 500px) {
      font-size: 2.5rem;
    }
    @media (min-width: 531px) {
      max-width: 200px;
    }
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
  font-weight: 700;
  @media (min-width: 500px) {
    font-size: 0.8rem;
  }
`;
export { MenusContainer, MenuBox, Span, Container };
