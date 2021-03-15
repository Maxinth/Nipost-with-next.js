import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { useGlobalContext } from "../../../context";

const SearchAndClose = () => {
  const [isSearchInit, setIsSearchInit] = useState(false);
  const { handleHover } = useGlobalContext();
  // see comments
  const iconClickAndHoverProps = {
    onClick: () => {
      setIsSearchInit(!isSearchInit);
    },

    onMouseEnter: (e) => {
      handleHover(e, "searchIcon");
    },
  };

  return (
    <>
      {isSearchInit ? (
        <CloseIcon {...iconClickAndHoverProps} />
      ) : (
        <SearchIcon {...iconClickAndHoverProps} />
      )}
    </>
  );
};

export default SearchAndClose;

/* line 9 - so I don't have to write

the onClick handler as onClick={() => setIsSearchInit(!isSearchInit)} on both icons

the iconClickAndHoverProps object when spread does just this.

*/
