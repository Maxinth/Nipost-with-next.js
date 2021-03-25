import React from "react";
import { Container } from "../CalculatorPageComps/styled";
import Banner from "./Banner";
import InPageNav from "./InPageNav";
import PropTypes from "prop-types";
import ChildSection from "./ChildSection";

// ShareLayout contains the layout shared by calculator, track and trace and post pages.
const SharedLayout = ({ text, children }) => {
  return (
    <Container>
      <Banner text={text} />
      <InPageNav pageName={text} />
      <ChildSection comp={children} />
    </Container>
  );
};

SharedLayout.propTypes = {
  text: PropTypes.string,
  children: PropTypes.object,
};

export default SharedLayout;
