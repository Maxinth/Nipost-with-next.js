import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { ListItem, ListContainer, TopBox, Span, Container } from "./styled";
const OnlineTools = () => {
  return (
    <Container>
      <TopBox>Online Tools</TopBox>
      <ListContainer>
        <ListItem>
          <ArrowForwardIcon /> <Span>Track And Trace</Span>
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default OnlineTools;
