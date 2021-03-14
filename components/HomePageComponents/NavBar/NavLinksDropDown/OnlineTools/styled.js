import styled from "styled-components";

const Container = styled.div`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "lucida_sans_unicoderegular", Geneva, Verdana, sans-serif;
`;
const DetailsBox = styled.ul`
  font-family: inherit;
`;
const Span = styled.span``;
const DetailsItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  color: black;
  padding: 0.5rem 1rem;
  /* font-size: 0.7rem; */
  text-transform: capitalize;
  > svg {
    font-size: 2.5rem;
    margin-right: 0.5rem;
  }

  span {
    font-size: 0.9rem;
  }
`;
export { Container, DetailsBox, Span, DetailsItem };
