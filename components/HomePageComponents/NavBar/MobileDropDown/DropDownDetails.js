import React from "react";
import { Box } from "./styled";
import PropTypes from "prop-types";
import GenerateInnerListItems from "./GenerateInnerListItems";
import { motion, AnimatePresence } from "framer-motion";
import { useVariants } from "../../../useVariants";

const DropDownDetails = ({ showDetails, details }) => {
  const { variantProps, dropVariant } = useVariants();

  return (
    <AnimatePresence>
      {showDetails && (
        <Box details>
          <motion.ul variants={dropVariant} {...variantProps}>
            <GenerateInnerListItems data={details} />
          </motion.ul>
        </Box>
      )}
    </AnimatePresence>
  );
};

DropDownDetails.propTypes = {
  showDetails: PropTypes.bool,
  addDetailsHeight: PropTypes.func,
};

export default DropDownDetails;
