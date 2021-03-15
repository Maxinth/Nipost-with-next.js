import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Span } from "./styled";
import PropTypes from "prop-types";

const DropIconShown = ({ flipState, doFlip }) => {
  return (
    <Span flip={flipState} onClick={doFlip}>
      <ExpandLessIcon />
    </Span>
  );
};

DropIconShown.propTypes = {
  flipState: PropTypes.bool,
  doFlip: PropTypes.func,
};

export default DropIconShown;
