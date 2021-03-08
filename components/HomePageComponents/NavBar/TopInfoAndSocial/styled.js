import styled from "styled-components";

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  font-weight: 600;
  background-color: rgb(105, 105, 105);
  width: 100%;
  transition: width 0.2s;

  @media (min-width: 531px) {
    width: 50%;
  }
`;

export { Info };
