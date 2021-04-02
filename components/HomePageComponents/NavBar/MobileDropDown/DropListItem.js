import React, { useState } from "react";
import ItemName from "./ItemName";
import { ListItem } from "./styled";
import IsDropDownIconShown from "./IsDropDownIconShown";
import PropTypes from "prop-types";
import DropDownDetails from "./DropDownDetails";

const DropListItem = ({ linkText, withDropDown, details }) => {
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
      {withDropDown && (
        <DropDownDetails showDetails={clicked} details={details} />
      )}
    </>
  );
};

DropListItem.propTypes = {
  linkText: PropTypes.string,
  withDropDown: PropTypes.bool,

  details: PropTypes.array,
};

export default DropListItem;
