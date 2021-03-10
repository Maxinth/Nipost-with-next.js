import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Span } from "./styled";
import PropTypes from "prop-types";

const DropIconShown = ({ flipState, doFlip }) => {
  return (
    <Span flip={flipState} onClick={doFlip}>
      <ExpandMoreIcon />
    </Span>
  );
};

DropIconShown.propTypes = {
  flipState: PropTypes.bool,
  doFlip: PropTypes.func,
};
export default DropIconShown;
