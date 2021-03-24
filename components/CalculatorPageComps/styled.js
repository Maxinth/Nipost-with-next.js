import styled from "styled-components";
import { CalcBox } from "../HomePageComponents/Tabs/CalculatorDetails/CalcInput/styled";
import { Button } from "../HomePageComponents/Tabs/Btn/styled";

const Container = styled.section`
  background-color: rgb(254, 254, 254);
  padding-bottom: 3rem;
`;

const Section = styled.section`
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
  > div {
    border: unset;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    ${CalcBox} {
      margin: 0rem 0.6rem 0.5rem;
    }

    ${Button} {
      width: 50%;
    }
    > div {
      flex: 1;
    }
  }
`;
export { Container, Section };
