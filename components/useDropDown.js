import React, { useRef, useState, useEffect } from "react";
import { useGlobalContext } from "./context";

const useDropDown = () => {
  const [currentHeight, setCurrentHeight] = useState(0);
  const { isClicked } = useGlobalContext();

  const contentRef = useRef(null);

  // useEffect for changing height of mobileMenu
  useEffect(() => {
    let detailsHeight = contentRef.current.getBoundingClientRect().height;

    if (isClicked) {
      setCurrentHeight(detailsHeight);
    } else {
      setCurrentHeight(0);
    }
  }, [isClicked, currentHeight]);

  return {
    currentHeight,
    isClicked,
    contentRef,
  };
};

export default useDropDown;
