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

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;
  /* background-color: rgba(0, 0, 0, 0.45); */
  /* margin-bottom: 1rem; */
`;

const BannerForm = styled.form`
  /* margin-top: 2rem; */
  width: 100%;
  padding: 2rem;
  /* margin-top: 8rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: rgba(0, 0, 0, 0.45);

  > * {
    margin-right: 1rem;
  }

  @media (min-width: 1140px) {
    flex-direction: row;
  }
`;

export {
  SelectBoxItem,
  SelectBoxOption,
  SelectBoxContainer,
  FormContainer,
  BannerForm,
};
