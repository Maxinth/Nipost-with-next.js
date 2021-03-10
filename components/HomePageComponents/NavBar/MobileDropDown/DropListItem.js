import React, { useState } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { ListItem, Span, Box } from "./styled";
import DropIconShown from "./DropIconShown";
import PropTypes from "prop-types";

const DropListItem = ({ linkText, withDropDown }) => {
  const [clicked, setClicked] = useState(false);
  const flipIconShown = () => setClicked(!clicked);

  return (
    <ListItem>
      <Box>
        <PlayArrowIcon /> <Span>{linkText}</Span>
      </Box>
      {withDropDown && (
        <DropIconShown flipState={clicked} doFlip={flipIconShown} />
      )}
    </ListItem>
  );
};

DropListItem.propTypes = {
  linkText: PropTypes.string,
  withDropDown: PropTypes.bool,
};
export default DropListItem;
