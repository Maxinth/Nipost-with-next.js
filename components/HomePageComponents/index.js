import React from "react";
import NavBar from "./NavBar";
import MobileDropDown from "./NavBar/MobileDropDown";
import Banner from "./Banner";
import Tabs from "./Tabs";
import LatestNews from "./LatestNews";
import SubMenuOptions from "./SubMenuOptions";
import CommercialBusinessUnit from "./CommercialBusinessUnit";
import PostOfficeBoxOnline from "./PostOfficeBoxOnline";
import PostageStamps from "./PostageStamps";
import { Container } from "./styled";

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
      <PostOfficeBoxOnline />
      <PostageStamps />
    </Container>
  );
};

export default Home;
