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
`;
export { OuterBox, InnerBox, Text, StepSection, StepBox };
