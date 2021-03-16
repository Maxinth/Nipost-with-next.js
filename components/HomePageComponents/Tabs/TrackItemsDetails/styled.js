import styled from "styled-components";
import { DetailsBox } from "../styled";

const Box = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  /* margin-left: 0.2rem; */
  justify-content: space-between;
  button {
    margin-left: 0.5rem;
  }
  + button {
    margin-top: 1rem;
  }
`;

export { Box, DetailsBox };
