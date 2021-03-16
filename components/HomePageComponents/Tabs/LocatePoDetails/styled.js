import styled from "styled-components";
import { DetailsBox } from "../styled";

const PoDetails = styled(DetailsBox)`
  display: flex;
  flex-direction: column;
  margin-top: unset;
  border: 1px solid rgb(226, 226, 226);
  border-top: 1px solid transparent;
  button {
    margin-top: 1rem;
  }
`;

export { PoDetails };
