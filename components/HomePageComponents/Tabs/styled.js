import styled from "styled-components";

const DetailsBox = styled.div`
  background-color: #fff;
  padding: 6rem 1.5rem;

  border: 1px solid rgb(226, 226, 226);
  border-top: 1px solid transparent;
  transition: padding 0.2;

  @media (min-width: 992px) {
    padding: 4.6rem 1.5rem;
  }
`;

const TabContainer = styled.section`
  background-color: rgb(245, 245, 245);
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  /* border: 1px solid black; */
  min-height: 302px;
  padding: 1rem;
  /* padding-bottom: 6rem; */
  transition: all 0.2s;

  > section + div {
    height: 100%;
  }
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
    top: -230px;
    right: 20px;
    min-width: 523px;
    min-height: 302px;
    padding-bottom: 1rem;
    border-radius: 10px;
    box-shadow: 1px 4px 8px grey;
  }
  @media (min-width: 1190px) {
    top: -250px;
  }
  @media (min-width: 1300px) {
    top: -270px;
  }
`;

export { DetailsBox, TabContainer };
