import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import MobileDropDown from "./NavBar/MobileDropDown";
import Banner from "./Banner";

const Container = styled.section``;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <MobileDropDown />
      <Banner />
    </Container>
  );
};

export default Home;
