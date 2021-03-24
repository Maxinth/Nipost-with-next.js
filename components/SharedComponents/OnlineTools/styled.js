import styled from "styled-components";

const Container = styled.section`
  border: 1px solid rgb(212, 211, 211);
  border-radius: 5px;
  margin: 1rem 2rem;
  font-family: "Open Sans", sans-serif;
`;

const TopBox = styled.div`
  padding: 1rem;
  text-transform: uppercase;
  border-bottom: 1px solid rgb(212, 211, 211);
  color: rgb(105, 105, 105);
`;

const ListContainer = styled.ul`
  padding: 1rem 0.5rem;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  > svg {
    font-size: 0.8rem;
    color: rgb(105, 105, 105);
    margin-right: 0.5rem;
  }
`;
const Span = styled.span`
  font-size: 0.9rem;
  text-transform: capitalize;
  cursor: pointer;
  transition: font-size 0.2s;

  @media (min-width: 768px) {
    font-size: 0.7rem;
  }
`;

export { Span, ListItem, ListContainer, TopBox, Container };
