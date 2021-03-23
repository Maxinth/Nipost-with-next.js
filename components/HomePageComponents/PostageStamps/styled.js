import styled from "styled-components";
import { Heading, Text } from "../PostOfficeBoxOnline/OfficeBoxOnline/styled";
import { Section } from "../PostOfficeBoxOnline/styled";

const Container = styled(Section)`
  background-color: rgb(230, 230, 232);
  font-family: "Open Sans";
`;

const StampText = styled(Text)`
  text-align: center;
`;

const StampBox = styled.div`
  padding: 1rem;
`;

export { Container, Heading, StampText, StampBox };
