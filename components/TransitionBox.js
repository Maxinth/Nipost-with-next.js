import { motion } from "framer-motion";
import { useVariants } from "./useVariants";
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const TransitionBox = ({ children, docTitle = "Nipost" }) => {
  const { pageVariant, variantProps } = useVariants();
  return (
    <>
      <Head>
        <title> {docTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div variants={pageVariant(0.5, 0)} {...variantProps}>
        {children}
      </motion.div>
    </>
  );
};

TransitionBox.propTypes = {
  children: PropTypes.object,
  docTitle: PropTypes.string,
};

export default TransitionBox;

/*
Custom component to do page transitions.

*/
