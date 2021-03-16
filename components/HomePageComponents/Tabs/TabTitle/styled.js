import styled from "styled-components";

const Span = styled.span`
  margin-left: 0.2rem;
  font-weight: 600;
`;

const TabBox = styled.div`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.7rem;
  padding: 0.5rem;
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
