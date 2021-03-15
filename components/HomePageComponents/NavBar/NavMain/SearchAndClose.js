import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { useGlobalContext } from "../../../context";

const SearchAndClose = () => {
  const [isSearchInit, setIsSearchInit] = useState(false);
  const { handleHover: handleClick } = useGlobalContext();
  // see comments
  const iconClickProps = {
    onClick: (e) => {
      setIsSearchInit(!isSearchInit);
      handleClick(e, "searchIcon");
    },
  };

  return (
    <>
      {isSearchInit ? (
        <CloseIcon {...iconClickProps} />
      ) : (
        <SearchIcon {...iconClickProps} />
      )}
    </>
  );
};

export default SearchAndClose;

/* line 9 - so I don't have to write

the onClick handler as onClick={() => setIsSearchInit(!isSearchInit)} on both icons

the iconClickProps object when spread does just this.

*/
