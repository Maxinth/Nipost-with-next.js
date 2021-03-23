import styled from "styled-components";

const Container = styled.section`
  background-color: rgb(238, 238, 238);
  padding: 2rem 0;
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
  transition: font-size 0.2;
  @media (min-width: 900px) {
    font-size: 2rem;
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;

  object-fit: contain;
  transition: opacity 0.2;
`;

const CardTitle = styled.span`
  margin: 1rem 0;
  text-transform: capitalize;
  text-align: center;
`;
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 1rem;
  box-shadow: 1px 2px 4px grey;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;
  > * {
    flex: 1;
  }
  ${CardImage} {
    opacity: 0.7;
  }
  max-width: 400px;
  :hover {
    transform: scale(1.02);
    background-color: rgb(243, 192, 66);
    ${CardImage} {
      opacity: 1;
    }
  }

  @media (min-width: 674px) {
    margin-bottom: unset;
  }
`;

const CardsContainer = styled.section`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 625px) {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  @media (min-width: 674px) {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
export { Container, Title, CardBox, CardImage, CardTitle, CardsContainer };
