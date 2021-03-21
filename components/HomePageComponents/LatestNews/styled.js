import styled from "styled-components";

const NewsContainer = styled.section`
  font-family: "Open Sans", sans-serif;
  padding: 1rem;
  display: flex;
  align-items: center;
  border-top-right-radius: 9px;
  border-top-left-radius: 9px;
  box-shadow: 0px 2px 6px grey;
  margin: 0 auto;
  max-width: 1170px;
  @media (min-width: 992px) {
    margin-top: 25rem;
  }
`;

const Title = styled.div`
  background-color: rgb(21, 129, 157);
  color: #fff;
  padding: 0.5rem;
  width: unset;
  font-size: 0.8rem;
  font-weight: 700;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
`;

const ControlsBox = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  background-color: #fff;
  cursor: pointer;
  > svg {
    color: grey;
    padding: 0.5rem;
    font-size: 2.2rem;
    transition: all 0.2s;
  }

  :nth-child(2) {
    border-left: 1px solid rgb(245, 245, 245);
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
  }

  :hover {
    background-color: rgb(21, 129, 157);
    > svg {
      color: #fff;
    }
  }
`;
export { NewsContainer, Title, ControlsBox, Span };
