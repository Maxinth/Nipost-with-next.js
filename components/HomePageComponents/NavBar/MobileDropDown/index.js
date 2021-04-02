import React, { useEffect } from "react";
import { DropDownContainer, ContentBox } from "./styled";
import useDropDown from "../../../useDropDown";
import GenerateDropListItems from "./GenerateDropListItems";
import { useGlobalContext } from "../../../context";
import { motion, AnimatePresence } from "framer-motion";
import { useVariants } from "../../../useVariants";

const MobileDropDown = () => {
  const { variantProps, dropVariant } = useVariants();
  // const {
  //   currentHeight,
  //   contentRef,
  //   getNewHeight,
  //   getChildDetailsHeight,
  // } = useDropDown();

  const { isClicked } = useGlobalContext();

  // useEffect for changing height of mobileMenu
  // useEffect(() => {
  //   let detailsHeight = contentRef.current.getBoundingClientRect().height;
  //   getNewHeight(isClicked, detailsHeight);
  // }, [isClicked, currentHeight]);

  return (
    <AnimatePresence>
      {isClicked && (
        <DropDownContainer
        // height={currentHeight}
        >
          <motion.ul
            variants={dropVariant}
            {...variantProps}
            // ref={contentRef}
          >
            <GenerateDropListItems
            // getChildDetailsHeight={getChildDetailsHeight}
            />
          </motion.ul>
        </DropDownContainer>
      )}
    </AnimatePresence>
  );
};

export default MobileDropDown;
