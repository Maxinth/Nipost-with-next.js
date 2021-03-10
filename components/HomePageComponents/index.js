import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import MobileDropDown from "./NavBar/MobileDropDown";
const Container = styled.section``;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <MobileDropDown />
    </Container>
  );
};

export default Home;
