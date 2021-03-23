import styled from "styled-components";
import { Heading, Text } from "../PostOfficeBoxOnline/OfficeBoxOnline/styled";
import { Section } from "../PostOfficeBoxOnline/styled";
import { ButtonContainer } from "../PostOfficeBoxOnline/Steps/styled";

const Container = styled(Section)`
  background-color: rgb(230, 230, 232);
  font-family: "Open Sans";
  padding: 3rem 1rem;
  /* max-width: 900px;
  margin: 0 auto; */
  > * {
    flex: 1;
  }
`;

const StampText = styled(Text)`
  text-align: center;
`;

const StampBox = styled.div`
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  transition: margin-bottom 0.2s;
  ${ButtonContainer} {
    justify-content: center;
  }

  @media (min-width: 768px) {
    margin-bottom: unset;
  }
`;

export { Container, Heading, StampText, StampBox };
