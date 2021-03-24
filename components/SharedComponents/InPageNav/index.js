import React from "react";
import HomeLink from "./HomeLink";
import { PageName, Span, Box } from "./styled";
import PropTypes from "prop-types";

const InPageNav = ({ pageName }) => {
  return (
    <Box>
      <HomeLink />
      <Span>/</Span>
      <PageName>{pageName}</PageName>
    </Box>
  );
};

InPageNav.propTypes = {
  pageName: PropTypes.string,
};

export default InPageNav;
