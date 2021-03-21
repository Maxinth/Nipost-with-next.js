import React from "react";
import NavBar from "./NavBar";
import styled from "styled-components";
import MobileDropDown from "./NavBar/MobileDropDown";
import Banner from "./Banner";
import Tabs from "./Tabs";
import LatestNews from "./LatestNews";
import SubMenuOptions from "./SubMenuOptions";
import CommercialBusinessUnit from "./CommercialBusinessUnit";
const Container = styled.section`
  background-color: rgb(245, 245, 245);
  position: relative;
`;

const Home = () => {
  return (
    <Container>
      <NavBar />
      <MobileDropDown />
      <Banner />
      <Tabs />
      <LatestNews />
      <SubMenuOptions />
      <CommercialBusinessUnit />
    </Container>
  );
};

export default Home;
