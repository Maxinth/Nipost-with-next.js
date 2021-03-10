import React, { useContext, createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // state for hamburger toggle
  const [isClicked, setIsClicked] = useState(false);

  const toggleMobileMenu = () => setIsClicked(!isClicked);

  return (
    <AppContext.Provider
      value={{
        isClicked,
        toggleMobileMenu,
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
