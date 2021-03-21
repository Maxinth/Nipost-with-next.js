import React from "react";
import CbuCard from "./CbuCard";
import { Container, Title, CardsContainer } from "./styled";

const CommercialBusinessUnit = () => {
  return (
    <Container>
      <Title>Commercial Business Unit</Title>
      <CardsContainer>
        <CbuCard />
      </CardsContainer>
    </Container>
  );
};

export default CommercialBusinessUnit;
