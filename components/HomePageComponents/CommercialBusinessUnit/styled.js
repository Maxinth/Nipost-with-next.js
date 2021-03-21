import styled from "styled-components";

const Container = styled.section`
  background-color: rgb(238, 238, 238);
  padding: 2rem 0;
  font-family: "Open Sans", sans-serif;
`;

const Title = styled.h1`
  text-align: center;
  width: 100%;
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  min-height: 40px;
  object-fit: contain;
`;

const CardTitle = styled.span`
  margin: 1rem 0;
  text-transform: capitalize;
`;
const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  box-shadow: 1px 2px 4px grey;
  border-radius: 5px;
`;

const CardsContainer = styled.section`
  padding: 2rem;
`;
export { Container, Title, CardBox, CardImage, CardTitle, CardsContainer };
