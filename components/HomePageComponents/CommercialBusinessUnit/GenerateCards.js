import React from "react";
import CbuCard from "./CbuCard";
import { CardsContainer } from "./styled";
import { data } from "./data";

const GenerateCards = () => {
  return (
    <CardsContainer>
      {data.map((item, index) => (
        <CbuCard key={index} {...item} index={index} />
      ))}
    </CardsContainer>
  );
};

export default GenerateCards;
