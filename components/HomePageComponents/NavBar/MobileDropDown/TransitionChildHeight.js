import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useVariants } from "../../../useVariants";
import PropTypes from "prop-types";

const TransitionChildHeight = ({ condition, ParentBox, children }) => {
  const { variantProps, dropVariant } = useVariants();

  return (
    <AnimatePresence>
      {condition && (
        <ParentBox>
          <motion.ul variants={dropVariant} {...variantProps}>
            {children}
          </motion.ul>
        </ParentBox>
      )}
    </AnimatePresence>
  );
};

TransitionChildHeight.propTypes = {
  condition: PropTypes.bool,
  ParentBox: PropTypes.object,
  children: PropTypes.object,
};

export default TransitionChildHeight;

/* 
                    ======OVER HERE ======= 
                    
TransitionChildHeight is a custom wrapper component which transitions the height
of the ParentBox based on that of its child ul

the children prop are the list item element of ul
condition === val to be evaluated to bring about the transition
ParentBox = container element whose height is transitioned in relation to 
that of its child ul

Wrap any child element and supply the need values and it will transition

This component has been used in <DropDownDetails /> and the 
<MobileDropDown /> components.

*/
