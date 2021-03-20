import { DetailsBox } from "../styled";
import styled from "styled-components";

const Box = styled.div``;

const CalcDetailsBox = styled(DetailsBox)`
  padding: 1rem;
  @media (min-width: 992px) {
    padding: 0.2rem 1rem 0.5rem;
  }
`;

export { CalcDetailsBox, Box };
