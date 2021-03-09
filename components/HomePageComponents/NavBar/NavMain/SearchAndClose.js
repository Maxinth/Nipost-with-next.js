import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";

const SearchAndClose = () => {
  const [isSearchInit, setIsSearchInit] = useState(false);

  // see comments
  const iconClickProps = {
    onClick: () => setIsSearchInit(!isSearchInit),
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
