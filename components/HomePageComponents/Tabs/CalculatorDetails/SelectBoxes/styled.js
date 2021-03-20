import styled from "styled-components";

const SelectBoxContainer = styled.div`
  /* display: ${({ twoItems }) => (twoItems ? "flex" : "unset")}; */
  justify-content: center;
  align-items: center;
  margin-top: 0.4rem;
  @media (min-width: 768px) {
    :nth-child(3),
    :nth-child(4) {
      margin-bottom: 0.2rem;
    }
  }
`;

const SelectBoxItem = styled.select`
  padding: 0.4rem 0.5rem;
  background-color: #fff;
  border: 1px solid #c1bebe;
  outline: none;
  border-radius: 5px;
  font-size: 0.8rem;
  text-transform: uppercase;
  cursor: pointer;
  color: black;
  width: 100%;
  transition: text-align 0.3s;

  /* larger screen */

  @media (min-width: 1150px) {
    text-align: center;
    /* width: unset; */
  }

  @media (min-width: 992px) {
    /* width: 50%; */
  }
`;

const SelectBoxOption = styled.option`
  min-width: 300px;
  font-family: "Open Sans", sans-serif;
  padding: 0.5rem;
  font-size: 0.8rem;
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
`;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BannerForm = styled.form`
  /* margin-top: 2rem; */
  width: 100%;
  padding: 0.5rem 0.6rem;
  /* margin-top: 8rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
`;

export {
  SelectBoxItem,
  SelectBoxOption,
  SelectBoxContainer,
  FormContainer,
  BannerForm,
};
