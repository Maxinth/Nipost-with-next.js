import React, { useEffect, useState } from "react";
import Nav from "./HomePageComponents/NavBar";
import Footer from "./HomePageComponents/Footer";
import MobileDropDown from "./HomePageComponents/NavBar/MobileDropDown";
import { Container } from "./HomePageComponents/styled";
import Head from "next/head";
// import useTitle from "./useTitle";
import { getTitle } from "./getTitle";
import Router from "next/router";

const Layout = ({ children }) => {
  const { route } = Router;
  console.log("router = ", route);
  // const { pathname } = router;
  const { pageTitle } = getTitle(route);
  const [title] = useState(pageTitle);

  useEffect(() => {
    getTitle(route);
  }, [title, route]);
  return (
    <Container>
      <Head>
        <title>Nipost - {title}</title>
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
