import React from "react";
import OnlineTools from "../OnlineTools";
import Navigation from "../Navigation";
import { Box } from "./styled";
import PropTypes from "prop-types";

const Contents = ({ details, contentRef }) => {
  return (
    <Box ref={contentRef}>
      <OnlineTools />
      <Navigation details={details} />
    </Box>
  );
};

Contents.propTypes = {
  details: PropTypes.array,
  contentRef: PropTypes.object,
};

export default Contents;
