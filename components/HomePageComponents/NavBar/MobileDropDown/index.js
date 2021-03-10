import React, { useRef, useState, useEffect } from "react";
import { DropDownContainer } from "./styled";

const MobileDropDown = () => {
  const [currentHeight, setCurrentHeight] = useState(0);
  const detailsRef = useRef(null);

  useEffect(() => {
    let detailsHeight = detailsRef.current.getBoundingClientRect().height;
  });
  return <DropDownContainer></DropDownContainer>;
};

export default MobileDropDown;
