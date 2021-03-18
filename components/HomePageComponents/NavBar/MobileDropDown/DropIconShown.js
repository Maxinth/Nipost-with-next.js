import React from "react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Span } from "./styled";
import PropTypes from "prop-types";

const DropIconShown = ({ flipState, doFlip }) => {
  return (
    <Span onClick={doFlip}>
      {!flipState ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </Span>
  );
};

DropIconShown.propTypes = {
  flipState: PropTypes.bool,
  doFlip: PropTypes.func,
};

export default DropIconShown;
