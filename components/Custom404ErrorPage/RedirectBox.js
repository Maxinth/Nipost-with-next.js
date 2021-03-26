import React from "react";
import Link from "next/link";
import { Anchor } from "./styled";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";

const RedirectBox = () => {
  const { variantProps, cardHover: btnHover } = useVariants();
  return (
    <motion.div variants={btnHover} {...variantProps} whileHover="hover">
      <Link href="/">
        <Anchor>Go back to home page</Anchor>
      </Link>
    </motion.div>
  );
};

export default RedirectBox;
