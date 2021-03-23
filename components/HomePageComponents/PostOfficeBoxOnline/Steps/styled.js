import styled from "styled-components";

const OuterBox = styled.div`
  border-radius: 100px;
  background-color: #fff;
  padding: 0.5rem;
  width: unset;
  box-shadow: 1px 2px 4px grey;
  margin-right: 1rem;
`;

const InnerBox = styled.div`
  background-color: #1dc7de;
  padding: 0.5rem 1rem;
  border-radius: 100px;
  width: unset;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
`;

const Text = styled.p`
  color: rgb(105, 105, 105);
`;
const StepSection = styled.section``;
const StepBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
`;
const Btn = styled.button`
  outline: none;
  border-radius: 10px;
  padding: 1rem 3rem;
  border: 1px solid black;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;
  font-family: "Open Sans", sans-serif;
  background: #fff;
  cursor: pointer;
  :hover {
    background-color: rgb(255, 0, 0);
    color: #fff;
    border: 1px solid transparent;
  }
`;

export { ButtonContainer, Btn, OuterBox, InnerBox, Text, StepSection, StepBox };
