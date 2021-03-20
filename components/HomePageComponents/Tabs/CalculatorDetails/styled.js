import { DetailsBox } from "../styled";
import styled from "styled-components";

const Box = styled.div``;

const CalcDetailsBox = styled(DetailsBox)`
  @media (min-width: 992px) {
    padding: 0.2rem 1rem;
  }
`;

export { CalcDetailsBox, Box };
