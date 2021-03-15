import React, { useContext, createContext, useState } from "react";
import {
  linkItems,
  itemsOnHover,
} from "./HomePageComponents/NavBar/NavMain/data";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state for hamburger toggle
  const [isClicked, setIsClicked] = useState(false);
  const toggleMobileMenu = () => setIsClicked(!isClicked);

  // state for navlinks onhover and click
  const [itemInView, setItemInView] = useState(linkItems);

  /* custom function to set the value the itemInView to the current item hovered upon or
   clicked upon (for searchIcon) */

  const handleHover = (id) => {
    setItemInView(itemsOnHover(id));
  };

  return (
    <AppContext.Provider
      value={{
        isClicked,
        toggleMobileMenu,
        handleHover,
        itemInView,
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
