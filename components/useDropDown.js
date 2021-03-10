import { useRef, useState, useEffect } from "react";

const useDropDown = () => {
  const [currentHeight, setCurrentHeight] = useState(0);

  const contentRef = useRef(null);

  // custom function to get new height based on a condition and the contents Height
  const getNewHeight = (condition, val) => {
    if (condition) {
      setCurrentHeight(val);
    } else {
      setCurrentHeight(0);
    }
  };

  // custom function TO BE USED ONLY IN <MobileDropDown /> to add the details height when available to the overall height of the menu dropDown.
  const getChildDetailsHeight = (childDetailsHeight) => {
    setCurrentHeight(currentHeight + childDetailsHeight);
  };

  return {
    currentHeight,
    contentRef,
    setCurrentHeight,
    getNewHeight,
    getChildDetailsHeight,
  };
};

export default useDropDown;
