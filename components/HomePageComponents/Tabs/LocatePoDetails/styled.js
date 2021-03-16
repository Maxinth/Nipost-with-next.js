import styled from "styled-components";
import { DetailsBox } from "../styled";

const PoDetails = styled(DetailsBox)`
  display: flex;
  flex-direction: column;
  margin-top: unset;
  button {
    margin-top: 1rem;
  }
`;

export { PoDetails };
