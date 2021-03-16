import styled from "styled-components";

const Span = styled.span`
  margin-left: 0.1rem;
  font-weight: 600;
  transition: color 0.2;
  :hover {
    color: rgb(21, 129, 157);
  }
`;

const TabBox = styled.div`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.7rem;
  padding: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  > svg {
    font-size: 0.9rem;
  }
`;

const TabSection = styled.section`
  display: flex;
  align-items: center;
`;

export { Span, TabBox, TabSection };
