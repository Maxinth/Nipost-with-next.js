import styled from "styled-components";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const RadioContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin-top: 1rem;
`;
// RadioButton
const RadioButtonUnchecked = styled(RadioButtonUncheckedIcon)``;
const Label = styled.label`
  font-family: "Open Sans", sans-serif;
  font-size: 0.8rem;
  margin-left: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  > svg {
    font-size: 0.9rem;
  }
`;

const LabelText = styled.span`
  margin-left: 0.2rem;
  margin-right: 9rem;
`;

const RadioButtonChecked = styled(RadioButtonCheckedIcon)``;
const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  color: rgb(78, 85, 89);
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 400px) {
    flex-direction: row;
    margin-bottom: unset;
  }
`;

export {
  RadioButtonChecked,
  RadioButtonContainer,
  LabelText,
  Label,
  RadioButtonUnchecked,
  RadioContainer,
};
