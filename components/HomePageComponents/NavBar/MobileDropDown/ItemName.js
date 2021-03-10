import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Span, Box } from "./styled";
import PropTypes from "prop-types";

const ItemName = ({ name }) => {
  return (
    <Box>
      <PlayArrowIcon /> <Span>{name}</Span>
    </Box>
  );
};

ItemName.propTypes = {
  name: PropTypes.string,
};

export default ItemName;
