import styled from "styled-components";

const Box = styled.div``;

const Span = styled.span``;

const PageName = styled.p``;

const Anchor = styled.a`
  > svg {
    color: rgb(222, 57, 57);
    transition: color 0.2s;
  }

  :hover {
    > svg {
      color: skyblue;
    }
  }
`;

export { PageName, Span, Box, Anchor };
