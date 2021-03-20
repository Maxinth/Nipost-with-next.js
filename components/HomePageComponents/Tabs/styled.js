import styled from "styled-components";

const DetailsBox = styled.div`
  background-color: #fff;
  padding: 2rem 1rem;
  /* margin-top: 0.5rem; */
  border: 1px solid rgb(226, 226, 226);
  border-top: 1px solid transparent;
  transition: padding 0.2;
  /* @media (min-width: 992px) {
    padding: 0.2rem 1rem;
  } */
`;

const TabContainer = styled.section`
  background-color: rgb(245, 245, 245);
  margin-right: auto;
  margin-left: auto;

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

  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    position: absolute;
    top: -200px;
  }
`;

export { DetailsBox, TabContainer };
