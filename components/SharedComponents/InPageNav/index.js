import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import Link from "next/link";
import { PageName, Span, Box, Anchor } from "./styled";
import PropTypes from "prop-types";

const InPageNav = ({ pageName }) => {
  return (
    <Box>
      <Link href="/">
        <Anchor>
          <HomeIcon />
        </Anchor>
      </Link>
      <Span>/</Span>
      <PageName>{pageName}</PageName>
    </Box>
  );
};
InPageNav.propTypes = {
  pageName: PropTypes.string,
};
export default InPageNav;
