import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  padding: 1rem 3rem;
`;

const Span = styled.span`
  display: inline-block;
  margin: 0 0.5rem;
`;

const PageName = styled.p`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: rgb(153, 153, 153);
`;

const Anchor = styled.a`
  > svg {
    color: rgb(222, 57, 57);
    transition: color 0.2s;
    font-size: 1rem;
  }

  :hover {
    > svg {
      color: blue;
    }
  }
`;

export { PageName, Span, Box, Anchor };
