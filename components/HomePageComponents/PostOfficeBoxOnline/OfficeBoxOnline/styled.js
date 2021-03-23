import styled, { css } from "styled-components";

const OfficeSection = styled.section`
  font-family: "Open Sans", sans-serif;
  padding: 1rem 2rem;
`;

const Heading = styled.h4`
  font-size: 1.8rem;
  color: #333;
  text-align: center;
  margin: 1rem 0;
  font-weight: 500;

  ${({ sm }) =>
    sm &&
    css`
      font-size: 1rem;
      text-align: left;
      margin-top: 1rem;
    `}
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: justify;
`;
export { OfficeSection, Heading, Text };
