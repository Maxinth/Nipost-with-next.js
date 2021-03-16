import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import { useGlobalContext } from "../../../context";

const SearchAndClose = () => {
  const {
    handleHover: showDropDown,
    handleMouseOut: handleClose,
    isSearchInit,
    setIsSearchInit,
  } = useGlobalContext();

  // see comments
  const iconClickAndHoverProps = {
    onClick: (e) => {
      setIsSearchInit(!isSearchInit);
      if (!isSearchInit) {
        showDropDown(e, "searchIcon");
      } else {
        handleClose();
      }
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

/* line 9 - 


the onClick handler has a different handler function based on the icon in view

const {
    handleHover: showDropDown,
    handleMouseOut: handleClose,
  } = useGlobalContext();


  handleHover and handleMouseOut are exported from useGlobalContext and given showDropDown and handleClose as
  their respective aliases.


const iconClickAndHoverProps = {
    onClick: (e) => {
      setIsSearchInit(!isSearchInit);  // toggle Icon on click

      // if searchIcon is initially shown - click brings the dropdown into view
      if (!isSearchInit) {
       showDropDown(e, "searchIcon");
      } else {  // when close icon is in view - clicking it hides the dropdown
        handleClose();
      }
    },

   
  };

the iconClickAndHoverProps object when spread does just this.

*/
