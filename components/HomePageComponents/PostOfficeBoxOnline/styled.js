import styled from "styled-components";

const Section = styled.section`
  background-color: #f6f6f7;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  display: block;
  object-fit: contain;
  max-width: 300px;
`;

export { Section, Image, ImageBox };
