import { motion, useEffect } from "framer-motion";
import { useVariants } from "./useVariants";
import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import usePageTitle from "./useTitle";

const TransitionBox = ({ children }) => {
  const { pageVariant, variantProps } = useVariants();

  const { pageTitle } = usePageTitle();

  return (
    <>
      <Head>
        <title> {pageTitle}</title>
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
};

export default TransitionBox;

/*
Custom component to do page transitions.

see the file with this same name in portfolio for 
The reason for moving <Head> template</Head>
here !

*/
