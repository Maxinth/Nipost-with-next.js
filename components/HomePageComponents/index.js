import React from "react";
import Banner from "./Banner";
import Tabs from "./Tabs";
import LatestNews from "./LatestNews";
import SubMenuOptions from "./SubMenuOptions";
import CommercialBusinessUnit from "./CommercialBusinessUnit";
import PostOfficeBoxOnline from "./PostOfficeBoxOnline";
import PostageStamps from "./PostageStamps";

const Home = () => {
  return (
    <>
      <Banner />
      <Tabs />
      <LatestNews />
      <SubMenuOptions />
      <CommercialBusinessUnit />
      <PostOfficeBoxOnline />
      <PostageStamps />
    </>
  );
};

export default Home;
