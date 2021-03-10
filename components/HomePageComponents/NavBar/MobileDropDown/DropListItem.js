import React, { useState } from "react";
import ItemName from "./ItemName";
import { ListItem, ContentBox } from "./styled";
import IsDropDownIconShown from "./IsDropDownIconShown";
import PropTypes from "prop-types";
import DropDownDetails from "./DropDownDetails";

const DropListItem = ({ linkText, withDropDown }) => {
  const [clicked, setClicked] = useState(false);
  const flipIconShown = () => setClicked(!clicked);

  return (
    <>
      <ListItem>
        <ItemName name={linkText} />
        <IsDropDownIconShown
          flipIconShown={flipIconShown}
          clicked={clicked}
          withDropDown={withDropDown}
        />
      </ListItem>
      {withDropDown && <DropDownDetails showDetails={clicked} />}
    </>
  );
};

DropListItem.propTypes = {
  linkText: PropTypes.string,
  withDropDown: PropTypes.bool,
};

export default DropListItem;
