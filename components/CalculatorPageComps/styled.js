import styled from "styled-components";
import { CalcBox } from "../HomePageComponents/Tabs/CalculatorDetails/CalcInput/styled";
import { Button } from "../HomePageComponents/Tabs/Btn/styled";
import { Box } from "../HomePageComponents/Tabs/TrackItemsDetails/styled";

const Container = styled.section`
  background-color: rgb(254, 254, 254);
  padding-bottom: 3rem;

  ${Box} + ${Button} {
    min-width: 192px;
    max-width: 40%;
    font-size: 0.6rem;
  }

  ${Box} {
    ${Button} {
      width: 20%;
    }
  }

  @media (min-width: 768px) {
    input + ${Button} {
      max-width: 250px;
    }
    ${Box} + ${Button} {
      font-size: 1rem;
      min-width: 250px;
    }
  }
  @media (min-width: 1049px) {
    ${Box} + ${Button} {
      width: 25%;
    }
  }
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
