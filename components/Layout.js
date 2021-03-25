import React from "react";
import Nav from "./HomePageComponents/NavBar";
import Footer from "./HomePageComponents/Footer";
import MobileDropDown from "./HomePageComponents/NavBar/MobileDropDown";
import { Container } from "./HomePageComponents/styled";
import Head from "next/head";
import Router from "next/router";

const Layout = ({ children }) => {
  console.log("router = ", Router);
  const { router } = Router;
  const { pathname } = router;
  console.log("pathname = ", pathname);
  return (
    <Container>
      <Head>
        <title>Nipost - home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <MobileDropDown />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
