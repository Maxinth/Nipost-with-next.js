import styled from "styled-components";

const DetailsBox = styled.div`
  background-color: #fff;
  padding: 2rem 1rem;
  /* margin-top: 0.5rem; */
  border: 1px solid rgb(226, 226, 226);
  border-top: 1px solid transparent;
`;

const TabContainer = styled.section`
  background-color: rgb(245, 245, 245);
  margin-top: 8rem;
  border: 1px solid black;
  padding: 1rem;
  transition: margin-top 0.2s;
  @media (min-width: 456px) {
    margin-top: calc(8rem + 10vw);
  }
  @media (min-width: 666px) {
    margin-top: calc(8rem + 20vw);
  }
`;

export { DetailsBox, TabContainer };
