import styled from "styled-components";
import { DetailsBox } from "../styled";

const PoDetails = styled(DetailsBox)`
  display: flex;
  flex-direction: column;
  margin-top: unset;
  border: 1px solid rgb(226, 226, 226);
  border-top: 1px solid transparent;
  padding: 6rem 1.5rem;
  button {
    margin-top: 1rem;
  }
  @media (min-width: 992px) {
    padding: 4.6rem 1.5rem;
  }
`;

export { PoDetails };
