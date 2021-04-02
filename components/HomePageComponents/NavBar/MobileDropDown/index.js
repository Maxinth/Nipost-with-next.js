import React from "react";
import { DropDownContainer } from "./styled";

import GenerateDropListItems from "./GenerateDropListItems";
import { useGlobalContext } from "../../../context";
import { motion, AnimatePresence } from "framer-motion";
import { useVariants } from "../../../useVariants";

const MobileDropDown = () => {
  const { variantProps, dropVariant } = useVariants();

  const { isClicked } = useGlobalContext();

  return (
    <AnimatePresence>
      {isClicked && (
        <DropDownContainer>
          <motion.ul variants={dropVariant} {...variantProps}>
            <GenerateDropListItems />
          </motion.ul>
        </DropDownContainer>
      )}
    </AnimatePresence>
  );
};

export default MobileDropDown;
