import styled, { css } from "styled-components";

const Container = styled.section`
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeRedirectBox = styled.div`
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  margin-top: 2rem;
  transition: all 0.2s;
  :hover {
    background-color: green;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  display: block;
`;

const Anchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 0.7rem;
  transition: all 0.2s;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;
export { Container, HomeRedirectBox, Image, Anchor };
