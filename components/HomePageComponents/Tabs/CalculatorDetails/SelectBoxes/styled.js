import styled from "styled-components";

const SelectBoxContainer = styled.div`
  display: ${({ twoItems }) => (twoItems ? "flex" : "unset")};
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const SelectBoxItem = styled.select`
  padding: 0.8rem 0.5rem;
  background-color: #fff;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  /* text-align: center; */
  border-radius: 5px;
  font-size: 1.1rem;
  text-transform: capitalize;
  cursor: pointer;
  color: grey;
  width: 100%;
  transition: text-align 0.3s;

  /* larger screen */

  @media (min-width: 1150px) {
    text-align: center;
    width: unset;
  }
`;

const SelectBoxOption = styled.option`
  min-width: 300px;
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`;

export { SelectBoxItem, SelectBoxOption, SelectBoxContainer };
