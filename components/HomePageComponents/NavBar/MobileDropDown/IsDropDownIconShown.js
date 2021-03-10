import React from "react";
import DropIconShown from "./DropIconShown";
import PropTypes from "prop-types";

const IsDropDownIconShown = ({ withDropDown, clicked, flipIconShown }) => {
  return (
    <>
      {withDropDown && (
        <DropIconShown flipState={clicked} doFlip={flipIconShown} />
      )}
    </>
  );
};

IsDropDownIconShown.propTypes = {
  withDropDown: PropTypes.bool,
  clicked: PropTypes.bool,
  flipIconShown: PropTypes.func,
};

export default IsDropDownIconShown;
