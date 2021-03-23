import styled from "styled-components";

const Container = styled.footer`
  background-color: rgb(102, 102, 102);
  font-family: "Open Sans", sans-serif;
  padding: 3rem 1rem;
`;

const Heading = styled.h6`
  color: #fff;
  font-size: 1.5rem;
`;
const Section = styled.section``;
const ListContainer = styled.ul`
  margin: 1rem 0;
`;
const ListItem = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 0.5rem 0;
  transition: all 0.2s;
  text-decoration-color: transparent;
  > svg {
    font-size: 0.7rem;
    color: #fff;
    margin-right: 1rem;
  }

  :hover {
    text-decoration: underline;
    text-decoration-color: #fff;
  }
`;
const Span = styled.span`
  color: rgb(208, 207, 207);
  text-transform: capitalize;
  font-size: 0.8rem;
`;

export { ListItem, Span, Container, Section, Heading, ListContainer };
