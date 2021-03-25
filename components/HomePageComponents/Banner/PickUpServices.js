import React from "react";
import { PickUpBox, Header, Btn } from "./styled";
import { useVariants } from "../../useVariants";
import { motion } from "framer-motion";

const PickUpServices = ({ show }) => {
  const { slideFromLeft, variantProps } = useVariants();
  return (
    <>
      {show && (
        <motion.div variants={slideFromLeft} {...variantProps}>
          <PickUpBox showContents={show}>
            <Header> Pick Up Services </Header>
            <Header md as="h2">
              We Deliver in two hours
            </Header>
            <Btn>read more</Btn>
          </PickUpBox>
        </motion.div>
      )}
    </>
  );
};

export default PickUpServices;
