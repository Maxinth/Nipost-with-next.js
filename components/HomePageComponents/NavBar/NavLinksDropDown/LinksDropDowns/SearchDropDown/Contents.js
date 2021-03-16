import React from "react";
import InputBox from "../../../../Tabs/InputBox";
import Btn from "../../../../Tabs/Btn";
import { Box } from "./styled";
import PropTypes from "prop-types";

const Contents = ({ contentRef }) => {
  return (
    <Box ref={contentRef}>
      <InputBox text="Enter keyword" />
      <Btn text="search" />
    </Box>
  );
};

Contents.propTypes = {
  contentRef: PropTypes.object,
};

export default Contents;
