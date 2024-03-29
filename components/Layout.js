import React from "react";
import Nav from "./HomePageComponents/NavBar";
import Footer from "./HomePageComponents/Footer";
import MobileDropDown from "./HomePageComponents/NavBar/MobileDropDown";
import { Container } from "./HomePageComponents/styled";

// general Layout across all pages.
const Layout = ({ children }) => {
  return (
    <Container>
      <Nav />
      <MobileDropDown />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
