import React, { useContext, createContext, useState } from "react";
import {
  linkItems,
  itemsOnHover,
  itemsWhenOutOfFocus,
} from "./HomePageComponents/NavBar/NavMain/data";
import { servicesTypesItemsForRadioAtDomestic } from "./HomePageComponents/Tabs/CalculatorDetails/SelectBoxes/data";
import { changeLocaleList } from "./HomePageComponents/Tabs/CalculatorDetails/SelectBoxes/changeLocaleList";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state to track and change options list based on radio click
  const [localeList, setLocaleList] = useState(
    servicesTypesItemsForRadioAtDomestic
  );
  // state for searchAndCloseIcon
  const [isSearchInit, setIsSearchInit] = useState(false);

  // state for hamburger toggle
  const [isClicked, setIsClicked] = useState(false);
  const toggleMobileMenu = () => setIsClicked(!isClicked);

  // state for navlinks onhover and click
  const [itemInView, setItemInView] = useState(linkItems);

  /* custom function to set the value the itemInView to the current item hovered upon or
   clicked upon (for searchIcon) */

  const handleHover = (e, id) => {
    setItemInView(itemsOnHover(e, id));
  };

  const handleMouseOut = () => {
    // See Comments
    if (isSearchInit) {
      setIsSearchInit(!isSearchInit);
    }
    setItemInView(itemsWhenOutOfFocus);
  };

  return (
    <AppContext.Provider
      value={{
        isClicked,
        toggleMobileMenu,
        handleHover,
        itemInView,
        handleMouseOut,
        isSearchInit,
        setIsSearchInit,
        localeList,
        changeLocaleList,
        setLocaleList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// custom hook to consume exposed data;
export const useGlobalContext = () => {
  return useContext(AppContext);
};

/*
        ======== OVER HERE ======
        
const handleMouseOut = () => {
    if (isSearchInit) {
      setIsSearchInit(!isSearchInit);
    }
    setItemInView(itemsWhenOutOfFocus);
  };

          ======= FOR searchAndClose =======

  if (isSearchInit) {
      setIsSearchInit(!isSearchInit);
    } 


    lines 70-71 : when the search icon is clicked to show the search drop down , it is toggled into 
    the close icon. when a user loses focus of the search dropdown, the icon is toggled to its initial
    state and the dropdown is hidden.



*/
